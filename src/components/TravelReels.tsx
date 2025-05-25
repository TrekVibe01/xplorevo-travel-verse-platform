
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, MessageSquare, User, Share2, Bookmark, MoreVertical } from "lucide-react";
import { useState } from "react";

const TravelReels = () => {
  const [likedReels, setLikedReels] = useState<number[]>([]);
  const [savedReels, setSavedReels] = useState<number[]>([]);

  const reels = [
    {
      id: 1,
      user: "Sarah Explorer",
      location: "Sinhagad Fort, Pune",
      views: "12.5K",
      likes: 892,
      comments: 56,
      duration: "0:15",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80"
    },
    {
      id: 2,
      user: "Adventure Mike",
      location: "Lonavala, Maharashtra",
      views: "8.2K",
      likes: 643,
      comments: 34,
      duration: "0:22",
      thumbnail: "https://images.unsplash.com/photo-1464822759844-d150052edd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      id: 3,
      user: "Mountain Maya",
      location: "Rajgad Trek, Pune",
      views: "15.8K",
      likes: 1200,
      comments: 89,
      duration: "0:18",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    },
    {
      id: 4,
      user: "Trek Titan",
      location: "Khandala Valley, Maharashtra",
      views: "22.1K",
      likes: 1800,
      comments: 142,
      duration: "0:25",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
      id: 5,
      user: "Pune Explorer",
      location: "Shaniwar Wada, Pune",
      views: "9.7K",
      likes: 567,
      comments: 23,
      duration: "0:12",
      thumbnail: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    },
    {
      id: 6,
      user: "Nature Lover",
      location: "Bhimashankar, Maharashtra",
      views: "18.3K",
      likes: 1456,
      comments: 78,
      duration: "0:30",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
    }
  ];

  const handleLike = (reelId: number) => {
    setLikedReels(prev => 
      prev.includes(reelId) 
        ? prev.filter(id => id !== reelId)
        : [...prev, reelId]
    );
  };

  const handleSave = (reelId: number) => {
    setSavedReels(prev => 
      prev.includes(reelId) 
        ? prev.filter(id => id !== reelId)
        : [...prev, reelId]
    );
  };

  return (
    <section id="reels" className="py-12 sm:py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-[slideInUp_1s_ease-out]">
            Trending Travel
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Reels & Stories
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 animate-[slideInUp_1s_ease-out] delay-200">
            Get inspired by fellow travelers' adventures around Pune and Maharashtra
          </p>
          <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 animate-[slideInUp_1s_ease-out] delay-400">
            <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Upload Your Reel
          </Button>
        </div>

        {/* Trending Reels Grid - Instagram Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-8 sm:mb-12">
          {reels.map((reel, index) => (
            <Card key={reel.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 overflow-hidden animate-[slideInUp_1s_ease-out]" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-0 relative">
                <div className="aspect-[9/16] relative overflow-hidden">
                  <img 
                    src={reel.thumbnail}
                    alt={`Reel by ${reel.user}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-white text-xs font-medium">
                    {reel.duration}
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                      <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-white border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="absolute top-2 left-2 flex items-center space-x-2">
                    <img 
                      src={reel.userAvatar}
                      alt={reel.user}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-md"
                    />
                    <span className="text-white text-xs sm:text-sm font-medium bg-black/30 backdrop-blur-sm rounded px-2 py-1">
                      {reel.user}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                    <p className="text-white text-xs sm:text-sm mb-2 bg-black/30 backdrop-blur-sm rounded px-2 py-1 inline-block">
                      📍 {reel.location}
                    </p>
                    
                    {/* Action Buttons - Instagram Style */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <button 
                          onClick={() => handleLike(reel.id)}
                          className="flex items-center space-x-1 text-white hover:scale-110 transition-transform duration-200"
                        >
                          <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${likedReels.includes(reel.id) ? 'fill-red-500 text-red-500' : ''}`} />
                          <span className="text-xs">{reel.likes + (likedReels.includes(reel.id) ? 1 : 0)}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-white hover:scale-110 transition-transform duration-200">
                          <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs">{reel.comments}</span>
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-white hover:scale-110 transition-transform duration-200">
                          <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button 
                          onClick={() => handleSave(reel.id)}
                          className="text-white hover:scale-110 transition-transform duration-200"
                        >
                          <Bookmark className={`w-3 h-3 sm:w-4 sm:h-4 ${savedReels.includes(reel.id) ? 'fill-white' : ''}`} />
                        </button>
                      </div>
                    </div>
                    <div className="text-white text-xs mt-1 opacity-75">{reel.views} views</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Rewards Section */}
        <Card className="bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0 animate-[slideInUp_1s_ease-out] delay-600">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Earn Rewards for Your Content! 🎉
            </h3>
            <p className="text-base sm:text-lg text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Upload travel reels from Pune and Maharashtra to earn cashback, bonus points, and compete for exciting prizes!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center transform hover:scale-105 transition-all duration-200">
                <div className="text-xl sm:text-2xl font-bold mb-2">₹500+</div>
                <div className="text-orange-200 text-sm sm:text-base">Monthly Cashback</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-200">
                <div className="text-xl sm:text-2xl font-bold mb-2">10K+</div>
                <div className="text-orange-200 text-sm sm:text-base">Bonus Points</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-200">
                <div className="text-xl sm:text-2xl font-bold mb-2">5</div>
                <div className="text-orange-200 text-sm sm:text-base">Achievement Tiers</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base px-6 sm:px-8">
              Start Earning Now
            </Button>
          </CardContent>
        </Card>
      </div>

      <style>{`
        @keyframes slideInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default TravelReels;
