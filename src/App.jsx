import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainTab from './components/MainTab'
import AboutTab from './components/AboutTab'
import ProductsTab from './components/ProductsTab'
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('main')

  const renderTab = () => {
    switch (activeTab) {
      case 'main':
        return <MainTab />
      case 'about':
        return <AboutTab />
      case 'products':
        return <ProductsTab />
      default:
        return <MainTab />
    }
  }

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderTab()}
      </main>
      <Footer />
    </div>
  )
}

export default App
