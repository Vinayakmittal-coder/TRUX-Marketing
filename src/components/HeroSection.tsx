import { motion } from "framer-motion";
import heroImage from "@/assets/hero-terminal.jpg";

const TRUX_EASING: [number, number, number, number] = [0.2, 0, 0, 1];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Shipping terminal at night"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: TRUX_EASING }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Managed Software Service
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: TRUX_EASING }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter text-foreground mb-8 max-w-5xl"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Your Private Digital{" "}
          <span className="text-primary">Command Center</span> for Transport.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: TRUX_EASING }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
        >
          Secure, Isolated, and Managed. We handle the tech; you handle the trucks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: TRUX_EASING }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#inquiry" className="gold-button text-center text-lg font-display">
            Request Access
          </a>
          <a
            href="#managed-edge"
            className="px-8 py-4 rounded-xl border border-foreground/10 text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-all duration-300 text-center text-lg font-display"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
