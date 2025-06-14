
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, X, Download } from "lucide-react";

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
      }, 2000);
    };

    // Auto-show for iOS after a delay
    if (isIOSDevice && !localStorage.getItem('pwa-prompt-dismissed')) {
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    }

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
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 animate-[slideInLeft_0.5s_ease-out] max-w-xs">
      <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-2xl overflow-hidden">
        <CardContent className="p-4">
          <div className="relative">
            {/* Close Button */}
            <Button
              size="sm"
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 bg-red-700 hover:bg-red-800 p-1 rounded-full w-6 h-6 flex items-center justify-center"
            >
              <X className="w-3 h-3" />
            </Button>
            
            <div className="text-center">
              <div className="mb-3">
                <img 
                  src="/lovable-uploads/dd4db603-c0e5-47f6-aad9-956b576bb16f.png" 
                  alt="Xplorevo" 
                  className="w-12 h-12 mx-auto rounded-lg"
                />
              </div>
              
              <h3 className="font-bold text-sm mb-2">
                Get the Xplorevo App Experience
              </h3>
              <p className="text-red-100 text-xs mb-4 leading-relaxed">
                Add our site to your home screen for instant access to your travel companion
              </p>
              
              {/* 2x2 Button Layout */}
              <div className="grid grid-cols-2 gap-2">
                {!isIOS && (
                  <Button
                    size="sm"
                    onClick={handleInstallClick}
                    className="bg-white text-red-600 hover:bg-red-50 text-xs px-2 py-1 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    Add to Home
                  </Button>
                )}
                
                <Button
                  size="sm"
                  onClick={() => {
                    // Handle learn more action
                    alert('Add to Home Screen: For iOS: Tap Share button, then "Add to Home Screen". For Android: Tap the menu and select "Add to Home Screen".');
                  }}
                  className="bg-red-700 hover:bg-red-800 text-xs px-2 py-1 font-semibold"
                >
                  <Smartphone className="w-3 h-3 mr-1" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes slideInLeft {
          0% { transform: translate(-100px, -50%); opacity: 0; }
          100% { transform: translate(0, -50%); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AddToHomeScreen;
