"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const INSIGHTS = [
  {
    category: "Product Update",
    title: "Introducing advanced cohort analytics",
    description: "Get granular insights into engagement drops and milestone completion rates.",
    date: "Mar 15, 2026",
    href: "/blog/advanced-analytics",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Best Practices",
    title: "How to structure an enterprise bootcamp",
    description: "A framework for scaling high-intensity training programs without operational collapse.",
    date: "Mar 02, 2026",
    href: "/blog/enterprise-bootcamps",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Customer Story",
    title: "Scaling from 100 to 1,000 active participants",
    description: "Learn how TechElevate used OYEN Grid to multiply their throughput by 10x.",
    date: "Feb 18, 2026",
    href: "/blog/techelevate-story",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  }
];

export function NewsInsightsSection() {
  return (
    <section className="py-32 bg-transparent border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[13px] font-bold tracking-[0.2em] uppercase mb-4">
              <BookOpen className="w-4 h-4" />
              Resources
            </div>
            <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight">
              News & Insights
            </h2>
          </motion.div>
          <Link href="/blog" className="text-[#D4AF37] text-[15px] font-semibold hover:text-white transition-all flex items-center gap-3 group pb-2">
            View all articles
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                href={item.href}
                className="group relative block h-[450px] rounded-[32px] overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 shadow-2xl"
              >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-transparent" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-6">
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-[24px] font-bold text-white mb-4 leading-tight tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-[15px] text-[#A1A1AA] leading-relaxed mb-8 line-clamp-2 font-light group-hover:text-white/90 transition-colors">
                    {item.description}
                  </p>

                  <div className="flex items-center text-[#D4AF37] font-bold text-[13px] gap-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-[32px] border-2 border-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
