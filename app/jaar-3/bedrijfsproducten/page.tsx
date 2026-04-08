"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function Bedrijfsproducten() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const products = [
    { title: "Handleiding BSS app", img: "/jaar3/Bedrijfsproducten/Handleiding BSS app.png", text: "Handleiding voor de BSS applicatie." },
    { title: "Infographic", img: "/jaar3/Bedrijfsproducten/Infographic.png", text: "Infographic ter ondersteuning van opdrachten." },
    { title: "E-mailcontact in/extern", img: "/jaar3/Bedrijfsproducten/E-mailcontact in extern.png", text: "E-mailcontact intern en extern." },
    { title: "Conceptualisering", img: "/jaar3/Bedrijfsproducten/Conceptualisering.png", text: "Idee handdoeken op sportscholen." },
    { title: "Prijslijst opgesteld B2B", img: "/jaar3/Bedrijfsproducten/Prijslijst opgesteld B2B.png", text: "Prijslijst opgesteld voor B2B." },
    { title: "Nieuwsbrief | Estavana", img: "/jaar3/Bedrijfsproducten/Nieuwsbrief Estavana als het nieuwe gezicht van LVNG.png", text: "Nieuwsbrief — Estavana als het nieuwe gezicht van LVNG." },
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
            <span className="g-text">Bedrijfsproducten</span>
          </h1>
          <div style={{ borderBottom: "1px solid rgba(167,139,250,0.1)", marginBottom: "40px", paddingBottom: "40px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9" }}>
              Gedurende deze stage heb ik verschillende communicatiemiddelen gebruikt, die mij hebben geholpen ter ondersteuning aan het verduidelijken van opdrachten.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {products.map((product, i) => (
            <div key={i} className="reveal glow-card" style={{ borderRadius: "24px", overflow: "hidden", transitionDelay: String(i * 80) + "ms" }}>
              <div
                onClick={() => setOpenImg(product.img)}
                style={{ position: "relative", cursor: "zoom-in", background: "rgba(255,255,255,0.03)" }}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  style={{ width: "100%", height: "280px", objectFit: "contain", objectPosition: "center", display: "block", padding: "16px" }}
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
                <h3 style={{ marginBottom: "6px", fontSize: "1rem" }}>{product.title}</h3>
                <p style={{ fontSize: "13px" }}>{product.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-3" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 3</a>
          <a href="/jaar-3/bewijslasten-persoonlijk" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Bewijslasten →</a>
        </div>
      </article>
    </main>
  );
}
