"use client";

import { motion } from "framer-motion";

export function DashboardMockup() {
  return (
    <div className="relative group">
      {/* Glow effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative bg-[#0E1424] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header Strip */}
        <div className="h-10 bg-white/[0.03] border-b border-white/5 flex items-center justify-between px-4">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-4">
             <div className="h-1 w-12 bg-white/10 rounded-full" />
             <div className="h-1 w-8 bg-brand-gold/40 rounded-full" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 grid grid-cols-12 gap-4">
          {/* Main Orchestration Window */}
          <div className="col-span-8 space-y-4">
            <div className="h-48 bg-white/[0.02] border border-white/5 rounded-xl p-4 relative overflow-hidden">
               <div className="flex justify-between items-center mb-6">
                  <div className="text-[10px] font-black tracking-widest text-white/20 uppercase">Programme Orchestration // Node.01</div>
                  <div className="text-[10px] text-brand-gold font-bold">LIVE</div>
               </div>
               
               {/* Visualizing "nodes" or "pipelines" */}
               <div className="flex gap-2 items-end h-20">
                  {[40, 70, 45, 90, 65, 80, 55, 100, 85, 60, 75, 50].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className="flex-1 bg-brand-gold/20 border-t-2 border-brand-gold/60 rounded-t-sm"
                    />
                  ))}
               </div>
               
               {/* Grid texture overlay */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>

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
               <div className="h-32 bg-white/[0.01] border border-white/5 rounded-xl p-4">
                  <div className="text-[9px] font-bold text-white/20 uppercase mb-4 tracking-tighter">AI Session Summary</div>
                  <div className="space-y-2">
                     <div className="h-1.5 w-full bg-brand-gold/10 rounded-full" />
                     <div className="h-1.5 w-full bg-white/5 rounded-full" />
                     <div className="h-1.5 w-4/5 bg-white/5 rounded-full" />
                     <div className="h-1.5 w-full bg-white/5 rounded-full" />
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Metrics */}
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
        </div>
      </div>

      {/* Decorative Reflections */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none -skew-x-12" />
    </div>
  );
}
