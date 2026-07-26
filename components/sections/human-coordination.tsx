"use client";

import Image from "next/image";

export function HumanCoordination() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F5]">
      <div className="relative w-full aspect-[1.5/1] max-w-[1920px] mx-auto">
        <Image
          src="/human-coordination-section.jpg"
          alt="Human Coordination and AI Insights"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
