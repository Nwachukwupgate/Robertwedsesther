import { useEffect, useMemo, useRef, useState } from "react";
import { COUPLE } from "../data/content";

function spawnPetals(count = 45) {
  const colors = [
    "#E8A0A0",
    "#D47070",
    "#C9A84C",
    "#E8C0B0",
    "#F0D0C0",
    "#DA8898",
    "#E0A090",
  ];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const p = document.createElement("div");
      p.className = "petal";
      const dx = (Math.random() - 0.5) * 2;
      p.style.cssText = `left:${Math.random() * 100}%;top:-20px;width:${
        7 + Math.random() * 9
      }px;height:${9 + Math.random() * 13}px;background:${
        colors[Math.floor(Math.random() * colors.length)]
      };animation-duration:${4.5 + Math.random() * 5}s;animation-delay:${
        Math.random() * 1.8
      }s;--dx:${dx};border-radius:${42 + Math.random() * 28}% ${
        58 - Math.random() * 18
      }% ${50 + Math.random() * 18}% ${
        38 + Math.random() * 22
      }%;transform:rotate(${Math.random() * 360}deg);`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 9500);
    }, i * 90);
  }
}

function Tassel({ side }) {
  return (
    <div
      className={`absolute top-[42%] z-[3] flex flex-col items-center ${
        side === "left" ? "-right-2" : "-left-2"
      }`}
    >
      <div
        className="w-14 h-14 rounded-full border-2 border-gold-lt tassel-ball-bg flex items-center justify-center text-[1.4rem]"
        style={{
          boxShadow:
            "0 0 18px rgba(201,168,76,0.5), inset 0 2px 5px rgba(255,255,255,0.25)",
        }}
      >
        🌹
      </div>
      <div className="w-1 h-[72px] tassel-cord-bg rounded-sm" />
      <div
        className="w-3.5 h-5 tassel-end-bg"
        style={{ borderRadius: "50% 50% 60% 60%" }}
      />
    </div>
  );
}

export default function Curtain({ onOpen }) {
  const [swept, setSwept] = useState(false);
  const [hidden, setHidden] = useState(false);
  const rowRef = useRef(null);

  const fringes = useMemo(() => {
    const n =
      typeof window !== "undefined"
        ? Math.floor(window.innerWidth / 14) + 5
        : 80;
    return Array.from({ length: n }, (_, i) => ({
      height: 22 + Math.sin(i * 0.65) * 11 + Math.random() * 6,
      opacity: (0.55 + Math.random() * 0.38).toFixed(2),
    }));
  }, []);

  useEffect(() => {
    if (!swept) return;
    spawnPetals(45);
    const t = setTimeout(() => {
      setHidden(true);
      onOpen?.();
    }, 3200);
    return () => clearTimeout(t);
  }, [swept, onOpen]);

  if (hidden) return null;

  return (
    <div
      onClick={() => !swept && setSwept(true)}
      className={`stage fixed inset-0 z-[9999] cursor-pointer flex flex-col ${
        swept ? "stage-swept" : ""
      }`}
    >
      {/* Valance */}
      <div className="absolute top-0 left-0 right-0 h-[86px] z-10 valance-bg border-b-[3px] border-gold overflow-hidden">
        <div
          ref={rowRef}
          className="flex h-full items-end justify-around px-2"
        >
          {fringes.map((f, i) => (
            <div
              key={i}
              className="fringe-bg w-3 shrink-0"
              style={{
                height: `${f.height}px`,
                opacity: f.opacity,
                borderRadius: "0 0 50% 50%",
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130px] h-[86px] valance-center-bg border-l-2 border-r-2 border-gold flex flex-col items-center justify-center gap-[3px]">
          <span
            className="font-script text-[2.1rem] text-gold-lt leading-none"
            style={{ textShadow: "0 0 15px rgba(201,168,76,0.7)" }}
          >
            {COUPLE.monogram}
          </span>
          <span className="font-cinzel text-[0.5rem] tracking-[0.4em] text-gold">
            {COUPLE.year}
          </span>
        </div>
      </div>

      {/* Panels */}
      <div className="absolute inset-0 flex">
        <div
          className="panel-left w-1/2 h-full relative overflow-hidden"
          style={{ boxShadow: "inset -50px 0 100px rgba(0,0,0,0.55)" }}
        >
          <div className="absolute inset-0 fabric-left" />
          <div className="absolute top-0 bottom-0 right-0 w-5 z-[2] trim-bg" />
          <Tassel side="left" />
        </div>
        <div
          className="panel-right w-1/2 h-full relative overflow-hidden"
          style={{ boxShadow: "inset 50px 0 100px rgba(0,0,0,0.55)" }}
        >
          <div className="absolute inset-0 fabric-right" />
          <div className="absolute top-0 bottom-0 left-0 w-5 z-[2] trim-bg" />
          <Tassel side="right" />
        </div>
      </div>

      {/* Prompt */}
      <div
        className="absolute bottom-[13%] left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        style={{ animation: "floatUp 2.8s ease-in-out infinite" }}
      >
        <span
          className="font-script text-gold-lt block mb-4"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.2rem)",
            textShadow:
              "0 2px 25px rgba(0,0,0,0.5), 0 0 50px rgba(201,168,76,0.25)",
          }}
        >
          {COUPLE.groom} & {COUPLE.bride}
        </span>
        <div
          className="w-[100px] h-[100px] border border-gold rounded-full mx-auto mb-3.5 flex items-center justify-center relative"
          style={{ animation: "glow 2.8s ease-in-out infinite" }}
        >
          <span
            className="absolute -inset-2 border rounded-full"
            style={{ borderColor: "rgba(201,168,76,0.25)" }}
          />
          <span className="text-[2.2rem]">💍</span>
        </div>
        <p
          className="font-cinzel text-[0.6rem] tracking-[0.55em] text-gold-lt uppercase"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
        >
          Touch to Enter
        </p>
      </div>
    </div>
  );
}
