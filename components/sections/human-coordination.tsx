"use client";

import Image from "next/image";

export function HumanCoordination() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F5] py-16 md:py-24">
      <div className="container-custom relative z-10 w-full flex justify-center px-6">
        <div className="relative w-full max-w-[1100px] aspect-[1.5/1] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl border border-zinc-200/50">
          <Image
            src="/human-coordination-section.jpg"
            alt="Human Coordination and AI Insights"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
