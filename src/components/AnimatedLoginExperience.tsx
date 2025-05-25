
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Mail, 
  Lock, 
  User, 
  Mountain, 
  Plane, 
  Camera,
  Heart,
  Star,
  Compass
} from "lucide-react";

interface AnimatedLoginExperienceProps {
  onLogin: (credentials: any) => void;
}

const AnimatedLoginExperience = ({ onLogin }: AnimatedLoginExperienceProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  // Demo credentials
  const demoAccounts = [
    { email: 'admin@xplorevo.com', password: 'admin123', role: 'Admin' },
    { email: 'guide@xplorevo.com', password: 'guide123', role: 'Tour Guide' },
    { email: 'traveler@xplorevo.com', password: 'travel123', role: 'Traveler' },
    { email: 'ambassador@xplorevo.com', password: 'campus123', role: 'Campus Ambassador' },
    { email: 'partner@xplorevo.com', password: 'partner123', role: 'Business Partner' }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDemoLogin = (account: any) => {
    setFormData({ email: account.email, password: account.password, name: '' });
    setTimeout(() => {
      onLogin(account);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const account = demoAccounts.find(acc => acc.email === formData.email);
    onLogin(account || { email: formData.email, role: 'User' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-following elements */}
        <div 
          className="absolute w-32 h-32 bg-white/10 rounded-full blur-xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: `scale(${1 + Math.sin(Date.now() * 0.002) * 0.1})`
          }}
        />
        <div 
          className="absolute w-24 h-24 bg-yellow-400/20 rounded-full blur-lg transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 120,
            top: mousePosition.y - 120,
            transform: `scale(${0.8 + Math.cos(Date.now() * 0.003) * 0.2})`
          }}
        />

        {/* Floating Travel Icons */}
        <div className="absolute top-20 left-20 animate-[float_4s_ease-in-out_infinite]">
          <Mountain className="w-8 h-8 text-white/30" />
        </div>
        <div className="absolute top-40 right-32 animate-[float_3s_ease-in-out_infinite] delay-1000">
          <Plane className="w-6 h-6 text-white/30" />
        </div>
        <div className="absolute bottom-32 left-16 animate-[float_5s_ease-in-out_infinite] delay-500">
          <Camera className="w-7 h-7 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-20 animate-[float_3.5s_ease-in-out_infinite] delay-1500">
          <Compass className="w-5 h-5 text-white/30" />
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-[twinkle_3s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Login Card */}
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-lg border-0 shadow-2xl animate-[zoomIn_0.8s_ease-out] relative z-10">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Xplorevo
          </CardTitle>
          <p className="text-gray-600 text-sm">Your Digital Travel Companion</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Demo Accounts */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Quick Demo Login:</p>
            <div className="grid grid-cols-1 gap-2">
              {demoAccounts.map((account, index) => (
                <Button
                  key={index}
                  onClick={() => handleDemoLogin(account)}
                  className="w-full text-left justify-start bg-gradient-to-r from-gray-50 to-gray-100 hover:from-red-50 hover:to-purple-50 text-gray-700 border border-gray-200 hover:border-red-300 transform hover:scale-105 transition-all duration-200"
                  variant="outline"
                >
                  <User className="w-4 h-4 mr-2" />
                  <span className="flex-1">{account.email}</span>
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {account.role}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Login/Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="pl-10 border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
                />
              </div>
            )}
            
            <div className="relative group">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="pl-10 border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
              />
            </div>
            
            <div className="relative group">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="pl-10 border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button
                onClick={() => setIsLogin(!isLogin)}
                variant="link"
                className="text-red-600 hover:text-red-700 font-semibold ml-1 p-0"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </Button>
            </p>
          </div>

          {/* Features */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-3">What you'll get:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center text-gray-600">
                <Heart className="w-3 h-3 text-red-500 mr-1" />
                <span>Personalized Trips</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Star className="w-3 h-3 text-yellow-500 mr-1" />
                <span>Exclusive Deals</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-3 h-3 text-blue-500 mr-1" />
                <span>Local Guides</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Compass className="w-3 h-3 text-green-500 mr-1" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes zoomIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLoginExperience;
