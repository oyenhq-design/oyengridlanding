import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { LayoutGrid, Zap, BarChart3, Cpu, Lock, Workflow, ArrowRight } from "lucide-react";

export default function FeaturesIndex() {
  const features = [
    { name: "Curriculum Architect", href: "/features/curriculum-architect", icon: LayoutGrid },
    { name: "Precision Delivery", href: "/features/precision-delivery", icon: Zap },
    { name: "Operational Insights", href: "/features/operational-insights", icon: BarChart3 },
    { name: "AI Infrastructure", href: "/features/ai-infrastructure", icon: Cpu },
    { name: "Governance & Security", href: "/features/security-governance", icon: Lock },
    { name: "Workflow Automation", href: "/features/workflow-automation", icon: Workflow }
  ];

  return (
    <main className="min-h-screen bg-[#050812]">
      <Header />
      <section className="pt-48 pb-32">
        <div className="container-custom max-w-[1400px]">
          <h1 className="text-6xl font-bold text-white mb-16 tracking-tight">Platform <span className="text-accent italic">Features.</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <Link key={f.name} href={f.href} className="glass-card p-12 bg-white/[0.02] border-white/5 hover:border-accent/40 transition-all group">
                <f.icon className="w-10 h-10 text-accent mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.name}</h3>
                <div className="flex items-center gap-2 text-accent text-[11px] font-black uppercase tracking-widest mt-8">Explore Feature <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
