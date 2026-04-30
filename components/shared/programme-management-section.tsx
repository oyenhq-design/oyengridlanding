"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export function ProgrammeManagementSection() {
  return (
    <section
      className="w-full bg-black py-[120px] px-4 flex justify-center border-b border-[#1F1F1F]"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-16 items-center">
        {/* LEFT: Content */}
        <div className="max-w-lg">
          <div className="text-xs font-semibold tracking-widest text-[#D4AF37] mb-4 opacity-80">
            PROGRAMME OPERATIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Run your programmes with real-time control
          </h2>
          <p className="text-base md:text-lg text-white/70 mb-8">
            Monitor cohorts, track performance, and manage delivery from a single operational layer built for structured organisations.
          </p>
          <ul className="mb-10 space-y-3 text-white/80 text-base">
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] opacity-80" />
              Real-time cohort visibility
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] opacity-80" />
              Attendance & completion tracking
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] opacity-80" />
              Structured programme flow enforcement
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] opacity-80" />
              Session scheduling & monitoring
            </li>
          </ul>
          <div className="flex gap-4">
            <Button
              className="bg-[#D4AF37] text-black font-bold px-6 py-3 rounded-lg shadow-gold transition hover:shadow-gold-lg hover:bg-[#e6c75a] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
              size="lg"
            >
              Start Building
            </Button>
            <Button
              variant="outline"
              className="border border-[#D4AF37] text-[#D4AF37] font-bold px-6 py-3 rounded-lg hover:bg-[#181818] hover:border-[#e6c75a] hover:text-[#e6c75a] transition"
              size="lg"
            >
              View Demo
            </Button>
          </div>
        </div>
        {/* RIGHT: Visual */}
        <div className="flex justify-center items-center">
          <div
            className="relative p-2 bg-[#0A0A0A] rounded-[20px] border border-white/10 shadow-xl"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.08)",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
          >
            <Image
              src="/img/pg mgt.png"
              alt="Programme Management Dashboard"
              width={700}
              height={440}
              className="rounded-[16px] select-none pointer-events-none shadow-lg"
              style={{
                transition: "box-shadow 0.3s, transform 0.3s",
                boxShadow: "0 0 40px rgba(212,175,55,0.08)",
              }}
              draggable={false}
            />
            {/* Micro-interaction overlay (hover) */}
            <style jsx>{`
              div:hover > :global(img) {
                transform: translateY(-4px) scale(1.01);
                box-shadow: 0 0 60px 0 rgba(212,175,55,0.16), 0 20px 60px rgba(0,0,0,0.7);
              }
              div:hover {
                box-shadow: 0 20px 80px rgba(0,0,0,0.7), 0 0 60px rgba(212,175,55,0.14);
              }
            `}</style>
          </div>
        </div>
      </div>
      {/* Positioning Copy */}
      <div className="w-full flex justify-center mt-12">
        <span className="text-sm text-white/60 border-t border-[#232323] pt-6 max-w-xl w-full text-center tracking-wide">
          Not dashboards. Operational clarity.
        </span>
      </div>
    </section>
  );
}
