// Base path for event icons
const EVENT_ICONS_BASE_PATH = '../../../../../../../images/icons/sports/football/';

// Helper function to map emojis to image paths
function getEventIconPath(emoji) {
    switch (emoji) {
        case 'goal': return `${EVENT_ICONS_BASE_PATH}goal.webp`;
        case 'sub': return `${EVENT_ICONS_BASE_PATH}substitution.webp`;
        case 'yellow': return `${EVENT_ICONS_BASE_PATH}yellow-card.webp`;
        case 'red': return `${EVENT_ICONS_BASE_PATH}red-card.webp`;
        case 'assist': return `${EVENT_ICONS_BASE_PATH}assist.webp`;
        case 'suspended': return `${EVENT_ICONS_BASE_PATH}suspended.webp`;
        case 'injured': return `${EVENT_ICONS_BASE_PATH}injured.webp`;
        case 'subbed-on': return `${EVENT_ICONS_BASE_PATH}subbed-on.webp`;
        case 'subbed-off': return `${EVENT_ICONS_BASE_PATH}subbed-off.webp`;
        case 'captain': return `${EVENT_ICONS_BASE_PATH}captain.webp`;
        default: return '';
    }
}

const matchEvents = [
    {time: "12'", team: "home", type: "goal", player: "Achraf Hakimi", assist: "Désiré Doué", emoji: "goal"},
    {time: "20'", team: "home", type: "goal", player: "Désiré Doué", assist: "Ousmane Dembélé", emoji: "goal"},
    {type: "separator", text: "Half Time (2-0)"},
    {time: "54'", team: "away", type: "sub", playerOn: "Yann Bisseck", playerOff: "Benjamin Pavard", emoji: "sub"},
    {time: "54'", team: "away", type: "sub", playerOn: "Nicola Zalewski", playerOff: "Federico Dimarco", emoji: "sub"},
    {time: "56'", team: "away", type: "card", player: "Nicola Zalewski", emoji: "yellow"},
    {time: "58'", team: "away", type: "card", player: "Simone Inzaghi", assist: "From the bench", emoji: "yellow"},
    {time: "62'", team: "away", type: "sub", playerOn: "Matteo Darmian", playerOff: "Yann Bisseck", emoji: "sub"},
    {time: "62'", team: "away", type: "sub", playerOn: "Carlos Augusto", playerOff: "Henrik Mkhitaryan", emoji: "sub"},
    {time: "63'", team: "home", type: "goal", player: "Désiré Doué", assist: "Vitinha", emoji: "goal"},
    {time: "65'", team: "home", type: "card", player: "Désiré Doué", emoji: "yellow"},
    {time: "67'", team: "home", type: "sub", playerOn: "Bradley Barcola", playerOff: "Désiré Doué", emoji: "sub"},
    {time: "69'", team: "away", type: "card", player: "Marcus Thuram", emoji: "yellow"},
    {time: "70'", team: "away", type: "sub", playerOn: "Kristjan Asllani", playerOff: "Hakan Calhanoglu", emoji: "sub"},
    {time: "71'", team: "away", type: "card", player: "Francesco Acerbi", emoji: "yellow"},
    {time: "73'", team: "home", type: "goal", player: "Khvicha Kvaratskhelia", assist: "Ousmane Dembélé", emoji: "goal"},
    {time: "78'", team: "home", type: "sub", playerOn: "Lucas Hernández", playerOff: "Nuno Mendes", emoji: "sub"},
    {time: "84'", team: "home", type: "sub", playerOn: "Gonçalo Ramos", playerOff: "Khvicha Kvaratskhelia", emoji: "sub"},
    {time: "84'", team: "home", type: "sub", playerOn: "Warren Zaire-Emery", playerOff: "João Neves", emoji: "sub"},
    {time: "84'", team: "home", type: "sub", playerOn: "Senny Mayulu", playerOff: "Fabián Ruiz", emoji: "sub"},
    {time: "86'", team: "home", type: "goal", player: "Senny Mayulu", assist: "Bradley Barcola", emoji: "goal"},
    {time: "90'", team: "home", type: "card", player: "Achraf Hakimi", emoji: "yellow"},
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
        gk: [{ name: "<a href='../../../../../football/players/gianluigi-donnarumma.html'>Gianluigi Donnarumma</a>", events: [] }],
        df: [
            { name: "<a href='../../../../../football/players/achraf-hakimi.html'>Achraf Hakimi</a>", events: ["goal", "yellow"] },
            { name: "<a href='../../../../../football/players/marcos-aoas-correa.html'>Marquinhos</a>", events: ["captain"] },
            { name: "<a href='../../../../../football/players/willian-joel-pacho-tenorio.html'>Willian Pacho</a>", events: [] },
            { name: "<a href='../../../../../football/players/nuno-alexandre-tavares-mendes.html'>Nuno Mendes</a>", events: ["subbed-off"] }
        ],
        mf: [
            { name: "<a href='../../../../../football/players/joao-pedro-goncalves-neves.html'>João Neves</a>", events: ["subbed-off"] },
            { name: "<a href='../../../../../football/players/vitor-machado-ferreira.html'>Vitinha</a>", events: ["assist"] },
            { name: "<a href='../../../../../football/players/fabian-ruiz-pena.html'>Fabián Ruiz</a>", events: ["subbed-off"] }
        ],
        fw: [
            { name: "<a href='../../../../../football/players/desire-nonka-maho-doue.html'>Désiré Doué</a>", events: ["goal", "goal", "assist", "yellow", "subbed-off"] },
            { name: "<a href='../../../../../football/players/masour-ousmane-dembele.html'>Ousmane Dembélé</a>", events: ["assist", "assist"] },
            { name: "<a href='../../../../../football/players/khvicha-kvaratskhelia.html'>Khvicha Kvaratskhelia</a>", events: ["goal", "subbed-off"] }
        ],
        subs: [
            { name: "<a href='../../../../../football/players/bradley-jean-manuel-essolisam-addo-barcola.html'>Bradley Barcola</a>", events: ["assist", "subbed-on"] },
            { name: "<a href='../../../../../football/players/lucas-francois-bernard-hernandez.html'>Lucas Hernández</a>", events: ["subbed-on"] },
            { name: "<a href='../../../../../football/players/goncalo-matias-ramos.html'>Gonçalo Ramos</a>", events: ["subbed-on"] },
            { name: "<a href='../../../../../football/players/warren-marie-jean-pierre-zaire-emery.html'>Warren Zaïre-Emery</a>", events: ["subbed-on"] },
            { name: "<a href='../../../../../football/players/senny-nsona-mayulu.html'>Senny Mayulu</a>", events: ["goal", "subbed-on"] }
        ],
        bench: [
            { name: "<a href='../../../../../football/players/matvey-evgenyevich-safonov.html'>Matvey Safonov</a>", events: [] },
            { name: "<a href='../../../../../football/players/arnau-tenas-urena.html'>Arnau Tenas</a>", events: [] },
            { name: "<a href='../../../../../football/players/presnel-kimpembe.html'>Presnel Kimpembe</a>", events: [] },
            { name: "<a href='../../../../../football/players/lucas-lopes-beraldo.html'>Lucas Beraldo</a>", events: [] },
            { name: "<a href='../../../../../football/players/kang-in-lee.html'>Kang-in Lee</a>", events: [] }
        ],
        missing: []
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
                    <div class="player-events">${p.events.map(eventItem => {
                        const iconPath = getEventIconPath(eventItem);
                        if (iconPath) {
                            return `<img src="${iconPath}" alt="${eventItem}" class="player-event-icon">`;
                        } else {
                            return `<span class="player-event-text">${eventItem}</span>`;
                        }
                    }).join('')}</div>
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
        if (event.emoji === 'yellow') nameClass = 'event-player-yellow';
        if (event.emoji === 'red') nameClass = 'event-player-red';
        
        html += `
            <div class="match-event ${event.team} event-type-${event.type}">
                <div class="event-info">
                    <div class="event-main">
                        <span class="event-emoji"><img src="${getEventIconPath(event.emoji)}" alt="${event.emoji}"></span>
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