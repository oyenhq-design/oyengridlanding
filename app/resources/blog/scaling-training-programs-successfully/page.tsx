"use client";

import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

export default function ScalingTrainingProgramsGuide() {
  return (
    <>
      <Header />
      <AnnouncementBar />

      <main className="min-h-screen bg-[#070913] text-white selection:bg-[#FFC72C] selection:text-black antialiased pt-28 pb-24">
        <div className="max-w-[800px] mx-auto px-6">
          
          {/* Back link */}
          <Link href="/resources/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
              Resources &gt; Blog &gt; Guides
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              Scaling training programs successfully
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/55">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Published: June 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Read time: 5 min
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl bg-white/5 border border-white/10 mb-12 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/insights-laptop.png" alt="Scaling training programs guide" className="w-full h-full object-cover" />
          </div>

          {/* Article Content */}
          <article className="prose prose-invert max-w-none text-white/75 space-y-6 leading-relaxed text-sm md:text-base font-light mb-16">
            <p>
              Expanding corporate and technical learning initiatives across multiple regions creates operational complexity. This guide covers how to streamline cohort operations, manage reviewer workloads, and minimize administrative drift.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">1. Automate Attendance Check-ins</h3>
            <p>
              Relying on manual spreadsheets or instructor roster verification introduces errors. Implement live zoom/webinar check-in automations to sync presence durations directly with active learner database records.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">2. Enforce Role permission matrices</h3>
            <p>
              Ensure facilitators only access designated cohort workspaces while supervisors retain complete visibility over program dashboards.
            </p>
          </article>

          {/* Related resources section */}
          <div className="border-t border-white/10 pt-10 mt-16">
            <h4 className="text-lg font-bold text-white mb-6">Related Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "AltSchool saves 4 hours weekly per cohort", href: "/resources/blog/altschool-saves-4-hours-weekly" },
                { title: "How TalentQL scaled training across three countries", href: "/resources/blog/talentql-scales-training-across-three-countries" }
              ].map((rel, idx) => (
                <Link key={idx} href={rel.href} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FFC72C]/30 flex flex-col justify-between min-h-[100px] transition-all">
                  <span className="text-[10px] text-white/40 uppercase font-bold">Related Story</span>
                  <span className="text-sm font-semibold text-white/90 group-hover:text-[#FFC72C] mt-2 flex items-center gap-1">
                    {rel.title} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <FooterPremium hideCTA={true} />
    </>
  );
}
