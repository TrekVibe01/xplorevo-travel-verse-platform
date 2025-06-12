
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Bookmark, Play, Pause, Volume2, VolumeX, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [currentReel, setCurrentReel] = useState(0);
  const [likedReels, setLikedReels] = useState<number[]>([]);
  const [savedReels, setSavedReels] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const reels: Reel[] = [
    {
      id: 1,
      user: "AdventureSeeker",
      location: "Swiss Alps, Switzerland",
      views: "25.8K",
      likes: 1892,
      comments: 156,
      duration: "0:45",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80",
      description: "Epic sunrise trek in the Swiss Alps! Nothing beats this view 🏔️✨ #SwissAlps #TrekLife #Adventure"
    },
    {
      id: 2,
      user: "OceanWanderer",
      location: "Maldives Paradise",
      views: "18.2K",
      likes: 1543,
      comments: 89,
      duration: "0:38",
      thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      description: "Crystal clear waters and pristine beaches 🌊🏝️ Living the dream in Maldives! #Maldives #Paradise #TravelGoals"
    },
    {
      id: 3,
      user: "MountainExplorer",
      location: "Himalayan Range, Nepal",
      views: "32.5K",
      likes: 2890,
      comments: 234,
      duration: "1:12",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      description: "Conquering the mighty Himalayas! Every step worth the breathtaking view 🏔️⛰️ #Himalayas #Trekking #Nepal"
    },
    {
      id: 4,
      user: "SafariAdventurer",
      location: "Serengeti, Tanzania",
      views: "45.1K",
      likes: 3200,
      comments: 178,
      duration: "0:52",
      thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      description: "Wildlife safari experience of a lifetime! Nature's raw beauty 🦁🐘 #Safari #Serengeti #Wildlife"
    },
    {
      id: 5,
      user: "DesertNomad",
      location: "Sahara Desert, Morocco",
      views: "19.7K",
      likes: 1567,
      comments: 92,
      duration: "0:48",
      thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      description: "Lost in the golden dunes of Sahara 🐪🌅 Magical desert vibes! #Sahara #Desert #Morocco"
    }
  ];

  const handleScroll = (event: React.WheelEvent) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      setCurrentReel((prev) => (prev + 1) % reels.length);
    } else {
      setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
    }
  };

  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchEnd = event.changedTouches[0].clientY;
    const diff = handleTouchStart.current - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentReel((prev) => (prev + 1) % reels.length);
      } else {
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
      {/* Back Button */}
      <Button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 border-0 backdrop-blur-sm"
        size="lg"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </Button>

      <div
        ref={containerRef}
        className="transition-transform duration-700 ease-out"
        onWheel={handleScroll}
        onTouchStart={(e) => handleTouchStart.current = e.touches[0].clientY}
        onTouchEnd={handleTouchEnd}
      >
        {reels.map((reel, index) => (
          <div key={reel.id} className="h-screen w-full relative flex items-center justify-center">
            {/* Background Image with Premium Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${reel.thumbnail}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex">
              {/* Main Content Area */}
              <div className="flex-1 flex items-end p-6 pb-32">
                <div className="text-white max-w-sm">
                  {/* User Info */}
                  <div className="flex items-center mb-4">
                    <img 
                      src={reel.userAvatar}
                      alt={reel.user}
                      className="w-14 h-14 rounded-full border-3 border-white/80 mr-4 shadow-lg"
                    />
                    <div>
                      <h3 className="font-bold text-xl">{reel.user}</h3>
                      <p className="text-sm text-white/90 font-medium">📍 {reel.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base mb-5 leading-relaxed font-medium shadow-lg">
                    {reel.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 text-sm font-semibold">
                    <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">{reel.views} views</span>
                    <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">{reel.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Right Side */}
              <div className="flex flex-col items-center justify-end p-6 pb-40 space-y-6">
                {/* Like Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className={`w-14 h-14 rounded-full ${
                      likedReels.includes(reel.id) 
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700' 
                        : 'bg-black/40 hover:bg-black/60 backdrop-blur-sm'
                    } border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-110`}
                    onClick={() => handleLike(reel.id)}
                  >
                    <Heart className={`w-7 h-7 ${likedReels.includes(reel.id) ? 'fill-current text-white' : 'text-white'}`} />
                  </Button>
                  <p className="text-white text-sm mt-2 font-bold">
                    {reel.likes + (likedReels.includes(reel.id) ? 1 : 0)}
                  </p>
                </div>

                {/* Comment Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 border-2 border-white/20 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="w-7 h-7 text-white" />
                  </Button>
                  <p className="text-white text-sm mt-2 font-bold">{reel.comments}</p>
                </div>

                {/* Share Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 border-2 border-white/20 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <Share2 className="w-7 h-7 text-white" />
                  </Button>
                </div>

                {/* Save Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className={`w-14 h-14 rounded-full ${
                      savedReels.includes(reel.id) 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700' 
                        : 'bg-black/40 hover:bg-black/60 backdrop-blur-sm'
                    } border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-110`}
                    onClick={() => handleSave(reel.id)}
                  >
                    <Bookmark className={`w-7 h-7 ${savedReels.includes(reel.id) ? 'fill-current text-white' : 'text-white'}`} />
                  </Button>
                </div>

                {/* Play/Pause Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 border-2 border-white/20 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-110"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-7 h-7 text-white" /> : <Play className="w-7 h-7 text-white" />}
                  </Button>
                </div>

                {/* Mute Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 border-2 border-white/20 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-110"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX className="w-7 h-7 text-white" /> : <Volume2 className="w-7 h-7 text-white" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
              {reels.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-10 rounded-full transition-all duration-500 ${
                    idx === currentReel ? 'bg-gradient-to-b from-amber-400 to-orange-600 shadow-lg' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm font-medium bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          Swipe up/down or scroll to explore more adventures
        </p>
      </div>
    </div>
  );
};

export default VerticalReels;
