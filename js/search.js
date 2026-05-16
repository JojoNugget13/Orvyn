// ============================================================
//  search.js  –  Project Ello
//
//  Loads search-index.json (built by build-search-index.js)
//  and searches entirely in memory — instant at any scale.
// ============================================================

// Path to the index, relative to pages/search.html
const INDEX_PATH = '../search-index.json';

// ── Scoring ───────────────────────────────────────────────────

function score(item, q) {
    const t = item.title.toLowerCase();
    const d = item.desc.toLowerCase();
    const c = item.category.toLowerCase();
    if (t === q)            return 100;
    if (t.startsWith(q))    return 85;
    if (t.includes(q))      return 65;
    if (c.includes(q))      return 40;
    if (d.includes(q))      return 20;
    return 0;
}

// ── Highlight matched text ────────────────────────────────────

function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function highlight(text, query) {
    if (!text || !query) return text || '';
    return text.replace(new RegExp(`(${esc(query)})`, 'gi'), '<mark>$1</mark>');
}

// ── Pretty breadcrumb ─────────────────────────────────────────
// "/pages/games/mlbb/heroes/miya.html" → ["pages", "games", "mlbb", "heroes", "miya"]

function breadcrumbParts(url) {
    return url
        .replace(/^\//, '')
        .replace(/\.html$/, '')
        .split('/');
}

// ── LocalStorage user entries ─────────────────────────────────

function localEntries() {
    const keys = ['charactersData', 'gamesData', 'currenciesData', 'pokemonCardsData'];
    const out  = [];
    keys.forEach(key => {
        const raw = localStorage.getItem(key);
        if (!raw) return;
        try {
            JSON.parse(raw).forEach(item => {
                const title = item.name || item.title || '';
                if (!title) return;
                out.push({
                    url:      '#',
                    title,
                    desc:     item.description || '',
                    category: key.replace('Data', '').replace(/^pokemon/i, 'Pokémon'),
                });
            });
        } catch { /* skip corrupt data */ }
    });
    return out;
}

// ── Render ────────────────────────────────────────────────────

function showSkeleton() {
    const c = document.getElementById('searchResults');
    if (!c) return;
    c.innerHTML = [1, 2, 3].map(() => `
        <div class="result-skeleton">
            <div class="skel-line w30"></div>
            <div class="skel-line w60"></div>
            <div class="skel-line w85"></div>
        </div>`).join('');
}

function setStats(count, query) {
    const el = document.getElementById('searchStats');
    if (!el) return;
    el.innerHTML = count > 0
        ? `<span class="stat-count">${count}</span> result${count === 1 ? '' : 's'} for <span class="stat-query">"${query}"</span>`
        : `No results for <span class="stat-query">"${query}"</span>`;
}

function setQueryLabel(query) {
    const el = document.getElementById('queryDisplay');
    if (el) el.textContent = query ? `"${query}"` : '';
}

function renderEmpty(query) {
    const c = document.getElementById('searchResults');
    if (!c) return;
    c.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📂</div>
            <h3>No results found</h3>
            <p>Nothing matched <strong>"${query}"</strong> in the archives.</p>
            <p class="suggestion">Try searching for a hero name, card set, or page title.</p>
        </div>`;
}

function renderResults(results, query) {
    const c = document.getElementById('searchResults');
    if (!c) return;
    if (results.length === 0) { renderEmpty(query); return; }

    c.innerHTML = '';

    results.forEach((r, i) => {
        const card  = document.createElement('div');
        card.className = 'result-card';
        card.style.animationDelay = `${i * 40}ms`;
        if (r.url !== '#') card.onclick = () => { window.location.href = r.url; };

        const parts  = breadcrumbParts(r.url);
        const crumbs = parts
            .map((p, idx) => idx === parts.length - 1
                ? `<span class="crumb crumb-last">${p}</span>`
                : `<span class="crumb">${p}</span><span class="crumb-sep">›</span>`)
            .join('');

        const catLetter = (r.category || 'P')[0].toUpperCase();

        card.innerHTML = `
            <div class="result-card-top">
                <div class="result-cat-badge">
                    <span class="cat-icon">${catLetter}</span>
                    <span class="cat-label">${r.category}</span>
                </div>
                <div class="result-breadcrumb">${crumbs}</div>
            </div>
            <h3 class="result-title">${highlight(r.title, query)}</h3>
            ${r.desc
                ? `<p class="result-desc">${highlight(r.desc, query)}</p>`
                : `<p class="result-desc result-desc--empty">No description — add a &lt;meta name="description"&gt; to this page.</p>`}
            ${r.url !== '#' ? '<div class="result-arrow">→</div>' : ''}
        `;
        c.appendChild(card);
    });
}

// ── Core search ───────────────────────────────────────────────

let cachedIndex = null;

async function loadIndex() {
    if (cachedIndex) return cachedIndex;
    try {
        const res = await fetch(INDEX_PATH);
        if (!res.ok) throw new Error(`${res.status}`);
        cachedIndex = await res.json();
        console.log(`[search] Loaded ${cachedIndex.length} entries from search-index.json`);
        return cachedIndex;
    } catch (err) {
        console.error('[search] Could not load search-index.json:', err.message);
        console.error('[search] Have you run: node build-search-index.js ?');
        return [];
    }
}

async function executeSearch(rawQuery) {
    const query = rawQuery.trim();
    if (!query) return;

    setQueryLabel(query);
    showSkeleton();

    const [index, local] = await Promise.all([
        loadIndex(),
        Promise.resolve(localEntries()),
    ]);

    const q       = query.toLowerCase();
    const results = [...index, ...local]
        .map(item  => ({ ...item, _score: score(item, q) }))
        .filter(item => item._score > 0)
        .sort((a, b)  => b._score - a._score);

    console.log(`[search] "${query}" → ${results.length} result(s)`);
    setStats(results.length, query);
    renderResults(results, query);
}

// ── Init ──────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) executeSearch(decodeURIComponent(q));
});