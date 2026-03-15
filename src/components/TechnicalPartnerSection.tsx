import { motion } from "framer-motion";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import partnerHeadshot from "@/assets/partner-headshot.png";

const TRUX_EASING: [number, number, number, number] = [0.2, 0, 0, 1];

const TechnicalPartnerSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: TRUX_EASING }}
            className="lg:col-span-2">
            
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Your Technical Partner
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tighter text-foreground mb-6">
              Direct access to the founder
              <br />
              <span className="text-muted-foreground">for strategic integration.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              No support tickets. No chatbots. Every TRUX client gets a dedicated line to
              the founder for architecture decisions, scaling strategy, and priority
              issue resolution.
            </p>
          </motion.div>

          {/* Partner card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: TRUX_EASING }}
            className="glass-card relative overflow-hidden text-center">
            
            {/* Headshot */}
            <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-primary/40 ring-offset-4 ring-offset-background">
              <img
                src={partnerHeadshot}
                alt="Technical Partner portrait"
                className="w-full h-full object-cover grayscale" />
              
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                Verified Partner
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-foreground mb-1">
              Vinayak Mittal 
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Technical Partner & Founder
            </p>

            {/* Contact links */}
            <div className="space-y-3">
              <a

                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 transition-all duration-300 text-sm font-medium" href="https://wa.me/918826760409">
                
                <MessageCircle className="w-4 h-4" />
                WhatsApp Direct
              </a>
              <a
                href="mailto:partner@trux.in"
                className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground/70 hover:text-foreground hover:border-foreground/20 transition-all duration-300 text-sm font-medium">
                
                <Mail className="w-4 h-4" />
                partner@trux.in
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default TechnicalPartnerSection;