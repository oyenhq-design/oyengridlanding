"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ZoomHero() {
  return (
    <div className="pt-[140px]">
      {/* 3. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0B5CFF] to-[#6EA8FF] text-center">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[64px] lg:text-[72px] font-bold text-white leading-tight tracking-tight mb-8"
          >
            Find out what&apos;s possible <br /> when work connects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-[18px] md:text-[20px] max-w-2xl mx-auto mb-12 font-medium"
          >
            A unified communication and collaboration platform that helps you do more with AI-first solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <button className="px-8 py-4 rounded-full bg-white text-[#0B5CFF] font-bold text-[16px] hover:bg-white/90 transition-all shadow-xl shadow-black/10">
              Sign up for free
            </button>
            <button className="px-8 py-4 rounded-full border border-white text-white font-bold text-[16px] hover:bg-white/10 transition-all">
              Request a demo
            </button>
          </motion.div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-white/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-blue-400/20 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* 4. PRODUCT CAROUSEL */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x">
            {[
              { label: "AI Companion", image: "/images/hero-dashboard.png" },
              { label: "Meetings", image: "/premium_saas_workspace_night_1778072758177_png_1778076123899.png" },
              { label: "Team Chat", image: "/images/hero-dashboard.png" },
              { label: "Phone", image: "/premium_saas_workspace_night_1778072758177_png_1778076123899.png" },
              { label: "Docs", image: "/images/hero-dashboard.png" },
              { label: "Scheduler", image: "/premium_saas_workspace_night_1778072758177_png_1778076123899.png" }
            ].map((item, i) => (
              <div key={i} className="min-w-[280px] snap-center group cursor-pointer">
                <div className="aspect-[4/3] rounded-[24px] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  <Image src={item.image} alt={item.label} width={400} height={300} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                </div>
                <p className="text-[#333] font-bold text-lg text-center group-hover:text-[#0B5CFF] transition-colors">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#0B5CFF]" : "bg-slate-200"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: “Introducing Zoom AI Companion 3.0” */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#0B0B0C] mb-8 leading-tight">
            Introducing Zoom AI Companion 3.0
          </h2>
          <p className="text-[#666] text-[18px] md:text-[20px] max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Discover a smarter way to work with AI across Meetings, Team Chat, Docs, and more. All included in your paid Zoom plan.
          </p>
          <button className="px-10 py-4 rounded-full bg-[#0B5CFF] text-white font-bold text-[16px] hover:bg-[#0048D9] transition-all shadow-lg shadow-blue-500/20">
            Learn more
          </button>
        </div>
      </section>
    </div>
  );
}
