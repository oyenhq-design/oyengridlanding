"use client";

import { motion } from "framer-motion";
import { 
  LayoutGrid, Users, Play, CalendarCheck, 
  ClipboardCheck, BarChart3, ArrowUpRight 
} from "lucide-react";

export function CapabilitiesGrid() {
  const capabilities = [
    { title: "Programme Management", desc: "Design and orchestrate multi-regional delivery structures with ease.", icon: LayoutGrid },
    { title: "Cohort Management", desc: "Seamlessly handle participant life-cycles and group dynamics at scale.", icon: Users },
    { title: "Session Delivery", description: "Standardize curriculum deployment across distributed teams.", icon: Play },
    { title: "Attendance & Tracking", description: "Real-time verification of participant engagement and presence.", icon: CalendarCheck },
    { title: "Assessments", desc: "Automated grading and feedback loops for institutional compliance.", icon: ClipboardCheck },
    { title: "Analytics & Reports", desc: "High-fidelity insights into operational health and program impact.", icon: BarChart3 }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#050505] overflow-hidden">
      
      {/* ATMOSPHERIC RADIALS */}
      <div className="absolute inset-0 cinematic-glow opacity-30" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <div className="flex items-center justify-center gap-5 mb-10">
             <div className="h-px w-12 bg-accent-gold/30" />
             <span className="label-enterprise">Operational Capabilities</span>
             <div className="h-px w-12 bg-accent-gold/30" />
          </div>

          <h2 className="text-white mb-10">
            Orchestrate every layer of your <br />
            <span className="text-accent-gold italic font-medium">programme operations.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-white/40 text-[19px] leading-relaxed font-light">
            A unified suite of enterprise protocols designed to eliminate operational friction and ensure absolute delivery control.
          </p>
        </div>

        {/* 6-CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="feature-card flex flex-col group cursor-pointer"
             >
                <div className="flex items-center justify-between mb-12">
                   <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent-gold/40 group-hover:text-accent-gold group-hover:bg-accent-gold/10 transition-all duration-500">
                      <cap.icon className="w-6 h-6" />
                   </div>
                   <ArrowUpRight className="w-5 h-5 text-white/5 group-hover:text-accent-gold/40 transition-all" />
                </div>
                
                <h4 className="text-[22px] font-bold text-white mb-5 tracking-tight">{cap.title}</h4>
                <p className="text-[14.5px] text-white/30 leading-relaxed font-light mb-8">
                   {cap.desc || (cap as any).description}
                </p>
                
                <div className="mt-auto pt-8 border-t border-white/5">
                   <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/10 group-hover:text-accent-gold/40 transition-colors">
                      Protocol P-{i+1}0
                   </span>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
