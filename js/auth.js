// Authentication System for Orvyn

const OWNER_EMAIL = 'jojojkjk2010@gmail.com'; // Replace with your actual email

// Initialize users database
function initializeAuth() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    const emailOrUsername = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => 
        (u.email === emailOrUsername || u.username === emailOrUsername) && 
        u.password === password
    );
    
    if (user) {
        // Login successful
        const sessionData = {
            username: user.username,
            email: user.email,
            role: user.role,
            loginTime: new Date().toISOString()
        };
        
        if (rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(sessionData));
        } else {
            sessionStorage.setItem('currentUser', JSON.stringify(sessionData));
        }
        
        alert(`Welcome back, ${user.username}!`);
        window.location.href = '../../index.html';
    } else {
        alert('Invalid email/username or password');
    }
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    
    const email = document.getElementById('signupEmail').value.trim().toLowerCase();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Clear previous errors
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    
    // Validate passwords match
    if (password !== confirmPassword) {
        document.getElementById('passwordError').textContent = 'Passwords do not match';
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
        document.getElementById('emailError').textContent = 'Email already registered';
        return;
    }
    
    // Determine role
    let role = 'user';
    if (email === OWNER_EMAIL.toLowerCase()) {
        role = 'owner';
    }
    
    // Store temporary signup data
    const tempSignup = {
        email: email,
        password: password,
        role: role,
        createdAt: new Date().toISOString()
    };
    
    sessionStorage.setItem('tempSignup', JSON.stringify(tempSignup));
    
    // Redirect to profile setup
    window.location.href = 'setup-profile.html';
}

// Signup with Google
function signupWithGoogle() {
    // For now, simulate Google signup
    alert('Google signup integration coming soon!');
    // In production, after Google OAuth, redirect to setup-profile.html
    // For testing:
    const tempSignup = {
        email: 'google-user@example.com',
        password: 'google-generated-password',
        role: 'user',
        createdAt: new Date().toISOString(),
        provider: 'google'
    };
    sessionStorage.setItem('tempSignup', JSON.stringify(tempSignup));
    window.location.href = 'setup-profile.html';
}

// Signup with Apple
function signupWithApple() {
    // For now, simulate Apple signup
    alert('Apple signup integration coming soon!');
    // In production, after Apple Sign In, redirect to setup-profile.html
    // For testing:
    const tempSignup = {
        email: 'apple-user@example.com',
        password: 'apple-generated-password',
        role: 'user',
        createdAt: new Date().toISOString(),
        provider: 'apple'
    };
    sessionStorage.setItem('tempSignup', JSON.stringify(tempSignup));
    window.location.href = 'setup-profile.html';
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

// Promote user to moderator (Owner only)
function promoteToModerator(username) {
    const currentUser = getCurrentUser();
    
    if (!currentUser || currentUser.role !== 'owner') {
        alert('Only the owner can promote users to moderator');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.username === username);
    
    if (userIndex === -1) {
        alert('User not found');
        return;
    }
    
    if (users[userIndex].role === 'owner') {
        alert('Cannot modify owner role');
        return;
    }
    
    users[userIndex].role = 'moderator';
    localStorage.setItem('users', JSON.stringify(users));
    alert(`${username} has been promoted to moderator`);
}

// Initialize on page load
initializeAuth();

console.log('🔐 Authentication system loaded');