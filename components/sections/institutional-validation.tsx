"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, Sparkles, MessageSquare, FileText, ShieldCheck, ArrowRight } from "lucide-react";

export function IntelligenceHumanConnection() {
  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden">
      {/* Immersive Depth */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-gold/[0.03] to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          
          {/* LEFT: Warm Cinematic Collaboration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[800px] rounded-[56px] overflow-hidden border border-white/10 group shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
          >
             <Image 
               src="/human_collaboration_v3_1778383317789.png" 
               alt="Human Collaboration & Support" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#05070B] via-[#05070B]/40 to-transparent opacity-90" />
             
             {/* Communication Overlays */}
             <motion.div 
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-12 left-12 right-12 p-10 glass-panel border-white/10 backdrop-blur-2xl"
             >
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                      <Sparkles className="w-5 h-5 text-brand-gold" />
                   </div>
                   <div className="text-[12px] font-black text-brand-gold uppercase tracking-[0.4em]">Intelligence Layer Active</div>
                </div>
                <h4 className="text-[20px] font-bold text-white mb-4 leading-tight italic">"The autonomous session summary has identified 4 critical action items for the regional coordinator."</h4>
                <div className="flex items-center gap-3 opacity-40">
                   <MessageSquare className="w-4 h-4 text-white" />
                   <span className="text-[11px] font-medium text-white tracking-widest uppercase">Facilitator Support Sync Complete</span>
                </div>
             </motion.div>
          </motion.div>

          {/* RIGHT: Content - Human First, AI Second */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold/60 mb-8 block">Cognitive Infrastructure</span>
            <h2 className="text-[48px] md:text-[68px] font-black tracking-[-0.06em] leading-[0.95] mb-12">Human intelligence, <br /><span className="text-gold-highlight italic">algorithmically enhanced.</span></h2>
            <p className="text-editorial text-[20px] leading-relaxed mb-16 opacity-80">Empower your facilitators and coordinators with a cognitive layer that automates the mundane—summaries, tracking, and notes—so they can focus on what matters: <span className="text-white font-black italic">The Human Connection.</span></p>
            
            <div className="grid sm:grid-cols-2 gap-10">
               {[
                 { title: "AI Summaries", desc: "Autonomous session intelligence for every coordinator.", icon: Sparkles },
                 { title: "Engagement Flow", desc: "Persistent communication for operational continuity.", icon: MessageSquare },
                 { title: "Contextual Notes", desc: "Intelligence integrated into the delivery core.", icon: FileText },
                 { title: "Global Sync", desc: "Real-time coordination across every node.", icon: ShieldCheck }
               ].map((item, i) => (
                 <div key={i} className="space-y-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-gold/40 transition-all">
                       <item.icon className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <h4 className="text-[17px] font-black text-white group-hover:text-brand-gold transition-colors">{item.title}</h4>
                    <p className="text-[13px] leading-relaxed text-white/30">{item.desc}</p>
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
    <section className="section-gap bg-[#0B1020]/20 relative border-y border-white/5 overflow-hidden">
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.png')] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-32">
          
          {/* LEFT: Premium Testimonial (Span 8) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
             <div className="relative pt-12">
                <Quote className="w-20 h-20 text-brand-gold/5 absolute top-0 -left-10" />
                <div className="relative z-10">
                   <blockquote className="text-[36px] md:text-[48px] font-black text-white leading-[1.1] mb-16 tracking-[-0.05em] italic">
                      "OYEN GRID is the first platform that understands programme delivery as mission-critical infrastructure. It has transformed our <span className="text-brand-gold underline decoration-white/10 underline-offset-8">coordination intelligence</span> globally."
                   </blockquote>
                   
                   <div className="flex items-center gap-8">
                      <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 grayscale shadow-2xl">
                         <Image src="/exec-avatar-1.png" alt="Institutional Director" width={80} height={80} />
                      </div>
                      <div>
                         <div className="text-[24px] font-black text-white tracking-tighter">Dr. Amina Yusuf</div>
                         <div className="text-[12px] font-black uppercase tracking-[0.3em] text-brand-gold mt-1">Director, AltSchool Africa</div>
                      </div>
                      <div className="flex gap-1 ml-auto opacity-40">
                         {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />)}
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: Metrics & Trust (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center border-l border-white/5 pl-20">
             <div className="space-y-16">
                {[
                  { val: "+340%", label: "OPERATIONAL EFFICIENCY", desc: "Measured across 12,000+ session hours." },
                  { val: "-82%", label: "COORDINATION OVERHEAD", desc: "Reduction in manual administrative protocols." },
                  { val: "100%", label: "RELIABILITY PROTOCOL", desc: "Zero session downtime during critical delivery." }
                ].map((m, i) => (
                  <div key={i} className="space-y-2">
                     <div className="text-[56px] font-black text-brand-gold tracking-tighter leading-none">{m.val}</div>
                     <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">{m.label}</div>
                     <p className="text-[12px] text-white/20 font-medium italic">{m.desc}</p>
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
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Visual (Wide-Angle Institutional) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/institutional_collaboration_cta_v3_1778383337273.png" 
          alt="Institutional Leadership Strategy" 
          fill 
          className="object-cover image-cinematic brightness-[0.25] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-[#05070B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.08),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-16 backdrop-blur-md">
             <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_15px_#F5B942]" />
             <span className="text-[11px] font-black uppercase tracking-[0.6em] text-brand-gold">Infrastructure Deployment v4.0</span>
          </div>

          <h2 className="text-[64px] md:text-[110px] font-black mb-16 leading-[0.85] tracking-[-0.08em]">
            Built for the future of <br />
            institutional <span className="text-gold-highlight italic">excellence.</span>
          </h2>

          <p className="text-[22px] md:text-[28px] text-white/40 leading-relaxed max-w-3xl mx-auto mb-24 font-light tracking-tight">
            Deploy one unified operational system for your programmes, people, and organizational intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <button className="btn-cinematic-gold h-[64px] px-14 text-[15px]">
               Initialize Infrastructure
            </button>
            <button className="flex items-center gap-4 text-[14px] font-black text-white/40 hover:text-white transition-colors group uppercase tracking-[0.4em]">
               Talk to Architects <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
