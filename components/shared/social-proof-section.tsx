import { Star } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="py-24 bg-[#0B0B0C] border-y border-[rgba(255,255,255,0.03)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Logos Row */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-[14px] text-[#9CA3AF] mb-8 font-medium">TRUSTED BY LEADING ORGANISATIONS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-50 grayscale">
            {/* Placeholder Logos */}
            <div className="text-xl font-bold tracking-tight">ACME Corp</div>
            <div className="text-xl font-bold tracking-tight">TechGrow</div>
            <div className="text-xl font-bold tracking-tight">EduScale</div>
            <div className="text-xl font-bold tracking-tight">GlobalOrg</div>
            <div className="text-xl font-bold tracking-tight">Innovate</div>
          </div>
        </div>

        {/* Ratings Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20">
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 text-[#C8A96A]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current opacity-50" />
            </div>
            <div className="text-white font-semibold text-[18px]">4.5/5</div>
            <div className="text-[#9CA3AF] text-[13px]">G2 Crowd</div>
          </div>

          <div className="hidden sm:block w-[1px] h-12 bg-[rgba(255,255,255,0.1)]" />

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 text-[#C8A96A]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current opacity-60" />
            </div>
            <div className="text-white font-semibold text-[18px]">4.6/5</div>
            <div className="text-[#9CA3AF] text-[13px]">Capterra</div>
          </div>

          <div className="hidden sm:block w-[1px] h-12 bg-[rgba(255,255,255,0.1)]" />

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 text-[#C8A96A]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current opacity-40" />
            </div>
            <div className="text-white font-semibold text-[18px]">8.5/10</div>
            <div className="text-[#9CA3AF] text-[13px]">TrustRadius</div>
          </div>

        </div>

      </div>
    </section>
  );
}
