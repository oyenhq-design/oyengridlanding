import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { FileText, Database, Lock, BookOpen, PieChart, ArrowRight } from "lucide-react";

export default function ResourcesIndex() {
  const resources = [
    { name: "Case Studies", href: "/resources/case-studies", icon: FileText },
    { name: "Documentation", href: "/resources/documentation", icon: Database },
    { name: "Security Center", href: "/resources/security", icon: Lock },
    { name: "Operational Playbooks", href: "/resources/playbooks", icon: BookOpen },
    { name: "AI Research", href: "/resources/ai-research", icon: PieChart }
  ];

  return (
    <main className="min-h-screen bg-[#050812]">
      <Header />
      <section className="pt-48 pb-32">
        <div className="container-custom max-w-[1400px]">
          <h1 className="text-6xl font-bold text-white mb-16 tracking-tight">Intelligence <span className="text-accent italic">Hub.</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((r) => (
              <Link key={r.name} href={r.href} className="glass-card p-12 bg-white/[0.02] border-white/5 hover:border-accent/40 transition-all group">
                <r.icon className="w-10 h-10 text-accent mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{r.name}</h3>
                <div className="flex items-center gap-2 text-accent text-[11px] font-black uppercase tracking-widest mt-8">Explore Resource <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
