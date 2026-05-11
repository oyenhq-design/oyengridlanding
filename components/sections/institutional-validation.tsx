"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Sparkles, MessageSquare, FileText, Globe, Database, Users, Cpu, Activity, BarChart3 } from "lucide-react";

export function IntelligenceHumanConnection() {
  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: Realistic AI Intelligence Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative glass-panel p-2 border-white/5 bg-[#0A0D14]"
          >
             <div className="relative aspect-video rounded-xl overflow-hidden p-6 space-y-6">
                <div className="flex justify-between items-center">
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Intelligence Report: Session_084</span>
                   <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-brand-gold" />
                      <div className="w-1 h-1 rounded-full bg-brand-gold/40" />
                   </div>
                </div>
                
                <div className="space-y-4">
                   <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">Automated Session Summary</div>
                      <p className="text-[11px] text-white/60 leading-relaxed">Participant engagement peaked during the modular architecture demonstration. 84% of the cohort successfully completed the structural validation protocol within the allocated timeframe.</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                         <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">Risk Detection</div>
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-brand-gold" />
                            <span className="text-[11px] text-white">None Detected</span>
                         </div>
                      </div>
                      <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                         <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">Engagement Analytics</div>
                         <div className="text-[14px] font-black text-white">High (8.4/10)</div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: Practical AI Language */}
          <div className="lg:pl-12">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold mb-6 block opacity-60">Programme Intelligence</span>
            <h2 className="mb-8 leading-tight">
              Smarter coordination <br />
              across every cohort.
            </h2>
            <p className="text-editorial mb-10 max-w-xl">
              OYEN GRID leverages AI to generate operational insights, monitor delivery health, and provide coordinators with the intelligence needed to optimize programme outcomes.
            </p>

            <div className="space-y-5">
               {[
                 { title: "AI-Assisted Session Summaries", desc: "Institutional summaries of every programme session automatically generated.", icon: FileText },
                 { title: "Engagement Intelligence", desc: "Monitor participant involvement and cohort sentiment in real-time.", icon: Sparkles },
                 { title: "Operational Recommendations", desc: "Data-driven insights to improve delivery throughput and engagement.", icon: MessageSquare }
               ].map((item, i) => (
                 <div key={i} className="flex gap-5 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/30 transition-all">
                       <item.icon className="w-4 h-4 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <div>
                       <h4 className="text-[17px] font-black text-white mb-1 leading-tight">{item.title}</h4>
                       <p className="text-[13px] text-white/30 font-medium leading-relaxed">{item.desc}</p>
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
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* TESTIMONIAL: Structured Institutional Credit */}
          <div className="lg:col-span-7">
             <div className="mb-10 w-12 h-10 bg-brand-gold/10 flex items-center justify-center rounded-lg">
                <Quote className="w-5 h-5 text-brand-gold" />
             </div>
             <h2 className="text-[32px] md:text-[44px] leading-tight mb-12 font-medium text-white/90">
                "OYEN GRID has transformed our programme delivery into a <span className="text-white font-bold">precision operation</span>. The level of visibility and coordination across our global cohorts is now absolute."
             </h2>
             <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden bg-white/5">
                   <Image src="/exec-avatar-1.png" alt="Executive" width={48} height={48} className="grayscale" />
                </div>
                <div>
                   <div className="text-[15px] font-black text-white uppercase tracking-wider">Dr. Yusuf Amina</div>
                   <div className="text-[11px] font-bold text-white/30 uppercase tracking-widest">Director of Operations, AltSchool</div>
                </div>
             </div>
          </div>

          {/* METRICS: Structured Impact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
             {[
               { label: "Delivery Efficiency", val: "+340%", desc: "Institutional scaling velocity" },
               { label: "Coordination Overhead", val: "-82%", desc: "Reduction in manual administrative protocols" }
             ].map((m, i) => (
               <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center">
                  <div className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-gold mb-3">{m.label}</div>
                  <div className="text-[48px] font-black text-white tracking-tighter mb-1 leading-none">{m.val}</div>
                  <div className="text-[12px] font-bold text-white/20 uppercase tracking-widest">{m.desc}</div>
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
    <section className="section-gap relative bg-[#05070B] overflow-hidden">
      <div className="container-custom relative z-10">
         <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
               <span className="text-[11px] font-black uppercase tracking-[0.6em] text-brand-gold mb-10 block">System Deployment Protocol</span>
               <h2 className="mb-10 leading-none">
                  Build the infrastructure behind <br />
                  your programme operations.
               </h2>
               <p className="text-[18px] text-white/40 mb-16 max-w-2xl mx-auto font-medium">
                  One system for coordination, delivery, analytics and scale. Trusted by operationally-driven institutions globally.
               </p>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
                  <button className="btn-cinematic-gold h-14 px-12 text-[14px]">
                     Start Building
                  </button>
                  <button className="text-[14px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                     Contact Sales
                  </button>
               </div>

               {/* Institutional Trust Indicators */}
               <div className="pt-16 border-t border-white/5">
                  <div className="flex flex-wrap justify-center gap-16 items-center opacity-20 grayscale">
                     <span className="font-black italic text-[18px] tracking-tighter">ALTSCHOOL</span>
                     <span className="font-black italic text-[16px] tracking-tighter">INGRESSIVE</span>
                     <span className="font-black italic text-[17px] tracking-tighter">TALENTQL</span>
                     <span className="font-black italic text-[15px] tracking-tighter">TECHSTARS</span>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>

      {/* Decorative Infrastructure Detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/20 to-transparent" />
    </section>
  );
}
