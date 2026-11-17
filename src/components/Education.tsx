import Image from "next/image";
import { education } from "@/data/site";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative bg-tan/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="ca-hand text-3xl">the origin story</p>
          <h2 className="ca-display text-5xl sm:text-7xl">
            education<span className="text-leaf">.</span>
          </h2>
        </Reveal>

        <ol className="mt-14 grid items-start gap-12 md:grid-cols-3">
          {education.map((e, i) => (
            <li key={e.id}>
              <Reveal delay={i * 0.1}>
                <figure className={`ca-box-soft relative bg-white p-3 pb-5 ${e.tilt}`}>
                  <div className={`ca-tape -top-3 left-1/2 -translate-x-1/2 ${e.tape}`} />
                  <div className={`relative ${e.aspect} overflow-hidden rounded-[10px] border-2 border-ink bg-chrome`}>
                    <Image
                      src={e.image}
                      alt={e.alt}
                      fill
                      sizes="(min-width:768px) 360px, 90vw"
                      className={`object-cover ${e.position}`}
                    />
                  </div>
                  <figcaption className="px-1 pt-4">
                    <p className="ca-mono text-xs font-bold uppercase tracking-widest text-gray">
                      {e.years}
                    </p>
                    <p className="ca-display mt-1 text-3xl">{e.level}</p>
                    <p className="ca-hand text-2xl leading-tight text-tangerine">{e.title}</p>
                    <p className="mt-2 text-lg font-bold leading-tight">{e.place}</p>
                    <p className="ca-mono mt-1 text-xs font-bold text-gray">{e.detail}</p>
                    <p className="mt-1 text-ink/75">{e.description}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
