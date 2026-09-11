import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description: "A lightweight, accessible heritage showcase for Pangasinan tourism."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}