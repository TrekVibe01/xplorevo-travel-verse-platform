
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Camera, Users } from "lucide-react";

const Leaderboard = () => {
  const topExplorers = [
    {
      rank: 1,
      name: "Arjun Sharma",
      location: "Mumbai",
      trips: 47,
      reels: 123,
      followers: "12.5K",
      badge: "Global Explorer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      rank: 2,
      name: "Priya Patel",
      location: "Bangalore",
      trips: 42,
      reels: 98,
      followers: "9.8K",
      badge: "Travel Influencer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b093?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      rank: 3,
      name: "Rajesh Kumar",
      location: "Delhi",
      trips: 38,
      reels: 87,
      followers: "8.2K",
      badge: "Adventure Seeker",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      rank: 4,
      name: "Sneha Gupta",
      location: "Pune",
      trips: 35,
      reels: 76,
      followers: "7.1K",
      badge: "Solo Explorer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      rank: 5,
      name: "Vikram Singh",
      location: "Jaipur",
      trips: 32,
      reels: 65,
      followers: "6.5K",
      badge: "Mountain Climber",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Global Explorer": return "bg-gradient-to-r from-yellow-400 to-orange-500";
      case "Travel Influencer": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Adventure Seeker": return "bg-gradient-to-r from-emerald-500 to-blue-500";
      case "Solo Explorer": return "bg-gradient-to-r from-indigo-500 to-purple-500";
      case "Mountain Climber": return "bg-gradient-to-r from-gray-600 to-gray-800";
      default: return "bg-gradient-to-r from-gray-400 to-gray-600";
    }
  };

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Community
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrate our most adventurous travelers and get inspired by their incredible journeys across India and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top 3 Podium */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center mb-8">
                  🏆 Top Explorers This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-center space-x-4 mb-8">
                  {/* 2nd Place */}
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img 
                        src={topExplorers[1].avatar}
                        alt={topExplorers[1].name}
                        className="w-16 h-16 rounded-full border-4 border-silver mx-auto"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm">{topExplorers[1].name}</h3>
                    <p className="text-xs text-gray-600">{topExplorers[1].trips} trips</p>
                    <div className="h-20 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg mt-2"></div>
                  </div>

                  {/* 1st Place */}
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img 
                        src={topExplorers[0].avatar}
                        alt={topExplorers[0].name}
                        className="w-20 h-20 rounded-full border-4 border-yellow-400 mx-auto"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="text-2xl">👑</span>
                      </div>
                    </div>
                    <h3 className="font-semibold">{topExplorers[0].name}</h3>
                    <p className="text-sm text-gray-600">{topExplorers[0].trips} trips</p>
                    <div className="h-24 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg mt-2"></div>
                  </div>

                  {/* 3rd Place */}
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img 
                        src={topExplorers[2].avatar}
                        alt={topExplorers[2].name}
                        className="w-16 h-16 rounded-full border-4 border-amber-600 mx-auto"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm">{topExplorers[2].name}</h3>
                    <p className="text-xs text-gray-600">{topExplorers[2].trips} trips</p>
                    <div className="h-16 bg-gradient-to-t from-amber-600 to-amber-500 rounded-t-lg mt-2"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Complete Leaderboard */}
          <div>
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Complete Rankings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topExplorers.map((explorer) => (
                  <div key={explorer.rank} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img 
                          src={explorer.avatar}
                          alt={explorer.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {explorer.rank}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-gray-900 truncate">
                        {explorer.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{explorer.location}</span>
                      </div>
                      <Badge className={`${getBadgeColor(explorer.badge)} text-white text-xs mt-1`}>
                        {explorer.badge}
                      </Badge>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <div className="flex items-center space-x-1 mb-1">
                        <MapPin className="w-3 h-3" />
                        <span>{explorer.trips}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{explorer.followers}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievement System */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Achievement Badges</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "First Trip", icon: "🎒", description: "Complete your first adventure" },
              { name: "Social Star", icon: "⭐", description: "Get 1000+ likes on reels" },
              { name: "Trek Master", icon: "🏔️", description: "Complete 10 treks" },
              { name: "Solo Warrior", icon: "🦁", description: "5 solo trips completed" },
              { name: "Community Leader", icon: "👑", description: "Top leaderboard for 3 months" }
            ].map((badge, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{badge.name}</h4>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
