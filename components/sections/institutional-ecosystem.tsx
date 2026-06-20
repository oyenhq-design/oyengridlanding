"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Globe, Users, Database, Workflow, Sparkles, Search, ChevronRight } from "lucide-react";
import { useSearch } from "@/context/search-context";

export function TopographicWave() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const pathsCount = 18;
  const centerX = 440;
  const centerY = 300;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Subtle gold radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,199,44,0.08),transparent_70%)] pointer-events-none" />

      <svg className="w-[115%] h-[115%] opacity-100 text-[#FFC72C]" viewBox="0 0 800 600" fill="none">
        {Array.from({ length: pathsCount }).map((_, index) => {
          const radius = 90 + index * 16;
          const opacity = 0.95 - (index / pathsCount) * 0.78;
          const strokeWidth = 1 + (index % 2) * 0.4;

          // Generate wavy concentric loop paths
          const points = [];
          const steps = 64;
          for (let i = 0; i <= steps; i++) {
            const theta = (i / steps) * 2 * Math.PI;
            // Distortions to represent coordinates and network flow
            const wave1 = Math.sin(theta * 2) * 20;
            const wave2 = Math.cos(theta * 3) * 12;
            const r = radius + wave1 + wave2;
            const x = centerX + r * Math.cos(theta) * 1.25;
            const y = centerY + r * Math.sin(theta) * 0.95;
            points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
          }
          const pathData = points.join(' ') + ' Z';

          return (
            <motion.path
              key={index}
              d={pathData}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeOpacity={opacity}
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{
                pathLength: 1,
                rotate: [0, 360],
              }}
              transition={{
                pathLength: { duration: 2.2 + index * 0.08, ease: "easeInOut" },
                rotate: { duration: 75 + index * 4, repeat: Infinity, ease: "linear" }
              }}
              style={{ transformOrigin: "440px 300px" }}
            />
          );
        })}
      </svg>

      {/* Dynamic Gold Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && Array.from({ length: 22 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const delay = Math.random() * 6;
          const duration = Math.random() * 12 + 10;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#FFC72C]"
              style={{
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
                boxShadow: "0 0 6px rgba(255,199,44,0.95)",
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 24 - 12, 0],
                opacity: [0, 0.75, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function HeroInstitutional() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const protocols = [
    { title: "Pricing & Plans", category: "Pricing", href: "/pricing" },
    { title: "Bootcamps & Training", category: "Solutions", href: "/solutions/bootcamps-training" },
    { title: "Webinars & Events", category: "Solutions", href: "/solutions/webinars-events" },
    { title: "Schools & Academies", category: "Solutions", href: "/solutions/education" },
    { title: "Corporate Training", category: "Solutions", href: "/solutions/enterprise" },
    { title: "Program Management", category: "Features", href: "/features/programme-management" },
    { title: "Learner Management", category: "Features", href: "/features/participant-management" },
    { title: "OYEN Live", category: "Features", href: "/features/oyen-live" },
    { title: "Auto Attendance", category: "Features", href: "/features/attendance-intelligence" },
    { title: "Assessments", category: "Features", href: "/features/assessments" },
    { title: "Certificates & Verification", category: "Features", href: "/features/certificates" },
    { title: "Resources", category: "Features", href: "/features/resource-library" },
    { title: "Reports", category: "Features", href: "/features/analytics" },
    { title: "AI Assistant", category: "Features", href: "/features/ai-assistant" },
    { title: "About Us", category: "Company", href: "/company/about" },
    { title: "Careers", category: "Company", href: "/company/careers" },
    { title: "Contact Us", category: "Company", href: "/company/contact" },
    { title: "Enterprise Sales Consultation", category: "Company", href: "/company/enterprise-sales" },
    { title: "Documentation & Guides", category: "Resources", href: "/resources/docs" },
    { title: "Case Studies", category: "Resources", href: "/resources/case-studies" },
    { title: "Blog & Insights", category: "Resources", href: "/resources/blog" },
    { title: "Help Center & FAQs", category: "Resources", href: "/resources/help" }
  ];

  const filtered = query
    ? protocols.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    )
    : [];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const trustLogos = [
    { name: "AltSchool", icon: <circle cx="12" cy="12" r="7" fill="currentColor" /> },
    { name: "Zuri", icon: <path d="M6 6h12l-12 12h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /> },
    { name: "Ingressive for Good", icon: <path d="M6 18l6-6-6-6M13 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /> },
    { name: "uLesson", icon: <path d="M8 5v14l11-7z" fill="currentColor" /> },
    { name: "TalentQL", icon: <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" /> },
    { name: "She Code Africa", icon: <path d="M8 17l-5-5 5-5M16 17l5-5-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /> },
    { name: "GomyCode", icon: <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" /> }
  ];

  return (
    <section className="relative min-h-[680px] bg-[#0C1029] flex items-center pt-8 pb-8 overflow-hidden">

      {/* Rich atmospheric glows — gold + blue */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-[#FFC72C]/[0.06] blur-[120px] rounded-full" />
        <div className="absolute top-[10%] right-[0%] w-[500px] h-[500px] bg-[#3B6FE8]/[0.07] blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[400px] bg-[#1A3A7A]/[0.08] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-8 w-full flex flex-col relative z-20">

        {/* Main Columns Grid */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center min-h-[500px] relative">

          {/* LEFT: CONTENT AREA */}
          <div className="hero-content flex flex-col justify-center text-left lg:translate-y-[-48px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Headline */}
              <h1 className="text-[52px] sm:text-[68px] font-bold leading-[1.04] tracking-tight text-[#FFFFFF] select-none">
                Run your training program <br />
                <span className="text-[#FFC72C]">without the chaos.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-[16px] sm:text-[17.5px] text-[#E2E8F0] font-medium leading-[1.6] mt-6 max-w-[480px] tracking-wide">
                Run programs, track learners, and report results. All in one place.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#FFC72C] text-[#0B0B0B] text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#FFD45B] hover:shadow-[0_4px_16px_rgba(255,199,44,0.3)] hover:scale-[1.02]"
                >
                  Book a Demo
                </Link>
                <button className="inline-flex items-center justify-center gap-2 h-[46px] px-8 rounded-full border border-white/20 hover:border-white/40 text-[#FFFFFF] text-[13px] font-bold uppercase tracking-wider transition-all duration-300 bg-transparent hover:bg-white/5">
                  Watch Demo <span className="text-[11px] leading-none ml-1">▷</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: DYNAMIC VECTOR WAVE GRAPHIC */}
          <div className="relative h-[480px] lg:h-[550px] flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <TopographicWave />
            </motion.div>
          </div>

          {/* CENTERED SCROLL TO EXPLORE INDICATOR */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-[145px] flex-col items-center gap-2.5 z-30">
            <div className="w-[26px] h-[42px] rounded-full border border-[#FFC72C]/40 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-[#FFC72C] rounded-full"
              />
            </div>
            <span className="text-[9px] font-bold tracking-[0.22em] text-[#FFC72C]/50 uppercase">scroll to explore</span>
          </div>

        </div>

        {/* TOP: REDESIGNED PREMIUM TRUST BAR */}
        <div className="mt-6 border border-white/[0.07] rounded-2xl bg-[#0A0D1A]/60 backdrop-blur-md px-10 py-5 flex flex-col gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.8)]" style={{borderColor: "rgba(59,111,232,0.12)"}}>
          <span className="text-[9px] font-black tracking-[0.24em] text-[#FFC72C] uppercase text-center select-none">
            Trusted by organisations
          </span>
          <div className="w-full h-px bg-white/5" />
          <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6 w-full px-4">
            {trustLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-colors duration-300 select-none">
                <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="none">
                  {logo.icon}
                </svg>
                <span className="text-[12px] font-bold uppercase tracking-wider">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export function PlatformOverview() {
  const capabilities = [
    { title: "Program Governance", desc: "Control and oversight for all program operations and delivery integrity.", icon: Database },
    { title: "Learner Control", desc: "Management with real-time attendance, engagement, and cohort tracking.", icon: Users },
    { title: "Delivery Coordination", desc: "Orchestrate live sessions and resource allocation across distributed teams.", icon: Workflow },
    { title: "Operational Visibility", desc: "Live dashboards for monitoring metrics, session activity, and throughput.", icon: Globe }
  ];

  return (
    <section className="section-gap relative bg-[#0B0B0B] border-b border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-[60px] items-center">

          {/* LEFT: Content */}
          <div>
            <span className="eyebrow">CORE INFRASTRUCTURE</span>
            <h2 className="mb-6 max-w-[480px] text-[#FFFFFF] text-3xl md:text-4xl font-extrabold tracking-tight">
              Built for <span className="text-[#FFC72C]">training</span> delivery.
            </h2>
            <p className="text-[14.5px] text-[#E2E8F0] leading-relaxed mb-10 max-w-[480px] font-light">
              Our infrastructure is designed for high-stakes program coordination, providing the stability and visibility required by global organisations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#FFC72C]/30 hover:scale-[1.02] transition-all duration-300 shadow-lg flex flex-col justify-between min-h-[140px]">
                  <cap.icon className="w-5.5 h-5.5 text-[#FFC72C] mb-3.5" />
                  <div>
                    <h4 className="text-[14.5px] font-bold text-[#FFFFFF] mb-1.5">{cap.title}</h4>
                    <p className="text-[11px] text-[#E2E8F0] leading-relaxed font-light">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contained Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] h-[340px] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/section-2-bg.png"
                alt="Platform"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0B] via-transparent to-transparent opacity-90" />

              {/* Floating Detail */}
              <div className="absolute top-6 left-6 glass-panel-institutional p-3.5 flex items-center gap-3">
                <div className="w-7 h-7 rounded-[6px] bg-[#FFC72C]/10 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-[#FFC72C]" />
                </div>
                <div>
                  <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">Active Sync</div>
                  <div className="text-[13px] font-bold text-white">99.9% Uptime</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function OperationalControlCenter() {
  return (
    <section className="section-gap relative bg-[#0B0B0B] border-b border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-[60px] items-center">

          {/* LEFT: Contained Image (Visual First) */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] h-[340px] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/section-3-bg.png"
                alt="Operations"
                fill
                className="object-cover opacity-60 grayscale scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#0B0B0B]/90 via-transparent to-transparent opacity-90" />
            </div>
          </div>

          {/* RIGHT: Narrative */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">COMMAND & CONTROL</span>
            <h2 className="mb-6 max-w-[480px] text-[#FFFFFF] text-3xl md:text-4xl font-extrabold tracking-tight">
              Complete <span className="text-[#FFC72C]">operational</span> orchestration.
            </h2>
            <p className="text-[14.5px] text-[#E2E8F0] leading-relaxed mb-8 max-w-[480px] font-light">
              Refine the entire lifecycle of your program from one dashboard. Coordinate trainers, monitor engagement, and analyze delivery health in real-time.
            </p>

            <div className="space-y-4">
              {[
                { t: "Live Session Monitoring", d: "Track attendance and engagement as it happens." },
                { t: "Automated Resource Sync", d: "Sync materials and assets across all cohorts." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[#FFC72C]/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#FFFFFF] mb-1">{item.t}</h4>
                    <p className="text-[12px] text-[#E2E8F0]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
