import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Download } from "lucide-react";
import SOSButton from "@/components/SOSButton";

const SmartPlanning = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    travelStyle: "balanced",
    interests: []
  });

  const interestOptions = ["Trekking", "Food", "Culture", "Adventure", "Photography", "Wildlife"];

  const toggleInterest = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleGenerate = async () => {
    if (!formData.destination || !formData.days) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-itinerary', {
        body: formData
      });

      if (error) throw error;

      if (data.success) {
        setItinerary(data.itinerary);
        toast({ title: "Itinerary generated successfully!" });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({ title: "Failed to generate itinerary", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({ title: "Please login to save", variant: "destructive" });
      return;
    }

    const { error } = await supabase.from('saved_itineraries').insert({
      user_id: user.id,
      destination: formData.destination,
      days: parseInt(formData.days),
      budget: formData.budget ? parseFloat(formData.budget) : null,
      itinerary_data: itinerary
    });

    if (error) {
      toast({ title: "Failed to save", variant: "destructive" });
    } else {
      toast({ title: "Itinerary saved successfully!" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />
      <SOSButton />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI-Powered Smart Planning
          </h1>
          <p className="text-xl text-gray-600">Let AI create your perfect itinerary in seconds</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600" />
                Trip Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Destination *</label>
                <Input
                  placeholder="e.g., Manali, Goa, Kerala"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Number of Days *</label>
                <Input
                  type="number"
                  min="1"
                  max="30"
                  placeholder="e.g., 5"
                  value={formData.days}
                  onChange={(e) => setFormData({...formData, days: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget (₹)</label>
                <Input
                  type="number"
                  placeholder="e.g., 20000"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Travel Style</label>
                <Select value={formData.travelStyle} onValueChange={(value) => setFormData({...formData, travelStyle: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relaxed">Relaxed</SelectItem>
                    <SelectItem value="balanced">Balanced</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Interests</label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map(interest => (
                    <Button
                      key={interest}
                      type="button"
                      variant={formData.interests.includes(interest) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleInterest(interest)}
                    >
                      {interest}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Itinerary
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Your Itinerary</CardTitle>
            </CardHeader>
            <CardContent>
              {!itinerary ? (
                <div className="text-center text-gray-500 py-12">
                  Fill the form and click "Generate Itinerary" to see your personalized travel plan
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">{itinerary.destination}</h3>
                    <p className="text-sm text-gray-600">{itinerary.days} Days Trip</p>
                    {itinerary.total_estimated_cost && (
                      <p className="text-sm text-gray-600">Budget: {itinerary.total_estimated_cost}</p>
                    )}
                  </div>

                  {itinerary.daily_itinerary?.map((day, idx) => (
                    <div key={idx} className="border-l-4 border-purple-600 pl-4 py-2">
                      <h4 className="font-bold">Day {day.day}: {day.title || `Day ${day.day}`}</h4>
                      <p className="text-sm text-gray-600 mt-1">{day.morning || day.description}</p>
                    </div>
                  ))}

                  {itinerary.description && !itinerary.daily_itinerary && (
                    <div className="prose prose-sm">
                      <p className="whitespace-pre-wrap">{itinerary.description}</p>
                    </div>
                  )}

                  <div className="flex gap-2 mt-4">
                    <Button onClick={handleSave} variant="outline" className="flex-1">
                      Save to Dashboard
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Export PDF
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SmartPlanning;