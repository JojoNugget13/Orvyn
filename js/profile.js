// Profile Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('profileLoginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            navigateTo(getLoginPath());
        });
    }

    renderProfile();
});

function renderProfile() {
    const profileShell = document.getElementById('profileShell');
    const profileEmpty = document.getElementById('profileEmpty');

    const sessionUser = getStoredCurrentUser();
    if (!sessionUser) {
        profileShell.classList.add('hidden');
        profileEmpty.classList.remove('hidden');
        return;
    }

    profileShell.classList.remove('hidden');
    profileEmpty.classList.add('hidden');

    const fullUser = getFullUser(sessionUser) || sessionUser;
    const profile = fullUser.profile || {};

    applyBanner(profile.banner);
    applyAvatar(profile.pfp, fullUser.username);

    setText('profileName', fullUser.username || 'Unknown User');
    setText('profileHandle', fullUser.username ? `@${fullUser.username}` : '@user');

    const roleLabel = formatRole(fullUser.role);
    const roleBadge = document.getElementById('profileRole');
    if (roleBadge) {
        roleBadge.textContent = roleLabel;
        roleBadge.classList.remove('owner', 'moderator');
        if (fullUser.role === 'owner') roleBadge.classList.add('owner');
        if (fullUser.role === 'moderator') roleBadge.classList.add('moderator');
    }

    setText('profileEmail', fullUser.email || 'Not available');
    setText('profileProvider', formatProvider(fullUser.provider || 'email'));
    setText('profileJoined', formatDate(fullUser.createdAt));

    const statusText = document.getElementById('profileStatus');
    if (statusText) {
        statusText.textContent = fullUser.role === 'owner'
            ? 'You are leading the Project Ello community.'
            : fullUser.role === 'moderator'
                ? 'Thanks for keeping Project Ello welcoming.'
                : 'Ready to explore Project Ello.';
    }

    const roleChip = document.getElementById('profileRoleChip');
    if (roleChip) {
        roleChip.textContent = roleLabel;
    }
}

function getStoredCurrentUser() {
    const data = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    return data ? JSON.parse(data) : null;
}

function getFullUser(sessionUser) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(u => u.username === sessionUser.username);
}

function applyAvatar(pfp, username) {
    const avatar = document.getElementById('profileAvatar');
    const letter = document.getElementById('profileAvatarLetter');
    if (!avatar || !letter) return;

    if (pfp && pfp.type === 'image' && pfp.data) {
        avatar.style.backgroundImage = `url(${pfp.data})`;
        avatar.style.backgroundColor = 'transparent';
        letter.textContent = '';
        return;
    }

    const color = pfp && pfp.color ? pfp.color : '#3b82f6';
    const displayLetter = pfp && pfp.letter ? pfp.letter : (username ? username.charAt(0).toUpperCase() : '?');

    avatar.style.backgroundImage = 'none';
    avatar.style.backgroundColor = color;
    letter.textContent = displayLetter;
    letter.style.color = color === '#ffffff' ? '#0f172a' : '#ffffff';
}

function applyBanner(banner) {
    const bannerEl = document.getElementById('profileBanner');
    if (!bannerEl) return;

    if (banner && banner.type === 'image' && banner.data) {
        bannerEl.style.backgroundImage = `url(${banner.data})`;
        return;
    }

    const color = banner && banner.color ? banner.color : '#6366f1';
    bannerEl.style.backgroundImage = `linear-gradient(135deg, #0f172a, ${color})`;
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = value;
    }
}

function formatDate(dateString) {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return 'Unknown';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatRole(role) {
    if (role === 'owner') return 'Owner';
    if (role === 'moderator') return 'Moderator';
    return 'Member';
}

function formatProvider(provider) {
    if (!provider) return 'Email';
    return provider.charAt(0).toUpperCase() + provider.slice(1);
}
