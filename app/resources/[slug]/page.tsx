"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { 
  FileText, Database, Lock, BookOpen, PieChart, 
  ArrowRight, CheckCircle2, Globe, Shield, 
  BarChart3, Cpu, Network, Zap, TrendingUp, Info
} from "lucide-react";

const resourceData: any = {
  "case-studies": {
    title: "Case Studies",
    subtitle: "Real operational transformation stories from enterprise teams.",
    heroImg: "/training-session.png",
    description: "Explore how global leaders use OYEN GRID to coordinate complex training cohorts and multi-layered programmes at scale.",
    items: [
      { title: "TechFlow Operations", desc: "How TechFlow achieved 98.2% retention across 12 countries.", img: "/success-dashboard.png" },
      { title: "Global Edu Infrastructure", desc: "Scaling university-grade curriculum to 500k students.", img: "/command-wide.png" }
    ],
    type: "editorial"
  },
  "documentation": {
    title: "Documentation",
    subtitle: "Implementation guides, APIs, and infrastructure docs.",
    heroImg: "/global-infra.png",
    description: "Everything you need to integrate and build on OYEN GRID. Comprehensive guides for developers and programme architects.",
    items: [
      { title: "Quickstart Guide", desc: "Deploy your first structured programme in under 10 minutes.", icon: Zap },
      { title: "API Reference", desc: "Full REST API documentation for custom enterprise integrations.", icon: Database },
      { title: "CLI Tooling", desc: "Automate curriculum versioning and cohort deployment.", icon: Cpu }
    ],
    type: "docs"
  },
  "security": {
    title: "Security Center",
    subtitle: "Governance standards, encryption, and compliance.",
    heroImg: "/security-analyst.png",
    description: "The trusted foundation for your programme infrastructure. Learn about our security protocols and compliance certifications.",
    items: [
      { title: "Data Protection", desc: "E2E encryption and global data residency standards.", icon: Lock },
      { title: "Compliance Hub", desc: "Download SOC2, ISO 27001, and GDPR reports.", icon: Shield },
      { title: "Trust Report", desc: "Live system uptime and reliability monitoring.", icon: Activity }
    ],
    type: "trust"
  },
  "playbooks": {
    title: "Operational Playbooks",
    subtitle: "Best practices for managing programmes at scale.",
    heroImg: "/manager-ops.png",
    description: "Battle-tested blueprints for high-fidelity programme delivery, cohort management, and outcome tracking.",
    items: [
      { title: "The Scale Playbook", desc: "Strategic guide to orchestrating global training cohorts.", icon: BookOpen },
      { title: "Engagement Velocity", desc: "How to optimize participant performance and completion.", icon: TrendingUp }
    ],
    type: "library"
  },
  "ai-research": {
    title: "AI Research",
    subtitle: "Insights into intelligent operational infrastructure.",
    heroImg: "/ai-intel.png",
    description: "Our ongoing research into how AI transforms programme delivery, grading automation, and predictive outcomes.",
    items: [
      { title: "Predictive Engines", desc: "Whitepaper on our AI-driven participant health scoring.", icon: PieChart },
      { title: "Automation Lab", desc: "Experimental workflows for zero-manual programme management.", icon: Zap }
    ],
    type: "research"
  }
};

export default function ResourcePage() {
  const { slug } = useParams() as { slug: string };
  const data = resourceData[slug];

  if (!data) return <div className="min-h-screen bg-black flex items-center justify-center">404 - Page Not Found</div>;

  return (
    <main className="min-h-screen bg-[#050812]">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImg} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050812] via-[#050812]/90 to-[#050812]" />
        </div>

        <div className="container-custom max-w-[1400px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">RESOURCE CENTER</span>
            </div>
            <h1 className="text-[44px] md:text-[68px] font-bold text-white leading-[1.05] mb-10 tracking-tight">
              {data.title} <br />
              <span className="text-white/40 italic">{data.subtitle}</span>
            </h1>
            <p className="text-[19px] text-white/50 leading-relaxed max-w-2xl mx-auto font-light">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT LIST */}
      <section className="py-40 bg-[#050812]">
        <div className="container-custom max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {data.items.map((item: any, i: number) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group cursor-pointer"
               >
                 {item.img ? (
                   <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-8 border border-white/10 shadow-2xl group-hover:border-accent/40 transition-all">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                   </div>
                 ) : (
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-accent transition-all">
                      <item.icon className="w-8 h-8 text-accent group-hover:text-black transition-colors" />
                   </div>
                 )}
                 <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors">{item.title}</h4>
                 <p className="text-white/40 text-[15px] font-light leading-relaxed mb-8">{item.desc}</p>
                 <div className="flex items-center gap-2 text-accent text-[11px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-all">
                    Access Resource <ArrowRight className="w-3.5 h-3.5" />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-40 bg-[#0B0B0D] border-t border-white/5">
        <div className="container-custom max-w-[1400px] text-center">
           <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-12">
              <Info className="w-4 h-4 text-accent" />
              <span className="text-[12px] text-white/60 font-medium">Need custom integration guidance?</span>
              <button className="text-accent text-[12px] font-bold hover:underline">Speak with Support</button>
           </div>
           <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Expand your operational knowledge.</h2>
           <button className="btn-primary h-[54px] px-12 text-[16px]">Explore Intelligence Hub</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.48 12H2" />
    </svg>
  );
}
