import { GALLERY } from "../data/content";

function MosaicItem({ item, isFeature }) {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${
        isFeature ? "row-span-2 max-sm:row-span-1 max-sm:col-span-2" : ""
      }`}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        style={{ filter: "brightness(0.78) sepia(0.08)" }}
      />
      <div className="absolute inset-0 m-veil-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 px-5 py-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-display italic text-white text-[1.08rem]">
          {item.title}
        </p>
        <p className="font-cinzel text-[0.5rem] tracking-[0.35em] text-gold-lt uppercase mt-1">
          {item.sub}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#120305]">
      <div
        className="flex items-end justify-between flex-wrap gap-[18px] pt-[72px] pb-[52px]"
        style={{ paddingLeft: "clamp(20px,5.5vw,75px)", paddingRight: "clamp(20px,5.5vw,75px)" }}
      >
        <div>
          <p className="reveal font-cinzel text-[0.58rem] tracking-[0.5em] text-gold uppercase mb-3">
            Our Photographs
          </p>
          <h2
            className="reveal d1 font-display font-light text-white leading-[1.1]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Captured <em className="not-italic italic text-gold-lt">Moments</em>
            <br />
            of Our Love
          </h2>
        </div>
        <p className="reveal d2 max-w-[320px] italic text-[0.97rem] text-white/40 leading-relaxed border-l-2 border-gold pl-4">
          "Every photograph holds a memory of two people who chose each other,
          again and again."
        </p>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[360px_290px] gap-[3px] max-sm:grid-cols-2 max-sm:grid-rows-[250px_200px_200px]">
        {GALLERY.map((item, i) => (
          <MosaicItem key={item.src} item={item} isFeature={i === 0} />
        ))}
      </div>
    </section>
  );
}
