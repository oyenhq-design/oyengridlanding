"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Users, Mail, Phone, MapPin, Activity, Zap, Shield } from "lucide-react";

export function FinalConversionSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 12. PRICING CTA (Training environment background) */}
      <section className="py-40 relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/oyen_grid_hero_workspace_v2_1778080769_png_1778080399094.png" 
            alt="Training Environment" 
            fill 
            className="object-cover opacity-20 grayscale scale-110"
          />
          {/* Dark gradient overlay + Gold tint highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,184,0,0.05),transparent_70%)]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[42px] md:text-[64px] font-bold text-white tracking-tighter leading-tight mb-10">
              Ready to operate <br />
              <span className="text-[#F5B800]">at high fidelity?</span>
            </h2>
            <p className="text-[20px] text-[#A1A1AA] leading-relaxed mb-16 max-w-2xl mx-auto font-light">
              Join the world&apos;s leading organizations managing complex programmes with absolute structural control on OYEN GRID.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <Link 
                href="/get-started"
                className="px-12 py-5 rounded-2xl bg-[#F5B800] text-black font-black text-[18px] transition-all hover:bg-[#D4A000] hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(245,184,0,0.25)]"
              >
                Start Building Today
              </Link>
              <Link 
                href="/pricing"
                className="px-12 py-5 rounded-2xl border-2 border-white/10 text-white font-bold text-[18px] hover:bg-white/5 transition-all active:scale-95 flex items-center gap-3"
              >
                Explore Pricing <ArrowRight className="w-5 h-5 text-[#F5B800]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 13. FINAL CTA (Minimal closing) */}
      <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F5B800] opacity-[0.02] blur-[150px] rounded-full" />
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
           <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5B800] to-[#D4A017] flex items-center justify-center mx-auto mb-12 shadow-2xl">
             <span className="text-black font-black text-2xl">OG</span>
           </div>
           <h3 className="text-white font-bold text-2xl mb-4 uppercase tracking-[0.4em] opacity-40">Absolute Structural Integrity</h3>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-black text-white pt-32 pb-20 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 mb-24">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-10 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5B800] to-[#D4A017] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-black font-black text-xl">OG</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight uppercase">OYEN GRID</span>
              </Link>
              <p className="text-[#71717A] text-[15px] leading-relaxed max-w-sm mb-10 font-light">
                The operating system for large-scale, high-fidelity programme delivery. Built for operators who demand absolute control and structural integrity.
              </p>
              <div className="flex items-center gap-6 text-[#52525B]">
                 <Link href="#" className="hover:text-[#F5B800] transition-colors"><Zap className="w-5 h-5" /></Link>
                 <Link href="#" className="hover:text-[#F5B800] transition-colors"><Shield className="w-5 h-5" /></Link>
                 <Link href="#" className="hover:text-[#F5B800] transition-colors"><Activity className="w-5 h-5" /></Link>
              </div>
            </div>

            {[
              { title: "Platform", links: ["Features", "Analytics", "Governance", "Security", "Infrastructure"] },
              { title: "Solutions", links: ["Training Cohorts", "Corporate Ops", "Social Impact", "Scalability", "Case Studies"] },
              { title: "Company", links: ["About Us", "Careers", "News", "Partner Program", "Contact"] },
              { title: "Support", links: ["Documentation", "API Reference", "Status", "Trust Center", "Privacy"] }
            ].map((col) => (
              <div key={col.title}>
                <h5 className="text-white font-bold text-[14px] uppercase tracking-widest mb-8">{col.title}</h5>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}><Link href="#" className="text-[#71717A] text-[14px] hover:text-[#F5B800] transition-colors">{link}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-wrap items-center gap-8">
              <p className="text-[#3F3F46] text-[13px]">© 2024 OYEN GRID. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link href="#" className="text-[#3F3F46] text-[13px] hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-[#3F3F46] text-[13px] hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="text-[#3F3F46] text-[13px] hover:text-white transition-colors">Cookie Settings</Link>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[#71717A] text-[13px] hover:text-white hover:bg-white/10 transition-all">
              <Globe className="w-4 h-4" /> Global - English
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
