import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} — Durga Prasad Vulla`,
    description: p.description,
    openGraph: { title: p.title, description: p.description, images: [p.image] },
  };
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-10">
      <Link href="/#work" className="ca-btn ca-btn-ghost !py-2 text-sm">
        <span aria-hidden>←</span> Back to work
      </Link>

      <header className="mt-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="ca-mono text-sm font-bold text-gray">Project {p.n}</span>
          {p.client && <span className="ca-chip bg-sun text-xs">★ Client work</span>}
          {p.tags.filter((t) => t !== "Client Work").map((t) => (
            <span key={t} className="ca-chip text-xs">{t}</span>
          ))}
        </div>
        <h1 className="ca-display mt-3 text-[clamp(2.8rem,9vw,6.5rem)]">{p.title}</h1>
        <p className="ca-hand mt-3 text-3xl text-tangerine sm:text-4xl">{p.tagline}</p>
      </header>

      <div className="relative mt-12">
        <div className={`ca-tape -top-3 right-12 rotate-3 ${p.tape}`} />
        <div className={`ca-box-soft overflow-hidden ${p.color}`}>
          <div className="flex items-center gap-1.5 border-b-2 border-ink bg-surface px-3 py-2">
            <span className="size-2.5 rounded-full bg-pink" />
            <span className="size-2.5 rounded-full bg-sun" />
            <span className="size-2.5 rounded-full bg-leaf" />
            <span className="ca-mono ml-2 truncate text-xs text-gray">{p.host}</span>
          </div>
          <div className="relative aspect-[16/10]">
            <Image
              src={p.image}
              alt={`Screenshot of the ${p.title} website`}
              fill
              priority
              sizes="(min-width:1024px) 1000px, 94vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <section>
          <h2 className="ca-hand text-3xl">the brief</h2>
          <p className="mt-2 text-xl leading-relaxed">{p.brief}</p>

          <h2 className="ca-hand mt-10 text-3xl">what I built</h2>
          <ul className="mt-3 space-y-3">
            {p.built.map((b) => (
              <li key={b} className="flex gap-3 text-lg leading-snug">
                <span aria-hidden className="mt-1 text-tangerine">✦</span>
                {b}
              </li>
            ))}
          </ul>
        </section>

        <aside className={`ca-box-soft h-fit rotate-1 p-6 ${p.color}`}>
          <p className="ca-mono text-xs font-bold uppercase tracking-widest">built with</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="ca-chip">{s}</li>
            ))}
          </ul>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ca-btn mt-6 w-full justify-center"
          >
            Visit live site ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </aside>
      </div>

      <hr className="my-16 border-t-[3px] border-dashed border-ink/30" />

      <Link
        href={`/work/${next.slug}`}
        className="ca-box-soft group flex items-center justify-between gap-4 bg-sun p-6 transition-transform hover:-translate-y-1"
      >
        <span>
          <span className="ca-hand text-2xl">next project</span>
          <span className="ca-display block text-3xl sm:text-5xl">{next.title}</span>
        </span>
        <span aria-hidden className="ca-display text-5xl transition-transform group-hover:translate-x-2">→</span>
      </Link>
    </main>
  );
}
