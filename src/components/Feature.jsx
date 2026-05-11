import { COUPLE, FEATURE_IMG } from "../data/content";

export default function Feature() {
  return (
    <div
      id="feature"
      className="relative min-h-[380px] h-[68vh] overflow-hidden flex items-center justify-center"
    >
      <img
        id="feat-img"
        src={FEATURE_IMG}
        alt="Wedding celebration"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.47) sepia(0.22)" }}
      />
      <div className="absolute inset-0 feat-veil-bg" />
      <div className="relative z-[2] text-center px-5">
        <p
          className="font-display italic font-light text-white leading-[1.55] max-w-[680px] mb-4"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.7rem)",
            textShadow: "0 2px 18px rgba(0,0,0,0.42)",
          }}
        >
          "Love is not about how many days, months, or years you have been
          together. It is about how much you love each other, every single
          day."
        </p>
        <p className="font-cinzel text-[0.58rem] tracking-[0.45em] text-gold uppercase">
          ✦ &nbsp; {COUPLE.groom} & {COUPLE.bride} &nbsp; ✦
        </p>
      </div>
    </div>
  );
}
