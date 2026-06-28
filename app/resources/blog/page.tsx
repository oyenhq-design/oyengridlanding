"use client";

import { useState } from "react";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Clock, Calendar, Search, Sparkles, 
  Layers, BookOpen, Shield, Globe, FileText, Activity, Mail,
  TrendingUp, ArrowUpRight
} from "lucide-react";

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Product Updates",
    "AI & Automation",
    "Learning Operations",
    "Enterprise Insights",
    "Customer Stories",
    "Best Practices"
  ];

  // Article database
  const featuredLarge = {
    category: "Customer Stories",
    title: "AltSchool saves 4 hours weekly per cohort",
    desc: "Automated tracking scaled AltSchool programs to 2,400+ active learners across technical tracks.",
    href: "/resources/blog/altschool-saves-4-hours-weekly",
    readTime: "4 min read",
    date: "June 2026",
    image: "/customer-story.png",
    author: "OYEN GRID Team"
  };

  const featuredSide = [
    {
      category: "Case Studies",
      title: "TalentQL scales training across 3 countries",
      href: "/resources/blog/talentql-scales-training-across-three-countries",
      readTime: "6 min read",
      image: "/case-study.png",
      author: "OYEN GRID Team"
    },
    {
      category: "Product Updates",
      title: "AI Summaries feature live",
      href: "/resources/blog/introducing-ai-summaries",
      readTime: "3 min read",
      image: "/product-update.png",
      author: "OYEN GRID Team"
    },
    {
      category: "Guides",
      title: "Scaling training programs successfully",
      href: "/resources/blog/scaling-training-programs-successfully",
      readTime: "5 min read",
      image: "/insights-laptop.png",
      author: "OYEN GRID Team"
    }
  ];

  const continueReading = [
    { title: "How to automate attendance validation", cat: "Learning Operations", readTime: "3 min read", img: "/case-study.png" },
    { title: "Building enterprise training workflows", cat: "Best Practices", readTime: "4 min read", img: "/insights-laptop.png" },
    { title: "Introducing AI Session Notes", cat: "AI & Automation", readTime: "2 min read", img: "/product-update.png" },
    { title: "Managing multiple training cohorts", cat: "Learning Operations", readTime: "5 min read", img: "/customer-story.png" },
    { title: "How facilitators use OYEN GRID", cat: "Learning Operations", readTime: "4 min read", img: "/case-study.png" },
    { title: "Building reports for sponsors", cat: "Enterprise Insights", readTime: "6 min read", img: "/insights-laptop.png" },
    { title: "Managing webinars with OYEN Live", cat: "AI & Automation", readTime: "4 min read", img: "/product-update.png" }
  ];

  const browseCategories = [
    { name: "Product Updates", count: 12, desc: "Release logs and platform additions." },
    { name: "Customer Stories", count: 8, desc: "How organizations drive efficiency." },
    { name: "Case Studies", count: 15, desc: "Deep integrations and impact metrics." },
    { name: "AI Features", count: 7, desc: "Intelligent workflow summaries." },
    { name: "Learning Operations", count: 24, desc: "Optimizing cohort logistics." },
    { name: "Enterprise Infrastructure", count: 9, desc: "Databases, latency, and compliance." },
    { name: "Security & Compliance", count: 6, desc: "Granular access and SOC 2." },
    { name: "Best Practices", count: 20, desc: "Setup guides for large workspaces." }
  ];

  return (
    <>
      <Header />
      <AnnouncementBar />

      <main className="min-h-screen bg-[#070913] text-white selection:bg-[#FFC72C] selection:text-black antialiased pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-8">
          
          {/* ─── 1. RICH HERO SECTION WITH STATS ─────────────────────────────────── */}
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#FFC72C] uppercase block mb-4">
                RESOURCES HUB
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                OYEN GRID Blog
              </h1>
              <p className="text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
                Insights, customer stories, AI updates, implementation guides, and best practices for running modern organizations.
              </p>
            </div>
            
            {/* Stats block */}
            <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-3 bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              <div>
                <span className="text-[10px] text-white/40 uppercase font-black block">Articles</span>
                <span className="text-xl lg:text-2xl font-black text-white">250+</span>
              </div>
              <div className="border-l lg:border-l-0 lg:border-t border-white/10 pl-4 lg:pl-0 lg:pt-3">
                <span className="text-[10px] text-white/40 uppercase font-black block">Categories</span>
                <span className="text-xl lg:text-2xl font-black text-white">8 Hubs</span>
              </div>
              <div className="border-l lg:border-l-0 lg:border-t border-white/10 pl-4 lg:pl-0 lg:pt-3">
                <span className="text-[10px] text-white/40 uppercase font-black block">Updates</span>
                <span className="text-xl lg:text-2xl font-black text-[#FFC72C]">Weekly</span>
              </div>
            </div>
          </div>

          {/* ─── 2. SEARCH BAR & FILTERS ─────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-white/10 pb-8 mb-16">
            
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search articles, attendance, reports, webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-full bg-white/[0.02] border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFC72C]/40"
              />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeCategory === cat 
                      ? "bg-[#FFC72C] text-black" 
                      : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* ─── 3. FEATURED ARTICLES WITH PRESET IMAGES ──────────────────────── */}
          {(activeCategory === "All" || activeCategory === "Customer Stories" || activeCategory === "Case Studies" || activeCategory === "Product Updates") && (
            <section className="mb-24">
              <h2 className="text-xl font-bold tracking-tight text-white mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Large Featured Card (AltSchool saves 4 hours weekly) */}
                <div className="lg:col-span-7 rounded-[24px] bg-[#111638]/60 border border-white/5 hover:border-white/10 flex flex-col overflow-hidden group transition-all">
                  <div className="relative h-[240px] md:h-[300px] w-full overflow-hidden">
                    <Image
                      src={featuredLarge.image}
                      alt={featuredLarge.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070913] to-transparent" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black tracking-widest text-[#FFC72C] bg-[#FFC72C]/10 px-2.5 py-1 rounded">
                          {featuredLarge.category}
                        </span>
                        <span className="text-xs text-white/40">📖 {featuredLarge.readTime}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                        {featuredLarge.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                        {featuredLarge.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/5 pt-5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white/50">By {featuredLarge.author}</span>
                        <span className="text-xs text-white/30">•</span>
                        <span className="text-xs text-white/40">{featuredLarge.date}</span>
                      </div>
                      <Link
                        href={featuredLarge.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFC72C] hover:text-[#FFD45B]"
                      >
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Side grid with images */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {featuredSide.map((post, idx) => (
                    <div key={idx} className="rounded-[18px] bg-white/[0.02] border border-white/5 hover:border-white/10 overflow-hidden flex transition-all group">
                      <div className="relative w-1/3 min-h-[140px] overflow-hidden shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[9px] font-bold text-[#FFC72C] uppercase tracking-widest">{post.category}</span>
                            <span className="text-[10px] text-white/40">📖 {post.readTime}</span>
                          </div>
                          <h4 className="text-sm font-bold text-white leading-snug">{post.title}</h4>
                        </div>
                        <Link href={post.href} className="text-xs font-bold text-[#FFC72C] hover:text-[#FFD45B] mt-4 flex items-center gap-1">
                          Read Story <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          )}

          {/* ─── 4. CONTINUE READING WITH THUMBNAILS ─────────────────────────── */}
          <section className="mb-24">
            <h2 className="text-xl font-bold tracking-tight text-white mb-8">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {continueReading
                .filter(post => activeCategory === "All" || post.cat === activeCategory)
                .map((post, idx) => (
                  <div key={idx} className="rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 overflow-hidden flex flex-col transition-all group min-h-[300px]">
                    <div className="relative h-[140px] w-full overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-2.5">
                          <span className="text-[9px] font-bold text-[#FFC72C] uppercase tracking-widest">{post.cat}</span>
                          <span className="text-[10px] text-white/45">📖 {post.readTime}</span>
                        </div>
                        <h4 className="text-[14px] font-bold text-white leading-snug">{post.title}</h4>
                      </div>
                      <Link href="/resources/blog" className="text-xs font-bold text-white/50 hover:text-[#FFC72C] mt-4 flex items-center gap-1 group-hover:text-[#FFC72C]">
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* ─── 5. BROWSE BY CATEGORY AS CLICKABLE CARDS ─────────────────────── */}
          <section className="mb-24 border-t border-white/5 pt-16">
            <h2 className="text-xl font-bold tracking-tight text-white mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {browseCategories.map((bc, idx) => (
                <Link 
                  key={idx} 
                  href="/resources/blog"
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all flex flex-col justify-between min-h-[160px] group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-white group-hover:text-[#FFC72C] transition-colors">{bc.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#FFC72C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-[11.5px] text-white/50 leading-relaxed font-light mb-4">{bc.desc}</p>
                  </div>
                  <span className="text-xs font-black text-[#FFC72C]">{bc.count} Articles</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ─── 6. POPULAR READS & LATEST UPDATES (BALANCED COLUMNS) ─────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-white/5 pt-16">
            
            {/* Popular Reads */}
            <div className="bg-white/[0.01] border border-white/5 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                <span>⭐</span> Popular Reads
              </h3>
              <ul className="space-y-6">
                {[
                  "AltSchool saves 4 hours weekly",
                  "How AI Session Notes work",
                  "Scaling enterprise training",
                  "Managing 10,000 learners",
                  "Enterprise infrastructure explained"
                ].map((item, idx) => (
                  <li key={idx} className="text-xs font-bold text-white/70 hover:text-[#FFC72C] cursor-pointer flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="flex items-center gap-3">
                      <span className="text-[#FFC72C] font-black text-xs">0{idx + 1}.</span> 
                      <span>{item}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/20" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Updates */}
            <div className="bg-white/[0.01] border border-white/5 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-8">Latest Product Updates</h3>
              <ul className="space-y-6">
                {[
                  "Version 2.6 Released",
                  "AI Coordination launched",
                  "New Analytics Dashboard",
                  "Improved Attendance Engine",
                  "Live Session Recorder"
                ].map((item, idx) => (
                  <li key={idx} className="text-xs font-medium text-white/55 hover:text-white cursor-pointer flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </span>
                    <span className="text-[10px] text-white/30">Stable Release</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ─── 7. NEWSLETTER SUBSCRIPTION (EXPANDED PADDING) ────────────────── */}
          <section className="py-24 px-12 rounded-3xl bg-gradient-to-tr from-[#111638]/80 to-[#090C1E]/80 border border-white/5 p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <span className="text-[10px] font-black tracking-widest text-[#FFC72C] uppercase">NEWSLETTER</span>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">Stay ahead of every OYEN GRID update.</h3>
            <p className="text-white/60 text-sm max-w-xl leading-relaxed">
              Get product releases, customer stories, AI features, implementation guides, and best practices delivered monthly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-4">
              <div className="relative flex-1 w-full">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  placeholder="Enter work email"
                  className="w-full h-11 pl-10 pr-4 rounded-full bg-black/40 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFC72C]/40"
                />
              </div>
              <button className="w-full sm:w-auto h-11 px-6 rounded-full bg-[#FFC72C] hover:bg-[#FFD45B] text-black text-xs font-bold uppercase tracking-wider transition-all">
                Subscribe
              </button>
            </div>
          </section>

        </div>
      </main>

      <FooterPremium hideCTA={true} />
    </>
  );
}
