import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

const tours = [
  {
    id: 1,
    name: "Manali Adventure Trip",
    price: "₹6,000",
    duration: "6 Days",
    organisation: "Himalayan Vibe Expeditions",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    includes: ["Stay", "Meals", "Local Transport", "Snow Activities", "Sightseeing"],
  },
  {
    id: 2,
    name: "Rajgad Fort Trek",
    price: "₹1,999",
    duration: "1D / 1N",
    organisation: "SahyadriPrmi Organisation",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    includes: ["Night Trek", "Meals", "Guide", "Pickup/Drop"],
  },
  {
    id: 3,
    name: "Kedarnath Yatra",
    price: "₹14,999",
    duration: "5D/4N",
    organisation: "Mountain Quest",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    includes: ["Food", "Stay", "Transport", "VIP Darshan"],
  },
  {
    id: 4,
    name: "Goa Backpacking",
    price: "₹9,500",
    duration: "3N/4D",
    organisation: "Travel Tribe",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
    includes: ["Hostel", "Scooty", "Breakfast", "Casino Entry"],
  },
  {
    id: 5,
    name: "Bhandardara Lakeside Camping",
    price: "₹1,499",
    duration: "1N",
    organisation: "Campers Hub",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    includes: ["BBQ", "Dinner", "Tent", "Music"],
  },
];

export const ToursSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Tours & Treks</h2>
          <p className="text-muted-foreground text-lg">
            Verified packages from trusted organizations across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 right-4 bg-white text-primary">
                  {tour.duration}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{tour.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {tour.organisation}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {tour.includes.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{tour.price}</div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};
