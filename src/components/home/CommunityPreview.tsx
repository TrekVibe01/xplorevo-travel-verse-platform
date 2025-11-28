import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const communityGroups = [
  { name: "Trek Lovers – Pune", members: "2.5K", icon: "🏔️" },
  { name: "Backpackers India", members: "5.2K", icon: "🎒" },
  { name: "Xplorevo Student Squad", members: "1.8K", icon: "🎓" },
];

const events = [
  { name: "Night Trek Meetup (Pune)", date: "Jan 20", icon: "🌙" },
  { name: "Startup Travel Stories Meetup – Mumbai", date: "Jan 25", icon: "💼" },
];

const forumPosts = [
  { text: "राजगड रात्रीचा ट्रेक कसा आहे?", lang: "🇮🇳", replies: 12 },
  { text: "Solo trip Uttarakhand safe है क्या?", lang: "🇮🇳", replies: 8 },
  { text: "Best treks for beginners near Pune?", lang: "🇬🇧", replies: 24 },
];

export const CommunityPreview = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground text-lg">
            Connect with fellow travelers, join groups, and participate in events
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community Groups
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {communityGroups.map((group) => (
                <div
                  key={group.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/70 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{group.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{group.name}</div>
                      <div className="text-xs text-muted-foreground">{group.members} members</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {events.map((event) => (
                <div
                  key={event.name}
                  className="p-3 rounded-lg bg-muted hover:bg-muted/70 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xl">{event.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{event.name}</div>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {event.date}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Forum Discussions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {forumPosts.map((post) => (
                <div
                  key={post.text}
                  className="p-3 rounded-lg bg-muted hover:bg-muted/70 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <span>{post.lang}</span>
                    <div className="flex-1">
                      <div className="text-sm">{post.text}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {post.replies} replies
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Explore Community
          </Button>
        </div>
      </div>
    </section>
  );
};
