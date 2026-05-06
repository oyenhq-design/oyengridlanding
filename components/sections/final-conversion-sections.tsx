"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Users, Activity, Zap, Shield } from "lucide-react";

export function FinalConversionSections() {
  return (
    <div className="bg-[#0B0B0D]">
      
      {/* 12. PRICING CTA (Team working late background) */}
      <section className="py-32 relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/team_working_late_focused_1778083119_png_1778093273731.png" 
            alt="Focused Team" 
            fill 
            className="object-cover opacity-30 grayscale blur-[10px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-[#0B0B0D]/90 to-[#0B0B0D]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,185,66,0.1),transparent_70%)]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tighter leading-tight mb-8">
              Ready to operate <br />
              <span className="text-[#F5B942]">at high fidelity?</span>
            </h2>
            <p className="text-[18px] text-[#71717A] leading-relaxed mb-12 max-w-xl mx-auto font-light">
              Join the world&apos;s leading organizations managing complex programmes with absolute structural control.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link 
                href="/get-started"
                className="px-10 py-4 rounded-xl bg-[#F5B942] text-black font-black text-[17px] transition-all hover:bg-[#D4A000] hover:scale-105 active:scale-95 shadow-lg shadow-[#F5B942]/10"
              >
                Start Building Today
              </Link>
              <Link 
                href="/pricing"
                className="px-10 py-4 rounded-xl border border-white/10 text-white font-bold text-[17px] hover:bg-white/5 transition-all active:scale-95 flex items-center gap-3"
              >
                Explore Pricing <ArrowRight className="w-5 h-5 text-[#F5B942]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 13. FINAL CTA (Minimal closing) */}
      <section className="py-24 bg-[#0B0B0D] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
           <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F5B942] to-[#D4A017] flex items-center justify-center mx-auto mb-10 shadow-2xl">
             <span className="text-black font-black text-xl">OG</span>
           </div>
           <h3 className="text-white font-bold text-xl mb-4 uppercase tracking-[0.4em] opacity-40">Absolute Structural Integrity</h3>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-black text-white pt-24 pb-16 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-8 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5B942] to-[#D4A017] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-black font-black text-xl">OG</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight uppercase">OYEN GRID</span>
              </Link>
              <p className="text-[#71717A] text-[14px] leading-relaxed max-w-sm mb-10 font-light">
                The operating system for large-scale, high-fidelity programme delivery.
              </p>
              <div className="flex items-center gap-6 text-[#52525B]">
                 <Link href="#" className="hover:text-[#F5B942] transition-colors"><Zap className="w-5 h-5" /></Link>
                 <Link href="#" className="hover:text-[#F5B942] transition-colors"><Shield className="w-5 h-5" /></Link>
                 <Link href="#" className="hover:text-[#F5B942] transition-colors"><Activity className="w-5 h-5" /></Link>
              </div>
            </div>

            {[
              { title: "Platform", links: ["Features", "Analytics", "Governance", "Security"] },
              { title: "Solutions", links: ["Training", "Corporate", "NGOs", "Impact"] },
              { title: "Company", links: ["About", "Careers", "News", "Partner"] },
              { title: "Support", links: ["Docs", "API", "Status", "Privacy"] }
            ].map((col) => (
              <div key={col.title}>
                <h5 className="text-white font-bold text-[13px] uppercase tracking-widest mb-6">{col.title}</h5>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}><Link href="#" className="text-[#71717A] text-[13px] hover:text-[#F5B942] transition-colors">{link}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[#3F3F46] text-[12px]">© 2024 OYEN GRID. All rights reserved.</p>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[#71717A] text-[12px] hover:text-white transition-all">
              <Globe className="w-4 h-4" /> Global - English
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
