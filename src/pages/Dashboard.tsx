
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
  Eye
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const [userType, setUserType] = useState("traveler"); // traveler, operator, rental

  const dashboardData = {
    traveler: {
      title: "Traveler Dashboard",
      stats: [
        { label: "Trips Completed", value: "12", icon: MapPin, color: "text-blue-600" },
        { label: "Countries Visited", value: "3", icon: Star, color: "text-green-600" },
        { label: "Travel Points", value: "2,450", icon: TrendingUp, color: "text-purple-600" },
        { label: "Saved Amount", value: "₹45,000", icon: DollarSign, color: "text-red-600" }
      ],
      recentBookings: [
        { id: 1, title: "Himalayan Trek", date: "Dec 15, 2024", status: "Confirmed", amount: "₹15,999" },
        { id: 2, title: "Goa Beach Resort", date: "Nov 28, 2024", status: "Completed", amount: "₹8,999" }
      ]
    },
    operator: {
      title: "Tour Operator Dashboard",
      stats: [
        { label: "Total Bookings", value: "248", icon: Users, color: "text-blue-600" },
        { label: "Active Packages", value: "12", icon: MapPin, color: "text-green-600" },
        { label: "Revenue This Month", value: "₹2.4L", icon: DollarSign, color: "text-red-600" },
        { label: "Average Rating", value: "4.8", icon: Star, color: "text-yellow-600" }
      ],
      recentBookings: [
        { id: 1, title: "Himalayan Trek Package", date: "Today", status: "New Booking", amount: "₹15,999" },
        { id: 2, title: "Rajasthan Desert Safari", date: "Yesterday", status: "Confirmed", amount: "₹12,499" }
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
      recentBookings: [
        { id: 1, title: "Royal Enfield Classic 350", date: "Today", status: "Rented", amount: "₹800/day" },
        { id: 2, title: "Maruti Swift Dzire", date: "Yesterday", status: "Returned", amount: "₹1,500/day" }
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
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
                {currentData.title}
              </h1>
              <p className="text-red-100 animate-fade-in delay-200">
                Welcome back! Here's what's happening with your account.
              </p>
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

      {/* User Type Switcher (Demo) */}
      <section className="py-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <Button
              variant={userType === "traveler" ? "default" : "outline"}
              onClick={() => setUserType("traveler")}
              className={userType === "traveler" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <User className="w-4 h-4 mr-2" />
              Traveler Demo
            </Button>
            <Button
              variant={userType === "operator" ? "default" : "outline"}
              onClick={() => setUserType("operator")}
              className={userType === "operator" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <Building className="w-4 h-4 mr-2" />
              Tour Operator Demo
            </Button>
            <Button
              variant={userType === "rental" ? "default" : "outline"}
              onClick={() => setUserType("rental")}
              className={userType === "rental" ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <Car className="w-4 h-4 mr-2" />
              Rental Partner Demo
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
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <Card className="animate-fade-in delay-400">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-bold">
                    {userType === "traveler" ? "Recent Bookings" : "Recent Activity"}
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentData.recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="font-semibold text-gray-900">{booking.title}</h3>
                          <p className="text-sm text-gray-600">{booking.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={booking.status === "Confirmed" ? "default" : "outline"}
                            className={booking.status === "Confirmed" ? "bg-green-500" : ""}
                          >
                            {booking.status}
                          </Badge>
                          <p className="text-sm font-semibold text-gray-900 mt-1">{booking.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <Card className="animate-fade-in delay-600">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userType === "traveler" && (
                    <>
                      <Button className="w-full justify-start bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Book New Trip
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MapPin className="w-4 h-4 mr-2" />
                        View Wishlist
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Star className="w-4 h-4 mr-2" />
                        Write Review
                      </Button>
                    </>
                  )}
                  
                  {userType === "operator" && (
                    <>
                      <Button className="w-full justify-start bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Add New Package
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        Manage Bookings
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        View Analytics
                      </Button>
                    </>
                  )}
                  
                  {userType === "rental" && (
                    <>
                      <Button className="w-full justify-start bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Vehicle
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Car className="w-4 h-4 mr-2" />
                        Manage Fleet
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="w-4 h-4 mr-2" />
                        View Bookings
                      </Button>
                    </>
                  )}
                  
                  <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>

              {/* Profile Card */}
              <Card className="mt-6 animate-fade-in delay-800">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Demo User</h3>
                      <p className="text-sm text-gray-600">demo@xplorevo.com</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
