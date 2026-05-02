"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-accent-purple/20 bg-[#07070b]/82 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-purple/70 to-transparent" />
      <nav className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-purple/40 bg-accent-purple/10 text-accent-cyan shadow-glow">
            <Sparkles size={17} aria-hidden="true" />
          </span>
          <span>
            <span className="text-accent-purple">&lt;</span>
            {profile.shortName}
            <span className="text-accent-blue"> /&gt;</span>
          </span>
        </Link>

        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] p-1 shadow-[0_0_32px_rgba(124,58,237,0.16)] xl:flex">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                  active ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full border border-accent-purple/50 bg-accent-gradient shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href={profile.resumePdf}
            download
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-accent-purple/60 bg-accent-purple/10 px-5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:border-accent-blue hover:bg-white/[0.06]"
          >
            Download Resume
            <Download size={16} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-accent-purple/40 bg-accent-purple/10 text-white shadow-glow xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#07070b]/98 px-4 pb-5 pt-3 xl:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-2">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "border-accent-purple/60 bg-accent-purple/20 text-white"
                        : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-accent-purple/50 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={profile.resumePdf}
                download
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent-gradient px-4 text-sm font-semibold text-white shadow-glow"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
                <Download size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
