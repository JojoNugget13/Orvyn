/**
 * Search Engine Logic - Orvyn
 * Fetches the site index and filters results based on URL query.
 */

document.addEventListener('DOMContentLoaded', async () => {
    const resultsContainer = document.getElementById('searchResults');
    const queryDisplay = document.getElementById('queryDisplay');
    const statsDisplay = document.getElementById('searchStats');
    
    // 1. Get query from URL (?q=term)
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q')?.toLowerCase().trim();

    if (!query) {
        queryDisplay.textContent = "nothing";
        resultsContainer.innerHTML = '<p class="empty-state">Please enter a search term in the navbar above.</p>';
        return;
    }

    queryDisplay.textContent = `"${query}"`;
    resultsContainer.innerHTML = '<p class="loading-state">Crawling the archives...</p>';

    try {
        // 2. Fetch the generated search index
        // The index is in /js/components/, we are in /pages/components/
        const response = await fetch('../../js/components/search-index.json');
        if (!response.ok) throw new Error('Search index not found. Run build-search-index.js first.');
        
        const index = await response.json();

        // 3. Filter results
        const results = index.filter(item => {
            return (
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                (item.desc && item.desc.toLowerCase().includes(query))
            );
        });

        // 4. Update Stats
        statsDisplay.textContent = `Found ${results.length} result${results.length === 1 ? '' : 's'}`;

        // 5. Render Results
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>No pages match your search. Try different keywords or browse categories on the home page.</p>
                </div>`;
            return;
        }

        resultsContainer.innerHTML = results.map(item => `
            <div class="search-result-card" onclick="location.href='../../${item.url.startsWith('/') ? item.url.slice(1) : item.url}'">
                <div class="result-meta">
                    <span class="result-category">${item.category}</span>
                </div>
                <h3 class="result-title">${item.title}</h3>
                <p class="result-desc">${item.desc || 'No description available for this page.'}</p>
                <span class="result-link">View Page →</span>
            </div>
        `).join('');

    } catch (error) {
        console.error('Search error:', error);
        resultsContainer.innerHTML = `
            <div class="error-state">
                <p>Unable to load search results. Please ensure the search index has been built.</p>
                <small>${error.message}</small>
            </div>`;
    }
});

/**
 * Note: To update the search results, you must run:
 * node build-search-index.js
 * in your terminal every time you add new pages.
 */