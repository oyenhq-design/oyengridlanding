"use client";

import { motion } from "framer-motion";
import { Check, Star, Quote } from "lucide-react";

export function ProofAndKnowledge() {
  return (
    <div className="bg-[#0B0B0D]">
      
      {/* 11. BUILT FOR OPERATORS. PROVEN IN ACTION. */}
      <section className="py-32 border-t border-white/5 bg-black/20">
        <div className="max-w-[1400px] mx-auto px-6 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[48px] font-black text-white tracking-tighter mb-6">
              Built for operators. Proven in action.
            </h2>
            <p className="text-[18px] text-[#71717A] max-w-2xl mx-auto font-light">
              Real teams delivering exceptional results using the OYEN GRID infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Training session", img: "https://images.unsplash.com/photo-1522071823991-b997e7b17bbd", text: "Global cohorts managed with absolute structural integrity." },
            { title: "Operations team", img: "https://images.unsplash.com/photo-1552664730-d307ca884978", text: "Empowering operational leaders with real-time data control." },
            { title: "Enterprise environment", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786", text: "Built to handle the complexity of Fortune 500 delivery." }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-white text-2xl font-bold mb-3">{card.title}</h4>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 12. KNOWLEDGE SECTION */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 mb-20">
          <h2 className="text-[32px] md:text-[40px] font-black text-white tracking-tighter">Knowledge for high-fidelity <br /> operational success.</h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Scaling training programmes", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
            { title: "Operational analytics", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51" },
            { title: "Managing distributed teams", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8 border border-white/10 group-hover:border-[#F5B942]/40 transition-colors">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,185,66,0.1),transparent_70%)]" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4 group-hover:text-[#F5B942] transition-colors">{item.title}</h4>
              <p className="text-[#71717A] text-[15px] font-light mb-6">Expert guides on building structured environments for scale.</p>
              <div className="text-[#F5B942] text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                Read Guide <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 13. TESTIMONIAL SECTION (LIGHT CARD) */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-12 lg:p-24 shadow-[0_50px_100px_rgba(245,185,66,0.1)] relative overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* Stats Column */}
                <div className="lg:col-span-5 grid grid-cols-1 gap-12">
                   {[
                     { val: "2x", label: "Growth in cohort capacity" },
                     { val: "40%", label: "Reduction in operational overhead" },
                     { val: "98%", label: "Programme retention rate" }
                   ].map((s, i) => (
                     <div key={i} className="flex items-center gap-6 group">
                        <div className="text-[56px] font-black text-black tracking-tighter group-hover:text-[#F5B942] transition-colors leading-none">{s.val}</div>
                        <div className="text-[#71717A] text-sm font-bold uppercase tracking-wider max-w-[120px] leading-tight">{s.label}</div>
                     </div>
                   ))}
                </div>

                {/* Quote Column */}
                <div className="lg:col-span-7 border-l border-gray-100 pl-12 lg:pl-16">
                   <Quote className="w-16 h-16 text-[#F5B942]/20 mb-10" />
                   <p className="text-[24px] md:text-[32px] font-medium text-black leading-tight tracking-tight mb-12 italic">
                     &quot;OYEN GRID hasn&apos;t just improved our operations; it has redefined how we think about scale. We now operate with a level of precision that was previously impossible.&quot;
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                         <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <div className="font-bold text-black text-lg">David Chen</div>
                         <div className="text-[#71717A] text-[13px] font-bold uppercase tracking-widest">Director of Operations, TechFlow</div>
                      </div>
                   </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
