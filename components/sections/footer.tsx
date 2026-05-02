import Link from "next/link";
import { navLinks, profile, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-base font-bold text-white">
          <span className="text-accent-purple">&lt;</span>
          {profile.shortName}
          <span className="text-accent-blue"> /&gt;</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-slate-500">(c) {new Date().getFullYear()} {profile.name}.</p>
      </div>
    </footer>
  );
}
