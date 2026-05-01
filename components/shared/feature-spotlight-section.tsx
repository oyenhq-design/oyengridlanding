import Image from "next/image";

export function FeatureSpotlightSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col">
            <h2 className="text-[36px] sm:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              A single environment for every operational need
            </h2>
            <p className="text-[18px] text-[#9CA3AF] mb-12 leading-relaxed">
              Ditch the spreadsheets and disconnected tools. Bring your entire operational lifecycle into a single, unified platform that enforces quality and structure.
            </p>
            
            <div className="flex flex-col gap-10">
              <div className="border-l-2 border-[#C8A96A] pl-6 transition-colors duration-300">
                <h4 className="text-[18px] font-semibold text-white mb-2">Unified dashboard</h4>
                <p className="text-[#9CA3AF] text-[16px] leading-relaxed">Program managers can oversee all active cohorts from a centralized, high-level view.</p>
              </div>
              <div className="border-l-2 border-[rgba(255,255,255,0.1)] pl-6 hover:border-[#C8A96A]/50 transition-colors duration-300">
                <h4 className="text-[18px] font-semibold text-white mb-2">Automated workflows</h4>
                <p className="text-[#9CA3AF] text-[16px] leading-relaxed">Reduce manual administrative overhead with intelligent triggers and nudges.</p>
              </div>
              <div className="border-l-2 border-[rgba(255,255,255,0.1)] pl-6 hover:border-[#C8A96A]/50 transition-colors duration-300">
                <h4 className="text-[18px] font-semibold text-white mb-2">Standardised delivery</h4>
                <p className="text-[#9CA3AF] text-[16px] leading-relaxed">Ensure a consistent, high-quality participant experience across every single cohort.</p>
              </div>
            </div>
          </div>

          {/* Right: Large UI */}
          <div className="relative w-full aspect-[4/3] rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#121214] overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(200,169,106,0.05)] to-transparent pointer-events-none" />
             <div className="absolute top-8 left-8 right-0 bottom-0 rounded-tl-xl overflow-hidden border-t border-l border-[rgba(255,255,255,0.08)] bg-[#0B0B0C] shadow-2xl">
               <Image
                 src="/img/pg mgt.png"
                 alt="Product Showcase"
                 fill
                 className="object-cover object-left-top opacity-95"
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
