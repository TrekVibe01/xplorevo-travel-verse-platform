
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NewIndex from "./pages/NewIndex";
import AccountTypeSelection from "./pages/AccountTypeSelection";
import Tours from "./pages/Tours";
import Community from "./pages/Community";
import Rentals from "./pages/Rentals";
import TravelReels from "./pages/TravelReels";
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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewIndex />} />
            <Route path="/auth" element={<AccountTypeSelection />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/community" element={<Community />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/reels" element={<TravelReels />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
