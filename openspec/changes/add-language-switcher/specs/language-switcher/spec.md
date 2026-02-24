## ADDED Requirements

### Requirement: Language switcher displays in navbar
The landing page SHALL display a language switcher dropdown in the top-right corner of the navigation bar.

#### Scenario: Language switcher renders correctly
- **WHEN** the user views any page
- **THEN** a language selector button is visible in the navbar showing current language code

### Requirement: Language switcher changes language
Clicking the language switcher SHALL display a dropdown with available languages, and selecting one SHALL update all page text.

#### Scenario: User selects Japanese
- **WHEN** user clicks language switcher and selects "日本語"
- **THEN** all page text changes to Japanese
- **AND** the language switcher button shows "日本語"

### Requirement: Language preference persists
The selected language SHALL be persisted in localStorage and restored on page reload.

#### Scenario: Page reload preserves language
- **WHEN** user selects a language and reloads the page
- **AND** returns to the site
- **THEN** the previously selected language is displayed

### Requirement: All text is translated
All user-facing text SHALL have translations in English, Japanese, and Traditional Chinese.

#### Scenario: All text displays in selected language
- **WHEN** user switches to Japanese
- **THEN** navigation labels, hero text, features, about content, products, and footer all display in Japanese

### Requirement: Missing translations fallback to English
If a translation key is missing for the selected language, it SHALL fallback to English.

#### Scenario: Missing key shows English
- **WHEN** a translation key is missing for Japanese
- **THEN** the English text is displayed instead
