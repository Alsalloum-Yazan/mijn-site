"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("js-loaded");

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => el.classList.remove("visible"));

    const timeout = setTimeout(() => {
      const isMobile = window.innerWidth <= 768;

      // ── 1. SCROLL REVEAL ──────────────────────────────────
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

      // ── 2. HAMBURGER MENU ─────────────────────────────────
      const hamburger = document.getElementById("nav-hamburger");
      const mobileMenu = document.getElementById("nav-mobile");

      hamburger?.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mobileMenu?.classList.toggle("open");
      });

      document.querySelectorAll<HTMLElement>(".nav-mobile-toggle").forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("open");
          const sub = btn.nextElementSibling as HTMLElement;
          sub?.classList.toggle("open");
        });
      });

      document.querySelectorAll(".nav-mobile a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger?.classList.remove("open");
          mobileMenu?.classList.remove("open");
        });
      });

      // ── 3. NAVBAR SCROLL ──────────────────────────────────
      const navbar = document.querySelector("#navbar");
      const onNavScroll = () => navbar?.classList.toggle("scrolled", window.scrollY > 50);
      window.addEventListener("scroll", onNavScroll, { passive: true });

      // ── Desktop only effects ───────────────────────────────
      if (!isMobile) {

        // ── 4. CURSOR GLOW ──────────────────────────────────
        let cursorEl = document.querySelector<HTMLElement>(".cursor-glow");
        if (!cursorEl) {
          cursorEl = document.createElement("div");
          cursorEl.className = "cursor-glow";
          document.body.appendChild(cursorEl);
        }
        const cursor = cursorEl;
        let cursorX = 0, cursorY = 0, targetX = 0, targetY = 0;
        window.addEventListener("mousemove", (e: MouseEvent) => { targetX = e.clientX; targetY = e.clientY; });
        const animateCursor = () => {
          cursorX += (targetX - cursorX) * 0.08;
          cursorY += (targetY - cursorY) * 0.08;
          cursor.style.left = cursorX + "px";
          cursor.style.top  = cursorY + "px";
          requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // ── 5. TILT ─────────────────────────────────────────
        document.querySelectorAll<HTMLElement>(".tilt").forEach((el) => {
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

        // ── 6. MAGNETIC BUTTONS ─────────────────────────────
        document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
          el.addEventListener("mousemove", (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width  / 2) * 0.35;
            const y = (e.clientY - r.top  - r.height / 2) * 0.35;
            el.style.transform = `translate(${x}px, ${y}px)`;
          });
          el.addEventListener("mouseleave", () => { el.style.transform = "translate(0, 0)"; });
        });

        // ── 7. PARALLAX ─────────────────────────────────────
        const parallaxSlow = document.querySelectorAll<HTMLElement>(".parallax-slow");
        const parallaxMid  = document.querySelectorAll<HTMLElement>(".parallax-mid");
        const parallaxFast = document.querySelectorAll<HTMLElement>(".parallax-fast");
        window.addEventListener("scroll", () => {
          const s = window.scrollY;
          parallaxSlow.forEach(el => { el.style.transform = `translateY(${s * 0.08}px)`; });
          parallaxMid.forEach(el  => { el.style.transform = `translateY(${s * 0.15}px)`; });
          parallaxFast.forEach(el => { el.style.transform = `translateY(${s * 0.25}px)`; });
        }, { passive: true });
      }

      // ── 8. GLOW CARD MOUSE TRACKING ───────────────────────
      document.querySelectorAll<HTMLElement>(".glow-card").forEach((card) => {
        card.addEventListener("mousemove", (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mouse-x", `${((e.clientX - r.left) / r.width) * 100}%`);
          card.style.setProperty("--mouse-y", `${((e.clientY - r.top) / r.height) * 100}%`);
        });
      });

      // ── 9. NUMBER COUNTER ─────────────────────────────────
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || "0");
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / 1800, 1);
              el.textContent = Math.floor((1 - Math.pow(1 - progress, 3)) * target).toString();
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => counterObserver.observe(el));

      return () => {
        revealObserver.disconnect();
        counterObserver.disconnect();
      };
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}