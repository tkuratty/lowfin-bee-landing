import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n/useTranslation.jsx'

export default function Navbar({ activeTab, setActiveTab }) {
  const { language, changeLanguage, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const tabs = [
    { id: 'main', label: t('nav.main') },
    { id: 'about', label: t('nav.about') },
    { id: 'products', label: t('nav.products') },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const languageLabel = t(`language.${language}`) || 'Language'

  return (
    <nav className="fixed top-0 left-0 right-0 bg-bee-dark z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-bee-yellow text-xl font-bold">{t('nav.brand')}</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-bee-amber text-white'
                      : 'text-gray-100 hover:bg-bee-yellow hover:text-bee-dark'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:bg-bee-yellow hover:text-bee-dark transition-colors duration-200"
              >
                <span>{languageLabel}</span>
                <span className="text-xs">▾</span>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-1 z-50">
                  {['en', 'ja', 'zh-TW'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        changeLanguage(lang)
                        setIsOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        language === lang
                          ? 'bg-bee-amber text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {t(`language.${lang}`)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
