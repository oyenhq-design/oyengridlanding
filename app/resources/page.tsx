"use client";

import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookOpen, Activity, Globe, HelpCircle } from "lucide-react";

export default function ResourcesPage() {
  const posts = [
    {
      id: "altschool-case-study",
      category: "Case Studies",
      title: "AltSchool saves 4 hours weekly per cohort",
      desc: "Automated tracking scaled AltSchool programs to 2,400+ active learners.",
      href: "/resources/blog/altschool-saves-4-hours-weekly",
      readTime: "4 min read",
      date: "June 2026",
      tag: "CASE STUDY",
      color: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: "talentql-case-study",
      category: "Case Studies",
      title: "TalentQL scales training across 3 countries",
      desc: "Centralized operations enabled multi-country scale without administrative overhead.",
      href: "/resources/blog/talentql-scales-training-across-three-countries",
      readTime: "6 min read",
      date: "June 2026",
      tag: "CASE STUDY",
      color: "border-purple-500/20 hover:border-purple-500/40"
    },
    {
      id: "ai-summaries",
      category: "Product Updates",
      title: "AI Summaries feature live",
      desc: "Generate cohort summaries and action items instantly from live sessions.",
      href: "/resources/blog/introducing-ai-summaries",
      readTime: "3 min read",
      date: "June 2026",
      tag: "PRODUCT UPDATE",
      color: "border-[#FFC72C]/20 hover:border-[#FFC72C]/40"
    },
    {
      id: "scaling-training",
      category: "Guides",
      title: "Scaling training programs successfully",
      desc: "Avoid administrative friction points when scaling enterprise learning cohorts.",
      href: "/resources/blog/scaling-training-programs-successfully",
      readTime: "5 min read",
      date: "June 2026",
      tag: "GUIDE",
      color: "border-emerald-500/20 hover:border-emerald-500/40"
    }
  ];

  return (
    <>
      <Header />
      <AnnouncementBar />

      <main className="min-h-screen bg-[#070913] text-white selection:bg-[#FFC72C] selection:text-black antialiased pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-8">
          
          {/* Header */}
          <div className="mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#FFC72C] uppercase block mb-4">
              RESOURCES HUB
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Insights, Guides, &amp;{" "}
              <span className="text-[#FFC72C] italic font-serif font-normal">
                Stories
              </span>
            </h1>
            <p className="text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
              Explore resources to help you automate operations, evaluate program performance, and scale technical training pipelines.
            </p>
          </div>

          {/* Quick Hub Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
            {[
              { title: "Documentation", desc: "Configuration guides and setups.", icon: BookOpen, href: "/resources/docs" },
              { title: "Case Studies", desc: "Customer success outcomes.", icon: Activity, href: "/resources/case-studies" },
              { title: "Blog", desc: "Platform updates and training tips.", icon: Globe, href: "/resources/blog" },
              { title: "Help Center", desc: "Instant FAQ answers.", icon: HelpCircle, href: "/resources/help" }
            ].map((hub, idx) => (
              <Link key={idx} href={hub.href} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <hub.icon className="w-5 h-5 text-[#FFC72C]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{hub.title}</h4>
                  <p className="text-xs text-white/50">{hub.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Article List Section */}
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-4 mb-8">
              <h2 className="text-xl font-bold text-white">All Articles &amp; Updates</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div 
                  key={post.id} 
                  id={post.id}
                  className={`p-8 rounded-[20px] bg-white/[0.02] border flex flex-col justify-between min-h-[280px] transition-all duration-300 scroll-mt-28 ${post.color}`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9.5px] font-black tracking-wider text-[#FFC72C] bg-[#FFC72C]/10 px-2.5 py-1 rounded-full uppercase">
                        {post.tag}
                      </span>
                      <div className="flex gap-4 text-xs text-white/40">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                      {post.desc}
                    </p>
                  </div>
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFC72C] hover:text-[#FFD45B] w-fit mt-auto"
                  >
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <FooterPremium hideCTA={true} />
    </>
  );
}
