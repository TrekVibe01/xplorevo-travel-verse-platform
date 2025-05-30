
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
  Compass,
  Backpack,
  Globe,
  Map,
  Tent,
  TreePine
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Enhanced demo credentials with more user types
  const demoAccounts = [
    { email: 'admin@xplorevo.com', password: 'admin123', role: 'Admin', color: 'from-red-500 to-red-600' },
    { email: 'operator@xplorevo.com', password: 'operator123', role: 'Tour Operator', color: 'from-green-500 to-green-600' },
    { email: 'traveler@xplorevo.com', password: 'traveler123', role: 'Travel Enthusiast', color: 'from-blue-500 to-blue-600' },
    { email: 'ambassador@xplorevo.com', password: 'ambassador123', role: 'Campus Ambassador', color: 'from-purple-500 to-purple-600' },
    { email: 'rental@xplorevo.com', password: 'rental123', role: 'Rental Partner', color: 'from-orange-500 to-orange-600' }
  ];

  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Generate floating travel icons
    const icons = [Mountain, Plane, Camera, Backpack, Globe, Map, Tent, TreePine, Compass];
    const newFloatingIcons = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      size: 20 + Math.random() * 20
    }));
    
    setFloatingIcons(newFloatingIcons);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDemoLogin = async (account: any) => {
    console.log('=== Demo Login Start ===');
    console.log('Account:', account);
    
    setIsSubmitting(true);
    setError('');
    setFormData({ email: account.email, password: account.password, name: '' });
    
    try {
      // Simulate a brief loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Calling onLogin with account:', account);
      onLogin(account);
      console.log('=== Demo Login Success ===');
    } catch (err) {
      console.error('Demo login error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('=== Form Submit Start ===');
    console.log('Form data:', formData);
    
    setIsSubmitting(true);
    setError('');
    
    // Validate form
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Check if credentials match demo accounts
      const account = demoAccounts.find(acc => 
        acc.email.toLowerCase() === formData.email.toLowerCase() && 
        acc.password === formData.password
      );
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (account) {
        console.log('Valid demo credentials found:', account);
        onLogin(account);
      } else {
        console.log('Creating new user account');
        const newUser = { 
          email: formData.email, 
          role: 'Travel Enthusiast',
          name: formData.name || 'User'
        };
        onLogin(newUser);
      }
      
      console.log('=== Form Submit Success ===');
    } catch (err) {
      console.error('Form submit error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-following travel trail */}
        <div 
          className="absolute w-40 h-40 bg-gradient-to-r from-white/10 to-yellow-400/20 rounded-full blur-2xl transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
            transform: `scale(${1 + Math.sin(Date.now() * 0.002) * 0.2})`
          }}
        />
        <div 
          className="absolute w-20 h-20 bg-gradient-to-r from-orange-400/30 to-pink-400/30 rounded-full blur-lg transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            transform: `scale(${0.6 + Math.cos(Date.now() * 0.003) * 0.3}) rotate(${Date.now() * 0.01}deg)`
          }}
        />

        {/* Floating Travel Icons */}
        {floatingIcons.map((item) => {
          const IconComponent = item.Icon;
          return (
            <div
              key={item.id}
              className="absolute opacity-20 animate-[float_4s_ease-in-out_infinite]"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
                fontSize: `${item.size}px`
              }}
            >
              <IconComponent className="text-white drop-shadow-lg" />
            </div>
          );
        })}

        {/* Animated Travel Path */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            className="animate-[dash_3s_linear_infinite]"
          />
          <path
            d="M200,300 Q400,200 600,300 T1000,300"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeDasharray="15,10"
            className="animate-[dash_4s_linear_infinite_reverse]"
          />
        </svg>

        {/* Floating Particles with Travel Theme */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-[twinkle_3s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-2 h-2 bg-yellow-300/60 rounded-full" />
            ) : i % 3 === 1 ? (
              <Star className="w-3 h-3 text-white/40" />
            ) : (
              <Heart className="w-2 h-2 text-pink-300/50" />
            )}
          </div>
        ))}
      </div>

      {/* Main Login Card with Enhanced Animation */}
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-lg border-0 shadow-2xl animate-[zoomIn_0.8s_ease-out] relative z-10 transform hover:scale-105 transition-transform duration-300">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center animate-[logoSpin_3s_ease-in-out_infinite]">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Xplorevo
          </CardTitle>
          <p className="text-gray-600 text-sm animate-fade-in">Your Digital Travel Companion 🌍</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm animate-fade-in">
              {error}
            </div>
          )}

          {/* Enhanced Demo Accounts */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Quick Demo Login:
            </p>
            <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
              {demoAccounts.map((account, index) => (
                <Button
                  key={index}
                  onClick={() => handleDemoLogin(account)}
                  disabled={isSubmitting}
                  className={`w-full text-left justify-start bg-gradient-to-r ${account.color} hover:opacity-90 text-white border-0 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50`}
                  variant="outline"
                >
                  <User className="w-4 h-4 mr-2" />
                  <div className="flex-1 text-left">
                    <div className="font-medium">{account.email}</div>
                    <div className="text-xs opacity-80">{account.role}</div>
                  </div>
                  <Badge variant="secondary" className="ml-2 text-xs bg-white/20 text-white border-white/30">
                    Demo
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-all duration-300" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="pl-10 border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300 hover:border-red-300"
                  disabled={isSubmitting}
                />
              </div>
            )}
            
            <div className="relative group">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-all duration-300" />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="pl-10 border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300 hover:border-red-300"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="relative group">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-all duration-300" />
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="pl-10 border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300 hover:border-red-300"
                required
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isSubmitting ? '🚀 Signing In...' : (isLogin ? '🚀 Start Journey' : '🌟 Join Adventure')}
            </Button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {isLogin ? "New Explorer?" : "Already exploring?"}
              <Button
                onClick={() => setIsLogin(!isLogin)}
                variant="link"
                className="text-red-600 hover:text-red-700 font-semibold ml-1 p-0 transform hover:scale-105 transition-all duration-200"
                disabled={isSubmitting}
              >
                {isLogin ? '🎯 Join Now' : '🏠 Sign In'}
              </Button>
            </p>
          </div>

          {/* Enhanced Features */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-3 flex items-center justify-center gap-1">
              <Star className="w-3 h-3 text-yellow-500" />
              What awaits you:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                <Mountain className="w-3 h-3 text-green-500 mr-1" />
                <span>Epic Adventures</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                <Globe className="w-3 h-3 text-blue-500 mr-1" />
                <span>Global Community</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                <Camera className="w-3 h-3 text-purple-500 mr-1" />
                <span>Share Memories</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-3 h-3 text-pink-500 mr-1" />
                <span>Safe Travels</span>
              </div>
            </div>
          </div>

          {/* Login Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-700">
            <strong>🔑 Demo Login Instructions:</strong>
            <br />• Click any demo button above for instant access
            <br />• Or use: admin@xplorevo.com / admin123
            <br />• Or use: traveler@xplorevo.com / traveler123
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(-5px) rotate(-3deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes zoomIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes logoSpin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(5deg) scale(1.05); }
        }
        
        @keyframes dash {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLoginExperience;
