import { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';
import { Bell, Settings, LogOut, User } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/auth';
  };

  const getRoleBadge = () => {
    switch (user?.role) {
      case 'user':
        return 'Travel Enthusiast';
      case 'organisation':
        return 'Tour Partner';
      case 'superadmin':
        return 'System Admin';
      default:
        return 'User';
    }
  };

  const getRoleColor = () => {
    switch (user?.role) {
      case 'user':
        return 'from-blue-500 to-purple-600';
      case 'organisation':
        return 'from-green-500 to-blue-600';
      case 'superadmin':
        return 'from-purple-600 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className={`bg-gradient-to-r ${getRoleColor()} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/dd4db603-c0e5-47f6-aad9-956b576bb16f.png" 
                alt="Xplorevo" 
                className="w-10 h-10 rounded-xl"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">{title}</h1>
                <p className="text-sm text-white/80">{getRoleBadge()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right mr-4">
                <p className="text-white font-medium">{user?.email}</p>
                <p className="text-white/80 text-sm">{getRoleBadge()}</p>
              </div>
              
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Bell className="w-4 h-4" />
              </Button>
              
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Settings className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSignOut}
                className="text-white hover:bg-white/20"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;