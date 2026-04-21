"use client"

import { ShieldCheck, Network, Eye } from "lucide-react"

export function StructureControlSection() {
  return (
    <section className="w-full bg-[#111111] py-24 md:py-32 border-b border-[#1F1F1F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Maintain structure at <span className="text-[#C8A95A]">every level</span>
            </h2>
            <p className="text-lg text-[#A1A1AA] mb-12 leading-relaxed max-w-xl">
              Unlike generic tools, OYEN Grid is built specifically for the complexities of structured learning. We give you the guardrails to ensure consistency, security, and quality across every cohort.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C8A95A]/10 border border-[#C8A95A]/20 flex items-center justify-center mt-1">
                  <ShieldCheck className="w-6 h-6 text-[#C8A95A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Centralised Control</h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    Set permissions, manage roles, and lock down sensitive materials. Ensure instructors and participants only see what they are supposed to see.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C8A95A]/10 border border-[#C8A95A]/20 flex items-center justify-center mt-1">
                  <Network className="w-6 h-6 text-[#C8A95A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Organised Delivery</h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    Prevent scheduling conflicts and link chaos. OYEN Grid enforces a strict, reliable framework for all live sessions and asynchronous content.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C8A95A]/10 border border-[#C8A95A]/20 flex items-center justify-center mt-1">
                  <Eye className="w-6 h-6 text-[#C8A95A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Clear Oversight</h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    Get a bird's-eye view of your entire operation. Instantly identify at-risk participants, dropping attendance rates, or missing assignments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] flex items-center justify-center lg:justify-end">
            {/* Visual representation of structure */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-[#C8A95A] opacity-5 blur-[100px] rounded-full" />
              
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-[#C8A95A]/30 bg-[#121212] flex items-center justify-center z-20 shadow-[0_0_30px_rgba(200,169,90,0.15)]">
                <div className="w-24 h-24 rounded-full border border-[#C8A95A]/20 flex items-center justify-center bg-[#0B0B0F]">
                  <ShieldCheck className="w-8 h-8 text-[#C8A95A]" />
                </div>
              </div>
              
              {/* Outer Nodes */}
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-[#1F1F1F] bg-[#1A1A1A] flex items-center justify-center z-10 shadow-lg">
                <Network className="w-5 h-5 text-[#A1A1AA]" />
              </div>
              <div className="absolute bottom-[20%] left-[10%] w-16 h-16 rounded-full border border-[#1F1F1F] bg-[#1A1A1A] flex items-center justify-center z-10 shadow-lg">
                <Eye className="w-5 h-5 text-[#A1A1AA]" />
              </div>
              <div className="absolute bottom-[20%] right-[10%] w-16 h-16 rounded-full border border-[#1F1F1F] bg-[#1A1A1A] flex items-center justify-center z-10 shadow-lg">
                <ShieldCheck className="w-5 h-5 text-[#A1A1AA]" />
              </div>
              
              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 400 400" fill="none">
                <path d="M200 200 L200 60" stroke="#C8A95A" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                <path d="M200 200 L80 300" stroke="#C8A95A" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                <path d="M200 200 L320 300" stroke="#C8A95A" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                
                {/* Orbit Rings */}
                <circle cx="200" cy="200" r="140" stroke="#1F1F1F" strokeWidth="1" />
                <circle cx="200" cy="200" r="180" stroke="#1F1F1F" strokeWidth="1" strokeDasharray="2 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
