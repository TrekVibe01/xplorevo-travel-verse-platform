
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import LoginForm from "./login/LoginForm";
import FloatingAnimations from "./login/FloatingAnimations";
import FeaturesList from "./login/FeaturesList";

interface AnimatedLoginExperienceProps {
  onLogin: (credentials: any) => void;
}

const AnimatedLoginExperience = ({ onLogin }: AnimatedLoginExperienceProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFormSubmit = async (formData: { email: string; password: string; name: string }) => {
    console.log('=== Form Submit Start ===');
    console.log('Form data:', formData);
    
    setIsSubmitting(true);
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Creating user account');
      const newUser = { 
        email: formData.email, 
        role: 'Travel Enthusiast',
        name: formData.name || 'User'
      };
      onLogin(newUser);
      
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
      <FloatingAnimations mousePosition={mousePosition} />

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
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm animate-fade-in">
              {error}
            </div>
          )}

          <LoginForm
            isLogin={isLogin}
            onSubmit={handleFormSubmit}
            onToggleMode={() => setIsLogin(!isLogin)}
            isSubmitting={isSubmitting}
          />

          <FeaturesList />
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
