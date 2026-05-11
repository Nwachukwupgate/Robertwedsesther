import { COUPLE } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-burgundy py-16 px-5 text-center relative overflow-hidden">
      <span className="absolute top-0 left-0 right-0 h-[2px] divider-line" />
      <p
        className="font-script text-gold-lt mb-3"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          textShadow: "0 0 28px rgba(201,168,76,0.28)",
        }}
      >
        {COUPLE.groom} & {COUPLE.bride}
      </p>
      <div className="w-12 h-px divider-line mx-auto my-3.5" />
      <p className="font-cinzel text-[0.57rem] tracking-[0.48em] uppercase text-gold-lt/50">
        14 · December · 2025 &nbsp;·&nbsp; Lagos, Nigeria
      </p>
    </footer>
  );
}
