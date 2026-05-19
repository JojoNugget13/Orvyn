// Universal Wiki JavaScript
// Main functionality for the homepage

// Navigation function
function navigateTo(page) {
    window.location.href = page;
}

// Global search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Use event delegation for the search bar since it's in the dynamic navbar
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'searchBtn') performSearch();
    });

    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target && e.target.id === 'globalSearch') {
            performSearch();
        }
    });

    // Initialize the page and 404 handler
    initializePage();
    initLinkInterceptor();
});

// Perform search across all categories
function performSearch() {
    const searchInput = document.getElementById('globalSearch');
    if (!searchInput) return;
    
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        alert('Please enter a search term');
        return;
    }

    // Determine path prefix based on current location
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    const pagesIndex = parts.indexOf('pages');
    let rootPrefix = '';
    if (pagesIndex !== -1) {
        rootPrefix = '../'.repeat(parts.length - pagesIndex - 1);
    }

    // Redirect to search page with query
    window.location.href = `${rootPrefix}pages/components/search.html?q=${encodeURIComponent(query)}`;
}

/**
 * Intercepts internal link clicks to handle custom 404 redirection.
 * This allows the custom 404 page to work even without server configuration.
 */
function initLinkInterceptor() {
    document.addEventListener('click', async (e) => {
        const link = e.target.closest('a');
        if (!link || !link.href || link.href.startsWith('#') || link.href.startsWith('javascript:')) return;

        const targetUrl = new URL(link.href, window.location.href);
        const currentUrl = new URL(window.location.href);

        // Only handle internal links that aren't target=_blank
        if (targetUrl.origin === currentUrl.origin && link.target !== '_blank') {
            if (targetUrl.pathname.endsWith('404.html') || targetUrl.hash) return;

            try {
                const response = await fetch(targetUrl.href, { method: 'HEAD' });
                if (response.status === 404) {
                    e.preventDefault();
                    const parts = window.location.pathname.split('/').filter(Boolean);
                    const pagesIndex = parts.indexOf('pages');
                    let depth = 0;
                    if (pagesIndex !== -1) {
                        depth = parts.length - pagesIndex - 1;
                    }
                    const rootPrefix = '../'.repeat(depth);
                    window.location.href = `${rootPrefix}pages/components/404.html`;
                }
            } catch (err) {
                console.error('Error checking link existence:', err);
                // If fetch fails (e.g., network error, CORS for file://), assume it's a broken link and redirect to 404.
                e.preventDefault();
                const parts = window.location.pathname.split('/').filter(Boolean);
                const pagesIndex = parts.indexOf('pages');
                let depth = 0;
                if (pagesIndex !== -1) {
                    depth = parts.length - pagesIndex - 1;
                }
                const rootPrefix = '../'.repeat(depth);
                window.location.href = `${rootPrefix}pages/components/404.html`;
            }
        }
    });
}

// Initialize page with stats and data
function initializePage() {
    updateStats();
    loadRecentActivity();
    initImagePreview();
}

// Update statistics on homepage
function updateStats() {
    // Calculate total pages
    const totalPages = calculateTotalPages();
    
    // Calculate total images
    const totalImages = calculateTotalImages();

    const totalPagesEl = document.getElementById('totalPages');
    const totalImagesEl = document.getElementById('totalImages');

    if (!totalPagesEl || !totalImagesEl) return;

    // Try to load from localStorage if available
    const savedStats = localStorage.getItem('wikiStats');
    if (savedStats) {
        const parsed = JSON.parse(savedStats);
        totalPagesEl.textContent = parsed.totalPages || totalPages;
        totalImagesEl.textContent = parsed.totalImages || totalImages;
    } else {
        totalPagesEl.textContent = totalPages;
        totalImagesEl.textContent = totalImages;
    }
}

// Calculate total images
function calculateTotalImages() {
    // This will be updated as images are tracked
    const imageCount = localStorage.getItem('totalImageCount');
    return imageCount ? parseInt(imageCount) : 0;
}

// Load recent activity
function loadRecentActivity() {
    const recentList = document.getElementById('recentList');
    
    if (!recentList) return;
    
    // Try to load from localStorage
    const recentActivity = localStorage.getItem('recentActivity');
    
    if (recentActivity) {
        const activities = JSON.parse(recentActivity);
        
        if (activities.length === 0) {
            recentList.innerHTML = '<p class="empty-state">No recent activity. Start adding items to your wiki!</p>';
            return;
        }

        recentList.innerHTML = '';
        activities.slice(0, 5).forEach(activity => {
            const item = createRecentItem(activity);
            recentList.appendChild(item);
        });
    }
}

