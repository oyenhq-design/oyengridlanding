"use client"

import { Layers, MonitorPlay, Database, KeyRound, Check } from "lucide-react"

export function DeepFeatureBreakdownSection() {
  return (
    <section className="w-full bg-[#0B0B0F] py-24 md:py-32 border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Four layers of <span className="text-[#C8A95A]">capability</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            A comprehensive suite of tools built into a unified stack. No plugins, no integrations required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programme Layer */}
          <div className="bg-[#121212] rounded-3xl p-8 border border-[#1F1F1F] hover:border-[#C8A95A]/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:bg-[#C8A95A]/10 group-hover:border-[#C8A95A]/30 transition-all">
              <Layers className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Programme Layer</h3>
            <ul className="space-y-4">
              {[
                "Programme templates",
                "Custom curriculum builder",
                "Cohort & waitlist management",
                "Automated enrolment flows",
                "Prerequisite tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A95A] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Layer */}
          <div className="bg-[#121212] rounded-3xl p-8 border border-[#1F1F1F] hover:border-[#C8A95A]/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:bg-[#C8A95A]/10 group-hover:border-[#C8A95A]/30 transition-all">
              <MonitorPlay className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Delivery Layer</h3>
            <ul className="space-y-4">
              {[
                "Built-in video conferencing",
                "Smart calendar syncing",
                "Automated session reminders",
                "Live engagement tracking",
                "Interactive Q&A and polls"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A95A] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage Layer */}
          <div className="bg-[#121212] rounded-3xl p-8 border border-[#1F1F1F] hover:border-[#C8A95A]/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:bg-[#C8A95A]/10 group-hover:border-[#C8A95A]/30 transition-all">
              <Database className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Storage Layer</h3>
            <ul className="space-y-4">
              {[
                "Unlimited cloud recording",
                "Auto-transcription & search",
                "Secure document hosting",
                "Role-based file access",
                "Version control for assets"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A95A] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Control Layer */}
          <div className="bg-[#121212] rounded-3xl p-8 border border-[#1F1F1F] hover:border-[#C8A95A]/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:bg-[#C8A95A]/10 group-hover:border-[#C8A95A]/30 transition-all">
              <KeyRound className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Control Layer</h3>
            <ul className="space-y-4">
              {[
                "Granular user permissions",
                "Instructor & admin roles",
                "Comprehensive audit logs",
                "Customisable reporting",
                "API and webhook access"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A95A] shrink-0 mt-0.5" />
                  <span className="text-[#A1A1AA] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
