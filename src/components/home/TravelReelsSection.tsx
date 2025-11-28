import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { useState } from "react";

const reels = [
  {
    id: 1,
    title: "Kothligad Fort Trek",
    creator: "Mountain Seekers",
    location: "Kothligad, Maharashtra",
    videoUrl: "/reels/kothligad.mp4",
    likes: 245,
    comments: 32,
    views: "1.2K",
  },
  {
    id: 2,
    title: "Murud-Janjira Fort",
    creator: "Coastal Explorers",
    location: "Murud, Maharashtra",
    videoUrl: "/reels/murud-jangira.mp4",
    likes: 389,
    comments: 47,
    views: "2.1K",
  },
  {
    id: 3,
    title: "Sarasgad Trek Adventure",
    creator: "Trek Warriors",
    location: "Sarasgad, Maharashtra",
    videoUrl: "/reels/sarasgad.mp4",
    likes: 512,
    comments: 64,
    views: "3.5K",
  },
];

export const TravelReelsSection = () => {
  const [likedReels, setLikedReels] = useState<number[]>([]);
  const [savedReels, setSavedReels] = useState<number[]>([]);

  const handleLike = (reelId: number) => {
    setLikedReels((prev) =>
      prev.includes(reelId) ? prev.filter((id) => id !== reelId) : [...prev, reelId]
    );
  };

  const handleSave = (reelId: number) => {
    setSavedReels((prev) =>
      prev.includes(reelId) ? prev.filter((id) => id !== reelId) : [...prev, reelId]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Travel Reels</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Share your adventures and get inspired by fellow travelers
          </p>
          <Button className="bg-gradient-to-r from-brand-from to-brand-to hover:opacity-90">
            Upload Your Reel
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <Card key={reel.id} className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative aspect-[9/16] bg-black">
                <video
                  src={reel.videoUrl}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    if (video.paused) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{reel.title}</h3>
                      <p className="text-sm opacity-90 mb-1">{reel.creator}</p>
                      <p className="text-xs opacity-75">{reel.location}</p>
                    </div>
                    <div className="flex flex-col gap-3 ml-4">
                      <button
                        onClick={() => handleLike(reel.id)}
                        className="flex flex-col items-center gap-1 hover:scale-110 transition-transform"
                      >
                        <Heart
                          className={`h-6 w-6 ${
                            likedReels.includes(reel.id) ? "fill-red-500 text-red-500" : ""
                          }`}
                        />
                        <span className="text-xs">{reel.likes}</span>
                      </button>
                      <button className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
                        <MessageCircle className="h-6 w-6" />
                        <span className="text-xs">{reel.comments}</span>
                      </button>
                      <button className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
                        <Share2 className="h-6 w-6" />
                      </button>
                      <button
                        onClick={() => handleSave(reel.id)}
                        className="flex flex-col items-center gap-1 hover:scale-110 transition-transform"
                      >
                        <Bookmark
                          className={`h-6 w-6 ${
                            savedReels.includes(reel.id) ? "fill-white" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{reel.views} views</span>
                  <Button variant="outline" size="sm">
                    View Full
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Earn Rewards for Your Reels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Upload travel reels and earn cashback on your bookings! The more engagement you get,
                the more you earn.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>1K views = ₹50 credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>100 likes = ₹20 credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Viral reel = ₹500+ bonus</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
