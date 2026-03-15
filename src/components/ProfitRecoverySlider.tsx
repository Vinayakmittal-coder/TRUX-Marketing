import { motion } from "framer-motion";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, IndianRupee } from "lucide-react";

const TRUX_EASING: [number, number, number, number] = [0.2, 0, 0, 1];

const ProfitRecoverySlider = () => {
  const [fleetSize, setFleetSize] = useState([25]);

  const leakedRevenue = fleetSize[0] * 18000;
  const annualSavings = leakedRevenue * 12;

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: TRUX_EASING }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Profit Recovery Calculator
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tighter text-foreground">
            How much revenue are you{" "}
            <span className="text-destructive">leaking</span>?
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Paper-based operations lose an average of ₹18,000/truck/month to billing errors,
            missing PODs, and manual fraud. Slide to see your potential savings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: TRUX_EASING }}
          className="glass-card relative overflow-hidden p-8 md:p-12"
        >
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-muted-foreground font-medium">Your Fleet Size</label>
              <span className="font-display text-3xl font-bold text-primary">
                {fleetSize[0]} trucks
              </span>
            </div>
            <Slider
              value={fleetSize}
              onValueChange={setFleetSize}
              min={5}
              max={200}
              step={5}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>5 trucks</span>
              <span>200 trucks</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
              <div className="flex items-center gap-2 mb-3">
                <IndianRupee className="w-5 h-5 text-destructive" />
                <span className="text-sm font-medium text-destructive">Monthly Revenue Leak</span>
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                ₹{leakedRevenue.toLocaleString("en-IN")}
              </p>
              <p className="text-muted-foreground text-sm mt-1">lost every month to paper chaos</p>
            </div>

            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Annual Recovery with TRUX</span>
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                ₹{annualSavings.toLocaleString("en-IN")}
              </p>
              <p className="text-muted-foreground text-sm mt-1">saved by switching to digital</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="#inquiry" className="gold-button inline-block text-lg font-display">
              Recover Your Revenue →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfitRecoverySlider;
