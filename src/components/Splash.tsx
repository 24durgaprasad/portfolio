const WORD = "hello!";

export function Splash() {
  return (
    <div className="ca-splash" aria-hidden="true">
      <div className="text-center">
        <p className="ca-hand text-3xl text-ink/70">psst… it’s</p>
        <p className="ca-display text-[22vw] leading-none text-ink sm:text-[14rem]">
          {WORD.split("").map((c, i) => (
            <span
              key={i}
              className="ca-splash-char"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              {c}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
