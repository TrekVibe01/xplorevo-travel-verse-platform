import { Mountain } from "lucide-react";

export const BrandLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Mountain className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold bg-gradient-to-r from-brand-from to-brand-to bg-clip-text text-transparent">
        Xplorevo
      </span>
    </div>
  );
};
