import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className="min-h-full flex flex-col bg-background font-sans antialiased relative">
        <div className="noise-bg" aria-hidden="true" />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
