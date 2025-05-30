
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  MapPin, 
  Calendar, 
  Star, 
  TrendingUp,
  DollarSign,
  Users,
  Car,
  Building,
  Bell,
  Settings,
  LogOut,
  Plus,
  Eye,
  Award,
  BookOpen,
  Camera,
  Shield,
  Heart,
  Target,
  Trophy,
  Smartphone,
  UserCheck,
  BarChart3,
  Package,
  CreditCard,
  FileText,
  AlertTriangle,
  MessageSquare,
  Play
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const [userType, setUserType] = useState("traveler");

  const dashboardData = {
    traveler: {
      title: "Travel Enthusiast Dashboard",
      stats: [
        { label: "Trips Completed", value: "12", icon: MapPin, color: "text-blue-600" },
        { label: "Travel Badges", value: "8", icon: Award, color: "text-green-600" },
        { label: "Bucket List", value: "15", icon: Heart, color: "text-purple-600" },
        { label: "Loyalty Points", value: "2,450", icon: Star, color: "text-yellow-600" }
      ],
      features: [
        { name: "Browse Packages", icon: Package, description: "Filter by destination, budget & ratings" },
        { name: "Bucket List", icon: Heart, description: "Manage your travel wishlist" },
        { name: "Group Bookings", icon: Users, description: "Join fellow travelers" },
        { name: "Travel Journal", icon: BookOpen, description: "Document your adventures" },
        { name: "Upload Reels", icon: Camera, description: "Share travel content" },
        { name: "Emergency SOS", icon: Shield, description: "24/7 safety support" },
        { name: "Women Groups", icon: UserCheck, description: "Safe travel options" },
        { name: "Leaderboard", icon: Trophy, description: "Top explorer rankings" }
      ]
    },
    operator: {
      title: "Tour Operator Dashboard",
      stats: [
        { label: "Total Bookings", value: "248", icon: Users, color: "text-blue-600" },
        { label: "Active Packages", value: "12", icon: Package, color: "text-green-600" },
        { label: "Monthly Revenue", value: "₹2.4L", icon: DollarSign, color: "text-red-600" },
        { label: "Partner Rating", value: "4.8", icon: Star, color: "text-yellow-600" }
      ],
      features: [
        { name: "Profile Verification", icon: UserCheck, description: "Get verified partner status" },
        { name: "Package Management", icon: Package, description: "Create, edit, delete packages" },
        { name: "Booking Analytics", icon: BarChart3, description: "View performance metrics" },
        { name: "Payment Dashboard", icon: CreditCard, description: "Track earnings & payouts" },
        { name: "Customer Feedback", icon: MessageSquare, description: "Reviews & ratings" },
        { name: "Eco Certification", icon: Award, description: "Sustainable travel badges" },
        { name: "Demographics", icon: Users, description: "User retention insights" },
        { name: "Promotional Tools", icon: TrendingUp, description: "Marketing campaigns" }
      ]
    },
    rental: {
      title: "Rental Partner Dashboard",
      stats: [
        { label: "Fleet Size", value: "25", icon: Car, color: "text-blue-600" },
        { label: "Active Rentals", value: "8", icon: TrendingUp, color: "text-green-600" },
        { label: "Monthly Revenue", value: "₹85,000", icon: DollarSign, color: "text-red-600" },
        { label: "Customer Rating", value: "4.6", icon: Star, color: "text-yellow-600" }
      ],
      features: [
        { name: "Inventory Management", icon: Car, description: "Manage vehicles & pricing" },
        { name: "Doorstep Delivery", icon: MapPin, description: "Home delivery service" },
        { name: "Insurance Filters", icon: Shield, description: "Coverage options" },
        { name: "Booking Management", icon: Calendar, description: "Accept & track rentals" },
        { name: "Customer Reviews", icon: Star, description: "Rating & feedback system" },
        { name: "Emergency Support", icon: AlertTriangle, description: "Breakdown assistance" },
        { name: "Analytics Dashboard", icon: BarChart3, description: "Performance insights" },
        { name: "Payment Processing", icon: CreditCard, description: "Secure transactions" }
      ]
    },
    ambassador: {
      title: "Campus Ambassador Portal",
      stats: [
        { label: "Referrals Made", value: "45", icon: Users, color: "text-blue-600" },
        { label: "Performance Score", value: "92%", icon: TrendingUp, color: "text-green-600" },
        { label: "Cash Rewards", value: "₹12,500", icon: DollarSign, color: "text-red-600" },
        { label: "Leaderboard Rank", value: "#3", icon: Trophy, color: "text-yellow-600" }
      ],
      features: [
        { name: "College Registration", icon: Building, description: "Represent Xplorevo on campus" },
        { name: "Referral Tracking", icon: Users, description: "Monitor friend signups" },
        { name: "Performance Metrics", icon: BarChart3, description: "View engagement stats" },
        { name: "Leaderboard", icon: Trophy, description: "Campus ranking system" },
        { name: "Certificates", icon: Award, description: "Official recognition" },
        { name: "Travel Discounts", icon: DollarSign, description: "Exclusive offers" },
        { name: "Cash Rewards", icon: CreditCard, description: "Monetary incentives" },
        { name: "Internship Portal", icon: Smartphone, description: "Career opportunities" }
      ]
    },
    admin: {
      title: "Admin Control Center",
      stats: [
        { label: "Total Users", value: "10,248", icon: Users, color: "text-blue-600" },
        { label: "Active Packages", value: "450", icon: Package, color: "text-green-600" },
        { label: "Monthly Revenue", value: "₹15.2L", icon: DollarSign, color: "text-red-600" },
        { label: "Platform Rating", value: "4.7", icon: Star, color: "text-yellow-600" }
      ],
      features: [
        { name: "User Management", icon: UserCheck, description: "Approve/reject registrations" },
        { name: "Package Moderation", icon: Package, description: "Review travel packages" },
        { name: "Content Publishing", icon: FileText, description: "Blogs & promotions" },
        { name: "Emergency Monitoring", icon: AlertTriangle, description: "SOS alert management" },
        { name: "Trending Reels", icon: Play, description: "Curate featured content" },
        { name: "Financial Dashboard", icon: BarChart3, description: "Revenue analytics" },
        { name: "Campaign Insights", icon: TrendingUp, description: "Marketing performance" },
        { name: "System Settings", icon: Settings, description: "Platform configuration" }
      ]
    }
  };

  const currentData = dashboardData[userType];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-red-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/dd4db603-c0e5-47f6-aad9-956b576bb16f.png" 
                alt="Xplorevo" 
                className="w-12 h-12 rounded-xl animate-[logoFloat_3s_ease-in-out_infinite]"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
                  {currentData.title}
                </h1>
                <p className="text-red-100 animate-fade-in delay-200">
                  Welcome back! Here's your activity overview.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Type Switcher */}
      <section className="py-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={userType === "traveler" ? "default" : "outline"}
              onClick={() => setUserType("traveler")}
              className={userType === "traveler" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <User className="w-4 h-4 mr-2" />
              Travel Enthusiast
            </Button>
            <Button
              variant={userType === "operator" ? "default" : "outline"}
              onClick={() => setUserType("operator")}
              className={userType === "operator" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <Building className="w-4 h-4 mr-2" />
              Tour Operator
            </Button>
            <Button
              variant={userType === "rental" ? "default" : "outline"}
              onClick={() => setUserType("rental")}
              className={userType === "rental" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <Car className="w-4 h-4 mr-2" />
              Rental Partner
            </Button>
            <Button
              variant={userType === "ambassador" ? "default" : "outline"}
              onClick={() => setUserType("ambassador")}
              className={userType === "ambassador" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Campus Ambassador
            </Button>
            <Button
              variant={userType === "admin" ? "default" : "outline"}
              onClick={() => setUserType("admin")}
              className={userType === "admin" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <Shield className="w-4 h-4 mr-2" />
              Admin Panel
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentData.stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      </div>
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentData.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-6 text-center">
                    <IconComponent className="w-10 h-10 text-red-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Credentials Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center">Demo Login Credentials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-2">Travel Enthusiast</h4>
                  <p className="text-sm text-gray-600">Email: traveler@xplorevo.com</p>
                  <p className="text-sm text-gray-600">Password: demo123</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-2">Tour Operator</h4>
                  <p className="text-sm text-gray-600">Email: operator@xplorevo.com</p>
                  <p className="text-sm text-gray-600">Password: demo123</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-2">Rental Partner</h4>
                  <p className="text-sm text-gray-600">Email: rental@xplorevo.com</p>
                  <p className="text-sm text-gray-600">Password: demo123</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-2">Campus Ambassador</h4>
                  <p className="text-sm text-gray-600">Email: ambassador@xplorevo.com</p>
                  <p className="text-sm text-gray-600">Password: demo123</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-2">Admin</h4>
                  <p className="text-sm text-gray-600">Email: admin@xplorevo.com</p>
                  <p className="text-sm text-gray-600">Password: admin123</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Login</h4>
                  <p className="text-sm text-gray-600">Use any Google account</p>
                  <p className="text-sm text-gray-600">for instant access</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <style>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(3deg); }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
