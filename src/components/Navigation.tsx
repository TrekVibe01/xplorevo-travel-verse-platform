import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  MapPin, 
  Users, 
  Car, 
  Video, 
  Settings, 
  User,
  LogOut,
  Database // Add this import
} from 'lucide-react';

const Navigation = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MapPin className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">TravelApp</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <Home className="w-4 h-4 inline mr-1" />
                Home
              </Link>
              
              <Link
                to="/tours"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/tours') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <MapPin className="w-4 h-4 inline mr-1" />
                Tours
              </Link>

              <Link
                to="/community"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/community') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <Users className="w-4 h-4 inline mr-1" />
                Community
              </Link>

              <Link
                to="/rentals"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/rentals') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <Car className="w-4 h-4 inline mr-1" />
                Rentals
              </Link>

              <Link
                to="/reels"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/reels') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <Video className="w-4 h-4 inline mr-1" />
                Reels
              </Link>

              <Link
                to="/api-dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/api-dashboard') 
                    ? 'bg-red-100 text-red-700' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <Database className="w-4 h-4 inline mr-1" />
                APIs
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-red-600"
                >
                  <User className="w-5 h-5" />
                </Link>
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-red-600"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
