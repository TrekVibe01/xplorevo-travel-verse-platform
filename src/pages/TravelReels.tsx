
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
  User,
  Bookmark,
  Send,
  MoreHorizontal
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TravelReels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [likedReels, setLikedReels] = useState(new Set());
  const [savedReels, setSavedReels] = useState(new Set());

  const reels = [
    {
      id: 1,
      title: "Sinhagad Sunrise Trek",
      creator: "PuneTrekker",
      location: "Sinhagad Fort, Pune",
      views: "12K",
      likes: "2.4K",
      comments: "234",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "45s",
      description: "Early morning trek to catch the beautiful sunrise at Sinhagad Fort! 🌅 #PuneTrekking #SinhagadFort"
    },
    {
      id: 2,
      title: "Lonavala Monsoon Magic",
      creator: "MonsoonLover",
      location: "Lonavala, Maharashtra",
      views: "8.5K",
      likes: "1.8K",
      comments: "189",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "30s",
      description: "The magical waterfalls of Lonavala during monsoon season! Pure bliss 💚 #LonavalaTrek #Monsoon"
    },
    {
      id: 3,
      title: "Rajgad Night Adventure",
      creator: "NightTrekker",
      location: "Rajgad Fort, Pune",
      views: "15K",
      likes: "3.2K",
      comments: "456",
      thumbnail: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "60s",
      description: "Night trek to Rajgad Fort under the starlit sky! An unforgettable experience ⭐ #NightTrek #Rajgad"
    },
    {
      id: 4,
      title: "Pune Food Trail",
      creator: "FoodieExplorer",
      location: "FC Road, Pune",
      views: "22K",
      likes: "4.1K",
      comments: "567",
      thumbnail: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "90s",
      description: "Exploring the best street food on FC Road! From vada pav to misal pav 🍛 #PuneFood #StreetFood"
    }
  ];

  const handleLike = (reelId) => {
    const newLikedReels = new Set(likedReels);
    if (newLikedReels.has(reelId)) {
      newLikedReels.delete(reelId);
    } else {
      newLikedReels.add(reelId);
    }
    setLikedReels(newLikedReels);
  };

  const handleSave = (reelId) => {
    const newSavedReels = new Set(savedReels);
    if (newSavedReels.has(reelId)) {
      newSavedReels.delete(reelId);
    } else {
      newSavedReels.add(reelId);
    }
    setSavedReels(newSavedReels);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-pink-900">
      <Navigation />
      
      {/* Hero Section - Instagram Style */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Travel
            <span className="block text-yellow-300">Reels</span>
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            Share your Pune adventures and discover amazing travel stories
          </p>
        </div>
      </section>

      {/* Search and Upload */}
      <section className="py-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search reels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                Upload Reel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reels Grid - Instagram Style */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {reels.map((reel, index) => (
              <Card key={reel.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/10 backdrop-blur-sm border-white/20" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30">
                      <Play className="w-8 h-8 text-white" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/50 text-white">
                    {reel.duration}
                  </Badge>
                  
                  {/* Instagram-style action buttons */}
                  <div className="absolute right-4 bottom-4 flex flex-col gap-4">
                    <Button 
                      size="sm" 
                      className={`rounded-full w-12 h-12 ${likedReels.has(reel.id) ? 'bg-red-500' : 'bg-black/50'} hover:bg-red-500/80`}
                      onClick={() => handleLike(reel.id)}
                    >
                      <Heart className={`w-6 h-6 ${likedReels.has(reel.id) ? 'fill-current' : ''}`} />
                    </Button>
                    <Button size="sm" className="rounded-full w-12 h-12 bg-black/50 hover:bg-black/70">
                      <MessageCircle className="w-6 h-6" />
                    </Button>
                    <Button size="sm" className="rounded-full w-12 h-12 bg-black/50 hover:bg-black/70">
                      <Share2 className="w-6 h-6" />
                    </Button>
                    <Button 
                      size="sm" 
                      className={`rounded-full w-12 h-12 ${savedReels.has(reel.id) ? 'bg-yellow-500' : 'bg-black/50'} hover:bg-yellow-500/80`}
                      onClick={() => handleSave(reel.id)}
                    >
                      <Bookmark className={`w-6 h-6 ${savedReels.has(reel.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{reel.creator}</span>
                    <Button variant="ghost" size="sm" className="ml-auto text-purple-300 hover:text-white">
                      Follow
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-purple-300" />
                    <span className="text-sm text-purple-200">{reel.location}</span>
                  </div>
                  
                  <p className="text-sm text-gray-200 mb-3">{reel.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-purple-200">
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
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Creator Section */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Become a Pune Travel Influencer! 🌟
              </h3>
              <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                Share your Pune adventures and earn rewards! Upload travel reels, photos, and stories to build your following and unlock exciting benefits.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">₹1000+</div>
                  <div className="text-purple-200">Monthly Rewards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">50K+</div>
                  <div className="text-purple-200">Followers Possible</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">VIP</div>
                  <div className="text-purple-200">Creator Status</div>
                </div>
              </div>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Start Creating Content
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelReels;
