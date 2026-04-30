"use client"

import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 md:py-48 bg-[#0b0f14] relative overflow-hidden">
      {/* Soft background gradient */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at bottom center, rgba(30, 41, 59, 0.8) 0%, transparent 70%)"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-[40px] md:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Ready for absolute clarity?
        </h2>
        
        <p className="text-[16px] md:text-[20px] text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience a new level of operational control. OYEN Grid is built for organisations that demand structure, focus, and measurable outcomes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-started">
            <button className="bg-white text-[#0b0f14] hover:bg-gray-100 font-semibold px-10 py-5 rounded-lg text-[18px] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b0f14]">
              Start Building
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent text-white border border-white/20 hover:bg-white/5 font-semibold px-10 py-5 rounded-lg text-[18px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
              Talk to Sales
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
