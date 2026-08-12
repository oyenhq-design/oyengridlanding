"use client";

import { useState, useRef, useCallback, Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import {
  Check, ChevronDown, ArrowRight, ArrowUpRight,
  Users, PlayCircle, Globe, Lock, Layers, Zap,
  Bot, ShieldCheck, Activity, Star,
  BookOpen, Cpu, BarChart3, Sparkles,
  Mail, Clock, CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

// ─── TYPES ───────────────────────────────────────────────────────────────────

type SolutionType = "bootcamps" | "events" | "education" | "enterprise";

interface PlanFeatures {
  basic: string[];
  standard: string[];
  premium: string[];
  premiumPlus: string[];
}

interface PlanMeta {
  price: string;
  period: string;
  tagline: string;
}

interface AITier {
  plan: string;
  title: string;
  desc: string;
  features: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  level: number;
  color: string;
}

interface TableRow {
  feature: string;
  basic: string;
  standard: string;
  premium: string;
  plus: string;
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

// ─── SOLUTIONS LIST ───────────────────────────────────────────────────────────

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

// ─── PLAN BASE CONFIG (static — styling, keys, CTAs) ─────────────────────────

const plansBase = [
  {
    key: "basic" as const,
    name: "Basic",
    cta: "Get Started",
    href: "/pricing/basic",
    highlight: false,
    badge: undefined as string | undefined,
    planLabel: "INCLUDED FEATURES",
  },
  {
    key: "standard" as const,
    name: "Standard",
    cta: "Get Started",
    href: "/pricing/standard",
    highlight: false,
    badge: "Most Popular" as string | undefined,
    planLabel: "EVERYTHING IN BASIC PLUS",
  },
  {
    key: "premium" as const,
    name: "Premium",
    cta: "Get Started",
    href: "/pricing/premium",
    highlight: true,
    badge: undefined as string | undefined,
    planLabel: "EVERYTHING IN STANDARD PLUS",
  },
  {
    key: "premiumPlus" as const,
    name: "Premium+",
    cta: "Talk to Architects",
    href: "/pricing/enterprise",
    highlight: false,
    badge: undefined as string | undefined,
    planLabel: "ENTERPRISE READY",
  },
];

// ─── PER-SOLUTION PLAN PRICING & TAGLINES ────────────────────────────────────

const planPricing: Record<SolutionType, PlanMeta[]> = {
  bootcamps: [
    { price: "₦25,000", period: "/month", tagline: "Coordinate core operational structures easily." },
    { price: "₦50,000", period: "/month", tagline: "Expand and coordinate distributed operations." },
    { price: "₦100,000", period: "/month", tagline: "Complete control, compliance, and automation." },
    { price: "Talk to Sales", period: "", tagline: "Dedicated nodes for national and global-scale sync." },
  ],
  events: [
    { price: "₦15,000", period: "/month", tagline: "Launch events and track live attendance." },
    { price: "₦35,000", period: "/month", tagline: "Engage audiences with interactive event tools." },
    { price: "₦75,000", period: "/month", tagline: "Host multi-host events with full intelligence." },
    { price: "Talk to Sales", period: "", tagline: "Enterprise-scale virtual conferences and events." },
  ],
  education: [
    { price: "₦35,000", period: "/month", tagline: "Manage classes, students and academic tracking." },
    { price: "₦75,000", period: "/month", tagline: "Add faculty management and academic analytics." },
    { price: "₦150,000", period: "/month", tagline: "Institutional governance for all departments." },
    { price: "Talk to Sales", period: "", tagline: "Campus-wide deployment for entire institutions." },
  ],
  enterprise: [
    { price: "—", period: "", tagline: "" },
    { price: "—", period: "", tagline: "" },
    { price: "—", period: "", tagline: "" },
    { price: "—", period: "", tagline: "" },
  ],
};

// ─── PER-SOLUTION FEATURE LISTS ──────────────────────────────────────────────

const pricingData: Record<SolutionType, PlanFeatures> = {
  bootcamps: {
    basic: [
      "Up to 3 Programmes",
      "Up to 50 Participants",
      "10GB Storage",
      "Programme Management",
      "Participant Management",
      "Live Sessions",
      "Attendance Tracking",
      "Resource Library",
      "Assessments",
      "Certificates",
      "Announcements",
      "Basic Analytics",
      "Weekly Programme Summary",
      "AI Assistant (limited)",
    ],
    standard: [
      "Up to 10 Programmes",
      "Up to 200 Participants",
      "50GB Storage",
      "Session Recordings",
      "Cohort Management",
      "Advanced Assessments",
      "AI Session Summaries",
      "Facilitator Dashboard",
      "Advanced Analytics",
      "Participant Performance Tracking",
      "Programme Health Score",
      "Certificate Verification",
      "Operational Insights",
    ],
    premium: [
      "Up to 25 Programmes",
      "Up to 500 Participants",
      "200GB Storage",
      "Governance Controls",
      "Executive Dashboard",
      "Multi-Team Collaboration",
      "Advanced Reporting",
      "AI Operational Intelligence",
      "Priority Support",
      "Enhanced Permissions",
    ],
    premiumPlus: [
      "Unlimited Programmes",
      "Unlimited Participants",
      "White Label",
      "API Access",
      "Dedicated Infrastructure",
      "Dedicated Support",
      "Custom Integrations",
    ],
  },

  events: {
    basic: [
      "Event Registration",
      "Event Dashboard",
      "Attendance Reports",
      "Resource Sharing",
      "Session Recording",
      "Basic Analytics",
      "AI Assistant (limited)",
    ],
    standard: [
      "Polls",
      "Surveys",
      "Q&A Management",
      "Speaker Management",
      "AI Event Summaries",
      "Engagement Tracking",
      "Advanced Analytics",
    ],
    premium: [
      "Multi-Host Events",
      "Event Intelligence Dashboard",
      "Advanced Reporting",
      "Enhanced Branding",
      "AI Operational Insights",
      "Priority Support",
    ],
    premiumPlus: [
      "Virtual Conferences",
      "Multi-Day Events",
      "White Label",
      "API Access",
      "Dedicated Infrastructure",
    ],
  },

  education: {
    basic: [
      "Class Management",
      "Student Management",
      "Attendance Tracking",
      "Resource Library",
      "Assessments",
      "Academic Dashboard",
      "Certificates",
    ],
    standard: [
      "Faculty Management",
      "Session Recordings",
      "Academic Analytics",
      "AI Study Assistant",
      "Student Performance Tracking",
      "Advanced Assessments",
    ],
    premium: [
      "Multiple Departments",
      "Institutional Governance",
      "Institutional Analytics",
      "Faculty Dashboards",
      "Compliance Reporting",
      "Executive Reporting",
      "AI Institutional Intelligence",
    ],
    premiumPlus: [
      "Campus-Wide Deployment",
      "White Label",
      "API Access",
      "Dedicated Infrastructure",
      "Custom Integrations",
    ],
  },

  // Not rendered — enterprise shows Coming Soon
  enterprise: {
    basic: [],
    standard: [],
    premium: [],
    premiumPlus: [],
  },
};

// ─── PER-SOLUTION AI ALLOCATION ───────────────────────────────────────────────

const aiAllocationData: Record<SolutionType, AITier[]> = {
  bootcamps: [
    { plan: "Basic", title: "Basic AI Allocation", desc: "Core assistance for small programme teams.", features: ["Limited AI Assistant", "Weekly AI Summary"], icon: Bot, level: 20, color: "#94a3b8" },
    { plan: "Standard", title: "Standard AI Allocation", desc: "Session intelligence and cohort visibility.", features: ["AI Session Summaries", "Cohort Insights", "Performance Insights"], icon: Sparkles, level: 50, color: "#60a5fa" },
    { plan: "Premium", title: "Premium AI Allocation", desc: "Operational intelligence for programme governance.", features: ["AI Operational Intelligence", "Programme Health Analysis", "Advanced Analytics"], icon: Cpu, level: 82, color: "#E8B84A" },
    { plan: "Premium+", title: "Enterprise AI Allocation", desc: "Custom allocation for large-scale operations.", features: ["Custom AI Allocation", "Dedicated AI Resources"], icon: BarChart3, level: 100, color: "#a78bfa" },
  ],
  events: [
    { plan: "Basic", title: "Basic AI Allocation", desc: "Lightweight AI for small event coordination.", features: ["Limited Event AI"], icon: Bot, level: 20, color: "#94a3b8" },
    { plan: "Standard", title: "Standard AI Allocation", desc: "Event intelligence and audience visibility.", features: ["AI Event Summaries", "Audience Insights"], icon: Sparkles, level: 50, color: "#60a5fa" },
    { plan: "Premium", title: "Premium AI Allocation", desc: "Full event operational intelligence.", features: ["Event Intelligence", "Operational Insights"], icon: Cpu, level: 82, color: "#E8B84A" },
    { plan: "Premium+", title: "Enterprise AI Allocation", desc: "Custom AI allocation for conference-scale events.", features: ["Custom AI Allocation"], icon: BarChart3, level: 100, color: "#a78bfa" },
  ],
  education: [
    { plan: "Basic", title: "Basic AI Allocation", desc: "Entry-level AI for academic coordination.", features: ["Limited Study Assistant"], icon: Bot, level: 20, color: "#94a3b8" },
    { plan: "Standard", title: "Standard AI Allocation", desc: "Academic intelligence and student insights.", features: ["Academic Summaries", "Student Insights"], icon: Sparkles, level: 50, color: "#60a5fa" },
    { plan: "Premium", title: "Premium AI Allocation", desc: "Institutional intelligence and governance insights.", features: ["Institutional Intelligence", "Governance Insights"], icon: Cpu, level: 82, color: "#E8B84A" },
    { plan: "Premium+", title: "Enterprise AI Allocation", desc: "Custom allocation for campus-wide deployment.", features: ["Custom AI Allocation"], icon: BarChart3, level: 100, color: "#a78bfa" },
  ],
  // Unused — enterprise shows Coming Soon
  enterprise: [
    { plan: "Basic", title: "Basic AI", desc: "", features: [], icon: Bot, level: 20, color: "#94a3b8" },
    { plan: "Standard", title: "Standard AI", desc: "", features: [], icon: Sparkles, level: 50, color: "#60a5fa" },
    { plan: "Premium", title: "Premium AI", desc: "", features: [], icon: Cpu, level: 82, color: "#E8B84A" },
    { plan: "Premium+", title: "Enterprise AI", desc: "", features: [], icon: BarChart3, level: 100, color: "#a78bfa" },
  ],
};

// ─── PER-SOLUTION COMPARISON TABLES ──────────────────────────────────────────

const comparisonTables: Record<SolutionType, TableRow[]> = {
  bootcamps: [
    { feature: "Programmes",   basic: "Up to 3",        standard: "Up to 10",       premium: "Up to 25",          plus: "Unlimited" },
    { feature: "Participants", basic: "50 / group",      standard: "200 / group",    premium: "500 / group",       plus: "Unlimited" },
    { feature: "Storage",      basic: "10 GB",           standard: "50 GB",          premium: "200 GB",            plus: "Unlimited" },
    { feature: "AI Usage",     basic: "Limited",         standard: "Expanded",       premium: "Operational",       plus: "Custom Allocation" },
    { feature: "Analytics",    basic: "Basic",           standard: "Advanced",       premium: "Executive",         plus: "Custom" },
    { feature: "Governance",   basic: "Owner only",      standard: "Facilitator roles", premium: "Full Controls", plus: "Enterprise Grade" },
    { feature: "Integrations", basic: "Basic",           standard: "Standard",       premium: "Advanced",          plus: "Custom API & Webhooks" },
    { feature: "Support",      basic: "Email",           standard: "Priority Email", premium: "24/7 Slack",        plus: "Dedicated Architect" },
  ],
  events: [
    { feature: "Programmes",   basic: "Up to 5",        standard: "Up to 20",       premium: "Up to 100",         plus: "Unlimited" },
    { feature: "Participants", basic: "Up to 100",      standard: "Up to 500",      premium: "Up to 2,000",       plus: "Unlimited" },
    { feature: "Storage",      basic: "5 GB",           standard: "20 GB",          premium: "100 GB",            plus: "Unlimited" },
    { feature: "AI Usage",     basic: "Limited",        standard: "Expanded",       premium: "Operational",       plus: "Custom Allocation" },
    { feature: "Analytics",    basic: "Basic",          standard: "Advanced",       premium: "Executive",         plus: "Custom" },
    { feature: "Governance",   basic: "Basic",          standard: "Standard",       premium: "Full Controls",     plus: "Enterprise Grade" },
    { feature: "Integrations", basic: "Basic",          standard: "Standard",       premium: "Advanced",          plus: "Custom API & Webhooks" },
    { feature: "Support",      basic: "Email",          standard: "Priority Email", premium: "24/7 Slack",        plus: "Dedicated Architect" },
  ],
  education: [
    { feature: "Programmes",   basic: "Up to 10",       standard: "Up to 50",       premium: "Unlimited",         plus: "Unlimited" },
    { feature: "Participants", basic: "Up to 200",      standard: "Up to 1,000",    premium: "Unlimited",         plus: "Unlimited" },
    { feature: "Storage",      basic: "20 GB",          standard: "100 GB",         premium: "500 GB",            plus: "Unlimited" },
    { feature: "AI Usage",     basic: "Limited",        standard: "Expanded",       premium: "Institutional",     plus: "Custom Allocation" },
    { feature: "Analytics",    basic: "Basic",          standard: "Academic",       premium: "Executive",         plus: "Custom" },
    { feature: "Governance",   basic: "Basic",          standard: "Standard",       premium: "Institutional",     plus: "Enterprise Grade" },
    { feature: "Integrations", basic: "Basic",          standard: "Standard",       premium: "Advanced",          plus: "Custom API & Webhooks" },
    { feature: "Support",      basic: "Email",          standard: "Priority Email", premium: "24/7 Slack",        plus: "Dedicated Architect" },
  ],
  enterprise: [],
};

// ─── ENTERPRISE COMING SOON DATA ─────────────────────────────────────────────

const enterpriseAudience = [
  "NGOs",
  "Corporate Training Teams",
  "Internal Operations",
  "Institutional Coordination",
];

const enterprisePlannedFeatures = [
  "Department Workspaces",
  "Governance Systems",
  "Workflow Automation",
  "Internal Communication",
  "Operational Intelligence",
  "Enterprise Analytics",
];

// ─── STATIC SECTIONS DATA ────────────────────────────────────────────────────

const enterpriseBenefits = [
  { title: "Secure & Reliable",       desc: "Military-grade end-to-end encryption with 99.99% uptime SLA.", icon: Lock,       color: "#34d399" },
  { title: "Dedicated Support",       desc: "Your own Solutions Architect available on-demand.",              icon: Users,      color: "#60a5fa" },
  { title: "Governance & Compliance", desc: "Full SOC2, ISO, and audit log tracking systems.",                icon: ShieldCheck, color: "#E8B84A" },
  { title: "Scalable Infrastructure", desc: "Resilient multi-region nodes synced with low latency.",          icon: Globe,      color: "#a78bfa" },
  { title: "API Access",              desc: "Connect existing systems, CRM, and databases directly.",         icon: Zap,        color: "#f97316" },
  { title: "White Label",             desc: "Brand OYEN GRID as your own internal operational portal.",       icon: Layers,     color: "#34d399" },
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

// ─── CORNER DETAIL ───────────────────────────────────────────────────────────

function CornerDetail({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  return (
    <div className={cn(
      "absolute w-20 h-20 pointer-events-none opacity-[0.06]",
      position === "top-left"     && "top-6 left-6 border-t border-l border-white",
      position === "top-right"    && "top-6 right-6 border-t border-r border-white",
      position === "bottom-left"  && "bottom-6 left-6 border-b border-l border-white",
      position === "bottom-right" && "bottom-6 right-6 border-b border-r border-white",
    )}>
      <div className={cn(
        "absolute w-1.5 h-1.5 bg-white rounded-full",
        position === "top-left"     && "-top-0.5 -left-0.5",
        position === "top-right"    && "-top-0.5 -right-0.5",
        position === "bottom-left"  && "-bottom-0.5 -left-0.5",
        position === "bottom-right" && "-bottom-0.5 -right-0.5",
      )} />
    </div>
  );
}

// ─── VALID SOLUTIONS ──────────────────────────────────────────────────────────

const VALID_SOLUTIONS: SolutionType[] = ["bootcamps", "events", "education", "enterprise"];

// ─── INNER COMPONENT (uses useSearchParams — must be inside Suspense) ─────────

const colorClasses: Record<SolutionType, { text: string; bg: string; border: string; borderActive: string; bgSolid: string }> = {
  bootcamps: {
    text: "text-[#D4A017] dark:text-[#E8B84A]",
    bg: "bg-[#D4A017]/10 dark:bg-[#E8B84A]/10",
    border: "border-[#D4A017]/20 dark:border-[#E8B84A]/20",
    borderActive: "border-[#D4A017] dark:border-[#E8B84A]/40",
    bgSolid: "bg-[#D4A017] dark:bg-[#E8B84A]",
  },
  events: {
    text: "text-[#059669] dark:text-[#34d399]",
    bg: "bg-[#059669]/10 dark:bg-[#34d399]/10",
    border: "border-[#059669]/20 dark:border-[#34d399]/20",
    borderActive: "border-[#059669] dark:border-[#34d399]/40",
    bgSolid: "bg-[#059669] dark:bg-[#34d399]",
  },
  education: {
    text: "text-[#2563eb] dark:text-[#60a5fa]",
    bg: "bg-[#2563eb]/10 dark:bg-[#60a5fa]/10",
    border: "border-[#2563eb]/20 dark:border-[#60a5fa]/20",
    borderActive: "border-[#2563eb] dark:border-[#60a5fa]/40",
    bgSolid: "bg-[#2563eb] dark:bg-[#60a5fa]",
  },
  enterprise: {
    text: "text-[#7c3aed] dark:text-[#a78bfa]",
    bg: "bg-[#7c3aed]/10 dark:bg-[#a78bfa]/10",
    border: "border-[#7c3aed]/20 dark:border-[#a78bfa]/20",
    borderActive: "border-[#7c3aed] dark:border-[#a78bfa]/40",
    bgSolid: "bg-[#7c3aed] dark:bg-[#a78bfa]",
  },
};

const getThemeColor = (color: string) => {
  if (color === "#60a5fa") return "text-[#2563eb] dark:text-[#60a5fa]";
  if (color === "#E8B84A") return "text-[#D4A017] dark:text-[#E8B84A]";
  if (color === "#a78bfa") return "text-[#7c3aed] dark:text-[#a78bfa]";
  if (color === "#34d399") return "text-[#059669] dark:text-[#34d399]";
  if (color === "#f97316") return "text-[#ea580c] dark:text-[#f97316]";
  return "text-[#6B7280] dark:text-white/40";
};

const getThemeBgColor = (color: string) => {
  if (color === "#60a5fa") return "bg-[#2563eb]/10 dark:bg-[#60a5fa]/10";
  if (color === "#E8B84A") return "bg-[#D4A017]/10 dark:bg-[#E8B84A]/10";
  if (color === "#a78bfa") return "bg-[#7c3aed]/10 dark:bg-[#a78bfa]/10";
  if (color === "#34d399") return "bg-[#059669]/10 dark:bg-[#34d399]/10";
  if (color === "#f97316") return "bg-[#ea580c]/10 dark:bg-[#f97316]/10";
  return "bg-[#F3F4F6] dark:bg-white/[0.05]";
};

const getThemeBorderColor = (color: string) => {
  if (color === "#60a5fa") return "border-[#2563eb]/20 dark:border-[#60a5fa]/20";
  if (color === "#E8B84A") return "border-[#D4A017]/20 dark:border-[#E8B84A]/20";
  if (color === "#a78bfa") return "border-[#7c3aed]/20 dark:border-[#a78bfa]/20";
  if (color === "#34d399") return "border-[#059669]/20 dark:border-[#34d399]/20";
  if (color === "#f97316") return "border-[#ea580c]/20 dark:border-[#f97316]/20";
  return "border-transparent";
};

function PricingContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read URL on mount to set initial solution
  const urlSolution = searchParams.get("solution") as SolutionType | null;
  const initialSolution: SolutionType =
    urlSolution && VALID_SOLUTIONS.includes(urlSolution) ? urlSolution : "bootcamps";

  const [selectedSolution, setSelectedSolution] = useState<SolutionType>(initialSolution);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const plansRef = useRef<HTMLElement>(null);

  const isEnterprise = selectedSolution === "enterprise";
  const activeSolution = solutionsList.find((s) => s.id === selectedSolution)!;
  
  // -- SUPABASE DATA STATE --
  const [dbPlans, setDbPlans] = useState<any[]>([]);
  const [dbFeatures, setDbFeatures] = useState<any[]>([]);
  const [dbAiAllocations, setDbAiAllocations] = useState<any[]>([]);
  const [dbTargetAudiences, setDbTargetAudiences] = useState<any[]>([]);
  const [dbMarketingCopy, setDbMarketingCopy] = useState<any[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    async function fetchPricingData() {
      try {
        const [
          { data: plans },
          { data: features },
          { data: aiData },
          { data: targetData },
          { data: marketingData }
        ] = await Promise.all([
          supabase.from('pricing_plans').select('*').eq('is_active', true).order('display_order'),
          supabase.from('pricing_plan_features').select('*').order('display_order'),
          supabase.from('pricing_plan_ai_allocation').select('*'),
          supabase.from('pricing_plan_target_audience').select('*'),
          supabase.from('pricing_plan_marketing_copy').select('*')
        ]);
        
        if (plans) setDbPlans(plans);
        if (features) setDbFeatures(features);
        if (aiData) setDbAiAllocations(aiData);
        if (targetData) setDbTargetAudiences(targetData);
        if (marketingData) setDbMarketingCopy(marketingData);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      } finally {
        setIsLoadingData(false);
      }
    }
    fetchPricingData();
  }, []);

  const currentPlans = dbPlans.filter(p => p.category === activeSolution.title);

  // Update state + push URL param
  const handleSelectSolution = useCallback(
    (id: SolutionType) => {
      setSelectedSolution(id);
      setActiveFaq(null);
      const params = new URLSearchParams(searchParams.toString());
      params.set("solution", id);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="pricing-page-root min-h-screen bg-[#FAFAF8] dark:bg-[#05070B] selection:bg-brand-gold selection:text-black antialiased overflow-x-hidden transition-colors duration-300">
      <Header />
      <AnnouncementBar />

      {/* ════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white dark:bg-[#050816] border-b border-[#E5DDD0] dark:border-white/[0.05]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.01] dark:opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)", backgroundSize: "36px 36px" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(232,184,74,0.07),transparent_65%)]" />
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.04),transparent_60%)]" />
        </div>

        <CornerDetail position="top-left" />
        <CornerDetail position="top-right" />
        <CornerDetail position="bottom-left" />
        <CornerDetail position="bottom-right" />

        <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-14 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4A017]/8 border border-[#D4A017]/20 dark:bg-[#E8B84A]/5 dark:border-[#E8B84A]/15 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] dark:bg-[#E8B84A] animate-pulse" />
              <span className="text-[10px] font-black text-[#D4A017] dark:text-[#E8B84A] tracking-[0.22em] uppercase">
                Unified Operating System
              </span>
            </div>

            <h1 className="text-[48px] md:text-[68px] lg:text-[78px] font-extrabold text-[#111827] dark:text-white leading-[0.95] tracking-[-0.05em] mb-6 max-w-4xl mx-auto">
              Simple pricing.{" "}
              <br className="hidden md:block" />
              <span className="italic font-serif font-medium" style={{ color: "#D4A017" }}>
                Powerful operational
              </span>{" "}
              <span className="italic font-serif font-medium" style={{ color: "#D4A017" }}>
                outcomes.
              </span>
            </h1>

            <p className="text-[17px] md:text-[19px] text-[#374151] dark:text-white/70 leading-[1.6] font-medium max-w-2xl mx-auto mb-10">
              Choose the solution that matches your organization. Whether you&apos;re running bootcamps, managing educational institutions, hosting events, or coordinating enterprise operations,{" "}
              <span className="text-[#1F2937] dark:text-white/90 font-semibold">OYEN GRID scales with your needs.</span>
            </p>

            <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-[#6B7280] dark:text-white/45 tracking-widest uppercase mb-10">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" /> Enterprise Ready
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB] dark:bg-white/10" />
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#2563eb]" /> SOC2 Compliant
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB] dark:bg-white/10" />
              <span className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#D4A017]" /> 99.99% Uptime SLA
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB] dark:bg-white/10" />
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#7c3aed]" /> Multi-Region Infrastructure
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToPlans}
                className="group h-12 px-8 rounded-[13px] bg-[#D4A017] text-black font-black text-[12px] uppercase tracking-wider flex items-center gap-2.5 hover:bg-[#E5B228] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(212,160,23,0.18)] dark:shadow-[0_8px_24px_rgba(232,184,74,0.12)]"
              >
                View Pricing Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <Link
                href="/pricing/enterprise"
                className="h-12 px-8 rounded-[13px] border border-[#EBE9E1] dark:border-white/10 bg-white dark:bg-white/[0.02] text-[#111827] dark:text-white font-bold text-[12px] hover:bg-[#F9FAFB] dark:hover:bg-white/[0.05] hover:border-[#D1D5DB] transition-all flex items-center gap-2 uppercase tracking-wider"
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
      <section className="py-12 bg-[#F5F1E8] dark:bg-[#020408] border-b border-[#E5DDD0] dark:border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <span className="text-[10px] font-black text-[#D4A017] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              Personalized View
            </span>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1F2937] dark:text-white tracking-tight mb-3">
              Choose Your Solution
            </h2>
            <p className="text-[14.5px] text-[#374151] dark:text-white/70 max-w-lg mx-auto leading-[1.6] font-medium">
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
                  onClick={() => handleSelectSolution(sol.id)}
                  className={cn(
                    "solution-card group relative py-3.5 px-4 rounded-[16px] border cursor-pointer transition-all duration-300 flex flex-col gap-2.5 overflow-hidden",
                    isActive
                      ? `active-solution-card bg-white dark:bg-white/[0.04] border-2 border-[#D4A017] shadow-[0_12px_32px_rgba(212,160,23,0.1)] dark:shadow-[0_4px_20px_rgba(232,184,74,0.05)] -translate-y-1`
                      : "bg-white dark:bg-white/[0.015] border-[#E5DDD0] dark:border-white/[0.05] shadow-[0_4px_16px_rgba(15,23,42,0.02)] dark:shadow-none hover:bg-white dark:hover:bg-white/[0.03] hover:border-[#E5DDD0] dark:hover:border-white/[0.1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1"
                  )}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-50 dark:block hidden"
                      style={{ background: `radial-gradient(ellipse at top left, ${sol.bgGlow}, transparent 70%)` }}
                    />
                  )}
                  {isActive && (
                    <div
                      className={cn("absolute top-3 right-4 w-1.5 h-1.5 rounded-full animate-pulse", colorClasses[sol.id].bgSolid)}
                    />
                  )}

                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 relative z-10",
                      isActive
                        ? `${colorClasses[sol.id].text} ${colorClasses[sol.id].bg} ${colorClasses[sol.id].border}`
                        : "bg-[#F3F4F6] dark:bg-white/[0.05] border-transparent text-[#6B7280] dark:text-white/40"
                    )}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-[14.5px] font-bold text-[#111827] dark:text-white tracking-tight mb-1 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-[11.5px] text-[#374151] dark:text-white/70 leading-[1.5] mb-2 font-medium">
                      {sol.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {sol.audience.map((a) => (
                        <span
                          key={a}
                          className={cn(
                            "text-[9px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border transition-all",
                            isActive
                              ? `text-[#4B5563] dark:text-white/80 ${colorClasses[sol.id].bg} ${colorClasses[sol.id].border}`
                              : "bg-[#F3F4F6] dark:bg-white/[0.04] border-transparent text-[#4B5563] dark:text-white/50"
                          )}
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
              transition={{ duration: 0.3 }}
              className="mt-6 flex items-center justify-center gap-3"
            >
              <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", colorClasses[activeSolution.id].bgSolid)} />
              <span className="text-[12px] font-semibold text-[#6B7280] dark:text-white/40 tracking-wider">
                Showing pricing for:{" "}
                <span className="font-black text-[#111827] dark:text-white/75">{activeSolution.title}</span>
                {isEnterprise && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[9px] font-black text-[#7c3aed] uppercase tracking-widest">
                    Coming Soon
                  </span>
                )}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. PRICING PLANS  — or — ENTERPRISE COMING SOON
      ════════════════════════════════════════════════════════════════ */}
      <section ref={plansRef} className="py-12 bg-[#FAF9F6] dark:bg-[#05070B] border-b border-[#EBE9E1] dark:border-white/[0.04] relative">
        {/* Subtle radial glow for Operational Core Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.025),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(232,184,74,0.04),transparent_70%)]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <AnimatePresence mode="wait">
            {isEnterprise ? (
              /* ─── ENTERPRISE COMING SOON ─────────────────────────────────── */
              <motion.div
                key="enterprise-coming-soon"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#7c3aed]/8 border border-[#7c3aed]/20 dark:bg-[#7c3aed]/5 dark:border-[#7c3aed]/20 mb-6">
                    <Clock className="w-3.5 h-3.5 text-[#7c3aed]" />
                    <span className="text-[10px] font-black text-[#7c3aed] tracking-[0.22em] uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <h2 className="text-[30px] md:text-[42px] font-bold text-[#111827] dark:text-white tracking-tight mb-4">
                    Enterprise Operations
                  </h2>
                  <p className="text-[15px] text-[#4B5563] dark:text-white/45 max-w-lg mx-auto leading-relaxed font-normal">
                    Built for large-scale internal operations, governance, and institutional coordination. Join the waitlist to be the first to know.
                  </p>
                </div>

                <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {/* Built For */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-[#EBE9E1] dark:border-white/[0.06] shadow-[0_8px_24px_rgba(15,23,42,0.04)] dark:shadow-none">
                    <h3 className="text-[11px] font-black text-[#7c3aed] tracking-[0.28em] uppercase mb-5">
                      Built For
                    </h3>
                    <ul className="space-y-3">
                      {enterpriseAudience.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[14.5px] text-[#4B5563] dark:text-white/75 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Planned Features */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-[#EBE9E1] dark:border-white/[0.06] shadow-[0_8px_24px_rgba(15,23,42,0.04)] dark:shadow-none">
                    <h3 className="text-[11px] font-black text-[#7c3aed] tracking-[0.28em] uppercase mb-5">
                      Planned Features
                    </h3>
                    <ul className="space-y-3">
                      {enterprisePlannedFeatures.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[14.5px] text-[#4B5563] dark:text-white/75 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#7c3aed] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Waitlist Form */}
                <div className="max-w-[520px] mx-auto">
                  <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.025] border border-[#7c3aed]/20 dark:border-[#7c3aed]/20 shadow-[0_12px_32px_rgba(124,58,237,0.06)]">
                    <div className="text-center mb-6">
                      <h3 className="text-[18px] font-bold text-[#111827] dark:text-white mb-2">Join the Waitlist</h3>
                      <p className="text-[13px] text-[#6B7280] dark:text-white/40">
                        Get early access when Enterprise Operations launches.
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {waitlistSubmitted ? (
                        <motion.div
                          key="success"
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center gap-3 py-4"
                        >
                          <CheckCircle2 className="w-10 h-10 text-[#7c3aed]" />
                          <p className="text-[14.5px] font-bold text-[#111827] dark:text-white">You&apos;re on the list!</p>
                          <p className="text-[13px] text-[#6B7280] dark:text-white/40 text-center">
                            We&apos;ll notify you as soon as Enterprise Operations is available.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (waitlistEmail.trim()) setWaitlistSubmitted(true);
                          }}
                          className="flex flex-col gap-3"
                        >
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] dark:text-white/25" />
                            <input
                              type="email"
                              required
                              placeholder="Enter your work email"
                              value={waitlistEmail}
                              onChange={(e) => setWaitlistEmail(e.target.value)}
                              className="w-full h-12 pl-10 pr-4 rounded-xl border border-[#EBE9E1] dark:border-white/[0.08] bg-[#F9FAFB] dark:bg-white/[0.03] text-[13px] text-[#111827] dark:text-white placeholder:text-[#9CA3AF] dark:placeholder:text-white/25 focus:outline-none focus:border-[#7c3aed]/50 dark:focus:border-[#7c3aed]/40 transition-colors"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-[#7c3aed] text-white font-black text-[12px] uppercase tracking-wider hover:bg-[#8b5cf6] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_4px_16px_rgba(124,58,237,0.2)]"
                          >
                            Join Waitlist
                          </button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ─── STANDARD PRICING PLANS ─────────────────────────────────── */
              <motion.div
                key={`plans-${selectedSolution}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <span className="text-[10px] font-black text-[#D4A017] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
                    Plan Options
                  </span>
                  <h2 className="text-[30px] md:text-[40px] font-bold text-[#1F2937] dark:text-white tracking-tight mb-3">
                    Flexible tiers for any scale
                  </h2>
                  <p className="text-[14.5px] text-[#4B5563] dark:text-white/60 font-medium">
                    Feature descriptions adapt to your selected solution.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                  {isLoadingData ? (
                    <div className="col-span-full py-12 flex justify-center items-center">
                      <div className="w-6 h-6 border-2 border-[#D4A017] border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : currentPlans.length === 0 ? (
                    <div className="col-span-full py-12 text-center text-[#6B7280]">
                      No active plans available for {activeSolution.title}.
                    </div>
                  ) : currentPlans.map((plan, i) => {
                    const meta = dbMarketingCopy.find(m => m.plan_id === plan.id) || {};
                    const audience = dbTargetAudiences.find(t => t.plan_id === plan.id) || {};
                    const features = dbFeatures.filter(f => f.plan_id === plan.id && f.enabled).sort((a,b) => a.display_order - b.display_order).map(f => {
                       return (f.usage_limit && f.usage_limit !== 'Enabled' && f.usage_limit !== 'Not Available') 
                         ? `${f.usage_limit} ${f.feature_name}` 
                         : f.feature_name;
                    });
                    
                    const isPremium = plan.slug.includes("premium") && !plan.slug.includes("plus") && !plan.slug.includes("enterprise");
                    const isPremiumPlus = plan.slug.includes("enterprise") || plan.slug.includes("plus");
                    const isTalkToSales = plan.price >= 10000 || plan.price === 0 || plan.cta_destination?.includes('contact'); 
                    const isMostPopular = plan.is_popular || plan.badge === 'MOST POPULAR';
                    const formattedPrice = isTalkToSales ? "Talk to Sales" : `${plan.currency === 'NGN' ? '₦' : '$'}${plan.price.toLocaleString()}`;
                    const period = formattedPrice === "Talk to Sales" ? "" : `/${plan.billing_period || 'month'}`;
                    const planLabel = isPremiumPlus ? "ENTERPRISE READY" : isPremium ? "EVERYTHING IN STANDARD PLUS" : plan.slug.includes('standard') ? "EVERYTHING IN BASIC PLUS" : "INCLUDED FEATURES";

                    return (
                      <motion.div
                        key={plan.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className={cn(
                          "pricing-card relative rounded-2xl border p-3.5 pb-4 flex flex-col justify-between transition-all duration-300 group overflow-hidden",
                          isPremiumPlus
                            ? "bg-[#07111F] text-white border-transparent shadow-[0_8px_24px_rgba(7,17,31,0.1)]"
                            : (isPremium
                              ? "bg-gradient-to-b from-[#FFFDF7] to-[#FDF6E3] dark:from-[#FFFDF7]/[0.02] dark:to-[#FDF6E3]/[0.02] border-[#D4A017] shadow-[0_8px_24px_rgba(212,160,23,0.06)] dark:shadow-[0_8px_30px_rgba(232,184,74,0.06)] hover:border-[#D4A017]"
                              : "bg-white dark:bg-white/[0.015] border-[#E5DDD0] dark:border-white/[0.05] shadow-[0_4px_16px_rgba(15,23,42,0.02)] dark:shadow-none hover:border-[#D1D5DB] dark:hover:border-white/[0.1] hover:shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
                            )
                        )}
                      >
                        {isPremium && (
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,160,23,0.03),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(232,184,74,0.04),transparent_60%)] pointer-events-none" />
                        )}

                        {plan.badge && (
                          <div className="absolute top-3.5 right-4 px-2 py-0.5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 text-[8px] font-black text-[#D4A017] dark:text-[#E8B84A] uppercase tracking-widest flex items-center gap-1">
                            <Star className="w-2.5 h-2.5" />
                            {plan.badge}
                          </div>
                        )}

                        <div className="relative z-10">
                          <span className={cn(
                            "text-[9.5px] font-bold uppercase tracking-widest",
                            isPremiumPlus ? "text-white/60" : "text-[#111827] dark:text-white"
                          )}>
                            {plan.name}
                          </span>


                          {/* Price — animated on solution change */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`price-${plan.id}-${selectedSolution}`}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{ duration: 0.2 }}
                              className="mt-1.5 mb-0.5 flex items-baseline gap-1"
                            >
                              <span className={cn(
                                "font-extrabold tracking-tighter leading-none",
                                isPremiumPlus ? "text-white" : "text-[#111827] dark:text-white",
                                isTalkToSales ? "text-[20px]" : "text-[30px]"
                              )}>
                                {formattedPrice}
                              </span>
                              {period && (
                                <span className={cn(
                                  "text-[11px] font-medium",
                                  isPremiumPlus ? "text-white/50" : "text-[#6B7280] dark:text-white/50"
                                )}>
                                  {period}
                                </span>
                              )}
                            </motion.div>
                          </AnimatePresence>

                          <AnimatePresence mode="wait">
                            <motion.p
                              key={`tagline-${plan.id}-${selectedSolution}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className={cn(
                                "text-[11px] leading-[1.4] mb-2 font-medium",
                                isPremiumPlus ? "text-white/70" : "text-[#374151] dark:text-white/70"
                              )}
                            >
                              {meta.subheadline || plan.description}
                            </motion.p>
                          </AnimatePresence>


                          <div className={cn(
                            "h-px mb-2.5",
                            isPremiumPlus ? "bg-white/10" : "bg-[#EBE9E1] dark:bg-white/[0.06]"
                          )} />

                          <h4 className={cn(
                            "text-[9px] font-bold tracking-widest uppercase mb-1.5",
                            isPremiumPlus ? "text-white/55" : "text-[#4B5563] dark:text-white/60"
                          )}>
                            {planLabel}
                          </h4>

                          {/* Feature list — animated on solution change */}
                          <AnimatePresence mode="wait">
                            <motion.ul
                              key={`features-${plan.id}-${selectedSolution}`}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{ duration: 0.22 }}
                              className="space-y-1.5"
                            >
                              {features.map((feat, fi) => (
                                <li key={fi} className={cn(
                                  "flex items-start gap-2 text-[12px] font-medium",
                                  isPremiumPlus ? "text-white/90" : "text-[#374151] dark:text-white/85"
                                )}>
                                  <Check
                                    className="w-3 h-3 shrink-0 mt-0.5 text-[#D4A017] dark:text-[#E8B84A]"
                                  />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </motion.ul>
                          </AnimatePresence>
                        </div>

                        <div className={cn(
                          "mt-4 pt-3 border-t relative z-10",
                          isPremiumPlus ? "border-white/10" : "border-[#EBE9E1] dark:border-white/[0.05]"
                        )}>
                          {(() => {
                            const planNameMap: Record<string, string> = {
                              basic: "starter",
                              standard: "professional",
                              premium: "premium",
                              premiumPlus: "enterprise"
                            };
                            
                            const planHref = plan.cta_destination || `/checkout?plan=${plan.slug}`;

                            return (
                              <Link
                                href={planHref}
                                className={cn(
                                  "w-full h-9 rounded-xl flex items-center justify-center gap-1.5 text-[11px] font-black uppercase tracking-wider transition-all group/btn",
                                  isPremiumPlus
                                    ? "bg-white text-black hover:bg-white/90 shadow-[0_4px_16px_rgba(255,255,255,0.05)] hover:scale-[1.02] active:scale-[0.98]"
                                    : (isPremium
                                      ? "bg-[#D4A017] text-black hover:bg-[#E5B228] shadow-[0_4px_16px_rgba(212,160,23,0.18)] hover:scale-[1.02] active:scale-[0.98]"
                                      : "border border-[#EBE9E1] dark:border-white/[0.08] text-[#111827] dark:text-white hover:bg-[#F9FAFB] dark:hover:bg-white/[0.05] hover:border-[#D1D5DB] dark:hover:border-white/[0.15]"
                                    )
                                )}
                              >
                                {plan.cta_button_label || "Get Started"}
                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform opacity-60" />
                              </Link>
                            );
                          })()}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. AI ALLOCATION — hidden for Enterprise
      ════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!isEnterprise && (
          <motion.section
            key="ai-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="py-12 bg-[#F6F7FB] dark:bg-[#020408] border-b border-[#E5DDD0] dark:border-white/[0.04] overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <span className="text-[10px] font-black text-[#D4A017] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
                  Intelligence Allocation
                </span>
                <h2 className="text-[28px] md:text-[38px] font-bold text-[#1F2937] dark:text-white tracking-tight mb-3">
                  AI Coordination Credits by Plan
                </h2>
                <p className="text-[14.5px] text-[#4B5563] dark:text-white/60 max-w-md mx-auto leading-[1.6] font-medium">
                  Each plan unlocks a different tier of AI capabilities — from basic summaries to full operational intelligence.
                </p>
              </motion.div>

              {/* Use solution as key so cards remount and bars re-animate */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`ai-grid-${selectedSolution}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                  {isLoadingData ? null : dbAiAllocations.filter(ai => currentPlans.some(p => p.id === ai.plan_id)).map((tier, i) => {
                    const plan = currentPlans.find(p => p.id === tier.plan_id)!;
                    
                    const isEnterprise = plan.slug.includes('enterprise');
                    const isPremium = plan.slug.includes('premium') && !isEnterprise;
                    const isStandard = plan.slug.includes('standard');
                    const isBasic = plan.slug.includes('basic') || plan.slug.includes('starter');

                    const Icon = isEnterprise ? BarChart3 : isPremium ? Cpu : isStandard ? Sparkles : Bot;
                    const color = isEnterprise ? "#a78bfa" : isPremium ? "#E8B84A" : isStandard ? "#60a5fa" : "#94a3b8";
                    
                    const title = isEnterprise ? "Enterprise AI Allocation" : isPremium ? "Premium AI Allocation" : isStandard ? "Standard AI Allocation" : "Basic AI Allocation";
                    const desc = isEnterprise ? "Custom allocation for large-scale operations." : isPremium ? "Operational intelligence for programme governance." : isStandard ? "Session intelligence and cohort visibility." : "Core assistance for small programme teams.";
                    const level = isEnterprise ? 100 : isPremium ? 82 : isStandard ? 50 : 20;

                    const aiFeatures = [
                       tier.tokens_per_month > 0 ? `${tier.tokens_per_month.toLocaleString()} Tokens / mo` : 'Custom Enterprise Quota',
                       tier.storage_limit ? `${tier.storage_limit} GB Storage` : null,
                       ...(tier.accessible_llm_models || [])
                    ].filter(Boolean);

                    return (
                      <motion.div
                        key={`${selectedSolution}-${plan.id}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="relative p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-[#E5DDD0] dark:border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-none transition-all group overflow-hidden"
                      >
                        <div
                          className="absolute bottom-0 left-0 right-0 h-[3px] opacity-60"
                          style={{ backgroundColor: color }}
                        />

                        <div
                          className={cn(
                            "w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 border transition-all",
                            getThemeColor(color), getThemeBgColor(color), getThemeBorderColor(color)
                          )}
                        >
                          <Icon className="w-4.5 h-4.5" />
                        </div>

                        <div className={cn("text-[9px] font-black uppercase tracking-[0.25em] mb-0.5", getThemeColor(color))}>
                          {plan.name}
                        </div>
                        <h4 className="text-[13.5px] font-bold text-[#111827] dark:text-white tracking-tight mb-1">
                          {title}
                        </h4>
                        <p className="text-[11.5px] text-[#4B5563] dark:text-white/70 leading-[1.5] mb-3.5 font-medium">
                          {desc}
                        </p>

                        <div className="mb-3.5">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[9px] font-bold text-[#4B5563] dark:text-white/60 uppercase tracking-wider">AI Level</span>
                            <span className="text-[10px] font-extrabold text-[#111827] dark:text-white">
                              {level === 100 ? "Max" : `${level}%`}
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-[#EBE9E1] dark:bg-white/[0.05] rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${level}%` }}
                              transition={{ duration: 1.1, delay: i * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 pt-3 border-t border-[#EBE9E1] dark:border-white/[0.05]">
                          {aiFeatures.map((feat, fi) => (
                            <div key={fi} className="flex items-center gap-2 text-[11.5px] text-[#374151] dark:text-white/70 font-medium">
                              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                              <span>{String(feat)}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════
          5. PLAN COMPARISON TABLE — hidden for Enterprise
      ════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!isEnterprise && (
          <motion.section
            key="table-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="py-12 bg-[#F5F2EA] dark:bg-[#05070B] border-b border-[#E5DDD0] dark:border-white/[0.04] overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <span className="text-[10px] font-black text-[#D4A017] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
                  Comparison
                </span>
                <h2 className="text-[28px] md:text-[38px] font-black dark:font-bold text-[#0F172A] dark:text-white tracking-tight mb-3">
                  Compare plan capabilities
                </h2>
                <p className="text-[15px] text-[#475569] dark:text-white/60 font-semibold dark:font-medium leading-relaxed max-w-md mx-auto">
                  A full side-by-side overview to help you choose the right tier.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="w-full overflow-x-auto rounded-[24px] border border-black/[0.08] dark:border-white/[0.06] shadow-[0_12px_35px_rgba(0,0,0,0.06)] dark:shadow-none bg-[#F7F4ED] dark:bg-transparent"
              >
                <AnimatePresence mode="wait">
                  <motion.table
                    key={`table-${selectedSolution}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="pricing-table w-full min-w-[750px] text-left border-collapse bg-[#F7F4ED] dark:bg-white/[0.01]"
                  >
                    <thead>
                      <tr className="border-b border-black/[0.08] dark:border-white/[0.06] bg-[#E5DDD0] dark:bg-white/[0.02]">
                        <th className="py-4 px-6 text-[11px] font-bold text-[#4B5563] dark:text-white tracking-[0.08em] dark:tracking-widest uppercase w-[28%] border-b border-black/[0.08] dark:border-white/[0.06]">
                          Capability
                        </th>
                        {currentPlans.map((plan) => {
                           const isPremium = plan.slug.includes('premium') && !plan.slug.includes('enterprise');
                           return (
                             <th key={plan.id} className={cn("py-4 px-6 text-[11px] font-bold tracking-[0.08em] dark:tracking-widest uppercase border-b border-black/[0.08] dark:border-white/[0.06]",
                               isPremium ? "text-[#4B5563] dark:text-[#E8B84A] bg-[#FFF2D4]/30 dark:bg-[#E8B84A]/5 border-x border-black/[0.08] dark:border-transparent" : "text-[#4B5563] dark:text-white"
                             )}>
                               {isPremium ? "★ " : ""}{plan.name}
                             </th>
                           );
                        })}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/[0.08] dark:divide-white/[0.04]">
                      {(() => {
                        if (isLoadingData) return null;
                        
                        // Get all unique feature names for this category's plans
                        const allFeatureNames = Array.from(new Set(
                           dbFeatures.filter(f => currentPlans.some(p => p.id === f.plan_id))
                                     .sort((a,b) => a.display_order - b.display_order)
                                     .map(f => f.feature_name)
                        ));
                        
                        return allFeatureNames.map((featureName, i) => (
                          <motion.tr
                            key={`${selectedSolution}-row-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.03 }}
                            className={cn(
                              "transition-colors",
                              i % 2 === 1 ? "bg-[#F0EAE0] dark:bg-white/[0.005]" : "bg-[#F7F4ED] dark:bg-transparent",
                              "hover:bg-[#EAE4D8] dark:hover:bg-white/[0.012]"
                            )}
                          >
                            <td className="py-3.5 px-6 text-[13.5px] dark:text-[13px] font-semibold dark:font-bold text-[#1F2937] dark:text-white">{featureName}</td>
                            {currentPlans.map((plan, pi) => {
                               const f = dbFeatures.find(f => f.plan_id === plan.id && f.feature_name === featureName);
                               const text = f ? (f.enabled ? (f.usage_limit || "Enabled") : "Not Available") : "Not Available";
                               
                               const isPremium = plan.slug.includes('premium') && !plan.slug.includes('enterprise');
                               const isEnterprise = plan.slug.includes('enterprise');
                               
                               return (
                                 <td key={plan.id} className={cn("py-3.5 px-6 text-[13px] dark:text-[12.5px]", 
                                    isEnterprise ? "text-[#D4A017] dark:text-[#E8B84A] font-bold dark:font-bold" :
                                    isPremium ? "text-[#374151] dark:text-white font-medium dark:font-semibold bg-[#FFF6E0]/40 dark:bg-[#E8B84A]/3 border-x border-black/[0.08] dark:border-transparent" :
                                    "text-[#374151] dark:text-white/70 font-medium dark:font-medium"
                                 )}>{text}</td>
                               );
                            })}
                          </motion.tr>
                        ));
                      })()}
                    </tbody>
                  </motion.table>
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════
          6. ENTERPRISE BENEFITS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-gradient-to-b from-[#07111F] to-[#0A1830] border-b border-transparent relative text-white">
        {/* Subtle radial glow for Institutional Coordination Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.015),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(232,184,74,0.04),transparent_70%)]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-black text-[#D4A017] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              Institutional Grade
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-white tracking-tight mb-3">
              Enterprise Infrastructure
            </h2>
            <p className="text-[14.5px] text-white/70 max-w-md mx-auto leading-[1.6] font-medium">
              Built to meet the standards of the world&apos;s most demanding organizations.
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
                  className="relative p-5 rounded-[16px] bg-white/5 border border-white/[0.08] hover:bg-white/[0.08] transition-all group overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${item.color}08, transparent 65%)` }}
                  />
                  <div
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center mb-3.5 border transition-all duration-300",
                      getThemeColor(item.color), getThemeBgColor(item.color), getThemeBorderColor(item.color)
                    )}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-[14.5px] font-bold text-white tracking-tight mb-1 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-white/70 leading-[1.5] relative z-10 font-medium">
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
      <section className="py-12 bg-[#F5F1E8] dark:bg-[#05070B] border-b border-[#E5DDD0] dark:border-white/[0.04]">
        <div className="max-w-[820px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-black text-[#D4A017] dark:text-[#E8B84A] tracking-[0.32em] uppercase block mb-3">
              FAQ
            </span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-[#1F2937] dark:text-white tracking-tight">
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
                    "faq-item rounded-2xl border overflow-hidden transition-all duration-300",
                    isOpen
                      ? "bg-white dark:bg-white/[0.025] border-[#D4A017]/40 dark:border-[#E8B84A]/25 shadow-[0_4px_16px_rgba(212,160,23,0.05)]"
                      : "bg-white dark:bg-white/[0.015] border-[#E5DDD0] dark:border-white/[0.05] shadow-sm hover:border-[#D1D5DB] dark:hover:border-white/[0.1] hover:bg-[#FAFAF8] dark:hover:bg-white/[0.01]"
                  )}
                >
                  <button
                    id={`faq-${i}`}
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full px-5 py-3.5 flex items-center justify-between text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      "text-[14px] font-semibold tracking-tight transition-colors pr-4",
                      isOpen
                        ? "text-[#111827] dark:text-white"
                        : "text-[#111827] dark:text-white group-hover:text-[#D4A017] dark:group-hover:text-[#E8B84A]"
                    )}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-all duration-300 shrink-0",
                        isOpen ? "rotate-180 text-[#D4A017] dark:text-[#E8B84A]" : "text-[#9CA3AF] dark:text-white/50"
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
                        <div className="px-5 pb-4 pt-1 text-[13px] text-[#374151] dark:text-white/70 leading-relaxed border-t border-[#E5DDD0] dark:border-white/[0.05] font-medium">
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
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#FFFDF8] to-[#F5F0E2] dark:from-[#020306] dark:to-[#07111F] border-b border-[#E5DDD0] dark:border-white/[0.04]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.012] dark:opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, #D4A017 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(212,160,23,0.025),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(232,184,74,0.07),transparent_60%)]" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(96,165,250,0.02),transparent_65%)] blur-[60px] dark:bg-[radial-gradient(circle,rgba(96,165,250,0.04),transparent_65%)]" />
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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4A017]/5 border border-[#D4A017]/15 dark:bg-[#E8B84A]/5 dark:border-[#E8B84A]/15 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] dark:bg-[#E8B84A] animate-pulse" />
              <span className="text-[9.5px] font-black text-[#D4A017] dark:text-[#E8B84A] tracking-[0.22em] uppercase">
                Deployment Protocol Ready
              </span>
            </div>

            <h2 className="text-[42px] md:text-[62px] font-extrabold text-[#111827] dark:text-white leading-[0.95] tracking-[-0.05em] mb-8">
              Ready to coordinate and{" "}
              <br className="hidden md:block" />
              <span className="text-[#D4A017] dark:text-[#E8B84A] italic font-serif font-medium">
                scale your entire ecosystem?
              </span>
            </h2>

            <p className="text-[15px] md:text-[17px] text-[#374151] dark:text-white/70 leading-[1.6] mb-12 max-w-2xl mx-auto font-medium">
              Join leading organizations using OYEN GRID to manage programmes, participants, learning, events, training, and institutional operations from one platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/pricing/premium"
                className="group px-10 rounded-[14px] bg-[#D4A017] text-black font-black text-[13px] uppercase tracking-wider flex items-center gap-2.5 hover:bg-[#E5B228] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_12px_32px_rgba(212,160,23,0.18)]"
                style={{ height: "52px" }}
              >
                Start Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/pricing/enterprise"
                className="h-[52px] px-10 rounded-[14px] border border-[#EBE9E1] dark:border-white/10 bg-white dark:bg-white/[0.03] text-[#111827] dark:text-white font-bold text-[13px] hover:bg-[#F9FAFB] dark:hover:bg-white/[0.07] hover:border-[#D1D5DB] transition-all flex items-center gap-2.5 uppercase tracking-wider"
              >
                Contact Sales
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
            </div>

            <div className="mt-16 pt-10 border-t border-[#EBE9E1] dark:border-white/[0.05] grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { icon: Users,       label: "Organizations",      val: "2,400+" },
                { icon: Globe,       label: "Participants",       val: "6.4M+"  },
                { icon: Clock,       label: "On-Time Delivery",   val: "98.6%"  },
                { icon: ShieldCheck, label: "Countries",          val: "120+"   },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-1">
                      <Icon className="w-4 h-4 text-[#4B5563] dark:text-white/40" />
                    </div>
                    <span className="text-[9.5px] font-semibold text-[#6B7280] dark:text-white/50 uppercase tracking-[0.25em]">{item.label}</span>
                    <span className="text-[14px] font-extrabold text-[#111827] dark:text-white tracking-widest">{item.val}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <FooterPremium hideCTA={true} />
    </main>
  );
}

// ─── DEFAULT EXPORT — wraps PricingContent in Suspense ───────────────────────
// Required: useSearchParams() in a statically-rendered page must sit inside a
// Suspense boundary or the production build fails with CSR bailout error.

export default function PricingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-[#05070B]" />}>
      <PricingContent />
    </Suspense>
  );
}
