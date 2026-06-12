"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import {
  Check, ChevronDown, ArrowRight, ArrowUpRight,
  Users, PlayCircle, Globe, Network, Lock, Layers, Zap,
  Bot, ShieldCheck, Database, Activity, Star,
  Building2, BookOpen, Cpu, BarChart3, Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── TYPES ──────────────────────────────────────────────────────────────────

type SolutionType = "bootcamps" | "events" | "education" | "enterprise";

interface PlanFeatures {
  basic: string[];
  standard: string[];
  premium: string[];
  premiumPlus: string[];
}

// ─── SVG ICONS ───────────────────────────────────────────────────────────────

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
    </svg>
  );
}

function NetworkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="16" y="16" width="6" height="6" rx="1"/>
      <rect x="2" y="16" width="6" height="6" rx="1"/>
      <rect x="9" y="2" width="6" height="6" rx="1"/>
      <path d="M12 8v8M12 16H5M12 16h7"/>
    </svg>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const solutionsList = [
  {
    id: "bootcamps" as SolutionType,
    title: "Bootcamps & Training",
    icon: BookOpen,
    color: "#E8B84A",
    bgGlow: "rgba(232,184,74,0.06)",
    audience: ["Bootcamps", "Training Organizations", "Workforce Development", "Fellowship Programmes"],
    tagline: "Structured cohort-based programme delivery at scale.",
  },
  {
    id: "events" as SolutionType,
    title: "Webinars & Events",
    icon: PlayCircle,
    color: "#34d399",
    bgGlow: "rgba(52,211,153,0.06)",
    audience: ["Webinars", "Workshops", "Masterclasses", "Virtual Events"],
    tagline: "Live coordination infrastructure for events and conferences.",
  },
  {
    id: "education" as SolutionType,
    title: "Education & Institutions",
    icon: GraduationCapIcon,
    color: "#60a5fa",
    bgGlow: "rgba(96,165,250,0.06)",
    audience: ["Universities", "Colleges", "Academies", "Learning Institutions"],
    tagline: "Academic systems and institutional learning infrastructure.",
  },
  {
    id: "enterprise" as SolutionType,
    title: "Enterprise Operations",
    icon: NetworkIcon,
    color: "#a78bfa",
    bgGlow: "rgba(167,139,250,0.06)",
    audience: ["NGOs", "Corporate Training Teams", "Internal Operations", "Institutional Coordination"],
    tagline: "Large-scale internal operations and coordination infrastructure.",
  },
];

