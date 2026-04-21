"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 bg-[#0B0B0F] relative overflow-hidden border-b border-[#1F1F1F]">
      {/* Abstract Background Element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#C8A95A]/20 via-[#C8A95A]/5 to-transparent opacity-30 rounded-full blur-[100px]" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMzMzMiLz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
          Ready to bring <span className="text-[#C8A95A]">structure</span> to your programmes?
        </h2>
        <p className="text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop duct-taping tools together. Join leading organisations using OYEN Grid to deliver, manage, and scale their learning operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/app" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#C8A95A] text-black hover:bg-white hover:text-black h-14 px-10 text-base font-bold uppercase tracking-wider rounded-xl shadow-[0_0_30px_rgba(200,169,90,0.2)] transition-all duration-300 group">
              Start Free Trial
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#pricing" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto h-14 px-10 text-base font-bold uppercase tracking-wider rounded-xl bg-transparent border-2 border-[#2A2A2A] text-white hover:border-[#C8A95A] hover:bg-transparent transition-all duration-300 group"
            >
              View Pricing
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform opacity-50" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
