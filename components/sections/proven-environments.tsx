"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ProvenEnvironments() {
  const cards = [
    {
      title: "Global Training Infrastructure",
      desc: "Architecting high-fidelity delivery systems for distributed learning networks.",
      img: "/env-training.png"
    },
    {
      title: "Enterprise Command Center",
      desc: "Powering real-time operational governance for global programme delivery.",
      img: "/env-command.png"
    }
  ];

  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-8 tracking-tight">
            Proven in high-fidelity <br />
            <span className="text-gold-gradient italic font-medium">programme environments.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[40px] overflow-hidden border border-white/10 mb-10 aspect-[16/10] shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-navy-light">
                <Image 
                  src={card.img} 
                  alt={card.title} 
                  fill
                  className="object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="px-4">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-gold transition-colors">{card.title}</h3>
                <p className="text-[17px] text-white/40 mb-8 leading-relaxed max-w-sm font-light">
                  {card.desc}
                </p>
                <div className="flex items-center gap-2 text-white/20 group-hover:text-white transition-all font-bold text-[12px] uppercase tracking-[0.2em]">
                  View Infrastructure <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
