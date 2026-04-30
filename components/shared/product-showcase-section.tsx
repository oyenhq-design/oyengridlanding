"use client";

import Image from "next/image";

export function ProductShowcaseSection() {
  return (
    <section className="py-32 bg-[#0b0f14] flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
          One platform. Total clarity.
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
          See your entire operation at a glance. Monitor cohorts, track progress, and manage delivery—all in one place.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#10141b]" style={{ width: 720, maxWidth: "100%" }}>
          <Image
            src="/img/pg mgt.png"
            alt="OYEN Grid product interface"
            width={720}
            height={440}
            className="w-full h-auto object-cover object-top"
            priority
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">98.7%</div>
          <div className="text-white/60 text-base">Completion Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">4,200+</div>
          <div className="text-white/60 text-base">Participants Managed</div>
        </div>
      </div>
    </section>
  );
}
