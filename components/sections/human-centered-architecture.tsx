"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Database, Layers, Zap, Cpu, BarChart3, MessageSquare, ArrowRight, Shield, Activity, Sparkles } from "lucide-react";

export function WorkflowHorizontal() {
  const steps = [
    { title: "Organisation Setup", icon: Database },
    { title: "Programme Structuring", icon: Layers },
    { title: "Participant Assignment", icon: Zap },
    { title: "Session Delivery", icon: Cpu },
    { title: "Attendance & Progress", icon: Activity },
    { title: "AI Notes & Summaries", icon: Sparkles },
    { title: "Operational Reporting", icon: BarChart3 }
  ];

  return (
    <section className="section-gap bg-brand-surface border-y border-white/5 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Operational Flow</span>
          <h2 className="mt-4">The lifecycle of <span className="text-gold-highlight">structured delivery.</span></h2>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute top-[40px] left-0 w-full h-[2px] bg-white/[0.05] hidden lg:block overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"
             />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#05070B] border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-gold/50 transition-all duration-500 shadow-2xl relative">
                   <div className="absolute inset-0 bg-brand-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   <step.icon className="w-7 h-7 text-white/20 group-hover:text-brand-gold transition-colors" />
                   <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center text-[10px] font-black">0{i+1}</div>
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoreSystems() {
  return (
    <div className="bg-[#05070B]">
      {/* SECTION A: OPERATIONS INFRASTRUCTURE */}
      <section className="section-gap border-b border-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* LEFT: Operational Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
            >
               <Image 
                 src="/hero_human_ops_strategy_room_1778345713521.png" 
                 alt="Operational Infrastructure" 
                 fill 
                 className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-10 left-10">
                  <div className="text-[12px] font-black text-brand-gold tracking-[0.4em] mb-2 uppercase">Core Infrastructure</div>
                  <h3 className="text-[32px] font-black text-white leading-tight">Operational Control.</h3>
               </div>
            </motion.div>

            {/* RIGHT: Content */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Operations Infrastructure</span>
              <h2 className="mt-4 mb-8">Maintain absolute control over <span className="text-gold-highlight">programme delivery.</span></h2>
              <p className="text-editorial mb-10">Scale your operations with a rigid structural layer that connects programme management, participant tracking, and scheduling into a unified command center.</p>
              
              <div className="space-y-4">
                 {[
                   "Multi-programme coordination",
                   "Advanced bootcamp management",
                   "Real-time attendance protocols",
                   "Structured trainer coordination",
                   "Institutional session scheduling"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 group-hover:bg-brand-gold transition-colors" />
                      <span className="text-[15px] font-medium text-white/50 group-hover:text-white transition-colors">{item}</span>
                   </div>
                 ))}
              </div>

              <button className="mt-12 btn-cinematic-gold h-[48px] px-8 text-[12px]">
                 Initialize Control
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: INTELLIGENCE + COMMUNICATION */}
      <section className="section-gap">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* CONTENT (Now on Left for alternation) */}
            <div className="lg:order-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Institutional Intelligence</span>
              <h2 className="mt-4 mb-8">Human connection powered by <span className="text-gold-highlight">operational intelligence.</span></h2>
              <p className="text-editorial mb-10">Connect participants, trainers, and coordinators through an intelligent communication layer that generates autonomous summaries and actionable insights.</p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                 <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all group">
                    <Sparkles className="w-6 h-6 text-brand-gold/30 group-hover:text-brand-gold mb-4 transition-colors" />
                    <h4 className="text-[15px] font-bold text-white mb-2">AI Summaries</h4>
                    <p className="text-[12px] text-white/40 leading-relaxed">Autonomous session intelligence for every coordinator.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all group">
                    <MessageSquare className="w-6 h-6 text-brand-gold/30 group-hover:text-brand-gold mb-4 transition-colors" />
                    <h4 className="text-[15px] font-bold text-white mb-2">Sync Layer</h4>
                    <p className="text-[12px] text-white/40 leading-relaxed">Persistent communication for operational continuity.</p>
                 </div>
              </div>

              <button className="btn-cinematic-gold h-[48px] px-8 text-[12px]">
                 Explore Intelligence
              </button>
            </div>

            {/* VISUAL (Now on Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:order-1 relative h-[600px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
            >
               <Image 
                 src="/human_collaboration_operational_intelligence_1778345794992.png" 
                 alt="Operational Intelligence" 
                 fill 
                 className="object-cover image-cinematic transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-l from-[#05070B] via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-10 right-10 text-right">
                  <div className="text-[12px] font-black text-brand-gold tracking-[0.4em] mb-2 uppercase">Operational Sync</div>
                  <h3 className="text-[32px] font-black text-white leading-tight">Human Connection.</h3>
               </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
