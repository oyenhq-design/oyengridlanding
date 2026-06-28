"use client";

import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

export default function AltSchoolCaseStudy() {
  return (
    <>
      <Header />
      <AnnouncementBar />

      <main className="min-h-screen bg-[#070913] text-white selection:bg-[#FFC72C] selection:text-black antialiased pt-28 pb-24">
        <div className="max-w-[800px] mx-auto px-6">
          
          {/* Back link */}
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#FFC72C] uppercase block mb-4">
              Resources &gt; Blog &gt; Case Studies
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              AltSchool saves 4 hours weekly per cohort managing training operations
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/55">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Published: June 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Read time: 4 min
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl bg-white/5 border border-white/10 mb-12 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/customer-story.png" alt="AltSchool saves 4 hours weekly" className="w-full h-full object-cover" />
          </div>

          {/* Article Content */}
          <article className="prose prose-invert max-w-none text-white/75 space-y-6 leading-relaxed text-sm md:text-base font-light mb-16">
            <p>
              AltSchool is one of the fastest-growing learning networks, delivering high-impact technical programs to thousands of active learners. However, scaling to this level introduced significant administrative block points, particularly around session coordination, attendance validation, and manual roster management.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">The Challenge: Manual Administrative Friction</h3>
            <p>
              With over 2,400 active learners spread across multiple cohort timelines, the operations team was spending more than 15 hours every week simply validating live session attendance, cross-referencing CSV exports, and manually updating progression logs.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">The Solution: Automated Roster Tracking</h3>
            <p>
              By migrating their operations to OYEN GRID, AltSchool automated their entire live session delivery and check-in pipeline. OYEN Live automatically records attendance durations, maps them directly to corresponding learner profiles, and flags drop-out risks before they decline.
            </p>
            <blockquote className="border-l-2 border-[#FFC72C] pl-4 italic text-white/90 my-6">
              "OYEN GRID removed the busywork entirely. We saved over 4 hours weekly per cohort track, allowing our facilitators to focus on actual student reviews rather than spreadsheet logs."
            </blockquote>
          </article>

          {/* Related resources section */}
          <div className="border-t border-white/10 pt-10 mt-16">
            <h4 className="text-lg font-bold text-white mb-6">Related Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "How TalentQL scaled training across 3 countries", href: "/resources/blog/talentql-scales-training-across-three-countries" },
                { title: "AI Summaries feature live", href: "/resources/blog/introducing-ai-summaries" }
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
