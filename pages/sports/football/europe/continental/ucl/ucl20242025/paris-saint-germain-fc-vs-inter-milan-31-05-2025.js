const matchEvents = [
    {time: "12'", team: "home", type: "goal", player: "Achraf Hakimi", assist: "Désiré Doué", emoji: "⚽"},
    {time: "20'", team: "home", type: "goal", player: "Désiré Doué", assist: "Ousmane Dembélé", emoji: "⚽"},
    {type: "separator", text: "Half Time (2-0)"},
    {time: "54'", team: "away", type: "sub", playerOn: "Yann Bisseck", playerOff: "Benjamin Pavard", emoji: "🔄"},
    {time: "54'", team: "away", type: "sub", playerOn: "Nicola Zalewski", playerOff: "Federico Dimarco", emoji: "🔄"},
    {time: "56'", team: "away", type: "card", player: "Nicola Zalewski", emoji: "🟨"},
    {time: "58'", team: "away", type: "card", player: "Simone Inzaghi", assist: "From the bench", emoji: "🟨"},
    {time: "62'", team: "away", type: "sub", playerOn: "Matteo Darmian", playerOff: "Yann Bisseck", emoji: "🔄"},
    {time: "62'", team: "away", type: "sub", playerOn: "Carlos Augusto", playerOff: "Henrik Mkhitaryan", emoji: "🔄"},
    {time: "63'", team: "home", type: "goal", player: "Désiré Doué", assist: "Vitinha", emoji: "⚽"},
    {time: "65'", team: "home", type: "card", player: "Désiré Doué", emoji: "🟨"},
    {time: "67'", team: "home", type: "sub", playerOn: "Bradley Barcola", playerOff: "Désiré Doué", emoji: "🔄"},
    {time: "69'", team: "away", type: "card", player: "Marcus Thuram", emoji: "🟨"},
    {time: "70'", team: "away", type: "sub", playerOn: "Kristjan Asllani", playerOff: "Hakan Calhanoglu", emoji: "🔄"},
    {time: "71'", team: "away", type: "card", player: "Francesco Acerbi", emoji: "🟨"},
    {time: "73'", team: "home", type: "goal", player: "Khvicha Kvaratskhelia", assist: "Ousmane Dembélé", emoji: "⚽"},
    {time: "78'", team: "home", type: "sub", playerOn: "Lucas Hernández", playerOff: "Nuno Mendes", emoji: "🔄"},
    {time: "84'", team: "home", type: "sub", playerOn: "Gonçalo Ramos", playerOff: "Khvicha Kvaratskhelia", emoji: "🔄"},
    {time: "84'", team: "home", type: "sub", playerOn: "Warren Zaire-Emery", playerOff: "João Neves", emoji: "🔄"},
    {time: "84'", team: "home", type: "sub", playerOn: "Senny Mayulu", playerOff: "Fabián Ruiz", emoji: "🔄"},
    {time: "86'", team: "home", type: "goal", player: "Senny Mayulu", assist: "Bradley Barcola", emoji: "⚽"},
    {time: "90'", team: "home", type: "card", player: "Achraf Hakimi", emoji: "🟨"},
    {type: "separator", text: "Full Time (5-0)" }
];

const matchInfo = {
    date: "May 31, 2025",
    time: "21:00 CET",
    referee: "Istvan Kovacs",
    venue: "Allianz Arena, Munich",
    attendance: "64,327"
};

const lineupData = {
    home: {
        team: "PSG",
        formation: "4-3-3",
        manager: "Luis Enrique",
        gk: [{ name: "Matvey Safonov", events: [] }],
        df: [
            { name: "Achraf Hakimi", events: ["⚽", "🟨"] },
            { name: "Marquinhos", events: [] },
            { name: "Willian Pacho", events: [] },
            { name: "Nuno Mendes", events: ["🔄"] }
        ],
        mf: [
            { name: "Vitinha", events: ["🅰️"] },
            { name: "João Neves", events: ["🔄"] },
            { name: "Fabián Ruiz", events: ["🔄"] }
        ],
        fw: [
            { name: "Ousmane Dembélé", events: ["🅰️", "🅰️"] },
            { name: "Khvicha Kvaratskhelia", events: ["⚽", "🔄"] },
            { name: "Désiré Doué", events: ["⚽", "⚽", "🅰️", "🟨", "🔄"] }
        ],
        subs: [
            { name: "Bradley Barcola", events: ["🅰️"] },
            { name: "Senny Mayulu", events: ["⚽"] },
            { name: "Warren Zaïre-Emery", events: [] }
        ],
        bench: [
            { name: "Arnau Tenas", events: [] },
            { name: "Milan Škriniar", events: [] }
        ],
        missing: [
            { name: "Lucas Beraldo", events: ["🚫 Suspended"] },
            { name: "Lucas Hernández", events: ["🚑 Injured"] }
        ]
    },
    away: {
        team: "Inter Milan",
        formation: "3-5-2",
        manager: "Simone Inzaghi",
        gk: [{ name: "Yann Sommer", events: [] }],
        df: [
            { name: "Benjamin Pavard", events: ["🔄"] },
            { name: "Francesco Acerbi", events: ["🟨"] },
            { name: "Alessandro Bastoni", events: [] }
        ],
        mf: [
            { name: "Matteo Darmian", events: [] },
            { name: "Nicolò Barella", events: [] },
            { name: "Hakan Çalhanoğlu", events: ["🔄"] },
            { name: "Henrikh Mkhitaryan", events: ["🔄"] },
            { name: "Federico Dimarco", events: ["🔄"] }
        ],
        fw: [
            { name: "Marcus Thuram", events: ["🟨"] },
            { name: "Lautaro Martínez", events: [] }
        ],
        subs: [
            { name: "Yann Bisseck", events: ["🔄"] },
            { name: "Nicola Zalewski", events: ["🟨", "🔄"] },
            { name: "Carlos Augusto", events: [] }
        ],
        bench: [
            { name: "Josep Martínez", events: [] },
            { name: "Davide Frattesi", events: [] }
        ],
        missing: []
    }
};

