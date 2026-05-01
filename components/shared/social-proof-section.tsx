import { Star } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="py-20 bg-[#0B0B0C] border-y border-[#333333]/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Logos Row */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-[13px] text-[#A1A1AA] tracking-widest uppercase mb-10 font-semibold">
            Trusted by leading organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-40 hover:opacity-70 transition-opacity duration-500">
            {/* Placeholder Logos - simplified to text to mimic logos */}
            <div className="text-2xl font-black tracking-tighter text-white">ACME Corp</div>
            <div className="text-xl font-bold tracking-widest text-white">TECHGROW</div>
            <div className="text-2xl font-serif italic text-white">EduScale</div>
            <div className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full"></div> GlobalOrg
            </div>
            <div className="text-2xl font-bold text-white uppercase">Innovate.</div>
          </div>
        </div>

        {/* Ratings Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20">
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1 text-[#D4AF37]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current opacity-40" />
            </div>
            <div className="text-white font-semibold text-[20px]">4.5/5</div>
            <div className="text-[#A1A1AA] text-[14px]">G2 Crowd</div>
          </div>

          <div className="hidden sm:block w-[1px] h-16 bg-[#333333]/50" />

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1 text-[#D4AF37]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current opacity-60" />
            </div>
            <div className="text-white font-semibold text-[20px]">4.6/5</div>
            <div className="text-[#A1A1AA] text-[14px]">Capterra</div>
          </div>

          <div className="hidden sm:block w-[1px] h-16 bg-[#333333]/50" />

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1 text-[#D4AF37]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current opacity-30" />
            </div>
            <div className="text-white font-semibold text-[20px]">8.5/10</div>
            <div className="text-[#A1A1AA] text-[14px]">TrustRadius</div>
          </div>

        </div>

      </div>
    </section>
  );
}
