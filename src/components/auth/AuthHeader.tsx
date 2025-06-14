
import { MapPin, Instagram } from "lucide-react";

const AuthHeader = () => {
  return (
    <div className="text-center lg:text-left text-white animate-fade-in">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 bg-white/10 rounded-2xl flex items-center justify-center animate-bounce">
          <MapPin className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Xplorevo
        </h1>
        <p className="text-xl lg:text-2xl text-red-100 mb-6 animate-fade-in delay-200">
          India's First Digital Travel Ecosystem
        </p>
        <div className="space-y-3 text-red-100 animate-fade-in delay-400">
          <p className="flex items-center justify-center lg:justify-start gap-2">
            ✨ Connect with verified tour operators
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-2">
            🚗 Rent vehicles from trusted partners
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-2">
            🏔️ Discover amazing destinations
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-2">
            🤝 Join fellow travelers
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-2">
            📍 Based in Pune, Maharashtra
          </p>
        </div>
        
        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
          <a 
            href="https://www.instagram.com/xplorevo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-100 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
