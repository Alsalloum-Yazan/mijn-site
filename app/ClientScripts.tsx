"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("js-loaded");

    // Reset reveals on route change
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => el.classList.remove("visible"));

    const timeout = setTimeout(() => {

      // ── 1. SCROLL REVEAL (3D) ──────────────────────────────
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("visible"), i * 80);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
      );
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
        .forEach((el) => revealObserver.observe(el));

      // ── 2. CURSOR GLOW ────────────────────────────────────
      let cursorEl = document.querySelector<HTMLElement>(".cursor-glow");
      if (!cursorEl) {
        cursorEl = document.createElement("div");
        cursorEl.className = "cursor-glow";
        document.body.appendChild(cursorEl);
      }
      const cursor = cursorEl;
      let cursorX = 0, cursorY = 0;
      let targetX = 0, targetY = 0;

      const onMouseMove = (e: MouseEvent) => {
        targetX = e.clientX;
        targetY = e.clientY;
      };
      window.addEventListener("mousemove", onMouseMove);

      const animateCursor = () => {
        cursorX += (targetX - cursorX) * 0.08;
        cursorY += (targetY - cursorY) * 0.08;
        cursor.style.left = cursorX + "px";
        cursor.style.top  = cursorY + "px";
        requestAnimationFrame(animateCursor);
      };
      animateCursor();

      // ── 3. TILT EFFECT ────────────────────────────────────
      const tilts = document.querySelectorAll<HTMLElement>(".tilt");
      tilts.forEach((el) => {
        el.addEventListener("mousemove", (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width  - 0.5;
          const y = (e.clientY - r.top)  / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) scale(1.03)`;
          el.style.boxShadow = `${-x * 20}px ${-y * 20}px 40px rgba(196,181,253,0.12)`;
        });
        el.addEventListener("mouseleave", () => {
          el.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
          el.style.boxShadow = "";
        });
      });

      // ── 4. MAGNETIC BUTTONS ───────────────────────────────
      const magnetics = document.querySelectorAll<HTMLElement>(".magnetic");
      magnetics.forEach((el) => {
        el.addEventListener("mousemove", (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width  / 2) * 0.35;
          const y = (e.clientY - r.top  - r.height / 2) * 0.35;
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
        el.addEventListener("mouseleave", () => {
          el.style.transform = "translate(0, 0)";
        });
      });

      // ── 5. PARALLAX SCROLL ────────────────────────────────
      const parallaxSlow = document.querySelectorAll<HTMLElement>(".parallax-slow");
      const parallaxMid  = document.querySelectorAll<HTMLElement>(".parallax-mid");
      const parallaxFast = document.querySelectorAll<HTMLElement>(".parallax-fast");

      const onScroll = () => {
        const scrollY = window.scrollY;
        parallaxSlow.forEach(el => {
          el.style.transform = `translateY(${scrollY * 0.08}px)`;
        });
        parallaxMid.forEach(el => {
          el.style.transform = `translateY(${scrollY * 0.15}px)`;
        });
        parallaxFast.forEach(el => {
          el.style.transform = `translateY(${scrollY * 0.25}px)`;
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      // ── 6. NAVBAR SCROLL EFFECT ───────────────────────────
      const navbar = document.querySelector("#navbar");
      const onNavScroll = () => {
        if (navbar) {
          navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
      };
      window.addEventListener("scroll", onNavScroll, { passive: true });

      // ── 7. GLOW CARD MOUSE TRACKING ───────────────────────
      const glowCards = document.querySelectorAll<HTMLElement>(".glow-card");
      glowCards.forEach((card) => {
        card.addEventListener("mousemove", (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width)  * 100;
          const y = ((e.clientY - r.top)  / r.height) * 100;
          card.style.setProperty("--mouse-x", `${x}%`);
          card.style.setProperty("--mouse-y", `${y}%`);
        });
      });

      // ── 8. SMOOTH NUMBER COUNTER ──────────────────────────
      const counters = document.querySelectorAll<HTMLElement>("[data-count]");
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0");
            const duration = 1800;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target).toString();
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach((el) => counterObserver.observe(el));

      // ── CLEANUP ───────────────────────────────────────────
      return () => {
        revealObserver.disconnect();
        counterObserver.disconnect();
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("scroll", onNavScroll);
      };
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}