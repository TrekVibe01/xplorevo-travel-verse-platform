
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, X, Plus, Download } from "lucide-react";

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
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-[slideInUp_0.5s_ease-out]">
      <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 left-4 w-8 h-8 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-3 right-8 w-4 h-4 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-4 w-6 h-6 border border-white/30 rounded-lg rotate-45"></div>
            </div>
            
            <div className="relative p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative">
                    <div className="bg-white/20 rounded-2xl p-3 backdrop-blur-sm">
                      <img 
                        src="/lovable-uploads/dd4db603-c0e5-47f6-aad9-956b576bb16f.png" 
                        alt="Xplorevo" 
                        className="w-8 h-8 rounded-lg"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      {isIOS ? 'Add Xplorevo to Home Screen' : 'Install Xplorevo App'}
                    </h3>
                    <p className="text-red-100 text-sm leading-relaxed">
                      {isIOS 
                        ? 'Tap Share ↗️ then "Add to Home Screen" for quick access to your travel companion'
                        : 'Get instant access to your personal travel companion with offline features'
                      }
                    </p>
                    
                    {/* Features */}
                    <div className="flex items-center gap-4 mt-2 text-xs text-red-200">
                      <span>📱 App-like Experience</span>
                      <span>⚡ Instant Loading</span>
                      <span>📴 Offline Access</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  {!isIOS && (
                    <Button
                      size="sm"
                      onClick={handleInstallClick}
                      className="bg-white text-red-600 hover:bg-red-50 flex items-center space-x-2 px-4 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Download className="w-4 h-4" />
                      <span>Install</span>
                    </Button>
                  )}
                  
                  <Button
                    size="sm"
                    onClick={handleDismiss}
                    className="bg-red-700 hover:bg-red-800 p-2 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Progress Bar Animation */}
              <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white/80 rounded-full animate-[progress_3s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes slideInUp {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default AddToHomeScreen;
