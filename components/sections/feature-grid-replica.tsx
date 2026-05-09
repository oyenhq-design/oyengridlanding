"use client";

import { motion } from "framer-motion";
import { 
  LayoutGrid, Users, Play, CalendarCheck, 
  ClipboardCheck, BarChart3, ArrowUpRight 
} from "lucide-react";

export function FeatureGridReplica() {
  const capabilities = [
    { title: "Programme Management", desc: "Design and orchestrate multi-regional delivery structures with ease.", icon: LayoutGrid },
    { title: "Cohort Management", desc: "Seamlessly handle participant life-cycles and group dynamics at scale.", icon: Users },
    { title: "Session Delivery", desc: "Standardize curriculum deployment across distributed teams.", icon: Play },
    { title: "Attendance & Tracking", desc: "Real-time verification of participant engagement and presence.", icon: CalendarCheck },
    { title: "Assessments", desc: "Automated grading and feedback loops for institutional compliance.", icon: ClipboardCheck },
    { title: "Analytics & Reports", desc: "High-fidelity insights into operational health and program impact.", icon: BarChart3 }
  ];

  return (
    <section className="relative py-48 md:py-80 bg-[#05070B] overflow-hidden">
      
      {/* ATMOSPHERIC BLOOMS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#F5B942]/3 blur-[140px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <div className="flex items-center justify-center gap-6 mb-12">
             <div className="h-px w-12 bg-[#F5B942]/30" />
             <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#F5B942]">Complete Control. End to End.</span>
             <div className="h-px w-12 bg-[#F5B942]/30" />
          </div>

          <h2 className="text-white mb-12 text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.06em]">
            Orchestrate <span className="text-gold-italic">every</span> layer of your <br />
            programme operations.
          </h2>
          
          <p className="max-w-2xl mx-auto text-[#A0AEC0] text-[20px] leading-[1.7] font-light">
            Institutional intelligence layer for operational governance and programme execution. Deploy scalable logic across your entire delivery infrastructure.
          </p>
        </div>

        {/* 6-CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: i * 0.1 }}
               className="group relative p-[1px] rounded-[32px] overflow-hidden transition-all duration-700 hover:scale-[1.02]"
             >
                {/* Gold Border Highlight on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5B942]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative h-full bg-[#0E1424]/60 backdrop-blur-3xl rounded-[31px] p-12 flex flex-col border border-white/[0.04] group-hover:border-[#F5B942]/20 transition-all">
                   <div className="flex items-center justify-between mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-[#F5B942]/5 border border-[#F5B942]/20 flex items-center justify-center text-[#F5B942] group-hover:scale-110 transition-all duration-700">
                         <cap.icon className="w-7 h-7" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/5 group-hover:text-[#F5B942]/40 transition-all duration-500" />
                   </div>
                   
                   <h4 className="text-[24px] font-bold text-white mb-5 tracking-tight group-hover:text-[#F5B942] transition-colors">{cap.title}</h4>
                   <p className="text-[15.5px] text-[#A0AEC0]/60 leading-[1.6] font-light mb-12">
                      {cap.desc}
                   </p>
                   
                   <div className="mt-auto pt-10 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A0AEC0]">Protocol P-{i+1}0</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5B942] shadow-[0_0_8px_#F5B942]" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
