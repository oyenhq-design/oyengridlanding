"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-[#0A0A0B] border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111113] border border-[#1F1F23] rounded-sm p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to bring structure to your programmes?
            </h2>
            <p className="text-[#A1A1AA] text-base font-light max-w-xl">
              Stop duct-taping tools together. Join leading organisations using OYEN Grid to deliver, manage, and scale their learning operations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/get-started">
              <Button className="w-full sm:w-auto bg-[#C9A96E] hover:bg-[#B39358] text-[#0A0A0B] h-12 px-8 text-sm font-bold rounded-sm shadow-none transition-all">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/pricing">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto h-12 px-8 text-sm font-semibold rounded-sm bg-transparent border-white text-white hover:bg-white hover:text-black transition-all shadow-none"
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
