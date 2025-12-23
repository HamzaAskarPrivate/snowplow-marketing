import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnowPlowBot Robotics | Autonomous Snow Removal Technology",
  description: "Experience the future of snow management with our AI-powered autonomous robotic plows. Efficient, eco-friendly, and always ready for action. Serving residential, commercial, and industrial clients.",
  keywords: "snow plow robot, autonomous snow removal, AI snow plow, robotic snow remover, commercial snow removal, residential snow plow, eco-friendly snow removal",
  openGraph: {
    title: "SnowPlowBot Robotics | Autonomous Snow Removal Technology",
    description: "Experience the future of snow management with AI-powered autonomous robotic plows.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnowPlowBot Robotics",
    description: "Autonomous Snow Removal Technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
