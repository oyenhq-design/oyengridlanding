"use client";

import { motion } from "framer-motion";

const logos = [
  "MICROSOFT", "DELOITTE", "AMAZON", "SIEMENS", "IBM", "ACCENTURE", "SAP"
];

export function SocialProof() {
  return (
    <section className="py-20 bg-[#050812] border-y border-white/5 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
           <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Trusted by high-performance organizations</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 opacity-30 grayscale transition-all hover:opacity-60 hover:grayscale-0 duration-700">
           {logos.map((logo) => (
             <motion.div 
               key={logo}
               whileHover={{ scale: 1.05 }}
               className="text-2xl font-black tracking-tighter text-white"
             >
               {logo}
             </motion.div>
           ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/5 pt-16">
           <div>
              <div className="text-3xl font-bold text-white tracking-tighter">500+</div>
              <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Enterprise Partners</div>
           </div>
           <div>
              <div className="text-3xl font-bold text-white tracking-tighter">NGN 12B+</div>
              <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Operational Value</div>
           </div>
           <div>
              <div className="text-3xl font-bold text-white tracking-tighter">98.2%</div>
              <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Retention Index</div>
           </div>
           <div>
              <div className="text-3xl font-bold text-white tracking-tighter">12 Global</div>
              <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Infrastructure Nodes</div>
           </div>
        </div>
      </div>
    </section>
  );
}
