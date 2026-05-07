"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { 
  Zap, Shield, BarChart3, LayoutGrid, Cpu, Lock, 
  Workflow, ArrowRight, CheckCircle2, Globe, Users, 
  Database, Network, Monitor, Activity, TrendingUp
} from "lucide-react";

const featureData: any = {
  "curriculum-architect": {
    title: "Curriculum Architect",
    subtitle: "Design structured multi-layer programmes with absolute logic.",
    heroImg: "/manager-ops.png",
    accent: "text-accent",
    description: "The high-fidelity infrastructure for mapping complex learning journeys, certification paths, and cohort sequences at scale.",
    sections: [
      {
        title: "Programme Mapping",
        desc: "Build hierarchical programme structures with prerequisites, modules, and multi-threaded progression paths.",
        icon: LayoutGrid
      },
      {
        title: "Structural Governance",
        desc: "Enforce consistent standards across all curriculum versions with centralized revision control and auditing.",
        icon: Shield
      }
    ],
    showcase: {
      title: "Design with precision.",
      desc: "Our visual architect allows you to orchestrate every touchpoint of the programme journey with drag-and-drop structural logic.",
      img: "/wide-dashboard.png"
    }
  },
  "precision-delivery": {
    title: "Precision Delivery",
    subtitle: "Automate sessions and participant coordination at global volume.",
    heroImg: "/workstation.png",
    accent: "text-accent",
    description: "The operational backbone for executing high-stakes training sessions, tracking attendance, and managing schedules automatically.",
    sections: [
      {
        title: "Attendance Automation",
        desc: "Eliminate manual tracking with automated check-ins and real-time participation scoring.",
        icon: Zap
      },
      {
        title: "Live Orchestration",
        desc: "Monitor session health, trainer performance, and technical engagement across thousands of concurrent events.",
        icon: Monitor
      }
    ],
    showcase: {
      title: "Deliver without friction.",
      desc: "Synchronize thousands of participants across timezones with automated notifications and calendar integration.",
      img: "/team-collab.png"
    }
  },
  "operational-insights": {
    title: "Operational Insights",
    subtitle: "Real-time analytics and high-fidelity reporting engines.",
    heroImg: "/command-wide.png",
    accent: "text-accent",
    description: "Transform raw cohort data into strategic intelligence. Monitor completion rates, engagement velocity, and operational ROI.",
    sections: [
      {
        title: "Predictive Analytics",
        desc: "Identify at-risk participants and cohort bottlenecks before they impact programme success.",
        icon: TrendingUp
      },
      {
        title: "Intelligence Overlays",
        desc: "Layer complex data points to surface hidden operational efficiencies and cost-saving opportunities.",
        icon: BarChart3
      }
    ],
    showcase: {
      title: "Visible operations.",
      desc: "Gain absolute transparency into your global programme health with customizable high-fidelity dashboards.",
      img: "/success-dashboard.png"
    }
  },
  "ai-infrastructure": {
    title: "AI Infrastructure",
    subtitle: "Embedded enterprise AI for programme intelligence.",
    heroImg: "/ai-intel.png",
    accent: "text-accent",
    description: "Scale your capacity with intelligent copilots that automate grading, summarize sessions, and predict outcomes.",
    sections: [
      {
        title: "Automated Feedback",
        desc: "Execute high-volume assessments with AI-driven grading and personalized participant feedback loops.",
        icon: Cpu
      },
      {
        title: "Workflow Intelligence",
        desc: "Our AI systems automatically trigger operational actions based on participant performance and behavior.",
        icon: Zap
      }
    ],
    showcase: {
      title: "Intelligent scale.",
      desc: "Leverage proprietary models trained on high-performance operational data to optimize your programme delivery.",
      img: "/ai-intel.png"
    }
  },
  "security-governance": {
    title: "Governance & Security",
    subtitle: "Enterprise-grade permissions and infrastructure trust.",
    heroImg: "/security-analyst.png",
    accent: "text-accent",
    description: "Operate with absolute structural confidence. OYEN GRID is built for the world's most regulated enterprise environments.",
    sections: [
      {
        title: "RBAC Controls",
        desc: "Define granular permissions for coordinators, mentors, and administrators across the entire ecosystem.",
        icon: Lock
      },
      {
        title: "Audit Visibility",
        desc: "Maintain an immutable record of every structural change and data access across your global nodes.",
        icon: Shield
      }
    ],
    showcase: {
      title: "Trusted Architecture.",
      desc: "SOC2 Type II, ISO 27001, and GDPR compliance embedded directly into the infrastructure layer.",
      img: "/command-wide.png"
    }
  },
  "workflow-automation": {
    title: "Workflow Automation",
    subtitle: "Build automated triggers and progression logic.",
    heroImg: "/global-infra.png",
    accent: "text-accent",
    description: "Remove manual bottlenecks. OYEN GRID automates the complex logistics of high-volume programme management.",
    sections: [
      {
        title: "Operational Triggers",
        desc: "Automate communications, certifications, and progressions based on custom structural rules.",
        icon: Workflow
      },
      {
        title: "Zero-Latency Flows",
        desc: "Execute thousands of concurrent logic chains with absolute reliability across our global network.",
        icon: Network
      }
    ],
    showcase: {
      title: "Automate the complex.",
      desc: "Transform tedious operational tasks into self-executing workflows that scale with your ambitions.",
      img: "/wide-dashboard.png"
    }
  }
};

