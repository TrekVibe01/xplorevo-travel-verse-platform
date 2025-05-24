
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, MessageSquare, User } from "lucide-react";

const TravelReels = () => {
  const reels = [
    {
      id: 1,
      user: "Sarah Explorer",
      location: "Himachal Pradesh",
      views: "12.5K",
      likes: "892",
      comments: "56",
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      user: "Adventure Mike",
      location: "Goa Beaches",
      views: "8.2K",
      likes: "643",
      comments: "34",
      thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      user: "Mountain Maya",
      location: "Rajasthan Desert",
      views: "15.8K",
      likes: "1.2K",
      comments: "89",
      thumbnail: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      user: "Trek Titan",
      location: "Kerala Backwaters",
      views: "22.1K",
      likes: "1.8K",
      comments: "142",
      thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="reels" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trending Travel
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Reels & Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get inspired by fellow travelers' adventures and share your own experiences with our vibrant community
          </p>
          <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
            <Camera className="w-5 h-5 mr-2" />
            Upload Your Reel
          </Button>
        </div>

        {/* Trending Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {reels.map((reel) => (
            <Card key={reel.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="aspect-[9/16] relative overflow-hidden">
                  <img 
                    src={reel.thumbnail}
                    alt={`Reel by ${reel.user}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white text-sm font-medium">{reel.user}</span>
                    </div>
                    <p className="text-white text-xs mb-3">{reel.location}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-white text-xs">
                      <span>{reel.views} views</span>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{reel.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-3 h-3" />
                          <span>{reel.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Rewards Section */}
        <Card className="bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Earn Rewards for Your Content!
            </h3>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
              Upload travel reels, photos, and blogs to earn cashback, bonus points, and compete for exciting prizes. Unlock tiers like "Travel Influencer" and "Global Explorer"!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">₹500+</div>
                <div className="text-orange-200">Monthly Cashback</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">10K+</div>
                <div className="text-orange-200">Bonus Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">5</div>
                <div className="text-orange-200">Achievement Tiers</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Start Earning Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TravelReels;
