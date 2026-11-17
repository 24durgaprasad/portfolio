const items = ["MONGODB", "EXPRESS", "REACT", "NODE.JS", "NEXT.JS", ".NET", "PYTHON", "SHIP IT"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="ca-marquee -rotate-1 overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-surface"
      aria-hidden="true"
    >
      <div className="ca-marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={`${k}-${i}`} className="ca-display flex items-center text-3xl sm:text-4xl">
                <span className="px-5">{t}</span>
                <span className="text-sun">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
