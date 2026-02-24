export default function Footer() {
  return (
    <footer className="bg-bee-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-bee-yellow mb-4">Lowfin Bee</h3>
            <p className="text-gray-400">
              Professional solutions for your business success.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-bee-yellow transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-bee-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-bee-yellow transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-bee-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@lowfinbee.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Business St, Suite 100</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lowfin Bee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
