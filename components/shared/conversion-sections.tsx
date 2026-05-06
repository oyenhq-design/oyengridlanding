"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export function ConversionSections() {
  return (
    <div className="bg-[#0B0B0C]">
      
      {/* 13. TESTIMONIAL / METRICS PANEL (Light background card) */}
      <section className="py-32 px-6">
        <div className="max-w-[1280px] mx-auto bg-[#F8F9FA] rounded-[48px] overflow-hidden p-12 lg:p-24 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-12">
              {[
                { label: "Growth in throughput", value: "2x" },
                { label: "Reduction in overhead", value: "40%" },
                { label: "Success rate", value: "98%" },
                { label: "Active participants", value: "50k+" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[#0B0B0C] text-[48px] md:text-[64px] font-bold tracking-tighter leading-none mb-4">{stat.value}</p>
                  <p className="text-[#64748B] text-[16px] font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative">
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-[#F5C044] text-[#F5C044]" />)}
              </div>
              <blockquote className="text-[#0B0B0C] text-[24px] md:text-[32px] font-bold leading-tight mb-10 italic">
                “OYEN GRID transformed our delivery architecture. We now manage 10x more cohorts with less friction and higher data fidelity than ever before.”
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden">
                  <Image src="/professional_workspace_ops_team_1778024747201.png" alt="User" width={56} height={56} className="object-cover" />
                </div>
                <div>
                  <p className="text-[#0B0B0C] font-bold text-lg leading-none mb-1">Amara Nwosu</p>
                  <p className="text-[#64748B] text-sm font-medium">Head of Operations, TechElevate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. PRICING CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/professional_workspace_ops_team_1778024747201.png" 
            alt="Team" 
            fill 
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[56px] font-bold text-white tracking-tight mb-8">
            Simple pricing for structured <br /> programme operations
          </h2>
          <Link 
            href="/pricing"
            className="inline-flex items-center gap-2 px-12 py-5 rounded-2xl bg-[#F5C044] text-black font-bold text-[18px] transition-all hover:scale-105 shadow-xl"
          >
            View pricing <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section className="py-32 bg-[#0B0B0C] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-[42px] md:text-[64px] font-bold text-white tracking-tight leading-tight mb-12">
            Ready to structure your operations?
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link 
              href="/get-started"
              className="px-12 py-5 rounded-2xl bg-[#F5C044] text-black font-bold text-[18px] transition-all hover:scale-105 shadow-xl"
            >
              Start building
            </Link>
            <Link 
              href="/contact"
              className="px-12 py-5 rounded-2xl border border-white/10 text-white font-bold text-[18px] hover:bg-white/5 transition-all"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
