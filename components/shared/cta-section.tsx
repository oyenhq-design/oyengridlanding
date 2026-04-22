"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden border-b border-[#1F1F23]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight tracking-tight">
          Ready to bring <span className="text-[#C9A96E]">structure</span> to your programmes?
        </h2>
        <p className="text-lg text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Stop duct-taping tools together. Join leading organisations using OYEN Grid to deliver, manage, and scale their learning operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/get-started" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#C9A96E] hover:bg-[#B39358] text-black h-14 px-8 text-base font-semibold rounded-lg shadow-sm transition-all duration-300 group">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/pricing" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-lg bg-[#111113] border border-[#1F1F23] text-white hover:border-[#C9A96E] transition-all duration-300 group"
            >
              View Pricing
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform opacity-70" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
