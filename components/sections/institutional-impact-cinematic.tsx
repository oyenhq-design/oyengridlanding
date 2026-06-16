"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NetworkNode {
  id: string;
  type: "people" | "org";
  name: string;
  role: string;
  org: string;
  quote: string;
  supporting: string;
  results: string[];
  avatarUrl?: string; // used for people
  logoText?: string;   // used for org
}

const networkNodes: NetworkNode[] = [
  {
    id: "becky",
    type: "people",
    name: "Becky Nelson",
    role: "Program Director",
    org: "ALTSCHOOL",
    quote: "OYEN GRID replaced WhatsApp, Zoom, Google Drive, Sheets, and Typeform for us.",
    supporting: "We consolidated communication, attendance, reporting, live delivery, and learner management into a single platform, giving our team complete operational visibility.",
    results: ["40+ Cohorts Delivered", "1,200+ Learners Managed", "60% Less Admin Work"],
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "altschool_org",
    type: "org",
    name: "ALTSCHOOL",
    role: "Organization",
    org: "ALTSCHOOL",
    quote: "OYEN GRID replaced five different tools and gave us one operational workflow.",
    supporting: "We consolidated attendance, communication, reporting, and live delivery into a single operational platform.",
    results: ["40+ Cohorts Delivered", "94% Completion Rate", "60% Less Admin Work"],
    logoText: "ALT"
  },
  {
    id: "david",
    type: "people",
    name: "David Okafor",
    role: "Training Coordinator",
    org: "TalentQL",
    quote: "Attendance tracking and reporting became almost effortless.",
    supporting: "Facilitators no longer spend class time taking attendance or manually verifying user identity. The system handles all session logs natively.",
    results: ["50+ Active Cohorts", "2,500+ Learners Managed", "80% Time Saved"],
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "zuri_org",
    type: "org",
    name: "ZURI",
    role: "Organization",
    org: "ZURI",
    quote: "Visibility into learner engagement across every cohort has transformed our operations.",
    supporting: "Facilitators manage scheduling, resource distribution, and live feedback loops from one dashboard.",
    results: ["10,000+ Learners Coordinated", "75% Faster Reporting", "50+ Active Cohorts"],
    logoText: "ZUR"
  },
  {
    id: "sarah",
    type: "people",
    name: "Sarah Johnson",
    role: "Learning Operations Lead",
    org: "ZURI",
    quote: "We finally had visibility into learner engagement across every cohort.",
    supporting: "OYEN GRID centralized our resources and communication, helping us identify disengaged learners before they drop off.",
    results: ["10,000+ Learners Coordinated", "75% Faster Reporting", "50+ Active Cohorts"],
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "ingressive_org",
    type: "org",
    name: "Ingressive For Good",
    role: "Organization",
    org: "INGRESSIVE FOR GOOD",
    quote: "Sponsor and stakeholder reporting became dramatically easier.",
    supporting: "Instead of exporting data from multiple tools, our team generates operational reports from a single source of truth.",
    results: ["100+ Programs Delivered", "85% Faster Reporting Cycles", "30+ Coordinating Team Members"],
    logoText: "I4G"
  },
  {
    id: "michael",
    type: "people",
    name: "Michael Adeyemi",
    role: "Program Manager",
    org: "Ingressive For Good",
    quote: "Generating sponsor reports now takes minutes instead of days.",
    supporting: "The automated registry captures live session connection logs and links them directly to learner profiles for instant auditing.",
    results: ["100+ Programs Delivered", "85% Faster Reporting Cycles", "30+ Coordinating Team Members"],
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "talentql_org",
    type: "org",
    name: "TalentQL",
    role: "Organization",
    org: "TalentQL",
    quote: "We scaled our technical upskilling without increasing coordination complexity.",
    supporting: "Scheduling, material distribution, and class evaluations are fully managed under one system.",
    results: ["50+ Active Cohorts", "2,500+ Learners Managed", "80% Time Saved"],
    logoText: "TQL"
  },
  {
    id: "grace",
    type: "people",
    name: "Grace Mensah",
    role: "Community Lead",
    org: "She Code Africa",
    quote: "Everything from onboarding to completion is coordinated from one place.",
    supporting: "Coordinators and trainers communicate with learners by group directly in the app, eliminating external messaging tools.",
    results: ["5,000+ Members Supported", "90+ Learning Events", "Centralized Workflow"],
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "shecode_org",
    type: "org",
    name: "She Code Africa",
    role: "Organization",
    org: "SHE CODE AFRICA",
    quote: "OYEN GRID helped us scale learning operations without increasing complexity.",
    supporting: "Everything from learner onboarding to session delivery is coordinated from one platform.",
    results: ["5,000+ Members Supported", "90+ Learning Events", "Centralized Workflow"],
    logoText: "SCA"
  },
  {
    id: "gomycode_org",
    type: "org",
    name: "GOMYCODE",
    role: "Organization",
    org: "GOMYCODE",
    quote: "We now run training programs across multiple countries seamlessly.",
    supporting: "OYEN GRID acts as our centralized operating hub for regional coordinators and trainers.",
    results: ["Multi-country Training", "15+ Hubs Synchronized", "99.9% Uptime SLA"],
    logoText: "GMC"
  },
  {
    id: "ulesson_org",
    type: "org",
    name: "uLesson",
    role: "Organization",
    org: "ULESSON",
    quote: "Schools and academies get accurate performance logs automatically.",
    supporting: "We consolidated lesson planning, student tracking, and graduation awards in one system.",
    results: ["30,000+ Students Tracked", "94% Completion Rate", "Automated Grade Distribution"],
    logoText: "ULS"
  }
];

