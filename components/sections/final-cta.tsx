"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function FinalCTA() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: "How quickly can we get started with OYEN GRID?",
      a: "Most organizations are fully operational within a few days depending on programme complexity."
    },
    {
      q: "Can OYEN GRID manage multiple cohorts simultaneously?",
      a: "Yes. Administrators can oversee multiple cohorts, schedules, instructors, and learner groups from one dashboard."
    },
    {
      q: "Does attendance tracking happen automatically?",
      a: "Yes. Attendance is logged automatically during live sessions and recorded in learner profiles."
    },
    {
      q: "Can we issue certificates through the platform?",
      a: "Yes. Certificates can be generated and distributed automatically upon programme completion."
    },
    {
      q: "Does OYEN GRID support virtual classrooms?",
      a: "Yes. Live training sessions can be hosted directly within the platform with attendance and engagement tracking."
    },
    {
      q: "Can instructors manage their own sessions?",
      a: "Yes. Instructors have dedicated portal access to run live sessions, grade assessments, and track attendance for their groups."
    },
    {
      q: "Are learner analytics available?",
      a: "Yes. Track attendance, assessments, progress, completion rates, and engagement metrics in real time."
    },
    {
      q: "Can OYEN GRID integrate with other tools?",
      a: "Yes. The platform integrates with major identity systems, CRM tools, and notification systems via our secure API."
    },
    {
      q: "How secure is our data?",
      a: "OYEN GRID uses enterprise-grade encryption, role-based access control, and is fully compliant with modern data security standards."
    },
    {
      q: "What kind of support is available?",
      a: "We offer 24/7 dedicated email support, dedicated customer success managers for enterprise plans, and comprehensive documentation."
    }
  ];

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 md:py-10 border-t border-b border-white/5 overflow-hidden bg-[#05070B]">
      {/* Background image & overlay (increased to 35% opacity for better visibility) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.35]" 
        style={{ backgroundImage: "url('/faq-bg.png')" }} 
      />
      {/* Dark overlay above the image (reduced to 70% to let details show through) */}
      <div className="absolute inset-0 bg-[#05070B]/70 z-10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] z-20 pointer-events-none" />

      {/* Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(232,184,74,0.05),transparent_70%)] pointer-events-none blur-3xl z-20" />

      <div className="max-w-[1150px] mx-auto px-6 relative z-30 flex flex-col gap-5">
        
        {/* Badge & Typography Header - Spacing compressed */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-1.5">
            <div className="w-1 h-1 rounded-full bg-[#E8B84A]" />
            <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight mb-1">
            Everything You <span className="text-[#E8B84A]">Need To Know</span>
          </h2>
          <p className="text-[12px] text-[#A1A1A1] max-w-[600px] mx-auto font-light leading-relaxed">
            Find answers to common questions about managing bootcamps, cohorts, attendance, assessments, live sessions, certifications, and programme delivery using OYEN GRID.
          </p>
        </div>

        {/* Two-Column Grid of FAQ Accordion items */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4 items-start mt-2">
          
          {/* Left Column (First 5 items) */}
          <div className="space-y-2">
            {faqItems.slice(0, 5).map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-[12px] border border-white/5 bg-black/40 backdrop-blur-md hover:border-[#E8B84A]/10 transition-all duration-300 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-4.5 py-2.5 md:py-3 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#E8B84A] transition-colors">
                      {item.q}
                    </span>
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#E8B84A] bg-white/[0.01] group-hover:border-[#E8B84A]/20 transition-colors relative flex-shrink-0">
                      <span className={`absolute w-2 h-0.5 bg-[#E8B84A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      <span className={`absolute h-2 w-0.5 bg-[#E8B84A] transition-transform duration-300 ${isOpen ? "rotate-90 scale-y-0" : ""}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-4.5 pb-2.5 pt-0 text-[11px] text-neutral-400 leading-relaxed font-light border-t border-white/[0.01] bg-white/[0.002]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column (Remaining 5 items) */}
          <div className="space-y-2">
            {faqItems.slice(5).map((item, idx) => {
              const actualIdx = idx + 5;
              const isOpen = openFaqIndex === actualIdx;
              return (
                <div 
                  key={actualIdx}
                  className="rounded-[12px] border border-white/5 bg-black/40 backdrop-blur-md hover:border-[#E8B84A]/10 transition-all duration-300 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : actualIdx)}
                    className="w-full px-4.5 py-2.5 md:py-3 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-white group-hover:text-[#E8B84A] transition-colors">
                      {item.q}
                    </span>
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[#E8B84A] bg-white/[0.01] group-hover:border-[#E8B84A]/20 transition-colors relative flex-shrink-0">
                      <span className={`absolute w-2 h-0.5 bg-[#E8B84A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      <span className={`absolute h-2 w-0.5 bg-[#E8B84A] transition-transform duration-300 ${isOpen ? "rotate-90 scale-y-0" : ""}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-4.5 pb-2.5 pt-0 text-[11px] text-neutral-400 leading-relaxed font-light border-t border-white/[0.01] bg-white/[0.002]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom FAQ CTA Compact Strip (Exactly 40-48px spacing using mt-10) */}
        <div className="p-5 md:p-6 rounded-[16px] bg-black/50 border border-white/5 backdrop-blur-xl relative overflow-hidden max-w-xl mx-auto text-center shadow-lg flex flex-col justify-center mt-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.03),transparent_70%)] pointer-events-none z-0" />
          <div className="relative z-10 space-y-2.5">
            <h3 className="text-base md:text-lg font-bold text-white tracking-tight">Still have questions?</h3>
            <p className="text-[11px] text-neutral-400 max-w-md mx-auto leading-relaxed">
              Speak with our team and see how OYEN GRID can support your training programmes.
            </p>
            <div className="flex items-center justify-center gap-2.5">
              <Link
                href="#demo"
                className="inline-flex h-[34px] px-4 rounded-lg text-[10px] font-bold bg-[#E8B84A] text-black hover:shadow-[0_0_15px_rgba(232,184,74,0.2)] hover:scale-[1.01] transition-all items-center justify-center cursor-pointer"
              >
                Book a Demo
              </Link>
              <Link
                href="#get-started"
                className="inline-flex h-[34px] px-4 rounded-lg text-[10px] font-bold bg-white/5 border border-white/10 hover:border-[#E8B84A]/30 hover:bg-[#E8B84A]/10 text-white hover:text-[#E8B84A] transition-all items-center justify-center cursor-pointer"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
