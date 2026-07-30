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

function getHomePath() {
    return getRootPrefix() + 'index.html';
}

function getLoginPath() {
    return getRootPrefix() + 'pages/components/login.html';
}

function getComponentPath() {
    return getRootPrefix() + 'pages/components/';
}

function isLoggedIn() {
    return localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
}

function getCurrentUser() {
    const userData = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
}

async function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) {
        return;
    }
    
    const componentPath = getComponentPath();
    
    try {
        const response = await fetch(componentPath + 'navbar.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        navbarPlaceholder.innerHTML = html;
        
        updateNavbar();
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

async function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) {
        return;
    }
    
    const componentPath = getComponentPath();
    
    try {
        const response = await fetch(componentPath + 'footer.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        footerPlaceholder.innerHTML = html;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

function updateNavbar() {
    const user = getCurrentUser();
    const navButtons = document.getElementById('navButtons');
    
    if (!navButtons) {
        return;
    }
    
    if (user) {
        navButtons.innerHTML = `
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
        navButtons.innerHTML = `
            <button class="nav-btn" id="forumBtn">Forum</button>
            <button class="nav-btn" id="loginBtn" onclick="navigateTo(getLoginPath())">Log In / Sign Up</button>
        `;
    }
}

function getUserAvatar(user) {
    const userData = JSON.parse(localStorage.getItem('users') || '[]');
    const fullUser = userData.find(u => u.username === user.username);
    
    if (fullUser && fullUser.profile && fullUser.profile.pfp) {
        if (fullUser.profile.pfp.type === 'image') {
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

function getUserAvatarColor(user) {
    const userData = JSON.parse(localStorage.getItem('users') || '[]');
    const fullUser = userData.find(u => u.username === user.username);
    
    if (fullUser && fullUser.profile && fullUser.profile.pfp && fullUser.profile.pfp.color) {
        return fullUser.profile.pfp.color;
    }
    
    return '#3b82f6';
}

function getProfilePath() {
    return getRootPrefix() + 'pages/components/profile.html';
}

function logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    alert('You have been logged out');
    window.location.href = getHomePath();
}

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

document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('navProfileMenu');
    const profileBtn = document.querySelector('.nav-profile-btn');
    if (profileMenu && !event.target.closest('.nav-profile-dropdown')) {
        profileMenu.classList.remove('show');
        if (profileBtn) profileBtn.classList.remove('active');
    }

    const customMenus = document.querySelectorAll('.dropdown-container.show');
    customMenus.forEach(menu => {
        if (!event.target.closest('.custom-dropdown-wrapper')) {
            menu.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
});

console.log('🧩 Components module loaded');
