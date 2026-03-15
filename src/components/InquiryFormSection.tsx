import { motion } from "framer-motion";
import { useState } from "react";

const TRUX_EASING: [number, number, number, number] = [0.2, 0, 0, 1];

const InquiryFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    fleetSize: "",
    primaryRoutes: "",
    currentChallenges: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="inquiry" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: TRUX_EASING }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Business Inquiry
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tighter text-foreground">
            Ready to take control?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: TRUX_EASING }}
          className="inset-form p-8 md:p-12"
        >
          <h3 className="font-display text-2xl font-semibold mb-8 text-primary">
            Get Started
          </h3>
          <form
            action="https://formsubmit.co/ed84abfbf4c3079f2b1ef1d641b3774e"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Arjun Singh"
                  className="trux-input"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Singh Logistics"
                  className="trux-input"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Fleet Size
              </label>
              <select
                name="fleetSize"
                value={formData.fleetSize}
                onChange={handleChange}
                className="trux-input appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>
                  Select fleet size
                </option>
                <option value="1-10">1–10 vehicles</option>
                <option value="11-50">11–50 vehicles</option>
                <option value="50+">50+ vehicles</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Primary Routes
              </label>
              <textarea
                name="primaryRoutes"
                value={formData.primaryRoutes}
                onChange={handleChange}
                placeholder="e.g., Delhi → Mumbai, Chennai → Bangalore"
                rows={3}
                className="trux-input resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Current Challenges
              </label>
              <textarea
                name="currentChallenges"
                value={formData.currentChallenges}
                onChange={handleChange}
                placeholder="Tell us about the pain points in your current operations..."
                rows={3}
                className="trux-input resize-none"
              />
            </div>

            <button type="submit" className="gold-button w-full text-lg font-display">
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default InquiryFormSection;
