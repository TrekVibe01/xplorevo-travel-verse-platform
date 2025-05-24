
import { MapPin, Mail, Phone, Facebook, Instagram, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Xplorevo
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              India's first digital travel ecosystem connecting passionate travelers with verified operators for safe and unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#tours" className="text-gray-300 hover:text-emerald-400 transition-colors">Tours & Treks</a></li>
              <li><a href="#rentals" className="text-gray-300 hover:text-emerald-400 transition-colors">Vehicle Rentals</a></li>
              <li><a href="#reels" className="text-gray-300 hover:text-emerald-400 transition-colors">Travel Reels</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-emerald-400 transition-colors">Community</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-emerald-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Emergency Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">support@xplorevo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">+91-911-HELP-NOW</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Xplorevo. All rights reserved. Registered Indian Startup.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Point of Contact: Harshad Harishchandra Pakhale
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
