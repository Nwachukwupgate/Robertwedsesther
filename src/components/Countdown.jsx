import { COUPLE } from "../data/content";
import useCountdown from "../hooks/useCountdown";

function Unit({ value, label, pad = 2 }) {
  return (
    <div className="text-center min-w-[74px]">
      <span
        className="cd-num-rule font-cinzel font-semibold text-white leading-none block"
        style={{
          fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
          textShadow: "0 3px 18px rgba(0,0,0,0.5)",
        }}
      >
        {String(value).padStart(pad, "0")}
      </span>
      <span className="font-cinzel text-[0.52rem] tracking-[0.4em] text-gold-lt uppercase opacity-80">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      className="font-display leading-none mt-0.5 max-sm:hidden"
      style={{
        fontSize: "clamp(3rem, 8vw, 5.5rem)",
        color: "rgba(201,168,76,0.38)",
        animation: "blink 1s step-end infinite",
      }}
    >
      :
    </span>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(COUPLE.weddingDateISO);

  return (
    <div
      id="countdown"
      className="countdown-bg py-[90px] px-5 relative overflow-hidden"
    >
      <p className="font-cinzel text-[0.58rem] tracking-[0.58em] text-gold uppercase text-center opacity-80 mb-3">
        Counting Down
      </p>
      <h2
        className="font-script text-gold-lt text-center mb-14"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
          textShadow: "0 0 28px rgba(201,168,76,0.38)",
        }}
      >
        Until Forever Begins
      </h2>
      <div
        className="flex justify-center items-start flex-wrap relative z-[1]"
        style={{ gap: "clamp(8px, 4vw, 48px)" }}
      >
        <Unit value={days} label="Days" pad={3} />
        <Colon />
        <Unit value={hours} label="Hours" />
        <Colon />
        <Unit value={minutes} label="Minutes" />
        <Colon />
        <Unit value={seconds} label="Seconds" />
      </div>
    </div>
  );
}
