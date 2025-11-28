import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ToursSection } from "@/components/home/ToursSection";
import { AdventureGuardianSection } from "@/components/home/AdventureGuardianSection";
import { CommunityPreview } from "@/components/home/CommunityPreview";

export default function NewIndex() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ToursSection />
      <AdventureGuardianSection />
      <CommunityPreview />
      <Footer />
    </div>
  );
}
