// detect base path (handles both root and sub-pages)
const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

// Headers and footers are now handled by PHP include.
// This script now only handles UI initialization.
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu and other UI features
    initMobileMenu();
    syncLanguageSelectors();
    highlightActiveNavLink();
});

// Highlight the active navigation link based on current URL
function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        // Check if the link matches the current page
        if (currentPath.endsWith('/') && href.includes('index.php')) {
            link.style.color = 'var(--accent-color, #667eea)';
            link.style.fontWeight = '700';
        } else if (currentPath.includes(href.replace('../', '').replace('./', ''))) {
            link.style.color = 'var(--accent-color, #667eea)';
            link.style.fontWeight = '700';
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    }
}

// Sync language selectors
function syncLanguageSelectors() {
    const headerLangSelect = document.getElementById('headerLangSelect');
    const mainLangSelect = document.getElementById('langSelect');

    if (headerLangSelect && mainLangSelect) {
        // Sync header selector with main selector
        headerLangSelect.value = mainLangSelect.value;

        // Listen for changes on header selector
        headerLangSelect.addEventListener('change', (e) => {
            mainLangSelect.value = e.target.value;
            mainLangSelect.dispatchEvent(new Event('change'));
        });

        // Listen for changes on main selector
        mainLangSelect.addEventListener('change', (e) => {
            headerLangSelect.value = e.target.value;
        });
    } else if (headerLangSelect) {
        // If only header selector exists (on other pages)
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        headerLangSelect.value = savedLang;

        headerLangSelect.addEventListener('change', (e) => {
            localStorage.setItem('selectedLanguage', e.target.value);
            if (typeof changeLanguage === 'function') {
                changeLanguage(e.target.value);
            }
        });
    }
}


// Simple i18n for pages without app.js
function changeLanguage(lang) {
    if (typeof translations !== 'undefined' && translations[lang]) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang].ui && translations[lang].ui[key]) {
                element.textContent = translations[lang].ui[key];
            }
        });

        // Handle placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang].ui && translations[lang].ui[key]) {
                element.placeholder = translations[lang].ui[key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Save preference
        localStorage.setItem('selectedLanguage', lang);
    }
}

// Initialize language on page load
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    const headerLangSelect = document.getElementById('headerLangSelect');

    if (headerLangSelect) {
        headerLangSelect.value = savedLang;
        changeLanguage(savedLang);
    }
});
