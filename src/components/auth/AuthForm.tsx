
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import UserTypeSelector from "./UserTypeSelector";
import AuthFormFields from "./AuthFormFields";
import AuthNotices from "./AuthNotices";
import SocialLogin from "./SocialLogin";

interface AuthFormProps {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  userType: string;
  setUserType: (userType: string) => void;
}

const AuthForm = ({ isLogin, setIsLogin, userType, setUserType }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (!error) {
          navigate("/dashboard");
        }
      } else {
        const userData = {
          full_name: fullName,
          user_type: userType,
          phone: phone,
          college_name: userType === "ambassador" ? collegeName : null,
        };
        
        const { error } = await signUp(email, password, userData);
        if (!error) {
          navigate("/dashboard");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-fade-in delay-300">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-gray-900">
            {isLogin ? "Welcome Back!" : "Join Xplorevo"}
          </CardTitle>
          <p className="text-gray-600 text-sm">
            {isLogin ? "Sign in to your account" : "Create your account to get started"}
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {!isLogin && <UserTypeSelector userType={userType} setUserType={setUserType} />}
          
          <AuthNotices userType={userType} />

          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthFormFields
              isLogin={isLogin}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              fullName={fullName}
              setFullName={setFullName}
              phone={phone}
              setPhone={setPhone}
              collegeName={collegeName}
              setCollegeName={setCollegeName}
              userType={userType}
            />

            <Button
              type="submit"
              className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 animate-fade-in delay-700"
              disabled={loading}
            >
              {loading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
            </Button>
          </form>

          <SocialLogin />

          <div className="text-center animate-fade-in delay-800">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-red-500 hover:text-red-600 font-medium transition-colors duration-300"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
