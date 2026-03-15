import HeroSection from "@/components/HeroSection";
import ManagedEdgeSection from "@/components/ManagedEdgeSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import ProfitRecoverySlider from "@/components/ProfitRecoverySlider";
import DashboardShowcase from "@/components/DashboardShowcase";
import InquiryFormSection from "@/components/InquiryFormSection";
import TechnicalPartnerSection from "@/components/TechnicalPartnerSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-5 bg-background/60 backdrop-blur-xl border-b border-foreground/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-display text-2xl font-bold tracking-tight text-foreground">
            TRUX<span className="text-primary">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#managed-edge" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Features
            </a>
            <a href="#dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Dashboard
            </a>
            <a href="#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Calculator
            </a>
            <a href="#inquiry" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Inquiry
            </a>
            <a href="#inquiry" className="gold-button text-sm py-2.5 px-6 font-display">
              Request Access
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-[76px]" />

      <HeroSection />
      <ManagedEdgeSection />
      <FeatureShowcase />
      <div id="dashboard">
        <DashboardShowcase />
      </div>
      <div id="calculator">
        <ProfitRecoverySlider />
      </div>
      <InquiryFormSection />
      <TechnicalPartnerSection />

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            TRUX<span className="text-primary">.</span>
          </span>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TRUX Managed Services. Best Transport Management Software in India.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
