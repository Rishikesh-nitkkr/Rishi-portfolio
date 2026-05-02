import {
  Braces,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  ShieldCheck,
  Terminal
} from "lucide-react";

type SkillIconProps = {
  name: string;
};

const iconMap: Record<string, typeof Code2> = {
  Python: Code2,
  Java: Code2,
  "C++": Braces,
  SQL: Database,
  JavaScript: Braces,
  "HTML/CSS": Globe2,
  React: Code2,
  "Next.js": Layers3,
  TypeScript: Braces,
  "Tailwind CSS": Globe2,
  "Node.js": Server,
  Express: Server,
  "REST APIs": Terminal,
  "Spring Boot": Server,
  Flask: Server,
  Django: Server,
  TensorFlow: BrainCircuit,
  PyTorch: BrainCircuit,
  "Scikit-learn": BrainCircuit,
  MongoDB: Database,
  PostgreSQL: Database,
  MySQL: Database,
  SQLite: Database,
  DBMS: Database,
  Prisma: Database,
  Git: GitBranch,
  GitHub: GitBranch,
  Docker: Layers3,
  Postman: Terminal,
  Vercel: Globe2,
  Jupyter: Terminal,
  "Google Cloud": Globe2,
  Cybersecurity: ShieldCheck
};

export function SkillIcon({ name }: SkillIconProps) {
  const Icon = iconMap[name] ?? Code2;

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-accent-cyan transition group-hover:border-accent-purple/50 group-hover:text-white">
      <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
    </div>
  );
}
