import { motion } from "framer-motion";
import { Database, Fingerprint, HeadsetIcon } from "lucide-react";

const TRUX_EASING: [number, number, number, number] = [0.2, 0, 0, 1];

const pillars = [
  {
    icon: Database,
    title: "Private Databases",
    description:
      "Zero shared infrastructure. Your data lives in its own encrypted vault, isolated from every other client on the network.",
  },
  {
    icon: Fingerprint,
    title: "Magic Link Access",
    description:
      "Biometric-grade security. No passwords to leak, no accounts to hijack. One-tap access for your entire team.",
  },
  {
    icon: HeadsetIcon,
    title: "Expert Management",
    description:
      "We are your CTO. Backups, updates, and scaling handled 24/7. Zero downtime, zero headaches.",
  },
];

const ManagedEdgeSection = () => {
  return (
    <section id="managed-edge" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: TRUX_EASING }}
          className="mb-16 md:mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            The Managed Edge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tighter text-foreground max-w-3xl">
            Infrastructure that runs itself.
            <br />
            <span className="text-muted-foreground">So you don't have to.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: TRUX_EASING,
              }}
              className="glass-card relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagedEdgeSection;
