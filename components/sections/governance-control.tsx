"use client";

import { motion } from "framer-motion";
import { Users, Key, FileSearch, ArrowRight } from "lucide-react";

export function GovernanceControl() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      
      {/* Background Accent */}
      {/* Background Accent */}
      <div className="glow-ambient w-[600px] h-[600px] top-[20%] left-[10%]" />

      <div className="container-custom max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="h-px w-8 bg-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">OPERATIONAL GOVERNANCE</span>
            </div>
            <h2 className="mb-10 text-white">
              Granular control <br />
              <span className="text-gold-gradient italic">at global scale.</span>
            </h2>
            <p className="mb-12 opacity-60">
              Manage distributed teams and programmes through a centralized governance engine with deep structural permissions and audit trails.
            </p>
            
            <div className="flex flex-col gap-8">
               {[
                 { title: "Role-Based Access (RBAC)", desc: "Define precise permissions for coordinators, mentors, and administrators.", icon: Key },
                 { title: "Programme Audit Logs", desc: "Every structural change and data access is logged with immutable precision.", icon: FileSearch },
                 { title: "Cohort Segregation", desc: "Isolate participant data and session materials between different business units.", icon: Users }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group cursor-default">
                    <item.icon className="w-6 h-6 text-accent/40 group-hover:text-accent transition-colors shrink-0" />
                    <div>
                       <h4 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">{item.title}</h4>
                       <p className="text-white/40 text-[14px] leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right: Governance UI Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
             <div className="relative glass-card p-12 bg-[#050816]/40 border-none rounded-[48px] shadow-[0_60px_100px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between mb-12">
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shadow-[0_0_20px_rgba(212,166,42,0.1)]">
                         <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-xl font-bold text-white tracking-tight">Permissions Matrix</div>
                   </div>
                   <div className="flex gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(212,166,42,0.4)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                   </div>
                </div>

                <div className="space-y-4">
                   {[
                     { role: "Global Admin", status: "All Permissions", active: true },
                     { role: "Cohort Lead", status: "Restricted View", active: true },
                     { role: "Session Facilitator", status: "Delivery Only", active: false }
                   ].map((row, i) => (
                     <div key={i} className="flex items-center justify-between p-6 rounded-[24px] bg-white/[0.02] border-none shadow-sm hover:bg-white/[0.04] transition-all group/row">
                        <div className="flex items-center gap-5">
                           <div className={`w-2 h-2 rounded-full ${row.active ? "bg-green-500 shadow-[0_0_10px_#22c55e]" : "bg-white/10"}`} />
                           <span className="text-white font-bold tracking-tight text-[15px]">{row.role}</span>
                        </div>
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] group-hover/row:text-accent transition-colors">{row.status}</span>
                     </div>
                   ))}
                </div>
                
                <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-center">
                   <button className="flex items-center gap-3 text-white/40 hover:text-accent text-[11px] font-black uppercase tracking-[0.4em] transition-all group/btn">
                      View Audit Engine <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                   </button>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
