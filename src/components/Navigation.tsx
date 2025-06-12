
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Users, Calendar, Car, Shield, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const navItems = [
    { label: "Tours", path: "/tours", icon: MapPin },
    { label: "Community", path: "/community", icon: Users },
    { label: "Travel Reels", path: "/reels", icon: Calendar },
    { label: "Rentals", path: "/rentals", icon: Car },
    { label: "Dashboard", path: "/dashboard", icon: Shield },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-amber-200/50" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation("/")}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-serif">
              Xplorevo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            {/* Become a Partner Button */}
            <Button 
              onClick={() => handleNavigation("/tour-operator-profile")}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Become a Partner
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-2xl mt-2 p-6 shadow-2xl border border-amber-200/50">
            <div className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center space-x-3 w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium p-3 hover:bg-amber-50 rounded-xl"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              {/* Mobile Become a Partner Button */}
              <Button 
                onClick={() => handleNavigation("/tour-operator-profile")}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Become a Partner
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
