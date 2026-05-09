"use client";

import { motion } from "framer-motion";

export function LogoStrip() {
  const logos = [
    "Microsoft", "Salesforce", "Accenture", "Deloitte", "Oracle", "Goldman Sachs"
  ];

  return (
    <div className="py-20 bg-[#050505] border-y border-white/5">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">Trusted by global leaders in infrastructure</span>
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12 opacity-30 grayscale contrast-[2] brightness-[2]">
            {logos.map((logo) => (
              <span key={logo} className="text-[20px] font-bold text-white tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
