"use client"

import { Plus, Users, PlayCircle, Settings, FileText, CheckCircle2 } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section className="w-full bg-[#0B0B0F] py-24 md:py-32 border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center">
          See how <span className="text-[#C8A95A]">OYEN Grid</span> works
        </h2>
        
        <div className="flex flex-col gap-24 md:gap-32">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C8A95A]/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-[#121212] border border-[#1F1F1F] rounded-2xl p-6 shadow-2xl">
                {/* UI Mock: Create Programme */}
                <div className="flex items-center gap-4 border-b border-[#1F1F1F] pb-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C8A95A]/20 flex items-center justify-center">
                    <Plus className="w-5 h-5 text-[#C8A95A]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">New Programme</h4>
                    <p className="text-[#A1A1AA] text-xs">Set up curriculum and timeline</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-10 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] flex items-center px-4">
                    <div className="h-2 w-32 bg-[#A1A1AA]/50 rounded" />
                  </div>
                  <div className="h-24 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] p-4 flex flex-col gap-2">
                    <div className="h-2 w-48 bg-[#A1A1AA]/50 rounded" />
                    <div className="h-2 w-full bg-[#A1A1AA]/30 rounded" />
                    <div className="h-2 w-2/3 bg-[#A1A1AA]/30 rounded" />
                  </div>
                  <div className="flex justify-end pt-2">
                    <div className="h-8 w-24 bg-[#C8A95A] rounded flex items-center justify-center">
                      <span className="text-black text-xs font-semibold">Create</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-full bg-[#C8A95A]/10 flex items-center justify-center mb-6 border border-[#C8A95A]/20">
                <span className="text-[#C8A95A] font-bold text-xl">1</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Create Your Programme</h3>
              <p className="text-lg text-[#A1A1AA] leading-relaxed mb-6">
                Start by mapping out your curriculum. Define modules, set prerequisites, and establish the timeline. OYEN Grid’s flexible architecture adapts to any programme structure, from week-long bootcamps to multi-year corporate training.
              </p>
              <ul className="space-y-3">
                {['Custom templates', 'Drag-and-drop modules', 'Cohort management'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#A1A1AA]">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A95A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="w-12 h-12 rounded-full bg-[#C8A95A]/10 flex items-center justify-center mb-6 border border-[#C8A95A]/20">
                <span className="text-[#C8A95A] font-bold text-xl">2</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Invite & Run Sessions</h3>
              <p className="text-lg text-[#A1A1AA] leading-relaxed mb-6">
                Enrol participants and let the system handle the rest. Automated calendar invites, reminders, and secure session links ensure everyone is exactly where they need to be, exactly when they need to be there.
              </p>
              <ul className="space-y-3">
                {['Automated scheduling', 'Attendance tracking', 'Live delivery tools'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#A1A1AA]">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A95A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[#C8A95A]/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-[#121212] border border-[#1F1F1F] rounded-2xl p-6 shadow-2xl">
                {/* UI Mock: Session List */}
                <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-4 mb-4">
                  <h4 className="text-white font-medium text-sm">Today's Sessions</h4>
                  <div className="text-[#C8A95A] text-xs px-2 py-1 bg-[#C8A95A]/10 rounded">Live Now</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-[#1A1A1A] border border-[#C8A95A]/30 rounded-lg p-3 flex justify-between items-center relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8A95A]" />
                    <div>
                      <div className="text-white text-sm font-medium mb-1">Module 1: Foundations</div>
                      <div className="flex items-center gap-2 text-[#A1A1AA] text-xs">
                        <Users className="w-3 h-3" /> 45/50 Joined
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[#C8A95A]/20 flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-[#C8A95A] rounded-full" />
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 flex justify-between items-center opacity-60">
                    <div>
                      <div className="text-white text-sm font-medium mb-1">Module 2: Advanced</div>
                      <div className="text-[#A1A1AA] text-xs">Starts in 2 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C8A95A]/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-[#121212] border border-[#1F1F1F] rounded-2xl p-6 shadow-2xl">
                {/* UI Mock: Access Recordings */}
                <div className="flex items-center gap-4 border-b border-[#1F1F1F] pb-4 mb-4">
                  <h4 className="text-white font-medium text-sm">Media Library</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden group">
                    <div className="aspect-video bg-[#0A0A0A] relative flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors" />
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-[10px] text-white">1:45:00</div>
                    </div>
                    <div className="p-3">
                      <div className="text-white text-xs font-medium truncate">Foundations Recording</div>
                      <div className="text-[#A1A1AA] text-[10px] mt-1">Added 2 hrs ago</div>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden group">
                    <div className="aspect-video bg-[#0A0A0A] relative flex items-center justify-center">
                      <FileText className="w-8 h-8 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors" />
                    </div>
                    <div className="p-3">
                      <div className="text-white text-xs font-medium truncate">Presentation Deck</div>
                      <div className="text-[#A1A1AA] text-[10px] mt-1">PDF Document</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-full bg-[#C8A95A]/10 flex items-center justify-center mb-6 border border-[#C8A95A]/20">
                <span className="text-[#C8A95A] font-bold text-xl">3</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Access & Analyse</h3>
              <p className="text-lg text-[#A1A1AA] leading-relaxed mb-6">
                Post-session, everything is automatically organised. Recordings are processed, attendance is logged, and materials are secured. Review granular analytics to improve your next cohort.
              </p>
              <ul className="space-y-3">
                {['Automatic recording storage', 'Granular analytics', 'Role-based access'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#A1A1AA]">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A95A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}