"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function FinalCTA() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: "What is OYEN GRID?",
      a: "OYEN GRID is an intelligent workspace that enables modern organizations to centralize training, communication, workflows, reporting, and learning operations in one secure platform."
    },
    {
      q: "Who is OYEN GRID built for?",
      a: "It is built for enterprise organizations, training providers, corporate teams, and academic institutions that need to deliver and track structured training programs at scale."
    },
    {
      q: "Can we manage multiple departments?",
      a: "Yes. Administrators can configure custom permissions and views, allowing multiple departments, subsidiaries, or business units to manage their cohorts independently from a single tenant."
    },
    {
      q: "Does OYEN GRID support enterprise organizations?",
      a: "Absolutely. OYEN GRID provides enterprise-grade reliability, dedicated cloud hosting options, custom single sign-on (SSO), and scaling support to handle thousands of concurrent active learners."
    },
    {
      q: "Is our data secure?",
      a: "Yes, security is our priority. We use bank-grade data isolation, end-to-end encryption in transit and at rest, secure role-based access control, and automated daily backups."
    },
    {
      q: "Can we customize workflows?",
      a: "Yes. The platform allows you to construct tailored training paths, automate resource distribution, set custom enrollment triggers, and configure specific milestone tracking logic."
    },
    {
      q: "Can OYEN GRID integrate with our existing systems?",
      a: "Yes. We offer robust API endpoints and built-in integration support for identity systems, communication channels, CRM databases, and productivity suites."
    },
    {
      q: "How does AI help our teams?",
      a: "OYEN AI automates administrative tasks by generating instant session notes, cohort performance summaries, and predictive alerts for disengaged learners so your team can focus on outcomes."
    }
  ];

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 md:py-28 border-t border-b border-white/5 overflow-hidden bg-[#08111F]">
      {/* Background image (25% opacity directly on the dark section background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.25]" 
        style={{ backgroundImage: "url('/faq-bg.png')" }} 
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] z-20 pointer-events-none" />

      {/* Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,154,32,0.05),transparent_70%)] pointer-events-none blur-3xl z-20" />

      <div className="max-w-[1150px] mx-auto px-6 relative z-30 flex flex-col gap-3">
        
        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (40%): Title and description */}
          <div className="lg:col-span-5 flex flex-col items-start pt-1">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C99A20]/30 bg-black/40 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A20]" />
              <span className="text-[10px] font-black tracking-widest text-[#C99A20] uppercase">
                FAQ
              </span>
            </div>

            {/* Main Header */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-2.5">
              Frequently<br />
              Asked <span className="text-[#C99A20] italic font-serif font-normal">Questions</span>
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
              className="inline-flex h-[36px] px-4.5 rounded-lg text-[10px] font-bold border border-[#C99A20]/40 hover:border-[#C99A20] bg-[#C99A20]/5 hover:bg-[#C99A20]/10 text-[#C99A20] tracking-wider uppercase transition-all duration-300 items-center justify-center gap-1.5 group cursor-pointer"
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
                  className="rounded-[10px] border border-white/5 bg-black/60 backdrop-blur-md hover:border-[#C99A20]/15 transition-all duration-300 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-4 py-1.5 md:py-2 flex items-center justify-start gap-3.5 text-left cursor-pointer group"
                  >
                    {/* Gold Circular Plus/Minus Icon on the left */}
                    <div className="w-5 h-5 rounded-full border border-[#C99A20]/30 flex items-center justify-center text-[#C99A20] bg-[#C99A20]/5 group-hover:border-[#C99A20]/60 transition-colors relative flex-shrink-0">
                      <span className={`absolute w-2 h-0.5 bg-[#C99A20] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      <span className={`absolute h-2 w-0.5 bg-[#C99A20] transition-transform duration-300 ${isOpen ? "rotate-90 scale-y-0" : ""}`} />
                    </div>
                    
                    <span className="text-[13px] font-bold text-white group-hover:text-[#C99A20] transition-colors">
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
            <div className="w-9 h-9 rounded-lg border border-[#C99A20]/25 bg-[#C99A20]/5 flex items-center justify-center text-[#C99A20] flex-shrink-0">
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
            className="inline-flex h-[32px] px-3.5 rounded-lg text-[10px] font-bold border border-[#C99A20]/30 hover:border-[#C99A20] bg-black hover:bg-[#C99A20]/10 text-white hover:text-[#C99A20] transition-all duration-300 items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            Contact Us
            <span className="text-xs">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
