"use client";

import { motion } from "framer-motion";

export function ProofKnowledge() {
  return (
    <div className="bg-background">
      
      {/* CASE STUDIES / PROOF SECTION */}
      <section className="py-32 border-b border-white/5">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold mb-6">Proven in high-fidelity environments.</h2>
            <p className="text-text-secondary font-light max-w-xl mx-auto">
              Real-world success stories from teams operating at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Global Training Sync", img: "https://images.unsplash.com/photo-1522071823991-b997e7b17bbd", desc: "How a Fortune 500 company scaled training across 4 regions." },
              { title: "Operations Overhaul", img: "https://images.unsplash.com/photo-1552664730-d307ca884978", desc: "Achieving 40% efficiency gains with automated tracking." },
              { title: "Team Leadership", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786", desc: "Building a culture of accountability through operational clarity." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8 border border-white/10 group-hover:border-accent/40 transition-all">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{card.title}</h4>
                <p className="text-text-secondary text-sm font-light leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE SECTION */}
      <section className="py-32">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-4">Knowledge Hub</h2>
              <p className="text-text-secondary font-light">Expert guides for operational success.</p>
            </div>
            <button className="text-accent text-sm font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">See All Guides →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Scaling Teams", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
              { title: "Operational Analytics", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51" },
              { title: "Managing Resources", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-video">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,179,1,0.1),transparent_70%)]" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{item.title}</h4>
                  <div className="mt-6 flex items-center gap-2 text-text-secondary text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                    Read guide <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
