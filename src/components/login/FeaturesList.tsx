
import { Mountain, Globe, Camera, Heart, Star } from "lucide-react";

const FeaturesList = () => {
  return (
    <div className="mt-6 pt-4 border-t border-gray-200">
      <p className="text-xs text-gray-500 text-center mb-3 flex items-center justify-center gap-1">
        <Star className="w-3 h-3 text-yellow-500" />
        What awaits you:
      </p>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
          <Mountain className="w-3 h-3 text-green-500 mr-1" />
          <span>Epic Adventures</span>
        </div>
        <div className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
          <Globe className="w-3 h-3 text-blue-500 mr-1" />
          <span>Global Community</span>
        </div>
        <div className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
          <Camera className="w-3 h-3 text-purple-500 mr-1" />
          <span>Share Memories</span>
        </div>
        <div className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
          <Heart className="w-3 h-3 text-pink-500 mr-1" />
          <span>Safe Travels</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
