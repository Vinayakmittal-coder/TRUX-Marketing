import { motion } from "framer-motion";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import fleetHighway from "@/assets/fleet-highway.jpg";

const TRUX_EASING: [number, number, number, number] = [0.2, 0, 0, 1];

const DashboardShowcase = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Fleet background image */}
      <div className="absolute inset-0">
        <img
          src={fleetHighway}
          alt="Fleet of transport trucks on Indian highway"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: TRUX_EASING }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Command Center Preview
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tighter text-foreground max-w-4xl mx-auto">
            Built like a luxury bank app.{" "}
            <span className="text-muted-foreground">Designed for fleet CEOs.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Gold-on-charcoal dashboard with real-time fleet analytics, bilty tracking, 
            and complete financial oversight—all in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: TRUX_EASING }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
            <img
              src={dashboardMockup}
              alt="TRUX Transport Management Dashboard showing fleet analytics and bilty tracking"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 blur-xl" />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: TRUX_EASING }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "500+", label: "Fleets Managed" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Expert Support" },
            { value: "< 2s", label: "Load Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
