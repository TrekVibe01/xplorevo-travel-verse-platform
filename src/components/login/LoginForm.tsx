
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, User } from "lucide-react";

interface LoginFormProps {
  isLogin: boolean;
  onSubmit: (formData: { email: string; password: string; name: string }) => void;
  onToggleMode: () => void;
  isSubmitting: boolean;
}

const LoginForm = ({ isLogin, onSubmit, onToggleMode, isSubmitting }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
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

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          {isLogin ? "New Explorer?" : "Already exploring?"}
          <Button
            onClick={onToggleMode}
            variant="link"
            className="text-red-600 hover:text-red-700 font-semibold ml-1 p-0 transform hover:scale-105 transition-all duration-200"
            disabled={isSubmitting}
          >
            {isLogin ? '🎯 Join Now' : '🏠 Sign In'}
          </Button>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
