"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Users, MessageCircle, ExternalLink } from "lucide-react";

export function PremiumConversion() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 13. TESTIMONIAL BLOCK (LIGHT CARD) */}
      <section className="py-40 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-[1280px] mx-auto bg-[#F9FAFB] rounded-[56px] overflow-hidden shadow-3xl ring-1 ring-black/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Stats */}
            <div className="p-16 lg:p-24 bg-white border-r border-slate-100 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-16">
                {[
                  { value: "2x", label: "Throughput Growth" },
                  { value: "40%", label: "Operational Efficiency" },
                  { value: "98%", label: "Programme Retention" },
                  { value: "50k+", label: "Active Participants" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[#0B0B0C] text-[48px] md:text-[64px] font-black tracking-tighter leading-none mb-4">{stat.value}</p>
                    <p className="text-[#64748B] text-[14px] font-black uppercase tracking-widest leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="p-16 lg:p-24 flex flex-col justify-center">
              <div className="flex gap-1 mb-10">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-[#F5B800] text-[#F5B800]" />)}
              </div>
              <blockquote className="text-[#0B0B0C] text-[28px] md:text-[36px] font-black leading-tight tracking-tight mb-12 italic">
                “OYEN GRID transformed our delivery architecture. We now manage 10x more cohorts with less friction and higher data fidelity than ever before.”
              </blockquote>
              <div className="flex items-center gap-5 pt-10 border-t border-slate-100">
                <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden shadow-lg">
                  <Image src="/professional_workspace_ops_team_1778024747201.png" alt="User" width={56} height={56} className="object-cover" />
                </div>
                <div>
                  <p className="text-[#0B0B0C] font-black text-lg leading-none mb-1">Amara Nwosu</p>
                  <p className="text-[#64748B] text-sm font-bold">Head of Operations, TechElevate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 14. PRICING PREVIEW CTA */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/premium_saas_workspace_night_1778072758177_png_1778076123899.png" 
            alt="Workspace" 
            fill 
            className="object-cover opacity-20 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-[42px] md:text-[56px] font-black text-white tracking-tight leading-tight mb-12">
            Simple pricing for structured <br />
            <span className="text-[#F5B800]">programme operations</span>
          </h2>
          <Link 
            href="/pricing"
            className="inline-flex items-center gap-3 px-14 py-6 rounded-full bg-[#F5B800] text-black font-black text-[18px] uppercase tracking-widest transition-all hover:scale-105 shadow-[0_20px_40px_rgba(245,184,0,0.3)]"
          >
            View Pricing <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section className="py-40 bg-[#0B0B0C] relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B800] opacity-[0.06] blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[48px] md:text-[72px] font-black text-white tracking-tighter leading-tight mb-16">
            Ready to structure <br />
            your operations?
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Link 
              href="/get-started"
              className="px-14 py-6 rounded-full bg-[#F5B800] text-black font-black text-[18px] uppercase tracking-widest transition-all hover:scale-105 shadow-[0_20px_40px_rgba(245,184,0,0.3)]"
            >
              Start Building
            </Link>
            <Link 
              href="/contact"
              className="px-14 py-6 rounded-full border border-white/10 text-white font-black text-[18px] uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* 16. FOOTER */}
      <footer className="bg-[#0B0B0C] border-t border-white/5 pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-[0.25em] mb-10">Platform</h5>
              <ul className="space-y-6">
                {["Programme Hosting", "Analytics Engine", "Workflow Automation", "System Security"].map((link) => (
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
              <h5 className="text-white font-black text-[13px] uppercase tracking-[0.25em] mb-10">Company</h5>
              <ul className="space-y-6">
                {["Our Mission", "Customer Stories", "Careers", "Legal & Privacy"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#52525B] text-[15px] font-medium hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-[0.25em] mb-10">Legal</h5>
              <ul className="space-y-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#52525B] text-[15px] font-medium hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5B800] to-[#B88A00] flex items-center justify-center shadow-lg">
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
              <Link href="#" className="hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
