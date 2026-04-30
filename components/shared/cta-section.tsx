import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 bg-[#0B0B0C] border-t border-[#1A1A1D]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-[36px] sm:text-[40px] font-bold text-white tracking-tight mb-6">
          Ready to elevate your operation?
        </h2>
        <p className="text-lg text-[#A1A1AA] mb-10 max-w-xl mx-auto leading-relaxed">
          Join leading organisations using OYEN Grid to run structured, scalable, and fully observable training programmes.
        </p>
        <Link 
          href="/get-started"
          className="inline-flex items-center justify-center bg-[#C9A86A] hover:bg-[#b59556] text-[#0B0B0C] font-semibold px-8 py-4 rounded-lg text-[16px] transition-colors"
        >
          Start Building
        </Link>
      </div>
    </section>
  );
}
