"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { 
  Users, Globe, Building2, GraduationCap, Shield, 
  ArrowRight, CheckCircle2, Zap, BarChart3, Target, 
  Network, Cpu, Database, Briefcase, HeartHandshake
} from "lucide-react";

const solutionData: any = {
  "enterprise-onboarding": {
    title: "Enterprise Onboarding",
    subtitle: "Scale workforce enablement with structured learning systems.",
    heroImg: "/team-collab.png",
    accent: "text-accent",
    description: "Standardize the employee journey across global offices. OYEN GRID ensures every new hire receives high-fidelity training and structural support.",
    useCase: "Corporate Excellence",
    metrics: [
      { label: "Onboarding Speed", val: "3.5x Faster" },
      { label: "Retention", val: "92% Index" }
    ],
    sections: [
      { title: "Standardized Learning Paths", desc: "Enforce consistent onboarding modules across all departments and regions.", icon: Target },
      { title: "Role-Specific Progression", desc: "Automate technical training sequences based on specific employee functions.", icon: Cpu }
    ],
    visual: "/workstation.png"
  },
  "global-programmes": {
    title: "Global Programmes",
    subtitle: "Coordinate distributed cohorts across regions and time zones.",
    heroImg: "/global-infra.png",
    accent: "text-accent",
    description: "Manage complex multi-country training operations from a single command center. OYEN GRID provides absolute visibility into global performance.",
    useCase: "Infinite Scale",
    metrics: [
      { label: "Regional Nodes", val: "12 Global" },
      { label: "Sync Latency", val: "<50ms" }
    ],
    sections: [
      { title: "Multi-Region Orchestration", desc: "Deploy programme materials and sessions globally with one-click structural updates.", icon: Globe },
      { title: "Localized Reporting", desc: "Gain insights into regional performance while maintaining global governance.", icon: BarChart3 }
    ],
    visual: "/command-wide.png"
  },
  "training-operations": {
    title: "Training Operations",
    subtitle: "Centralize delivery, reporting, and participant engagement.",
    heroImg: "/manager-ops.png",
    accent: "text-accent",
    description: "The operational engine for training providers and departments who require absolute control over session logistics and data.",
    useCase: "Operational Power",
    metrics: [
      { label: "Admin Overhead", val: "-60% Reduction" },
      { label: "Delivery Accuracy", val: "100% Audit" }
    ],
    sections: [
      { title: "Automated Logistics", desc: "Let the system handle scheduling, notifications, and cohort communication.", icon: Zap },
      { title: "Centralized Data Governance", desc: "A single source of truth for all participant records and outcomes.", icon: Database }
    ],
    visual: "/wide-dashboard.png"
  },
  "higher-education": {
    title: "Higher Education",
    subtitle: "Modern infrastructure for academic operations.",
    heroImg: "/training-session.png",
    accent: "text-accent",
    description: "Empower universities and institutions with high-fidelity digital infrastructure for credit-bearing courses and student progression.",
    useCase: "Academic Logic",
    metrics: [
      { label: "Student Completion", val: "+28% Lift" },
      { label: "Credit Tracking", val: "100% Precision" }
    ],
    sections: [
      { title: "Degree Mapping", desc: "Translate complex academic requirements into structured digital curriculum flows.", icon: GraduationCap },
      { title: "Institutional Auditing", desc: "Automated logs for accreditation and regulatory compliance reporting.", icon: Shield }
    ],
    visual: "/success-dashboard.png"
  },
  "government-ngos": {
    title: "Government & NGOs",
    subtitle: "Manage large-scale impact programmes with visibility.",
    heroImg: "/command-wide.png",
    accent: "text-accent",
    description: "High-stakes impact delivery infrastructure for government agencies and non-governmental organizations operating at scale.",
    useCase: "Public Impact",
    metrics: [
      { label: "Participants Managed", val: "500k+" },
      { label: "Impact Tracking", val: "Real-time" }
    ],
    sections: [
      { title: "Scale Infrastructure", desc: "Provision thousands of sessions for public-facing training initiatives effortlessly.", icon: Network },
      { title: "Transparency Layer", desc: "Provide stakeholders with absolute visibility into programme spend and impact.", icon: HeartHandshake }
    ],
    visual: "/security-analyst.png"
  }
};

export default function SolutionPage() {
  const { slug } = useParams() as { slug: string };
  const data = solutionData[slug];

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="lg:col-span-7"
             >
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                   <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">{data.useCase}</span>
                </div>
                <h1 className="text-[44px] md:text-[68px] font-bold text-white leading-[1.05] mb-10 tracking-tight">
                  {data.title} <br />
                  <span className="text-white/40 italic">{data.subtitle}</span>
                </h1>
                <p className="text-[19px] text-white/50 leading-relaxed max-w-2xl font-light mb-12">
                  {data.description}
                </p>
                <div className="flex gap-8">
                   {data.metrics.map((metric: any, i: number) => (
                     <div key={i}>
                        <div className="text-3xl font-bold text-white tracking-tighter mb-1">{metric.val}</div>
                        <div className="text-[10px] font-black text-accent uppercase tracking-widest">{metric.label}</div>
                     </div>
                   ))}
                </div>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="lg:col-span-5 hidden lg:block"
             >
                <div className="glass-card p-4 bg-secondary/10 border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
                   <img src={data.visual} alt="Solution Visual" className="w-full h-auto grayscale opacity-80" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL WORKFLOW */}
      <section className="py-40 bg-[#0B0B0D] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,179,1,0.03),transparent_70%)]" />
        <div className="container-custom max-w-[1400px] relative z-10">
          <div className="text-center mb-24">
             <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight">How it <span className="text-accent italic">works.</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {data.sections.map((section: any, i: number) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="glass-card p-12 bg-white/[0.02] border-white/5 hover:border-accent/40 transition-all group"
               >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-10 group-hover:bg-accent transition-all">
                     <section.icon className="w-8 h-8 text-accent group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{section.title}</h3>
                  <p className="text-white/40 text-[16px] font-light leading-relaxed mb-8">{section.desc}</p>
                  <div className="flex items-center gap-2 text-accent text-[11px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-all cursor-pointer">
                     Explore Capability <ArrowRight className="w-3.5 h-3.5" />
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-60 relative overflow-hidden bg-[#050812]">
        <div className="container-custom max-w-[1400px] text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tighter leading-[1.05] mb-12">
              Scale your programme <br />
              <span className="text-accent italic">with global infrastructure.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <button className="btn-primary h-[60px] px-14 text-[18px] group flex items-center gap-4">
                Talk to Strategic Sales <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
              </button>
              <button className="h-[60px] px-14 text-[18px] text-white/60 hover:text-white font-bold transition-all">
                Request Platform Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
