"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react";

export function FeatureSplit() {
  const bullets = [
    { title: "Real-time performance tracking", desc: "Monitor participant engagement and programme health instantly across all cohorts." },
    { title: "Automated workflow engine", desc: "Automate certificates, progressions, and feedback loops with zero manual intervention." },
    { title: "Granular data governance", desc: "Enterprise-grade permissions and audit logs for sensitive educational and corporate data." }
  ];

  return (
    <section className="py-40 bg-secondary/10 border-y border-white/5 relative overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left: Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#F5B301]" />
               <span className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase">SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-10 tracking-tighter">
              A unified system for <br />
              <span className="text-accent">high-performance delivery</span>
            </h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed mb-12 max-w-md">
              OYEN GRID transforms fragmented operations into a cohesive, high-fidelity system. Manage sessions, participants, and outcomes in one immersive environment.
            </p>
            <div className="space-y-10">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">{bullet.title}</h4>
                    <p className="text-[#71717A] font-light leading-relaxed text-sm">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: HUGE Angled Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotateY: -5, scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative group perspective-2000">
              {/* Massive Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 via-transparent to-accent/20 blur-sm rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative glass-card bg-black border-white/10 rounded-2xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.9)]">
                <img 
                  src="/wide-dashboard.png" 
                  alt="Huge System Dashboard" 
                  className="w-full h-auto opacity-95 group-hover:scale-[1.05] transition-transform duration-1000"
                />
                
                {/* Transparent Overlays & Activity Hints */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Activity Panel Hint */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute bottom-10 right-10 glass-card p-6 bg-secondary/90 border-accent/20 backdrop-blur-2xl w-64 shadow-2xl"
                >
                   <div className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-4">Real-time Activity</div>
                   <div className="space-y-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                           <div className="h-2 w-full bg-white/5 rounded-full" />
                        </div>
                      ))}
                   </div>
                </motion.div>

                {/* Human Silhouette Hint Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-40" />
              </div>
            </div>

            {/* Background Hand/Keyboard Hint Visual (Using blurred image) */}
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[300px] opacity-20 blur-[60px] pointer-events-none">
               <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt="Hand overlay hint" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
