"use client";

import Image from "next/image";

export function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0b0f14]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* LOGOS */}
        <div className="text-center mb-24">
          <p className="text-[14px] uppercase tracking-widest text-white/40 font-semibold mb-10">
            Trusted by forward-thinking organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos using text for now, but styled elegantly */}
            <div className="text-2xl font-bold text-white tracking-tighter">ACME Corp</div>
            <div className="text-2xl font-serif text-white tracking-widest">GlobalBank</div>
            <div className="text-2xl font-black text-white italic">NEXUS</div>
            <div className="text-2xl font-light text-white tracking-[0.2em]">PULSE</div>
            <div className="text-2xl font-bold text-white uppercase">Stark Ind.</div>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="max-w-4xl mx-auto bg-[#11161d] rounded-2xl p-10 md:p-16 shadow-[0_24px_64px_rgba(0,0,0,0.2)] text-center relative overflow-hidden">
          {/* Subtle background quote mark */}
          <div className="absolute -top-10 -left-6 text-[180px] font-serif text-white/5 leading-none select-none pointer-events-none">
            "
          </div>
          
          <blockquote className="relative z-10">
            <p className="text-[20px] md:text-[28px] text-white font-medium leading-[1.4] tracking-tight mb-10">
              "OYEN Grid has completely transformed how we deliver our training programmes. The clarity and control we have now is unprecedented. It's the operational backbone we always needed but couldn't find."
            </p>
            <footer>
              <div className="text-[16px] md:text-[18px] text-white font-bold mb-1">
                Sarah Jenkins
              </div>
              <div className="text-[14px] md:text-[16px] text-white/60">
                Director of Operations, GlobalBank
              </div>
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  );
}
