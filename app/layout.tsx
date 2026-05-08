import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chatbot } from "@/components/layout/chatbot";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { SearchProvider } from "@/context/search-context";
import { SearchSystem } from "@/components/layout/search-system";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className="min-h-full flex flex-col bg-[#030712] font-sans antialiased relative overflow-x-hidden">
        <SearchProvider>
          <CursorGlow />
          
          {/* GLOBAL CINEMATIC BACKGROUND LAYERS - MINIMIZED */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Subtle Noise */}
            <div className="noise-bg" aria-hidden="true" />
            
            {/* Soft Ambient Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(214,166,60,0.03)_0%,transparent_70%)]" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Chatbot />
          </div>

          {/* Global Search Overlay */}
          <SearchSystem />
        </SearchProvider>
      </body>
    </html>
  );
}
