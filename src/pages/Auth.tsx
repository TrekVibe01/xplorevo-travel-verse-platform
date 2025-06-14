
import { useState } from "react";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthForm from "@/components/auth/AuthForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("traveler");

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
          <AuthHeader />

          {/* Right Side - Auth Form */}
          <AuthForm 
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            userType={userType}
            setUserType={setUserType}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
