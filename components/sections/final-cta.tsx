"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
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
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-24 border-t border-b border-white/5 overflow-hidden">
      {/* Background image & overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/faq-bg.png')" }} 
      />
      {/* Dark gradient overlay (85-90% left to right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020203]/95 via-[#020203]/90 to-[#020203]/85 mix-blend-multiply z-10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-20 pointer-events-none" />

      {/* Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(232,184,74,0.06),transparent_70%)] pointer-events-none blur-3xl z-20" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-30">
        
        {/* Badge & Typography Header */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]" />
            <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-none mb-4">
            Everything You <span className="text-[#E8B84A]">Need To Know</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#A1A1A1] max-w-[640px] font-light leading-relaxed">
            Find answers to common questions about managing bootcamps, cohorts, attendance, assessments, live sessions, certifications, and programme delivery using OYEN GRID.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                Questions?<br />
                <span className="bg-gradient-to-r from-white via-white/90 to-[#E8B84A] bg-clip-text text-transparent italic">
                  We&apos;ve Got Answers.
                </span>
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-[380px] font-medium">
                Whether you&apos;re running one cohort or hundreds of learners across multiple programmes, OYEN GRID helps simplify operations from enrollment to certification.
              </p>
            </div>
            
            {/* Support Card */}
            <div className="p-6 rounded-[18px] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-[#E8B84A]/30 hover:shadow-[0_0_20px_rgba(232,184,74,0.05)] transition-all duration-300 relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.02),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-sm font-bold text-white mb-1">Need help?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Our team is available to guide your implementation and answer questions.
              </p>
              <Link
                href="#demo"
                className="inline-flex h-[38px] px-5 rounded-lg text-[11px] font-bold bg-white/5 border border-white/10 hover:border-[#E8B84A]/40 hover:bg-[#E8B84A]/10 text-white hover:text-[#E8B84A] tracking-wider uppercase transition-all duration-300 items-center justify-center cursor-pointer"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Right Side Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-[18px] border border-white/5 bg-white/[0.01] hover:border-[#E8B84A]/20 transition-all duration-300 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[#E8B84A] transition-colors">
                      {item.q}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#E8B84A] bg-white/[0.02] group-hover:border-[#E8B84A]/30 transition-colors relative flex-shrink-0">
                      <span className={`absolute w-3 h-0.5 bg-[#E8B84A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      <span className={`absolute h-3 w-0.5 bg-[#E8B84A] transition-transform duration-300 ${isOpen ? "rotate-90 scale-y-0" : ""}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs text-neutral-400 leading-relaxed font-light border-t border-white/[0.02] bg-white/[0.005]">
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

        {/* Subtle Divider */}
        <div className="w-full h-px bg-white/5 my-16" />

        {/* Bottom FAQ CTA Compact Strip */}
        <div className="p-8 md:p-10 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden max-w-4xl mx-auto text-center shadow-2xl h-[180px] md:h-[200px] flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.06),transparent_70%)] pointer-events-none z-0" />
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Still have questions?</h3>
            <p className="text-xs text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Speak with our team and see how OYEN GRID can support your training programmes.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="#demo"
                className="inline-flex h-[42px] px-6 rounded-lg text-xs font-bold bg-[#E8B84A] text-black hover:shadow-[0_0_20px_rgba(232,184,74,0.3)] hover:scale-[1.01] transition-all items-center justify-center cursor-pointer"
              >
                Book a Demo
              </Link>
              <Link
                href="#get-started"
                className="inline-flex h-[42px] px-6 rounded-lg text-xs font-bold bg-white/5 border border-white/10 hover:border-[#E8B84A]/40 hover:bg-[#E8B84A]/10 text-white hover:text-[#E8B84A] transition-all items-center justify-center cursor-pointer"
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
