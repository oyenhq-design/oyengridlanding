"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CustomerProfile {
  id: string;
  name: string;
  role: string;
  org: string;
  quote: string;
  supporting: string;
  avatarUrl: string;
}

const customerProfiles: CustomerProfile[] = [
  {
    id: "becky",
    name: "Becky Nelson",
    role: "Program Director",
    org: "ALTSCHOOL",
    quote: "OYEN GRID replaced WhatsApp, Zoom, Google Drive, Sheets, and Typeform for us.",
    supporting: "We consolidated attendance, communication, reporting, and live delivery into a single operational platform, giving our team complete operational visibility.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "david",
    name: "David Okafor",
    role: "Training Coordinator",
    org: "TalentQL",
    quote: "Attendance tracking and reporting became almost effortless.",
    supporting: "Facilitators no longer spend class time taking attendance or manually verifying user identity. The system handles all session logs natively.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    role: "Learning Operations Lead",
    org: "ZURI",
    quote: "We finally had visibility into learner engagement across every cohort.",
    supporting: "OYEN GRID centralized our resources and communication, helping us identify disengaged learners before they drop off.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "michael",
    name: "Michael Adeyemi",
    role: "Program Manager",
    org: "Ingressive For Good",
    quote: "Generating sponsor reports now takes minutes instead of days.",
    supporting: "The automated registry captures live session connection logs and links them directly to learner profiles for instant auditing.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "grace",
    name: "Grace Mensah",
    role: "Community Lead",
    org: "She Code Africa",
    quote: "Everything from onboarding to completion is coordinated from one place.",
    supporting: "Coordinators and trainers communicate with learners by group directly in the app, eliminating external messaging tools.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "john",
    name: "John Kamara",
    role: "Operations Lead",
    org: "GOMYCODE",
    quote: "OYEN GRID helped us scale learning operations without increasing complexity.",
    supporting: "We consolidated lesson planning, student tracking, and graduation awards in one centralized operating hub.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "amara",
    name: "Amara Okoye",
    role: "Academic Coordinator",
    org: "uLesson",
    quote: "We now run training programs across multiple countries seamlessly.",
    supporting: "Regional coordinators and trainers can sync curriculum and schedules instantly, providing unified oversight.",
    avatarUrl: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "tunde",
    name: "Tunde Bakare",
    role: "Lead Facilitator",
    org: "AltSchool Africa",
    quote: "The built-in live session tools made a night-and-day difference.",
    supporting: "We no longer have to share links manually. The classroom environment is fully integrated into the learner portal.",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

// 8 Surrounding coordinates mapping to relative positions in a circle/constellation layout
const positions = [
  { left: "50%", top: "50%" }, // 0: Center position (active profile)
  { left: "20%", top: "20%" }, // 1
  { left: "32%", top: "30%" }, // 2
  { left: "24%", top: "70%" }, // 3
  { left: "38%", top: "76%" }, // 4
  { left: "68%", top: "20%" }, // 5
  { left: "80%", top: "30%" }, // 6
  { left: "64%", top: "70%" }, // 7
  { left: "76%", top: "76%" }  // 8
];

export function InstitutionalImpactCinematic() {
  const [activeId, setActiveId] = useState("becky");
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndex = customerProfiles.findIndex(p => p.id === activeId);
  const activeProfile = customerProfiles[activeIndex];

  const selectNext = useCallback(() => {
    setActiveId(prevId => {
      const idx = customerProfiles.findIndex(p => p.id === prevId);
      const nextIdx = (idx + 1) % customerProfiles.length;
      return customerProfiles[nextIdx].id;
    });
  }, []);

  // Autoplay 6s timer, paused by hover or interaction
  useEffect(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);

    if (!isHovered && !isInteracting) {
      autoplayTimerRef.current = setInterval(() => {
        selectNext();
      }, 6000);
    }

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isHovered, isInteracting, selectNext]);

  // Clean up interaction timer on unmount
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  // Handle manual interaction with 10s pause
  const handleAvatarClick = (id: string) => {
    setActiveId(id);
    setIsInteracting(true);
    
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 10000);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        selectNext();
        setIsInteracting(true);
        if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
        interactionTimeoutRef.current = setTimeout(() => setIsInteracting(false), 10000);
      }
      if (e.key === "ArrowLeft") {
        setActiveId(prevId => {
          const idx = customerProfiles.findIndex(p => p.id === prevId);
          const prevIdx = (idx - 1 + customerProfiles.length) % customerProfiles.length;
          return customerProfiles[prevIdx].id;
        });
        setIsInteracting(true);
        if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
        interactionTimeoutRef.current = setTimeout(() => setIsInteracting(false), 10000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectNext]);

  // Node position styling mapper
  const getNodeStyle = (id: string) => {
    if (id === activeId) {
      return {
        ...positions[0],
        width: 88,
        height: 88,
        zIndex: 30
      };
    }

    const surroundingProfiles = customerProfiles.filter(p => p.id !== activeId);
    const indexInFiltered = surroundingProfiles.findIndex(p => p.id === id);
    const pos = positions[indexInFiltered + 1] || positions[1];

    return {
      ...pos,
      width: 48,
      height: 48,
      zIndex: 20
    };
  };

  return (
    <section 
      className="py-16 md:py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-none mb-4">
            Trusted by the people behind successful programs.
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#A1A1A1] max-w-[620px] mx-auto font-light leading-relaxed">
            Hear from program directors, facilitators, coordinators, and organizations using OYEN GRID to deliver training at scale.
          </p>
        </div>

        {/* ECOSYSTEM/AVATARS CLUSTER CONTAINER */}
        <div className="relative h-[180px] md:h-[200px] max-w-[720px] mx-auto mb-3">
          
          {/* Subtle connection lines connecting surrounding avatars to active center */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0">
            {customerProfiles.map(p => {
              if (p.id === activeId) return null;
              const pos = getNodeStyle(p.id);
              return (
                <motion.line
                  key={`line-${p.id}`}
                  x1="50%"
                  y1="50%"
                  x2={pos.left}
                  y2={pos.top}
                  stroke="#F5D76E"
                  strokeWidth="0.75"
                  strokeOpacity="0.15"
                  layout
                />
              );
            })}
          </svg>

          {/* Avatars */}
          <div className="absolute inset-0 z-10">
            {customerProfiles.map(profile => {
              const isActive = profile.id === activeId;
              const pos = getNodeStyle(profile.id);

              return (
                <motion.button
                  key={profile.id}
                  onClick={() => handleAvatarClick(profile.id)}
                  layout
                  animate={{
                    left: pos.left,
                    top: pos.top,
                    width: pos.width,
                    height: pos.height,
                    scale: isActive ? 1.08 : 0.9,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 15,
                    mass: 0.8,
                    layout: { duration: 0.6 }
                  }}
                  style={{
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    zIndex: pos.zIndex,
                  }}
                  className={`rounded-full overflow-hidden flex items-center justify-center transition-shadow duration-300 cursor-pointer ${
                    isActive 
                      ? "border-2 border-[#F5D76E] shadow-[0_0_20px_rgba(245,215,110,0.25)] bg-[#0C0F19]" 
                      : "hover:opacity-100 hover:scale-[1.05] border border-white/10"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={profile.avatarUrl}
                      alt={profile.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* ACTIVE TESTIMONIAL DISPLAY (Primary focus) */}
        <div className="max-w-[500px] mx-auto text-center relative z-20 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              
              {/* Quote Wrapper with positioned icon */}
              <div className="relative w-full px-6 mt-3">
                <span className="absolute top-[-10px] left-[10px] text-[36px] text-[#F5D76E] opacity-35 select-none font-serif leading-none">
                  ❝
                </span>
                
                {/* Testimonial Quote */}
                <blockquote className="text-[20px] md:text-[22px] font-bold text-white tracking-tight leading-[1.35] pt-1">
                  "{activeProfile.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="mt-4 flex flex-col items-center">
                <span className="text-[16px] font-semibold text-white tracking-tight leading-none">
                  {activeProfile.name}
                </span>
                <span className="text-[13px] font-black text-[#F5D76E] uppercase tracking-[0.2em] mt-1 block">
                  {activeProfile.role} · {activeProfile.org}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Explore More Stories Link */}
          <div className="w-full text-right mt-6 pr-6">
            <Link
              href="/resources/customer-stories"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#F5D76E] hover:text-white tracking-[0.02em] group cursor-pointer"
              style={{ transition: 'color 250ms ease' }}
            >
              Explore More Stories
              <span 
                className="transform group-hover:translate-x-1"
                style={{ transition: 'transform 250ms ease' }}
              >
                →
              </span>
            </Link>
          </div>

          {/* PROGRESS INDICATOR DOTS */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {customerProfiles.map((profile, idx) => (
              <button
                key={`dot-${profile.id}`}
                onClick={() => handleAvatarClick(profile.id)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex 
                    ? "bg-[#F5D76E] w-3" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to story ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
