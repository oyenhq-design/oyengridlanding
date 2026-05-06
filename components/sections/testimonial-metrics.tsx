"use client";

import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export function TestimonialMetrics() {
  return (
    <div className="bg-background">
      
      {/* 9. TESTIMONIAL / METRICS PANEL (SPLIT LAYOUT) */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(245,179,1,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            {/* Left: Quote & Profile */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 glass-card p-12 lg:p-20 bg-secondary/20 border-white/10 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-10">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                </div>
                <Quote className="w-16 h-16 text-accent/20 mb-10" />
                <p className="text-3xl md:text-4xl font-medium text-white leading-tight tracking-tighter italic mb-16">
                  &quot;OYEN GRID hasn&apos;t just improved our operations; it has redefined how we think about scale. We now operate with a level of precision that was previously impossible.&quot;
                </p>
              </div>

              <div className="flex items-center gap-6 pt-12 border-t border-white/5">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl bg-gray-800">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white tracking-tight">David Chen</div>
                  <div className="text-accent text-xs font-black uppercase tracking-[0.3em] mt-1">Director of Operations, TechFlow</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Performance Metrics & Success Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 flex flex-col gap-8"
            >
              <div className="glass-card p-10 bg-black/60 border-accent/30 shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative overflow-hidden group flex-1">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,179,1,0.1),transparent_70%)]" />
                 <img 
                   src="/success-dashboard.png" 
                   alt="Success Dashboard" 
                   className="w-full h-auto rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="mt-8 flex justify-between items-end">
                    <div>
                       <div className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">Completion Rate</div>
                       <div className="text-4xl font-black text-white tracking-tighter">98.2%</div>
                    </div>
                    <div className="flex flex-col items-end">
                       <TrendingUp className="w-10 h-10 text-accent mb-2" />
                       <span className="text-xs font-bold text-white uppercase tracking-widest">+22.4% vs LY</span>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 {[
                   { val: "2x", label: "Cohort Scale", desc: "Capacity doubled in 6 months" },
                   { val: "40%", label: "Op-Ex Saving", desc: "Manual overhead reduction" }
                 ].map((stat, i) => (
                   <div key={i} className="glass-card p-8 bg-secondary/30 border-white/5 hover:border-accent/30 transition-all">
                      <div className="text-4xl font-black text-white tracking-tighter mb-2">{stat.val}</div>
                      <div className="text-[10px] font-black text-accent uppercase tracking-widest mb-4 leading-none">{stat.label}</div>
                      <p className="text-text-secondary text-xs font-light leading-relaxed">{stat.desc}</p>
                   </div>
                 ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PRICING SECTION (SIMPLE) */}
      <section className="py-40 border-t border-white/5 text-center relative overflow-hidden bg-secondary/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
             <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
             <span className="text-accent text-[11px] font-black tracking-[0.4em] uppercase">Enterprise Scaling</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
             Simple pricing. <br /> <span className="text-accent italic">Maximum power.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-light max-w-lg mx-auto mb-16 leading-relaxed">
            One platform, every feature included. Built to scale with your program&apos;s growth and governance requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <button className="btn-primary px-12 py-6 text-xl shadow-[0_0_40px_rgba(245,179,1,0.2)]">Explore Pricing Plans</button>
             <button className="btn-outline px-12 py-6 text-xl">Download Feature List</button>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION (FULL-WIDTH CINEMATIC) */}
      <section className="py-60 relative overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/training-session.png" 
            alt="Team collaboration" 
            className="w-full h-full object-cover grayscale opacity-40 blur-[4px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
          {/* Subtle Motion Blur Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-20" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-16">
              Structure your programme <br />
              <span className="text-accent italic">with absolute confidence.</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-20">
              <button className="btn-primary px-16 py-6 text-2xl group flex items-center gap-4">
                Start Building Today <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
              <button className="btn-outline px-16 py-6 text-2xl">Talk to Strategic Sales</button>
            </div>

            <div className="pt-20 border-t border-white/10 max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
               <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-xs font-black uppercase tracking-widest">Global Deployment Ready</span>
               </div>
               <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-xs font-black uppercase tracking-widest">SOC2 TYPE II COMPLIANT</span>
               </div>
               <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-xs font-black uppercase tracking-widest">ISO 27001 CERTIFIED</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
