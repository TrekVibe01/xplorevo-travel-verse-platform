
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Bookmark, Play, Pause, Volume2, VolumeX, User } from "lucide-react";

interface Reel {
  id: number;
  user: string;
  location: string;
  views: string;
  likes: number;
  comments: number;
  duration: string;
  thumbnail: string;
  userAvatar: string;
  description: string;
}

const VerticalReels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [likedReels, setLikedReels] = useState<number[]>([]);
  const [savedReels, setSavedReels] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const reels: Reel[] = [
    {
      id: 1,
      user: "PuneTrekker",
      location: "Sinhagad Fort, Pune",
      views: "12.5K",
      likes: 892,
      comments: 56,
      duration: "0:45",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80",
      description: "Early morning trek to Sinhagad! The sunrise view is absolutely breathtaking 🌅 #PuneTrekking #SinhagadFort #MorningVibes"
    },
    {
      id: 2,
      user: "MonsoonMagic",
      location: "Lonavala, Maharashtra",
      views: "8.2K",
      likes: 643,
      comments: 34,
      duration: "0:30",
      thumbnail: "https://images.unsplash.com/photo-1464822759844-d150052edd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      description: "Monsoon magic at Lonavala! The waterfalls are in full flow 💚 #LonavalaTrek #Monsoon #WaterfallChasing"
    },
    {
      id: 3,
      user: "NightTrekker",
      location: "Rajgad Fort, Pune",
      views: "15.8K",
      likes: 1200,
      comments: 89,
      duration: "1:15",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      description: "Night trek under the stars! Rajgad Fort offers the most amazing stargazing experience ⭐ #NightTrek #Rajgad #Stargazing"
    },
    {
      id: 4,
      user: "FoodieExplorer",
      location: "FC Road, Pune",
      views: "22.1K",
      likes: 1800,
      comments: 142,
      duration: "0:55",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      description: "Best street food trail in Pune! From vada pav to misal pav, FC Road has it all 🍛 #PuneFood #StreetFood #FCRoad"
    },
    {
      id: 5,
      user: "HistoryBuff",
      location: "Shaniwar Wada, Pune",
      views: "9.7K",
      likes: 567,
      comments: 23,
      duration: "0:40",
      thumbnail: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      description: "Walking through history at Shaniwar Wada! The stories these walls could tell 🏰 #ShaniwarWada #PuneHistory #Heritage"
    }
  ];

  const handleScroll = (event: React.WheelEvent) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      // Scroll down
      setCurrentReel((prev) => (prev + 1) % reels.length);
    } else {
      // Scroll up
      setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
    }
  };

  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchEnd = event.changedTouches[0].clientY;
    const diff = handleTouchStart.current - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe up
        setCurrentReel((prev) => (prev + 1) % reels.length);
      } else {
        // Swipe down
        setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
      }
    }
  };

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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(-${currentReel * 100}vh)`;
    }
  }, [currentReel]);

  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div
        ref={containerRef}
        className="transition-transform duration-500 ease-out"
        onWheel={handleScroll}
        onTouchStart={(e) => handleTouchStart.current = e.touches[0].clientY}
        onTouchEnd={handleTouchEnd}
      >
        {reels.map((reel, index) => (
          <div key={reel.id} className="h-screen w-full relative flex items-center justify-center">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${reel.thumbnail}')` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex">
              {/* Main Content Area */}
              <div className="flex-1 flex items-end p-4 pb-20">
                <div className="text-white max-w-xs">
                  {/* User Info */}
                  <div className="flex items-center mb-3">
                    <img 
                      src={reel.userAvatar}
                      alt={reel.user}
                      className="w-12 h-12 rounded-full border-2 border-white mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{reel.user}</h3>
                      <p className="text-sm text-gray-300">📍 {reel.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-4 leading-relaxed">
                    {reel.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-4 text-sm">
                    <span>{reel.views} views</span>
                    <span>•</span>
                    <span>{reel.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Right Side */}
              <div className="flex flex-col items-center justify-end p-4 pb-32 space-y-6">
                {/* Like Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className={`w-12 h-12 rounded-full ${
                      likedReels.includes(reel.id) 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-black/50 hover:bg-black/70'
                    } border-0`}
                    onClick={() => handleLike(reel.id)}
                  >
                    <Heart className={`w-6 h-6 ${likedReels.includes(reel.id) ? 'fill-current' : ''}`} />
                  </Button>
                  <p className="text-white text-xs mt-1">
                    {reel.likes + (likedReels.includes(reel.id) ? 1 : 0)}
                  </p>
                </div>

                {/* Comment Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border-0"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </Button>
                  <p className="text-white text-xs mt-1">{reel.comments}</p>
                </div>

                {/* Share Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border-0"
                  >
                    <Share2 className="w-6 h-6 text-white" />
                  </Button>
                </div>

                {/* Save Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className={`w-12 h-12 rounded-full ${
                      savedReels.includes(reel.id) 
                        ? 'bg-yellow-500 hover:bg-yellow-600' 
                        : 'bg-black/50 hover:bg-black/70'
                    } border-0`}
                    onClick={() => handleSave(reel.id)}
                  >
                    <Bookmark className={`w-6 h-6 ${savedReels.includes(reel.id) ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                {/* Play/Pause Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border-0"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                  </Button>
                </div>

                {/* Mute Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border-0"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
              {reels.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1 h-8 rounded-full transition-colors duration-300 ${
                    idx === currentReel ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm opacity-70">Swipe up/down or scroll to navigate</p>
      </div>
    </div>
  );
};

export default VerticalReels;
