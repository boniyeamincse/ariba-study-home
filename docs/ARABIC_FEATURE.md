# Arabic Language Support with RTL Layout

## Overview
This feature adds complete Arabic language support with proper right-to-left (RTL) layout to the Ariba Study Home platform.

## Changes Made

### 1. New Files Created
- `assets/js/i18n/ar.js` - Arabic translation file with all UI strings and module descriptions

### 2. Modified Files

#### `index.html`
- Added Arabic (العربية) option to language selector
- Included Arabic translation script

#### `assets/css/style.css`
- Added comprehensive RTL support with `[dir="rtl"]` selectors
- Reversed grid layouts for lesson view (sidebar and panel positions)
- Flipped directional elements (arrows, borders, text alignment)
- Adjusted language switcher positioning for RTL mode

#### `assets/js/app.js`
- Enhanced `setLanguage()` function to set `dir` and `lang` attributes on document root
- Added initialization code to apply RTL on page load for saved Arabic preference
- Added `showView()` function for proper view management

## Features

### RTL Layout Support
- Automatic direction switching when Arabic is selected
- Proper text alignment (right-aligned for Arabic)
- Reversed layout for lesson sidebar and panel
- Flipped navigation arrows and borders
- Mirrored grid layouts

### Arabic Translations
All UI elements are translated including:
- Hub title and subtitle
- Navigation buttons
- Module titles and descriptions
- Status badges (locked, available, completed)
- Quiz interface
- Lesson navigation

### Persistent Language Selection
- User's language preference is saved in localStorage
- RTL direction is automatically applied on page reload

## Testing

To test the Arabic language feature:

1. Open `index.html` in a browser
2. Select "العربية" from the language dropdown
3. Verify that:
   - Text direction changes to right-to-left
   - All UI elements are properly aligned
   - Module cards display Arabic text
   - Lesson view has reversed layout (sidebar on right, panel on left)
   - Navigation elements are properly mirrored

## Browser Compatibility

The RTL implementation uses standard CSS `dir` attribute and is compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

Potential improvements:
- Add Arabic translations for lesson content
- Support for Arabic numerals (٠-٩) option
- Enhanced typography for Arabic script
- Additional RTL-specific UI refinements
