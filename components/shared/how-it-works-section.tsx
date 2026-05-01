"use client";

import { motion } from "framer-motion";
import { Layout, Users, Activity, BarChart3 } from "lucide-react";

const STEPS = [
  {
    title: "Structure Programs",
    desc: "Design multi-layered curricula and establish prerequisites with ease.",
    icon: Layout,
  },
  {
    title: "Assign Workflows",
    desc: "Deploy automated workflows and assign teams to specific cohorts.",
    icon: Users,
  },
  {
    title: "Track Real-Time",
    desc: "Monitor participant progress and engagement as it happens.",
    icon: Activity,
  },
  {
    title: "Analyze & Optimize",
    desc: "Use deep insights to refine and scale your program's impact.",
    icon: BarChart3,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C] border-t border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The OYEN Grid <span className="text-[#C8A95A]">Operating Flow</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            A linear, predictable operational flow designed to eliminate administrative overhead and maximize delivery focus.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#1F1F1F] via-[#C8A95A]/30 to-[#1F1F1F] z-0" />
          
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx} 
                className="relative z-10 flex flex-col items-center text-center"
                variants={itemVariants}
              >
                {/* Icon Container */}
                <div className="w-24 h-24 rounded-2xl bg-[#111111] border border-[#1F1F1F] shadow-xl flex items-center justify-center mb-8 group hover:border-[#C8A95A]/50 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-[#C8A95A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="w-10 h-10 text-[#A1A1AA] group-hover:text-[#C8A95A] transition-colors duration-500" strokeWidth={1.5} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-[#C8A95A] text-[#0B0B0C] text-sm font-bold flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}