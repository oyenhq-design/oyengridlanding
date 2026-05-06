"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MessageCircle, Users } from "lucide-react";

export function FooterCTA() {
  return (
    <div className="bg-white">
      
      {/* 12. NEWS / CONTENT GRID */}
      <section className="py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#232333] tracking-tight">
              Making news, making impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-gray-100 shadow-lg">
                  <Image 
                    src={i % 2 === 0 ? "/professional_business_team_light_1778076878_png_1778079298102.png" : "/zoom_ai_companion_ui_1778076852_png_1778079273399.png"} 
                    alt="News" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <h4 className="text-[#232333] font-bold text-lg leading-tight mb-4 group-hover:text-[#0B5CFF] transition-colors">
                  Zoom AI Companion: Redefining how we work in 2024
                </h4>
                <p className="text-[#232333]/60 text-[14px] leading-relaxed mb-6">
                  Learn how the latest AI updates are helping teams save time and stay focused on what matters.
                </p>
                <button className="flex items-center gap-2 text-[#0B5CFF] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-[120px] bg-gradient-to-br from-[#0B5CFF] to-[#6EA8FF] text-white overflow-hidden relative">
        {/* Abstract circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4" />
        
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[42px] md:text-[56px] font-bold tracking-tight mb-12">
            See what Zoom can do <br /> for your business
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <button className="px-10 py-4 rounded-full bg-white text-[#0B5CFF] text-[16px] font-bold hover:bg-opacity-90 transition-all shadow-xl">
              Get started today
            </button>
            <button className="px-10 py-4 rounded-full border-2 border-white/30 text-white text-[16px] font-bold hover:bg-white/10 transition-all">
              Find your plan
            </button>
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-[#1A1A24] text-white pt-[100px] pb-[60px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div>
              <h5 className="font-bold text-lg mb-8">About</h5>
              <ul className="space-y-4">
                {["Zoom Blog", "Our Team", "Careers", "Sustainability"].map((link) => (
                  <li key={link}><Link href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-8">Download</h5>
              <ul className="space-y-4">
                {["Meetings Client", "Zoom Rooms", "Browser Extension", "Mobile App"].map((link) => (
                  <li key={link}><Link href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-8">Sales</h5>
              <ul className="space-y-4">
                {["1.888.799.9666", "Contact Sales", "Plans & Pricing", "Request a Demo"].map((link) => (
                  <li key={link}><Link href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-8">Support</h5>
              <ul className="space-y-4">
                {["Support Center", "Learning Center", "Developer Platform", "Community"].map((link) => (
                  <li key={link}><Link href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">{link}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[14px]">
                <Globe className="w-4 h-4" /> English <ChevronDown className="w-3 h-3" />
              </button>
              <p className="text-white/40 text-[12px]">© 2024 Zoom Video Communications, Inc. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-6 text-white/60">
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

function ChevronDown(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
