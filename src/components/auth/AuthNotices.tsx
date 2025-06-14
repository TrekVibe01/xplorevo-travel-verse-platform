
import { GraduationCap, Shield } from "lucide-react";

interface AuthNoticesProps {
  userType: string;
}

const AuthNotices = ({ userType }: AuthNoticesProps) => {
  if (userType === "ambassador") {
    return (
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 animate-fade-in">
        <div className="flex items-center gap-2 text-purple-700">
          <GraduationCap className="w-4 h-4" />
          <span className="text-sm font-medium">Campus Ambassador Program</span>
        </div>
        <p className="text-xs text-purple-600 mt-1">
          Join our exclusive program and earn rewards for promoting Xplorevo in your college!
        </p>
      </div>
    );
  }

  if (userType === "admin") {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-fade-in">
        <div className="flex items-center gap-2 text-red-700">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">Admin Access</span>
        </div>
        <p className="text-xs text-red-600 mt-1">
          Admin accounts require special verification and approval.
        </p>
      </div>
    );
  }

  return null;
};

export default AuthNotices;
