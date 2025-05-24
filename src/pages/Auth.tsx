
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Eye, 
  EyeOff,
  ArrowRight,
  Building,
  Car,
  Shield,
  MapPin,
  Instagram
} from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("traveler");

  const userTypes = [
    { 
      id: "traveler", 
      name: "Travel Enthusiast", 
      icon: User, 
      color: "from-blue-500 to-blue-600",
      description: "Explore amazing destinations" 
    },
    { 
      id: "operator", 
      name: "Tours & Trek Organizer", 
      icon: Building, 
      color: "from-green-500 to-green-600",
      description: "Showcase your travel packages" 
    },
    { 
      id: "rental", 
      name: "Rental & Hotel Partner", 
      icon: Car, 
      color: "from-orange-500 to-orange-600",
      description: "List your vehicles and properties" 
    },
    { 
      id: "admin", 
      name: "Admin Access", 
      icon: Shield, 
      color: "from-red-500 to-red-600",
      description: "Secure administrative access" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="text-center lg:text-left text-white animate-fade-in">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 bg-white/10 rounded-2xl flex items-center justify-center animate-bounce">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Xplorevo
              </h1>
              <p className="text-xl lg:text-2xl text-red-100 mb-6 animate-fade-in delay-200">
                India's First Digital Travel Ecosystem
              </p>
              <div className="space-y-3 text-red-100 animate-fade-in delay-400">
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  ✨ Connect with verified tour operators
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  🚗 Rent vehicles from trusted partners
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  🏔️ Discover amazing destinations
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  🤝 Join fellow travelers
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  📍 Based in Pune, Maharashtra
                </p>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                <a 
                  href="https://www.instagram.com/xplorevo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-100 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl animate-scale-in border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? "Welcome Back!" : "Join Xplorevo"}
              </CardTitle>
              <p className="text-gray-600">
                {isLogin ? "Sign in to continue your journey" : "Start your adventure today"}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* User Type Selection */}
              {!isLogin && (
                <div className="space-y-4 animate-fade-in">
                  <label className="text-sm font-medium text-gray-700">Choose your account type:</label>
                  <div className="grid grid-cols-1 gap-3">
                    {userTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <Button
                          key={type.id}
                          variant={userType === type.id ? "default" : "outline"}
                          onClick={() => setUserType(type.id)}
                          className={`justify-start h-auto p-4 ${
                            userType === type.id 
                              ? `bg-gradient-to-r ${type.color} text-white hover:opacity-90` 
                              : "hover:bg-gray-50 border-gray-200"
                          } transition-all duration-300 transform hover:scale-105`}
                        >
                          <div className="flex items-center gap-3 w-full">
                            <IconComponent className="w-6 h-6 flex-shrink-0" />
                            <div className="text-left">
                              <div className="font-semibold">{type.name}</div>
                              <div className={`text-xs ${userType === type.id ? 'text-white/80' : 'text-gray-500'}`}>
                                {type.description}
                              </div>
                            </div>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Admin Notice */}
              {!isLogin && userType === "admin" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-red-700">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">Admin Access</span>
                  </div>
                  <p className="text-xs text-red-600 mt-1">
                    Admin accounts require special verification and approval.
                  </p>
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-4 animate-fade-in delay-200">
                {!isLogin && (
                  <div className="relative group">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <Input
                      type="text"
                      placeholder="Full Name"
                      className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                )}
                
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                {!isLogin && (
                  <div className="relative group">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                )}

                <div className="relative group">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-10 w-10 hover:bg-gray-100"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>

                {!isLogin && (
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <Button className="w-full h-12 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold transform hover:scale-105 transition-all duration-300 animate-fade-in delay-300">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Toggle Auth Mode */}
              <div className="text-center animate-fade-in delay-400">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <Button
                    variant="link"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-red-600 hover:text-red-700 font-semibold ml-1"
                  >
                    {isLogin ? "Sign Up" : "Sign In"}
                  </Button>
                </p>
              </div>

              {/* Social Login */}
              <div className="relative animate-fade-in delay-500">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <Button variant="outline" className="w-full h-12 border-gray-200 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 animate-fade-in delay-600">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
