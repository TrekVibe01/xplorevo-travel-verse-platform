
import { useState, useEffect } from "react";
import { MapPin, Plane, Car, Mountain, TreePine, Compass } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showPlaces, setShowPlaces] = useState(false);

  const loadingMessages = [
    "Welcome to Xplorevo...",
    "Discovering Pune's hidden gems...",
    "Connecting with local guides...", 
    "Preparing your adventure map...",
    "Almost ready for your journey..."
  ];

  const places = [
    { name: "Shaniwar Wada", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80" },
    { name: "Sinhagad Fort", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
    { name: "Lohagad Trek", image: "https://images.unsplash.com/photo-1464822759844-d150052edd48?w=800&q=80" },
    { name: "Pune Hills", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80" }
  ];

  const [currentPlace, setCurrentPlace] = useState(0);

  useEffect(() => {
    // Force 5 second loading
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2; // 2% every 100ms = 5 seconds total
      });
    }, 100);

    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 1000);

    // Show places after 1 second
    const placesTimer = setTimeout(() => {
      setShowPlaces(true);
    }, 1000);

    const placeTimer = setInterval(() => {
      setCurrentPlace((prev) => (prev + 1) % places.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
      clearInterval(placeTimer);
      clearTimeout(placesTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Airplane */}
        <div className="absolute top-1/4 left-0 w-full h-16 overflow-hidden">
          <Plane className="w-12 h-12 text-white/30 animate-[fly_4s_ease-in-out_infinite]" />
        </div>
        
        {/* Floating Clouds */}
        <div className="absolute top-16 left-1/4 w-24 h-16 bg-white/10 rounded-full animate-[float_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-32 right-1/3 w-32 h-20 bg-white/8 rounded-full animate-[float_6s_ease-in-out_infinite] [animation-direction:reverse]"></div>
        <div className="absolute bottom-32 left-1/2 w-20 h-12 bg-white/12 rounded-full animate-[float_5s_ease-in-out_infinite]"></div>
        
        {/* Animated Travel Icons */}
        <div className="absolute top-16 right-16">
          <Mountain className="w-10 h-10 text-white/20 animate-bounce" />
        </div>
        <div className="absolute bottom-32 left-32">
          <Car className="w-8 h-8 text-white/20 animate-[slide_4s_ease-in-out_infinite]" />
        </div>
        <div className="absolute bottom-16 right-16">
          <TreePine className="w-9 h-9 text-white/20 animate-[sway_3s_ease-in-out_infinite]" />
        </div>
        <div className="absolute top-1/2 left-8">
          <Compass className="w-6 h-6 text-white/20 animate-spin" style={{ animationDuration: "8s" }} />
        </div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-[twinkle_2s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="mb-6 animate-[zoomIn_1s_ease-out]">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-white/20 rounded-3xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20 shadow-2xl animate-[logoFloat_3s_ease-in-out_infinite]">
            <img 
              src="/lovable-uploads/dd4db603-c0e5-47f6-aad9-956b576bb16f.png" 
              alt="Xplorevo" 
              className="w-16 h-16 sm:w-20 sm:h-20 animate-[logoPulse_2s_ease-in-out_infinite]"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 animate-[slideInUp_1s_ease-out]">
          Xplorevo
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-2 animate-[fadeIn_1.5s_ease-out]">
          India's First Digital Travel Ecosystem
        </p>
        <p className="text-base sm:text-lg text-white/80 mb-6 animate-[fadeIn_2s_ease-out]">
          Discover Pune & Beyond 🌄
        </p>

        {/* Places Showcase */}
        {showPlaces && (
          <div className="mb-6 animate-[fadeIn_0.5s_ease-out]">
            <div className="w-48 h-32 sm:w-64 sm:h-40 mx-auto rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 relative">
              <img 
                key={currentPlace}
                src={places[currentPlace].image}
                alt={places[currentPlace].name}
                className="w-full h-full object-cover animate-[zoomIn_0.8s_ease-out]"
              />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <p className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm rounded px-2 py-1">
                  {places[currentPlace].name}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm mx-auto mb-4">
          <div className="bg-white/20 rounded-full h-2 sm:h-3 mb-3 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-white to-yellow-200 rounded-full h-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-white/80 text-xs sm:text-sm mb-2">
            <span>{progress.toFixed(0)}%</span>
            <span>Loading...</span>
          </div>
        </div>

        {/* Dynamic Loading Messages */}
        <div className="h-5 sm:h-6 mb-6">
          <p className="text-white/80 text-xs sm:text-sm animate-[fadeIn_0.5s_ease-out] transition-all duration-500">
            {loadingMessages[currentMessage]}
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 text-white/70 text-xs animate-[slideInUp_2s_ease-out]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Pune Adventures</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></div>
            <span>Safe Travels</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "600ms" }}></div>
            <span>Real Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "900ms" }}></div>
            <span>24/7 SOS Support</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fly {
          0% { transform: translateX(-100px) translateY(0px); }
          25% { transform: translateX(25vw) translateY(-20px); }
          50% { transform: translateX(50vw) translateY(-40px); }
          75% { transform: translateX(75vw) translateY(-20px); }
          100% { transform: translateX(100vw) translateY(0px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        
        @keyframes slide {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(20px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes zoomIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes slideInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
