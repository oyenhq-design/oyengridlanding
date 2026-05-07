"use client";

import { motion } from "framer-motion";
import { Users, Key, FileSearch, ArrowRight } from "lucide-react";

export function GovernanceControl() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,179,1,0.02),transparent_70%)]" />

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
            <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight mb-10">
              Granular control <br />
              <span className="text-white/40 italic">at global scale.</span>
            </h2>
            <p className="text-[17px] text-white/50 font-light leading-relaxed mb-12 max-w-sm">
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
             <div className="relative glass-card p-12 bg-secondary/10 border-white/5 rounded-[32px] shadow-[0_50px_100px_rgba(0,0,0,0.7)]">
                <div className="flex items-center justify-between mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                         <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <div className="text-lg font-bold text-white tracking-tight">Permissions Matrix</div>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                   </div>
                </div>

                <div className="space-y-6">
                   {[
                     { role: "Global Admin", status: "All Permissions", active: true },
                     { role: "Cohort Lead", status: "Restricted View", active: true },
                     { role: "Session Facilitator", status: "Delivery Only", active: false }
                   ].map((row, i) => (
                     <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="flex items-center gap-4">
                           <div className={`w-2 h-2 rounded-full ${row.active ? "bg-green-500 shadow-[0_0_5px_#22c55e]" : "bg-white/20"}`} />
                           <span className="text-white font-bold tracking-tight">{row.role}</span>
                        </div>
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{row.status}</span>
                     </div>
                   ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center">
                   <button className="flex items-center gap-2 text-accent text-[11px] font-black uppercase tracking-[0.3em] hover:translate-x-2 transition-all">
                      View Audit Engine <ArrowRight className="w-3.5 h-3.5" />
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
