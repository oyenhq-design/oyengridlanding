import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Users, Globe, Building2, GraduationCap, Shield, ArrowRight } from "lucide-react";

export default function SolutionsIndex() {
  const solutions = [
    { name: "Enterprise Onboarding", href: "/solutions/enterprise-onboarding", icon: Users },
    { name: "Global Programmes", href: "/solutions/global-programmes", icon: Globe },
    { name: "Training Operations", href: "/solutions/training-operations", icon: Building2 },
    { name: "Higher Education", href: "/solutions/higher-education", icon: GraduationCap },
    { name: "Government & NGOs", href: "/solutions/government-ngos", icon: Shield }
  ];

  return (
    <main className="min-h-screen bg-[#050812]">
      <Header />
      <section className="pt-48 pb-32">
        <div className="container-custom max-w-[1400px]">
          <h1 className="text-6xl font-bold text-white mb-16 tracking-tight">Platform <span className="text-accent italic">Solutions.</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <Link key={s.name} href={s.href} className="glass-card p-12 bg-white/[0.02] border-white/5 hover:border-accent/40 transition-all group">
                <s.icon className="w-10 h-10 text-accent mb-8" />
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{s.name}</h3>
                <div className="flex items-center gap-2 text-accent text-[11px] font-black uppercase tracking-widest mt-8">Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
