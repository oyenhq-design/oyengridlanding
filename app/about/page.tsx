"use client"

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0F]">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8A95A] opacity-10 rounded-full blur-[120px]" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              The vision behind <span className="text-[#C8A95A]">OYEN Grid</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#A1A1AA] leading-relaxed"
            >
              We believe that structured learning shouldn't require duct-taping ten different tools together. We built OYEN Grid to be the central nervous system for your programmes.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-[#111111] border-y border-[#1F1F1F]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-lg max-w-none text-[#A1A1AA]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Why we built this</h2>
                <p className="mb-6">
                  For years, running a cohort-based course, corporate training, or an intensive bootcamp meant dealing with administrative chaos. You'd schedule a call in Zoom, share a link in Slack, upload a document to Google Drive, and track attendance in a messy spreadsheet.
                </p>
                <p className="mb-6">
                  The result? Instructors spending 40% of their time on admin work, and participants constantly losing track of where they are supposed to be.
                </p>
                <p className="mb-12">
                  <strong className="text-white">OYEN Grid is the antidote to this chaos.</strong>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Our Philosophy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-[#121212] p-8 rounded-2xl border border-[#1F1F1F]">
                    <h3 className="text-[#C8A95A] font-bold mb-4">Structure over flexibility</h3>
                    <p className="text-sm">While other tools try to be everything to everyone, we force a structure. Programmes have sessions. Sessions have participants. It's an opinionated architecture that guarantees clarity at scale.</p>
                  </div>
                  <div className="bg-[#121212] p-8 rounded-2xl border border-[#1F1F1F]">
                    <h3 className="text-[#C8A95A] font-bold mb-4">Premium experiences</h3>
                    <p className="text-sm">When participants pay for professional training, the software they use should feel premium. We obsess over the design details so your brand looks incredible.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
