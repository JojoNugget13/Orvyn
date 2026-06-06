/**
 * UCL Final 2024/25: PSG vs Inter Milan
 * Handles match events rendering and tab switching.
 */

const matchEvents = [
    { time: "12'", team: "home", type: "goal", player: "Ousmane Dembélé", assist: "Achraf Hakimi", emoji: "⚽" },
    { time: "28'", team: "away", type: "card", player: "Nicolò Barella", emoji: "🟥" },
    { type: "separator", text: "Half Time (1-0)" },
    { time: "55'", team: "home", type: "goal", player: "Achraf Hakimi", assist: "Vitinha", emoji: "⚽" },
    { time: "62'", team: "home", type: "sub", playerOn: "Bradley Barcola", playerOff: "Randal Kolo Muani", emoji: "🔄" },
    { time: "88'", team: "home", type: "goal", player: "Bradley Barcola", assist: "Warren Zaïre-Emery", emoji: "⚽" },
    { type: "separator", text: "Full Time (5-0)" }
];

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
            <div class="match-event ${event.team}">
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