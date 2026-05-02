"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { profile, profileCards } from "@/lib/data";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="section-shell grid min-h-[calc(100svh-4rem)] items-center gap-10 py-12 sm:py-16 lg:min-h-[760px] lg:grid-cols-[1.02fr_0.98fr] lg:py-20"
    >
      <div className="max-w-[22rem] sm:max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          Available for internships and software roles
        </div>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Hi, I&apos;m
          <span className="block bg-accent-gradient bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-4 text-2xl font-semibold leading-tight text-slate-100 sm:text-4xl">
          {profile.role}
        </p>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          {profile.summary} I build scalable, secure, and efficient software systems across web,
          data, and machine learning use cases.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/projects" className="w-full sm:w-auto">
            View Projects
            <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" className="w-full sm:w-auto">
            Contact Me
            <Mail size={17} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/resume" variant="secondary" className="w-full sm:w-auto">
            View Resume
          </ButtonLink>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {[
            { label: "GitHub", href: profile.github, icon: Github },
            { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
            { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-accent-purple/60 hover:text-white"
              >
                <Icon size={18} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-[430px]"
        initial={false}
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -inset-5 rounded-full bg-accent-purple/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-3 shadow-glow backdrop-blur-xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink-900">
            <Image
              src={profile.photo}
              alt={`${profile.name} portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 430px"
              className="object-cover object-[54%_36%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,15,0)_54%,rgba(11,11,15,0.86)_100%)]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-ink-950/72 p-4 backdrop-blur-xl">
              <p className="text-lg font-semibold text-white">{profile.name}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={15} aria-hidden="true" />
                {profile.location}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {profileCards.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase text-accent-cyan">{card.label}</p>
              <p className="mt-1 text-sm font-medium leading-5 text-slate-200">{card.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
