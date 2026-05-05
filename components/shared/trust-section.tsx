"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function TrustSection() {
  const organizations = [
    "ACME CORP", "TECHGROW", "EDUSCALE", "GLOBALORG", "INNOVATE", "QUANTUM", "STRATA"
  ];

  return (
    <section className="py-20 bg-[#0B0B0C] relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(255,255,255,0.06)]" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        
        {/* Trusted By Strip */}
        <div className="relative w-full overflow-hidden mb-16">
          {/* Edge Gradients for Fading Effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0B0C] to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0B0C] to-transparent z-20" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between gap-12 py-4 grayscale opacity-40"
          >
            {organizations.map((org, i) => (
              <div 
                key={i} 
                className="text-[13px] font-bold tracking-[0.3em] text-white whitespace-nowrap"
              >
                {org}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Ratings Row - Kept but made more minimal */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 opacity-60">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex gap-1 text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <div className="text-white font-medium text-[16px] tracking-tight">4.8/5 on G2</div>
          </motion.div>

          <div className="hidden sm:block w-[1px] h-6 bg-[rgba(255,255,255,0.06)]" />

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex gap-1 text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <div className="text-white font-medium text-[16px] tracking-tight">4.9/5 on Capterra</div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(255,255,255,0.06)]" />
    </section>
  );
}
