import { Award, BrainCircuit, Code2, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, stats, strengths } from "@/lib/data";

const icons = [Award, GraduationCap, Code2, BrainCircuit];

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="About"
        title="Academic depth with hands-on software experience"
        description="A practical profile built around computer science fundamentals, MCA coursework, machine learning projects, and enterprise application support."
      />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="glass-panel rounded-lg p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white">Who I Am</h3>
          <p className="mt-4 leading-7 text-slate-400">
            I&apos;m {profile.name}, an MCA student at NIT Kurukshetra focused on becoming a strong
            software engineer across backend systems, data-driven applications, and machine learning.
            I like building projects where computer science fundamentals turn into useful products.
          </p>
          <p className="mt-4 leading-7 text-slate-400">
            My Accenture experience gave me exposure to incident resolution, release support,
            documentation, and automation in production environments. That mix of academics and
            industry discipline shapes how I approach software: clear logic, clean implementation,
            and steady improvement.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300"
              >
                {strength}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {stats.map((stat, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="group glass-panel h-full rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:border-accent-purple/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent-purple/30 bg-accent-purple/10 text-accent-cyan">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-200">{stat.label}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-400">{stat.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
