
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedLoginExperience from "./components/AnimatedLoginExperience";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (credentials: any) => {
    console.log('=== App.tsx handleLogin called ===');
    console.log('Received credentials:', credentials);
    
    setUserCredentials(credentials);
    setIsLoggedIn(true);
    
    console.log('Login state updated - isLoggedIn:', true);
    console.log('=== Login process complete ===');
  };

  const handleLoadingComplete = () => {
    console.log('Loading completed');
    setIsLoading(false);
  };

  const handleLogout = () => {
    console.log('Logging out user');
    setIsLoggedIn(false);
    setUserCredentials(null);
  };

  console.log('=== App.tsx Render ===');
  console.log('isLoading:', isLoading);
  console.log('isLoggedIn:', isLoggedIn);
  console.log('userCredentials:', userCredentials);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (!isLoggedIn) {
    return <AnimatedLoginExperience onLogin={handleLogin} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tour-operator-profile" element={<TourOperatorProfile />} />
            <Route path="/campus-ambassador" element={<CampusAmbassadorRegistration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/community" element={<Community />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/reels" element={<TravelReels />} />
            <Route path="/vertical-reels" element={<VerticalReels />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* Debug info in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
            User: {userCredentials?.role || 'Unknown'} | Email: {userCredentials?.email || 'N/A'}
            <button onClick={handleLogout} className="ml-2 text-red-300 hover:text-red-100">
              Logout
            </button>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
