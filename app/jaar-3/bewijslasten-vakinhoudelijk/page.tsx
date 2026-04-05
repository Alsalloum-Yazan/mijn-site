"use client";
import { useState } from "react";

export default function BewijslastenVakinhoudelijk() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const bewijzen = [
    {
      title: "Bestellingen afhandelen",
      img: "/jaar3/bewijslasten-vakinhoudelijk/Bestellingen afhandelen'.png",
      text: "Bestellingen afhandelen binnen Shopify."
    },
    {
      title: "BSS app installeren",
      img: "/jaar3/bewijslasten-vakinhoudelijk/BSS app installeren.png",
      text: "De BSS app installeren en configureren."
    },
    {
      title: "Artikelen gelezen",
      img: "/jaar3/bewijslasten-vakinhoudelijk/Artikelen gelezen.png",
      text: "Artikelen gelezen ter verdieping in Shopify en e-commerce."
    },
    {
      title: "YouTube filmpje",
      img: "/jaar3/bewijslasten-vakinhoudelijk/YouTube filmpje.png",
      text: "YouTube filmpje bekeken voor verdere verdieping."
    },
  ];

  return (
    <main>
      {openImg && (
        <div onClick={() => setOpenImg(null)} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(16px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", cursor: "zoom-out" }}>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: "900px", width: "100%" }}>
            <button onClick={() => setOpenImg(null)} style={{ position: "absolute", top: "-48px", right: "0", background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "50%", width: "36px", height: "36px", color: "#a78bfa", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
            <img src={openImg} alt="Vergroot" style={{ width: "100%", borderRadius: "16px", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }} />
          </div>
        </div>
      )}

      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-3" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Terug naar Jaar 3
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 3 — Vakinhoudelijk
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Bewijslasten <span className="g-text">vakinhoudelijk doel</span>
          </h1>
          <div style={{ borderBottom: "1px solid rgba(167,139,250,0.1)", marginBottom: "40px", paddingBottom: "40px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9" }}>
              Ik wil mij zowel nu als in de toekomst meer en vooral richten op het maken en verbeteren van websites. Vandaar de keuze voor het verdiepen in Shopify.
            </p>
          </div>
        </div>

        <div className="reveal" style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>
            <span className="g-text">Bewijslasten</span>
          </h2>
          <div className="divider" style={{ marginBottom: "32px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {bewijzen.map((bewijs, i) => (
            <div key={i} className="reveal glow-card" style={{ borderRadius: "24px", overflow: "hidden", transitionDelay: String(i * 80) + "ms" }}>
              <div
                onClick={() => setOpenImg(bewijs.img)}
                style={{ position: "relative", cursor: "zoom-in", background: "rgba(255,255,255,0.03)" }}
              >
                <img
                  src={bewijs.img}
                  alt={bewijs.title}
                  style={{ width: "100%", height: "260px", objectFit: "contain", objectPosition: "center", display: "block", padding: "16px" }}
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
                <h3 style={{ marginBottom: "8px", fontSize: "1rem" }}>{bewijs.title}</h3>
                <p style={{ fontSize: "13px" }}>{bewijs.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-3/bewijslasten-persoonlijk" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Bewijslasten Persoonlijk</a>
          <a href="/jaar-3/doelen-stage" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Doelen stage →</a>
        </div>
      </article>
    </main>
  );
}