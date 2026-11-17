import { profile, skills } from "@/data/site";
import { Reveal } from "./Reveal";

const stats = [
  { n: "5", label: "live projects", color: "bg-sun", tilt: "-rotate-3", tape: "" },
  { n: "3", label: "client sites", color: "bg-pinksoft", tilt: "rotate-2", tape: "ca-tape-pink" },
  { n: "7", label: "techs I ship with", color: "bg-mint", tilt: "-rotate-1", tape: "ca-tape-mint" },
];

export function About() {
  const groups = [...new Set(skills.map((s) => s.group))];
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <h2 className="ca-display text-5xl sm:text-7xl">
          about me<span className="text-tangerine">!</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`ca-box-soft relative ${s.color} ${s.tilt} px-3 pb-5 pt-8 text-center ca-sticker-hover`}
              >
                <div className={`ca-tape -top-3 left-1/2 -translate-x-1/2 ${s.tape}`} />
                <p className="ca-display text-6xl">{s.n}</p>
                <p className="ca-mono mt-2 text-[0.7rem] font-bold uppercase leading-tight tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p className="ca-hand mt-10 text-3xl">what’s up 👇</p>
          <p className="mt-3 text-xl font-semibold leading-snug">{profile.aboutLead}</p>
          {profile.about.map((p) => (
            <p key={p} className="mt-4 text-lg leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="ca-box-soft relative bg-white p-6 sm:p-8">
            <div className="ca-tape -top-3 right-10 rotate-3" />
            <p className="ca-hand text-3xl">my toolbox 🧰</p>
            <div className="mt-6 space-y-6">
              {groups.map((g) => (
                <div key={g}>
                  <p className="ca-mono text-xs font-bold uppercase tracking-widest text-gray">{g}</p>
                  <ul className="mt-2.5 flex flex-wrap gap-2.5">
                    {skills
                      .filter((s) => s.group === g)
                      .map((s) => (
                        <li
                          key={s.name}
                          className={`ca-chip ${s.color} ca-sticker-hover text-base`}
                        >
                          <span aria-hidden>{s.emoji}</span>
                          {s.name}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="ca-hand mt-7 text-2xl text-ink/70">currently levelling up: DSA → DevOps ↗</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
