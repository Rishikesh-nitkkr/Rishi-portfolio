import { Download, ExternalLink, GraduationCap, Layers3 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, profile, profileCards } from "@/lib/data";

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Resume"
        title="Education and resume"
        description="A recruiter-friendly academic snapshot with a polished resume available to view or download."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <Reveal className="glass-panel rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-accent-cyan" size={24} aria-hidden="true" />
            <h3 className="text-xl font-semibold text-white">Education</h3>
          </div>

          <div className="mt-6 grid gap-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="min-w-0 rounded-lg border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-sm font-semibold text-accent-cyan">{item.period}</p>
                <h4 className="mt-2 font-semibold text-white">{item.degree}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-400">{item.school}</p>
                <p className="mt-2 text-sm font-medium text-slate-300">{item.score}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="glass-panel rounded-lg p-6 sm:p-8" delay={0.08}>
          <div className="flex items-center gap-3">
            <Layers3 className="text-accent-cyan" size={24} aria-hidden="true" />
            <h3 className="text-xl font-semibold text-white">Profile Snapshot</h3>
          </div>

          <div className="mt-6 grid gap-3">
            {profileCards.map((card) => (
              <div
                key={card.label}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-xs font-semibold uppercase text-accent-cyan">{card.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-200">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3">
            <Link
              href={profile.resumeHtml}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent-purple/60"
            >
              View Resume
              <ExternalLink size={16} aria-hidden="true" />
            </Link>
            <Link
              href={profile.resumePdf}
              download
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent-gradient px-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Download PDF
              <Download size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
