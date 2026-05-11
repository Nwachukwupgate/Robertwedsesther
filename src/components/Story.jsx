import { STORY } from "../data/content";
import { Divider } from "./Ornament";

function Chapter({ chap, index }) {
  const isOdd = index % 2 === 0;

  return (
    <div
      className={`chap mb-2 grid grid-cols-[1fr_56px_1fr] max-md:block max-md:pl-14 max-md:relative max-md:mb-7`}
    >
      {isOdd ? (
        <>
          <div className="row-start-1 col-start-1 py-9 px-11 self-center text-right max-md:p-0 max-md:text-left">
            <p className="font-cinzel text-[0.57rem] tracking-[0.4em] text-gold uppercase mb-2">
              {chap.year}
            </p>
            <h3 className="font-display text-[1.55rem] font-medium text-crimson mb-3 leading-tight">
              {chap.title}
            </h3>
            <p className="text-[0.96rem] leading-loose text-[#5C4840]">
              {chap.text}
            </p>
          </div>
          <div className="row-start-1 col-start-2 flex items-center justify-center py-9 relative max-md:absolute max-md:left-3 max-md:top-9 max-md:p-0">
            <div className="w-4 h-4 bg-gold border-[3px] border-cream rounded-full z-[1] ring-1 ring-gold" />
          </div>
          <div className="row-start-1 col-start-3 py-9 px-5 max-md:hidden" />
        </>
      ) : (
        <>
          <div className="row-start-1 col-start-1 py-9 px-5 max-md:hidden" />
          <div className="row-start-1 col-start-2 flex items-center justify-center py-9 relative max-md:absolute max-md:left-3 max-md:top-9 max-md:p-0">
            <div className="w-4 h-4 bg-gold border-[3px] border-cream rounded-full z-[1] ring-1 ring-gold" />
          </div>
          <div className="row-start-1 col-start-3 py-9 px-11 self-center text-left max-md:p-0">
            <p className="font-cinzel text-[0.57rem] tracking-[0.4em] text-gold uppercase mb-2">
              {chap.year}
            </p>
            <h3 className="font-display text-[1.55rem] font-medium text-crimson mb-3 leading-tight">
              {chap.title}
            </h3>
            <p className="text-[0.96rem] leading-loose text-[#5C4840]">
              {chap.text}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Story() {
  return (
    <section id="story" className="bg-cream py-[95px] px-5 relative overflow-hidden">
      <span className="pointer-events-none absolute -top-20 -right-20 w-[460px] h-[460px] border border-gold/10 rounded-full" />
      <span className="pointer-events-none absolute -bottom-20 -left-20 w-[360px] h-[360px] border border-gold/10 rounded-full" />

      <div className="max-w-[1050px] mx-auto">
        <div className="text-center mb-[75px]">
          <p className="reveal font-cinzel text-[0.58rem] tracking-[0.52em] text-gold uppercase mb-3">
            Their Journey
          </p>
          <h2
            className="reveal d1 font-display font-light text-crimson leading-snug"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            The Story of <em className="italic">Us</em>
          </h2>
          <div className="reveal d2">
            <Divider />
          </div>
        </div>
        <div className="timeline-line relative">
          {STORY.map((c, i) => (
            <Chapter key={c.year} chap={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
