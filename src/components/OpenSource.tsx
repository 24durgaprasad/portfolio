import { openSource, profile } from "@/data/site";
import { Reveal } from "./Reveal";

export function OpenSource() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="ca-hand text-3xl">also on GitHub</p>
        <h2 className="ca-display text-5xl sm:text-6xl">open source & grind</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {openSource.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.08}>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`ca-box-soft block p-6 transition-transform hover:-translate-y-1 hover:rotate-0 ${
                i ? "rotate-1 bg-mint" : "-rotate-1 bg-cyan"
              }`}
            >
              <p className="ca-mono text-xs font-bold uppercase tracking-widest">since {o.since}</p>
              <h3 className="ca-display mt-2 text-3xl">{o.title}</h3>
              <p className="mt-2 text-lg text-ink/80">{o.text}</p>
              <p className="mt-4 font-bold">
                github.com/24durgaprasad ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
