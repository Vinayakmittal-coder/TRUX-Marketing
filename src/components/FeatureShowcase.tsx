import { motion } from "framer-motion";
import { Smartphone, Shield, FileSearch, Camera } from "lucide-react";
import privateVaultImg from "@/assets/private-vault.jpg";
import podDeliveryImg from "@/assets/pod-delivery.jpg";

const TRUX_EASING: [number, number, number, number] = [0.2, 0, 0, 1];

const features = [
  {
    icon: Smartphone,
    badge: "Zero-Touch Access",
    title: "WhatsApp to Full Ledger in One Tap",
    description:
      "No passwords. No login screens. Your clients receive a Magic Link via WhatsApp and instantly access their complete bilty history, invoices, and fleet data. Biometric-grade security with zero friction.",
    image: null,
    reverse: false,
  },
  {
    icon: Shield,
    badge: "Single-Tenant Architecture",
    title: "Your Ironclad Private Vault",
    description:
      "Most platforms pool everyone's data together. TRUX gives every transport group their own isolated, encrypted database that no other client—or even we—can access. Your books. Your data. Your vault.",
    image: privateVaultImg,
    reverse: true,
  },
  {
    icon: FileSearch,
    badge: "Munshi Audit Trail",
    title: "Every Change. Every Entry. Tracked.",
    description:
      "Know exactly who edited a Bilty, when, and what was changed. No more 'fixing' the books behind the owner's back. Complete transparency for fleet owners who demand accountability.",
    image: null,
    reverse: false,
  },
  {
    icon: Camera,
    badge: "Instant POD Gallery",
    title: "Proof of Delivery in Real-Time",
    description:
      "No more waiting 10 days for a paper POD to arrive by mail. Drivers upload delivery photos from the field instantly. Fleet owners see confirmation the moment goods are delivered.",
    image: podDeliveryImg,
    reverse: true,
  },
];

const FeatureShowcase = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: TRUX_EASING }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Why TRUX Wins
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tighter text-foreground max-w-4xl mx-auto">
            Features that make competitors{" "}
            <span className="text-muted-foreground">irrelevant.</span>
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: TRUX_EASING }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                feature.reverse ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={feature.reverse ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className={feature.reverse ? "lg:order-1" : ""}>
                {feature.image ? (
                  <div className="relative rounded-3xl overflow-hidden border border-foreground/10">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 md:h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                ) : (
                  <div className="glass-card relative overflow-hidden p-8 md:p-12">
                    <div className="space-y-4">
                      {index === 0 ? (
                        /* Magic Link visual */
                        <>
                          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20">
                            <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                              <Smartphone className="w-5 h-5 text-[#25D366]" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">WhatsApp Notification</p>
                              <p className="text-xs text-muted-foreground">
                                "Your TRUX ledger is ready →"
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center py-3">
                            <div className="w-px h-8 bg-primary/30" />
                          </div>
                          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                            <p className="text-primary font-display font-bold text-lg">🔓 Instant Access</p>
                            <p className="text-muted-foreground text-sm mt-1">
                              Full ledger, invoices & fleet data
                            </p>
                          </div>
                        </>
                      ) : (
                        /* Audit trail visual */
                        <>
                          <div className="space-y-3">
                            {[
                              { time: "14:32", action: "Bilty #4521 amount updated", user: "Ramesh K.", change: "₹45,000 → ₹48,000" },
                              { time: "14:28", action: "New Bilty #4522 created", user: "Sunil M.", change: "Delhi → Jaipur" },
                              { time: "13:45", action: "POD uploaded for #4519", user: "Driver Ajay", change: "3 photos attached" },
                            ].map((log, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.4 }}
                                className="flex items-start gap-3 p-3 rounded-xl bg-foreground/5 border border-foreground/5"
                              >
                                <span className="text-xs text-primary font-mono mt-0.5">{log.time}</span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm text-foreground font-medium">{log.action}</p>
                                  <p className="text-xs text-muted-foreground">
                                    by {log.user} • {log.change}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