// Create recent activity item element
function createRecentItem(activity) {
    const div = document.createElement('div');
    div.className = 'recent-item';
    
    div.innerHTML = `
        <div class="recent-item-info">
            <h5>${activity.title}</h5>
            <p>${activity.category} • ${activity.action}</p>
        </div>
        <div class="recent-item-time">${activity.time}</div>
    `;
    
    return div;
}

// Add new recent activity (to be called when items are added)
function addRecentActivity(title, category, action) {
    const activities = JSON.parse(localStorage.getItem('recentActivity') || '[]');
    
    const newActivity = {
        title: title,
        category: category,
        action: action,
        time: getTimeAgo(new Date()),
        timestamp: new Date().toISOString()
    };
    
    activities.unshift(newActivity);
    
    // Keep only last 10 activities
    if (activities.length > 10) {
        activities.pop();
    }
    
    localStorage.setItem('recentActivity', JSON.stringify(activities));
    loadRecentActivity();
}

// Get relative time (e.g., "2 minutes ago")
function getTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
    
    return date.toLocaleDateString();
}

// Calculate total pages across all categories
function calculateTotalPages() {
    let total = 0;
    
    // Main pages
    total += 1; // index.html
    total += 1; // pages/components/cards.html
    total += 1; // pages/components/games.html
    total += 1; // pages/components/changelog.html
    total += 1; // pages/components/feedback.html
    
    // TCG pages
    total += 1; // pages/tcg/pokemon-tcg.html
    total += 1; // pages/tcg/pokemon-tcg/ascended-heroes.html
    
    // Cards in Ascended Heroes set (295 cards)
    total += 295;
    
    // Games
    total += 1; // Mobile Legends
    
    // Add only specific category data from localStorage
    // TCG cards from other sets
    const tcgGames = ['pokemon', 'yugioh', 'mtg', 'lorcana'];
    tcgGames.forEach(game => {
        const cards = localStorage.getItem(`${game}CardsData`);
        if (cards) {
            try {
                total += JSON.parse(cards).length;
            } catch (e) {}
        }
    });
    
    // Characters (only from charactersData)
    const characters = localStorage.getItem('charactersData');
    if (characters) {
        try {
            total += JSON.parse(characters).length;
        } catch (e) {}
    }
    
    // Games (only from gamesData)
    const games = localStorage.getItem('gamesData');
    if (games) {
        try {
            total += JSON.parse(games).length;
        } catch (e) {}
    }
    
    // Currencies (only from currenciesData)
    const currencies = localStorage.getItem('currenciesData');
    if (currencies) {
        try {
            total += JSON.parse(currencies).length;
        } catch (e) {}
    }
    
    return total;
}

// Calculate total images
function calculateTotalImages() {
    let total = 0;
    
    // TCG logos (4)
    total += 4; // pokemon, yugioh, mtg, lorcana logos
    
    // Set logos (1)
    total += 1; // ascended-heroes set logo
    
    // Card images from Ascended Heroes (295)
    total += 295;
    
    // Game logos (1)
    total += 1; // Mobile Legends logo
    
    // Add from localStorage tracking
    const imageCount = localStorage.getItem('totalImageCount');
    if (imageCount) {
        total += parseInt(imageCount);
    }
    
    return total;
}

// Global Image Previewer
function initImagePreview() {
    if (document.getElementById('imagePreviewModal')) return;

    const modal = document.createElement('div');
    modal.id = 'imagePreviewModal';
    modal.className = 'image-preview-modal';
    modal.style.display = 'none';
    
    let modalHtml = '<span class="close-preview">&times;</span>';
    modalHtml += '<img class="modal-content" id="previewImg">';
    modal.innerHTML = modalHtml;
    
    document.body.appendChild(modal);

    const previewImg = document.getElementById('previewImg');

    document.addEventListener('click', function(e) {
        const target = e.target;
        if (target.tagName === 'IMG' && !target.classList.contains('no-preview')) {
            modal.style.display = 'flex';
            previewImg.src = target.src;
        }
    });

    modal.addEventListener('click', function(e) {
        if (e.target !== previewImg) {
            modal.style.display = 'none';
        }
    });
}

// Example function to test adding activity (for development)
function testAddActivity() {
    addRecentActivity('Pikachu', 'Characters', 'Added');
    updateTotalItems();
}

// Utility: Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility: Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Console message for developers
console.log('%c🎴 Project Ello', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to your wiki! Data is stored in localStorage.', 'color: #8b5cf6; font-size: 14px;');
console.log('%cTip: Use testAddActivity() to test recent activity feature', 'color: #10b981; font-size: 12px;');
