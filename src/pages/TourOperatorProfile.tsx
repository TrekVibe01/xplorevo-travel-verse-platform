import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Star, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  Globe,
  Award,
  Camera,
  ThumbsUp,
  MessageCircle,
  Shield,
  Leaf,
  LogIn,
  User,
  Lock,
  Mountain,
  Bike,
  UserCheck
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TourOperatorProfile = () => {
  const [selectedTab, setSelectedTab] = useState("packages");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [partnerType, setPartnerType] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "", partnerCode: "" });

  const partnerTypes = [
    {
      id: "trek-tourism",
      name: "Trek Tourism Organization",
      icon: Mountain,
      color: "from-green-600 to-emerald-600",
      description: "Organize trekking and adventure tours"
    },
    {
      id: "bike-rental",
      name: "Bike Rental Service",
      icon: Bike,
      color: "from-blue-600 to-cyan-600",
      description: "Provide bike rentals for travelers"
    },
    {
      id: "influencer",
      name: "Travel Influencer",
      icon: UserCheck,
      color: "from-purple-600 to-pink-600",
      description: "Share travel experiences and content"
    }
  ];

  const handlePartnerLogin = () => {
    if (!partnerType || !loginData.email || !loginData.password || !loginData.partnerCode) {
      alert("Please fill all fields and select partner type");
      return;
    }
    
    // Simulate authentication
    console.log("Partner login:", { partnerType, ...loginData });
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const operatorData = {
    name: "Sahyadri Adventures",
    rating: 4.8,
    reviews: 245,
    location: "Pune, Maharashtra",
    established: "2018",
    phone: "+91 9876543210",
    email: "info@sahyatriadventures.com",
    website: "www.sahyatriadventures.com",
    badges: ["Verified Partner", "Eco Certified", "Safety First"],
    description: "Leading trekking and adventure tours company in Maharashtra with 5+ years of experience. We specialize in Sahyadri mountain treks, heritage tours, and adventure activities.",
    stats: {
      totalTrips: 450,
      happyTravelers: 2840,
      destinations: 25,
      experience: "5+ Years"
    }
  };

  const pastTours = [
    {
      id: 1,
      name: "Sinhagad Monsoon Trek",
      date: "15 Aug 2024",
      participants: 25,
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&q=80"
      ]
    },
    {
      id: 2,
      name: "Rajgad Fort Adventure",
      date: "22 Jul 2024",
      participants: 18,
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80"
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2 days ago",
      comment: "Amazing experience! The guide was knowledgeable and the trek was well-organized. Safety measures were top-notch.",
      tripName: "Sinhagad Monsoon Trek",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&q=80"
    },
    {
      id: 2,
      name: "Arjun Patel",
      rating: 5,
      date: "1 week ago",
      comment: "Best trekking company in Pune! Professional team, great equipment, and unforgettable memories.",
      tripName: "Rajgad Fort Adventure",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&q=80"
    },
    {
      id: 3,
      name: "Sneha Kulkarni",
      rating: 4,
      date: "2 weeks ago",
      comment: "Good organization and friendly guides. The food provided was excellent. Would definitely book again!",
      tripName: "Lonavala Waterfall Trek",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&q=80"
    }
  ];

  const packages = [
    {
      id: 1,
      name: "Sinhagad Fort Trek",
      duration: "1 Day",
      price: "₹899",
      difficulty: "Easy",
      rating: 4.8,
      bookings: 150
    },
    {
      id: 2,
      name: "Rajgad Adventure",
      duration: "2 Days",
      price: "₹2,499",
      difficulty: "Moderate",
      rating: 4.9,
      bookings: 89
    },
    {
      id: 3,
      name: "Harishchandragad Trek",
      duration: "2 Days",
      price: "₹3,200",
      difficulty: "Difficult",
      rating: 4.7,
      bookings: 45
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-red-50">
      <Navigation />
      
      {/* Partner Login Section */}
      {!isLoggedIn && (
        <section className="pt-24 pb-8 bg-gradient-to-r from-purple-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Become a Partner</h1>
              <p className="text-purple-100 text-lg">Join India's first digital travel ecosystem</p>
            </div>
            
            {!showLogin ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {partnerTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={type.id} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                        <p className="text-purple-100 text-sm mb-4">{type.description}</p>
                        <Button
                          onClick={() => {
                            setPartnerType(type.id);
                            setShowLogin(true);
                          }}
                          className="w-full bg-white text-purple-600 hover:bg-gray-100"
                        >
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card className="max-w-md mx-auto bg-white/95 backdrop-blur-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-gray-900">Partner Login</CardTitle>
                  <p className="text-gray-600">
                    {partnerTypes.find(t => t.id === partnerType)?.name}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="relative">
                    <Shield className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Unique Partner Code"
                      value={loginData.partnerCode}
                      onChange={(e) => setLoginData({...loginData, partnerCode: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setShowLogin(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handlePartnerLogin}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-red-600"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}
      
      {/* Show profile content only when logged in */}
      {isLoggedIn && (
        <>
          {/* Hero Section */}
          <section className="pt-24 pb-8 bg-gradient-to-r from-red-500 to-red-600 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {operatorData.badges.map((badge, index) => (
                      <Badge key={index} className="bg-white/20 text-white border-white/30">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{operatorData.name}</h1>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{operatorData.rating}</span>
                      <span className="text-red-100">({operatorData.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{operatorData.location}</span>
                    </div>
                  </div>
                  <p className="text-red-100 mb-4">{operatorData.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      <span>{operatorData.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      <span>{operatorData.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>{operatorData.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-8 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{operatorData.stats.totalTrips}+</div>
                  <div className="text-gray-600">Total Trips</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{operatorData.stats.happyTravelers}+</div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{operatorData.stats.destinations}+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{operatorData.stats.experience}</div>
                  <div className="text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <section className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex border-b border-gray-200 mb-8">
                <Button
                  variant={selectedTab === "packages" ? "default" : "ghost"}
                  onClick={() => setSelectedTab("packages")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-500"
                >
                  Tour Packages
                </Button>
                <Button
                  variant={selectedTab === "past-tours" ? "default" : "ghost"}
                  onClick={() => setSelectedTab("past-tours")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-500"
                >
                  Past Tours
                </Button>
                <Button
                  variant={selectedTab === "reviews" ? "default" : "ghost"}
                  onClick={() => setSelectedTab("reviews")}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-500"
                >
                  Reviews
                </Button>
              </div>

              {selectedTab === "packages" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <Card key={pkg.id} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{pkg.name}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Duration:</span>
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Difficulty:</span>
                            <Badge variant="outline">{pkg.difficulty}</Badge>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Rating:</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span>{pkg.rating}</span>
                            </div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Bookings:</span>
                            <span>{pkg.bookings}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-red-600">{pkg.price}</span>
                          <Button className="bg-red-500 hover:bg-red-600">Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {selectedTab === "past-tours" && (
                <div className="space-y-6">
                  {pastTours.map((tour) => (
                    <Card key={tour.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3">
                            <div className="grid grid-cols-2 h-48">
                              {tour.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`${tour.name} ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              ))}
                            </div>
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                                <div className="flex items-center gap-4 text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{tour.date}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{tour.participants} participants</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <span className="font-semibold">{tour.rating}</span>
                              </div>
                            </div>
                            <Button variant="outline" className="w-full">
                              <Camera className="w-4 h-4 mr-2" />
                              View All Photos
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {selectedTab === "reviews" && (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                              </div>
                              <span className="text-gray-500 text-sm">{review.date}</span>
                            </div>
                            <p className="text-gray-600 mb-2">{review.comment}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>Trip: {review.tripName}</span>
                              <button className="flex items-center gap-1 hover:text-red-500">
                                <ThumbsUp className="w-4 h-4" />
                                Helpful
                              </button>
                              <button className="flex items-center gap-1 hover:text-red-500">
                                <MessageCircle className="w-4 h-4" />
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default TourOperatorProfile;
