"use client"

import { CheckCircle2, XCircle } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="w-full bg-[#111111] py-24 md:py-32 border-b border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
          Why not use <span className="text-white/50">multiple tools</span>?
        </h2>
        <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto text-center mb-16">
          Duct-taping a learning stack together leads to dropped attendance, lost recordings, and participant confusion. OYEN Grid solves this.
        </p>
        
        <div className="bg-[#0B0B0F] border border-[#1F1F1F] rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-6 px-8 text-[#A1A1AA] font-medium border-b border-[#1F1F1F] w-1/3 text-lg">Capability</th>
                  <th className="py-6 px-8 text-[#C8A95A] font-bold border-b border-[#1F1F1F] border-x border-x-[#1F1F1F] bg-[#C8A95A]/5 w-1/3 text-xl text-center">OYEN Grid</th>
                  <th className="py-6 px-8 text-[#A1A1AA] font-medium border-b border-[#1F1F1F] w-1/3 text-lg text-center opacity-60">The "Multiple Tools" Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="py-6 px-8 text-white font-medium">Programme Management</td>
                  <td className="py-6 px-8 border-x border-x-[#1F1F1F] bg-[#C8A95A]/[0.02]">
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#C8A95A]" />
                      <span className="text-[#C8A95A] font-medium text-sm">Unified architecture</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <div className="flex flex-col items-center gap-2 opacity-60">
                      <XCircle className="w-6 h-6 text-[#A1A1AA]" />
                      <span className="text-[#A1A1AA] text-sm">Spreadsheets & Google Docs</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="py-6 px-8 text-white font-medium">Session Delivery</td>
                  <td className="py-6 px-8 border-x border-x-[#1F1F1F] bg-[#C8A95A]/[0.02]">
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#C8A95A]" />
                      <span className="text-[#C8A95A] font-medium text-sm">Integrated live rooms</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <div className="flex flex-col items-center gap-2 opacity-60">
                      <XCircle className="w-6 h-6 text-[#A1A1AA]" />
                      <span className="text-[#A1A1AA] text-sm">Lost Zoom links in email</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="py-6 px-8 text-white font-medium">Storage & Assets</td>
                  <td className="py-6 px-8 border-x border-x-[#1F1F1F] bg-[#C8A95A]/[0.02]">
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#C8A95A]" />
                      <span className="text-[#C8A95A] font-medium text-sm">Auto-saved to module</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <div className="flex flex-col items-center gap-2 opacity-60">
                      <XCircle className="w-6 h-6 text-[#A1A1AA]" />
                      <span className="text-[#A1A1AA] text-sm">Manual Drive folder sharing</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="py-6 px-8 text-white font-medium">Communication</td>
                  <td className="py-6 px-8 border-x border-x-[#1F1F1F] bg-[#C8A95A]/[0.02]">
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#C8A95A]" />
                      <span className="text-[#C8A95A] font-medium text-sm">In-platform messaging</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <div className="flex flex-col items-center gap-2 opacity-60">
                      <XCircle className="w-6 h-6 text-[#A1A1AA]" />
                      <span className="text-[#A1A1AA] text-sm">Noisy Slack/WhatsApp channels</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="py-6 px-8 text-white font-medium">Participant Tracking</td>
                  <td className="py-6 px-8 border-x border-x-[#1F1F1F] bg-[#C8A95A]/[0.02]">
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#C8A95A]" />
                      <span className="text-[#C8A95A] font-medium text-sm">Automated analytics</span>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <div className="flex flex-col items-center gap-2 opacity-60">
                      <XCircle className="w-6 h-6 text-[#A1A1AA]" />
                      <span className="text-[#A1A1AA] text-sm">Manual roll calls</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
