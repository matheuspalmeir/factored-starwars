import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../ui/globals.css";

import MenuBar from "../ui/components/MenuBar";
import DarkLayout from "../ui/components/DarkLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starwars Films & Characters",
  description: "A simple app to explore Starwars films and characters",
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
        <MenuBar />
        <DarkLayout>{children}</DarkLayout>
      </body>
    </html>
  );
}
