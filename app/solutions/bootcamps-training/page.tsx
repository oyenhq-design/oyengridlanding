"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Globe, Shield, Zap, Activity, Cpu, 
  Users, BarChart3, Settings, Lock, FileCheck, Layers, Boxes, Bot, 
  LineChart, Server, Workflow, Radio, Brain, BookOpen, GraduationCap, 
  Building2, Terminal, Target, AlertCircle, Play, Mail, MapPin, 
  MessageSquare, Sparkles, Check, HelpCircle
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Header, AnnouncementBar } from "@/components/layout/header";
import { FooterPremium } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

// Capabilities array with category name and sub-capabilities
const capabilities = [
  {
    title: "Programme Management",
    desc: "Create, organize and monitor programmes from a centralized workspace.",
    icon: BookOpen,
    items: ["Programme Creation", "Programme Scheduling", "Programme Tracking", "Programme Dashboards", "Programme Analytics", "Programme Health Monitoring"]
  },
  {
    title: "Cohort Management",
    desc: "Manage multiple participant groups efficiently.",
    icon: Boxes,
    items: ["Cohort Creation", "Cohort Assignment", "Cohort Performance Tracking", "Cohort Communication", "Cohort Analytics"]
  },
  {
    title: "Participant Management",
    desc: "Maintain complete visibility across your programme participants.",
    icon: Users,
    items: ["Registration", "Profiles", "Participant Records", "Progress Tracking", "Engagement Monitoring", "Risk Detection"]
  },
  {
    title: "OYEN LIVE",
    desc: "Built-in infrastructure for virtual programme delivery. No external Zoom links required.",
    icon: Radio,
    items: ["Video Sessions", "Audio Sessions", "Screen Sharing", "Live Chat", "Session Recording", "Attendance Capture"]
  },
  {
    title: "Attendance Intelligence",
    desc: "Automatically capture attendance data across sessions.",
    icon: Activity,
    items: ["Join Records", "Leave Records", "Attendance Reports", "Participation Analytics", "Cohort Attendance Tracking"]
  },
  {
    title: "Resource Library",
    desc: "Provide learning materials from a centralized repository.",
    icon: Layers,
    items: ["Documents", "PDFs", "Videos", "Presentations", "Learning Resources"]
  },
  {
    title: "Assessments",
    desc: "Measure participant learning and performance.",
    icon: FileCheck,
    items: ["Quizzes", "Tests", "Assignments", "Submission Tracking", "Grading", "Performance Reporting"]
  },
  {
    title: "Certificates",
    desc: "Issue professional certificates at scale.",
    icon: GraduationCap,
    items: ["Automated Certificate Generation", "Certificate Verification", "Certificate Management", "Digital Distribution"]
  },
  {
    title: "Communication",
    desc: "Keep participants aligned and informed.",
    icon: MessageSquare,
    items: ["Announcements", "Discussions", "Cohort Messaging", "Programme Updates", "Notifications"]
  },
  {
    title: "Analytics & Reporting",
    desc: "Understand programme performance through operational intelligence.",
    icon: BarChart3,
    items: ["Completion Rates", "Attendance Analytics", "Engagement Analytics", "Assessment Performance", "Programme Health Scores"]
  }
];

// Steps array
const steps = [
  { step: "Step 1", title: "Create Your Programme", desc: "Configure programme structure, timelines and cohorts." },
  { step: "Step 2", title: "Enroll Participants", desc: "Import participants or allow self-registration." },
  { step: "Step 3", title: "Deliver Learning", desc: "Run live sessions, share resources and coordinate communication." },
  { step: "Step 4", title: "Track Engagement", desc: "Monitor attendance, participation and performance." },
  { step: "Step 5", title: "Assess Outcomes", desc: "Conduct quizzes, assignments and evaluations." },
  { step: "Step 6", title: "Issue Certificates", desc: "Automatically generate completion certificates." },
  { step: "Step 7", title: "Measure Impact", desc: "Review programme analytics and participant outcomes." }
];

// Target Organizations
const targetOrgs = [
  { title: "Workforce Development", desc: "Deliver large-scale workforce initiatives efficiently.", icon: Building2 },
  { title: "Bootcamps", desc: "Manage cohorts and track participant success.", icon: Cpu },
  { title: "Fellowship Programmes", desc: "Coordinate fellows, facilitators and programme activities.", icon: Users },
  { title: "Professional Academies", desc: "Provide structured learning experiences and certifications.", icon: GraduationCap },
  { title: "NGO Learning Programmes", desc: "Scale training and capacity-building initiatives.", icon: Globe }
];

