import { Activity, Cpu, Network, Database, Shield, Zap, Globe, Users, BarChart3, Settings, Lock, FileCheck, Layers, Boxes, Bot, LineChart, Server, Workflow, Radio, Brain, BookOpen, GraduationCap, Building2, Terminal, Target } from "lucide-react";

export const enterpriseData: Record<string, any> = {
  "operations/live-session-infrastructure": {
    title: "Live Session Infrastructure",
    subtitle: "Real-time orchestration",
    description: "High-fidelity conferencing, automated moderation, and structured operational delivery systems for global cohorts.",
    category: "Operations",
    metrics: [
      { label: "Uptime", value: "99.99%", trend: "+0.01%" },
      { label: "Latency", value: "42ms", trend: "-12%" },
      { label: "Concurrent Sessions", value: "12,400", trend: "+18%" },
      { label: "Sync Accuracy", value: "99.99%", trend: "Stable" }
    ],
    focusAreas: [
      { title: "HD Orchestration", desc: "Military-grade video and audio synchronization across distributed networks.", icon: Radio },
      { title: "Smart Moderation", desc: "AI-assisted participant management and engagement monitoring.", icon: Bot },
      { title: "Session Telemetry", desc: "Real-time visibility into session health and participant interaction.", icon: Activity },
      { title: "Resilient Delivery", desc: "Automated failover systems ensuring zero-interruption programme execution.", icon: Shield }
    ]
  },
  "programmes/cohort-management": {
    title: "Cohort Management",
    subtitle: "Institutional Scale",
    description: "Orchestrate complex participant groups, programme schedules, and delivery pipelines with total operational visibility.",
    category: "Programmes",
    metrics: [
      { label: "Active Cohorts", value: "840", trend: "+14%" },
      { label: "Completion Rate", value: "92%", trend: "+5%" },
      { label: "Coordinator Ratio", value: "1:250", trend: "Optimized" },
      { label: "Delivery Speed", value: "2.4x", trend: "Accelerated" }
    ],
    focusAreas: [
      { title: "Pipeline Synchronization", desc: "Align multiple programme schedules and resource allocation automatically.", icon: Workflow },
      { title: "Resource Optimization", desc: "Intelligent balancing of facilitators and infrastructure across global nodes.", icon: Boxes },
      { title: "Automated Onboarding", desc: "Zero-friction participant entry and institutional identity verification.", icon: Users },
      { title: "Governance Controls", desc: "Strict administrative permissions and programme integrity monitoring.", icon: Shield }
    ]
  },
  "intelligence/operational-ai": {
    title: "Operational AI",
    subtitle: "Autonomous Facilitation",
    description: "Autonomous facilitation and intelligent operational assistance designed for large-scale institutional coordination.",
    category: "Intelligence",
    metrics: [
      { label: "AI Reasoning", value: "GPT-4o Class", trend: "Top-tier" },
      { label: "Processing Speed", value: "0.4s", trend: "-15%" },
      { label: "Automation Rate", value: "82%", trend: "+12%" },
      { label: "Decision Accuracy", value: "98.8%", trend: "+1.1%" }
    ],
    focusAreas: [
      { title: "Facilitation Autonomy", desc: "AI agents that manage schedules, answer queries and guide cohorts.", icon: Bot },
      { title: "Natural Language Sync", desc: "Deep semantic understanding of institutional curriculum and workflows.", icon: Brain },
      { title: "Actionable Insights", desc: "Real-time recommendations for programme directors and facilitators.", icon: Target },
      { title: "Workflow Automation", desc: "Seamless integration of AI into complex operational pipelines.", icon: Workflow }
    ]
  },
  "infrastructure/multi-region-systems": {
    title: "Multi-Region Systems",
    subtitle: "Global Resiliency",
    description: "Distributed operational systems with resilient deployment architecture for mission-critical institutional coordination.",
    category: "Infrastructure",
    metrics: [
      { label: "Active Regions", value: "24", trend: "+4" },
      { label: "Node Availability", value: "99.999%", trend: "High" },
      { label: "Sync Latency", value: "<150ms", trend: "Global" },
      { label: "Data Sovereignty", value: "Local", trend: "Compliant" }
    ],
    focusAreas: [
      { title: "Distributed Orchestration", desc: "Synchronized programme delivery across multiple geographic territories.", icon: Globe },
      { title: "Edge Deployment", desc: "Infrastructure deployed closer to participants for zero-lag interaction.", icon: Zap },
      { title: "Failover Architecture", desc: "Automatic redirection of traffic and services during regional disruptions.", icon: Shield },
      { title: "Governance Sharding", desc: "Localised compliance and data management within a global framework.", icon: Lock }
    ]
  },
  "pricing/enterprise": {
    title: "Enterprise Infrastructure",
    subtitle: "Institutional Customization",
    description: "Private operational architecture and enterprise deployment systems for national and global institutions.",
    category: "Pricing",
    metrics: [
      { label: "SLA", value: "99.999%", trend: "Guaranteed" },
      { label: "Users", value: "Unlimited", trend: "Scale" },
      { label: "Support", value: "Dedicated", trend: "24/7" },
      { label: "Security", value: "Custom", trend: "Verified" }
    ],
    focusAreas: [
      { title: "Custom Deployment", desc: "On-premise or private cloud infrastructure built to your specifications.", icon: Server },
      { title: "White-Label Ops", desc: "Branded operational environments for seamless institutional integration.", icon: Layers },
      { title: "Military-Grade Security", desc: "Advanced encryption, air-gapped options and sovereign data control.", icon: Shield },
      { title: "Strategy & Governance", desc: "Expert advisory on large-scale institutional digital transformation.", icon: Building2 }
    ]
  }
};

export const getPageData = (slug: string) => {
  return enterpriseData[slug] || {
    title: slug.split('/').pop()?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || "Operational Node",
    subtitle: "Institutional Infrastructure",
    description: "Professional operational infrastructure for institutional coordination and structured programme delivery at global scale.",
    category: slug.split('/')[0].charAt(0).toUpperCase() + slug.split('/')[0].slice(1),
    metrics: [
      { label: "System Status", value: "Operational", trend: "Stable" },
      { label: "Infrastructure", value: "Global", trend: "Verified" },
      { label: "Security", value: "Tier 4", trend: "Active" },
      { label: "Reliability", value: "99.9%", trend: "Guaranteed" }
    ],
    focusAreas: [
      { title: "Institutional Sync", desc: "Real-time coordination across distributed global nodes.", icon: Globe },
      { title: "Enterprise Security", desc: "Advanced governance and compliance automation systems.", icon: Shield },
      { title: "Operational Scale", desc: "Designed for national and global scale programme delivery.", icon: Zap },
      { title: "Live Telemetry", desc: "Instant visibility into every operational metric across the grid.", icon: Activity }
    ]
  };
};
