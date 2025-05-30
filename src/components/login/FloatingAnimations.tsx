
import { useState, useEffect } from "react";
import { 
  Mountain, 
  Plane, 
  Camera,
  Heart,
  Star,
  Compass,
  Backpack,
  Globe,
  Map,
  Tent,
  TreePine
} from "lucide-react";

interface FloatingAnimationsProps {
  mousePosition: { x: number; y: number };
}

const FloatingAnimations = ({ mousePosition }: FloatingAnimationsProps) => {
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const icons = [Mountain, Plane, Camera, Backpack, Globe, Map, Tent, TreePine, Compass];
    const newFloatingIcons = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      size: 20 + Math.random() * 20
    }));
    
    setFloatingIcons(newFloatingIcons);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Mouse-following travel trail */}
      <div 
        className="absolute w-40 h-40 bg-gradient-to-r from-white/10 to-yellow-400/20 rounded-full blur-2xl transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 80,
          top: mousePosition.y - 80,
          transform: `scale(${1 + Math.sin(Date.now() * 0.002) * 0.2})`
        }}
      />
      <div 
        className="absolute w-20 h-20 bg-gradient-to-r from-orange-400/30 to-pink-400/30 rounded-full blur-lg transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          transform: `scale(${0.6 + Math.cos(Date.now() * 0.003) * 0.3}) rotate(${Date.now() * 0.01}deg)`
        }}
      />

      {/* Floating Travel Icons */}
      {floatingIcons.map((item) => {
        const IconComponent = item.Icon;
        return (
          <div
            key={item.id}
            className="absolute opacity-20 animate-[float_4s_ease-in-out_infinite]"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
              fontSize: `${item.size}px`
            }}
          >
            <IconComponent className="text-white drop-shadow-lg" />
          </div>
        );
      })}

      {/* Animated Travel Path */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <path
          d="M100,200 Q300,100 500,200 T900,200"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10,5"
          className="animate-[dash_3s_linear_infinite]"
        />
        <path
          d="M200,300 Q400,200 600,300 T1000,300"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="15,10"
          className="animate-[dash_4s_linear_infinite_reverse]"
        />
      </svg>

      {/* Floating Particles with Travel Theme */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-[twinkle_3s_ease-in-out_infinite]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-2 h-2 bg-yellow-300/60 rounded-full" />
          ) : i % 3 === 1 ? (
            <Star className="w-3 h-3 text-white/40" />
          ) : (
            <Heart className="w-2 h-2 text-pink-300/50" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingAnimations;
