import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Air Quality Dashboard",
  description: "An air quality dashboard, inspired by AirNow.gov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col py-10 min-h-screen gap-8 overflow-x-hidden">
          <header className="flex justify-center">
            <div className="w-[350px]">
              <Navbar />
            </div>
          </header>
          <main className="flex justify-center">
            <div className="w-[350px] md:w-[500px]">{children}</div>
          </main>
        </div>
      </body>
      <SpeedInsights />
    </html>
  );
}
