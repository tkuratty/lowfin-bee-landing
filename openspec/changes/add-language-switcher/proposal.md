## Why

The Lowfin Bee landing page needs to support multiple languages to serve a broader international audience. Adding Japanese and Traditional Chinese language options will help reach more potential customers in Asia-Pacific regions.

## What Changes

- Add language switcher dropdown in the navigation bar (top-right)
- Implement simple JSON-based translation system (no external i18n library)
- Create translation files for English, Japanese (日本語), and Traditional Chinese (繁體中文)
- Update all UI text across Main, About Us, and Products tabs
- Persist language preference in localStorage

## Capabilities

### New Capabilities
- `language-switcher`: Language selection component with dropdown UI and state management

### Modified Capabilities
- `landing-page`: Update to support multi-language text display

## Impact

- New: src/i18n/translations.json (translation strings)
- New: src/i18n/useTranslation.js (translation hook)
- Modified: src/components/Navbar.jsx (add language switcher)
- Modified: All tab components (use translated text)
- No backend changes required
