
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Car, Users, Calendar, MapPin, TrendingUp, Star, DollarSign } from "lucide-react";

const PartnerDashboards = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner with
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Xplorevo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our ecosystem of verified tour operators and rental partners. Grow your business with our advanced tools and global reach
          </p>
        </div>

        {/* Partner Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Tour Operators */}
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-blue-600">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Building className="w-16 h-16 text-white" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Tour & Trek Operators
              </CardTitle>
              <p className="text-gray-600">
                Showcase your packages to thousands of adventure seekers
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm text-gray-600">Active Packages</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Monthly Bookings</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Features for Partners:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                    <span>Easy package management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span>Instant payout system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-emerald-500" />
                    <span>Verified partner badges</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Available Badges:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white">
                    Verified Partner
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    Eco Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                    Top Rated
                  </Badge>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
                Join as Tour Operator
              </Button>
            </CardContent>
          </Card>

          {/* Rental Partners */}
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-orange-500 to-red-600">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="w-16 h-16 text-white" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Vehicle Rental Partners
              </CardTitle>
              <p className="text-gray-600">
                Expand your rental business with our platform
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">200+</div>
                  <div className="text-sm text-gray-600">Partner Vendors</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">5K+</div>
                  <div className="text-sm text-gray-600">Vehicles Listed</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Platform Benefits:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-orange-500" />
                    <span>Fleet management system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>Doorstep delivery tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-orange-500" />
                    <span>Dynamic pricing tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span>Customer review system</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Vehicle Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Bikes</Badge>
                  <Badge variant="outline">Cars</Badge>
                  <Badge variant="outline">SUVs</Badge>
                  <Badge variant="outline">Luxury</Badge>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                Join as Rental Partner
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Dashboard Preview */}
        <Card className="border-0 shadow-2xl mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Analytics Dashboard
            </CardTitle>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get comprehensive insights into your business performance with our powerful analytics tools
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">₹2.5L</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                  <div className="text-xs text-emerald-600 mt-1">+15% from last month</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">1,247</div>
                  <div className="text-sm text-gray-600">Total Bookings</div>
                  <div className="text-xs text-blue-600 mt-1">+8% from last month</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">4.8</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                  <div className="text-xs text-yellow-600 mt-1">958 reviews</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Active Packages</div>
                  <div className="text-xs text-purple-600 mt-1">3 new this month</div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Track Performance, Demographics & User Retention
                </h4>
                <p className="text-gray-600 mb-6">
                  Real-time insights to optimize your offerings and maximize revenue
                </p>
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                  View Full Dashboard
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partnership Benefits */}
        <Card className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why Partner with Xplorevo?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Grow Your Business</h4>
                <p className="text-indigo-100">
                  Access to thousands of travelers actively seeking adventures
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Verified Credibility</h4>
                <p className="text-indigo-100">
                  Earn trust badges and build reputation through our verification system
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Instant Payments</h4>
                <p className="text-indigo-100">
                  Quick payout system with transparent settlement reports
                </p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              Become a Partner Today
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnerDashboards;
