import Image from "next/image";
import { profile } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="ca-hand text-3xl text-ink/80 sm:text-4xl">
            Oh, hello! You found me!{" "}
            <span className="ca-wobble inline-block">👋</span>
          </p>
          <p className="ca-mono mt-5 text-sm font-bold uppercase tracking-widest text-gray">
            my name is
          </p>
          <h1 className="ca-display mt-2 text-[clamp(3.6rem,13vw,9.5rem)]">
            <span className="block">{profile.first}</span>
            <span className="block bg-gradient-to-r from-tangerine via-pink to-tangerine bg-clip-text text-transparent">
              PRASAD
            </span>
            <span className="block">VULLA</span>
          </h1>

          <p className="mt-7 max-w-xl text-xl font-semibold leading-snug sm:text-2xl">
            {profile.heroLine}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="ca-chip bg-sun">💻 {profile.role}</span>
            <span className="ca-chip bg-mint">📍 Vizag, IN</span>
            <span className="ca-chip bg-pinksoft">
              <span className="size-2 animate-pulse rounded-full bg-leaf" /> Open to new work and good problems
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="ca-btn">
              Contact me <span aria-hidden>→</span>
            </a>
            <a href="#work" className="ca-btn ca-btn-ghost">
              See my work <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        {/* polaroid */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="ca-tape left-6 top-0 -rotate-6" />
          <figure className="ca-box-soft rotate-3 bg-white p-3 pb-5 transition-transform duration-300 hover:rotate-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] border-2 border-ink">
              <Image
                src="/me/durga.png"
                alt="Portrait of Durga Prasad Vulla in a black hoodie, lit by orange neon in front of his monitors"
                fill
                priority
                sizes="(min-width:1024px) 420px, 90vw"
                className="object-cover object-[50%_28%]"
              />
            </div>
            <figcaption className="ca-hand mt-3 text-center text-2xl">
              the guy behind the code ✦
            </figcaption>
          </figure>

          {/* stickers */}
          <div
            className="ca-spin-slow absolute -right-3 -top-6 grid size-28 place-items-center rounded-full border-2 border-ink bg-sun text-center"
            aria-hidden
          >
            <span className="ca-mono text-[0.65rem] font-bold leading-tight tracking-wider">
              MERN ✦ NEXT ✦ .NET ✦ PYTHON ✦
            </span>
          </div>
          <div
            className="ca-float absolute -bottom-6 -left-4 grid size-16 place-items-center rounded-full border-2 border-ink bg-pink text-3xl shadow-[3px_3px_0_var(--ca-ink)]"
            aria-hidden
          >
            <span className="ca-blink">👀</span>
          </div>
        </div>
      </div>
    </section>
  );
}
