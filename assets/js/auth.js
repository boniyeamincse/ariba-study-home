/**
 * Auth System - Handles Login, Signup, and Session state
 */
const Auth = {
    apiUrl: '/backend/api',

    async checkStatus() {
        try {
            const response = await fetch(`${this.apiUrl}/auth/status`);
            const result = await response.json();
            return response.ok ? result.data : null;
        } catch (error) {
            console.error('Auth status check failed:', error);
            return null;
        }
    },

    async login(username, password) {
        try {
            const response = await fetch(`${this.apiUrl}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const result = await response.json();
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(result.data));
                return { success: true, user: result.data };
            }
            return { success: false, error: result.error };
        } catch (error) {
            return { success: false, error: 'Connection error' };
        }
    },

    async register(username, email, password) {
        try {
            const response = await fetch(`${this.apiUrl}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });
            const result = await response.json();
            if (response.ok) return { success: true };
            return { success: false, error: result.error };
        } catch (error) {
            return { success: false, error: 'Connection error' };
        }
    },

    async logout() {
        try {
            await fetch(`${this.apiUrl}/auth/logout`, { method: 'POST' });
            localStorage.removeItem('user');
            window.location.reload();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    },

    updateAuthUI(user) {
        const authContainer = document.getElementById('auth-container');
        if (!authContainer) return;

        if (user) {
            authContainer.innerHTML = `
                <div class="user-menu">
                    <span class="user-greeting">Hi, ${user.username}</span>
                    <button id="logoutBtn" class="btn-logout">Logout</button>
                </div>
            `;
            document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
        } else {
            const currentPath = window.location.pathname;
            const prefix = currentPath.includes('/pages/') ? '' : 'pages/';
            authContainer.innerHTML = `
                <div class="auth-links">
                    <a href="${prefix}login.php" class="btn-login" data-i18n="login">Login</a>
                    <a href="${prefix}signup.php" class="btn-signup" data-i18n="signup">Sign Up</a>
                </div>
            `;
        }

        // Trigger translations if function exists
        if (typeof changeLanguage === 'function') {
            const lang = localStorage.getItem('selectedLanguage') || 'en';
            changeLanguage(lang);
        }
    }
};

// Initialize Auth
document.addEventListener('DOMContentLoaded', async () => {
    // Wait a bit for header component to load
    setTimeout(async () => {
        const user = await Auth.checkStatus();
        Auth.updateAuthUI(user);
    }, 300);
});
