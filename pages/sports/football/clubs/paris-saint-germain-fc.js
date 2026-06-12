const squadData = {
    gk: [
        { name: "Gianluigi Donnarumma", nationality: "🇮🇹" },
        { name: "Matvey Safonov", nationality: "🇷🇺" },
        { name: "Arnau Tenas", nationality: "🇪🇸" }
    ],
    df: [
        { name: "Marquinhos", nationality: "🇧🇷", captain: true },
        { name: "Achraf Hakimi", nationality: "🇲🇦" },
        { name: "Willian Pacho", nationality: "🇪🇨" },
        { name: "Nuno Mendes", nationality: "🇵🇹" },
        { name: "Lucas Hernández", nationality: "🇫🇷" },
        { name: "Presnel Kimpembe", nationality: "🇫🇷" },
        { name: "Lucas Beraldo", nationality: "🇧🇷" }
    ],
    mf: [
        { name: "Vitinha", nationality: "🇵🇹" },
        { name: "Warren Zaïre-Emery", nationality: "🇫🇷" },
        { name: "João Neves", nationality: "🇵🇹" },
        { name: "Fabián Ruiz", nationality: "🇪🇸" },
        { name: "Kang-in Lee", nationality: "🇰🇷" },
        { name: "Senny Mayulu", nationality: "🇫🇷" }
    ],
    fw: [
        { name: "Ousmane Dembélé", nationality: "🇫🇷" },
        { name: "Bradley Barcola", nationality: "🇫🇷" },
        { name: "Gonçalo Ramos", nationality: "🇵🇹" },
        { name: "Khvicha Kvaratskhelia", nationality: "🇬🇪" },
        { name: "Désiré Doué", nationality: "🇫🇷" }
    ]
};

const trophyData = [
    { name: "Ligue 1", count: 12, icon: "🏆" },
    { name: "Coupe de France", count: 15, icon: "🇫🇷" },
    { name: "Trophée des Champions", count: 12, icon: "⚡" },
    { name: "Cup Winners' Cup", count: 1, icon: "🌍" }
];

function renderSquad() {
    const container = document.getElementById('squad-container');
    if (!container) return;

    let html = '';
    const sections = [
        { label: "Goalkeepers", key: "gk" },
        { label: "Defenders", key: "df" },
        { label: "Midfielders", key: "mf" },
        { label: "Forwards", key: "fw" }
    ];

    sections.forEach(section => {
        html += `<div class="lineup-group" style="margin-bottom: 2rem;">
            <span class="lineup-label">${section.label}</span>`;
        squadData[section.key].forEach(player => {
            html += `
                <div class="player-row">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 1.2rem;">${player.nationality}</span>
                        <span class="player-name">${player.name}</span>
                        ${player.captain ? '<span class="player-event-text" style="background: var(--primary-color); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.6rem; font-weight: 800; margin-left: 10px;">CAPTAIN</span>' : ''}
                    </div>
                </div>`;
        });
        html += `</div>`;
    });
    container.innerHTML = html;
}

function renderTrophies() {
    const container = document.getElementById('trophies-container');
    if (!container) return;
    let html = '<div class="role-grid">';
    trophyData.forEach(trophy => {
        html += `<div class="role-card">
            <div class="role-icon">${trophy.icon}</div>
            <h4>${trophy.name}</h4>
            <p>${trophy.count} Titles</p>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderSquad();
    renderTrophies();

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
            tabPanes.forEach(p => p.classList.toggle('active', p.id === tabId));
        });
    });
});