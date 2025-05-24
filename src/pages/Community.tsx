
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  MapPin, 
  Calendar, 
  Plus,
  Search,
  Filter,
  MessageCircle,
  Heart,
  Crown,
  Star,
  Trophy
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Community = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  const communities = [
    {
      id: 1,
      name: "Pune Trekkers United",
      description: "Adventure enthusiasts exploring the Western Ghats around Pune",
      members: "3.2K",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Trekking",
      isVerified: true,
      recentActivity: "Sinhagad Trek planned for this weekend"
    },
    {
      id: 2,
      name: "Pune Foodies Explorer",
      description: "Discovering the best food spots and hidden gems in Pune",
      members: "2.8K",
      location: "Pune, Maharashtra", 
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food & Culture",
      isVerified: false,
      recentActivity: "New food trail in Koregaon Park discovered"
    },
    {
      id: 3,
      name: "Solo Female Travelers - Pune",
      description: "Safe travel community for women explorers in and around Pune",
      members: "1.9K",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Solo Travel",
      isVerified: true,
      recentActivity: "Weekend trip to Lonavala organized"
    },
    {
      id: 4,
      name: "Pune Photography Club",
      description: "Capturing the beauty of Pune and Maharashtra through lens",
      members: "2.1K",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Photography",
      isVerified: true,
      recentActivity: "Sunrise photography at Sinhagad planned"
    },
    {
      id: 5,
      name: "Pune Adventure Sports",
      description: "For adrenaline junkies - paragliding, rock climbing, rappelling",
      members: "1.5K",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure Sports",
      isVerified: false,
      recentActivity: "Paragliding session at Kamshet this Sunday"
    }
  ];

  const bucketListItems = [
    { id: 1, destination: "Rajgad Fort Night Trek", status: "planning", priority: "high", location: "Near Pune" },
    { id: 2, destination: "Monsoon Trek to Bhimashankar", status: "completed", priority: "medium", location: "Pune District" },
    { id: 3, destination: "Camping at Pawna Lake", status: "wishlist", priority: "high", location: "Lonavala" },
    { id: 4, destination: "Heritage Walk in Old Pune", status: "planning", priority: "low", location: "Pune City" },
    { id: 5, destination: "Food Trail on FC Road", status: "completed", priority: "medium", location: "Pune" }
  ];

  const leaderboard = [
    { rank: 1, name: "AdventurePune", points: 2450, badge: "Gold Explorer" },
    { rank: 2, name: "TrekMaster", points: 2340, badge: "Mountain King" },
    { rank: 3, name: "PuneFoodie", points: 2180, badge: "Taste Explorer" },
    { rank: 4, name: "PhotoPune", points: 1950, badge: "Visual Storyteller" },
    { rank: 5, name: "SoloTraveler", points: 1820, badge: "Fearless Explorer" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Pune Travel
            <span className="block text-yellow-300">Community</span>
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            Connect with fellow travelers in Pune and create unforgettable memories together
          </p>
        </div>
      </section>

      {/* Search and Create */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search communities in Pune..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 flex items-center gap-2"
                onClick={() => setShowCreateForm(true)}
              >
                <Plus className="w-4 h-4" />
                Create Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Communities */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pune Travel Communities</h2>
              <div className="space-y-6">
                {communities.map((community, index) => (
                  <Card key={community.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="flex">
                      <img
                        src={community.image}
                        alt={community.name}
                        className="w-32 h-32 object-cover"
                      />
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{community.name}</h3>
                          {community.isVerified && (
                            <Crown className="w-5 h-5 text-yellow-500" />
                          )}
                          <Badge variant="outline">{community.category}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{community.description}</p>
                        <p className="text-sm text-green-600 mb-4">📍 {community.recentActivity}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {community.members} members
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {community.location}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Join Community
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Travel Bucket List */}
              <Card className="animate-fade-in delay-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    My Pune Travel Bucket List
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bucketListItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{item.destination}</h4>
                        <p className="text-xs text-gray-600">{item.location}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant={item.status === "completed" ? "default" : "outline"}
                            className={item.status === "completed" ? "bg-green-500" : ""}
                          >
                            {item.status}
                          </Badge>
                          <Badge variant="outline" className={
                            item.priority === "high" ? "border-red-500 text-red-500" :
                            item.priority === "medium" ? "border-yellow-500 text-yellow-500" :
                            "border-gray-500 text-gray-500"
                          }>
                            {item.priority}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Destination
                  </Button>
                </CardContent>
              </Card>

              {/* Leaderboard */}
              <Card className="animate-fade-in delay-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Pune Traveler Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          user.rank === 1 ? 'bg-yellow-500 text-white' :
                          user.rank === 2 ? 'bg-gray-400 text-white' :
                          user.rank === 3 ? 'bg-orange-500 text-white' :
                          'bg-gray-200 text-gray-700'
                        }`}>
                          {user.rank}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{user.name}</div>
                          <div className="text-xs text-gray-500">{user.badge}</div>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-red-600">{user.points}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="animate-fade-in delay-1000">
                <CardHeader>
                  <CardTitle>My Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Communities Joined</span>
                    <span className="font-bold text-red-600">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Bucket List Items</span>
                    <span className="font-bold text-red-600">{bucketListItems.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Pune Trips Completed</span>
                    <span className="font-bold text-red-600">7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Travel Points</span>
                    <span className="font-bold text-red-600">1,250</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Create Community Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white">
            <CardHeader>
              <CardTitle>Create New Community</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Community Name</label>
                <Input placeholder="e.g., Pune Weekend Warriors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Input placeholder="Brief description of your community" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Input placeholder="e.g., Trekking, Food, Photography" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location Focus</label>
                <Input placeholder="e.g., Pune, Maharashtra" defaultValue="Pune, Maharashtra" />
              </div>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600"
                  onClick={() => {
                    alert('Community created successfully! Start inviting members.');
                    setShowCreateForm(false);
                  }}
                >
                  Create Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Community;
