import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Phone: <a href="tel:4758378323" className="hover:text-white transition-colors">(475) 837-8323</a></p>
              <p>Email: <a href="mailto:pdn@gmail.com" className="hover:text-white transition-colors">pdn@gmail.com</a></p>
              <p>Area Served: All Over Connecticut , United States</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
            <div className="space-y-2 text-gray-300">
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/chronic-care" className="block text-gray-300 hover:text-white transition-colors">Chronic Care</Link>
              <Link to="/wellness-checks" className="block text-gray-300 hover:text-white transition-colors">Wellness Checks</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Linette</Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing & Insurance</Link>
              <Link to="/faq" className="block text-gray-300 hover:text-white transition-colors">FAQs</Link>
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2025 Linette Nurse. All rights reserved.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;