
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Camera, Car, Shield } from "lucide-react";
import SOSButton from "./SOSButton";
import AddToHomeScreen from "./AddToHomeScreen";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Tours & Treks",
      description: "Discover verified tour packages from trusted operators across India",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-emerald-600 to-green-700"
    },
    {
      icon: Car,
      title: "Vehicle Rentals",
      description: "Rent bikes and cars with doorstep delivery and insurance",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: Shield,
      title: "Solo Travel Support",
      description: "Safe solo adventures with emergency support and trusted communities",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-purple-600 to-pink-700"
    },
    {
      icon: Camera,
      title: "Travel Reels",
      description: "Share your adventures and get inspired by fellow travelers",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-rose-600 to-red-700"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded travelers and join group adventures",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-teal-600 to-cyan-700"
    },
    {
      icon: Calendar,
      title: "Smart Planning",
      description: "AI-powered itinerary planning with budget and preference optimization",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-amber-600 to-orange-700"
    }
  ];

  const handleReelsClick = () => {
    window.location.href = '/vertical-reels';
  };

  return (
    <section id="tours" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-serif">
            Premium Travel
            <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent font-serif">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Curated adventures for the discerning traveler. Experience luxury, safety, and unforgettable moments with our premium travel ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm overflow-hidden rounded-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-75`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <feature.icon className="w-14 h-14 text-white drop-shadow-lg" />
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-gray-900 font-serif">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-600 group-hover:text-white group-hover:border-transparent transition-all duration-500 font-medium rounded-xl"
                  onClick={feature.title === "Travel Reels" ? handleReelsClick : undefined}
                >
                  Explore Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Solo Travel Section */}
        <div className="mt-24">
          <Card className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white border-0 overflow-hidden rounded-3xl shadow-2xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[500px]">
                <div className="p-12 md:p-16">
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                    Solo Travel
                    <span className="block text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text">
                      Redefined
                    </span>
                  </h3>
                  <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed">
                    Experience the freedom of solo travel with unparalleled safety, luxury accommodations, and a community of like-minded explorers.
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center space-x-4">
                      <Shield className="w-6 h-6 text-red-400" />
                      <span className="text-lg font-light">24/7 Emergency Response System</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Users className="w-6 h-6 text-orange-400" />
                      <span className="text-lg font-light">Curated Solo Traveler Communities</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-6 h-6 text-amber-400" />
                      <span className="text-lg font-light">Premium Concierge Support</span>
                    </div>
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 hover:from-red-600 hover:via-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-4 rounded-xl text-lg">
                    Discover Solo Adventures
                  </Button>
                </div>
                <div className="relative h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Solo Traveler on Mountain"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/20"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Emergency SOS Button */}
      <SOSButton />
      
      {/* Add to Home Screen Button (now smaller and sliding from left) */}
      <AddToHomeScreen />
    </section>
  );
};

export default Features;
