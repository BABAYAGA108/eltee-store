// src/hooks.ts
import { useState, useEffect, useRef, RefObject } from 'react';

export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);

  return scrolled;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Find all child elements with data-reveal attribute
          const revealElements = el.querySelectorAll("[data-reveal='true']");
          revealElements.forEach((element) => {
            // Remove opacity-0 and translate-y-10, add opacity-100 and translate-y-0
            element.classList.remove("opacity-0", "translate-y-10");
            element.classList.add("opacity-100", "translate-y-0");
          });
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}