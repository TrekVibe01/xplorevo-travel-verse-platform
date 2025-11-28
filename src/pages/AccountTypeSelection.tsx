import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrandLogo } from "@/components/BrandLogo";
import { AccountTypeSelector } from "@/components/AccountTypeSelector";
import SimpleAuthForm from "@/components/auth/SimpleAuthForm";

export default function AccountTypeSelection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  const handleBack = () => {
    setSelectedType(null);
  };

  const handleAuthSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <BrandLogo />
        </div>

        {!selectedType ? (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Choose Your Account Type</h1>
              <p className="text-muted-foreground">
                Select how you'd like to use Xplorevo
              </p>
            </div>
            <AccountTypeSelector onSelect={handleTypeSelect} />
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <button
              onClick={handleBack}
              className="mb-4 text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to account types
            </button>
            <SimpleAuthForm
              userType={selectedType}
              onSuccess={handleAuthSuccess}
            />
          </div>
        )}
      </div>
    </div>
  );
}
