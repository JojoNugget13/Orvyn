// Sports and Football page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeSportsPage();
});

function initializeSportsPage() {
    setupSportsSearch();
}

// Logic to retrieve counts for specific sports/regions
function getSportsItemCount(category) {
    let count = 0;
    
    if (category.startsWith('football-')) {
        const sub = category.replace('football-', '');
        const data = localStorage.getItem(`football-${sub}Data`);
        if (data) {
            try { count = JSON.parse(data).length; } catch (e) { count = 0; }
        }
    }
    
    return count;
}

// Setup search functionality (similar to games.js)
function setupSportsSearch() {
    const searchInput = document.getElementById('sportsSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            filterSportsCards(query);
        });
    }
}

function filterSportsCards(query) {
    const cards = document.querySelectorAll('.category-card:not([data-category="custom"])');
    cards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || desc.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Global function used by script.js to aggregate football totals
 */
window.getFootballTotalCount = function() {
    const subs = ['europe', 'south-america', 'africa', 'asia', 'north-america', 'oceania', 'other'];
    return subs.reduce((total, sub) => total + getSportsItemCount(`football-${sub}`), 0);
};

console.log('⚽ Sports logic loaded');