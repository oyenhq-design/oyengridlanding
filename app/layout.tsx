import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans">
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
