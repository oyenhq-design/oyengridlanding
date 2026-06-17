"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function FinalCTA() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: "What is OYEN GRID?",
      a: "OYEN GRID is a premium platform designed to manage cohorts, live sessions, instructors, learners, and assessments with automated tracking."
    },
    {
      q: "Who is OYEN GRID built for?",
      a: "It is built for enterprise organizations, training providers, bootcamps, and universities running structured learning programmes."
    },
    {
      q: "Can I use OYEN GRID for multiple programmes?",
      a: "Yes. Administrators can oversee multiple cohorts, schedules, instructors, and learner groups from one dashboard."
    },
    {
      q: "Does OYEN GRID support live sessions?",
      a: "Yes. Live training sessions can be hosted directly within the platform with attendance and engagement tracking."
    },
    {
      q: "Can I track attendance automatically?",
      a: "Yes. Attendance is logged automatically during live sessions and recorded in learner profiles."
    },
    {
      q: "Is there a mobile app?",
      a: "Yes. Learners can access resources, join sessions, and view grades via our responsive mobile dashboard."
    },
    {
      q: "How does the AI assistant work?",
      a: "The AI assistant provides real-time support, automates grading feedbacks, and helps answer learner questions."
    },
    {
      q: "Can I issue certificates automatically?",
      a: "Yes. Certificates can be generated and distributed automatically upon programme completion."
    },
    {
      q: "How secure is my data?",
      a: "OYEN GRID uses enterprise-grade encryption, role-based access control, and is fully compliant with modern data security standards."
    },
    {
      q: "Can I integrate with other tools?",
      a: "Yes. The platform integrates with major identity systems, CRM tools, and notification systems via our secure API."
    }
  ];

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-4 md:py-5 border-t border-b border-white/5 overflow-hidden bg-[#05070B]">
      {/* Background image (25% opacity directly on the dark section background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.25]" 
        style={{ backgroundImage: "url('/faq-bg.png')" }} 
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] z-20 pointer-events-none" />

      {/* Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(232,184,74,0.05),transparent_70%)] pointer-events-none blur-3xl z-20" />

      <div className="max-w-[1150px] mx-auto px-6 relative z-30 flex flex-col gap-3">
        
        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (40%): Title and description */}
          <div className="lg:col-span-5 flex flex-col items-start pt-1">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#E8B84A]/30 bg-black/40 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]" />
              <span className="text-[10px] font-black tracking-widest text-[#E8B84A] uppercase">
                FAQ
              </span>
            </div>

            {/* Main Header */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-2.5">
              Frequently<br />
              Asked <span className="text-[#E8B84A] italic font-serif font-normal">Questions</span>
            </h2>

            {/* Description Text */}
            <div className="text-neutral-400 text-xs md:text-[13px] leading-relaxed max-w-[320px] font-light space-y-1 mb-3">
              <p>Everything you need to know about OYEN GRID.</p>
              <p>Can&apos;t find what you&apos;re looking for?</p>
              <p>Our team is always here to help.</p>
            </div>

            {/* Contact Support Button */}
            <Link
              href="#demo"
              className="inline-flex h-[36px] px-4.5 rounded-lg text-[10px] font-bold border border-[#E8B84A]/40 hover:border-[#E8B84A] bg-[#E8B84A]/5 hover:bg-[#E8B84A]/10 text-[#E8B84A] tracking-wider uppercase transition-all duration-300 items-center justify-center gap-1.5 group cursor-pointer"
            >
              Contact Support
              <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </Link>
          </div>

          {/* Right Column (60%): Single column FAQ accordion list */}
          <div className="lg:col-span-7 space-y-1.5">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-[10px] border border-white/5 bg-black/60 backdrop-blur-md hover:border-[#E8B84A]/15 transition-all duration-300 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-4 py-1.5 md:py-2 flex items-center justify-start gap-3.5 text-left cursor-pointer group"
                  >
                    {/* Gold Circular Plus/Minus Icon on the left */}
                    <div className="w-5 h-5 rounded-full border border-[#E8B84A]/30 flex items-center justify-center text-[#E8B84A] bg-[#E8B84A]/5 group-hover:border-[#E8B84A]/60 transition-colors relative flex-shrink-0">
                      <span className={`absolute w-2 h-0.5 bg-[#E8B84A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      <span className={`absolute h-2 w-0.5 bg-[#E8B84A] transition-transform duration-300 ${isOpen ? "rotate-90 scale-y-0" : ""}`} />
                    </div>
                    
                    <span className="text-[13px] font-bold text-white group-hover:text-[#E8B84A] transition-colors">
                      {item.q}
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="pl-12 pr-5 pb-2 pt-0 text-[11.5px] text-neutral-400 leading-relaxed font-light border-t border-white/[0.01]">
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

        {/* Bottom FAQ CTA Compact Strip */}
        <div className="mt-3.5 flex items-center justify-between gap-6 px-5 py-2.5 rounded-[14px] bg-black/60 border border-white/5 backdrop-blur-xl max-w-4xl mx-auto shadow-lg w-full">
          <div className="flex items-center gap-4">
            {/* Headphone Icon Box */}
            <div className="w-9 h-9 rounded-lg border border-[#E8B84A]/25 bg-[#E8B84A]/5 flex items-center justify-center text-[#E8B84A] flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white tracking-tight">Still have questions?</h4>
              <p className="text-[10px] text-neutral-400">We&apos;re here to help.</p>
            </div>
          </div>
          <Link
            href="#demo"
            className="inline-flex h-[32px] px-3.5 rounded-lg text-[10px] font-bold border border-[#E8B84A]/30 hover:border-[#E8B84A] bg-black hover:bg-[#E8B84A]/10 text-white hover:text-[#E8B84A] transition-all duration-300 items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            Contact Us
            <span className="text-xs">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
