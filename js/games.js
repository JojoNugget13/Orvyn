// Games page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeGamesPage();
});

function initializeGamesPage() {
    setupGameSearch();
    setupGameSort();
}

// Setup search functionality
function setupGameSearch() {
    const searchInput = document.getElementById('gameSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            filterGames(query);
        });
    }
}

// Filter games based on search
function filterGames(query) {
    const games = document.querySelectorAll('.game-card');
    
    games.forEach(game => {
        const title = game.querySelector('h3').textContent.toLowerCase();
        const description = game.querySelector('.game-description').textContent.toLowerCase();
        
        if (title.includes(query) || description.includes(query)) {
            game.style.display = '';
        } else {
            game.style.display = 'none';
        }
    });
}

// Setup sort functionality
function setupGameSort() {
    const sortSelect = document.getElementById('sortBy');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const sortType = e.target.value;
            sortGames(sortType);
        });
    }
}

// Sort games
function sortGames(sortType) {
    const container = document.querySelector('.category-grid');
    const games = Array.from(container.querySelectorAll('.game-card'));
    
    games.sort((a, b) => {
        if (sortType === 'name') {
            const nameA = a.querySelector('h3').textContent;
            const nameB = b.querySelector('h3').textContent;
            return nameA.localeCompare(nameB);
        }
        return 0;
    });
    
    games.forEach(game => container.appendChild(game));
}

console.log('🎮 Games page loaded');