"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, Sparkles, MessageSquare, FileText, ShieldCheck, ArrowRight } from "lucide-react";

export function IntelligenceHumanConnection() {
  return (
    <section className="section-gap bg-[#05070B] relative overflow-hidden">
      {/* Immersive Depth */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-brand-gold/[0.04] to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-40 items-center">
          
          {/* LEFT: Warm Cinematic Collaboration Image (Scaled Up) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[850px] rounded-[64px] overflow-hidden border border-white/10 group shadow-[0_60px_140px_rgba(0,0,0,0.6)]"
          >
             <Image 
               src="/human_collaboration_v3_1778383317789.png" 
               alt="Human Collaboration & Support" 
               fill 
               className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#05070B] via-[#05070B]/40 to-transparent opacity-90" />
             
             {/* Communication Overlays (Scaled Up) */}
             <motion.div 
               animate={{ x: [0, 15, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-16 left-16 right-16 p-12 glass-panel border-white/10 backdrop-blur-2xl"
             >
                <div className="flex items-center gap-5 mb-8">
                   <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                      <Sparkles className="w-6 h-6 text-brand-gold" />
                   </div>
                   <div className="text-[13px] font-black text-brand-gold uppercase tracking-[0.5em]">Intelligence Layer Active</div>
                </div>
                <h4 className="text-[24px] font-black text-white mb-6 leading-tight italic">"The autonomous session summary has identified 4 critical action items for the regional coordinator."</h4>
                <div className="flex items-center gap-4 opacity-40">
                   <MessageSquare className="w-5 h-5 text-white" />
                   <span className="text-[12px] font-bold text-white tracking-[0.3em] uppercase">Facilitator Support Sync Complete</span>
                </div>
             </motion.div>
          </motion.div>

          {/* RIGHT: Content - Human First, AI Second (Scaled Up) */}
          <div className="pt-20">
            <span className="text-[11px] font-black uppercase tracking-[0.7em] text-brand-gold mb-10 block opacity-60">Cognitive Infrastructure</span>
            <h2 className="mb-16 tracking-[-0.07em]">Human intelligence, <br /><span className="text-gold-highlight italic">algorithmically enhanced.</span></h2>
            <p className="text-editorial mb-20 opacity-90 max-w-2xl">Empower your facilitators and coordinators with a cognitive layer that automates the mundane—summaries, tracking, and notes—so they can focus on what matters: <span className="text-white font-black italic">The Human Connection.</span></p>
            
            <div className="grid sm:grid-cols-2 gap-16">
               {[
                 { title: "AI Summaries", desc: "Autonomous session intelligence for every coordinator.", icon: Sparkles },
                 { title: "Engagement Flow", desc: "Persistent communication for operational continuity.", icon: MessageSquare },
                 { title: "Contextual Notes", desc: "Intelligence integrated into the delivery core.", icon: FileText },
                 { title: "Global Sync", desc: "Real-time coordination across every node.", icon: ShieldCheck }
               ].map((item, i) => (
                 <div key={i} className="space-y-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center group-hover:border-brand-gold/40 transition-all shadow-lg">
                       <item.icon className="w-6 h-6 text-white/20 group-hover:text-brand-gold transition-colors" />
                    </div>
                    <h4 className="text-[20px] font-black text-white group-hover:text-brand-gold transition-colors">{item.title}</h4>
                    <p className="text-[15px] leading-relaxed text-white/30 font-medium">{item.desc}</p>
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
        <div className="grid lg:grid-cols-12 gap-40">
          
          {/* LEFT: Premium Testimonial (Span 8) (Scaled Up) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
             <div className="relative pt-20">
                <Quote className="w-24 h-24 text-brand-gold/5 absolute top-0 -left-12" />
                <div className="relative z-10">
                   <blockquote className="text-[44px] md:text-[60px] font-black text-white leading-[1.05] mb-20 tracking-[-0.06em] italic">
                      "OYEN GRID is the first platform that understands programme delivery as mission-critical infrastructure. It has transformed our <span className="text-brand-gold underline decoration-white/10 underline-offset-8">coordination intelligence</span> globally."
                   </blockquote>
                   
                   <div className="flex items-center gap-12">
                      <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10 grayscale shadow-3xl">
                         <Image src="/exec-avatar-1.png" alt="Institutional Director" width={96} height={96} />
                      </div>
                      <div>
                         <div className="text-[32px] font-black text-white tracking-tighter">Dr. Amina Yusuf</div>
                         <div className="text-[13px] font-black uppercase tracking-[0.4em] text-brand-gold mt-2">Director, AltSchool Africa</div>
                      </div>
                      <div className="flex gap-2 ml-auto opacity-50">
                         {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />)}
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: Metrics & Trust (Span 4) (Scaled Up) */}
          <div className="lg:col-span-4 flex flex-col justify-center border-l border-white/5 pl-24">
             <div className="space-y-24">
                {[
                  { val: "+340%", label: "OPERATIONAL EFFICIENCY", desc: "Measured across 12,000+ session hours." },
                  { val: "-82%", label: "COORDINATION OVERHEAD", desc: "Reduction in manual administrative protocols." },
                  { val: "100%", label: "RELIABILITY PROTOCOL", desc: "Zero session downtime during critical delivery." }
                ].map((m, i) => (
                  <div key={i} className="space-y-4">
                     <div className="text-[72px] font-black text-brand-gold tracking-tighter leading-none">{m.val}</div>
                     <div className="text-[12px] font-black uppercase tracking-[0.5em] text-white/90">{m.label}</div>
                     <p className="text-[14px] text-white/20 font-medium italic max-w-[240px]">{m.desc}</p>
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Visual (Wide-Angle Institutional) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/institutional_collaboration_cta_v3_1778383337273.png" 
          alt="Institutional Leadership Strategy" 
          fill 
          className="object-cover image-cinematic brightness-[0.2] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/40 to-[#05070B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.1),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-20 backdrop-blur-md">
             <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_20px_#F5B942]" />
             <span className="text-[12px] font-black uppercase tracking-[0.7em] text-brand-gold">Infrastructure Deployment v4.0</span>
          </div>

          <h2 className="text-[72px] md:text-[140px] font-black mb-20 leading-[0.82] tracking-[-0.09em]">
            Built for the future of <br />
            institutional <span className="text-gold-highlight italic">excellence.</span>
          </h2>

          <p className="text-[26px] md:text-[36px] text-white/40 leading-relaxed max-w-4xl mx-auto mb-32 font-light tracking-tight">
            Deploy one unified operational system for your programmes, people, and organizational intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
            <button className="btn-cinematic-gold h-[76px] px-20 text-[16px]">
               Initialize Infrastructure
            </button>
            <button className="flex items-center gap-5 text-[16px] font-black text-white/40 hover:text-white transition-colors group uppercase tracking-[0.5em]">
               Talk to Architects <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
