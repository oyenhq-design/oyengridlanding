"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Globe, Users, Database, Workflow, Sparkles, Search, ChevronRight, Play } from "lucide-react";
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

      <svg className="w-[115%] h-[115%] opacity-100 text-[#D4A017]" viewBox="0 0 800 600" fill="none">
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
              className="absolute rounded-full bg-[#D4A017]"
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
    <section
      className="relative min-h-[680px] flex items-center mt-[-176px] pt-[190px] pb-8 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >

      {/* Extremely subtle warm tint vignette — barely perceptible depth */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #FBFAF7 0%, transparent 70%)" }}
      />

      {/* Very faint warm gold radial glow behind product visual area */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(212,160,23,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-8 w-full flex flex-col relative z-20">

        {/* Main Columns Grid */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center min-h-[500px] relative">

          {/* LEFT: CONTENT AREA */}
          <div className="hero-content flex flex-col justify-center text-left lg:translate-y-[-24px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Headline — navy + signature gold split */}
              <h1 className="text-[52px] sm:text-[68px] lg:text-[76px] font-black leading-[1.04] tracking-tight select-none" style={{ color: "#071426" }}>
                Run your organization <br />
                <span style={{ color: "#D4A017" }}>without the chaos.</span>
              </h1>

              {/* Body copy — secondary grey */}
              <p className="text-[16px] sm:text-[17.5px] font-medium leading-[1.65] mt-6 max-w-[520px] tracking-wide" style={{ color: "#667085" }}>
                Manage training, teams, communication, AI workflows, reporting, and enterprise operations from one secure platform.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-9">
                {/* Primary — gold */}
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center h-[47px] px-9 rounded-full text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "#D4A017",
                    color: "#071426",
                    boxShadow: "0 4px 20px rgba(212,160,23,0.25)"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#C8931A")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#D4A017")}
                >
                  Book a Demo
                </Link>
                {/* Secondary — white / navy / light border */}
                <button
                  className="inline-flex items-center justify-center gap-2.5 h-[47px] px-9 rounded-full text-[13px] font-bold uppercase tracking-wider transition-all duration-300"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #D0D5DD",
                    color: "#071426"
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4A017";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#D0D5DD";
                  }}
                >
                  Watch Demo <Play size={14} className="fill-current" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: HERO MOCK-UP — grounded with ambient glow + elevation */}
          <div className="relative h-[480px] lg:h-[550px] flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full max-w-[600px] z-10"
              style={{
                filter: "drop-shadow(0 24px 70px rgba(7,20,38,0.10)) drop-shadow(0 8px 24px rgba(7,20,38,0.06))"
              }}
            >
              <Image
                src="/hero-mockup-clean.jpg"
                alt="OYEN GRID Platform Mockup"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

        </div>

        {/* TRUST BAR — light borders, navy numbers */}
        <div
          className="mt-8 md:mt-10 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-8 relative"
          style={{ borderTop: "1px solid #EAECF0", borderBottom: "1px solid #EAECF0" }}
        >

          {/* Label */}
          <span className="text-[11px] font-black tracking-[0.25em] uppercase select-none shrink-0" style={{ color: "#A97800" }}>
            Built for modern organizations
          </span>

          {/* Vertical divider on desktop */}
          <div className="hidden md:block w-px h-8" style={{ background: "#EAECF0" }} />

          {/* Metrics */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 md:gap-x-12 gap-y-6 w-full md:w-auto">
            {[
              { value: "50+", label: "Organizations" },
              { value: "18K+", label: "Learners" },
              { value: "250K+", label: "Training Activities" },
              { value: "99.9%", label: "Uptime" }
            ].map((metric, index, arr) => (
              <div key={index} className="flex items-center gap-8">
                <div className="flex flex-col items-center md:items-start select-none">
                  <span className="text-2xl md:text-3xl font-black leading-none tracking-tight" style={{ color: "#071426" }}>
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-1.5" style={{ color: "#98A2B3" }}>
                    {metric.label}
                  </span>
                </div>
                {index < arr.length - 1 && (
                  <div className="hidden sm:block h-8 w-px shrink-0" style={{ background: "#EAECF0" }} />
                )}
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
    <section className="section-gap relative bg-[#071426] border-b border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-[60px] items-center">

          {/* LEFT: Content */}
          <div>
            <span className="eyebrow">CORE INFRASTRUCTURE</span>
            <h2 className="mb-6 max-w-[480px] text-[#FFFFFF] text-3xl md:text-4xl font-extrabold tracking-tight">
              Built for <span className="text-[#D4A017]">training</span> delivery.
            </h2>
            <p className="text-[14.5px] text-[#E2E8F0] leading-relaxed mb-10 max-w-[480px] font-light">
              Our infrastructure is designed for high-stakes program coordination, providing the stability and visibility required by global organisations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#D4A017]/30 hover:scale-[1.02] transition-all duration-300 shadow-lg flex flex-col justify-between min-h-[140px]">
                  <cap.icon className="w-5.5 h-5.5 text-[#D4A017] mb-3.5" />
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071426] via-transparent to-transparent opacity-90" />

              {/* Floating Detail */}
              <div className="absolute top-6 left-6 glass-panel-institutional p-3.5 flex items-center gap-3">
                <div className="w-7 h-7 rounded-[6px] bg-[#D4A017]/10 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-[#D4A017]" />
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
    <section className="section-gap relative bg-[#071426] border-b border-white/5">
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
              <div className="absolute inset-0 bg-gradient-to-bl from-[#071426]/90 via-transparent to-transparent opacity-90" />
            </div>
          </div>

          {/* RIGHT: Narrative */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">COMMAND & CONTROL</span>
            <h2 className="mb-6 max-w-[480px] text-[#FFFFFF] text-3xl md:text-4xl font-extrabold tracking-tight">
              Complete <span className="text-[#D4A017]">operational</span> orchestration.
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
                  <div className="w-9 h-9 rounded-lg bg-[#D4A017]/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
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
