
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Eye, 
  EyeOff,
  Building
} from "lucide-react";

interface AuthFormFieldsProps {
  isLogin: boolean;
  userType: string;
}

const AuthFormFields = ({ isLogin, userType }: AuthFormFieldsProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
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

      {!isLogin && userType === "ambassador" && (
        <div className="relative group">
          <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
          <Input
            type="text"
            placeholder="College/University Name"
            className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
      )}

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
  );
};

export default AuthFormFields;
