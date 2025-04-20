import type { Metadata } from "next";
import { Geist, Geist_Mono, Signika } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md.Rakib",
  description: "By Rakib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${signika.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
