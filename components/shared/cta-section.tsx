"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative border-b border-[#1F1F23] overflow-hidden">
      {/* Premium Subtle Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,#C9A96E_0%,transparent_70%)] opacity-10 pointer-events-none mix-blend-screen" />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#111113] to-[#0A0A0A] border border-[#1F1F23] rounded-sm p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          {/* Edge highlight on top of the card */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
          
          <div className="flex-1 text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to bring structure to your programmes?
            </h2>
            <p className="text-[#A1A1AA] text-base font-light max-w-xl">
              Stop duct-taping tools together. Join leading organisations using OYEN Grid to deliver, manage, and scale their learning operations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/get-started">
              <Button className="w-full sm:w-auto bg-gradient-to-b from-[#D4B882] to-[#C9A96E] hover:from-[#E5D0A1] hover:to-[#D4B882] text-[#0A0A0A] h-12 px-8 text-sm font-bold rounded-sm shadow-[0_0_20px_rgba(201,169,110,0.1)] border border-[#E5D0A1]/20 transition-all">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/pricing">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto h-12 px-8 text-sm font-semibold rounded-sm bg-gradient-to-b from-[#111113] to-[#0A0A0A] hover:from-[#1A1A1E] hover:to-[#111113] border border-[#1F1F23] text-white hover:border-[#C9A96E]/50 transition-all shadow-none"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
