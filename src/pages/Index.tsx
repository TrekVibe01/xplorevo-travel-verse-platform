
import { useState } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import TravelReels from "@/components/TravelReels";
import CampusAmbassador from "@/components/CampusAmbassador";
import Footer from "@/components/Footer";

interface IndexProps {
  onGetStarted?: () => void;
}

const Index = ({ onGetStarted }: IndexProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <Navigation />
      <Hero onGetStarted={onGetStarted} />
      <Features />
      <TravelReels />
      <CampusAmbassador />
      <Footer />
    </div>
  );
};

export default Index;
