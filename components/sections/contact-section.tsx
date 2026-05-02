"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Send, SquareArrowOutUpRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactLinks } from "@/lib/data";

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Portfolio: SquareArrowOutUpRight
};

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect professionally"
        description="For internships, projects, software roles, or collaboration, use the form or reach out through the professional links below."
      />

      <motion.div
        className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        initial={false}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass-panel rounded-lg p-5 sm:p-7">
          <h3 className="text-2xl font-semibold text-white">Professional Links</h3>
          <p className="mt-3 leading-7 text-slate-400">
            Use email, LinkedIn, GitHub, or the contact form for professional communication.
          </p>

          <div className="mt-7 grid gap-4">
            {contactLinks.map((item) => {
              const Icon = iconMap[item.label as keyof typeof iconMap] ?? Mail;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-accent-purple/50 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-purple/20 text-accent-cyan">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-slate-400">{item.label}</span>
                    <span className="block break-all text-sm font-medium text-white sm:text-base">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <form className="glass-panel grid gap-4 rounded-lg p-5 sm:p-7" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-300">
              Name
              <input
                required
                name="name"
                className="min-h-12 rounded-lg border border-white/10 bg-ink-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-accent-purple"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-300">
              Email
              <input
                required
                name="email"
                type="email"
                className="min-h-12 rounded-lg border border-white/10 bg-ink-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-accent-purple"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            Subject
            <input
              required
              name="subject"
              className="min-h-12 rounded-lg border border-white/10 bg-ink-950/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-accent-purple"
              placeholder="Internship, role, project, or collaboration"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            Message
            <textarea
              required
              name="message"
              rows={6}
              className="resize-none rounded-lg border border-white/10 bg-ink-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-accent-purple"
              placeholder="Share the opportunity or project details"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent-gradient px-5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Send Message
            <Send size={16} aria-hidden="true" />
          </button>
          {submitted ? (
            <p className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              Message captured locally. Connect a form backend before deploying this contact form.
            </p>
          ) : null}
        </form>
      </motion.div>
    </section>
  );
}
