import { useTranslation } from '../i18n/useTranslation.jsx'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-bee-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-bee-yellow mb-4">{t('nav.brand')}</h3>
            <p className="text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.home')}</a></li>
              <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.about')}</a></li>
              <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.products')}</a></li>
              <li><a href="#" className="hover:text-bee-yellow transition-colors">{t('footer.links.contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.contact.email')}</li>
              <li>{t('footer.contact.phone')}</li>
              <li>{t('footer.contact.address')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {t('nav.brand')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