const pricingData: Record<SolutionType, PlanFeatures> = {
  bootcamps: {
    basic: [
      "Up to 3 Programmes",
      "Up to 50 Participants",
      "Live Sessions",
      "Attendance Tracking",
      "Resource Library",
      "Assessments",
      "Certificates",
      "Programme Dashboard",
      "AI Learning Assistant",
    ],
    standard: [
      "Up to 10 Programmes",
      "Up to 200 Participants",
      "Session Recordings",
      "Cohort Analytics",
      "Participant Tracking",
      "AI Session Summaries",
      "Advanced Reports",
      "Cohort Communication",
    ],
    premium: [
      "Up to 25 Programmes",
      "Up to 500 Participants",
      "Executive Dashboards",
      "Governance Controls",
      "AI Operational Intelligence",
      "Multi-Team Collaboration",
    ],
    premiumPlus: [
      "Unlimited Programmes",
      "Unlimited Participants",
      "White Label Capabilities",
      "API Access",
      "Dedicated Infrastructure",
      "Dedicated Support",
    ],
  },
  events: {
    basic: [
      "Event Registration",
      "Attendance Tracking",
      "Live Streaming",
      "Polls & Q&A",
      "Basic Analytics",
    ],
    standard: [
      "Session Recordings",
      "Audience Analytics",
      "AI Event Summaries",
      "Engagement Reports",
      "Multi-Speaker Support",
    ],
    premium: [
      "Multi-Event Management",
      "Executive Reporting",
      "Sponsor Analytics",
      "Operational Insights",
      "Custom Branding",
    ],
    premiumPlus: [
      "Unlimited Events",
      "White Label Events",
      "API Access",
      "Dedicated Infrastructure",
      "Dedicated Support",
    ],
  },
  education: {
    basic: [
      "Student Management",
      "Classes & Scheduling",
      "Attendance Tracking",
      "Assessments",
      "Learning Resources",
    ],
    standard: [
      "Faculty Management",
      "Academic Analytics",
      "Student Performance Tracking",
      "AI Academic Summaries",
      "Curriculum Tools",
    ],
    premium: [
      "Institutional Reporting",
      "Governance Controls",
      "Department Coordination",
      "Executive Dashboards",
      "Multi-Campus Support",
    ],
    premiumPlus: [
      "Enterprise Academic Deployment",
      "Custom Integrations",
      "API Access",
      "Dedicated Infrastructure",
      "Dedicated Support",
    ],
  },
  enterprise: {
    basic: [
      "Team Management",
      "Internal Communication",
      "Attendance Tracking",
      "Resource Library",
      "Basic Dashboard",
    ],
    standard: [
      "Department Coordination",
      "Workflow Monitoring",
      "Reporting Dashboards",
      "AI Summaries",
      "Role-Based Access",
    ],
    premium: [
      "Governance Controls",
      "Executive Dashboards",
      "Operational Intelligence",
      "Multi-Team Collaboration",
      "Audit Logs",
    ],
    premiumPlus: [
      "Enterprise Deployment",
      "Custom Integrations",
      "API Access",
      "Dedicated Infrastructure",
      "Dedicated Support",
    ],
  },
};

const plans = [
  {
    key: "basic" as const,
    name: "Basic",
    price: "₦25,000",
    period: "/month",
    tagline: "Coordinate core operational structures easily.",
    cta: "Get Started",
    href: "/pricing/basic",
    highlight: false,
    planLabel: "INCLUDED FEATURES",
  },
  {
    key: "standard" as const,
    name: "Standard",
    price: "₦50,000",
    period: "/month",
    tagline: "Expand and coordinate distributed operations.",
    cta: "Get Started",
    href: "/pricing/standard",
    highlight: false,
    planLabel: "EVERYTHING IN BASIC PLUS",
  },
  {
    key: "premium" as const,
    name: "Premium",
    price: "₦100,000",
    period: "/month",
    tagline: "Complete control, compliance, and automation.",
    cta: "Get Started",
    href: "/pricing/premium",
    highlight: true,
    badge: "Most Popular",
    planLabel: "EVERYTHING IN STANDARD PLUS",
  },
  {
    key: "premiumPlus" as const,
    name: "Premium+",
    price: "Talk to Sales",
    period: "",
    tagline: "Dedicated nodes for national and global-scale sync.",
    cta: "Talk to Architects",
    href: "/pricing/enterprise",
    highlight: false,
    planLabel: "ENTERPRISE READY",
  },
];

const aiAllocation = [
  {
    plan: "Basic",
    title: "Basic AI Allocation",
    desc: "Provides core operational assistance for small teams getting started.",
    features: ["Limited AI Credits", "Basic AI Summaries"],
    icon: Bot,
    level: 20,
    color: "#94a3b8",
  },
  {
    plan: "Standard",
    title: "Standard AI Allocation",
    desc: "Unlocks contextual summaries and participant highlights.",
    features: ["Expanded AI Usage", "Session Summaries", "Cohort Insights"],
    icon: Sparkles,
    level: 50,
    color: "#60a5fa",
  },
  {
    plan: "Premium",
    title: "Premium AI Allocation",
    desc: "Engineered for institutional decision layer telemetry.",
    features: ["Operational Intelligence", "Advanced Analytics", "Governance Insights"],
    icon: Cpu,
    level: 82,
    color: "#E8B84A",
  },
  {
    plan: "Premium+",
    title: "Enterprise AI Allocation",
    desc: "Custom allocation configured for global high-stakes operations.",
    features: ["Custom AI Allocation", "Dedicated AI Models", "Priority Inference"],
    icon: BarChart3,
    level: 100,
    color: "#a78bfa",
  },
];

