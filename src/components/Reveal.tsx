// src/hooks/useReveal.ts
import { useRef, useEffect, RefObject } from "react";

export function useReveal<
  T extends HTMLElement = HTMLDivElement,
>(): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Find all elements with data-reveal attribute
          const revealElements = el.querySelectorAll("[data-reveal='true']");
          revealElements.forEach((element) => {
            element.setAttribute("data-visible", "true");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
