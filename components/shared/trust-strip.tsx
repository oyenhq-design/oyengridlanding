"use client"

import { Hexagon, Triangle, Circle, Square, Octagon } from "lucide-react"

export function TrustStrip() {
  return (
    <div className="w-full bg-[#111111] py-8 border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#A1A1AA] text-sm font-medium tracking-wide text-center mb-6 uppercase">
          Built for organisations managing structured programmes
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#C8A95A] transition-colors">
            <Hexagon className="w-6 h-6" />
            <span className="font-bold text-lg tracking-tight">Acme Corp</span>
          </div>
          <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#C8A95A] transition-colors">
            <Triangle className="w-6 h-6" />
            <span className="font-bold text-lg tracking-tight">TechFlow</span>
          </div>
          <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#C8A95A] transition-colors">
            <Circle className="w-6 h-6" />
            <span className="font-bold text-lg tracking-tight">GlobalEdu</span>
          </div>
          <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#C8A95A] transition-colors hidden sm:flex">
            <Square className="w-6 h-6" />
            <span className="font-bold text-lg tracking-tight">NovaScale</span>
          </div>
          <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#C8A95A] transition-colors hidden md:flex">
            <Octagon className="w-6 h-6" />
            <span className="font-bold text-lg tracking-tight">Apex Learning</span>
          </div>
        </div>
      </div>
    </div>
  );
}
