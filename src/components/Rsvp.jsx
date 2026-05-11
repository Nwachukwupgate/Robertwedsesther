import { COUPLE } from "../data/content";

export default function Rsvp() {
  return (
    <section id="rsvp" className="bg-ivory py-[95px] px-5">
      <div className="max-w-[660px] mx-auto text-center">
        <div className="reveal w-[76px] h-[76px] border border-gold rounded-full mx-auto mb-9 flex items-center justify-center">
          <span className="font-script text-gold text-[1.85rem]">R·E</span>
        </div>
        <span
          className="reveal font-script text-crimson block mb-2 leading-[1.12]"
          style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
        >
          {COUPLE.groom} & {COUPLE.bride}
        </span>
        <p className="reveal d1 italic text-[1.08rem] text-muted leading-[1.8] my-5 mx-auto max-w-[480px]">
          Together with their families, they joyfully invite you to share in
          the celebration of their sacred union.
        </p>
        <p className="reveal d2 font-display italic text-[0.98rem] text-muted leading-[1.75] mx-auto mb-12 max-w-[430px] border-t border-b border-gold/30 py-[18px]">
          "Two are better than one, for they have a good reward for their
          toil.
          <br />
          For if they fall, one will lift up the other."
          <br />
          <br />
          <strong className="not-italic text-[0.78rem] text-gold-dk tracking-[0.08em]">
            Ecclesiastes 4 : 9–10
          </strong>
        </p>
        <a
          href={`mailto:${COUPLE.rsvpEmail}`}
          className="reveal d3 rsvp-btn-bg inline-block px-[58px] py-[17px] text-gold-lt font-cinzel text-[0.68rem] tracking-[0.42em] uppercase no-underline border border-gold/30 relative overflow-hidden transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_38px_rgba(75,0,15,0.32)]"
        >
          Confirm Your Attendance
        </a>
        <p className="reveal mt-7 font-cinzel text-[0.57rem] tracking-[0.3em] text-muted uppercase">
          Please RSVP by {COUPLE.rsvpDeadline}
        </p>
      </div>
    </section>
  );
}
