"use client";

import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

export default function AISummariesProductUpdate() {
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
              Resources &gt; Product Updates
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              AI Summaries feature live
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/55">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Published: June 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Read time: 3 min
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl bg-white/5 border border-white/10 mb-12 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/product-update.png" alt="AI Summaries feature live" className="w-full h-full object-cover" />
          </div>

          {/* Article Content */}
          <article className="prose prose-invert max-w-none text-white/75 space-y-6 leading-relaxed text-sm md:text-base font-light mb-16">
            <p>
              We are excited to release the OYEN AI Summaries engine across all active enterprise workspaces. This update completely automates session reviews, transcription logs, and action assignment pipelines.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">Instant Session Outlines</h3>
            <p>
              Right after an OYEN Live session ends, OYEN AI processes the transcribed call history to draft concise summary bullet points outlining critical takeaways.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">Automatic Task Generation</h3>
            <p>
              In addition to summarizing conversations, the engine identifies action points and auto-assigns them to respective team members or learners inside the database.
            </p>
          </article>

          {/* Related resources section */}
          <div className="border-t border-white/10 pt-10 mt-16">
            <h4 className="text-lg font-bold text-white mb-6">Related Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Using AI session notes effectively", href: "/features/ai-session-notes" },
                { title: "Scaling training programs successfully", href: "/resources/guides/scaling-training-programs" }
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
