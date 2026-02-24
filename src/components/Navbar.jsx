export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'main', label: 'Main' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-bee-dark z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-bee-yellow text-xl font-bold">Lowfin Bee</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
          </div>
        </div>
      </div>
    </nav>
  )
}
