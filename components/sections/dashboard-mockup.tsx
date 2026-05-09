"use client";

import { motion } from "framer-motion";

export function DashboardMockup({ small = false }: { small?: boolean }) {
  return (
    <div className={`relative group ${small ? 'scale-90 origin-top-left' : ''}`}>
      {/* Glow effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative bg-[#0E1424]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header Strip */}
        <div className="h-8 bg-white/[0.03] border-b border-white/5 flex items-center justify-between px-4">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
          <div className="text-[8px] font-black tracking-widest text-white/20 uppercase">ORCHESTRATOR_V2</div>
        </div>

        {/* Dashboard Content */}
        <div className={`p-4 ${small ? 'space-y-3' : 'grid grid-cols-12 gap-4'}`}>
          {/* Main Orchestration Window */}
          <div className={`${small ? 'w-full' : 'col-span-8'} space-y-3`}>
            <div className={`${small ? 'h-32' : 'h-48'} bg-white/[0.02] border border-white/5 rounded-xl p-3 relative overflow-hidden`}>
               <div className="flex justify-between items-center mb-4">
                  <div className="text-[8px] font-black tracking-widest text-white/20 uppercase">Programme Flow</div>
                  <div className="text-[8px] text-brand-gold font-bold">LIVE</div>
               </div>
               
               {/* Visualizing "nodes" or "pipelines" */}
               <div className="flex gap-1.5 items-end h-12">
                  {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className="flex-1 bg-brand-gold/20 border-t-2 border-brand-gold/60 rounded-t-sm"
                    />
                  ))}
               </div>
            </div>

            {!small && (
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-32 bg-white/[0.01] border border-white/5 rounded-xl p-4">
                    <div className="text-[9px] font-bold text-white/20 uppercase mb-4 tracking-tighter">Participant Telemetry</div>
                    <div className="space-y-3">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-white/5 border border-white/10" />
                            <div className="flex-1 space-y-1">
                               <div className="h-1 w-full bg-white/5 rounded-full" />
                               <div className="h-1 w-2/3 bg-white/5 rounded-full" />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}
          </div>

          {/* Sidebar Metrics (Hide if small) */}
          {!small && (
            <div className="col-span-4 space-y-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="h-20 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                    <div className="w-full h-1 bg-white/5 rounded-full" />
                    <div className="flex justify-between items-end">
                       <div className="text-[14px] font-black text-white/80">0{i}</div>
                       <div className="w-8 h-8 rounded bg-brand-gold/5 flex items-center justify-center">
                          <div className="w-1 h-4 bg-brand-gold/40 rounded-full" />
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
