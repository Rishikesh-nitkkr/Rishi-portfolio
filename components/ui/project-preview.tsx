type ProjectPreviewProps = {
  variant: string;
};

const accentMap: Record<string, string> = {
  commerce: "from-violet-500/30 via-blue-500/25 to-cyan-400/20",
  tasks: "from-blue-500/30 via-indigo-500/25 to-violet-500/20",
  weather: "from-cyan-400/30 via-blue-500/25 to-violet-500/20",
  fitness: "from-emerald-400/30 via-blue-500/25 to-violet-500/20",
  genai: "from-violet-500/30 via-fuchsia-500/20 to-blue-500/20",
  spotify: "from-green-400/30 via-cyan-400/20 to-blue-500/20",
  museum: "from-amber-400/25 via-violet-500/20 to-blue-500/20"
};

export function ProjectPreview({ variant }: ProjectPreviewProps) {
  const accent = accentMap[variant] ?? accentMap.commerce;

  return (
    <div
      className={`relative h-48 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br ${accent}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.16),rgba(11,11,15,0.18)_34%,rgba(11,11,15,0.72))]" />
      <div className="absolute left-5 right-5 top-5 rounded-md border border-white/10 bg-ink-950/70 shadow-2xl">
        <div className="flex h-8 items-center gap-2 border-b border-white/10 px-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
          <span className="ml-2 h-2 w-24 rounded-full bg-white/10" />
        </div>
        <div className="grid gap-3 p-4">
          <div className="h-3 w-2/3 rounded-full bg-white/40" />
          <div className="h-3 w-1/2 rounded-full bg-white/20" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-14 rounded bg-white/10" />
            <div className="h-14 rounded bg-white/20" />
            <div className="h-14 rounded bg-white/10" />
          </div>
          <div className="h-9 w-28 rounded-md bg-accent-gradient" />
        </div>
      </div>
    </div>
  );
}
