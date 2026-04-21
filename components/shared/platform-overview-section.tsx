"use client"

import { BookOpen, Calendar, Film, LayoutGrid, Clock, Users, PlayCircle, FolderArchive } from "lucide-react"

export function PlatformOverviewSection() {
  return (
    <section className="w-full bg-[#0B0B0F] py-24 border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center max-w-3xl mx-auto leading-tight">
          Everything your organisation needs — <span className="text-[#C8A95A]">in one system</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programme Management */}
          <div className="bg-[#121212] rounded-3xl p-8 border border-[#1F1F1F] flex flex-col group hover:border-[#C8A95A]/50 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#C8A95A]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A95A]/20 transition-colors">
              <BookOpen className="w-7 h-7 text-[#C8A95A]" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Programme Management</h3>
            <p className="text-[#A1A1AA] mb-8 leading-relaxed">
              Create, structure, and manage complex programmes with ease. From curriculum design to participant tracking.
            </p>
            {/* UI Mock: Programme Modules */}
            <div className="mt-auto bg-[#0A0A0A] rounded-xl border border-[#1F1F1F] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-white text-sm font-medium">Curriculum</span>
                <span className="text-[#C8A95A] text-xs">4 Modules</span>
              </div>
              <div className="flex items-center gap-3 bg-[#121212] p-2 rounded border border-[#1F1F1F]">
                <LayoutGrid className="w-4 h-4 text-[#A1A1AA]" />
                <div className="h-2 w-24 bg-[#A1A1AA]/50 rounded" />
              </div>
              <div className="flex items-center gap-3 bg-[#121212] p-2 rounded border border-[#1F1F1F]">
                <LayoutGrid className="w-4 h-4 text-[#A1A1AA]" />
                <div className="h-2 w-16 bg-[#A1A1AA]/50 rounded" />
              </div>
              <div className="flex items-center gap-3 bg-[#121212] p-2 rounded border border-[#1F1F1F]">
                <LayoutGrid className="w-4 h-4 text-[#A1A1AA]" />
                <div className="h-2 w-20 bg-[#A1A1AA]/50 rounded" />
              </div>
            </div>
          </div>

          {/* Session Delivery */}
          <div className="bg-[#121212] rounded-3xl p-8 border border-[#1F1F1F] flex flex-col group hover:border-[#C8A95A]/50 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#C8A95A]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A95A]/20 transition-colors">
              <Calendar className="w-7 h-7 text-[#C8A95A]" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Session Delivery</h3>
            <p className="text-[#A1A1AA] mb-8 leading-relaxed">
              Schedule, manage, and deliver training sessions with full control over attendance, reminders, and links.
            </p>
            {/* UI Mock: Session Calendar */}
            <div className="mt-auto bg-[#0A0A0A] rounded-xl border border-[#1F1F1F] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-white text-sm font-medium">Upcoming</span>
                <span className="text-[#A1A1AA] text-xs">This Week</span>
              </div>
              <div className="flex border-l-2 border-[#C8A95A] pl-3 py-1 flex-col gap-1">
                <div className="h-2 w-32 bg-[#C8A95A]/80 rounded" />
                <div className="flex items-center gap-2 mt-1 text-[#A1A1AA]">
                  <Clock className="w-3 h-3" />
                  <div className="h-1.5 w-12 bg-[#A1A1AA]/30 rounded" />
                  <Users className="w-3 h-3 ml-2" />
                  <div className="h-1.5 w-8 bg-[#A1A1AA]/30 rounded" />
                </div>
              </div>
              <div className="flex border-l-2 border-[#1F1F1F] pl-3 py-1 flex-col gap-1 mt-2">
                <div className="h-2 w-24 bg-[#A1A1AA]/50 rounded" />
                <div className="flex items-center gap-2 mt-1 text-[#A1A1AA]">
                  <Clock className="w-3 h-3" />
                  <div className="h-1.5 w-16 bg-[#A1A1AA]/30 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Recordings & Storage */}
          <div className="bg-[#121212] rounded-3xl p-8 border border-[#1F1F1F] flex flex-col group hover:border-[#C8A95A]/50 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#C8A95A]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A95A]/20 transition-colors">
              <Film className="w-7 h-7 text-[#C8A95A]" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Recordings & Storage</h3>
            <p className="text-[#A1A1AA] mb-8 leading-relaxed">
              Automatically store, organise, and permission session recordings and materials in a secure media library.
            </p>
            {/* UI Mock: Media Grid */}
            <div className="mt-auto bg-[#0A0A0A] rounded-xl border border-[#1F1F1F] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-2">
                <span className="text-white text-sm font-medium">Library</span>
                <FolderArchive className="w-4 h-4 text-[#A1A1AA]" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-[#121212] border border-[#1F1F1F] rounded aspect-video flex items-center justify-center relative overflow-hidden group/vid">
                  <PlayCircle className="w-6 h-6 text-[#A1A1AA] group-hover/vid:text-[#C8A95A] transition-colors z-10" />
                  <div className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-[8px] text-white">45:20</div>
                </div>
                <div className="bg-[#121212] border border-[#1F1F1F] rounded aspect-video flex items-center justify-center relative overflow-hidden group/vid">
                  <PlayCircle className="w-6 h-6 text-[#A1A1AA] group-hover/vid:text-[#C8A95A] transition-colors z-10" />
                  <div className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-[8px] text-white">1:12:05</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-[#1F1F1F] rounded mt-1" />
              <div className="h-1.5 w-2/3 bg-[#1F1F1F] rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
