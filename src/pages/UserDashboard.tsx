import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Star, 
  Heart,
  Award,
  BookOpen,
  Camera,
  Shield,
  Users,
  Trophy,
  Play,
  MessageSquare,
  TrendingUp,
  Clock,
  CreditCard,
  Download
} from "lucide-react";

const UserDashboard = () => {
  const stats = [
    { label: "Trips Completed", value: "12", icon: MapPin, color: "text-blue-600" },
    { label: "Travel Badges", value: "8", icon: Award, color: "text-green-600" },
    { label: "Bucket List", value: "15", icon: Heart, color: "text-purple-600" },
    { label: "Loyalty Points", value: "2,450", icon: Star, color: "text-yellow-600" }
  ];

  const upcomingTrips = [
    { destination: "Manali Adventure", date: "Dec 15-20", status: "Confirmed", participants: 8 },
    { destination: "Goa Beach Trek", date: "Dec 28-31", status: "Waiting List", participants: 12 },
    { destination: "Kerala Backwaters", date: "Jan 5-8", status: "Pending Payment", participants: 6 }
  ];

  const pastTrips = [
    { destination: "Ladakh Expedition", date: "Sep 2024", rating: 5, photos: 45 },
    { destination: "Rishikesh Rapids", date: "Aug 2024", rating: 4, photos: 32 },
    { destination: "Himachal Trek", date: "Jul 2024", rating: 5, photos: 67 }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Adventure Seeker! 🏔️</h1>
        <p className="text-blue-100">Ready for your next expedition? Let's explore the world together.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Trips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              Upcoming Trips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingTrips.map((trip, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">{trip.destination}</h4>
                  <p className="text-sm text-muted-foreground">{trip.date} • {trip.participants} participants</p>
                </div>
                <Badge variant={trip.status === 'Confirmed' ? 'default' : 'secondary'}>
                  {trip.status}
                </Badge>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              Browse New Trips
            </Button>
          </CardContent>
        </Card>

        {/* Past Trips & Memories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-green-500" />
              Trip Memories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pastTrips.map((trip, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">{trip.destination}</h4>
                  <p className="text-sm text-muted-foreground">{trip.date} • {trip.photos} photos</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(trip.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Button size="sm" variant="ghost">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              View All Memories
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-all cursor-pointer">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <h3 className="font-medium">Bucket List</h3>
            <p className="text-sm text-muted-foreground">15 destinations</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-all cursor-pointer">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-medium">Group Bookings</h3>
            <p className="text-sm text-muted-foreground">Join groups</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-all cursor-pointer">
          <CardContent className="p-4 text-center">
            <Play className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <h3 className="font-medium">Upload Reels</h3>
            <p className="text-sm text-muted-foreground">Share moments</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-all cursor-pointer">
          <CardContent className="p-4 text-center">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-medium">Emergency SOS</h3>
            <p className="text-sm text-muted-foreground">24/7 support</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;