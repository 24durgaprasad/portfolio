import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="ca-hand text-3xl">featured works</p>
        <h2 className="ca-display text-5xl sm:text-7xl">
          explore my work<span className="text-pink">!</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink/75">
          Real products, live on the internet right now. Three of them for real clients.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className={i % 2 ? "md:mt-16" : ""}>
            <article className="group relative">
              <div className={`ca-tape -top-3 right-8 ${i % 2 ? "-rotate-6" : "rotate-6"} ${p.tape}`} />
              <Link
                href={`/work/${p.slug}`}
                className={`ca-box-soft block overflow-hidden ${p.color} ${
                  i % 2 ? "rotate-[0.8deg]" : "-rotate-[0.8deg]"
                } transition-transform duration-300 group-hover:rotate-0`}
              >
                <div className="flex items-center gap-1.5 border-b-2 border-ink bg-surface px-3 py-2">
                  <span className="size-2.5 rounded-full bg-pink" />
                  <span className="size-2.5 rounded-full bg-sun" />
                  <span className="size-2.5 rounded-full bg-leaf" />
                  <span className="ca-mono ml-2 truncate text-[0.7rem] text-gray">{p.host}</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`Screenshot of the ${p.title} website`}
                    fill
                    sizes="(min-width:768px) 560px, 92vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="mt-5 flex items-center gap-3">
                <span className="ca-mono text-sm font-bold text-gray">Project {p.n}</span>
                {p.client && <span className="ca-chip bg-sun !py-0.5 text-xs">★ Client work</span>}
              </div>
              <h3 className="ca-display mt-1 text-4xl sm:text-5xl">{p.title}</h3>
              <p className="mt-2 text-lg text-ink/75">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tags.filter((t) => t !== "Client Work").map((t) => (
                  <li key={t} className="ca-chip text-xs">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link href={`/work/${p.slug}`} className="ca-btn !py-2 text-sm">
                  View project <span aria-hidden>→</span>
                </Link>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline decoration-wavy decoration-pink underline-offset-4"
                >
                  Visit live ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
