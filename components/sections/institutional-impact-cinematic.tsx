"use client";

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

export function InstitutionalImpactCinematic() {
  // Double the profiles array to ensure seamless infinite looping
  const doubleProfiles = [...customerProfiles, ...customerProfiles];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E7E3DA]">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle background glows removed as per instruction */}
      <div className="absolute inset-0 pointer-events-none z-0">
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center mb-16 px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C99A20]" />
            <span className="text-[10px] font-black tracking-widest text-[#C99A20] uppercase">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-[#08111F] tracking-tight leading-[1.1] mb-5 max-w-[700px] mx-auto">
            Trusted by teams building better organizations.
          </h2>
          <p className="text-sm md:text-base text-[#667085] max-w-[620px] mx-auto font-normal leading-relaxed">
            Hear from program directors, facilitators, coordinators, and organizations using OYEN GRID to deliver training at scale.
          </p>
        </div>

        {/* INFINITE MARQUEE ROW */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Side Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#FFFFFF] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#FFFFFF] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-track">
            {doubleProfiles.map((profile, i) => (
              <div
                key={`${profile.id}-${i}`}
                className="w-[340px] md:w-[400px] min-h-[270px] md:min-h-[300px] flex-shrink-0 bg-[#FCFBF8] border border-[#E7E3DA] rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-[#C99A20]/40 hover:shadow-sm transition-all duration-300 shadow-sm backdrop-blur-md relative group"
              >
                {/* Gold Quote Mark Icon */}
                <span className="absolute top-8 right-10 text-[44px] text-[#C99A20]/10 font-serif leading-none group-hover:text-[#C99A20]/25 transition-colors duration-300">
                  ”
                </span>

                {/* Star Ratings */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      className="w-3.5 h-3.5 text-[#C99A20] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Content */}
                <blockquote className="text-[#08111F]/90 text-[13.5px] md:text-[14.5px] leading-relaxed font-normal mb-8 italic flex-grow">
                  &ldquo;{profile.quote}&rdquo;
                </blockquote>

                {/* Profile Info & Company Logo */}
                <div className="flex items-center justify-between pt-5 border-t border-[#E7E3DA]">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E7E3DA] shrink-0">
                      <Image
                        src={profile.avatarUrl}
                        alt={profile.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#08111F] truncate tracking-wide">
                        {profile.name}
                      </h4>
                      <span className="text-[9.5px] font-black text-[#C99A20] tracking-[0.18em] uppercase mt-0.5 block truncate">
                        {profile.role}
                      </span>
                    </div>
                  </div>

                  {/* Company Logo Badge */}
                  <div className="shrink-0 px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#E7E3DA] flex items-center justify-center">
                    <span className="text-[9px] font-black tracking-widest text-[#667085] uppercase">
                      {profile.org}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ACTION */}
        <div className="text-center mt-12 px-6">
          <Link
            href="/resources/customer-stories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A87812] hover:text-[#08111F] uppercase tracking-widest group cursor-pointer"
          >
            Explore More Stories
            <span
              className="transform group-hover:translate-x-1.5 text-[#C99A20]"
              style={{ transition: 'transform 250ms ease' }}
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
