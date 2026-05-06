"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function FeatureAwards() {
  return (
    <div className="bg-white">
      
      {/* 6. FEATURE SPLIT SECTION */}
      <section className="py-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image/Video Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative aspect-video rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] ring-1 ring-gray-100"
          >
            <Image 
              src="/professional_business_team_light_1778076878_png_1778079298102.png" 
              alt="Collaboration" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#0B5CFF] border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#232333] tracking-tight leading-tight mb-8">
              Work together from <br /> anywhere, on any device
            </h2>
            <div className="space-y-6">
              {[
                { title: "One app for all your needs", desc: "Meetings, chat, phone, and more in a single, easy-to-use platform." },
                { title: "Enterprise-grade security", desc: "Built with security and privacy as a priority to keep your data safe." },
                { title: "Seamless integrations", desc: "Connect with the tools you already use every day." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0B5CFF] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#232333] font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-[#232333]/60 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. AWARDS / REPORT CARDS */}
      <section className="py-[120px] bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Gartner® Magic Quadrant™", desc: "A Leader in Meeting Solutions for 7 consecutive years.", color: "from-[#0B5CFF] to-[#6EA8FF]" },
              { title: "G2 Best Software 2024", desc: "Voted #1 in Collaboration and Communication by users.", color: "from-[#0038A8] to-[#0B5CFF]" },
              { title: "TrustRadius Top Rated", desc: "Recognized for excellence in Customer Experience.", color: "from-[#1A202C] to-[#2D3748]" }
            ].map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[32px] bg-gradient-to-br ${award.color} text-white shadow-xl shadow-blue-900/10 group cursor-pointer`}
              >
                <h4 className="text-xl font-bold mb-4">{award.title}</h4>
                <p className="text-white/80 text-[16px] leading-relaxed mb-8">{award.desc}</p>
                <button className="text-white font-bold text-[14px] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read report <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">→</div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
