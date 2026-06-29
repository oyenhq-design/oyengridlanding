"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResourcesPageRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/resources/blog");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#070913] text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <span className="w-8 h-8 rounded-full border-2 border-t-transparent border-[#FFC72C] animate-spin" />
        <span className="text-xs text-white/40 uppercase font-black tracking-widest mt-2">Loading Resources Hub...</span>
      </div>
    </div>
  );
}
