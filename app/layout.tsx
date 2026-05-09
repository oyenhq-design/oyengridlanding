import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Chatbot } from "@/components/layout/chatbot";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { SearchProvider } from "@/context/search-context";
import { SearchSystem } from "@/components/layout/search-system";
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
      <body className="min-h-full flex flex-col bg-[#020617] font-sans antialiased relative overflow-x-hidden">
        <SearchProvider>
          <CursorGlow />
          
          {/* GLOBAL INSTITUTIONAL BACKGROUND */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
            {/* Subtle Environmental Depth */}
            <div className="absolute inset-0 opacity-[0.03] grayscale">
               <Image 
                 src="/env-command-new.png" 
                 alt="" 
                 fill
                 className="object-cover blur-[40px]"
                 priority
               />
            </div>
            
            {/* Controlled Golden Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,166,60,0.05)_0%,transparent_70%)]" />
            
            {/* Institutional Noise */}
            <div className="noise-bg" aria-hidden="true" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Chatbot />
          </div>

          <SearchSystem />
        </SearchProvider>
      </body>
    </html>
  );
}
