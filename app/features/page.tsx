import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";
import { DeepFeatureBreakdownSection } from "@/components/shared/deep-feature-breakdown-section";
import { CheckCircle2, Layers, Users, Video, Database, LineChart, GraduationCap, MessageSquare, Bot, StickyNote, ShieldCheck, HeadphonesIcon } from "lucide-react";

export default function FeaturesPage() {
  const featureSections = [
    {
      title: "Programme Infrastructure",
      description: "Build robust learning pathways with powerful structural tools.",
      icon: Layers,
      points: ["Programme creation & templates", "Structured session planning", "Dashboard control center"]
    },
    {
      title: "Participant Management",
      description: "Keep your cohorts organised and secure.",
      icon: Users,
      points: ["Invite-only secure access", "Assign participants to specific cohorts", "Organisation-level ownership"]
    },
    {
      title: "Session Delivery",
      description: "Seamless live instruction built directly into the platform.",
      icon: Video,
      points: ["Automated scheduling", "Secure session linking", "Integrated live rooms"]
    },
    {
      title: "Content & Storage",
      description: "A centralized vault for all your programme materials.",
      icon: Database,
      points: ["Unlimited file uploads", "Attach files directly to sessions", "Centralised, role-based access"]
    },
    {
      title: "Tracking & Insights",
      description: "Never lose track of participant progress.",
      icon: LineChart,
      points: ["Automated attendance tracking", "Session activity monitoring", "Comprehensive programme records"]
    },
    {
      title: "Bootcamp / Training System",
      description: "Purpose-built for intensive, multi-week programmes.",
      icon: GraduationCap,
      points: ["Detailed participant profiles", "Granular progress tracking", "Milestone & completion tracking", "Structured learning flow"]
    },
    {
      title: "Communication System",
      description: "Keep the conversation going without external chat apps.",
      icon: MessageSquare,
      points: ["In-session live chat", "Dedicated group chat for cohorts", "Direct messaging"]
    },
    {
      title: "AI Tools",
      description: "Work smarter with built-in artificial intelligence.",
      icon: Bot,
      points: ["AI chat assistant for instructors", "Automated session summaries", "Smart trainer preparation tools"]
    },
    {
      title: "Notes System",
      description: "Capture knowledge right where the learning happens.",
      icon: StickyNote,
      points: ["Private instructor notes", "Public session notes", "Participant-specific tracking notes"]
    },
    {
      title: "Structure & Control",
      description: "Our core differentiator. Maintain absolute operational clarity.",
      icon: ShieldCheck,
      points: ["Long-term programme memory", "Operational clarity at scale", "Strictly structured delivery"]
    },
    {
      title: "Support & Services",
      description: "We're with you every step of the way.",
      icon: HeadphonesIcon,
      points: ["White-glove setup support", "Priority technical assistance", "Dedicated training & onboarding"]
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
              Platform <span className="text-[#C8A95A]">Features</span>
            </h1>
            <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto">
              Everything you need to structure, deliver, and manage complex learning programmes at scale.
            </p>
          </div>
        </section>

        {/* Features List */}
        <section className="py-24 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureSections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div key={idx} className="bg-[#121212] border border-[#1F1F1F] rounded-3xl p-8 hover:border-[#C8A95A]/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-6 group-hover:bg-[#C8A95A]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{section.title}</h3>
                    <p className="text-[#A1A1AA] mb-6 min-h-[48px]">{section.description}</p>
                    <ul className="space-y-3">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#C8A95A] shrink-0 mt-0.5" />
                          <span className="text-[#A1A1AA] text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Overview Section at the bottom to reinforce structure */}
        <DeepFeatureBreakdownSection />

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
