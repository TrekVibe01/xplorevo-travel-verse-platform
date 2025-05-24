import { useState } from "react";
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
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
