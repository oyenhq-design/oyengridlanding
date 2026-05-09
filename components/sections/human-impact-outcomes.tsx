"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, ArrowRight } from "lucide-react";

export function ImpactSection() {
  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden cinematic-warmth">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Premium Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-panel p-12 relative glow-amber"
          >
             <Quote className="w-12 h-12 text-brand-gold/10 absolute top-10 left-10" />
             <div className="relative z-10">
                <blockquote className="text-[24px] font-bold text-white/90 leading-relaxed mb-12 italic">
                   "OYEN GRID has fundamentally transformed our delivery architecture. We now orchestrate complex fellowship programmes with a level of precision and human connection that was previously impossible."
                </blockquote>
                
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 grayscale">
                         <Image src="/exec-avatar-1.png" alt="Dr. Amina Yusuf" width={56} height={56} />
                      </div>
                      <div>
                         <div className="text-[17px] font-bold text-white tracking-tight">Dr. Amina Yusuf</div>
                         <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30">Director, AltSchool Africa</div>
                      </div>
                   </div>
                   <div className="flex gap-1 opacity-40">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-brand-gold fill-brand-gold" />)}
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: Large Metrics & Credibility */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Enterprise Impact</span>
            <h2 className="mt-4 mb-12">Operational outcomes at <span className="text-gold-highlight">institutional scale.</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
               {[
                 { val: "+340%", label: "Operational Efficiency", detail: "Measurable coordination speed." },
                 { val: "-82%", label: "Manual Overhead", detail: "Automated structural tracking." },
                 { val: "-64%", label: "Reporting Time", detail: "Autonomous AI intelligence." },
                 { val: "99.9%", label: "System Continuity", detail: "Institutional reliability." }
               ].map((m, i) => (
                 <div key={i} className="space-y-1">
                    <div className="text-[44px] font-black text-brand-gold tracking-tighter">{m.val}</div>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80">{m.label}</div>
                    <div className="text-[12px] text-white/30">{m.detail}</div>
                 </div>
               ))}
            </div>

            <p className="text-editorial text-[15px]">
               Trusted by operationally-driven institutions to manage the future of structured delivery.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export function FinalCTAHuman() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background: Human-Focused Close */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_human_ops_strategy_room_1778345713521.png" 
          alt="Operational Team Planning" 
          fill 
          className="object-cover image-cinematic brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-[#05070B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.05),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-8">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">System Deployment Ready</span>
          </div>

          <h2 className="text-[52px] md:text-[84px] font-black mb-10 leading-[0.95] tracking-[-0.07em]">
            Built for the future of <br />
            structured <span className="text-gold-highlight italic">global delivery.</span>
          </h2>

          <p className="text-[18px] md:text-[22px] text-white/50 leading-relaxed max-w-2xl mx-auto mb-16 font-light">
            One unified operational system for programmes, people, coordination and intelligence. Initialize your infrastructure today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="btn-cinematic-gold h-[60px] px-12 text-[15px]">
               Start Building
            </button>
            <button className="flex items-center gap-3 text-[14px] font-black text-white/40 hover:text-white transition-colors group uppercase tracking-[0.2em]">
               Talk to Architects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
