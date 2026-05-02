import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Projects with data, ML, and backend depth"
        description="Selected academic and hands-on projects showing practical machine learning, analytics, APIs, and database design."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
