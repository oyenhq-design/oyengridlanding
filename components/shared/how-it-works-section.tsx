
"use client";

const steps = [
  {
    title: "1. Structure",
    desc: "Design your programme with modules, sessions, and access rules—all in one place.",
  },
  {
    title: "2. Deliver",
    desc: "Schedule, launch, and monitor sessions with real-time attendance and engagement.",
  },
  {
    title: "3. Track",
    desc: "See progress, completion, and analytics for every cohort and participant.",
  },
  {
    title: "4. Optimise",
    desc: "Use insights to improve outcomes and scale your training with confidence.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#10141b] to-[#0b0f14]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center tracking-tight leading-tight">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#181d23] flex items-center justify-center mb-6 text-2xl font-bold text-[#D4AF37]">
                {step.title.split(".")[0]}
              </div>
              <div className="text-xl font-semibold text-white mb-2">{step.title.replace(/^[0-9]+\. /, "")}</div>
              <div className="text-base text-white/60 leading-relaxed">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SessionPreview() {
  return (
    <UIPanel className="relative aspect-video flex flex-col min-h-85">
      {/* Video Stage */}
      <div className="flex-1 bg-[#101014] flex items-center justify-center relative border-b border-white/6">
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-white/3 border border-white/9 flex items-center justify-center">
            <VideoIcon className="w-7 h-7 text-[#C9A86A]" />
          </div>
          <p className="text-[12px] text-[#C9A86A] font-semibold">Session broadcast active</p>
        </div>
        
        {/* Indicators */}
        <div className="absolute top-5 left-5 flex items-center gap-3">
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[11px] font-bold text-red-500 tracking-wider">LIVE</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/9 px-3 py-1 rounded-lg">
            <Users className="w-4 h-4 text-[#C9A86A]" />
            <span className="text-[11px] font-bold text-[#EDEDED]">124</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="h-16 bg-[#0D0D0D] border-t border-white/9 px-8 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-9 h-9 rounded-lg bg-white/3 flex items-center justify-center border border-white/9">
            <Mic className="w-5 h-5 text-[#EDEDED]" />
          </div>
          <div className="w-9 h-9 rounded-lg bg-white/3 flex items-center justify-center border border-white/9">
            <VideoIcon className="w-5 h-5 text-[#EDEDED]" />
          </div>
          <div className="w-9 h-9 rounded-lg bg-white/3 flex items-center justify-center border border-white/9">
            <MessageSquare className="w-5 h-5 text-[#EDEDED]" />
          </div>
        </div>
        <div className="h-9 px-5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center">
          <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest">End Session</span>
        </div>
      </div>
    </UIPanel>
  )
}

function AnalyticsPreview() {
  return (
    <UIPanel className="p-8">
      <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/9">
        <span className="text-[13px] font-bold text-[#EDEDED] uppercase tracking-widest">Performance Intelligence</span>
        <BarChart3 className="w-5 h-5 text-[#C9A86A]" />
      </div>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="p-5 bg-white/2 border border-white/9 rounded-2xl">
          <p className="text-[11px] text-[#9CA3AF] uppercase tracking-wider mb-2">Avg. Completion</p>
          <p className="text-[26px] font-extrabold text-[#EDEDED]">84.2%</p>
          <div className="mt-4 w-full h-1.5 bg-white/3 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "84.2%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-[#C9A86A]" 
            />
          </div>
        </div>
        <div className="p-5 bg-white/2 border border-white/9 rounded-2xl">
          <p className="text-[11px] text-[#9CA3AF] uppercase tracking-wider mb-2">Attendance</p>
          <p className="text-[26px] font-extrabold text-[#EDEDED]">92.8%</p>
          <div className="mt-4 flex items-end gap-1.5 h-5">
            {[40, 70, 45, 90, 65, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-[#C9A86A]/20 rounded-t-xs" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-white/1 rounded-xl border border-white/6">
          <span className="text-[12px] text-[#9CA3AF]">Q3 Cohort Status</span>
          <span className="text-[12px] font-bold text-green-500/80">On Track</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-white/1 rounded-xl border border-white/6">
          <span className="text-[12px] text-[#9CA3AF]">Participation Signals</span>
          <span className="text-[12px] font-bold text-[#C9A86A]">High</span>
        </div>
      </div>
    </UIPanel>
  )
}

// ─── Step data ────────────────────────────────────────────────────────────────

const steps = [
  {
    title: "Define your delivery structure",
    description: "Design structured programmes with enforced flow, prerequisites, and controlled access.",
    visual: <CurriculumPreview />,
  },
  {
    title: "Run sessions within the system",
    description: "Deliver sessions with integrated communication, silent attendance tracking, and automated recording.",
    visual: <SessionPreview />,
  },
  {
    title: "Monitor performance in real time",
    description: "Track engagement, attendance, and completion instantly to intervene early.",
    visual: <AnalyticsPreview />,
  },
]

// ─── Section ─────────────────────────────────────────────────────────────────

export function HowItWorksSection() {
  return (
    <section className="py-48 bg-[#0B0B0C] border-b border-white/6 relative overflow-hidden">
      <div className="max-w-330 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-44 max-w-2xl"
        >
          <span className="text-[14px] font-extrabold text-[#C9A86A] uppercase tracking-[0.22em] block mb-8">
            SYSTEM OVERVIEW
          </span>
          <h2 className="text-[52px] md:text-[72px] font-extrabold text-[#EDEDED] leading-[1.05] tracking-tight mb-8">
            Operational clarity, built-in.
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-72 md:space-y-96"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={staggerItemVariant}
              className={`flex flex-col md:flex-row items-center gap-24 md:gap-44 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-10">
                <div className="w-16 h-16 rounded-2xl bg-white/3 border border-white/12 flex items-center justify-center mb-3">
                  <span className="text-[#C9A86A] font-extrabold text-2xl">0{idx + 1}</span>
                </div>
                <h3 className="text-[2.3rem] md:text-[3.2rem] font-extrabold text-[#EDEDED] tracking-tight leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#7B7B8A] text-[14px] md:text-[15px] font-medium leading-[1.7] max-w-md">
                  {step.description}
                </p>
              </div>

              {/* Visual Side */}
              <div className="flex-[1.3] w-full max-w-2xl">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/12 bg-[#111113] p-2 md:p-4"
                >
                  {step.visual}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}