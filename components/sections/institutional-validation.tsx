"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, Sparkles, MessageSquare, FileText, ShieldCheck, ArrowRight } from "lucide-react";

export function IntelligenceHumanConnection() {
  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Cinematic Human Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[650px] rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl"
          >
             <Image 
               src="/trainer_support_intelligence_v2_1778347223515.png" 
               alt="Human Interaction & Intelligence" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />
             <div className="absolute bottom-10 left-10 text-left">
                <div className="text-[10px] font-black text-brand-gold tracking-[0.4em] mb-2 uppercase">Human Interface</div>
                <h3 className="text-[32px] font-black text-white leading-tight">Intelligent connection.</h3>
             </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Operational Intelligence</span>
            <h2 className="mt-4 mb-10 leading-[1] tracking-[-0.06em]">Human coordination powered by <span className="text-gold-highlight">operational intelligence.</span></h2>
            <p className="text-editorial mb-12">Connect participants, trainers, and coordinators through an intelligent communication layer that generates autonomous summaries and actionable insights without losing the human touch.</p>
            
            <div className="space-y-4">
               {[
                 { title: "AI Summaries", desc: "Autonomous session intelligence for every coordinator.", icon: Sparkles },
                 { title: "Communication Layer", desc: "Persistent communication for operational continuity.", icon: MessageSquare },
                 { title: "Operational Notes", desc: "Context-aware intelligence integrated into the delivery core.", icon: FileText }
               ].map((item, i) => (
                 <div key={i} className="capability-row">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-gold/40 transition-all">
                       <item.icon className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <div>
                       <h4 className="text-[16px] font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                       <p className="text-[13px] leading-relaxed text-white/40">{item.desc}</p>
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
    <section className="section-gap bg-[#0B1020]/20 relative border-y border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* LEFT: Premium Testimonial (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
             <div className="glass-panel p-12 relative glow-amber">
                <Quote className="w-12 h-12 text-brand-gold/10 absolute top-10 left-10" />
                <div className="relative z-10">
                   <blockquote className="text-[26px] md:text-[32px] font-bold text-white/90 leading-[1.3] mb-12 tracking-tight italic">
                      "OYEN GRID transformed how we coordinate programmes. What previously required fragmented tools and manual oversight is now managed through one <span className="text-brand-gold">structured operational system.</span>"
                   </blockquote>
                   
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 grayscale">
                            <Image src="/exec-avatar-1.png" alt="Dr. Amina Yusuf" width={56} height={56} />
                         </div>
                         <div>
                            <div className="text-[18px] font-bold text-white tracking-tight">Dr. Amina Yusuf</div>
                            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30">Director, AltSchool Africa</div>
                         </div>
                      </div>
                      <div className="flex gap-1 opacity-30">
                         {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-brand-gold fill-brand-gold" />)}
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: Metrics & Trust (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4">
             <div className="grid grid-cols-2 gap-12 mb-16">
                {[
                  { val: "+340%", label: "Efficiency" },
                  { val: "-82%", label: "Coordination" },
                  { val: "-64%", label: "Reporting" },
                  { val: "99.9%", label: "Reliability" }
                ].map((m, i) => (
                  <div key={i} className="space-y-1">
                     <div className="text-[44px] font-black text-brand-gold tracking-tighter">{m.val}</div>
                     <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">{m.label}</div>
                  </div>
                ))}
             </div>

             <div className="space-y-6">
                {[
                  "Structured permissions protocols",
                  "Institutional operational continuity",
                  "Enterprise-grade security infrastructure",
                  "SOC2 compliant governance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                     <ShieldCheck className="w-4 h-4 text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                     <span className="text-[14px] font-medium text-white/40 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function FinalAuthorisation() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/final_cta_team_leadership_v2_1778347250768.png" 
          alt="Operational Leadership Team" 
          fill 
          className="object-cover image-cinematic brightness-[0.3] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-[#05070B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.06),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-12">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_#F5B942]" />
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold">Infrastructure Deployment Ready</span>
          </div>

          <h2 className="text-[56px] md:text-[92px] font-black mb-12 leading-[0.9] tracking-[-0.08em]">
            Built for the future of <br />
            structured <span className="text-gold-highlight italic">global delivery.</span>
          </h2>

          <p className="text-[20px] md:text-[24px] text-white/50 leading-relaxed max-w-2xl mx-auto mb-20 font-light tracking-tight">
            One operational system for programmes, people, communication and intelligence. Initialize your institutional architecture today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="btn-cinematic-gold w-full sm:w-auto">
               Initialize System
            </button>
            <button className="flex items-center gap-4 text-[13px] font-black text-white/30 hover:text-white transition-colors group uppercase tracking-[0.3em]">
               Talk to Architects <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
