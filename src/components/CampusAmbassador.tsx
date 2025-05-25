
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Trophy, Gift, MapPin, Calendar, Star, Award } from "lucide-react";

const CampusAmbassador = () => {
  const benefits = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Exclusive Rewards",
      description: "Earn up to ₹5000 monthly + exclusive merchandise"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Build Network",
      description: "Connect with students across Maharashtra colleges"
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      title: "Free Travel",
      description: "Complimentary trips and experiences for top performers"
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Certificate",
      description: "Official Campus Ambassador certificate & recommendation letter"
    }
  ];

  const topAmbassadors = [
    {
      name: "Priya Sharma",
      college: "Pune University",
      trips: 15,
      referrals: 89,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80"
    },
    {
      name: "Arjun Patel",
      college: "VIT Pune",
      trips: 12,
      referrals: 67,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      name: "Sneha Kulkarni",
      college: "COEP",
      trips: 18,
      referrals: 95,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-bounce">
            <GraduationCap className="w-4 h-4 mr-2" />
            Now Recruiting Campus Ambassadors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Become a
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Campus Ambassador
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Lead the travel revolution in your college! Earn rewards, build network, and get exclusive access to amazing travel experiences.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
            Apply Now - Limited Spots!
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-[slideInUp_1s_ease-out] border-0 bg-white/70 backdrop-blur-sm" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Requirements */}
        <Card className="mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">What We're Looking For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Active Student</h4>
                <p className="text-blue-100">Currently enrolled in Maharashtra colleges</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Social Influence</h4>
                <p className="text-blue-100">Active on social media with engaged following</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Travel Enthusiast</h4>
                <p className="text-blue-100">Passionate about travel and adventure</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Ambassadors */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Top Campus Ambassadors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topAmbassadors.map((ambassador, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={ambassador.avatar}
                      alt={ambassador.name}
                      className="w-20 h-20 rounded-full mx-auto border-4 border-yellow-400"
                    />
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2">
                        <Badge className="bg-yellow-500 text-white px-2 py-1">👑 #1</Badge>
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {ambassador.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{ambassador.college}</p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">{ambassador.trips}</div>
                      <div className="text-gray-500">Trips</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-purple-600">{ambassador.referrals}</div>
                      <div className="text-gray-500">Referrals</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-orange-500 to-pink-600 text-white border-0">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Lead Your Campus? 🚀
            </h3>
            <p className="text-base sm:text-lg text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join 50+ campus ambassadors already earning rewards and building their network. Application deadline: 31st December!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all duration-200">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-200">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <style>{`
        @keyframes slideInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default CampusAmbassador;
