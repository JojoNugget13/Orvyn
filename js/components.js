// Component Loader for Orvyn - FIXED VERSION

// Helper to get the relative prefix to the root directory
function getRootPrefix() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    const pagesIndex = parts.indexOf('pages');
    
    let depth = 0;
    if (pagesIndex !== -1) {
        depth = parts.length - pagesIndex - 1;
    }
    return '../'.repeat(depth);
}

// Get the correct path to home based on current location
function getHomePath() {
    return getRootPrefix() + 'index.html';
}

// Get the correct path to login based on current location
function getLoginPath() {
    return getRootPrefix() + 'pages/components/login.html';
}

// Get the correct path to components based on current location
function getComponentPath() {
    return getRootPrefix() + 'pages/components/';
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
}

// Get current user
function getCurrentUser() {
    const userData = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
}

// Load navbar component
async function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) {
        console.warn('⚠️ navbar-placeholder not found');
        return;
    }
    
    const componentPath = getComponentPath();
    console.log('📍 Loading navbar from:', componentPath + 'navbar.html');
    
    try {
        const response = await fetch(componentPath + 'navbar.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        navbarPlaceholder.innerHTML = html;
        
        // Update navbar based on login status
        updateNavbar();
        console.log('✅ Navbar loaded successfully');
    } catch (error) {
        console.error('❌ Error loading navbar:', error);
        console.error('   Tried path:', componentPath + 'navbar.html');
        console.error('   Full URL:', window.location.origin + '/' + componentPath + 'navbar.html');
    }
}

// Load footer component
async function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) {
        console.warn('⚠️ footer-placeholder not found');
        return;
    }
    
    const componentPath = getComponentPath();
    console.log('📍 Loading footer from:', componentPath + 'footer.html');
    
    try {
        const response = await fetch(componentPath + 'footer.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        footerPlaceholder.innerHTML = html;
        console.log('✅ Footer loaded successfully');
    } catch (error) {
        console.error('❌ Error loading footer:', error);
        console.error('   Tried path:', componentPath + 'footer.html');
        console.error('   Full URL:', window.location.origin + '/' + componentPath + 'footer.html');
    }
}

// Update navbar based on login status
function updateNavbar() {
    const user = getCurrentUser();
    const navButtons = document.getElementById('navButtons');
    
    if (!navButtons) {
        console.warn('⚠️ navButtons element not found');
        return;
    }
    
    if (user) {
        // User is logged in - show profile dropdown
        navButtons.innerHTML = `
            <button class="nav-btn" id="forumBtn">Forum</button>
            <div class="nav-profile-dropdown">
                <button class="nav-profile-btn" onclick="toggleProfileDropdown()">
                    <div class="nav-profile-avatar" style="background-color: ${getUserAvatarColor(user)}">
                        ${getUserAvatar(user)}
                    </div>
                    <span class="nav-profile-name">${user.username}</span>
                    <span class="nav-profile-arrow">▼</span>
                </button>
                <div class="nav-profile-menu" id="navProfileMenu">
                    <a href="${getProfilePath()}" class="nav-profile-item">
                        <span>👤</span> Profile
                    </a>
                    <a href="#" onclick="logout(); return false;" class="nav-profile-item">
                        <span>🚪</span> Log Out
                    </a>
                </div>
            </div>
        `;
    } else {
        // User not logged in - show login button
        navButtons.innerHTML = `
            <button class="nav-btn" id="forumBtn">Forum</button>
            <button class="nav-btn" id="loginBtn" onclick="navigateTo(getLoginPath())">Log In / Sign Up</button>
        `;
    }
}

// Get user avatar (image or letter)
function getUserAvatar(user) {
    const userData = JSON.parse(localStorage.getItem('users') || '[]');
    const fullUser = userData.find(u => u.username === user.username);
    
    if (fullUser && fullUser.profile && fullUser.profile.pfp) {
        if (fullUser.profile.pfp.type === 'image') {
            // Fix: Resolve image path relative to root to prevent broken images on deep pages
            const pfpData = fullUser.profile.pfp.data;
            const resolvedSrc = (pfpData.startsWith('data:') || pfpData.startsWith('http')) 
                ? pfpData 
                : getRootPrefix() + pfpData.replace(/^(\.\.\/)+/, '');
            return `<img src="${resolvedSrc}" alt="${user.username}" class="avatar-img">`;
        } else {
            return fullUser.profile.pfp.letter || user.username.charAt(0).toUpperCase();
        }
    }
    
    return user.username.charAt(0).toUpperCase();
}

// Get user avatar color
function getUserAvatarColor(user) {
    const userData = JSON.parse(localStorage.getItem('users') || '[]');
    const fullUser = userData.find(u => u.username === user.username);
    
    if (fullUser && fullUser.profile && fullUser.profile.pfp && fullUser.profile.pfp.color) {
        return fullUser.profile.pfp.color;
    }
    
    return '#3b82f6'; // Default blue
}

// Get profile path based on current location
function getProfilePath() {
    return getRootPrefix() + 'pages/components/profile.html';
}

// Logout mechanism
function logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    alert('You have been logged out');
    window.location.href = getHomePath();
}

// Toggle dropdown menu
function toggleProfileDropdown() {
    const dropdown = document.getElementById('navProfileMenu');
    const btn = document.querySelector('.nav-profile-btn');
    
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
    if (btn) {
        btn.classList.toggle('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    // Handle Profile Dropdown
    const profileMenu = document.getElementById('navProfileMenu');
    const profileBtn = document.querySelector('.nav-profile-btn');
    if (profileMenu && !event.target.closest('.nav-profile-dropdown')) {
        profileMenu.classList.remove('show');
        if (profileBtn) profileBtn.classList.remove('active');
    }

    // Handle generic custom dropdowns (like the new Matchday menu)
    const customMenus = document.querySelectorAll('.dropdown-container.show');
    customMenus.forEach(menu => {
        if (!event.target.closest('.custom-dropdown-wrapper')) {
            menu.classList.remove('show');
        }
    });
});

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Components.js loaded, initializing...');
    console.log('📂 Current path:', window.location.pathname);
    loadNavbar();
    loadFooter();
});

console.log('🧩 Components module loaded');