// Outcomes
const outcomes = [
  { title: "Better Participant Visibility", desc: "Understand participant engagement and progress in real time." },
  { title: "Improved Completion Rates", desc: "Identify risks early and support participant success." },
  { title: "Faster Reporting", desc: "Generate operational reports instantly." },
  { title: "Reduced Administrative Overhead", desc: "Automate repetitive operational tasks." },
  { title: "Stronger Programme Outcomes", desc: "Make better decisions using programme intelligence." }
];

// Pricing
const pricingPlans = [
  { name: "Basic", price: "₦25,000", period: "/month", desc: "For smaller training organizations.", popular: false, features: ["Curriculum builder", "Basic cohort setup", "Standard registration", "Basic attendance logs"] },
  { name: "Standard", price: "₦50,000", period: "/month", desc: "For growing programme teams.", popular: true, features: ["All Basic features", "OYEN Live rooms", "AI summaries (limited)", "Automated certification", "Priority support"] },
  { name: "Premium", price: "₦100,000", period: "/month", desc: "For large-scale programme delivery.", popular: false, features: ["All Standard features", "Advanced analytics hub", "Risk prevention warnings", "Full AI integrations", "SLA Support"] },
  { name: "Premium+", price: "Custom", period: "", desc: "Enterprise Deployment", popular: false, features: ["Dedicated servers", "White label setup", "Custom SSO integrations", "Dedicated success manager", "Okta/Active Directory integration"], ctaText: "Talk to Sales" }
];

