import { Truck } from "lucide-react";

type BrandLogoProps = {
  size?: "sm" | "md";
};

const BrandLogo = ({ size = "md" }: BrandLogoProps) => {
  const iconSize = size === "sm" ? "h-5 w-5" : "h-6 w-6";
  const textSize = size === "sm" ? "text-base" : "text-2xl";

  return (
    <span className="inline-flex items-center gap-2.5" aria-label="TRUX home">
      <span className="inline-flex items-center justify-center rounded-lg bg-primary/15 border border-primary/35 p-1.5">
        <Truck className={`${iconSize} text-primary`} strokeWidth={2.2} />
      </span>
      <span className={`font-display ${textSize} font-bold tracking-tight text-foreground`}>
        TRUX<span className="text-primary">.</span>
      </span>
    </span>
  );
};

export default BrandLogo;
