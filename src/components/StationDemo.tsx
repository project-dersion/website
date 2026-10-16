"use client";

import { useEffect, useRef } from "react";
import s from "./StationDemo.module.css";

// The page's one motion moment. The server renders the finished state; only when JS
// runs (and motion is welcome) is it reset and played once as it scrolls into view.
export function StationDemo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.dataset.state = "armed";
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        el.dataset.state = "playing";
      },
      { threshold: 0.55 },
    );
    io.observe(el);

    const onEnd = (e: AnimationEvent) => {
      if ((e.target as HTMLElement).dataset.part === "hint") el.dataset.state = "rest";
    };
    el.addEventListener("animationend", onEnd);

    return () => {
      io.disconnect();
      el.removeEventListener("animationend", onEnd);
      el.dataset.state = "rest";
    };
  }, []);

  return (
    <div ref={ref} className={s.card} data-state="rest">
      <p className={s.question}>2(x + 3) = 14</p>
      <ol className={s.lines}>
        <li className={s.line}>
          <span className={s.eq} data-part="eq1">
            2x + 6 = 14
          </span>
          <svg className={s.tick} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.5 12.5l4.8 4.8L19.5 7" pathLength={1} />
          </svg>
        </li>
        <li className={s.line}>
          <span className={s.eq} data-part="eq2">
            2x = 14 + 6
          </span>
          <svg className={s.dot} viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <mask id="station-scribble" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                <path
                  className={s.scribble}
                  d="M12 14 L86 8 L10 30 L92 26 L8 50 L94 46 L8 70 L92 66 L14 90 L86 88"
                  pathLength={1}
                />
              </mask>
            </defs>
            <image className={s.dotImage} href="/brand/derived/dot-small-96.webp" width="100" height="100" />
          </svg>
        </li>
      </ol>
      <p className={s.hint} data-part="hint">
        İlk adım doğru. İkinci satıra bakalım: 6 karşıya geçince işareti ne olur?
      </p>
    </div>
  );
}
