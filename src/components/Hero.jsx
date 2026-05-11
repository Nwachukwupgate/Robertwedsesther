import { useEffect, useState } from "react";
import { COUPLE, HERO_IMG } from "../data/content";
import { OrnamentRow } from "./Ornament";

export default function Hero({ curtainOpened }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (curtainOpened) {
      const t = setTimeout(() => setLoaded(true), 60);
      return () => clearTimeout(t);
    }
  }, [curtainOpened]);

  const scrollToCountdown = () => {
    document
      .getElementById("countdown")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        loaded ? "hero-loaded" : ""
      }`}
    >
      <div
        id="hero-bg"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          filter: "brightness(0.4) sepia(0.25)",
        }}
      />
      <div className="absolute inset-0 hero-veil-bg" />

      <div
        className={`hero-cnt relative z-[2] text-center px-5 ${
          curtainOpened ? "show" : ""
        }`}
      >
        <p className="font-cinzel text-[0.62rem] tracking-[0.65em] text-gold-lt uppercase mb-6 opacity-85">
          You Are Cordially Invited
        </p>

        <OrnamentRow />

        <span
          className="font-script text-white block leading-[1.05]"
          style={{
            fontSize: "clamp(4.5rem, 13vw, 9.5rem)",
            textShadow:
              "0 4px 30px rgba(0,0,0,0.45), 0 0 80px rgba(201,168,76,0.15)",
          }}
        >
          {COUPLE.groom}
        </span>
        <span
          className="font-script text-gold-lt block -my-1.5"
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            textShadow: "0 2px 18px rgba(201,168,76,0.45)",
          }}
        >
          &
        </span>
        <span
          className="font-script text-white block leading-[1.05]"
          style={{
            fontSize: "clamp(4.5rem, 13vw, 9.5rem)",
            textShadow:
              "0 4px 30px rgba(0,0,0,0.45), 0 0 80px rgba(201,168,76,0.15)",
          }}
        >
          {COUPLE.bride}
        </span>

        <OrnamentRow small className="mt-4" />

        <p
          className="font-display italic text-white/70 my-6 font-light"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            letterSpacing: "0.08em",
          }}
        >
          Two souls, one breathtaking beginning
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span
            className="font-cinzel tracking-[0.28em] text-white/80"
            style={{ fontSize: "clamp(0.65rem, 1.4vw, 0.85rem)" }}
          >
            {COUPLE.weekday}
          </span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span
            className="font-cinzel tracking-[0.28em] text-white/80"
            style={{ fontSize: "clamp(0.65rem, 1.4vw, 0.85rem)" }}
          >
            {COUPLE.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span
            className="font-cinzel tracking-[0.28em] text-white/80"
            style={{ fontSize: "clamp(0.65rem, 1.4vw, 0.85rem)" }}
          >
            {COUPLE.city}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToCountdown}
        className={`hero-scroll absolute bottom-9 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-[7px] cursor-pointer ${
          curtainOpened ? "show" : ""
        }`}
      >
        <div
          className="w-px h-12 scroll-grad"
          style={{ animation: "scrollAnim 2s ease-in-out infinite" }}
        />
        <span className="font-cinzel text-[0.52rem] tracking-[0.45em] text-gold-lt uppercase">
          Scroll
        </span>
      </button>
    </section>
  );
}
