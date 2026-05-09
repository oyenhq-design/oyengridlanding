"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, ShieldCheck, Activity, Cpu, ArrowRight } from "lucide-react";

export function FinalCTAReplica() {
  return (
    <section className="relative py-64 md:py-96 bg-[#05070B] overflow-hidden">
      
      {/* CINEMATIC BLOOM */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,66,0.06),transparent_70%)]" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-6 mb-16">
             <div className="h-px w-12 bg-[#F5B942]/30" />
             <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#F5B942]">The Platform for What's Next</span>
             <div className="h-px w-12 bg-[#F5B942]/30" />
          </div>

          <h2 className="text-white mb-16 text-[56px] md:text-[96px] leading-[0.92] tracking-[-0.07em] font-black">
            Built for the future <br />
            of <span className="text-gold-italic">global delivery.</span>
          </h2>
          
          <p className="text-[22px] text-[#A0AEC0] mb-20 max-w-2xl mx-auto leading-relaxed font-light">
            One platform. Every capability. Infinite impact. Deploy institutional-grade operational systems with governance, visibility, and scalable programme intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-14">
            <button className="btn-replica-gold w-full sm:w-auto px-16">
              Start Building
            </button>
            <button className="flex items-center gap-4 text-[15px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-[0.3em] group">
              Talk to Sales <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FooterReplica() {
  const columns = [
    {
      title: "Platform",
      links: ["Infrastructure", "Governance", "Intelligence", "Operations", "Security"]
    },
    {
      title: "Solutions",
      links: ["Bootcamps", "Training Orgs", "Corporate", "NGOs & Academies"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Architecture", "Compliance", "Help Center", "API"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Newsroom", "Contact"]
    }
  ];

  return (
    <footer className="bg-[#05070B] border-t border-white/[0.04] pt-32 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-20 mb-32">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10 group">
              <div className="w-9 h-9 bg-[#F5B942] rounded-lg flex items-center justify-center font-black text-black text-lg transition-transform group-hover:rotate-12 shadow-[0_8px_20px_rgba(245,185,66,0.3)]">O</div>
              <span className="font-bold text-white tracking-tight text-[20px]">OYEN GRID</span>
            </div>
            <p className="text-[#A0AEC0] text-[15px] leading-relaxed max-w-[300px] font-light mb-12">
              The professional operating system for global programme delivery and institutional coordination.
            </p>
            <div className="flex items-center gap-6">
               <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20 hover:text-[#F5B942] hover:border-[#F5B942]/20 transition-all cursor-pointer">
                  <Globe className="w-5 h-5" />
               </div>
               <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20 hover:text-[#F5B942] hover:border-[#F5B942]/20 transition-all cursor-pointer">
                  <ShieldCheck className="w-5 h-5" />
               </div>
            </div>
          </div>

          {/* LINKS COLUMNS */}
          {columns.map((col, i) => (
            <div key={i}>
              <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30 mb-10">{col.title}</h5>
              <ul className="space-y-5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="text-[14px] text-[#A0AEC0] hover:text-[#F5B942] transition-colors font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEWSLETTER COLUMN */}
          <div className="lg:col-span-2 hidden xl:block">
             <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30 mb-10">Institutional Updates</h5>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter email protocol..." 
                  className="w-full h-14 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-[14px] text-white placeholder:text-white/20 outline-none focus:border-[#F5B942]/30 transition-all"
                />
                <button className="absolute right-2 top-2 h-10 px-6 bg-[#F5B942] rounded-lg text-black text-[12px] font-bold hover:scale-[1.02] transition-all">
                  Initialize
                </button>
             </div>
             <p className="mt-6 text-[12px] text-[#A0AEC0]/40 font-light leading-relaxed">
                By subscribing, you agree to our privacy protocols and institutional terms of governance.
             </p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-12 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-[11px] text-white/10 font-black uppercase tracking-widest">
              © 2026 OYEN GRID // Institutional Systems Division
           </div>
           
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">System Nominal</span>
              </div>
              <div className="flex items-center gap-3">
                 <Cpu className="w-3.5 h-3.5 text-white/10" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">L-04 Protocol Active</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
