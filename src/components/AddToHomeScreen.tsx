
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, X, Plus } from "lucide-react";

const AddToHomeScreen = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if it's iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Show the prompt after a delay if not dismissed
      setTimeout(() => {
        if (!localStorage.getItem('pwa-prompt-dismissed')) {
          setShowPrompt(true);
        }
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-[slideInUp_0.5s_ease-out]">
      <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-2xl">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="bg-white/20 rounded-full p-2">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  {isIOS ? 'Add to Home Screen' : 'Install Xplorevo App'}
                </h3>
                <p className="text-red-100 text-xs sm:text-sm">
                  {isIOS 
                    ? 'Tap the share button and select "Add to Home Screen"'
                    : 'Get instant access to your travel companion'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 ml-2">
              {!isIOS && (
                <Button
                  size="sm"
                  onClick={handleInstallClick}
                  className="bg-white text-red-600 hover:bg-red-50 flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Install</span>
                </Button>
              )}
              <Button
                size="sm"
                onClick={handleDismiss}
                className="bg-red-700 hover:bg-red-800 p-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes slideInUp {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AddToHomeScreen;
