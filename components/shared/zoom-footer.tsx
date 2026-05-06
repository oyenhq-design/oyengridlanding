"use client";

import Link from "next/link";
import { Globe, Users, MessageCircle, ExternalLink, Activity, Info } from "lucide-react";

export function ZoomFooter() {
  return (
    <div className="bg-white">
      
      {/* 13. FINAL CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[56px] font-bold text-[#0B0B0C] mb-12 tracking-tight">
            See what Zoom can do <br /> for your business
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 rounded-full bg-[#0B5CFF] text-white font-bold text-[18px] hover:bg-[#0048D9] transition-all shadow-xl shadow-blue-500/30 active:scale-95">
              Get started today
            </button>
            <button className="px-12 py-5 rounded-full border border-slate-200 text-[#0B0B0C] font-bold text-[18px] hover:bg-slate-50 transition-all active:scale-95">
              Find your plan
            </button>
          </div>
        </div>
      </section>

      {/* 14. FOOTER (DARK BACKGROUND) */}
      <footer className="bg-[#111111] pt-24 pb-12 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div>
              <h5 className="font-bold text-[15px] mb-8">About</h5>
              <ul className="space-y-4">
                {["Zoom Blog", "Our Team", "Careers", "Sustainability", "Accessibility"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 text-[14px] hover:text-[#0B5CFF] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[15px] mb-8">Download</h5>
              <ul className="space-y-4">
                {["Meetings Client", "Zoom Rooms", "Browser Extension", "iPhone/iPad App", "Android App"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 text-[14px] hover:text-[#0B5CFF] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[15px] mb-8">Sales</h5>
              <ul className="space-y-4">
                {["Contact Sales", "Plans & Pricing", "Request a Demo", "Webinars", "Zoom Phone"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 text-[14px] hover:text-[#0B5CFF] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[15px] mb-8">Support</h5>
              <ul className="space-y-4">
                {["Support Center", "Community", "Learning Center", "Status Page", "System Requirements"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 text-[14px] hover:text-[#0B5CFF] transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <h5 className="font-bold text-[15px] mb-8">Language</h5>
              <div className="flex items-center gap-2 p-3 rounded-lg border border-white/10 text-white/60 text-[14px] cursor-pointer hover:bg-white/5 transition-all">
                <Globe className="w-4 h-4" />
                <span>English (US)</span>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0B5CFF] flex items-center justify-center">
                <span className="text-white font-black text-sm">Z</span>
              </div>
              <span className="font-black text-xl tracking-tighter">zoom</span>
            </div>
            
            <p className="text-white/40 text-[13px] font-medium">
              © 2026 Zoom Video Communications, Inc. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-white/60">
              <Link href="#" className="hover:text-[#0B5CFF] transition-colors"><Globe className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-[#0B5CFF] transition-colors"><Users className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-[#0B5CFF] transition-colors"><MessageCircle className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-[#0B5CFF] transition-colors"><ExternalLink className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
