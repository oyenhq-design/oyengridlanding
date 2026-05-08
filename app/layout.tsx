import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Chatbot } from "@/components/layout/chatbot";
import { CursorGlow } from "@/components/layout/cursor-glow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OYEN GRID | Professional Programme Infrastructure",
  description: "Run complex learning operations with absolute structural integrity at global enterprise scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background font-sans antialiased relative overflow-x-hidden">
        <CursorGlow />
        {/* GLOBAL CINEMATIC BACKGROUND LAYERS */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Layer 1: Environmental Ambience (Blurred Operational Room) */}
          <div className="absolute inset-0 opacity-[0.06] grayscale">
             <Image 
               src="/env-command-new.png" 
               alt="Environmental Ambience" 
               fill
               className="object-cover blur-[80px] scale-110"
               priority
             />
          </div>
          
          {/* Layer 2: Dashboard Glow Overlays (Operational UI Textures) */}
          <div className="absolute inset-0 opacity-[0.1] mix-blend-screen bg-[url('/dashboard-textures.png')] bg-cover bg-center blur-3xl scale-125 rotate-3" />
          
          {/* Layer 3: Atmospheric Depth & Noise */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,155,45,0.06)_0%,transparent_70%)]" />
          <div className="noise-bg opacity-[0.02]" aria-hidden="true" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <main className="flex-1">
            {children}
          </main>
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
