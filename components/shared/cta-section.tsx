import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[24px] px-6 py-20 text-center relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8A96A]/5 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <h2 className="text-[40px] sm:text-[56px] font-bold text-white tracking-tight mb-6">
              Ready to structure your operations?
            </h2>
            <p className="text-[18px] text-[#9CA3AF] mb-10 max-w-xl mx-auto leading-relaxed">
              Move from chaos to clarity with a unified system.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/get-started"
                className="w-full sm:w-auto bg-[#C8A96A] hover:bg-[#B39355] text-[#0B0B0C] font-semibold px-8 py-4 rounded-lg text-[16px] transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(200,169,106,0.15)] flex items-center justify-center"
              >
                Start Building
              </Link>
              <Link 
                href="/sales"
                className="w-full sm:w-auto bg-transparent border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.03)] text-white font-semibold px-8 py-4 rounded-lg text-[16px] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
