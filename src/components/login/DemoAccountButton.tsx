
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

interface DemoAccount {
  email: string;
  password: string;
  role: string;
  color: string;
}

interface DemoAccountButtonProps {
  account: DemoAccount;
  onLogin: (account: DemoAccount) => void;
  isSubmitting: boolean;
}

const DemoAccountButton = ({ account, onLogin, isSubmitting }: DemoAccountButtonProps) => {
  return (
    <Button
      onClick={() => onLogin(account)}
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
  );
};

export default DemoAccountButton;
