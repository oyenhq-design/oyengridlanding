import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-40 md:pt-48 pb-24 md:pb-32 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col max-w-2xl">
            <h1 className="text-[42px] sm:text-[48px] lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Run structured programmes with full operational control.
            </h1>
            
            <p className="text-lg text-[#A1A1AA] mb-10 leading-relaxed max-w-lg">
              OYEN Grid provides the infrastructure to deploy, track, and scale cohort-based learning without the administrative chaos.
            </p>
            
            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#C9A86A]" />
                Enforced delivery flow
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#C9A86A]" />
                Centralised participant control
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#C9A86A]" />
                System-level visibility
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/get-started"
                className="w-full sm:w-auto bg-[#C9A86A] hover:bg-[#b59556] text-[#0B0B0C] font-semibold px-8 py-3.5 rounded-lg text-[15px] transition-colors flex items-center justify-center"
              >
                Start Building
              </Link>
              <Link 
                href="/contact"
                className="w-full sm:w-auto bg-transparent border border-[#1A1A1D] hover:border-[#333333] text-white font-semibold px-8 py-3.5 rounded-lg text-[15px] transition-colors flex items-center justify-center"
              >
                Talk to sales
              </Link>
            </div>
          </div>

          {/* Right Column: Image Mockup */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[1/1] flex items-center justify-center">
             <div className="relative w-[110%] sm:w-full lg:w-[130%] right-[-5%] sm:right-0 lg:right-[-15%]">
               <Image
                 src="/img/pg mgt.png"
                 alt="OYEN Grid Dashboard"
                 width={1000}
                 height={750}
                 className="rounded-xl border border-[#1A1A1D] shadow-2xl block"
                 priority
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
