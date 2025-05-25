
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import AnimatedLoginExperience from "@/components/AnimatedLoginExperience";
import AddToHomeScreen from "@/components/AddToHomeScreen";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import Rentals from "./pages/Rentals";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import TravelReels from "./pages/TravelReels";
import Community from "./pages/Community";
import SOSButton from "@/components/SOSButton";
import VerticalReels from "@/components/VerticalReels";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Always show loading on first visit or refresh
    return !sessionStorage.getItem('loadingShown');
  });
  
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('userLoggedIn');
  });
  
  const [showLoginScreen, setShowLoginScreen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('loadingShown', 'true');
  };

  const handleLogin = (credentials: any) => {
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userCredentials', JSON.stringify(credentials));
    setIsLoggedIn(true);
    setShowLoginScreen(false);
  };

  const handleGetStarted = () => {
    if (!isLoggedIn) {
      setShowLoginScreen(true);
    }
  };

  // Reset loading on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('loadingShown');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : showLoginScreen ? (
          <AnimatedLoginExperience onLogin={handleLogin} />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index onGetStarted={handleGetStarted} />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/travel-reels" element={<TravelReels />} />
              <Route path="/vertical-reels" element={<VerticalReels />} />
              <Route path="/community" element={<Community />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <SOSButton />
            <AddToHomeScreen />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
