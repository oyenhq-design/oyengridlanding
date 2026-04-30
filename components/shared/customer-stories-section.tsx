export function CustomerStoriesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-white tracking-tight">
            Trusted operations
          </h2>
        </div>

        {/* Large Featured Card */}
        <div className="relative w-full rounded-[24px] overflow-hidden min-h-[400px] lg:min-h-[500px] mb-8 group border border-[rgba(255,255,255,0.06)] bg-[#121214]">
          {/* Background Placeholder / Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('/img/pg%20mgt.png')] bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
          
          <div className="relative z-20 h-full flex flex-col justify-end p-8 lg:p-16 max-w-3xl">
            <h3 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight mb-8">
              "OYEN GRID completely transformed how we deliver our bootcamps. The operational clarity we gained allowed us to double our cohort sizes without adding administrative headcount."
            </h3>
            <div>
              <div className="text-[16px] font-semibold text-white">Sarah Jenkins</div>
              <div className="text-[14px] text-[#C8A96A]">Director of Programmes, TechElevate</div>
            </div>
          </div>
        </div>

        {/* Smaller Cards Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)]">
            <p className="text-[16px] text-[#9CA3AF] leading-relaxed mb-8 italic">
              "We used to patch together five different tools. Now, everything from delivery to analytics happens in one structured system."
            </p>
            <div className="mt-auto">
              <div className="text-[15px] font-semibold text-white">David Chen</div>
              <div className="text-[13px] text-[#9CA3AF]">COO, Global Training Inc</div>
            </div>
          </div>

          <div className="bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)]">
            <p className="text-[16px] text-[#9CA3AF] leading-relaxed mb-8 italic">
              "The real-time visibility into participant progress means we catch drop-off risks weeks before they happen."
            </p>
            <div className="mt-auto">
              <div className="text-[15px] font-semibold text-white">Elena Rodriguez</div>
              <div className="text-[13px] text-[#9CA3AF]">Head of Student Success</div>
            </div>
          </div>

          <div className="bg-[#121214] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.12)] md:hidden lg:block">
            <p className="text-[16px] text-[#9CA3AF] leading-relaxed mb-8 italic">
              "Finally, a platform built specifically for the complexities of running structured, cohort-based education at scale."
            </p>
            <div className="mt-auto">
              <div className="text-[15px] font-semibold text-white">Marcus Webb</div>
              <div className="text-[13px] text-[#9CA3AF]">Founder, CodeCamp Academy</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
