
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Filter,
  Search,
  Clock,
  DollarSign,
  Phone,
  Mail
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      id: 1,
      title: "Sinhagad Fort Trek",
      location: "Sinhagad, Pune",
      duration: "1 Day",
      price: "₹899",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Historical Trek",
      difficulty: "Easy",
      description: "Explore the historic Sinhagad Fort with panoramic views of Pune city.",
      includes: ["Transport", "Guide", "Breakfast", "Entry Fees"]
    },
    {
      id: 2,
      title: "Rajgad Fort Adventure",
      location: "Rajgad, Near Pune",
      duration: "2 Days",
      price: "₹2,499",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure Trek",
      difficulty: "Moderate",
      description: "Challenge yourself with this thrilling trek to the King of Forts.",
      includes: ["Camping", "Meals", "Guide", "Safety Equipment"]
    },
    {
      id: 3,
      title: "Lonavala Waterfall Trek",
      location: "Lonavala, Maharashtra",
      duration: "1 Day",
      price: "₹1,299",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Monsoon Special",
      difficulty: "Easy",
      description: "Experience the beautiful waterfalls near Pune during monsoon season.",
      includes: ["Transport", "Guide", "Lunch", "Photography"]
    },
    {
      id: 4,
      title: "Korigad Night Trek",
      location: "Korigad, Lonavala",
      duration: "1 Night",
      price: "₹1,899",
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Night Trek",
      difficulty: "Moderate",
      description: "Experience the thrill of night trekking with stargazing at Korigad Fort.",
      includes: ["Night Camping", "Dinner", "Breakfast", "Safety Gear"]
    }
  ];

  const handleBookNow = (tour) => {
    setSelectedTour(tour);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-red-500 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Discover Amazing
            <span className="block text-yellow-300">Tours & Treks Around Pune</span>
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            Explore the magnificent Sahyadri mountains and historic forts near Pune
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search destinations around Pune..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button variant="outline">Price Range</Button>
              <Button variant="outline">Duration</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    {tour.category}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-white text-gray-800">
                    {tour.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {tour.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {tour.location}
                  </div>
                  <p className="text-sm text-gray-600">{tour.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{tour.rating}</span>
                        <span className="text-sm text-gray-500">({tour.reviews})</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Includes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tour.includes.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-2xl font-bold text-red-600">{tour.price}</span>
                        <span className="text-sm text-gray-500">per person</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                      onClick={() => handleBookNow(tour)}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Book {selectedTour.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <Input placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Number of People</label>
                <Input type="number" placeholder="1" min="1" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Date</label>
                <Input type="date" />
              </div>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setSelectedTour(null)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600"
                  onClick={() => {
                    alert('Booking request sent! We will contact you soon.');
                    setSelectedTour(null);
                  }}
                >
                  Confirm Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Tours;
