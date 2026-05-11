import { DETAILS, DETAILS_IMG } from "../data/content";

function DetailStrip({ icon, label, primary, secondary, delay }) {
  return (
    <div
      className={`det-strip reveal ${delay} relative flex gap-5 items-start transition-colors duration-300 hover:bg-gold/5 border-r border-gold/15 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:border-gold/15`}
      style={{ padding: "clamp(28px,4.5vw,52px) clamp(22px,4vw,46px)" }}
    >
      <div className="w-12 h-12 shrink-0 border border-gold/40 flex items-center justify-center text-[1.3rem]">
        {icon}
      </div>
      <div>
        <p className="font-cinzel text-[0.56rem] tracking-[0.45em] text-gold uppercase mb-1.5">
          {label}
        </p>
        <p className="font-display text-[1.3rem] font-medium text-crimson leading-snug mb-1">
          {primary}
        </p>
        <p className="text-[0.83rem] leading-relaxed text-muted">
          {secondary.map((line, i) => (
            <span key={i}>
              {line}
              {i < secondary.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function Details() {
  const delays = ["", "d1", "d2", "d3"];
  return (
    <section id="details" className="bg-ivory">
      <div className="relative h-[62vh] min-h-[400px] overflow-hidden">
        <img
          src={DETAILS_IMG}
          alt="Wedding decor"
          loading="lazy"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.52) sepia(0.18)" }}
        />
        <div className="absolute inset-0 det-photo-veil-bg" />
        <div
          className="absolute bottom-0 left-0 right-0 flex items-end justify-between flex-wrap gap-6"
          style={{ padding: "clamp(28px, 6vw, 68px)" }}
        >
          <div>
            <p className="reveal font-cinzel text-[0.58rem] tracking-[0.5em] text-gold uppercase mb-2.5">
              The Wedding
            </p>
            <h2
              className="reveal d1 font-display font-light text-white leading-[1.1]"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
            >
              When <em className="not-italic text-gold-lt italic">&</em> Where
              <br />
              We Celebrate
            </h2>
            <div className="reveal d2 flex items-center gap-2.5 mt-3.5">
              <span className="h-px w-11 bg-gold" />
              <span className="font-cinzel text-[0.58rem] tracking-[0.38em] text-white/55 uppercase">
                14 December 2025 · Lagos
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] border-t border-gold/20">
        {DETAILS.map((item, i) => (
          <DetailStrip key={item.label} {...item} delay={delays[i]} />
        ))}
      </div>
    </section>
  );
}
