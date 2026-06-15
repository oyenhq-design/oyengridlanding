"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Globe, Shield, Zap, Activity, Cpu, 
  Network, Database, Calendar, Play, FileText, CheckCircle, HelpCircle,
  Users, BarChart3, Settings, Lock, FileCheck, Layers, Boxes, Bot, 
  LineChart, Server, Workflow, Radio, Brain, BookOpen, GraduationCap, 
  Building2, Terminal, Target, XCircle, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Map of string icon names to Lucide icons
const iconMap: Record<string, any> = {
  Activity, Cpu, Network, Database, Shield, Zap, Globe, Users, 
  BarChart3, Settings, Lock, FileCheck, Layers, Boxes, Bot, 
  LineChart, Server, Workflow, Radio, Brain, BookOpen, GraduationCap, 
  Building2, Terminal, Target, HelpCircle
};

interface PremiumPageTemplateProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    category: string;
    comingSoon?: boolean;
    hero: {
      headline: string;
      subheadline: string;
      ctas: { text: string; href: string; primary: boolean }[];
      statusText?: string;
      visualType?: string;
    };
    problem: {
      headline: string;
      intro?: string;
      points: { title: string; desc: string }[];
    };
    solution: {
      headline: string;
      intro?: string;
      points: { title: string; desc: string }[];
    };
    features: { title: string; desc: string; icon: any }[];
    workflow: { title: string; desc: string }[];
    benefits: { title: string; desc: string }[];
    outcomes: { label: string; value: string; trend?: string }[];
    cta: {
      headline: string;
      subheadline: string;
      buttonText: string;
    };
  };
  slug: string;
}

