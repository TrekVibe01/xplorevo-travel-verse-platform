
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
  Crown
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Community = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const communities = [
    {
      id: 1,
      name: "Pune Trekkers",
      description: "Adventure enthusiasts exploring the Western Ghats",
      members: "2.4K",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Trekking",
      isVerified: true
    },
    {
      id: 2,
      name: "Mumbai Beach Lovers",
      description: "Coastal adventures and beach camping",
      members: "1.8K",
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Beach",
      isVerified: false
    },
    {
      id: 3,
      name: "Solo Female Travelers",
      description: "Safe travel community for women explorers",
      members: "3.1K",
      location: "Pan India",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Solo Travel",
      isVerified: true
    }
  ];

  const bucketListItems = [
    { id: 1, destination: "Ladakh", status: "planning", priority: "high" },
    { id: 2, destination: "Kerala Backwaters", status: "completed", priority: "medium" },
    { id: 3, destination: "Rajasthan Desert", status: "wishlist", priority: "high" },
    { id: 4, destination: "Northeast India", status: "planning", priority: "low" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Travel
            <span className="block text-yellow-300">Community</span>
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            Connect with fellow travelers and create your bucket list
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
                placeholder="Search communities..."
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
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 flex items-center gap-2">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Travel Communities</h2>
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
                        <p className="text-gray-600 mb-4">{community.description}</p>
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

            {/* Travel Bucket List */}
            <div>
              <Card className="animate-fade-in delay-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    My Travel Bucket List
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bucketListItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.destination}</h4>
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

              {/* Quick Stats */}
              <Card className="mt-6 animate-fade-in delay-800">
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Communities Joined</span>
                    <span className="font-bold text-red-600">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Bucket List Items</span>
                    <span className="font-bold text-red-600">{bucketListItems.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Trips Completed</span>
                    <span className="font-bold text-red-600">3</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
