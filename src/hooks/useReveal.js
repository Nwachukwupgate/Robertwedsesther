import { useEffect } from "react";

export default function useReveal(selector = ".reveal, .chap", threshold = 0.1) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, threshold]);
}
