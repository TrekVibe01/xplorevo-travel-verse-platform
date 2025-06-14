
import { useState } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import TravelReels from "@/components/TravelReels";
import CampusAmbassador from "@/components/CampusAmbassador";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50">
      <Navigation />
      <Hero />
      <Features />
      <TravelReels />
      <CampusAmbassador />
      <Footer />
    </div>
  );
};

export default Index;
