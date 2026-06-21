/**
 * PSG Club Page Logic
 * Handles Tab switching and Data population
 */

const clubData = {
    squads: {
        "2024-25": [
            { pos: "GK", name: "Gianluigi Donnarumma", age: 26, nat: "Italy", number: 99 },
            { pos: "DF", name: "Marquinhos", age: 31, nat: "Brazil", number: 5 },
            { pos: "DF", name: "Achraf Hakimi", age: 26, nat: "Morocco", number: 2 },
            { pos: "DF", name: "Nuno Mendes", age: 22, nat: "Portugal", number: 25 },
            { pos: "MF", name: "Vitinha", age: 25, nat: "Portugal", number: 17 },
            { pos: "MF", name: "João Neves", age: 20, nat: "Portugal", number: 8 },
            { pos: "FW", name: "Ousmane Dembélé", age: 28, nat: "France", number: 10 },
            { pos: "FW", name: "Bradley Barcola", age: 22, nat: "France", number: 29 }
        ],
        "2023-24": [
            { pos: "GK", name: "Gianluigi Donnarumma", age: 25, nat: "Italy", number: 99 },
            { pos: "DF", name: "Marquinhos", age: 30, nat: "Brazil", number: 5 },
            { pos: "DF", name: "Milan Škriniar", age: 29, nat: "Slovakia", number: 37 },
            { pos: "MF", name: "Manuel Ugarte", age: 23, nat: "Uruguay", number: 4 },
            { pos: "MF", name: "Warren Zaïre-Emery", age: 18, nat: "France", number: 33 },
            { pos: "FW", name: "Kylian Mbappé", age: 25, nat: "France", number: 7 },
            { pos: "FW", name: "Randal Kolo Muani", age: 25, nat: "France", number: 26 }
        ]
    },
    trophies: [
        { title: "Ligue 1", count: 12, years: "1985–86, 1993–94, 2012–13, 2013–14, 2014–15, 2015–16, 2017–18, 2018–19, 2019–20, 2021–22, 2022–23, 2023–24" },
        { title: "Coupe de France", count: 15, years: "1981–82, 1982–83, 1992–93, 1994–95, 1997–98, 2003–04, 2005–06, 2009–10, 2014–15, 2015–16, 2016–17, 2017–18, 2019–20, 2020–21, 2023–24" },
        { title: "UEFA Cup Winners' Cup", count: 1, years: "1995–96" }
    ]
};

function renderSquad(year = "2024-25") {
    const container = document.getElementById('squad-container');
    if (!container) return;
    
    const squad = clubData.squads[year] || [];

    container.innerHTML = `
        <div class="table-wrapper">
            <table class="wiki-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Player</th>
                        <th>Age</th>
                        <th>Nat</th>
                        <th>Shirt No.</th>
                    </tr>
                </thead>
                <tbody>
                    ${squad.map(p => `
                        <tr>
                            <td><strong>${p.pos}</strong></td>
                            <td>${p.name}</td> 
                            <td>${p.age}</td>
                            <td>${p.nat}</td>
                            <td>${p.number || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderTrophies() {
    const container = document.getElementById('trophies-container');
    if (!container) return;
    
    container.innerHTML = clubData.trophies.map(t => `
        <div class="story-card" style="margin-bottom: 1rem; border-left: 3px solid #f59e0b;">
            <h4 style="margin-bottom: 0.5rem; color: #f59e0b;">${t.title} (${t.count})</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.4;">${t.years}</p>
        </div>
    `).join('');
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function activateTab(tabId) {
        tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
        tabPanes.forEach(pane => pane.classList.toggle('active', pane.id === tabId));
        localStorage.setItem('activeClubTab', tabId);
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            activateTab(btn.dataset.tab);
        });
    });

    // Restore last active tab
    const savedTab = localStorage.getItem('activeClubTab') || 'details';
    activateTab(savedTab);
}

function initSquadDropdown() {
    const btn = document.getElementById('squadYearBtn');
    const menu = document.getElementById('squadYearMenu');
    const display = document.getElementById('currentYearDisplay');

    if (!btn || !menu) return;

    // Dynamically populate options from squad data keys
    const seasons = Object.keys(clubData.squads).sort().reverse();
    
    menu.innerHTML = seasons.map(year => 
        `<div class="nav-profile-item" data-value="${year}">${year}</div>`
    ).join('');

    // Toggle dropdown
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
        btn.classList.toggle('active');
    });

    // Handle selection
    menu.querySelectorAll('.nav-profile-item').forEach(item => {
        item.addEventListener('click', () => {
            const year = item.dataset.value;
            display.textContent = item.textContent;
            menu.classList.remove('show');
            btn.classList.remove('active');
            renderSquad(year);
        });
    });

    // Initial render based on the first available option
    if (seasons.length > 0) {
        display.textContent = `${seasons[0]} Season`;
        renderSquad(seasons[0]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("⚽ PSG Club Wiki Loaded");
    initTabs();
    renderTrophies();
    initSquadDropdown();
});