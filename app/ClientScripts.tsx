"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("js-loaded");

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => el.classList.remove("visible"));

    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("visible"), i * 90);
            }
          });
        },
        { threshold: 0.08 }
      );

      document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
        .forEach((el) => observer.observe(el));

      const tilts = document.querySelectorAll<HTMLElement>(".tilt");
      tilts.forEach((el) => {
        el.addEventListener("mousemove", (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(800px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) scale(1.02)`;
        });
        el.addEventListener("mouseleave", () => {
          el.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
        });
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}