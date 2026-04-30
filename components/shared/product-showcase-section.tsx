"use client";

import Image from "next/image";

export function ProductShowcaseSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0b0f14]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* TEXT CONTENT */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 tracking-tight leading-[1.2]">
            One platform. Total clarity.
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto leading-relaxed">
            See your entire operation at a glance. Monitor cohorts, track progress, and manage delivery without jumping between fragmented tools.
          </p>
        </div>
        
        {/* UI SHOWCASE */}
        <div className="w-full flex justify-center mb-20">
          <div className="relative rounded-2xl overflow-hidden bg-[#121820] shadow-[0_24px_64px_rgba(0,0,0,0.3)] w-full max-w-[900px]">
            <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-white/10 rounded-2xl" />
            <Image
              src="/img/pg mgt.png"
              alt="OYEN Grid operational view"
              width={1000}
              height={600}
              className="w-full h-auto object-cover object-top block"
              priority
            />
          </div>
        </div>

        {/* METRICS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24">
          <div className="text-center">
            <div className="text-[40px] font-bold text-white mb-2 leading-none">98%</div>
            <div className="text-[16px] text-white/60 font-medium">Avg. Completion Rate</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-white/10"></div>
          <div className="text-center">
            <div className="text-[40px] font-bold text-white mb-2 leading-none">4,200+</div>
            <div className="text-[16px] text-white/60 font-medium">Active Participants</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-white/10"></div>
          <div className="text-center">
            <div className="text-[40px] font-bold text-white mb-2 leading-none">0</div>
            <div className="text-[16px] text-white/60 font-medium">Lost Data Points</div>
          </div>
        </div>

      </div>
    </section>
  );
}
