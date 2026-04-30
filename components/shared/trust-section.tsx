"use client";

export function TrustSection() {
  return (
    <section className="py-28 md:py-36 bg-[#0b0f14]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight leading-tight">
          Trusted by leading organisations
        </h2>
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {/* Replace with real client logos as needed */}
          <div className="w-32 h-12 bg-[#181d23] rounded-lg flex items-center justify-center text-white/60 text-lg font-bold">Client A</div>
          <div className="w-32 h-12 bg-[#181d23] rounded-lg flex items-center justify-center text-white/60 text-lg font-bold">Client B</div>
          <div className="w-32 h-12 bg-[#181d23] rounded-lg flex items-center justify-center text-white/60 text-lg font-bold">Client C</div>
          <div className="w-32 h-12 bg-[#181d23] rounded-lg flex items-center justify-center text-white/60 text-lg font-bold">Client D</div>
        </div>
        <div className="max-w-2xl mx-auto">
          <blockquote className="text-xl text-white/80 italic mb-6">“OYEN Grid transformed our training operations—everything is structured, visible, and easy to manage.”</blockquote>
          <div className="text-white/60 text-base">— Head of Programmes, Leading Organisation</div>
        </div>
      </div>
    </section>
  );
}
