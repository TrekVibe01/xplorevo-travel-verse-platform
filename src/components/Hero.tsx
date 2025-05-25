
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Search, Play } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgrounds = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1464822759844-d150052edd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-16 pb-12 sm:pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Images with Transition */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${bg}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
      ))}

      {/* Floating Elements - Responsive */}
      <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-red-400/20 rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
      <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-orange-400/20 rounded-full animate-[float_4s_ease-in-out_infinite] delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-red-400/20 rounded-full animate-[float_3.5s_ease-in-out_infinite] delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-[slideInDown_1s_ease-out]">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            India's First Digital Travel Ecosystem
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 animate-[zoomIn_1.2s_ease-out] delay-200 px-2">
            Discover Your Next
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent animate-[shimmer_2s_ease-in-out_infinite]">
              Adventure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto animate-[slideInUp_1s_ease-out] delay-400 px-4">
            Connect with verified tour operators, join fellow travelers, and explore Pune safely
          </p>

          {/* Search Bar - Mobile Optimized */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 animate-[slideInUp_1s_ease-out] delay-600 px-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 sm:top-3 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Pune Adventures" 
                      className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 sm:top-3 w-4 h-4 text-gray-400" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">Travelers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 sm:top-3 w-4 h-4 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option>1 Person</option>
                      <option>2-4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-end sm:col-span-1 md:col-span-1">
                  <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold text-sm sm:text-base transform hover:scale-105 transition-all duration-200">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-[slideInUp_1s_ease-out] delay-800 px-4">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform hover:scale-105 transition-all duration-200 backdrop-blur-sm">
              Become a Partner
            </Button>
          </div>

          {/* Stats - Mobile Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 animate-[slideInUp_1s_ease-out] delay-1000 px-4">
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 animate-[countUp_2s_ease-out] delay-1200">10K+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Happy Travelers</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 animate-[countUp_2s_ease-out] delay-1400">500+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Tour Packages</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 animate-[countUp_2s_ease-out] delay-1600">100+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Verified Partners</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 animate-[countUp_2s_ease-out] delay-1800">25+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Destinations</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes slideInDown {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes zoomIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        
        @keyframes countUp {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
