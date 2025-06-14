
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Trophy, 
  MapPin, 
  DollarSign, 
  Calendar,
  TrendingUp,
  Award,
  Star,
  GraduationCap,
  Target,
  Gift,
  BookOpen
} from "lucide-react";

const CampusAmbassadorDashboard = () => {
  const ambassadorData = {
    name: "Priya Sharma",
    college: "Pune University",
    rank: 3,
    totalReferrals: 45,
    monthlyReferrals: 12,
    totalEarnings: 12500,
    monthlyEarnings: 3200,
    totalBookings: 23,
    monthlyBookings: 8,
    performanceScore: 92
  };

  const recentReferrals = [
    { name: "Arjun Patel", date: "2024-06-12", status: "Registered", reward: 250 },
    { name: "Sneha Kumar", date: "2024-06-11", status: "First Booking", reward: 500 },
    { name: "Vikram Singh", date: "2024-06-10", status: "Registered", reward: 250 },
    { name: "Meera Joshi", date: "2024-06-09", status: "Active User", reward: 100 },
    { name: "Rohit Mehta", date: "2024-06-08", status: "Registered", reward: 250 }
  ];

  const recentBookings = [
    { user: "Arjun Patel", package: "Goa Beach Adventure", date: "2024-06-13", commission: 800 },
    { user: "Sneha Kumar", package: "Himachal Trek", date: "2024-06-11", commission: 1200 },
    { user: "Vikram Singh", package: "Rajasthan Heritage Tour", date: "2024-06-09", commission: 950 },
    { user: "Meera Joshi", package: "Kerala Backwaters", date: "2024-06-07", commission: 700 }
  ];

  const leaderboard = [
    { rank: 1, name: "Rajesh Kumar", college: "VIT Pune", referrals: 67, earnings: 18500 },
    { rank: 2, name: "Anita Sharma", college: "COEP", referrals: 52, earnings: 15200 },
    { rank: 3, name: "Priya Sharma", college: "Pune University", referrals: 45, earnings: 12500 },
    { rank: 4, name: "Kiran Patel", college: "MIT Pune", referrals: 38, earnings: 10800 },
    { rank: 5, name: "Neha Singh", college: "SPPU", referrals: 31, earnings: 8900 }
  ];

  const achievements = [
    { name: "First Referral", icon: "🎯", earned: true, description: "Made your first successful referral" },
    { name: "Top 10 Rank", icon: "🏆", earned: true, description: "Reached top 10 in monthly rankings" },
    { name: "50 Referrals", icon: "👥", earned: false, description: "Complete 50 total referrals" },
    { name: "₹20k Earnings", icon: "💰", earned: false, description: "Earn ₹20,000 total commission" },
    { name: "College Star", icon: "⭐", earned: true, description: "#1 ambassador in your college" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Campus Ambassador Dashboard</h1>
              <p className="text-gray-600">Welcome back, {ambassadorData.name}!</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              {ambassadorData.college}
            </Badge>
            <Badge variant="outline" className="border-yellow-400 text-yellow-600">
              Rank #{ambassadorData.rank}
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Referrals</p>
                  <p className="text-2xl font-bold text-purple-600">{ambassadorData.totalReferrals}</p>
                  <p className="text-xs text-green-600">+{ambassadorData.monthlyReferrals} this month</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-green-600">₹{ambassadorData.totalEarnings.toLocaleString()}</p>
                  <p className="text-xs text-green-600">+₹{ambassadorData.monthlyEarnings} this month</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Bookings Generated</p>
                  <p className="text-2xl font-bold text-blue-600">{ambassadorData.totalBookings}</p>
                  <p className="text-xs text-green-600">+{ambassadorData.monthlyBookings} this month</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Performance Score</p>
                  <p className="text-2xl font-bold text-yellow-600">{ambassadorData.performanceScore}%</p>
                  <p className="text-xs text-green-600">Excellent performance!</p>
                </div>
                <TrendingUp className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Referrals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Recent Referrals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReferrals.map((referral, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{referral.name}</h4>
                      <p className="text-sm text-gray-600">{referral.date}</p>
                      <Badge 
                        variant="outline" 
                        className={
                          referral.status === "First Booking" ? "border-green-500 text-green-600" :
                          referral.status === "Active User" ? "border-blue-500 text-blue-600" :
                          "border-gray-500 text-gray-600"
                        }
                      >
                        {referral.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">₹{referral.reward}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Bookings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Recent Bookings (Your Referrals)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{booking.user}</h4>
                      <p className="text-sm text-gray-600">{booking.package}</p>
                      <p className="text-xs text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">₹{booking.commission}</p>
                      <p className="text-xs text-gray-500">Commission</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Campus Ambassador Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((ambassador, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    ambassador.name === ambassadorData.name ? 'bg-purple-50 border-2 border-purple-200' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      ambassador.rank === 1 ? 'bg-yellow-400 text-white' :
                      ambassador.rank === 2 ? 'bg-gray-400 text-white' :
                      ambassador.rank === 3 ? 'bg-amber-600 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {ambassador.rank}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{ambassador.name}</h4>
                      <p className="text-sm text-gray-600">{ambassador.college}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{ambassador.referrals} referrals</p>
                    <p className="text-sm text-green-600">₹{ambassador.earnings.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`text-center p-4 rounded-lg border-2 ${
                    achievement.earned 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold text-sm mb-1">{achievement.name}</h4>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                  {achievement.earned && (
                    <Badge className="mt-2 bg-green-500 text-white text-xs">Earned!</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CampusAmbassadorDashboard;
