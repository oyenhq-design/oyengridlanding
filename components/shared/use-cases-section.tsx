"use client"

import { Building2, Zap, Briefcase, ChevronRight } from "lucide-react"

export function UseCasesSection() {
  return (
    <section className="w-full bg-[#111111] py-24 border-b border-[#1F1F1F] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C8A95A]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center max-w-3xl mx-auto leading-tight">
          Designed for different <span className="text-[#C8A95A]">programme types</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Training Organisations */}
          <div className="bg-[#0B0B0F] rounded-3xl p-8 border border-[#1F1F1F] group hover:border-[#C8A95A]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C8A95A]/5">
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#121212] border border-[#1F1F1F] flex items-center justify-center group-hover:bg-[#C8A95A]/10 transition-colors duration-500">
                <Building2 className="w-7 h-7 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors duration-500" />
              </div>
              <ChevronRight className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#C8A95A] transition-colors duration-500 transform group-hover:translate-x-1" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Training Organisations</h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              Simplify programme delivery and participant management for professional training. Keep all cohorts, instructors, and assets perfectly organised.
            </p>
          </div>

          {/* Bootcamps */}
          <div className="bg-[#0B0B0F] rounded-3xl p-8 border border-[#1F1F1F] group hover:border-[#C8A95A]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C8A95A]/5">
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#121212] border border-[#1F1F1F] flex items-center justify-center group-hover:bg-[#C8A95A]/10 transition-colors duration-500">
                <Zap className="w-7 h-7 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors duration-500" />
              </div>
              <ChevronRight className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#C8A95A] transition-colors duration-500 transform group-hover:translate-x-1" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Bootcamps</h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              Run intensive, structured programmes with real-time tracking and engagement. Handle assignments, live sessions, and grading effortlessly.
            </p>
          </div>

          {/* Corporate Programmes */}
          <div className="bg-[#0B0B0F] rounded-3xl p-8 border border-[#1F1F1F] group hover:border-[#C8A95A]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C8A95A]/5">
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#121212] border border-[#1F1F1F] flex items-center justify-center group-hover:bg-[#C8A95A]/10 transition-colors duration-500">
                <Briefcase className="w-7 h-7 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors duration-500" />
              </div>
              <ChevronRight className="w-6 h-6 text-[#1F1F1F] group-hover:text-[#C8A95A] transition-colors duration-500 transform group-hover:translate-x-1" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Corporate Programmes</h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              Enterprise-grade solutions for internal training and professional development. Secure, scalable, and compliant with corporate standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
