"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Users } from "lucide-react";

export function FinalConversionSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 12. PRICING CTA (REAL IMAGE BACKGROUND) */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/premium_saas_workspace_night_1778072758177_png_1778076123899.png" 
            alt="Operational Team" 
            fill 
            className="object-cover opacity-20 grayscale scale-110"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-transparent to-[#0B0B0C]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[42px] md:text-[64px] font-black text-white tracking-tight leading-[1.05] mb-10 max-w-4xl">
              Simple pricing for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C044] via-white to-[#D4A017]">structured operations</span>
            </h2>
            <p className="text-[20px] text-[#A1A1AA] mb-12 max-w-2xl font-light leading-relaxed">
              Transparent, enterprise-ready plans tailored to your programme's scale and structural requirements.
            </p>
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-3 px-14 py-6 rounded-[24px] bg-[#F5C044] text-black font-black text-[20px] transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(245,192,68,0.4)] active:scale-95 shadow-xl group"
            >
              Explore pricing <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 13. FINAL CTA (HIGH CONTRAST) */}
      <section className="py-40 bg-[#0B0B0C] relative border-t border-white/5 overflow-hidden">
        {/* Abstract Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5C044] opacity-[0.06] blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-black text-white tracking-tighter leading-tight mb-14"
          >
            Ready to structure <br />
            your operations?
          </motion.h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Link 
              href="/get-started"
              className="px-14 py-6 rounded-[24px] bg-[#F5C044] text-black font-black text-[20px] transition-all hover:scale-105 shadow-[0_20px_50px_rgba(245,192,68,0.3)] active:scale-95"
            >
              Start building
            </Link>
            <Link 
              href="/contact"
              className="px-14 py-6 rounded-[24px] border-2 border-white/10 bg-white/5 text-white font-black text-[20px] hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      {/* 14. FOOTER (CLEAN GRID) */}
      <footer className="bg-[#0B0B0C] border-t border-white/5 pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-[0.25em] mb-10">Platform</h5>
              <ul className="space-y-6">
                {["Core Features", "Analytics Engine", "Workflow Automation", "System Security"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#52525B] text-[15px] font-medium hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-[0.25em] mb-10">Solutions</h5>
              <ul className="space-y-6">
                {["Enterprise Scale", "NGO Delivery", "Corporate Training", "Learning Bootcamps"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#52525B] text-[15px] font-medium hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-[0.25em] mb-10">Resources</h5>
              <ul className="space-y-6">
                {["Documentation", "API Reference", "Status Page", "Operational Guides"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#52525B] text-[15px] font-medium hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-[0.25em] mb-10">Company</h5>
              <ul className="space-y-6">
                {["Our Mission", "Customer Stories", "Careers", "Legal & Privacy"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#52525B] text-[15px] font-medium hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5C044] to-[#D4A017] flex items-center justify-center shadow-lg">
                <span className="text-black font-black text-lg">OG</span>
              </div>
              <span className="text-white font-black text-xl tracking-tighter uppercase">OYEN GRID</span>
            </div>
            
            <p className="text-[#3F3F46] text-[14px] font-medium">
              © 2026 OYEN GRID Operational Infrastructure. All rights reserved.
            </p>

            <div className="flex items-center gap-8 text-[#3F3F46]">
              <Link href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Users className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
