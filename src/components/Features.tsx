
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Camera, Car, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Tours & Treks",
      description: "Discover verified tour packages from trusted operators across India",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Car,
      title: "Vehicle Rentals",
      description: "Rent bikes and cars with doorstep delivery and insurance",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Solo Travel Support",
      description: "Safe solo adventures with emergency support and trusted communities",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Camera,
      title: "Travel Reels",
      description: "Share your adventures and get inspired by fellow travelers",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded travelers and join group adventures",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Calendar,
      title: "Smart Planning",
      description: "AI-powered itinerary planning with budget and preference optimization",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Perfect Adventures
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to experiencing, we've got every aspect of your journey covered with cutting-edge technology and trusted partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  Explore Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Solo Travel Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Solo Travel Made Safe & Fun
                  </h3>
                  <p className="text-lg text-purple-100 mb-6">
                    Special features for solo travelers including women-only groups, 24x7 support, emergency SOS, and verified accommodations
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-purple-200" />
                      <span>Emergency SOS with live location</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-200" />
                      <span>Women-only group options</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-200" />
                      <span>24x7 travel support</span>
                    </div>
                  </div>
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                    Learn More About Solo Travel
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Solo Travel"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
