
import { Button } from "@/components/ui/button";
import { 
  User, 
  Building, 
  Car, 
  Shield, 
  GraduationCap 
} from "lucide-react";

interface UserType {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

interface UserTypeSelectorProps {
  userType: string;
  setUserType: (type: string) => void;
}

const UserTypeSelector = ({ userType, setUserType }: UserTypeSelectorProps) => {
  const userTypes: UserType[] = [
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
      id: "ambassador", 
      name: "Campus Ambassador", 
      icon: GraduationCap, 
      color: "from-purple-500 to-purple-600",
      description: "Earn rewards by promoting Xplorevo" 
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
  );
};

export default UserTypeSelector;
