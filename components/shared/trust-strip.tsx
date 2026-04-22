export function TrustStrip() {
  return (
    <section className="bg-[#0A0A0A] py-12 border-b border-[#1F1F23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-[#A1A1AA] uppercase tracking-[0.2em] mb-8">
          Trusted by forward-thinking organisations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Using text placeholders since we don't have images, styled to look like logos */}
          <div className="text-xl font-bold text-white tracking-tighter">ACME Corp</div>
          <div className="text-xl font-bold text-white tracking-widest uppercase">GlobalScale</div>
          <div className="text-xl font-bold text-white tracking-tight italic">Nova<span className="font-light">Tech</span></div>
          <div className="text-xl font-bold text-white">Lumiere</div>
          <div className="text-xl font-bold text-white tracking-widest uppercase">Apex</div>
        </div>
      </div>
    </section>
  )
}
