"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function Reflecties() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const reflecties = [
    {
      title: "Reflectie Vakinhoudelijk doel",
      sub: "2025",
      img: "/jaar3/reflecties/reflecties2.png",
    },
    {
      title: "Reflectie Persoonlijk doel",
      sub: "2025",
      img: "/jaar3/reflecties/reflecties1.png",
    },
  ];

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-3" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Terug naar Jaar 3
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 3 — Stage
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Reflecties <span className="g-text">doelen</span>
          </h1>
          <div style={{ borderBottom: "1px solid rgba(167,139,250,0.1)", marginBottom: "40px", paddingBottom: "24px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9" }}>
              Hieronder zijn mijn reflecties te zien op zowel mijn persoonlijk doel als mijn vakinhoudelijk doel. Klik op een afbeelding om deze te vergroten.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {reflecties.map((item, i) => (
            <div key={i} className="reveal glow-card" style={{ borderRadius: "24px", overflow: "hidden", transitionDelay: String(i * 120) + "ms" }}>
              <div
                onClick={() => setOpenImg(item.img)}
                style={{ position: "relative", cursor: "zoom-in", background: "rgba(255,255,255,0.97)" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", display: "block", objectFit: "contain" }}
                />
                <div
                  style={{ position: "absolute", inset: 0, background: "rgba(124,58,237,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.4)";
                    const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement;
                    if (icon) icon.style.opacity = "1";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0)";
                    const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement;
                    if (icon) icon.style.opacity = "0";
                  }}
                >
                  <div className="zoom-icon" style={{ opacity: 0, transition: "opacity 0.3s", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "50px", padding: "10px 24px", fontWeight: 600, fontSize: "14px", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
                    Vergroot afbeelding
                  </div>
                </div>
              </div>
              <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(167,139,250,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontSize: "1rem" }}>{item.title}</h3>
                  <span style={{ fontSize: "11px", color: "#4040a0", background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.12)", borderRadius: "50px", padding: "3px 10px", fontWeight: 600 }}>{item.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-3/pdca-cyclus" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← PDCA-cyclus</a>
          <a href="/jaar-3/vlog" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>VLOG →</a>
        </div>
      </article>
    </main>
  );
}