// Coordinate positions for the ecosystem network (relative percentages)
const positions = [
  { left: "50%", top: "45%" }, // 0: Center (Active Node)
  { left: "12%", top: "18%" }, // 1
  { left: "26%", top: "25%" }, // 2
  { left: "15%", top: "60%" }, // 3
  { left: "30%", top: "78%" }, // 4
  { left: "72%", top: "18%" }, // 5
  { left: "88%", top: "30%" }, // 6
  { left: "68%", top: "65%" }, // 7
  { left: "85%", top: "58%" }, // 8
  { left: "48%", top: "10%" }, // 9
  { left: "52%", top: "82%" }, // 10
  { left: "38%", top: "50%" }  // 11
];

export function InstitutionalImpactCinematic() {
  const [activeId, setActiveId] = useState("becky");
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndex = networkNodes.findIndex(node => node.id === activeId);
  const activeNode = networkNodes[activeIndex];

  const selectNode = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const selectNextNode = useCallback(() => {
    setActiveId(prevId => {
      const idx = networkNodes.findIndex(node => node.id === prevId);
      const nextIdx = (idx + 1) % networkNodes.length;
      return networkNodes[nextIdx].id;
    });
  }, []);

  // Autoplay functionality (8 seconds)
  useEffect(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);

    if (!isHovered) {
      autoplayTimerRef.current = setInterval(() => {
        selectNextNode();
      }, 8000);
    }

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isHovered, selectNextNode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") selectNextNode();
      if (e.key === "ArrowLeft") {
        setActiveId(prevId => {
          const idx = networkNodes.findIndex(node => node.id === prevId);
          const prevIdx = (idx - 1 + networkNodes.length) % networkNodes.length;
          return networkNodes[prevIdx].id;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectNextNode]);

  // Map each node to its current layout position. 
  // The active node always gets positions[0] (center).
  // The rest are distributed among positions[1..N].
  const getPositionStyle = (nodeId: string) => {
    if (nodeId === activeId) {
      return {
        ...positions[0],
        width: 100,
        height: 100,
        zIndex: 40
      };
    }
    
    // Find index of this node in the array excluding the active node
    const filteredNodes = networkNodes.filter(node => node.id !== activeId);
    const indexInFiltered = filteredNodes.findIndex(node => node.id === nodeId);
    const pos = positions[indexInFiltered + 1] || positions[1];
    
    return {
      ...pos,
      width: 58,
      height: 58,
      zIndex: 20
    };
  };

  return (
    <section 
      className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* SECTION HEADER */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10 text-center mb-16">
        <span className="text-[10px] font-black tracking-[0.35em] text-[#F5D76E] uppercase">
          CUSTOMER STORIES
        </span>
        <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-none mt-4 mb-5">
          Trusted by the people behind successful programs.
        </h2>
        <p className="text-[15px] text-white/50 max-w-[620px] mx-auto font-light leading-relaxed">
          Hear from program directors, facilitators, coordinators, and organizations using OYEN GRID to deliver training at scale.
        </p>
      </div>

      {/* CENTERED ECOSYSTEM LAYOUT CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-6 relative h-[380px] md:h-[480px] mb-12">
        
        {/* NETWORK BACKGROUND - Subtle connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0">
          <defs>
            <radialGradient id="netGlow" cx="50%" cy="45%" r="35%">
              <stop offset="0%" stopColor="#F5D76E" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#F5D76E" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#netGlow)" />
          
          {/* Render lines connecting surrounding nodes to the center active node */}
          {networkNodes.map((node) => {
            if (node.id === activeId) return null;
            const style = getPositionStyle(node.id);
            return (
              <motion.line
                key={`line-${node.id}`}
                x1="50%"
                y1="45%"
                x2={style.left}
                y2={style.top}
                stroke="#F5D76E"
                strokeWidth="0.75"
                strokeOpacity="0.18"
                strokeDasharray="4 4"
                layout
              />
            );
          })}
        </svg>

        {/* NODES LAYER */}
        <div className="absolute inset-0 z-10">
          {networkNodes.map((node) => {
            const isActive = node.id === activeId;
            const pos = getPositionStyle(node.id);

            return (
              <motion.button
                key={node.id}
                onClick={() => selectNode(node.id)}
                layout
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 18,
                  mass: 0.8,
                  layout: { duration: 0.5 }
                }}
                style={{
                  position: "absolute",
                  left: pos.left,
                  top: pos.top,
                  transform: "translate(-50%, -50%)",
                  width: pos.width,
                  height: pos.height,
                  zIndex: pos.zIndex,
                }}
                className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? "border-[2px] border-[#F5D76E] shadow-[0_0_30px_rgba(245,215,110,0.25)] bg-[#0C0F19]" 
                    : "opacity-60 hover:opacity-100 border border-white/10 hover:border-white/20 bg-[#080B12] hover:scale-[1.08] hover:shadow-[0_0_15px_rgba(245,215,110,0.1)]"
                } overflow-hidden select-none cursor-pointer`}
              >
                {node.type === "people" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={node.avatarUrl || ""}
                      alt={node.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center px-1">
                    <span className={`font-black tracking-wider leading-none uppercase ${
                      isActive ? "text-[11px] text-[#F5D76E]" : "text-[8px] text-white/50"
                    }`}>
                      {node.logoText}
                    </span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

      </div>

      {/* ACTIVE STORY CARD (Renders clean details below constellation) */}
      <div className="max-w-[850px] mx-auto px-6 relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="text-[10px] font-black tracking-[0.25em] text-[#F5D76E] uppercase mb-4 block">
              CUSTOMER STORY
            </span>

            {/* Large Quote */}
            <blockquote className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-[1.25] mb-6 select-none max-w-[760px] mx-auto">
              “{activeNode.quote}”
            </blockquote>

            {/* Supporting Copy */}
            <p className="text-[15px] text-white/50 leading-relaxed max-w-[620px] mx-auto mb-8 font-light">
              {activeNode.supporting}
            </p>

            {/* Author Attribution */}
            <div className="mb-10">
              <span className="text-[14px] font-bold text-white tracking-tight block">
                {activeNode.name}
              </span>
              <span className="text-[11px] font-black text-white/30 uppercase tracking-widest mt-1 block">
                {activeNode.role} • {activeNode.org}
              </span>
            </div>

            {/* Results cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[780px] mx-auto mb-10">
              {activeNode.results.map((result, idx) => {
                // Split value and text label
                const [val, ...labelParts] = result.split(" ");
                const label = labelParts.join(" ");

                return (
                  <div key={idx} className="p-5 rounded-xl bg-white/[0.01] border border-white/5 text-center">
                    <div className="text-[24px] md:text-[28px] font-bold text-[#F5D76E] tracking-tight mb-0.5">
                      {val}
                    </div>
                    <div className="text-[9.5px] font-black text-white/30 uppercase tracking-wider">
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Read Case Study Button */}
            <div>
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#F5D76E] hover:text-white uppercase tracking-widest transition-colors"
              >
                Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
