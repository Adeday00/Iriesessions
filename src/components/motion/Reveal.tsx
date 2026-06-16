"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals its children with a subtle fade + short rise the first time they
 * scroll into view. Uses IntersectionObserver (no animation library) and
 * shows content immediately under prefers-reduced-motion or without JS
 * (the hiding styles are scoped to the `.js` class added in the layout).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`motion-reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
