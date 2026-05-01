import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";
import { Building2, Zap, Briefcase, ArrowRight } from "lucide-react";
import { InteractiveFeaturesSection } from "@/components/shared/interactive-features-section";
import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      id: "training-organisations",
      title: "Training Organisations",
      icon: Building2,
      problem: "Training organisations struggle with fragmented tools. You use one app for registrations, another for video calls, and a messy shared drive for materials. This leads to administrative overhead, lost links, and poor participant experiences.",
      solution: "OYEN Grid unifies your entire operation. Manage all your cohorts, instructors, and materials in one place. Automated session scheduling and integrated live rooms mean participants always know where to be. You get a professional, branded experience that scales effortlessly.",
      benefits: [
        "Eliminate tool fatigue and administrative chaos",
        "Deliver a premium, unified experience to clients",
        "Scale from 10 to 1,000 participants without extra work"
      ]
    },
    {
      id: "bootcamps",
      title: "Bootcamps",
      icon: Zap,
      problem: "Bootcamps are intense, multi-week programmes that require strict tracking. It's difficult to monitor who is falling behind, manage complex cohort schedules, and keep communication focused when using generic LMS or chat tools.",
      solution: "OYEN Grid is built for structure. We provide granular participant tracking, automated attendance, and clear cohort-based communication channels. Our system keeps participants on track and gives instructors real-time insights into engagement and completion.",
      benefits: [
        "Track participant progress and identify drop-offs instantly",
        "Manage complex prerequisites and cohort timelines",
        "Keep communication centralized and focused on learning"
      ]
    },
    {
      id: "corporate-programmes",
      title: "Corporate Programmes",
      icon: Briefcase,
      problem: "Internal corporate training often lacks structure and accountability. HR and L&D teams spend too much time managing calendar invites and tracking spreadsheets, while employees struggle to find past training recordings and materials.",
      solution: "OYEN Grid brings enterprise-grade structure to L&D. Automatically record and securely store every session in a central vault. Assign employees to specific training tracks, enforce attendance, and generate compliance and completion reports with a single click.",
      benefits: [
        "Secure, automatic storage of all corporate training assets",
        "Clear audit trails and completion reporting for HR",
        "Self-serve access to past training materials for employees"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0F]">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="py-20 bg-[#0B0B0F] border-b border-[#1F1F1F] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#C8A95A]/10 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Built for <span className="text-[#C8A95A]">structured learning</span>
            </h1>
            <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto">
              Discover how OYEN Grid solves the unique operational challenges of modern learning programmes.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                const isEven = idx % 2 !== 0;

                return (
                  <div key={solution.id} id={solution.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? 'lg:rtl' : ''}`}>
                    {/* Visual Side */}
                    <div className={`relative ${isEven ? 'lg:ltr' : ''}`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#C8A95A]/10 to-transparent rounded-3xl blur-2xl" />
                      <div className="relative bg-[#121212] border border-[#1F1F1F] rounded-3xl p-12 shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-24 h-24 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-8 relative">
                          <div className="absolute inset-0 bg-[#C8A95A]/20 blur-xl rounded-full" />
                          <Icon className="w-12 h-12 text-[#C8A95A] relative z-10" />
                        </div>
                        <h3 className="text-3xl font-bold text-white text-center">{solution.title}</h3>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={isEven ? 'lg:ltr' : ''}>
                      <h2 className="text-3xl font-bold text-white mb-8">{solution.title}</h2>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-[#A1A1AA] text-sm uppercase tracking-wider font-semibold mb-3">The Problem</h4>
                          <p className="text-[#A1A1AA] leading-relaxed text-lg border-l-2 border-[#1F1F1F] pl-4">
                            {solution.problem}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-[#C8A95A] text-sm uppercase tracking-wider font-semibold mb-3">The OYEN Grid Solution</h4>
                          <p className="text-white leading-relaxed text-lg border-l-2 border-[#C8A95A] pl-4">
                            {solution.solution}
                          </p>
                        </div>

                        <div className="pt-4">
                          <h4 className="text-white font-semibold mb-4">Key Benefits:</h4>
                          <ul className="space-y-3">
                            {solution.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A95A]" />
                                <span className="text-[#A1A1AA]">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <InteractiveFeaturesSection />

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
