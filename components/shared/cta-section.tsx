import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden flex items-center justify-center border-t border-neutral-800">
      {/* Strong Gold Gradient Streak Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#D4AF37]/20 to-[#0B0B0C] opacity-80" />
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_30px_rgba(212,175,55,1)] opacity-50" />
      
      {/* Additional subtle diagonal light streaks */}
      <div className="absolute -top-40 right-1/4 w-[800px] h-[100px] bg-[#D4AF37] opacity-[0.08] blur-[80px] rotate-12 pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[800px] h-[100px] bg-[#D4AF37] opacity-[0.08] blur-[80px] -rotate-12 pointer-events-none" />

      <div className="relative z-10 text-center">
        <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold text-white tracking-tight mb-12 leading-[1.05]">
          Ready to structure <br className="hidden sm:block" /> your operations?
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-5">
          <Link 
            href="/get-started"
            className="inline-flex items-center justify-center bg-[#D4AF37] text-[#0B0B0C] font-semibold px-10 py-4 rounded-lg text-[17px] transition-all duration-300 ease-out hover:bg-[#E5C354] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5"
          >
            Start building
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-[#121214] border border-[#27272A] hover:border-[#D4AF37]/60 text-white font-medium px-10 py-4 rounded-lg text-[17px] transition-all duration-300 ease-out hover:bg-[#1A1A1D] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-0.5"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
