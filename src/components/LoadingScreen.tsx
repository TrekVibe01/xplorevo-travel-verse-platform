
import { useState, useEffect } from "react";
import { MapPin, Plane, Car, Mountain, TreePine, Compass } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Discovering Pune's hidden gems...",
    "Connecting with local guides...", 
    "Preparing your adventure map...",
    "Loading scenic routes around Maharashtra...",
    "Gathering travel stories from Pune...",
    "Almost ready for your journey..."
  ];

  useEffect(() => {
    // Play startup sound
    const audio = new Audio();
    audio.volume = 0.3;
    // Note: You would need to add an actual audio file to public folder
    // audio.src = "/startup-nature-sound.mp3";
    // audio.play().catch(() => {}); // Silently fail if autoplay is blocked

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        return prev + 2; // Faster loading
      });
    }, 60);

    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-500"></div>
        
        {/* Animated Travel Icons */}
        <div className="absolute top-16 left-16">
          <Plane className="w-8 h-8 text-white/20 animate-bounce" style={{ animationDuration: "3s" }} />
        </div>
        <div className="absolute top-32 right-24">
          <Mountain className="w-10 h-10 text-white/20 animate-bounce delay-700" style={{ animationDuration: "4s" }} />
        </div>
        <div className="absolute bottom-32 left-32">
          <Car className="w-7 h-7 text-white/20 animate-bounce delay-300" style={{ animationDuration: "3.5s" }} />
        </div>
        <div className="absolute bottom-16 right-16">
          <TreePine className="w-9 h-9 text-white/20 animate-bounce delay-1000" style={{ animationDuration: "2.8s" }} />
        </div>
        <div className="absolute top-1/2 left-8">
          <Compass className="w-6 h-6 text-white/20 animate-spin" style={{ animationDuration: "8s" }} />
        </div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20 shadow-2xl">
            <MapPin className="w-16 h-16 text-white animate-pulse" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Xplorevo
        </h1>
        <p className="text-xl text-white/90 mb-2 animate-fade-in delay-300">
          India's First Digital Travel Ecosystem
        </p>
        <p className="text-lg text-white/80 mb-8 animate-fade-in delay-400">
          Discover Pune & Beyond 🌄
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-3 mb-4 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-white to-yellow-200 rounded-full h-3 transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-white/80 text-sm mb-2">
            <span>{progress.toFixed(0)}%</span>
            <span>Loading...</span>
          </div>
        </div>

        {/* Dynamic Loading Messages */}
        <div className="h-6 mb-8">
          <p className="text-white/80 text-sm animate-fade-in transition-all duration-500">
            {loadingMessages[currentMessage]}
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 gap-4 text-white/70 text-xs animate-fade-in delay-1000">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Pune Adventures</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <span>Safe Travels</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-600"></div>
            <span>Real Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-900"></div>
            <span>24/7 SOS Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
