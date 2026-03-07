# Issue #04: Dark Mode Support

## Priority: Medium

## Description
Implement a dark theme option to reduce eye strain and provide a comfortable viewing experience in low-light environments.

## Problem Statement
Many users study during evening hours or in dimly lit environments. The current light theme can cause:
- Eye strain during extended study sessions
- Difficulty focusing in dark environments
- Battery drain on OLED devices
- Preference mismatch for users who prefer dark interfaces

## Proposed Solution

### Features
1. **Theme Toggle**
   - Toggle button in header/settings
   - Smooth transition animation
   - Icon changes (sun/moon)
   - Accessible keyboard shortcut

2. **Persistent Preference**
   - Save theme choice in localStorage
   - Remember across sessions
   - Sync across devices (future)

3. **System Preference Detection**
   - Auto-detect OS dark mode setting
   - Respect user's system preference
   - Override option available

4. **Comprehensive Theming**
   - All pages and components themed
   - Code syntax highlighting adjusted
   - Images and icons optimized
   - Consistent color palette

## Technical Implementation

### CSS Variables Approach
```css
:root {
  /* Light theme (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #333333;
  --text-secondary: #666666;
  --accent-color: #007bff;
  --border-color: #dddddd;
  --code-bg: #f8f9fa;
}

[data-theme="dark"] {
  /* Dark theme */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #e0e0e0;
  --text-secondary: #b0b0b0;
  --accent-color: #4a9eff;
  --border-color: #404040;
  --code-bg: #252525;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### JavaScript Theme Controller
```javascript
class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme() || this.getSystemTheme();
    this.applyTheme(this.theme);
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateToggleButton(theme);
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.theme = newTheme;
    this.applyTheme(newTheme);
  }

  updateToggleButton(theme) {
    const button = document.getElementById('theme-toggle');
    button.innerHTML = theme === 'light' 
      ? '<i class="icon-moon"></i>' 
      : '<i class="icon-sun"></i>';
    button.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
  }
}

// Initialize
const themeManager = new ThemeManager();

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      themeManager.applyTheme(e.matches ? 'dark' : 'light');
    }
  });
```

### Color Palette

#### Light Theme
- Background: #ffffff, #f5f5f5
- Text: #333333, #666666
- Accent: #007bff
- Success: #28a745
- Warning: #ffc107
- Error: #dc3545

#### Dark Theme
- Background: #1a1a1a, #2d2d2d
- Text: #e0e0e0, #b0b0b0
- Accent: #4a9eff
- Success: #4caf50
- Warning: #ffb74d
- Error: #ef5350

### Code Syntax Highlighting
```javascript
// Light theme: GitHub style
// Dark theme: Monokai or Dracula style

const codeThemes = {
  light: 'prism-github',
  dark: 'prism-tomorrow-night'
};

function updateCodeTheme(theme) {
  const link = document.getElementById('code-theme');
  link.href = `/assets/css/${codeThemes[theme]}.css`;
}
```

## Acceptance Criteria
- [ ] Toggle button works on all pages
- [ ] Theme persists across sessions
- [ ] Smooth transition between themes
- [ ] All UI elements properly themed
- [ ] Code blocks readable in both themes
- [ ] Images/icons adapt to theme
- [ ] System preference detected on first visit
- [ ] Keyboard shortcut works (Ctrl/Cmd + Shift + D)
- [ ] WCAG contrast ratios met
- [ ] No flash of unstyled content

## Estimated Effort
- Design: 2 days
- CSS Implementation: 3 days
- JavaScript Logic: 2 days
- Testing & Refinement: 2 days
- **Total: 9 days**

## Dependencies
- CSS custom properties support
- localStorage API
- matchMedia API for system detection

## Accessibility Considerations
- Maintain WCAG AA contrast ratios (4.5:1 for text)
- Ensure focus indicators visible in both themes
- Provide clear labels for theme toggle
- Support keyboard navigation
- Test with screen readers

## Future Enhancements
- Multiple theme options (blue, purple, green)
- Custom theme builder
- Scheduled theme switching (auto dark at night)
- Per-page theme override
- High contrast mode
- Reduced motion option
