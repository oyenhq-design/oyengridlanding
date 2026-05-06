"use client";

import Link from "next/link";
import { Globe, Users, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0C] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h5 className="text-white font-bold text-[14px] uppercase tracking-widest mb-8">Platform</h5>
            <ul className="space-y-4">
              {["Features", "Analytics", "Automation", "Security"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#71717A] text-[14px] hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-[14px] uppercase tracking-widest mb-8">Solutions</h5>
            <ul className="space-y-4">
              {["Enterprise", "Startups", "NGO Programs", "Bootcamps"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#71717A] text-[14px] hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-[14px] uppercase tracking-widest mb-8">Company</h5>
            <ul className="space-y-4">
              {["About Us", "Customers", "Resources", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#71717A] text-[14px] hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-[14px] uppercase tracking-widest mb-8">Legal</h5>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#71717A] text-[14px] hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#F5C044] flex items-center justify-center">
              <span className="text-black font-black text-sm">OG</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight uppercase">OYEN GRID</span>
          </div>
          
          <p className="text-[#3F3F46] text-[14px]">
            © 2026 OYEN GRID Infrastructure. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#3F3F46] hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#3F3F46] hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#3F3F46] hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
