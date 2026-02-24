## Context

The Lowfin Bee landing page currently displays all content in English. To serve international customers, especially in Japan and Taiwan, we need to add multi-language support with Japanese and Traditional Chinese options.

## Goals / Non-Goals

**Goals:**
- Add language switcher to navigation bar
- Support English, Japanese (日本語), and Traditional Chinese (繁體中文)
- Persist language preference across sessions
- Minimal code changes, no external dependencies

**Non-Goals:**
- Server-side rendering for SEO
- Automatic language detection
- More than 3 languages (extensible but not needed now)

## Decisions

- **Translation approach**: Simple JSON file with inline translations (no react-i18next)
- **State management**: React Context API for global language state
- **Persistence**: localStorage for remembering user's language choice
- **Language codes**: en, ja, zh-TW (ISO 639-1 with region)

## Implementation Structure

```
src/i18n/
├── translations.json    # All translation strings
└── useTranslation.js   # Custom hook for accessing translations
```

## Translation Keys Structure

```json
{
  "nav": { "main": "...", "about": "...", "products": "..." },
  "hero": { "title": "...", "subtitle": "..." },
  "features": { "title": "...", ... },
  "about": { "mission": "...", "values": [...] },
  "products": { "title": "...", ... },
  "footer": { ... }
}
```

## Risks / Trade-offs

- [Risk] Manual translation updates → Mitigation: Centralized JSON file makes updates straightforward
- [Risk] Missing translation keys → Mitigation: Fallback to English for any missing keys
