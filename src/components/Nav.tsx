"use client";

import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary"
        className="ca-box-soft mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5"
      >
        <a href="#home" className="ca-display flex items-center gap-2 text-2xl" aria-label="Home">
          <span className="grid size-9 place-items-center rounded-full border-2 border-ink bg-sun text-base">
            DV
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors hover:bg-sun"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="ca-btn !px-4 !py-1.5 text-sm">
            Contact
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border-2 border-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="ca-box-soft mx-auto mt-2 flex max-w-5xl flex-col gap-1 p-3 md:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 font-semibold hover:bg-sun"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
