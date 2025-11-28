import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, HeartPulse, Activity } from "lucide-react";

export const AdventureGuardianSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <Card className="border-2 border-primary/20 shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-brand-from to-brand-to flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold">
              Adventure Guardian AI
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Verify trek information, assess health risks, and detect fraud before your adventure begins. Your AI companion for safe trekking.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-2" />
                <h3 className="font-semibold mb-1">Fraud Detection</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered verification of trek packages and organizers
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <HeartPulse className="h-8 w-8 text-red-500 mb-2" />
                <h3 className="font-semibold mb-1">Health Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized risk analysis based on your health profile
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <Activity className="h-8 w-8 text-green-500 mb-2" />
                <h3 className="font-semibold mb-1">Trek Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time weather, difficulty, and safety checks
                </p>
              </div>
            </div>
            <div className="text-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-from to-brand-to hover:opacity-90"
                onClick={() => window.open("https://adventuregardianai.netlify.app/", "_blank")}
              >
                Open Adventure Guardian AI →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
