"use client";

import { motion } from "framer-motion";

const FEATURED_TESTIMONIAL = {
  quote: "OYEN GRID completely transformed how we deliver our bootcamps. The operational clarity we gained allowed us to double our cohort sizes without adding administrative headcount. It's the infrastructure we always needed.",
  author: "Sarah Jenkins",
  role: "Director of Programmes, TechElevate",
  avatar: "SJ"
};

const SMALL_TESTIMONIALS = [
  {
    quote: "We used to patch together five different tools. Now, everything from delivery to analytics happens in one structured system.",
    author: "David Chen",
    role: "COO, Global Training Inc",
    avatar: "DC"
  },
  {
    quote: "The real-time visibility into participant progress means we catch drop-off risks weeks before they happen.",
    author: "Elena Rodriguez",
    role: "Head of Student Success",
    avatar: "ER"
  }
];

export function CustomerStoriesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.02] blur-[100px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] uppercase tracking-widest text-[12px] font-semibold">Testimonials</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-[36px] sm:text-[48px] font-bold text-white tracking-tight mb-6">
            Trusted by top operators.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Large Featured Quote (Spans 2 columns on lg) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 relative bg-[#121214] border border-[#D4AF37]/20 rounded-2xl p-10 md:p-14 flex flex-col justify-between shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-300 ease-out overflow-hidden group"
          >
            {/* Subtle radial glow inside card */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="text-[#D4AF37] text-[64px] leading-none mb-6 font-serif opacity-80">"</div>
              <p className="text-[20px] md:text-[28px] text-white leading-relaxed mb-12 font-light tracking-tight">
                {FEATURED_TESTIMONIAL.quote}
              </p>
            </div>
            
            <div className="flex items-center gap-5 mt-auto relative z-10">
              <div className="w-14 h-14 rounded-full bg-[#0B0B0C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-semibold text-[16px] shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                {FEATURED_TESTIMONIAL.avatar}
              </div>
              <div>
                <div className="text-[17px] font-semibold text-white">{FEATURED_TESTIMONIAL.author}</div>
                <div className="text-[14px] text-[#A1A1AA]">{FEATURED_TESTIMONIAL.role}</div>
              </div>
            </div>
          </motion.div>

          {/* Smaller Cards */}
          <div className="flex flex-col gap-6">
            {SMALL_TESTIMONIALS.map((testimonial, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                key={idx}
                className="flex-1 relative bg-[#121214] border border-[#27272A] rounded-2xl p-8 flex flex-col justify-between shadow-lg hover:scale-[1.02] hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300 ease-out overflow-hidden group"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-[#D4AF37] opacity-0 group-hover:opacity-[0.03] blur-[40px] transition-opacity duration-500 rounded-full" />

                <div className="relative z-10">
                  <p className="text-[15px] text-[#A1A1AA] leading-relaxed mb-8 font-light">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1D] border border-[#333333] group-hover:border-[#D4AF37]/30 flex items-center justify-center text-white/80 font-medium text-[13px] transition-colors duration-500">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-white/90">{testimonial.author}</div>
                    <div className="text-[12px] text-[#A1A1AA]/80">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
