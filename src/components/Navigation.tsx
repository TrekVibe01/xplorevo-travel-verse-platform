
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  User, 
  MapPin, 
  Calendar, 
  Users,
  Menu,
  X
} from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-emerald-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Xplorevo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tours" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Tours & Treks
            </a>
            <a href="#rentals" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Rentals
            </a>
            <a href="#reels" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Travel Reels
            </a>
            <a href="#community" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Community
            </a>
            <a href="#partners" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Partners
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#tours" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Tours & Treks
              </a>
              <a href="#rentals" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Rentals
              </a>
              <a href="#reels" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Travel Reels
              </a>
              <a href="#community" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Community
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-blue-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
