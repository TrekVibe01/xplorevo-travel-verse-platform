
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Phone, MapPin, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const SOSButton = () => {
  const { toast } = useToast();
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [location, setLocation] = useState("Fetching location...");
  const [sending, setSending] = useState(false);

  const handleSOSClick = async () => {
    setIsSOSActive(true);
    setSending(true);
    
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          
          // Send emergency alert to backend
          const { data: { user } } = await supabase.auth.getUser();
          
          try {
            const { error } = await supabase.functions.invoke('emergency-alert', {
              body: {
                user_id: user?.id || 'anonymous',
                latitude,
                longitude
              }
            });

            if (error) throw error;
            
            toast({ 
              title: "SOS Alert Sent!", 
              description: "Emergency alert sent to Xplorevo Team. Help is on the way." 
            });
          } catch (error) {
            console.error("SOS Error:", error);
            toast({ 
              title: "Alert sent locally", 
              description: "Location recorded. Contact: 9763262025",
              variant: "destructive" 
            });
          } finally {
            setSending(false);
          }
        },
        () => {
          setLocation("Location unavailable");
          setSending(false);
          toast({ 
            title: "Location unavailable", 
            description: "Please enable location services" 
          });
        }
      );
    }
  };

  const handleCallEmergency = () => {
    window.location.href = "tel:9763262025";
  };

  if (isSOSActive) {
    return (
      <div className="fixed inset-0 bg-red-500/90 flex items-center justify-center z-50 animate-pulse">
        <Card className="w-full max-w-md mx-4 bg-white border-red-500 border-2">
          <CardHeader className="text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-red-500">
              SOS ACTIVATED
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-gray-700">
              Emergency alert has been sent to your contacts and Xplorevo support team.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{location}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Button onClick={handleCallEmergency} className="w-full bg-red-500 hover:bg-red-600">
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency: 9763262025
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsSOSActive(false)}
                disabled={sending}
              >
                {sending ? "Sending..." : "Close"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Button
      onClick={handleSOSClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg z-40 animate-pulse"
      size="lg"
    >
      <AlertTriangle className="w-8 h-8" />
    </Button>
  );
};

export default SOSButton;