function renderLineups() {
    const container = document.getElementById('lineups-container');
    if (!container) return;

    const h = lineupData.home;
    const a = lineupData.away;
    let html = '<div class="lineups-grid">';

    // Row 1: Team Headers
    html += `<div class="team-header"><h4>${h.team}</h4></div>`;
    html += `<div class="team-header"><h4>${a.team}</h4></div>`;

    // Interleave the groups so they align horizontally in the grid
    html += renderSimpleGroup("Formation", h.formation);
    html += renderSimpleGroup("Formation", a.formation);

    html += renderSimpleGroup("Manager", h.manager);
    html += renderSimpleGroup("Manager", a.manager);

    html += renderPlayerGroup("Goalkeeper", h.gk);
    html += renderPlayerGroup("Goalkeeper", a.gk);

    html += renderPlayerGroup("Defenders", h.df);
    html += renderPlayerGroup("Defenders", a.df);

    html += renderPlayerGroup("Midfielders", h.mf);
    html += renderPlayerGroup("Midfielders", a.mf);

    html += renderPlayerGroup("Attackers", h.fw);
    html += renderPlayerGroup("Attackers", a.fw);

    html += renderPlayerGroup("Substitutes Used", h.subs);
    html += renderPlayerGroup("Substitutes Used", a.subs);

    html += renderPlayerGroup("Bench", h.bench);
    html += renderPlayerGroup("Bench", a.bench);

    // Only show Missing section if at least one team has missing players
    if (h.missing.length > 0 || a.missing.length > 0) {
        html += renderPlayerGroup("Missing", h.missing);
        html += renderPlayerGroup("Missing", a.missing);
    }

    html += '</div>';
    container.innerHTML = html;
}

function renderSimpleGroup(label, value) {
    return `
        <div class="lineup-group">
            <span class="lineup-label">${label}</span>
            <div class="player-row">
                <span class="player-name">${value || '-'}</span>
            </div>
        </div>`;
}

function renderPlayerGroup(label, players) {
    return `
        <div class="lineup-group">
            <span class="lineup-label">${label}</span>
            ${players.length > 0 ? players.map(p => `
                <div class="player-row">
                    <span class="player-name">${p.name}</span>
                    <div class="player-events">${p.events.join('')}</div>
                </div>
            `).join('') : '<div class="player-row"><span class="player-name" style="opacity: 0.5;">-</span></div>'}
        </div>`;
}

function renderMatchInfo() {
    const container = document.getElementById('match-info-container');
    if (!container) return;

    const data = [
        { label: "Date & Time", value: (matchInfo.date && matchInfo.time) ? `${matchInfo.date}<br>${matchInfo.time}` : (matchInfo.date || matchInfo.time), icon: "📅" },
        { label: "Referee", value: matchInfo.referee, icon: "⚖️" },
        { label: "Venue", value: matchInfo.venue, icon: "🏟️" },
        { label: "Attendance", value: matchInfo.attendance, icon: "👥" }
    ];

    container.innerHTML = `
        <div class="match-info-grid">
            ${data.filter(item => item.value).map(item => `
                <div class="info-item">
                    <div class="info-icon">${item.icon}</div>
                    <div class="info-content">
                        <span class="info-label">${item.label}</span>
                        <span class="info-value">${item.value}</span>
                    </div>
                </div>
            `).join('')}
        </div>`;
}

function renderMatchEvents() {
    const container = document.getElementById('match-events-container');
    if (!container) return;

    let html = '<div class="match-events-timeline">';
    
    matchEvents.forEach(event => {
        if (event.type === 'separator') {
            html += `<div class="timeline-separator"><span>${event.text}</span></div>`;
            return;
        }

        const isSub = event.type === 'sub';
        let nameClass = 'event-player';
        
        if (isSub) nameClass = 'event-player-on';
        if (event.emoji === '🟨') nameClass = 'event-player-yellow';
        if (event.emoji === '🟥') nameClass = 'event-player-red';
        
        html += `
            <div class="match-event ${event.team} event-type-${event.type}">
                <div class="event-info">
                    <div class="event-main">
                        <span class="event-emoji">${event.emoji}</span>
                        <div class="player-stack">
                            <span class="${nameClass}">${isSub ? event.playerOn : event.player}</span>
                            ${event.assist ? `<span class="event-assist">${event.assist}</span>` : ''}
                            ${event.playerOff ? `<span class="event-player-off">${event.playerOff}</span>` : ''}
                        </div>
                    </div>
                </div>
                <span class="event-time">${event.time}</span>
            </div>`;
    });

    html += '</div>';
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderMatchEvents();
    renderMatchInfo();
    renderLineups();

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function activateTab(tabId) {
        // Update buttons
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
        // Update content panes
        tabPanes.forEach(pane => {
            pane.classList.toggle('active', pane.id === tabId);
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.dataset.tab));
    });
});