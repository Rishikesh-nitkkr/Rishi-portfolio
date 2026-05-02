import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Rishi Kesh | Software Developer",
  description:
    "Portfolio for Rishi Kesh, an MCA student and software developer with experience in Python, Java, full stack development, machine learning, and enterprise application support.",
  keywords: ["Rishi Kesh", "Software Developer", "MCA", "Python", "Java", "Machine Learning"],
  openGraph: {
    title: "Rishi Kesh | Software Developer",
    description:
      "Modern portfolio showcasing Rishi Kesh's skills, projects, experience, education, and resume.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-ink-950 font-sans text-slate-100 antialiased`}>
        <div className="relative min-h-screen overflow-hidden bg-ink-950 bg-hero-field">
          <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
