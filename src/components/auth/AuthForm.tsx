
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { Mail, Lock, User, Building } from "lucide-react";
import AuthNotices from "./AuthNotices";
import UserTypeSelector from "./UserTypeSelector";

interface AuthFormProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  userType: string;
  setUserType: (type: string) => void;
}

const AuthForm = ({ isLogin, setIsLogin, userType, setUserType }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Sign in failed",
            description: error.message,
            variant: "destructive"
          });
        } else {
          toast({
            title: "Welcome back!",
            description: "Successfully signed in."
          });
          window.location.href = '/dashboard';
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          toast({
            title: "Sign up failed", 
            description: error.message,
            variant: "destructive"
          });
        } else {
          toast({
            title: "Account created!",
            description: "Please check your email to confirm your account."
          });
        }
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          {isLogin ? "Welcome Back!" : "Join Xplorevo Today"}
        </h2>
        <p className="text-white/80">
          {isLogin ? "Sign in to continue your adventure" : "Create your account to start exploring"}
        </p>
      </div>

      {!isLogin && <UserTypeSelector userType={userType} setUserType={setUserType} />}
      
      {!isLogin && <AuthNotices userType={userType} />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-white">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/60"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password" className="text-white">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/60"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-white text-red-600 hover:bg-white/90 font-semibold py-3 mb-4"
        >
          {loading ? "Please wait..." : (isLogin ? "Sign In" : "Create Account")}
        </Button>
      </form>

      <div className="text-center mb-4">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-white/80 hover:text-white transition-colors"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>

      <div className="relative mb-6">
        <hr className="border-white/20" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-500 to-red-600 px-3 text-white text-sm">
          Demo Accounts
        </span>
      </div>

      <div className="grid gap-2 text-sm">
        <Button 
          type="button"
          variant="outline"
          className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={() => handleDemoLogin('user@gmail.com', 'Pass1212')}
        >
          <User className="w-4 h-4 mr-2" />
          Demo User Login
        </Button>
        <Button 
          type="button"
          variant="outline"
          className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={() => handleDemoLogin('organisation@gmail.com', 'Pass1212')}
        >
          <Building className="w-4 h-4 mr-2" />
          Demo Organisation Login
        </Button>
        <Button 
          type="button"
          variant="outline"
          className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={() => handleDemoLogin('admin@gmail.com', 'Pass1212')}
        >
          <User className="w-4 h-4 mr-2" />
          Demo Admin Login
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
