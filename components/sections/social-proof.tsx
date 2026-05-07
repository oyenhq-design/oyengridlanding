"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function SocialProof() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-white">
            Proven in high-fidelity programme environments.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              title: "Global Training Infrastructure", 
              desc: "Deploying standardized curriculum architecture across 45+ international nodes.",
              img: "/social-training.png"
            },
            { 
              title: "Enterprise Command Center", 
              desc: "Centralizing operational visibility for distributed executive leadership teams.",
              img: "/social-command.png"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative rounded-[32px] overflow-hidden border border-white/5 bg-[#070B1D] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-accent-gold/30"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-[4s] group-hover:scale-105"
                />
              </div>
              <div className="p-10 bg-gradient-to-t from-[#040816] to-transparent">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-[24px] font-bold">{card.title}</h3>
                  <ArrowUpRight className="w-6 h-6 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                </div>
                <p className="text-white/40 text-[16px] leading-relaxed max-w-sm">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
