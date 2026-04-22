export function TrustStrip() {
  return (
    <section className="bg-[#0A0A0A] py-16 border-b border-[#1F1F23]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold text-[#555555] uppercase tracking-[0.2em] mb-12">
          Trusted by forward-thinking organisations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
          {/* Using text placeholders since we don't have images, styled to look like logos */}
          <div className="text-sm font-bold text-white tracking-tighter">ACME Corp</div>
          <div className="text-sm font-bold text-white tracking-[0.3em] uppercase">GlobalScale</div>
          <div className="text-sm font-bold text-white tracking-tight italic">Nova<span className="font-light">Tech</span></div>
          <div className="text-sm font-bold text-white">Lumiere</div>
          <div className="text-sm font-bold text-white tracking-widest uppercase">Apex</div>
        </div>
      </div>
    </section>
  )
}
