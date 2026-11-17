import Image from "next/image";
import { profile } from "@/data/site";
import { Reveal } from "./Reveal";

const socials = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "X / Twitter", href: profile.socials.x },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-surface">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="ca-hand text-3xl text-sun">got a project, a hard problem, or just want to say hi?</p>
          <h2 className="ca-display mt-2 text-[clamp(3.5rem,13vw,10rem)]">
            let’s <span className="text-tangerine">talk</span>
            <span className="text-sun">.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="relative mx-auto w-48 rotate-[-4deg]">
              <div className="ca-tape left-1/2 -top-3 -translate-x-1/2" />
              <div className="relative aspect-square overflow-hidden rounded-[14px] border-[3px] border-surface">
                <Image
                  src="/me/durga.png"
                  alt="Durga Prasad Vulla"
                  fill
                  sizes="192px"
                  className="object-cover object-[50%_25%]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-xl leading-relaxed text-surface/85">
              Send it over. I read every message. Open to freelance projects, full-time roles and
              interesting conversations about hard problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="ca-btn !border-surface !shadow-[4px_4px_0_var(--ca-yellow)]"
              >
                ✉ {profile.email}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ca-chip border-surface bg-transparent text-surface transition-colors hover:bg-sun hover:text-ink"
                  >
                    {s.label} ↗<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <p className="ca-hand mt-16 text-center text-4xl text-sun">let’s make something together ✦</p>
      </div>
    </section>
  );
}