export default function FeaturePage() {
  const { slug } = useParams() as { slug: string };
  const data = featureData[slug];

  if (!data) return <div className="min-h-screen bg-black flex items-center justify-center">404 - Page Not Found</div>;

  return (
    <main className="min-h-screen bg-[#050812]">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImg} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050812] via-[#050812]/80 to-[#050812]" />
        </div>

        <div className="container-custom max-w-[1400px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">FEATURE OVERVIEW</span>
            </div>
            <h1 className="text-[44px] md:text-[68px] font-bold text-white leading-[1.05] mb-10 tracking-tight">
              {data.title} <br />
              <span className="text-white/40 italic">{data.subtitle}</span>
            </h1>
            <p className="text-[19px] text-white/50 leading-relaxed max-w-2xl font-light mb-12">
              {data.description}
            </p>
            <div className="flex gap-6">
               <button className="btn-primary h-[54px] px-12 text-[16px]">Start Building</button>
               <button className="h-[54px] px-10 text-white/60 hover:text-white font-bold text-[16px] transition-all">Watch Demo</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL STORYTELLING */}
      <section className="py-40 border-t border-white/5">
        <div className="container-custom max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight mb-16">
                  Engineered for <br />
                  <span className="text-accent italic">structural excellence.</span>
                </h2>
                <div className="space-y-16">
                   {data.sections.map((section: any, i: number) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all">
                           <section.icon className="w-6 h-6 text-accent group-hover:text-black transition-colors" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{section.title}</h4>
                           <p className="text-white/40 text-[15px] font-light leading-relaxed max-w-sm">{section.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="glass-card p-10 bg-secondary/10 border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="relative rounded-2xl overflow-hidden border border-white/5">
                      <img src={data.heroImg} alt="Visual" className="w-full h-auto opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   </div>
                   <div className="mt-8 flex items-center justify-between opacity-40">
                      <div className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Operational State</div>
                      <div className="flex gap-2">
                         <div className="w-2 h-2 rounded-full bg-accent" />
                         <div className="w-2 h-2 rounded-full bg-white/10" />
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* IMMERSIVE SHOWCASE */}
      <section className="py-40 bg-[#0B0B0D] relative overflow-hidden border-y border-white/5">
        <div className="container-custom max-w-[1400px] relative z-10">
          <div className="text-center mb-24">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight mb-8">
                  {data.showcase.title}
                </h2>
                <p className="text-[17px] text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
                  {data.showcase.desc}
                </p>
             </motion.div>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
          >
             <img src={data.showcase.img} alt="Showcase" className="w-full h-auto grayscale-[0.2]" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
             
             {/* Floating Stat Overlay */}
             <div className="absolute bottom-12 right-12 glass-card p-8 bg-[#050812]/95 border-accent/20 backdrop-blur-2xl shadow-2xl">
                <div className="text-[10px] font-black text-accent uppercase tracking-widest mb-3">System Performance</div>
                <div className="text-3xl font-bold text-white tracking-tighter">99.9% Uptime</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.03),transparent_70%)]" />
        <div className="container-custom max-w-[1400px] text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tighter leading-[1.05] mb-12">
              Ready to architect your <br />
              <span className="text-accent italic">next global programme?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <button className="btn-primary h-[60px] px-14 text-[18px] group flex items-center gap-4">
                Start Building Today <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
              </button>
              <button className="h-[60px] px-14 text-[18px] text-white/60 hover:text-white font-bold transition-all">
                Speak with Strategic Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
