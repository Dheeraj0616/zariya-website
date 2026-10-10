
import type { Metadata } from "next";
import { Anton, Cinzel } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-zariya-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-zariya-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zariya",
    template: "%s | Zariya",
  },
  description:
    "Zariya brings together Consulting, Architecture, and Academy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${anton.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
