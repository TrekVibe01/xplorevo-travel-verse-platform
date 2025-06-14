
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthProvider } from "@/hooks/useAuth";
import LoadingScreen from "./components/LoadingScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import TourOperatorProfile from "./pages/TourOperatorProfile";
import CampusAmbassadorRegistration from "./pages/CampusAmbassadorRegistration";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Community from "./pages/Community";
import Rentals from "./pages/Rentals";
import TravelReels from "./pages/TravelReels";
import VerticalReels from "./pages/VerticalReels";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Reduced loading time

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    console.log('Loading completed');
    setIsLoading(false);
  };

  console.log('=== App.tsx Render ===');
  console.log('isLoading:', isLoading);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/tour-operator-profile" element={<TourOperatorProfile />} />
              <Route path="/campus-ambassador" element={<CampusAmbassadorRegistration />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/community" element={<Community />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/reels" element={<TravelReels />} />
              <Route path="/vertical-reels" element={<VerticalReels />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
