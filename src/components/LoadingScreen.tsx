
import { useState, useEffect } from "react";
import { MapPin, Plane, Car, Mountain } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center z-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Travel Icons Animation */}
      <div className="absolute inset-0">
        <Plane className="absolute top-20 left-20 w-8 h-8 text-white/30 animate-bounce" />
        <Car className="absolute top-40 right-32 w-6 h-6 text-white/30 animate-bounce delay-300" />
        <Mountain className="absolute bottom-32 left-40 w-7 h-7 text-white/30 animate-bounce delay-700" />
        <MapPin className="absolute bottom-20 right-20 w-6 h-6 text-white/30 animate-bounce delay-1000" />
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <img 
            src="/lovable-uploads/de07823e-526e-402f-95af-63bd426d58f1.png" 
            alt="Xplorevo Logo" 
            className="w-32 h-32 mx-auto animate-pulse"
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
          Xplorevo
        </h1>
        <p className="text-xl text-white/90 mb-8 animate-fade-in delay-300">
          India's First Digital Travel Ecosystem
        </p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/80 text-sm">{progress}% Loading...</p>
        </div>

        {/* Loading Text Animation */}
        <div className="mt-6 text-white/70 animate-pulse">
          Preparing your adventure...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
