import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OYEN Grid - Run & Manage Programmes",
  description: "A unified platform for managing programmes, sessions, and participant tracking.",
  keywords: ["training", "bootcamp", "programme management", "sessions", "recordings"],
};

import { ChatAssistant } from "@/components/shared/chat-assistant";
import { SearchModal } from "@/components/shared/search-modal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-background"
        style={{ textRendering: "optimizeLegibility", fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        {children}
        <ChatAssistant />
        <SearchModal />
      </body>
    </html>
  );
}
