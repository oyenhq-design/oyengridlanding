"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

export function OperationalOutcomes() {
  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-end">
          
          {/* LEFT: Testimonial & Metric */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Executive Validation</span>
            <h2 className="mt-4 mb-12 leading-[1.05] tracking-[-0.06em]">Operational outcomes at <span className="text-gold-highlight">institutional scale.</span></h2>
            
            <div className="glass-panel p-10 relative mb-12">
               <Quote className="w-10 h-10 text-brand-gold/20 absolute top-8 left-8" />
               <blockquote className="text-[22px] font-bold text-white/90 leading-relaxed mb-10 relative z-10 pl-4 border-l-2 border-brand-gold/30">
                  "OYEN GRID has fundamentally transformed our delivery architecture. We now orchestrate complex fellowship programmes with a level of precision that was previously impossible."
               </blockquote>
               
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 grayscale">
                     <Image src="/exec-avatar-1.png" alt="Dr. Amina Yusuf" width={48} height={48} />
                  </div>
                  <div>
                     <div className="text-[16px] font-bold text-white tracking-tight">Dr. Amina Yusuf</div>
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Director, AltSchool Africa</div>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-12 pt-12 border-t border-white/5">
               <div className="flex flex-col gap-1">
                  <span className="text-[38px] font-black text-brand-gold tracking-tighter">+340%</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">Operational Efficiency</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[38px] font-black text-brand-gold tracking-tighter">-82%</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">Coordination Overhead</span>
               </div>
            </div>
          </div>

          {/* RIGHT: Validation Proof */}
          <div className="space-y-8 pb-4">
             {[
               { title: "Coordination Clarity", desc: "Real-time visibility into participant progress across 140+ global nodes." },
               { title: "Structural Integrity", desc: "Automated session tracking eliminates reporting errors and manual overhead." },
               { title: "Institutional Growth", desc: "Seamlessly scale from 10 to 1,000+ programmes without architectural strain." }
             ].map((item, i) => (
               <div key={i} className="flex gap-6 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0 shadow-[0_0_8px_#F5B942]" />
                  <div>
                     <h4 className="text-[16px] font-black text-white/80 uppercase tracking-widest mb-2">{item.title}</h4>
                     <p className="text-[14px] leading-relaxed text-white/40">{item.desc}</p>
                  </div>
               </div>
             ))}
             
             <div className="pt-8">
                <div className="flex gap-4 items-center">
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-brand-gold fill-brand-gold" />)}
                   </div>
                   <span className="text-[11px] font-bold text-white/30 uppercase tracking-[0.1em]">Verified Enterprise Performance</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
