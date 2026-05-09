import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OYEN GRID",
  description: "Institutional Infrastructure",
};

import { SearchProvider } from "@/context/search-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
