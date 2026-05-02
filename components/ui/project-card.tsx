"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { ProjectPreview } from "@/components/ui/project-preview";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    tech: string[];
    features: string[];
    live: string;
    github: string;
    preview: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="glass-panel group flex h-full flex-col rounded-lg p-4 transition-colors duration-200 hover:border-accent-purple/50"
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.22 }}
    >
      <ProjectPreview variant={project.preview} />
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase text-accent-cyan">Key features</p>
          <ul className="mt-2 grid gap-2 text-sm leading-6 text-slate-300">
            {project.features.map((feature) => (
              <li key={feature} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          {project.live ? (
            <Link
              href={project.live}
              target={project.live.startsWith("http") ? "_blank" : undefined}
              rel={project.live.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-white text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
            >
              Live Demo
              <ExternalLink size={15} aria-hidden="true" />
            </Link>
          ) : (
            <span className="inline-flex min-h-10 flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-sm font-semibold text-slate-400">
              Demo Pending
            </span>
          )}
          <Link
            href={project.github}
            target={project.github.startsWith("http") ? "_blank" : undefined}
            rel={project.github.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 text-sm font-semibold text-white transition hover:border-accent-purple/60 hover:bg-white/[0.06]"
          >
            GitHub
            <Github size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
