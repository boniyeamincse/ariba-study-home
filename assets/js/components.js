// Component Loader - rewrites relative paths before injecting into DOM
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        let html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            // If on a sub-page, rewrite relative paths in the HTML before injection
            if (basePath) {
                // Rewrite href="pages/..." to href="../pages/..."
                html = html.replace(/href="((?!http|#|\/|\.\.)[^"]+)"/g, `href="${basePath}$1"`);
                // Rewrite src="(relative)" to src="../relative"
                html = html.replace(/src="((?!http|\/|\.\.)[^"]+)"/g, `src="${basePath}$1"`);
            }
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Detect base path (handles both root and sub-pages)
const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

// Load header and footer
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('header-placeholder', basePath + 'components/header.html');
    await loadComponent('footer-placeholder', basePath + 'components/footer.html');

    // Initialize mobile menu after header is loaded
    setTimeout(() => {
        initMobileMenu();
        syncLanguageSelectors();
        highlightActiveNavLink();
    }, 100);
});

// Highlight the active navigation link based on current URL
function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        // Check if the link matches the current page
        if (currentPath.endsWith('/') && href.includes('index.html')) {
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
