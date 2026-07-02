import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./responsive.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "moderor.ai — Governed Outcomes",
  description:
    "Everyone is building agents. Moderor delivers governed outcomes — 18 products, 3 suites, one governance plane for regulated enterprise AI.",
  keywords: [
    "AI agents",
    "governed AI",
    "GRC",
    "compliance automation",
    "Moderor",
    "agentic AI",
  ],
  openGraph: {
    title: "moderor.ai — Governed Outcomes",
    description:
      "Governed outcomes for the agentic enterprise. Live in weeks, not quarters.",
    url: "https://moderor.ai",
    siteName: "moderor.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