export function PremiumPageTemplate({ data, slug }: PremiumPageTemplateProps) {
  const {
    title,
    subtitle,
    description,
    category,
    comingSoon,
    hero,
    problem,
    solution,
    features,
    workflow,
    benefits,
    outcomes,
    cta
  } = data;

  // Render mockups based on visualType
  const renderVisual = () => {
    const vt = hero.visualType || "dashboard";

    if (vt === "dashboard") {
      return (
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="space-y-4">
            <div className="h-[140px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] animate-pulse" />
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Active Learners</span>
                </div>
                <span className="text-[10px] font-bold text-[#E8B84A] bg-[#E8B84A]/10 px-2 py-0.5 rounded-md">Live</span>
              </div>
              <div className="text-3xl font-black mb-1">1,248</div>
              <div className="text-[10px] text-white/40">Across 12 global cohorts</div>
              <div className="absolute bottom-0 left-0 right-0 h-[30px] opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 10 Q 25 3, 50 8 T 100 2 L 100 10 L 0 10 Z" fill="#E8B84A" />
                </svg>
              </div>
            </div>
            <div className="h-[200px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Attendance Metric</span>
                <Activity className="w-4 h-4 text-[#E8B84A]" />
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold">92.4% Average</div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[92.4%] bg-gradient-to-r from-[#E8B84A]/60 to-[#E8B84A]" />
                </div>
                <div className="flex justify-between text-[9px] font-bold text-white/20">
                  <span>TARGET: 85%</span>
                  <span>SURPASSING</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-[180px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">AI Insights</span>
                <Bot className="w-4 h-4 text-[#E8B84A]/60" />
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-[#E8B84A]/10 text-[10px] text-white/60 leading-relaxed italic">
                &ldquo;Cohort B engagement dropped 12% following module 3 assessments. Suggest scheduling sync.&rdquo;
              </div>
              <div className="h-1.5 w-1/2 bg-[#E8B84A]/20 rounded-full" />
            </div>
            <div className="h-[120px] rounded-2xl bg-[#E8B84A]/5 border border-[#E8B84A]/20 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">Completion Rate</span>
                <GraduationCap className="w-4 h-4 text-[#E8B84A]" />
              </div>
              <div className="text-2xl font-black text-[#E8B84A]">96.8%</div>
            </div>
          </div>
        </div>
      );
    }

    if (vt === "event") {
      return (
        <div className="grid grid-cols-1 gap-4 h-full justify-between">
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 flex flex-col justify-between h-[180px] relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">Live Event Console</span>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">Recording</span>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold mb-2">Webinar: Future of Decentralized Coordination</div>
              <div className="flex items-center gap-4 text-white/40 text-[11px]">
                <span className="flex items-center gap-1"><Users className="w-3 h-3 text-[#E8B84A]" /> 842 Present</span>
                <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-[#E8B84A]" /> 94% Engagement Index</span>
              </div>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-[#E8B84A]/10 border border-[#E8B84A]/20 flex items-center justify-center">
              <Play className="w-4 h-4 text-[#E8B84A] fill-[#E8B84A]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between h-[120px]">
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Active Q&A</span>
              <div className="text-2xl font-black">48 Questions</div>
              <div className="text-[9px] text-[#E8B84A] font-bold">12 Flagged for Speakers</div>
            </div>
            <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between h-[120px]">
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Poll Results</span>
              <div className="space-y-1">
                <div className="flex justify-between text-[9px]">
                  <span>Optimistic</span>
                  <span>78%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-[#E8B84A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (vt === "academic") {
      return (
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="space-y-4">
            <div className="h-[200px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Academic Registry</span>
              <div className="space-y-2">
                <div className="text-sm font-bold">University Chapter Node A</div>
                <div className="text-[10px] text-white/40">Registered Student Accounts</div>
                <div className="text-2xl font-black text-white">4,850</div>
              </div>
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className="w-5 h-5 rounded-full bg-white/5 border border-white/10" />)}
              </div>
            </div>
            <div className="h-[120px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Faculty Activity</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">98.2%</span>
                <span className="text-[9px] text-emerald-500 font-bold">Active Sync</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-[140px] rounded-2xl bg-[#E8B84A]/5 border border-[#E8B84A]/10 p-4 flex flex-col justify-between">
              <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">Regulatory Log</span>
              <div className="text-xs font-bold leading-normal">
                All class attendances auto-logged & signed on ledger.
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#E8B84A]">
                <Shield className="w-3 h-3" /> Audit Ready
              </div>
            </div>
            <div className="h-[140px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Gradebook Output</span>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/5 rounded-full" />
                <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                <div className="h-1.5 w-5/6 bg-[#E8B84A]/60 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default features/company graphic
    return (
      <div className="aspect-square rounded-[40px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.08),transparent_70%)]" />
        <div className="h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/10 border border-[#E8B84A]/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#E8B84A]" />
            </div>
            <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">OYEN Grid Engine</span>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-white/5 rounded-full" />
            <div className="h-2 w-5/6 bg-white/5 rounded-full" />
            <div className="h-2 w-4/6 bg-[#E8B84A]/40 rounded-full" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[9px] font-black text-white/40 uppercase tracking-widest">Sync Health</div>
              <div className="text-xl font-bold">100% Operational</div>
            </div>
            <Activity className="w-6 h-6 text-[#E8B84A]/60 animate-pulse" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white pt-[120px] pb-24 overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_-20%,rgba(232,184,74,0.04),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* BREADCRUMB */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#E8B84A]/60"
        >
          <Link href="/" className="hover:text-[#E8B84A] transition-colors">Home</Link>
          <span className="opacity-20">/</span>
          <span className="opacity-60">{category}</span>
          <span className="opacity-20">/</span>
          <span className="text-[#E8B84A]">{title}</span>
        </motion.div>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A] animate-pulse" />
              <span className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest">
                {comingSoon ? "Coming Soon" : subtitle}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
              {hero.headline}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-[600px] font-medium">
              {hero.subheadline}
            </p>
            
            <div className="flex items-center gap-6">
              {hero.ctas.map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className={cn(
                    "h-[48px] px-8 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center",
                    btn.primary 
                      ? "bg-[#E8B84A] text-black hover:shadow-[0_0_30px_rgba(232,184,74,0.3)] hover:scale-[1.02]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  )}
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* HERO VISUAL MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.08),transparent_70%)]" />
              
              {renderVisual()}

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.path 
                  d="M0 100 Q 200 200 400 100 T 800 200" 
                  fill="none" 
                  stroke="#E8B84A" 
                  strokeWidth="1" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </svg>
            </div>
            
            {/* Ambient Glow Bloom */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E8B84A]/10 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>

        {/* METRICS / OUTCOMES STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {outcomes.map((m, i) => (
            <motion.div 
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#E8B84A]/20 transition-all group"
            >
              <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 group-hover:text-[#E8B84A]/60 transition-colors">
                {m.label}
              </div>
              <div className="text-4xl font-bold mb-2">
                {m.value}
              </div>
              {m.trend && (
                <div className="text-[11px] font-bold text-[#E8B84A] flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 -rotate-45" />
                  {m.trend}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* PROBLEM vs SOLUTION SECTION */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {/* PROBLEM CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[32px] bg-red-500/[0.01] border border-red-500/10 hover:border-red-500/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/5 border border-red-500/10 mb-6">
                <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">The Challenge</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
                {problem.headline}
              </h2>
              {problem.intro && (
                <p className="text-white/40 text-[14px] leading-relaxed mb-8">
                  {problem.intro}
                </p>
              )}
              <div className="space-y-6">
                {problem.points.map((p, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1 text-white/80">{p.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SOLUTION CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[32px] bg-[#E8B84A]/[0.01] border border-[#E8B84A]/10 hover:border-[#E8B84A]/25 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/15 mb-6">
                <Zap className="w-3.5 h-3.5 text-[#E8B84A]" />
                <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">The Grid Solution</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
                {solution.headline}
              </h2>
              {solution.intro && (
                <p className="text-white/40 text-[14px] leading-relaxed mb-8">
                  {solution.intro}
                </p>
              )}
              <div className="space-y-6">
                {solution.points.map((p, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8B84A]/10 border border-[#E8B84A]/20 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1 text-[#E8B84A]">{p.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* DETAILED CAPABILITIES / FEATURES GRID */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">Core Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl leading-tight">
              Configured for mission-critical operations.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((item, i) => {
              const IconComp = iconMap[item.icon] || HelpCircle;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-8 rounded-[28px] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:border-[#E8B84A]/20 transition-all group relative overflow-hidden"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E8B84A]/5 border border-[#E8B84A]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    {IconComp && <IconComp className="w-5 h-5 text-[#E8B84A]" />}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#E8B84A] transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8B84A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* WORKFLOW VISUALIZATION TIMELINE */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">The Workflow</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl leading-tight">
              Operational Journey & Lifecycle
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative pl-8 border-l border-white/10 space-y-12 py-4">
            {workflow.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Glowing Dot on timeline */}
                <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[#02040A] border-2 border-[#E8B84A] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#E8B84A]" />
                </div>

                <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                  <div className="text-[10px] font-black text-[#E8B84A] uppercase tracking-widest mb-1">Step 0{idx + 1}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">Strategic Outcomes</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl leading-tight">
              Direct organizational advantages.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-[#E8B84A] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold mb-2">{benefit.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CUSTOMER OUTCOMES / CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 rounded-[48px] bg-gradient-to-br from-[#E8B84A]/10 via-transparent to-transparent border border-[#E8B84A]/20 relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.08),transparent_70%)]" />
          <div className="relative z-10">
            <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-8 block">Ready to deploy</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              {cta.headline}
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-lg mx-auto font-medium">
              {cta.subheadline}
            </p>
            <div className="flex items-center justify-center">
              <Link 
                href="#contact" 
                className="h-[56px] px-12 rounded-2xl bg-[#E8B84A] text-black text-[13px] font-black uppercase tracking-widest hover:shadow-[0_20px_40px_rgba(232,184,74,0.3)] transition-all flex items-center justify-center hover:scale-[1.02]"
              >
                {cta.buttonText}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
