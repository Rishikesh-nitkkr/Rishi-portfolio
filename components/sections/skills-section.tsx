import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillIcon } from "@/components/ui/skill-icon";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Technical skills across software, data, and security"
        description="A practical foundation for backend systems, machine learning applications, data analysis, and modern web development."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <div className="glass-panel h-full rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 grid gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-accent-purple/50 hover:bg-white/[0.06]"
                  >
                    <SkillIcon name={skill} />
                    <span className="text-sm font-medium text-slate-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
