
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import UserTypeSelector from "./UserTypeSelector";
import AuthFormFields from "./AuthFormFields";
import AuthNotices from "./AuthNotices";
import SocialLogin from "./SocialLogin";

interface AuthFormProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  userType: string;
  setUserType: (type: string) => void;
}

const AuthForm = ({ isLogin, setIsLogin, userType, setUserType }: AuthFormProps) => {
  return (
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
          <UserTypeSelector userType={userType} setUserType={setUserType} />
        )}

        {/* Campus Ambassador Notice */}
        {!isLogin && <AuthNotices userType={userType} />}

        {/* Form Fields */}
        <AuthFormFields isLogin={isLogin} userType={userType} />

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
        <SocialLogin />
      </CardContent>
    </Card>
  );
};

export default AuthForm;
