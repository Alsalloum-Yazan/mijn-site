"use client";
import { useState } from "react";

export default function BewijslastenPersoonlijk() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const bewijzen = [
    {
      title: "Het conceptualiseren van bedrijfsproducten",
      img: "/jaar3/bewijslasten-persoonlijk/Het conceptualiseren van bedrijfsproducten.png",
      text: "Bijgaand een van de concepten, die ik heb ontworpen. In een hoofd vol chaos probeer ideeën voor het bedrijf zo concreet mogelijk te houden/maken."
    },
    {
      title: "Dagelijks minstens 6km lopen",
      img: "/jaar3/bewijslasten-persoonlijk/Dagelijks minstens 6km lopen, voor orde en rust in mijn hoofd..jpg",
      text: "Dagelijks na een kantoordag naar buiten om te wandelen, voor orde en rust in mijn hoofd."
    },
    {
      title: "Trello borden",
      img: "/jaar3/bewijslasten-persoonlijk/Trello borden.png",
      text: "Ik maak gebruik van verschillende Trelloborden, waaronder het trello bord voor de herkansing."
    },
    {
      title: "Podcast",
      img: "/jaar3/bewijslasten-persoonlijk/Podcast.jpg",
      text: "Ik heb deze podcast geluisterd, om handige tips te verkrijgen (inleesactie)."
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
            Jaar 3 — Persoonlijke ontwikkeling
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Persoonlijke ontwikkeling <span className="g-text">& bewijslasten</span>
          </h1>
          <div style={{ borderBottom: "1px solid rgba(167,139,250,0.1)", marginBottom: "40px", paddingBottom: "40px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9", marginBottom: "16px" }}>
              Ik ben Dian van Noort en houdt onwijs van het zonnetje en het strand, vandaar ook de keuze voor de bovenstaande afbeelding.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9", marginBottom: "16px" }}>
              Voor mijn persoonlijke ontwikkeling heb ik mij gefocust op het conceptualiseren van mijn gedachten. Ik ga vaak van hak op de tak, weet niet goed hoe ik dingen onder woorden breng, of val voor de zoveelste keer in de herhaling.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9", marginBottom: "16px" }}>
              Ik verlies overzicht of vergeet wat ik wil zeggen, door beter te conceptualiseren zorg ik ervoor beter het gesprek aan te kunnen gaan met mijn stagebegeleider of de eigenaar van LVNG.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9" }}>
              Op dit moment ben ik namelijk erg assertief ingesteld, alleen vervaagd dit lichtelijk wanneer ik niet goed uit mijn woorden kom, vanwege chaos in mijn hoofd.
            </p>
          </div>
        </div>

        {/* BEWIJSLASTEN */}
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
          <a href="/jaar-3" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 3</a>
          <a href="/jaar-3/bewijslasten-vakinhoudelijk" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Bewijslasten Vakinhoudelijk →</a>
        </div>
      </article>
    </main>
  );
}