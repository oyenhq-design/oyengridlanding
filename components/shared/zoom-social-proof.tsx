"use client";

import Image from "next/image";
import { Star, ChevronRight, ArrowRight } from "lucide-react";

export function ZoomSocialProof() {
  return (
    <div className="bg-white">
      
      {/* 9. RATINGS / TRUST METRICS */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-16 md:gap-32">
            {[
              { score: "4.5/5", label: "G2 Crowd" },
              { score: "4.6/5", label: "Capterra" },
              { score: "8.5/10", label: "TrustRadius" }
            ].map((rating, i) => (
              <div key={i} className="text-center">
                <p className="text-[32px] md:text-[40px] font-bold text-[#0B0B0C] mb-2 tracking-tighter">{rating.score}</p>
                <div className="flex gap-0.5 justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-[#0B5CFF] text-[#0B5CFF]" />)}
                </div>
                <p className="text-[#666] font-bold uppercase text-[12px] tracking-widest">{rating.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIAL */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <blockquote className="text-[28px] md:text-[42px] font-bold text-[#0B0B0C] leading-tight mb-10 tracking-tight italic">
            “Zoom has transformed how we communicate as a global team. It’s the only platform that truly connects everyone, everywhere, instantly.”
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden mb-4 shadow-lg ring-4 ring-white">
              <Image src="/professional_workspace_ops_team_1778024747201.png" alt="Person" width={64} height={64} className="object-cover" />
            </div>
            <p className="text-[#0B0B0C] font-bold text-lg">Sarah Jenkins</p>
            <p className="text-[#666] text-sm">Chief Technology Officer, GlobalCorp</p>
          </div>
        </div>
      </section>

      {/* 11. CASE STUDY CAROUSEL */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
            {/* Left: Large Card */}
            <div className="lg:col-span-8 group cursor-pointer h-full">
              <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden shadow-2xl h-full min-h-[400px]">
                <Image src="/premium_saas_workspace_night_1778072758177_png_1778076123899.png" alt="Case Study" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-white/80 text-[12px] font-bold uppercase tracking-widest mb-4">Customer Story</p>
                  <h3 className="text-white text-[32px] md:text-[44px] font-bold leading-tight mb-8">How Nasdaq uses Zoom to power their global markets</h3>
                  <button className="px-8 py-3 rounded-full bg-[#0B5CFF] text-white font-bold hover:bg-[#0048D9] transition-all flex items-center gap-2">
                    Read the story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            {/* Right: Smaller preview cards */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {[
                { title: "MGM Resorts", image: "/images/hero-dashboard.png" },
                { title: "Formula 1®", image: "/premium_saas_workspace_night_1778072758177_png_1778076123899.png" }
              ].map((item, i) => (
                <div key={i} className="flex-1 group cursor-pointer">
                  <div className="relative h-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg border border-slate-100">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-white font-bold text-xl">{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. NEWS / CONTENT GRID */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#0B0B0C]">
              Making news, making impact
            </h2>
            <button className="hidden md:flex items-center gap-2 text-[#0B5CFF] font-bold hover:translate-x-2 transition-transform">
              View all news <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image src="/images/hero-dashboard.png" alt="News" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-[#0B5CFF] text-[10px] font-bold uppercase tracking-widest mb-4 text-center">Blog · Innovation</p>
                  <h4 className="text-[#0B0B0C] font-bold text-lg mb-4 leading-tight group-hover:text-[#0B5CFF] transition-colors">How AI is redefining the future of video communication</h4>
                  <p className="text-[#666] text-[14px] leading-relaxed mb-8 flex-1">Explore the latest breakthroughs in AI note-taking and real-time translation.</p>
                  <div className="flex items-center gap-2 text-[#0B5CFF] font-bold text-[14px]">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
