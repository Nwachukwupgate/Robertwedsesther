export function OrnamentRow({ small = false, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-2.5 my-1.5 ${className}`}>
      <span className="h-px w-14 orn-line-l" />
      <span className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0" />
      {!small && (
        <span
          className="w-1.5 h-1.5 bg-gold shrink-0"
          style={{ opacity: 0.45, transform: "rotate(45deg) scale(0.55)" }}
        />
      )}
      {!small && <span className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0" />}
      <span className="h-px w-14 orn-line-r" />
    </div>
  );
}

export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 mx-auto mt-4 max-w-[260px]">
      <span className="flex-1 h-px divider-line" />
      <span className="text-gold text-[0.82rem]">✦</span>
      <span className="flex-1 h-px divider-line" />
    </div>
  );
}