const comparisonTable = [
  { feature: "Programmes", basic: "Up to 3", standard: "Up to 10", premium: "Up to 25", plus: "Unlimited" },
  { feature: "Participants", basic: "50 / group", standard: "200 / group", premium: "500 / group", plus: "Unlimited" },
  { feature: "Storage", basic: "10 GB", standard: "50 GB", premium: "200 GB", plus: "Dedicated / Unlimited" },
  { feature: "AI Usage", basic: "Limited Credits", standard: "Expanded Credits", premium: "Operational Core", plus: "Custom Allocation" },
  { feature: "Reports", basic: "Basic", standard: "Advanced PDF", premium: "Executive Custom", plus: "Verified Board Reports" },
  { feature: "Dashboards", basic: "Core Overview", standard: "Cohort Dashboard", premium: "Cross-Team Intelligence", plus: "Custom White-Label Console" },
  { feature: "Governance", basic: "Owner role only", standard: "Facilitator roles", premium: "Institutional Controls", plus: "SOC2 / Audit Logs" },
  { feature: "Integrations", basic: "Zapier Core", standard: "Slack & Calendar", premium: "Database Integrations", plus: "Custom API & Webhooks" },
  { feature: "Support", basic: "Email Support", standard: "Priority Email", premium: "24/7 Slack Connect", plus: "Dedicated Architect Node" },
];

const enterpriseBenefits = [
  { title: "Secure & Reliable", desc: "Military-grade end-to-end encryption with 99.99% uptime SLA.", icon: Lock, color: "#34d399" },
  { title: "Dedicated Support", desc: "Your own Solutions Architect available on-demand.", icon: Users, color: "#60a5fa" },
  { title: "Governance & Compliance", desc: "Full SOC2, ISO, and audit log tracking systems.", icon: ShieldCheck, color: "#E8B84A" },
  { title: "Scalable Infrastructure", desc: "Resilient multi-region nodes synced with low latency.", icon: Globe, color: "#a78bfa" },
  { title: "API Access", desc: "Connect existing systems, CRM, and databases directly.", icon: Zap, color: "#f97316" },
  { title: "White Label", desc: "Brand OYEN GRID as your own internal operational portal.", icon: Layers, color: "#34d399" },
];

const faqs = [
  {
    q: "Can I change plans later?",
    a: "Yes, you can upgrade or downgrade your subscription tier at any time. When upgrading, changes are applied instantly and prorated. Downgrades take effect at the start of your next billing period.",
  },
  {
    q: "Is annual billing available?",
    a: "Absolutely. We offer annual payment cycles which include a 20% discount across all Standard and Premium plans. Contact our billing team or adjust settings in your portal to switch.",
  },
  {
    q: "What happens when I exceed limits?",
    a: "If you exceed your plan's participant or programme thresholds, OYEN GRID will notify you. We offer grace margins, but continued overages will prompt an upgrade or overage billing adjustment.",
  },
  {
    q: "How does AI usage work?",
    a: "Each plan includes a monthly credit quota. Basic credits run core utilities, while Standard/Premium unlock session summarization and predictive telemetry. Quotas reset monthly.",
  },
  {
    q: "Do institutions receive discounts?",
    a: "Yes, we offer special pricing structures for registered non-profits, academic universities, and public institutions. Talk to our solutions team to verify eligibility.",
  },
  {
    q: "What is included in Premium+?",
    a: "Premium+ is custom-built for large institutions. It includes dedicated cloud infrastructure, unlimited capacities, custom AI models, custom integrations, API keys, and white-labeling.",
  },
];

// ─── CORNER DETAIL COMPONENT ─────────────────────────────────────────────────

