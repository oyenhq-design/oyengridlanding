import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function FeatureSpotlightSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left: UI Card */}
          <div className="relative w-full aspect-[4/3] rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#121214] p-4 lg:p-8 flex items-center justify-center overflow-hidden group">
            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#C8A96A]/10 blur-[80px] pointer-events-none rounded-full transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
            
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] bg-[#0B0B0C]">
               <Image
                 src="/img/pg mgt.png"
                 alt="OYEN Grid Feature Spotlight"
                 fill
                 className="object-cover object-top"
               />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <div className="text-[12px] font-bold tracking-[0.15em] text-[#C8A96A] uppercase mb-4">
              Infrastructure
            </div>
            <h2 className="text-[36px] sm:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              A structured programme operating system
            </h2>
            <p className="text-[18px] text-[#9CA3AF] mb-8 leading-relaxed">
              Ditch the spreadsheets and disconnected tools. Bring your entire operational lifecycle into a single, unified environment that enforces quality and structure.
            </p>
            
            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-start gap-3 text-white text-[16px]">
                <CheckCircle2 className="w-5 h-5 text-[#C8A96A] shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Unified dashboard</strong> for program managers to oversee all active cohorts.</span>
              </li>
              <li className="flex items-start gap-3 text-white text-[16px]">
                <CheckCircle2 className="w-5 h-5 text-[#C8A96A] shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Automated workflows</strong> to reduce manual administrative overhead.</span>
              </li>
              <li className="flex items-start gap-3 text-white text-[16px]">
                <CheckCircle2 className="w-5 h-5 text-[#C8A96A] shrink-0 mt-0.5" />
                <span><strong className="font-semibold">Standardised delivery</strong> ensuring a consistent participant experience.</span>
              </li>
            </ul>

            <div>
              <Link 
                href="/features"
                className="text-[#C8A96A] font-semibold text-[16px] hover:text-white transition-colors flex items-center gap-2 group"
              >
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
