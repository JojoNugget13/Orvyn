function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'searchBtn') performSearch();
    });

    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target && e.target.id === 'globalSearch') {
            performSearch();
        }
    });

    initializePage();
    initLinkInterceptor();
});

function performSearch() {
    const searchInput = document.getElementById('globalSearch');
    if (!searchInput) return;
    
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        alert('Please enter a search term');
        return;
    }

    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    const pagesIndex = parts.indexOf('pages');
    let rootPrefix = '';
    if (pagesIndex !== -1) {
        rootPrefix = '../'.repeat(parts.length - pagesIndex - 1);
    }

    window.location.href = `${rootPrefix}pages/components/search.html?q=${encodeURIComponent(query)}`;
}

function initLinkInterceptor() {
    document.addEventListener('click', async (e) => {
        const link = e.target.closest('a');
        if (!link || !link.href || link.href.startsWith('#') || link.href.startsWith('javascript:')) return;

        const targetUrl = new URL(link.href, window.location.href);
        const currentUrl = new URL(window.location.href);

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

function initializePage() {
    updateStats();
    loadRecentActivity();
    initImagePreview();
}

function updateStats() {
    const totalPages = calculateTotalPages();
    const totalImages = calculateTotalImages();

    const totalPagesEl = document.getElementById('totalPages');
    const totalImagesEl = document.getElementById('totalImages');

    if (!totalPagesEl || !totalImagesEl) return;

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

function calculateTotalImages() {
    const imageCount = localStorage.getItem('totalImageCount');
    return imageCount ? parseInt(imageCount) : 0;
}

function loadRecentActivity() {
    const recentList = document.getElementById('recentList');
    
    if (!recentList) return;
    
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
    
    if (activities.length > 10) {
        activities.pop();
    }
    
    localStorage.setItem('recentActivity', JSON.stringify(activities));
    loadRecentActivity();
}

function getTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
    
    return date.toLocaleDateString();
}

function calculateTotalPages() {
    let total = 0;
    
    total += 1;
    total += 1;
    total += 1;
    total += 1;
    total += 1;
    total += 1;
    total += 1;
    total += 295;
    total += 1;

    const tcgGames = ['pokemon', 'yugioh', 'mtg', 'lorcana'];
    tcgGames.forEach(game => {
        const cards = localStorage.getItem(`${game}CardsData`);
        if (cards) {
            try {
                total += JSON.parse(cards).length;
            } catch (e) {}
        }
    });
    
    const characters = localStorage.getItem('charactersData');
    if (characters) {
        try {
            total += JSON.parse(characters).length;
        } catch (e) {}
    }
    
    const games = localStorage.getItem('gamesData');
    if (games) {
        try {
            total += JSON.parse(games).length;
        } catch (e) {}
    }
    
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

function testAddActivity() {
    addRecentActivity('Pikachu', 'Characters', 'Added');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

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

/**
 * Initialize live filtering for any page
 * Usage: initLiveFilter('globalSearch', '.category-card', 'h4', 'p')
 */
function initLiveFilter(inputId, cardSelector, titleSelector = 'h4', descSelector = 'p') {
    const searchInput = document.getElementById(inputId);
    const cards = document.querySelectorAll(cardSelector);

    if (!searchInput || cards.length === 0) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector(titleSelector)?.textContent.toLowerCase() || '';
            const desc = card.querySelector(descSelector)?.textContent.toLowerCase() || '';
            const matches = title.includes(searchTerm) || desc.includes(searchTerm);
            
            card.style.display = matches ? 'block' : 'none';
            if (matches) visibleCount++;
        });
    });

    // Prevent Enter key from triggering global search
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') e.preventDefault();
    });
}