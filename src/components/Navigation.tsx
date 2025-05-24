
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  User, 
  MapPin, 
  Calendar, 
  Users,
  Menu,
  X,
  ChevronDown,
  Building,
  Car,
  Shield
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tourCategories = [
    { name: "Himalayan Treks", link: "/tours?category=himalayan" },
    { name: "Beach Destinations", link: "/tours?category=beach" },
    { name: "Desert Safari", link: "/tours?category=desert" },
    { name: "Wildlife Tours", link: "/tours?category=wildlife" }
  ];

  const rentalCategories = [
    { name: "Bikes & Motorcycles", link: "/rentals?category=bikes" },
    { name: "Cars & SUVs", link: "/rentals?category=cars" },
    { name: "Camping Gear", link: "/rentals?category=camping" },
    { name: "Adventure Equipment", link: "/rentals?category=adventure" }
  ];

  const communityCategories = [
    { name: "Local Communities", link: "/community?type=local" },
    { name: "Travel Groups", link: "/community?type=groups" },
    { name: "Solo Travelers", link: "/community?type=solo" },
    { name: "Photography Clubs", link: "/community?type=photography" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-red-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Xplorevo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {/* Tours & Treks */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-red-600 font-medium">
                    Tours & Treks
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="row-span-3">
                        <h3 className="text-lg font-semibold mb-2">Explore Tours</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Discover amazing destinations with verified tour operators
                        </p>
                      </div>
                      <div className="grid gap-2">
                        {tourCategories.map((category) => (
                          <a
                            key={category.name}
                            href={category.link}
                            className="block p-2 rounded hover:bg-red-50 transition-colors"
                          >
                            <div className="font-medium">{category.name}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Rentals */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-red-600 font-medium">
                    Rentals
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="row-span-3">
                        <h3 className="text-lg font-semibold mb-2">Rent Vehicles</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Choose from bikes, cars, and adventure gear
                        </p>
                      </div>
                      <div className="grid gap-2">
                        {rentalCategories.map((category) => (
                          <a
                            key={category.name}
                            href={category.link}
                            className="block p-2 rounded hover:bg-red-50 transition-colors"
                          >
                            <div className="font-medium">{category.name}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Travel Reels */}
                <NavigationMenuItem>
                  <a href="/travel-reels" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                    Travel Reels
                  </a>
                </NavigationMenuItem>

                {/* Community */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-red-600 font-medium">
                    Community
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="row-span-3">
                        <h3 className="text-lg font-semibold mb-2">Join Communities</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Connect with fellow travelers worldwide
                        </p>
                      </div>
                      <div className="grid gap-2">
                        {communityCategories.map((category) => (
                          <a
                            key={category.name}
                            href={category.link}
                            className="block p-2 rounded hover:bg-red-50 transition-colors"
                          >
                            <div className="font-medium">{category.name}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Dashboard */}
                <NavigationMenuItem>
                  <a href="/dashboard" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                    Dashboard
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/auth'}>
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
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
          <div className="md:hidden py-4 border-t border-red-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="/tours" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Tours & Treks
              </a>
              <a href="/rentals" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Rentals
              </a>
              <a href="/travel-reels" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Travel Reels
              </a>
              <a href="/community" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Community
              </a>
              <a href="/dashboard" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Dashboard
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/auth'}>
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-red-500 to-red-600">
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
