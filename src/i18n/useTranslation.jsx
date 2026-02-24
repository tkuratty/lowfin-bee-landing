import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import translations from './translations.json'

const LanguageContext = createContext(null)

const DEFAULT_LANGUAGE = 'ja'
const STORAGE_KEY = 'lowfinbee-language'

const normalizeLanguage = (lang) => {
  if (translations[lang]) {
    return lang
  }
  return DEFAULT_LANGUAGE
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setLanguage(normalizeLanguage(stored))
    }
  }, [])

  const changeLanguage = (lang) => {
    const normalized = normalizeLanguage(lang)
    setLanguage(normalized)
    localStorage.setItem(STORAGE_KEY, normalized)
  }

  const value = useMemo(() => ({
    language,
    changeLanguage,
    translations,
  }), [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }

  const { language, changeLanguage, translations } = context
  const fallback = translations.en || {}
  const current = translations[language] || fallback

  const t = (path) => {
    const parts = path.split('.')
    let node = current
    for (const part of parts) {
      if (node && Object.prototype.hasOwnProperty.call(node, part)) {
        node = node[part]
      } else {
        node = null
        break
      }
    }

    if (node === null || node === undefined) {
      node = fallback
      for (const part of parts) {
        if (node && Object.prototype.hasOwnProperty.call(node, part)) {
          node = node[part]
        } else {
          node = null
          break
        }
      }
    }

    return node
  }

  return {
    language,
    changeLanguage,
    t,
    availableLanguages: Object.keys(translations),
  }
}
