import { Button } from "@/components/ui/button";
import { Mountain, TrendingUp, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              India's First Digital Travel Ecosystem
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Explore India with{" "}
              <span className="bg-gradient-to-r from-brand-from to-brand-to bg-clip-text text-transparent">
                Xplorevo
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Book verified tours, rent vehicles, connect with travelers, share your adventures through reels, and stay safe with our emergency support system.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-brand-from to-brand-to hover:opacity-90">
                Explore Tours
              </Button>
              <Button size="lg" variant="outline">
                Become a Partner
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Safety Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Verified Partners</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
              alt="Mountain Adventure"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
