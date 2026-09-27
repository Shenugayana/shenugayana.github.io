import { useEffect } from "react";
import { Wordmark } from "./Wordmark";

/** Decorative only: content is already rendered underneath, never hidden from AT. */
export function BrandIntro() {
  useEffect(() => {
    const dismiss = () => { document.documentElement.dataset.intro = "done"; };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Tab" || event.key === "Escape") dismiss();
    };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => { if (motion.matches) dismiss(); };
    window.addEventListener("keydown", onKey);
    motion.addEventListener("change", onMotion);
    return () => {
      window.removeEventListener("keydown", onKey);
      motion.removeEventListener("change", onMotion);
    };
  }, []);
  return <div className="brand-intro" aria-hidden="true"><div className="intro-mark"><Wordmark expanded /></div><div className="intro-rule" /></div>;
}
