import { CheckCircle2, Gauge, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/lib/data";

const accenture = journey[0];

const impactCards = [
  {
    label: "SLA Quality",
    value: "98%",
    description: "Maintained SLA compliance while supporting enterprise application availability.",
    icon: Gauge
  },
  {
    label: "Release Impact",
    value: "3",
    description: "Contributed to major software releases impacting global users.",
    icon: Rocket
  },
  {
    label: "Automation",
    value: "30%",
    description: "Reduced manual deployment effort through shell-script automation.",
    icon: ShieldCheck
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Enterprise application support experience"
        description="A focused view of Accenture work experience, responsibilities, measurable impact, and operational discipline."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="glass-panel rounded-lg p-6 sm:p-8">
          <p className="text-sm font-semibold text-accent-cyan">{accenture.period}</p>
          <h3 className="mt-3 text-3xl font-bold text-white">{accenture.role}</h3>
          <p className="mt-2 text-lg font-semibold text-slate-300">{accenture.company}</p>
          <p className="mt-5 leading-7 text-slate-400">{accenture.summary}</p>

          <div className="mt-7">
            <h4 className="text-sm font-semibold uppercase text-accent-cyan">Responsibilities</h4>
            <ul className="mt-3 grid gap-3">
              {[
                "Managed incident resolution and change-management workflows.",
                "Supported release coordination for enterprise-scale applications.",
                "Created SOPs and onboarding documentation for repeatable operations.",
                "Collaborated with cross-functional teams in production support environments."
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-accent-cyan" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {impactCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 0.08}>
                <div className="glass-panel rounded-lg p-6 transition duration-200 hover:-translate-y-1 hover:border-accent-purple/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent-purple/40 bg-accent-purple/10 text-accent-cyan">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase text-accent-cyan">{item.label}</p>
                      <p className="mt-2 text-4xl font-bold text-white">{item.value}</p>
                      <p className="mt-2 leading-7 text-slate-400">{item.description}</p>
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
