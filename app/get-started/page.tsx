"use client"

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Zap, Briefcase, CheckCircle2 } from "lucide-react";

export default function GetStartedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0F]">
      <Header />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#C8A95A]/5 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 mt-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Bring <span className="text-[#C8A95A]">structure</span> to your programmes
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#A1A1AA] text-lg max-w-2xl mx-auto"
            >
              Tell us a bit about your organisation so we can set up the perfect environment for your next cohort.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#121212] rounded-3xl border border-[#1F1F1F] p-8 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">First Name</label>
                    <input type="text" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8A95A] transition-colors" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">Last Name</label>
                    <input type="text" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8A95A] transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">Work Email</label>
                  <input type="email" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8A95A] transition-colors" placeholder="jane@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">Organisation Name</label>
                  <input type="text" className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8A95A] transition-colors" placeholder="Acme Academy" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">What best describes your use case?</label>
                  <select className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8A95A] transition-colors appearance-none">
                    <option value="" disabled selected>Select an option...</option>
                    <option value="training">Training Organisation</option>
                    <option value="bootcamp">Intensive Bootcamp</option>
                    <option value="corporate">Internal Corporate Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Button className="w-full bg-[#C8A95A] text-black hover:bg-white hover:text-black h-14 text-base font-bold uppercase tracking-wider rounded-xl transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(200,169,90,0.2)]">
                  Start Free Trial
                </Button>
                
                <p className="text-center text-xs text-[#A1A1AA] mt-4">
                  By signing up, you agree to our <a href="#" className="text-[#C8A95A] hover:underline">Terms of Service</a> and <a href="#" className="text-[#C8A95A] hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </motion.div>

            {/* Information Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:pl-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8">What happens next?</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C8A95A]/10 border border-[#C8A95A]/30 flex items-center justify-center shrink-0">
                    <span className="text-[#C8A95A] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Setup your workspace</h4>
                    <p className="text-[#A1A1AA]">Get instant access to your dedicated admin dashboard to begin configuring your environment.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Create your first programme</h4>
                    <p className="text-[#A1A1AA]">Use our intuitive builder to set up your curriculum, sessions, and requirements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Invite participants</h4>
                    <p className="text-[#A1A1AA]">Import your roster or share secure invite links to bring participants into your structured environment.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-[#121212] border border-[#1F1F1F]">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A95A]" />
                  <span className="text-white font-semibold">14-day free trial</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A95A]" />
                  <span className="text-white font-semibold">No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A95A]" />
                  <span className="text-white font-semibold">Cancel anytime</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