export default function BootcampsTrainingPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <AnnouncementBar />
      
      <div className="min-h-screen bg-[#02040A] text-white pt-[120px] pb-24 overflow-hidden relative">
        {/* Background Cinematic Atmosphere */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_-20%,rgba(232,184,74,0.05),transparent_70%)]" />
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
            <span className="opacity-60">Solutions</span>
            <span className="opacity-20">/</span>
            <span className="text-[#E8B84A]">Bootcamps & Training</span>
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
                  BOOTCAMPS & TRAINING
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
                Run Cohort-Based Programmes With Complete Operational Control.
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-6 font-medium">
                Manage participants, facilitators, live sessions, attendance, assessments, certificates, communication and reporting from a single operating system.
              </p>
              <p className="text-sm text-white/35 leading-relaxed mb-10 italic">
                Built for organizations running structured learning, workforce development and fellowship programmes at scale.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-12">
                <Link
                  href="#trial"
                  className="h-[48px] px-8 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center bg-[#E8B84A] text-black hover:shadow-[0_0_30px_rgba(232,184,74,0.3)] hover:scale-[1.02]"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#demo"
                  className="h-[48px] px-8 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/10"
                >
                  Book a Demo
                </Link>
              </div>

              {/* Trusted By Grid */}
              <div className="border-t border-white/5 pt-8">
                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-4">Trusted By</span>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-white/40">
                  <span>• Bootcamps</span>
                  <span>• Training Organizations</span>
                  <span>• Workforce Development</span>
                  <span>• Fellowship Programmes</span>
                  <span>• Professional Academies</span>
                </div>
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
                
                {/* Real-time Dashboard Telemetry Mockup */}
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="h-[140px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Active Learners</span>
                        <div className="w-2 h-2 rounded-full bg-[#E8B84A] animate-pulse" />
                      </div>
                      <div className="text-3xl font-black mb-1">1,420</div>
                      <div className="text-[9px] text-white/40">Across 8 Active Cohorts</div>
                    </div>
                    <div className="h-[200px] rounded-2xl bg-[#E8B84A]/5 border border-[#E8B84A]/25 p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">Attendance Index</span>
                        <Activity className="w-4 h-4 text-[#E8B84A]" />
                      </div>
                      <div className="space-y-3">
                        <div className="text-2xl font-bold">95.4%</div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-[95.4%] bg-[#E8B84A]" />
                        </div>
                        <div className="text-[8px] text-[#E8B84A]/60">Automated capture active</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-[180px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">AI Insights</span>
                        <Bot className="w-4 h-4 text-[#E8B84A]" />
                      </div>
                      <div className="text-[10px] text-white/60 bg-white/[0.02] border border-white/5 p-2 rounded-xl italic leading-relaxed">
                        &ldquo;Cohort 3 has achieved 98% completion on Module 2 assessments. No lagging risks detected.&rdquo;
                      </div>
                      <div className="h-1 bg-white/5 w-full rounded-full" />
                    </div>
                    <div className="h-[120px] rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Certificates Issued</span>
                      <div className="text-2xl font-black">412</div>
                    </div>
                  </div>
                </div>

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
              
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E8B84A]/10 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>
          </div>

          {/* THE CHALLENGE */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[32px] bg-red-500/[0.01] border border-red-500/10 hover:border-red-500/20 transition-all"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/5 border border-red-500/10 mb-6">
                  <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">THE CHALLENGE</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">
                  Most Training Programmes Are Coordinated Across Too Many Tools
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  Programme teams often rely on disconnected systems to manage operations. One tool for meetings, another for attendance, another for resources, another for communication, and another for reporting. The result is fragmented delivery and limited visibility.
                </p>

                {/* Common Tool Stack Visual */}
                <span className="text-[9px] font-black text-red-500/40 uppercase tracking-[0.2em] block mb-4">Common Tool Stack</span>
                <div className="flex flex-wrap gap-2">
                  {["WhatsApp", "Zoom", "Google Meet", "Google Forms", "Google Drive", "Excel Sheets", "Email"].map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-white/40 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Operational Problems */}
              <div className="space-y-6">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] block mb-2">The Operational Problems This Creates</span>
                
                {[
                  { title: "Attendance Is Difficult To Track", desc: "Programme managers spend hours compiling attendance records manually." },
                  { title: "Participant Progress Is Hard To Monitor", desc: "Teams lack visibility into engagement, performance and completion risk." },
                  { title: "Communication Becomes Fragmented", desc: "Important information is scattered across multiple channels." },
                  { title: "Reporting Takes Too Long", desc: "Programme reporting often requires exporting and combining data manually." },
                  { title: "Scaling Becomes Difficult", desc: "As participant numbers grow, operational complexity increases significantly." }
                ].map((p, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-red-500/10 transition-colors flex gap-4"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold mb-1 text-white/80">{p.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* THE OYEN GRID SOLUTION */}
          <div className="mb-32">
            <div className="p-12 rounded-[40px] bg-gradient-to-br from-[#E8B84A]/5 to-transparent border border-[#E8B84A]/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.03),transparent_70%)]" />
              
              <div className="relative z-10 max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-6">
                  <Zap className="w-3.5 h-3.5 text-[#E8B84A]" />
                  <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest font-mono">THE OYEN GRID SOLUTION</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
                  One Platform For Every Stage Of Programme Delivery
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  OYEN GRID centralizes programme operations into a single intelligent system. Instead of managing multiple tools, programme teams operate from one unified platform.
                </p>
              </div>

              {/* Solution grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                {[
                  { title: "Programme Planning", desc: "Create and organize programmes from a centralized dashboard." },
                  { title: "Participant Management", desc: "Manage registrations, participant records and programme engagement." },
                  { title: "Live Programme Delivery", desc: "Conduct sessions directly through OYEN Live." },
                  { title: "Attendance Intelligence", desc: "Automatically track participation and attendance." },
                  { title: "Assessments", desc: "Measure learning outcomes through quizzes, tests and assignments." },
                  { title: "Certification", desc: "Issue and verify digital certificates." },
                  { title: "Analytics", desc: "Monitor programme performance in real time." },
                  { title: "AI Assistance", desc: "Generate insights, summaries and operational recommendations." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#02040A]/60 border border-white/5 hover:border-[#E8B84A]/20 transition-all group">
                    <h4 className="text-sm font-bold text-[#E8B84A] mb-2 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      {item.title} <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CAPABILITIES / FEATURES BLOCK */}
          <div className="mb-32">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">THE DIRECTORY</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-3xl leading-tight">
                Everything Needed To Run A Modern Training Programme
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-8 rounded-[32px] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:border-[#E8B84A]/20 transition-all group relative overflow-hidden"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#E8B84A]/5 border border-[#E8B84A]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#E8B84A]" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#E8B84A] transition-colors">{cap.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-6">{cap.desc}</p>
                    
                    {/* Capabilities Check List */}
                    <div className="border-t border-white/5 pt-4">
                      <span className="text-[8px] font-black tracking-widest text-[#E8B84A]/60 uppercase block mb-3">Capabilities</span>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                        {cap.items.map(item => (
                          <div key={item} className="flex items-center gap-1.5 text-[10px] text-white/50">
                            <Check className="w-3 h-3 text-[#E8B84A]" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* AI-POWERED OPERATIONS */}
          <div className="mb-32">
            <div className="p-12 rounded-[40px] bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 relative overflow-hidden">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E8B84A]/5 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B84A]/5 border border-[#E8B84A]/10 mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-[#E8B84A]" />
                    <span className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest">ARTIFICIAL INTELLIGENCE</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 tracking-tight">
                    AI-Powered Programme Operations
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    OYEN GRID includes AI capabilities designed specifically for programme delivery. Accelerate administration and support learners automatically.
                  </p>
                </div>
                
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
                  {[
                    { title: "AI Learning Assistant", desc: "Supports participants throughout their learning journey.", icon: Brain },
                    { title: "AI Session Summaries", desc: "Automatically generate summaries from live sessions.", icon: Bot },
                    { title: "Participant Insights", desc: "Identify engagement patterns and performance trends.", icon: Users },
                    { title: "Risk Detection", desc: "Detect participants who may require intervention.", icon: Shield },
                    { title: "Programme Intelligence", desc: "Surface insights that improve delivery quality and outcomes.", icon: Target }
                  ].map((aiItem, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#E8B84A]/25 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#E8B84A]/5 border border-[#E8B84A]/10 flex items-center justify-center mb-4">
                        <aiItem.icon className="w-4 h-4 text-[#E8B84A]" />
                      </div>
                      <h4 className="text-sm font-bold text-white/90 mb-1">{aiItem.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{aiItem.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TIMELINE WORKFLOW */}
          <div className="mb-32">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">THE METHODOLOGY</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl leading-tight">
                How OYEN GRID Works
              </h2>
            </div>

            <div className="max-w-4xl mx-auto relative pl-8 border-l border-white/10 space-y-10 py-4">
              {steps.map((st, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-[#02040A] border-2 border-[#E8B84A] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]" />
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                    <div className="text-[9px] font-black text-[#E8B84A] uppercase tracking-widest mb-1">{st.step}</div>
                    <h3 className="text-base font-bold mb-1">{st.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{st.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* BUILT FOR ORGS (TARGETS) */}
          <div className="mb-32">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">SEGMENTATION</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl leading-tight">
                Built For Modern Training Organizations
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {targetOrgs.map((org, i) => {
                const Icon = org.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#E8B84A]/10 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#E8B84A]/5 border border-[#E8B84A]/10 flex items-center justify-center mb-4">
                        <Icon className="w-4 h-4 text-[#E8B84A]" />
                      </div>
                      <h4 className="text-sm font-bold text-white/90 mb-2">{org.title}</h4>
                      <p className="text-white/40 text-[11px] leading-relaxed">{org.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* OUTCOMES / BENEFITS */}
          <div className="mb-32">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">THE IMPACT</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl leading-tight">
                Outcomes Organizations Achieve
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {outcomes.map((out, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#E8B84A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white/90 mb-2">{out.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{out.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PRICING PREVIEW */}
          <div className="mb-32" id="pricing">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-4">PRICING PLANS</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl leading-tight">
                Structured Plans For Every Team Size
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "p-8 rounded-3xl relative flex flex-col justify-between transition-all",
                    plan.popular 
                      ? "bg-gradient-to-b from-[#E8B84A]/10 to-[#E8B84A]/[0.02] border border-[#E8B84A]/40 shadow-[0_0_40px_rgba(232,184,74,0.15)]"
                      : "bg-white/[0.01] border border-white/5 hover:border-white/10"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#E8B84A] text-black text-[9px] font-black uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#E8B84A]/60 block mb-2">{plan.name}</span>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-black">{plan.price}</span>
                      <span className="text-xs text-white/40">{plan.period}</span>
                    </div>
                    <p className="text-white/40 text-xs mb-6">{plan.desc}</p>
                    
                    <div className="border-t border-white/5 pt-6 space-y-3">
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/60">
                          <Check className="w-3.5 h-3.5 text-[#E8B84A] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href={plan.ctaText === "Talk to Sales" ? "#demo" : "#trial"}
                      className={cn(
                        "w-full h-11 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center",
                        plan.popular
                          ? "bg-[#E8B84A] text-black hover:shadow-[0_10px_20px_rgba(232,184,74,0.2)]"
                          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                      )}
                    >
                      {plan.ctaText || "Select Plan"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[48px] bg-gradient-to-br from-[#E8B84A]/10 via-transparent to-transparent border border-[#E8B84A]/25 relative overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.08),transparent_70%)]" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[11px] font-black text-[#E8B84A] uppercase tracking-[0.4em] mb-6 block">DEPLOY TODAY</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Ready To Scale Your Training Programmes?
              </h2>
              <p className="text-white/50 text-sm mb-10 max-w-lg mx-auto leading-relaxed">
                Replace fragmented tools with a single operating system built for structured programme delivery.
              </p>

              {/* Tag Checklist */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-[10px] font-black text-[#E8B84A] uppercase tracking-wider">
                {["Programmes", "Cohorts", "Participants", "Live Sessions", "Attendance", "Resources", "Assessments", "Certificates", "Analytics", "AI Intelligence"].map(t => (
                  <span key={t} className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#E8B84A]" /> {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#get-started"
                  className="h-[56px] px-12 rounded-2xl bg-[#E8B84A] text-black text-[11px] font-black uppercase tracking-widest hover:shadow-[0_20px_40px_rgba(232,184,74,0.3)] transition-all flex items-center justify-center hover:scale-[1.02]"
                >
                  get started
                </Link>
                <Link
                  href="#demo"
                  className="h-[56px] px-12 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <FooterPremium hideCTA={false} />
    </>
  );
}