function CornerDetail({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  return (
    <div className={cn(
      "absolute w-20 h-20 pointer-events-none opacity-[0.06]",
      position === "top-left" && "top-6 left-6 border-t border-l border-white",
      position === "top-right" && "top-6 right-6 border-t border-r border-white",
      position === "bottom-left" && "bottom-6 left-6 border-b border-l border-white",
      position === "bottom-right" && "bottom-6 right-6 border-b border-r border-white",
    )}>
      <div className={cn(
        "absolute w-1.5 h-1.5 bg-white rounded-full",
        position === "top-left" && "-top-0.5 -left-0.5",
        position === "top-right" && "-top-0.5 -right-0.5",
        position === "bottom-left" && "-bottom-0.5 -left-0.5",
        position === "bottom-right" && "-bottom-0.5 -right-0.5",
      )} />
    </div>
  );
}

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

export default function PricingPage() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionType>("bootcamps");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const plansRef = useRef<HTMLElement>(null);

  const activeSolution = solutionsList.find((s) => s.id === selectedSolution)!;

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#05070B] selection:bg-brand-gold selection:text-black antialiased overflow-x-hidden transition-colors duration-300">
      <Header />
      <AnnouncementBar />

      {/* ════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white dark:bg-[#050816] border-b border-slate-200 dark:border-white/[0.05]">
        {/* Background System */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dot Grid */}
          <div
            className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035]"
            style={{ backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)", backgroundSize: "36px 36px" }}
          />
          {/* Gold Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(232,184,74,0.07),transparent_65%)] dark:opacity-100 opacity-40" />
          {/* Right Accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.04),transparent_60%)]" />
        </div>

        <CornerDetail position="top-left" />
        <CornerDetail position="top-right" />
        <CornerDetail position="bottom-left" />
        <CornerDetail position="bottom-right" />

        <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E8B84A]/8 border border-[#E8B84A]/20 dark:bg-[#E8B84A]/5 dark:border-[#E8B84A]/15 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B88918] dark:bg-[#E8B84A] animate-pulse" />
              <span className="text-[10px] font-black text-[#9a6f0e] dark:text-[#E8B84A] tracking-[0.22em] uppercase">
                Unified Operating System
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[48px] md:text-[68px] lg:text-[78px] font-extrabold text-slate-900 dark:text-white leading-[0.95] tracking-[-0.05em] mb-6 max-w-4xl mx-auto">
              Simple pricing.{" "}
              <br className="hidden md:block" />
              <span
                className="italic font-serif font-medium"
                style={{ color: "#B88918" }}
              >
                Powerful operational
              </span>{" "}
              <span
                className="italic font-serif font-medium"
                style={{ color: "#B88918" }}
              >
                outcomes.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-[17px] md:text-[19px] text-slate-500 dark:text-white/55 leading-relaxed font-normal max-w-2xl mx-auto mb-10">
              Choose the solution that matches your organization.
              Whether you&apos;re running bootcamps, managing educational institutions,
              hosting events, or coordinating enterprise operations,{" "}
              <span className="text-slate-700 dark:text-white/80 font-medium">
                OYEN GRID scales with your needs.
              </span>
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-slate-400 dark:text-white/25 tracking-widest uppercase mb-10">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34d399]" />
                Enterprise Ready
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/10" />
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#60a5fa]" />
                SOC2 Compliant
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/10" />
              <span className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#E8B84A]" />
                99.99% Uptime SLA
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/10" />
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#a78bfa]" />
                Multi-Region Infrastructure
              </span>
            </div>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToPlans}
                className="group h-12 px-8 rounded-[13px] bg-[#E8B84A] text-black font-black text-[12px] uppercase tracking-wider flex items-center gap-2.5 hover:bg-[#FFCF68] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(232,184,74,0.18)] dark:shadow-[0_8px_24px_rgba(232,184,74,0.12)]"
              >
                View Pricing Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <Link
                href="/pricing/enterprise"
                className="h-12 px-8 rounded-[13px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-slate-900 dark:text-white font-bold text-[12px] hover:bg-slate-50 dark:hover:bg-white/[0.05] transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                Talk to Sales
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. CHOOSE YOUR SOLUTION
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 dark:bg-[#020408] border-b border-slate-200 dark:border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[10px] font-black text-[#B88918] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              Personalized View
            </span>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Choose Your Solution
            </h2>
            <p className="text-[14px] text-slate-500 dark:text-white/45 max-w-lg mx-auto">
              Select your organization type — pricing content and feature descriptions update instantly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutionsList.map((sol, i) => {
              const Icon = sol.icon;
              const isActive = selectedSolution === sol.id;
              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  onClick={() => setSelectedSolution(sol.id)}
                  className={cn(
                    "group relative p-6 rounded-[20px] border cursor-pointer transition-all duration-300 flex flex-col gap-4 overflow-hidden",
                    isActive
                      ? "bg-white dark:bg-white/[0.04] border-[#B88918] dark:border-[#E8B84A]/40 shadow-[0_6px_24px_rgba(184,137,24,0.08)] dark:shadow-[0_6px_30px_rgba(232,184,74,0.08)]"
                      : "bg-white/60 dark:bg-white/[0.015] border-slate-200 dark:border-white/[0.05] hover:bg-white dark:hover:bg-white/[0.03] hover:border-slate-300 dark:hover:border-white/[0.1] hover:shadow-sm"
                  )}
                >
                  {/* Active Glow */}
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-50"
                      style={{ background: `radial-gradient(ellipse at top left, ${sol.bgGlow}, transparent 70%)` }}
                    />
                  )}

                  {/* Active dot */}
                  {isActive && (
                    <div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: sol.color }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 relative z-10",
                      isActive
                        ? "border-current/20"
                        : "bg-slate-100 dark:bg-white/[0.05] border-transparent text-slate-500 dark:text-white/40"
                    )}
                    style={isActive ? { backgroundColor: `${sol.color}15`, borderColor: `${sol.color}25`, color: sol.color } : undefined}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h3
                      className={cn(
                        "text-[15px] font-bold tracking-tight mb-2 transition-colors",
                        isActive ? "" : "text-slate-900 dark:text-white"
                      )}
                      style={isActive ? { color: sol.color } : undefined}
                    >
                      {sol.title}
                    </h3>
                    <p className="text-[11.5px] text-slate-500 dark:text-white/35 leading-snug mb-3">
                      {sol.tagline}
                    </p>

                    {/* Audience tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {sol.audience.map((a) => (
                        <span
                          key={a}
                          className={cn(
                            "text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border transition-all",
                            isActive
                              ? "border-current/20"
                              : "bg-slate-100 dark:bg-white/[0.04] border-transparent text-slate-500 dark:text-white/25"
                          )}
                          style={isActive ? { color: sol.color, backgroundColor: `${sol.color}10`, borderColor: `${sol.color}20` } : undefined}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active solution indicator */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSolution}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="mt-8 flex items-center justify-center gap-3"
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: activeSolution.color }}
              />
              <span className="text-[11px] font-semibold text-slate-500 dark:text-white/40 tracking-wider">
                Showing pricing for:{" "}
                <span className="font-black text-slate-800 dark:text-white/75">
                  {activeSolution.title}
                </span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. PRICING PLANS
      ════════════════════════════════════════════════════════════════ */}
      <section ref={plansRef} className="py-24 bg-white dark:bg-[#05070B] border-b border-slate-200 dark:border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-black text-[#B88918] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              Plan Options
            </span>
            <h2 className="text-[30px] md:text-[40px] font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Flexible tiers for any scale
            </h2>
            <p className="text-[14px] text-slate-500 dark:text-white/45">
              Feature descriptions adapt to your selected solution. Pricing remains unified.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {plans.map((plan, i) => {
              const features = pricingData[selectedSolution][plan.key];
              return (
                <motion.div
                  key={plan.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={cn(
                    "relative rounded-[22px] border p-6 flex flex-col justify-between transition-all duration-300 group overflow-hidden",
                    plan.highlight
                      ? "bg-white dark:bg-white/[0.025] border-[#B88918] dark:border-[#E8B84A]/35 shadow-[0_8px_32px_rgba(184,137,24,0.1)] dark:shadow-[0_12px_40px_rgba(232,184,74,0.08)] hover:border-[#B88918] dark:hover:border-[#E8B84A]/60"
                      : "bg-white dark:bg-white/[0.015] border-slate-200 dark:border-white/[0.05] shadow-sm hover:border-slate-300 dark:hover:border-white/[0.12] hover:shadow-md"
                  )}
                >
                  {/* Premium Glow BG */}
                  {plan.highlight && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,184,74,0.04),transparent_60%)] pointer-events-none" />
                  )}

                  {/* Recommended Badge */}
                  {plan.badge && (
                    <div className="absolute top-4 right-5 px-2.5 py-0.5 rounded-full bg-[#E8B84A]/10 border border-[#E8B84A]/25 text-[8.5px] font-black text-[#B88918] dark:text-[#E8B84A] uppercase tracking-widest flex items-center gap-1">
                      <Star className="w-2.5 h-2.5" />
                      {plan.badge}
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Plan Label */}
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest",
                      plan.highlight ? "text-[#B88918] dark:text-[#E8B84A]" : "text-slate-400 dark:text-white/30"
                    )}>
                      {plan.name}
                    </span>

                    {/* Price */}
                    <div className="mt-4 mb-1 flex items-baseline gap-1">
                      <span className={cn(
                        "font-extrabold tracking-tighter leading-none",
                        plan.key === "premiumPlus" ? "text-[22px]" : "text-[34px]",
                        "text-slate-900 dark:text-white"
                      )}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-[12px] text-slate-400 dark:text-white/35 font-medium">
                          {plan.period}
                        </span>
                      )}
                    </div>

                    <p className="text-[11.5px] text-slate-500 dark:text-white/38 leading-snug mb-6 font-normal">
                      {plan.tagline}
                    </p>

                    <div className="h-px bg-slate-200 dark:bg-white/[0.06] mb-6" />

                    {/* Features header */}
                    <h4 className="text-[9.5px] font-black tracking-widest text-slate-400 dark:text-white/20 uppercase mb-4">
                      {plan.planLabel}
                    </h4>

                    {/* Feature List - animated on solution change */}
                    <AnimatePresence mode="wait">
                      <motion.ul
                        key={`${plan.key}-${selectedSolution}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.28 }}
                        className="space-y-3"
                      >
                        {features.map((feat, fi) => (
                          <li key={fi} className="flex items-start gap-2.5 text-[12px] text-slate-600 dark:text-white/60 font-medium">
                            <Check
                              className="w-3.5 h-3.5 shrink-0 mt-0.5"
                              style={{ color: plan.highlight ? "#B88918" : "#64748b" }}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.05] relative z-10">
                    <Link
                      href={plan.href}
                      className={cn(
                        "w-full h-11 rounded-xl flex items-center justify-center gap-2 text-[11.5px] font-black uppercase tracking-wider transition-all group/btn",
                        plan.highlight
                          ? "bg-[#E8B84A] text-black hover:bg-[#FFCF68] shadow-[0_4px_16px_rgba(232,184,74,0.18)] hover:shadow-[0_6px_20px_rgba(232,184,74,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                          : "border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.15]"
                      )}
                    >
                      {plan.cta}
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform opacity-60" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. AI ALLOCATION SECTION
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-[#020408] border-b border-slate-200 dark:border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-black text-[#B88918] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              Intelligence Allocation
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              AI Coordination Credits by Plan
            </h2>
            <p className="text-[14px] text-slate-500 dark:text-white/45 max-w-md mx-auto">
              Each plan unlocks a different tier of AI capabilities — from basic summaries to full operational intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiAllocation.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.plan}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative p-6 rounded-[20px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-white/[0.12] transition-all group overflow-hidden"
                >
                  {/* Level bar background glow */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] opacity-60"
                    style={{ backgroundColor: tier.color }}
                  />

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-all"
                    style={{ backgroundColor: `${tier.color}12`, borderColor: `${tier.color}22`, color: tier.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-[9px] font-black uppercase tracking-[0.25em] mb-1" style={{ color: tier.color }}>
                    {tier.plan}
                  </div>
                  <h4 className="text-[14px] font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                    {tier.title}
                  </h4>
                  <p className="text-[11.5px] text-slate-500 dark:text-white/40 leading-snug mb-5">
                    {tier.desc}
                  </p>

                  {/* AI Level Progress */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9.5px] font-bold text-slate-400 dark:text-white/30 uppercase tracking-wider">AI Level</span>
                      <span className="text-[11px] font-black" style={{ color: tier.color }}>
                        {tier.level === 100 ? "Max" : `${tier.level}%`}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: tier.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tier.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-white/[0.05]">
                    {tier.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-white/55 font-medium">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: tier.color }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          5. PLAN COMPARISON TABLE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-[#05070B] border-b border-slate-200 dark:border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-black text-[#B88918] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              Comparison
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Compare plan capabilities
            </h2>
            <p className="text-[14px] text-slate-500 dark:text-white/45">
              A full side-by-side overview to help you choose the right tier.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full overflow-x-auto rounded-[20px] border border-slate-200 dark:border-white/[0.06] shadow-sm"
          >
            <table className="w-full min-w-[750px] text-left border-collapse bg-white dark:bg-white/[0.01]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02]">
                  <th className="p-5 text-[11px] font-black text-slate-600 dark:text-white/50 tracking-widest uppercase w-[28%]">
                    Capability
                  </th>
                  <th className="p-5 text-[11px] font-black text-slate-600 dark:text-white/50 tracking-widest uppercase">
                    Basic
                  </th>
                  <th className="p-5 text-[11px] font-black text-slate-600 dark:text-white/50 tracking-widest uppercase">
                    Standard
                  </th>
                  <th className="p-5 text-[11px] font-black text-[#B88918] dark:text-[#E8B84A] tracking-widest uppercase">
                    ★ Premium
                  </th>
                  <th className="p-5 text-[11px] font-black text-slate-600 dark:text-white/50 tracking-widest uppercase">
                    Premium+
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/[0.04]">
                {comparisonTable.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="hover:bg-slate-50/50 dark:hover:bg-white/[0.012] transition-colors"
                  >
                    <td className="p-5 text-[13px] font-bold text-slate-900 dark:text-white">{row.feature}</td>
                    <td className="p-5 text-[12px] text-slate-500 dark:text-white/50 font-medium">{row.basic}</td>
                    <td className="p-5 text-[12px] text-slate-500 dark:text-white/50 font-medium">{row.standard}</td>
                    <td className="p-5 text-[12px] text-slate-700 dark:text-white/75 font-semibold">{row.premium}</td>
                    <td className="p-5 text-[12px] font-bold" style={{ color: "#B88918" }}>{row.plus}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          6. ENTERPRISE BENEFITS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-[#020408] border-b border-slate-200 dark:border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-black text-[#B88918] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              Institutional Grade
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Enterprise Infrastructure
            </h2>
            <p className="text-[14px] text-slate-500 dark:text-white/45 max-w-md mx-auto">
              Built to meet the standards of the world's most demanding organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {enterpriseBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative p-7 rounded-[20px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-white/[0.12] transition-all group overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${item.color}08, transparent 65%)` }}
                  />

                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300"
                    style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}20`, color: item.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight mb-2 relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-[12.5px] text-slate-500 dark:text-white/40 leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          7. FAQ SECTION
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-[#05070B] border-b border-slate-200 dark:border-white/[0.04]">
        <div className="max-w-[820px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-black text-[#B88918] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              FAQ
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={cn(
                    "rounded-[16px] border overflow-hidden transition-all duration-300",
                    isOpen
                      ? "bg-white dark:bg-white/[0.025] border-[#B88918]/30 dark:border-[#E8B84A]/25 shadow-[0_4px_16px_rgba(184,137,24,0.05)]"
                      : "bg-white dark:bg-white/[0.015] border-slate-200 dark:border-white/[0.05] shadow-sm hover:border-slate-300 dark:hover:border-white/[0.1]"
                  )}
                >
                  <button
                    id={`faq-${i}`}
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      "text-[14px] font-bold tracking-tight transition-colors pr-4",
                      isOpen ? "text-[#B88918] dark:text-[#E8B84A]" : "text-slate-900 dark:text-white group-hover:text-[#B88918] dark:group-hover:text-[#E8B84A]"
                    )}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-all duration-300 shrink-0",
                        isOpen ? "rotate-180 text-[#B88918] dark:text-[#E8B84A]" : "text-slate-400 dark:text-white/25"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-[13.5px] text-slate-500 dark:text-white/48 leading-relaxed border-t border-slate-100 dark:border-white/[0.05]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          8. FINAL CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden bg-[#050816] dark:bg-[#020306] border-b border-white/[0.04]">
        {/* Background system */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(232,184,74,0.07),transparent_60%)]" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(96,165,250,0.04),transparent_65%)] blur-[60px]" />
        </div>

        <CornerDetail position="top-left" />
        <CornerDetail position="top-right" />
        <CornerDetail position="bottom-left" />
        <CornerDetail position="bottom-right" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/15 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] animate-pulse" />
              <span className="text-[9.5px] font-black text-[#E8B84A] tracking-[0.22em] uppercase">
                Deployment Protocol Ready
              </span>
            </div>

            <h2 className="text-[42px] md:text-[62px] font-extrabold text-white leading-[0.95] tracking-[-0.05em] mb-8">
              Ready to coordinate your{" "}
              <br className="hidden md:block" />
              <span className="text-[#E8B84A] italic font-serif font-medium">
                organization at scale?
              </span>
            </h2>

            <p className="text-[15px] md:text-[17px] text-white/45 leading-relaxed mb-12 max-w-xl mx-auto">
              Join leading academies, event organizers, and institutions using
              OYEN GRID for institutional sync and live operational coordination.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/pricing/premium"
                className="group h-13 px-10 rounded-[14px] bg-[#E8B84A] text-black font-black text-[13px] uppercase tracking-wider flex items-center gap-2.5 hover:bg-[#FFCF68] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_12px_32px_rgba(232,184,74,0.22)]"
                style={{ height: "52px" }}
              >
                Start Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/pricing/enterprise"
                className="h-[52px] px-10 rounded-[14px] border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white font-bold text-[13px] hover:bg-white/[0.07] hover:border-white/20 transition-all flex items-center gap-2.5 uppercase tracking-wider"
              >
                Talk to Sales
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
            </div>

            {/* Telemetry Row */}
            <div className="mt-16 pt-10 border-t border-white/[0.05] grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { icon: Globe, label: "Global Nodes", val: "SYNCED" },
                { icon: ShieldCheck, label: "Security", val: "ACTIVE" },
                { icon: Activity, label: "Latency", val: "0.8ms" },
                { icon: Zap, label: "Status", val: "NOMINAL" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-1">
                      <Icon className="w-4 h-4 text-white/20" />
                    </div>
                    <span className="text-[9.5px] font-black text-white/30 uppercase tracking-[0.25em]">{item.label}</span>
                    <span className="text-[12px] font-bold text-[#E8B84A] tracking-widest">{item.val}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <FooterPremium />
    </main>
  );
}
