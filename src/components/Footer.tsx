import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-sun px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div>
          <p className="ca-display text-2xl">{profile.name}</p>
          <p className="ca-mono text-xs font-bold uppercase tracking-widest">{profile.role}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm font-bold">
          <a href="#about" className="hover:underline">About</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <p className="text-sm font-semibold">© 2026 {profile.name} · made with ♥ in Vizag</p>
      </div>
    </footer>
  );
}
