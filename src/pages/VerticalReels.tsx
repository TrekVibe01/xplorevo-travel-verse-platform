
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  User,
  MapPin,
  Music,
  MoreHorizontal,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const VerticalReels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [likedReels, setLikedReels] = useState(new Set());
  const [savedReels, setSavedReels] = useState(new Set());

  const reels = [
    {
      id: 1,
      title: "Sinhagad Sunrise Trek",
      creator: "PuneTrekker",
      location: "Sinhagad Fort, Pune",
      likes: "2.4K",
      comments: "234",
      shares: "156",
      music: "Epic Adventure Vibes",
      video: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Early morning trek to catch the beautiful sunrise at Sinhagad Fort! 🌅 #PuneTrekking #SinhagadFort"
    },
    {
      id: 2,
      title: "Lonavala Monsoon Magic",
      creator: "MonsoonLover",
      location: "Lonavala, Maharashtra",
      likes: "1.8K",
      comments: "189",
      shares: "98",
      music: "Raindrops Symphony",
      video: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The magical waterfalls of Lonavala during monsoon season! Pure bliss 💚 #LonavalaTrek #Monsoon"
    },
    {
      id: 3,
      title: "Rajgad Night Adventure",
      creator: "NightTrekker",
      location: "Rajgad Fort, Pune",
      likes: "3.2K",
      comments: "456",
      shares: "234",
      music: "Midnight Wanderer",
      video: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Night trek to Rajgad Fort under the starlit sky! An unforgettable experience ⭐ #NightTrek #Rajgad"
    },
    {
      id: 4,
      title: "Pune Food Trail",
      creator: "FoodieExplorer",
      location: "FC Road, Pune",
      likes: "4.1K",
      comments: "567",
      shares: "312",
      music: "Foodie Beats",
      video: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Exploring the best street food on FC Road! From vada pav to misal pav 🍛 #PuneFood #StreetFood"
    },
    {
      id: 5,
      title: "Korigad Fort Clouds",
      creator: "CloudChaser",
      location: "Korigad, Lonavala",
      likes: "2.9K",
      comments: "298",
      shares: "178",
      music: "Above the Clouds",
      video: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Walking through clouds at Korigad Fort! Nature's magic at its best ☁️ #CloudTrek #Korigad"
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

  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % reels.length);
  };

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
  };

  // Handle scroll/swipe for mobile
  useEffect(() => {
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      endY = e.changedTouches[0].clientY;
      const diff = startY - endY;
      
      if (Math.abs(diff) > 100) { // Minimum swipe distance
        if (diff > 0) {
          nextReel(); // Swipe up - next reel
        } else {
          prevReel(); // Swipe down - previous reel
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        prevReel();
      } else if (e.key === 'ArrowDown') {
        nextReel();
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentReelData = reels[currentReel];

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Reel Container */}
      <div className="relative w-full h-full">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <img
            src={currentReelData.video}
            alt={currentReelData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/dd4db603-c0e5-47f6-aad9-956b576bb16f.png" 
                alt="Xplorevo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-bold">Xplorevo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Travel Reels</span>
              <Button variant="ghost" size="sm" className="text-white">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-none"
          onClick={prevReel}
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
        
        <Button 
          className="absolute top-1/2 right-20 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-none"
          onClick={nextReel}
        >
          <ArrowDown className="w-6 h-6" />
        </Button>

        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-20 z-10 flex flex-col gap-6">
          {/* Profile */}
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mb-2 border-2 border-white">
              <User className="w-6 h-6 text-white" />
            </div>
            <Button className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full text-xs p-0 text-white border-2 border-white">
              +
            </Button>
          </div>

          {/* Like */}
          <div className="text-center">
            <Button 
              className={`w-12 h-12 rounded-full border-none ${likedReels.has(currentReelData.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-black/30 hover:bg-black/50'} text-white`}
              onClick={() => handleLike(currentReelData.id)}
            >
              <Heart className={`w-6 h-6 ${likedReels.has(currentReelData.id) ? 'fill-current' : ''}`} />
            </Button>
            <p className="text-white text-xs mt-1 font-medium">{currentReelData.likes}</p>
          </div>

          {/* Comment */}
          <div className="text-center">
            <Button className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white border-none">
              <MessageCircle className="w-6 h-6" />
            </Button>
            <p className="text-white text-xs mt-1 font-medium">{currentReelData.comments}</p>
          </div>

          {/* Share */}
          <div className="text-center">
            <Button className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white border-none">
              <Share2 className="w-6 h-6" />
            </Button>
            <p className="text-white text-xs mt-1 font-medium">{currentReelData.shares}</p>
          </div>

          {/* Save */}
          <div className="text-center">
            <Button 
              className={`w-12 h-12 rounded-full border-none ${savedReels.has(currentReelData.id) ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-black/30 hover:bg-black/50'} text-white`}
              onClick={() => handleSave(currentReelData.id)}
            >
              <Bookmark className={`w-6 h-6 ${savedReels.has(currentReelData.id) ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Music */}
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
              <Music className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="text-white max-w-xs">
            {/* Creator Info */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">{currentReelData.creator}</span>
              <Button variant="outline" size="sm" className="h-6 px-3 text-xs border-white/50 text-white hover:bg-white hover:text-black">
                Follow
              </Button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 mb-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-200">{currentReelData.location}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-200 mb-2 leading-relaxed">
              {currentReelData.description}
            </p>

            {/* Music */}
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-pink-400" />
              <span className="text-xs text-gray-300">♪ {currentReelData.music}</span>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
          <div className="flex flex-col gap-2">
            {reels.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-8 rounded-full transition-all duration-300 ${
                  index === currentReel ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Swipe Instruction */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
          <p className="text-white/70 text-xs text-center animate-pulse">
            Swipe up/down or use arrow keys
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalReels;
