"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="py-20 bg-[#0B0B0C] border-y border-[#27272A]/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-[#D4AF37] opacity-[0.015] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Logos Row */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-[12px] text-[#A1A1AA] tracking-[0.2em] uppercase mb-10 font-semibold opacity-80">
            Trusted by forward-thinking organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-30 hover:opacity-60 transition-opacity duration-700">
            <div className="text-2xl font-black tracking-tighter text-white">ACME Corp</div>
            <div className="text-xl font-bold tracking-widest text-white">TECHGROW</div>
            <div className="text-2xl font-serif italic text-white">EduScale</div>
            <div className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
              <div className="w-5 h-5 bg-white rounded-full"></div> GlobalOrg
            </div>
            <div className="text-2xl font-bold text-white uppercase tracking-wider">Innovate.</div>
          </div>
        </div>

        {/* Ratings Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24">
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1.5 text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`w-5 h-5 fill-current ${i === 5 ? 'opacity-40' : ''}`} />
              ))}
            </div>
            <div className="text-white font-medium text-[22px] tracking-tight">4.8/5</div>
            <div className="text-[#A1A1AA] text-[13px] tracking-wide uppercase">G2 Crowd</div>
          </div>

          <div className="hidden sm:block w-[1px] h-12 bg-[#27272A]" />

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1.5 text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`w-5 h-5 fill-current ${i === 5 ? 'opacity-60' : ''}`} />
              ))}
            </div>
            <div className="text-white font-medium text-[22px] tracking-tight">4.9/5</div>
            <div className="text-[#A1A1AA] text-[13px] tracking-wide uppercase">Capterra</div>
          </div>

          <div className="hidden sm:block w-[1px] h-12 bg-[#27272A]" />

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1.5 text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`w-5 h-5 fill-current ${i === 5 ? 'opacity-80' : ''}`} />
              ))}
            </div>
            <div className="text-white font-medium text-[22px] tracking-tight">9.8/10</div>
            <div className="text-[#A1A1AA] text-[13px] tracking-wide uppercase">TrustRadius</div>
          </div>

        </div>

      </div>
    </section>
  );
}
