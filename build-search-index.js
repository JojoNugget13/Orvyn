// ============================================================
//  build-search-index.js  –  Project Ello
//
//  Run from your PROJECT ROOT:
//    node build-search-index.js
//
//  Crawls every .html file in your project, reads its
//  <title> and <meta name="description">, and writes
//  search-index.json to the project root.
//
//  Re-run this whenever you add or rename pages.
// ============================================================

const fs   = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────

// Folders to skip entirely
const EXCLUDE_DIRS = ['node_modules', '.git', '.vscode', 'dist', 'build'];

// Files to skip
const EXCLUDE_FILES = ['404.html', 'index.html'];   // add any you don't want indexed

// Map folder names → human-readable category labels
const CATEGORY_MAP = {
    'games':      'Games',
    'mlbb':       'MLBB',
    'heroes':     'Heroes',
    'cards':      'Cards',
    'pages':      'Pages',
    'changelog':  'System',
    'pokemon':    'Pokémon',
};

// ── Helpers ───────────────────────────────────────────────────

function getCategory(relPath) {
    const parts = relPath.split(path.sep).slice(0, -1); // folder parts only
    // Return the deepest folder that has a known label, else capitalise the deepest folder
    for (let i = parts.length - 1; i >= 0; i--) {
        const key = parts[i].toLowerCase();
        if (CATEGORY_MAP[key]) return CATEGORY_MAP[key];
    }
    if (parts.length > 0) {
        const last = parts[parts.length - 1];
        return last.charAt(0).toUpperCase() + last.slice(1);
    }
    return 'Page';
}

function extractMeta(html) {
    // <title>
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const rawTitle   = titleMatch ? titleMatch[1].trim() : '';
    // Strip everything after the first  -  |  –  separator
    const title = rawTitle.split(/\s*[-–|]\s*/)[0].trim();

    // <meta name="description" content="...">
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)
                   || html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
    const desc = descMatch ? descMatch[1].trim() : '';

    return { title, desc };
}

// Recursively collect all .html files under `dir`
function collectHtml(dir, rootDir, results = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (EXCLUDE_DIRS.includes(entry.name)) continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            collectHtml(fullPath, rootDir, results);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            if (EXCLUDE_FILES.includes(entry.name)) continue;
            results.push(fullPath);
        }
    }
    return results;
}

// ── Main ──────────────────────────────────────────────────────

const ROOT      = process.cwd();
const OUT_FILE  = path.join(ROOT, 'search-index.json');

console.log(`\n📂 Crawling: ${ROOT}\n`);

const htmlFiles = collectHtml(ROOT, ROOT);
const index     = [];

for (const filePath of htmlFiles) {
    const relPath = path.relative(ROOT, filePath);          // e.g. pages/games/mlbb/heroes/miya.html
    const url     = '/' + relPath.replace(/\\/g, '/');      // root-relative, forward slashes

    const html     = fs.readFileSync(filePath, 'utf8');
    const { title, desc } = extractMeta(html);

    if (!title) {
        console.warn(`  ⚠  No <title> found — skipping ${relPath}`);
        continue;
    }

    const category = getCategory(relPath);
    index.push({ url, title, desc, category });
    console.log(`  ✓  [${category}] ${title}`);
    if (!desc) console.log(`     ⚠  No <meta name="description"> — add one to ${relPath}`);
}

fs.writeFileSync(OUT_FILE, JSON.stringify(index, null, 2), 'utf8');
console.log(`\n✅  Written ${index.length} entries → search-index.json\n`);