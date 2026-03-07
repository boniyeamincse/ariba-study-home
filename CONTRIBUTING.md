# Contributing to Ariba Study Home

Thank you for your interest in contributing to **Ariba Study Home**! We are excited to build a world-class open-source learning platform together. 🚀

## 🎯 Our Goal
To provide a high-fidelity, interactive, and seamless learning experience for everyone.

## 🛠️ How to Contribute

We welcome contributions in the form of new features, bug fixes, or documentation improvements.

### 1. Getting Started
- **Clone the Repo:**
  ```bash
  git clone https://github.com/boniyeamincse/ariba-study-home.git
  ```
- **Create a Branch:**
  ```bash
  git checkout -b feature/your-feature-name
  # OR
  git checkout -b bugfix/your-fix-name
  ```

### 2. Making Changes
- **Keep it Clean:** Follow the existing project structure and coding style.
- **Respect the Core:** Please **avoid modifying core logic** in `app.js` (view switching, i18n engine) or the **main layout templates** in `index.html`. Focus your changes on:
  - Adding new lesson content in `lessons/`.
  - Adding new translations in `assets/js/i18n/`.
  - Adding new module definitions in `app.js`.
  - Improving UI/UX within existing components.

### 3. Testing
- Before submitting your changes, please open `index.html` in your browser and verify that:
  - All views (Hub, Module, Lessons) load correctly.
  - Language switching still works.
  - No console errors are present.

### 4. Submitting a Pull Request (PR)
- Push your changes to your fork.
- Submit a PR with a clear description of what you've added or fixed.
- Use descriptive commit messages (e.g., `feat: Add Github lesson basics` or `fix: Correct sidebar hover color`).

---

## 💡 Suggested Enhancements
Need inspiration? Here are some tasks we'd love help with:
- **New Modules:** Implement content for the **AI** or **Github** modules.
- **Translations:** Add support for more languages in `assets/js/i18n/`.
- **UI Polish:** Add subtle micro-animations or improve responsiveness for tablet devices.
- **Dark Mode:** Implement a toggle for a full dark theme across all views.

## 🤝 Best Practices
- **Branching:** Use `feature/` or `bugfix/` prefixes for branches.
- **Commits:** Follow a simple format: `type: Brief description`.
- **Communication:** Be friendly and respectful in issues and PR discussions.

---
© 2026 **Ariba Software Limited**. Build for the future.
