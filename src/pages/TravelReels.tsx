
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  Heart, 
  MessageCircle, 
  Share2, 
  Search,
  Filter,
  MapPin,
  Eye,
  User
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TravelReels = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const reels = [
    {
      id: 1,
      title: "Himalayan Sunrise Trek",
      creator: "AdventureSeeker",
      location: "Himachal Pradesh",
      views: "12K",
      likes: "2.4K",
      comments: "234",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "45s"
    },
    {
      id: 2,
      title: "Goa Beach Vibes",
      creator: "BeachLover",
      location: "Goa",
      views: "8.5K",
      likes: "1.8K",
      comments: "189",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "30s"
    },
    {
      id: 3,
      title: "Desert Safari Adventure",
      creator: "DesertExplorer",
      location: "Rajasthan",
      views: "15K",
      likes: "3.2K",
      comments: "456",
      thumbnail: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "60s"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Travel
            <span className="block text-yellow-300">Reels</span>
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            Share your adventures and discover amazing travel stories
          </p>
        </div>
      </section>

      {/* Search and Upload */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search reels..."
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
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                Upload Reel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reels Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel, index) => (
              <Card key={reel.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30">
                      <Play className="w-8 h-8 text-white" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/50 text-white">
                    {reel.duration}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {reel.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-gray-600">
                    <User className="w-4 h-4" />
                    {reel.creator}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {reel.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {reel.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {reel.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {reel.comments}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelReels;
