"use client"

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0F]">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8A95A]/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-[#121212] rounded-3xl border border-[#1F1F1F] shadow-2xl overflow-hidden relative z-10"
        >
          <div className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-[#C8A95A] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(200,169,90,0.3)]">
                <span className="text-black font-bold text-xl">OG</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
              <p className="text-[#A1A1AA] text-sm">Sign in to your OYEN Grid dashboard</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-2">Email address</label>
                <input 
                  type="email" 
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8A95A] transition-colors"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-[#A1A1AA]">Password</label>
                  <a href="#" className="text-xs text-[#C8A95A] hover:text-white transition-colors">Forgot password?</a>
                </div>
                <input 
                  type="password" 
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8A95A] transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <Button className="w-full bg-[#C8A95A] text-black hover:bg-white hover:text-black h-12 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300">
                Sign In
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-[#A1A1AA]">
                Don't have an account?{" "}
                <Link href="/get-started" className="text-[#C8A95A] font-semibold hover:text-white transition-colors">
                  Get Started
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
