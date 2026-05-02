import { BrainCircuit, Database, ServerCog } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { offers } from "@/lib/data";

const offerIcons = [BrainCircuit, ServerCog, Database];

export function OfferSection() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contribution"
        title="What I can contribute"
        description="Practical engineering support for teams that need strong fundamentals, fast learning, and clean execution."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {offers.map((offer, index) => {
          const Icon = offerIcons[index] ?? ServerCog;
          return (
            <Reveal key={offer.title} delay={index * 0.08}>
              <div className="glass-panel group h-full rounded-lg p-6 transition duration-200 hover:-translate-y-1 hover:border-accent-purple/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-purple/40 bg-accent-purple/10 text-accent-cyan">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{offer.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{offer.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
