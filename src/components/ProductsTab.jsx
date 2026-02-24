import { useTranslation } from '../i18n/useTranslation.jsx'

export default function ProductsTab() {
  const { t } = useTranslation()
  const products = t('products.items') || []

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-bee-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('products.heroTitle')} <span className="text-bee-yellow">{t('products.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('products.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  product.featured ? 'ring-2 ring-bee-amber' : ''
                }`}
              >
                {product.featured && (
                  <div className="bg-bee-amber text-center py-2 text-bee-dark font-semibold">
                    {t('products.mostPopular')}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-bee-dark mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="text-4xl font-bold text-bee-amber mb-6">
                    {product.price}
                    <span className="text-lg text-gray-500 font-normal">{t('products.perMonth')}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <span className="text-bee-amber mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      product.featured
                        ? 'bg-bee-amber hover:bg-bee-yellow text-bee-dark'
                        : 'bg-bee-dark hover:bg-gray-800 text-white'
                    }`}
                  >
                    {t('products.cta')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
