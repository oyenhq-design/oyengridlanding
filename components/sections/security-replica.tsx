"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Lock, Eye, CheckCircle2, Quote } from "lucide-react";

export function SecurityReplica() {
  const securityItems = [
    { title: "Role-based access control", icon: Lock },
    { title: "End-to-end encryption", icon: ShieldCheck },
    { title: "Audit logs & activity tracking", icon: Eye },
    { title: "Compliance-ready infrastructure", icon: CheckCircle2 }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#05070B] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-4 mb-10">
               <div className="h-px w-8 bg-[#F5B942]/40" />
               <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#F5B942]">Enterprise Grade</span>
            </div>
            
            <h2 className="text-white mb-10 text-[42px] md:text-[56px] leading-[1.02] tracking-[-0.06em]">
              Institutional <br />
              <span className="text-gold-italic">protection</span> by design.
            </h2>
            
            <p className="text-[#A0AEC0] text-[19px] leading-[1.7] font-light mb-16 max-w-xl">
              Your data and operations are protected with enterprise-grade security, compliance and governance frameworks.
            </p>

            <div className="space-y-6 mb-16">
               {securityItems.map((item, i) => (
                 <div key={i} className="flex items-center gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-[#F5B942]/5 border border-[#F5B942]/20 flex items-center justify-center text-[#F5B942] group-hover:scale-110 transition-all">
                       <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[17px] font-bold text-white/70 tracking-tight group-hover:text-[#F5B942] transition-colors">{item.title}</span>
                 </div>
               ))}
            </div>

            <button className="flex items-center gap-4 text-[13px] font-black uppercase tracking-[0.3em] text-[#F5B942] hover:text-white transition-all group">
               Explore Security Overview <div className="w-10 h-px bg-[#F5B942]/40 group-hover:w-16 transition-all" />
            </button>
          </motion.div>

          {/* RIGHT: MASSIVE COMMAND CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="lg:col-span-7"
          >
             <div className="relative rounded-[56px] overflow-hidden border border-white/[0.08] group shadow-[0_80px_160px_rgba(0,0,0,0.8)] aspect-[16/11]">
                <Image 
                  src="/security-ops-center-institutional.png" 
                  alt="Enterprise Command Center" 
                  fill
                  className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#05070B]/90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,185,66,0.05),transparent_70%)]" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialReplica() {
  const metrics = [
    { label: "Increase in operational efficiency", val: "+340%" },
    { label: "Reduction in manual work", val: "-82%" },
    { label: "Time saved in reporting", val: "-64%" }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#05070B] overflow-hidden">
      
      {/* ATMOSPHERIC BLOOM */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#F5B942]/3 blur-[140px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* LEFT: QUOTE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="lg:col-span-7"
          >
             <div className="glass-card p-16 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#F5B942]/40" />
                <Quote className="w-16 h-16 text-[#F5B942]/20 mb-12 group-hover:text-[#F5B942]/40 transition-all duration-1000" />
                
                <blockquote className="text-[32px] md:text-[48px] font-bold text-white leading-[1.1] tracking-[-0.06em] mb-16 text-balance">
                   "OYEN GRID hasn't just improved our operations; it has redefined how we think about <span className="text-gold-italic">global scale.</span>"
                </blockquote>

                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <Image src="/exec-avatar-1.png" alt="Dr. Amina Yusuf" width={64} height={64} className="object-cover" />
                   </div>
                   <div>
                      <div className="text-[20px] font-bold text-white">Dr. Amina Yusuf</div>
                      <div className="text-[12px] text-[#A0AEC0] font-black uppercase tracking-[0.3em] mt-2">Director of Programmes, AltSchool Africa</div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT: METRICS PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
             <div className="p-16 rounded-[40px] bg-[#0E1424]/40 border border-white/[0.04] backdrop-blur-3xl space-y-20">
                {metrics.map((m, i) => (
                  <div key={i} className="flex flex-col group">
                     <span className="text-[64px] md:text-[84px] font-black text-[#F5B942] tracking-tighter leading-none mb-4 group-hover:scale-105 transition-transform duration-700">{m.val}</span>
                     <span className="text-[13px] font-black uppercase tracking-[0.25em] text-[#A0AEC0]/40">{m.label}</span>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
