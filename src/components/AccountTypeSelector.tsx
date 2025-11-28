import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Car, Trophy, Shield } from "lucide-react";

interface AccountType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const accountTypes: AccountType[] = [
  {
    id: "user",
    title: "Travel Enthusiast",
    description: "Explore destinations",
    icon: <Users className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "organisation",
    title: "Tours & Trek Organizer",
    description: "Upload packages",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "partner",
    title: "Rental & Hotel Partner",
    description: "List vehicles & rooms",
    icon: <Car className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ambassador",
    title: "Campus Ambassador",
    description: "Earn through promotions",
    icon: <Trophy className="h-6 w-6" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "superadmin",
    title: "Admin Access",
    description: "Secure login for admin panel",
    icon: <Shield className="h-6 w-6" />,
    color: "from-red-500 to-rose-500",
  },
];

interface AccountTypeSelectorProps {
  onSelect: (type: string) => void;
}

export const AccountTypeSelector = ({ onSelect }: AccountTypeSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {accountTypes.map((type) => (
        <Card
          key={type.id}
          className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary"
          onClick={() => onSelect(type.id)}
        >
          <CardHeader>
            <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center text-white mb-2`}>
              {type.icon}
            </div>
            <CardTitle className="text-lg">{type.title}</CardTitle>
            <CardDescription>{type.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-primary font-medium">Select →</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
