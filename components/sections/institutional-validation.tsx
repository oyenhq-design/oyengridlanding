"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, Sparkles, MessageSquare, FileText, ShieldCheck, ArrowRight } from "lucide-react";

export function IntelligenceHumanConnection() {
  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Warm Cinematic Collaboration Image (Scaled for Balance) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[700px] rounded-[56px] overflow-hidden border border-white/10 group shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          >
             <Image 
               src="/human_collaboration_v3_1778383317789.png" 
               alt="Institutional Intelligence Collaboration" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />
             
             {/* Floating Perspective Detail */}
             <div className="absolute top-10 left-10 glass-panel px-5 py-2.5 border-brand-gold/30">
                <span className="text-[10px] font-black tracking-[0.4em] text-brand-gold">COGNITIVE SYNC: ACTIVE</span>
             </div>
          </motion.div>

          {/* RIGHT: Content Scale Down */}
          <div className="lg:pl-12">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-gold mb-8 block opacity-60">Human-AI Intelligence Layer</span>
            <h2 className="mb-10">
              Augment delivery with <br />
              <span className="text-gold-highlight underline decoration-white/5 underline-offset-[12px]">cognitive oversight.</span>
            </h2>
            <p className="text-editorial mb-12 opacity-90 max-w-xl">
              OYEN GRID integrates AI to generate session summaries, monitor participant engagement, and provide trainers with real-time operational assistance.
            </p>

            <div className="space-y-6">
               {[
                 { title: "Automated Session Summaries", desc: "Institutional summaries of every programme session.", icon: FileText },
                 { title: "Engagement Intelligence", desc: "Monitor participant involvement and sentiment.", icon: Sparkles },
                 { title: "Facilitator Copilot", desc: "Real-time assistance for operational delivery.", icon: MessageSquare }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/30 transition-all">
                       <item.icon className="w-5 h-5 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <div>
                       <h4 className="text-[17px] font-black text-white mb-1.5 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                       <p className="text-[14px] text-white/30 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustOutcomes() {
  return (
    <section className="section-gap bg-[#05070B] border-y border-white/5 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          
          {/* TESTIMONIAL: Refined Typography */}
          <div className="lg:col-span-8">
             <Quote className="w-12 h-12 text-brand-gold/20 mb-10" />
             <h2 className="text-[36px] md:text-[52px] leading-[1.1] mb-12 tracking-[-0.05em] font-black italic">
                "OYEN GRID has transformed our programme delivery into a <span className="text-gold-highlight">precision operation.</span> The visibility and coordination are absolute."
             </h2>
             <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border-2 border-brand-gold overflow-hidden">
                   <Image src="/exec-avatar-1.png" alt="Executive" width={56} height={56} className="grayscale" />
                </div>
                <div>
                   <div className="text-[16px] font-black text-white uppercase tracking-wider">Dr. Yusuf Amina</div>
                   <div className="text-[12px] font-bold text-white/30 uppercase tracking-[0.3em]">Director of Operations, AltSchool</div>
                </div>
             </div>
          </div>

          {/* METRICS: Tightened Balance */}
          <div className="lg:col-span-4 space-y-10">
             {[
               { label: "Delivery Efficiency", val: "+340%", desc: "Institutional scaling velocity" },
               { label: "Coordination Overhead", val: "-82%", desc: "Reduction in manual administrative protocols" }
             ].map((m, i) => (
               <div key={i} className="glass-panel p-10 border-white/5">
                  <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold mb-4">{m.label}</div>
                  <div className="text-[52px] md:text-[64px] font-black text-white tracking-tighter mb-2 leading-none">{m.val}</div>
                  <div className="text-[12px] font-bold text-white/30 uppercase tracking-widest">{m.desc}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalAuthorisation() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#05070B]">
      <Image 
        src="/institutional_collaboration_cta_v3_1778383337273.png" 
        alt="Institutional Closing" 
        fill 
        className="object-cover opacity-30 grayscale contrast-125"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/60" />
      
      <div className="container-custom relative z-10 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
         >
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-brand-gold mb-12 block">Final Protocol Authorisation</span>
            <h2 className="text-[48px] md:text-[110px] leading-[0.85] font-black mb-16 tracking-[-0.08em] uppercase">
               Initialize Your <br />
               <span className="text-gold-highlight">Institutional Grid.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
               <button className="btn-cinematic-gold h-[60px] px-16 group">
                  Deploy OS <ShieldCheck className="ml-5 w-5 h-5" />
               </button>
               <button className="text-[13px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors">
                  Contact Operational Architects
               </button>
            </div>
         </motion.div>
      </div>

      {/* Final Detail */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-20">
         <div className="h-px w-20 bg-white/30" />
         <span className="text-[9px] font-black uppercase tracking-[0.5em]">System Nominal: Ready for Deployment</span>
         <div className="h-px w-20 bg-white/30" />
      </div>
    </section>
  );
}
