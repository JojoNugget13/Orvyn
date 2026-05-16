// Pokémon TCG page JavaScript

let currentView = 'grid';

document.addEventListener('DOMContentLoaded', function() {
    initializePokemonPage();
});

function initializePokemonPage() {
    setupSearch();
    setupSort();
    // Default view is grid
    switchView('grid');
}

// Switch between grid and list view
function switchView(view) {
    currentView = view;
    const container = document.getElementById('setsContainer');
    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');

    if (view === 'grid') {
        container.className = 'sets-grid';
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    } else {
        container.className = 'sets-list';
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    }
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('setSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            filterSets(query);
        });
    }
}

// Filter sets based on search
function filterSets(query) {
    const sets = document.querySelectorAll('.set-card');
    
    sets.forEach(set => {
        const title = set.querySelector('h3').textContent.toLowerCase();
        
        if (title.includes(query)) {
            set.style.display = '';
        } else {
            set.style.display = 'none';
        }
    });
}

// Setup sort functionality
function setupSort() {
    const sortSelect = document.getElementById('sortBy');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const sortType = e.target.value;
            sortSets(sortType);
        });
    }
}

// Sort sets (placeholder for when you have multiple sets)
function sortSets(sortType) {
    const container = document.getElementById('setsContainer');
    const sets = Array.from(container.querySelectorAll('.set-card'));
    
    // Sorting logic will be implemented when you have multiple sets
    console.log('Sorting by:', sortType);
}

console.log('⚡ Pokémon TCG page loaded');