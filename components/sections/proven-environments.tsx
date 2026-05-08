"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Layers } from "lucide-react";

export function ProvenEnvironments() {
  const cards = [
    {
      title: "Global Training Infrastructure",
      desc: "Architecting high-fidelity delivery systems for distributed learning networks.",
      img: "/env-training.png",
      icon: Globe
    },
    {
      title: "Enterprise Command Center",
      desc: "Powering real-time operational governance for global programme delivery.",
      img: "/env-command.png",
      icon: Layers
    }
  ];

  return (
    <section className="relative overflow-hidden py-32 md:py-48 section-transition">
      
      {/* ENVIRONMENTAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/env-command.png" 
          alt="Infrastructure Detail" 
          fill
          className="object-cover blur-2xl scale-110 opacity-10"
        />
        <div className="absolute inset-0 bg-navy-deep/90 backdrop-blur-md" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
             <div className="h-[1px] w-12 bg-accent-gold/40" />
             <span className="text-[11px] font-black text-accent-gold uppercase tracking-[0.4em]">Validation Layer</span>
          </div>
          <h2 className="text-[36px] md:text-[64px] font-bold text-white mb-8 tracking-tighter leading-none">
            Proven in <span className="text-gold-gradient italic">high-fidelity</span> <br />
            programme environments.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`group relative ${i % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              {/* IMAGE WITH BLEED */}
              <div className="relative rounded-[48px] overflow-hidden border border-white/10 mb-12 aspect-[16/11] shadow-[0_40px_100px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition-all duration-700">
                <Image 
                  src={card.img} 
                  alt={card.title} 
                  fill
                  className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-80" />
                
                {/* Float Indicator */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-navy-mid/80 backdrop-blur-md border border-white/10 flex items-center justify-center">
                   <card.icon className="w-5 h-5 text-accent-gold" />
                </div>
              </div>

              <div className="px-4">
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-accent-gold transition-colors tracking-tight">{card.title}</h3>
                <p className="text-[18px] text-white/30 mb-10 leading-relaxed font-light">
                  {card.desc}
                </p>
                <button className="flex items-center gap-3 text-white/40 hover:text-white transition-all font-black text-[11px] uppercase tracking-[0.3em] group/btn">
                  Analyze Infrastructure 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform text-accent-gold" />
                </button>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent-gold/5 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="atmos-fade-bottom h-48" />
    </section>
  );
}
