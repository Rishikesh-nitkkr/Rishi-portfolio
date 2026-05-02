import { ArrowRight, BrainCircuit, BriefcaseBusiness, FileText, FolderKanban } from "lucide-react";
import Link from "next/link";
import { HeroSection } from "@/components/sections/hero-section";
import { Reveal } from "@/components/ui/reveal";

const pathways = [
  {
    title: "About",
    description: "Academic profile, focus areas, and what makes the portfolio relatable.",
    href: "/about",
    icon: BrainCircuit
  },
  {
    title: "Projects",
    description: "ML, analytics, and backend projects with stack and feature details.",
    href: "/projects",
    icon: FolderKanban
  },
  {
    title: "Experience",
    description: "Accenture experience and professional impact in enterprise support.",
    href: "/experience",
    icon: BriefcaseBusiness
  },
  {
    title: "Resume",
    description: "Download resume and scan key recruiter-friendly highlights.",
    href: "/resume",
    icon: FileText
  }
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="section-shell pb-16 sm:pb-20">
        <Reveal className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-accent-purple/60 hover:bg-white/[0.07]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-purple/40 bg-accent-purple/10 text-accent-cyan">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-2 min-h-16 text-sm leading-6 text-slate-400">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan">
                  Open page
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </Reveal>
      </section>
    </>
  );
}
