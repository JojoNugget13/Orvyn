// Profile Setup JavaScript

let selectedPfpColor = '#3b82f6'; // Default blue
let selectedBannerColor = '#3b82f6'; // Default blue
let uploadedPfp = null;
let uploadedBanner = null;

document.addEventListener('DOMContentLoaded', function() {
    // Check if user has temp signup data
    const tempSignup = sessionStorage.getItem('tempSignup');
    if (!tempSignup) {
        window.location.href = 'signup.html';
        return;
    }
    
    initializeProfileSetup();
});

function initializeProfileSetup() {
    // Set default preview
    updatePfpPreview();
    updateBannerPreview();
}

// Handle profile setup submission
function handleProfileSetup(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    
    // Clear errors
    document.getElementById('usernameError').textContent = '';
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if username already exists
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        document.getElementById('usernameError').textContent = 'Username already taken';
        return;
    }
    
    // Get temp signup data
    const tempSignup = JSON.parse(sessionStorage.getItem('tempSignup'));
    
    // Create user profile
    const newUser = {
        username: username,
        email: tempSignup.email,
        password: tempSignup.password,
        role: tempSignup.role,
        createdAt: tempSignup.createdAt,
        provider: tempSignup.provider || 'email',
        profile: {
            pfp: uploadedPfp || { type: 'color', color: selectedPfpColor, letter: username.charAt(0).toUpperCase() },
            banner: uploadedBanner || { type: 'color', color: selectedBannerColor }
        }
    };
    
    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Clear temp signup
    sessionStorage.removeItem('tempSignup');
    
    // Auto-login
    const sessionData = {
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        loginTime: new Date().toISOString()
    };
    localStorage.setItem('currentUser', JSON.stringify(sessionData));
    
    alert(`Welcome to Orvyn, ${username}!`);
    window.location.href = getHomePath();
}

// Preview profile picture
function previewProfilePic(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedPfp = { type: 'image', data: e.target.result };
            updatePfpPreview();
        };
        reader.readAsDataURL(file);
    }
}

// Preview banner
function previewBanner(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedBanner = { type: 'image', data: e.target.result };
            updateBannerPreview();
        };
        reader.readAsDataURL(file);
    }
}

// Select profile picture color
function selectPfpColor(color) {
    selectedPfpColor = color;
    uploadedPfp = null; // Clear uploaded image
    document.getElementById('profilePic').value = ''; // Clear file input
    updatePfpPreview();
    
    // Highlight selected color
    document.querySelectorAll('.color-options .color-btn').forEach(btn => {
        if (btn.dataset.color === color) {
            btn.style.transform = 'scale(1.2)';
            btn.style.border = '3px solid var(--primary-color)';
        } else {
            btn.style.transform = 'scale(1)';
            btn.style.border = btn.dataset.color === '#ffffff' ? '2px solid #475569' : 'none';
        }
    });
}

// Select banner color
function selectBannerColor(color) {
    selectedBannerColor = color;
    uploadedBanner = null; // Clear uploaded image
    document.getElementById('bannerPic').value = ''; // Clear file input
    updateBannerPreview();
}

// Update profile picture preview
function updatePfpPreview() {
    const username = document.getElementById('username').value.trim();
    const preview = document.getElementById('pfpPreview');
    const letter = document.getElementById('pfpLetter');
    
    if (!preview || !letter) return;

    if (uploadedPfp) {
        preview.style.backgroundImage = `url(${uploadedPfp.data})`;
        preview.style.backgroundColor = 'transparent';
        preview.style.backgroundSize = 'cover';
        preview.style.backgroundPosition = 'center';
        letter.style.display = 'none';
    } else {
        preview.style.backgroundImage = 'none';
        preview.style.backgroundColor = selectedPfpColor;
        letter.style.display = '';
        letter.textContent = username ? username.charAt(0).toUpperCase() : '?';
        letter.style.color = selectedPfpColor === '#ffffff' ? '#000000' : '#ffffff';
    }
}

// Update banner preview
function updateBannerPreview() {
    const preview = document.getElementById('bannerPreview');
    if (!preview) return;

    if (uploadedBanner) {
        preview.style.backgroundImage = `url(${uploadedBanner.data})`;
        preview.style.backgroundColor = 'transparent';
        preview.style.backgroundSize = 'cover';
        preview.style.backgroundPosition = 'center';
    } else {
        preview.style.backgroundImage = 'none';
        preview.style.backgroundColor = selectedBannerColor;
    }
}

// Update preview when username changes
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.addEventListener('input', updatePfpPreview);
    }
});

console.log('👤 Profile setup loaded');