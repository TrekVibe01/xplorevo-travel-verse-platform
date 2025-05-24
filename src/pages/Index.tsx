
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import TravelReels from "@/components/TravelReels";
import Leaderboard from "@/components/Leaderboard";
import EmergencySupport from "@/components/EmergencySupport";
import PartnerDashboards from "@/components/PartnerDashboards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50">
      <Navigation />
      <Hero />
      <Features />
      <TravelReels />
      <Leaderboard />
      <EmergencySupport />
      <PartnerDashboards />
      <Footer />
    </div>
  );
};

export default Index;
