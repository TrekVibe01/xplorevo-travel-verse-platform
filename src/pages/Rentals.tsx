
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Car, 
  Bike, 
  MapPin, 
  Star, 
  Fuel,
  Users,
  Shield,
  Search,
  Filter
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Rentals = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const vehicles = [
    {
      id: 1,
      name: "Royal Enfield Classic 350",
      type: "Bike",
      location: "Mumbai, Maharashtra",
      price: "₹800",
      rating: 4.7,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Helmet Included", "Insurance", "24/7 Support"],
      fuel: "Petrol",
      seats: 2
    },
    {
      id: 2,
      name: "Maruti Swift Dzire",
      type: "Car",
      location: "Delhi",
      price: "₹1,500",
      rating: 4.5,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["AC", "GPS", "Insurance"],
      fuel: "Petrol",
      seats: 5
    },
    {
      id: 3,
      name: "Honda Activa 6G",
      type: "Scooter",
      location: "Bangalore, Karnataka",
      price: "₹400",
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Helmet", "Storage Box", "Fuel Efficient"],
      fuel: "Petrol",
      seats: 2
    }
  ];

  const categories = [
    { id: "all", name: "All Vehicles", icon: Car },
    { id: "bike", name: "Bikes", icon: Bike },
    { id: "car", name: "Cars", icon: Car },
    { id: "scooter", name: "Scooters", icon: Bike }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Rent Your Perfect
            <span className="block text-yellow-300">Ride</span>
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            Choose from bikes, cars, and scooters for your next adventure
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? "bg-red-500 hover:bg-red-600" 
                      : "hover:bg-red-50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by location..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    {vehicle.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {vehicle.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {vehicle.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Fuel className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">{vehicle.fuel}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{vehicle.seats}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{vehicle.rating}</span>
                        <span className="text-sm text-gray-500">({vehicle.reviews})</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-red-600">{vehicle.price}</span>
                        <span className="text-sm text-gray-500">/day</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-600">
                        <Shield className="w-4 h-4" />
                        <span className="text-xs">Insured</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rentals;
