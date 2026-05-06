export function PlanExplainerSection() {
  return (
    <section className="w-full max-w-2xl mx-auto mb-12 mt-2 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
        One platform for structured programme operations
      </h2>
      <p className="text-base text-[#A1A1AA] mb-5">
        Replace fragmented tools like Zoom, WhatsApp, and spreadsheets with one unified system
      </p>
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        <span className="inline-block bg-[#18120A] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Structure</span>
        <span className="inline-block bg-[#18120A] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Control</span>
        <span className="inline-block bg-[#18120A] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Visibility</span>
      </div>
      <div className="border-t border-[#232323] opacity-70 mx-auto w-full" style={{maxWidth:'90%'}} />
    </section>
  )
}
