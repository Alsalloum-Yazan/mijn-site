"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function DoelenStage() {
  const [openImg, setOpenImg] = useState<string | null>(null);

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
            Jaar 3 — Stage bij LVNG
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Doelen <span className="g-text">stage</span>
          </h1>
          <div style={{ borderBottom: "1px solid rgba(167,139,250,0.1)", marginBottom: "40px", paddingBottom: "40px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9", marginBottom: "16px" }}>
              Tijdens mijn stage bij LVNG heb ik verschillende dingen geleerd en verder ontwikkeld.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9" }}>
              Niet alleen mijn karakter heeft een groei doorgemaakt, maar ook mijn vaardigheid met Shopify en de nieuwe door mij zelf aangesloten BSS App.
            </p>
          </div>
        </div>

        {/* DOELEN */}
        <div className="reveal" style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>
            Mijn <span className="g-text">doelen</span>
          </h2>
          <div className="divider" style={{ marginBottom: "32px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>

          {/* PERSOONLIJK DOEL */}
          <div className="reveal glow-card" style={{ borderRadius: "24px", overflow: "hidden" }}>
            <div onClick={() => setOpenImg("/jaar3/doelen-stage/persoonlijk doel.png")} style={{ position: "relative", cursor: "zoom-in", background: "rgba(255,255,255,0.03)" }}>
              <img
                src="/jaar3/doelen-stage/persoonlijk doel.png"
                alt="Persoonlijk doel"
                style={{ width: "100%", height: "220px", objectFit: "contain", padding: "16px", display: "block" }}
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
            <div style={{ padding: "28px", borderTop: "1px solid rgba(167,139,250,0.08)" }}>
              <div className="badge" style={{ marginBottom: "16px" }}>
                <span className="badge-dot" />
                Persoonlijk doel
              </div>
              <h3 style={{ marginBottom: "12px", fontSize: "1rem" }}>Innerlijke rust</h3>
              <p style={{ fontSize: "13.5px", lineHeight: "1.8" }}>
                In de periode van 3 februari 2025 tot 27 juni 2025 heb ik gewerkt aan het versterken van mijn vermogen om innerlijke rust te behouden in situaties van mijn eigen gecreëerde chaos, bij verantwoordelijkheden, impulsieve keuzes en afleiding.
              </p>
            </div>
          </div>

          {/* VAKINHOUDELIJK DOEL */}
          <div className="reveal glow-card" style={{ borderRadius: "24px", overflow: "hidden" }}>
            <div onClick={() => setOpenImg("/jaar3/doelen-stage/vakinhoud.png")} style={{ position: "relative", cursor: "zoom-in", background: "rgba(255,255,255,0.03)" }}>
              <img
                src="/jaar3/doelen-stage/vakinhoud.png"
                alt="Vakinhoudelijk doel"
                style={{ width: "100%", height: "220px", objectFit: "contain", padding: "16px", display: "block" }}
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
            <div style={{ padding: "28px", borderTop: "1px solid rgba(167,139,250,0.08)" }}>
              <div className="badge" style={{ marginBottom: "16px" }}>
                <span className="badge-dot" />
                Vakinhoudelijk doel
              </div>
              <h3 style={{ marginBottom: "12px", fontSize: "1rem" }}>Shopify & E-commerce</h3>
              <p style={{ fontSize: "13.5px", lineHeight: "1.8" }}>
                Van 3 februari 2025 tot 27 juni 2025 verdiep ik mijn kennis van Shopify door mij te richten op de mogelijkheden binnen Shopify en B2B. Ik leer en pas elke maand nieuwe functies toe, welke mij leren te verdiepen en mijn kansen vergroten in de E-commerce.
              </p>
            </div>
          </div>

        </div>

        {/* REDEN DOELEN */}
        <div className="reveal glow-card" style={{ padding: "40px", borderRadius: "24px", marginBottom: "40px" }}>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Reden doelen
          </div>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "20px" }}>
            Waarom deze <span className="g-text">doelen?</span>
          </h2>
          <div className="divider" style={{ marginBottom: "24px" }} />
          <p style={{ fontSize: "14px", lineHeight: "1.9", marginBottom: "16px" }}>
            Ik heb deze doelen gekozen, omdat ik mezelf wil uitdagen om minder chaotisch te zijn en mij te richten op het website gedeelte van marketing. Voor mijn persoonlijke doel wil ik leren om mijn ideeën niet alleen in mijn hoofd te houden, maar ook visueel te conceptualiseren.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.9", marginBottom: "16px" }}>
            Vaak heb ik wel een goed idee in mijn hoofd, maar vind ik het lastig om daar meteen iets concreets van te maken. Door hiermee te oefenen, wil ik sterker worden in het bedenken en uitvoeren van concepten.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.9" }}>
            Het vakinhoudelijke doel past daar goed bij en ook bij het uitgevoerde actieonderzoek. Shopify is een platform waar ik meer mee wil kunnen, vooral omdat het veel wordt gebruikt in e-commerce. Door elke maand iets nieuws te leren houd ik het overzichtelijk en motiverend.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-3/bewijslasten-vakinhoudelijk" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Bewijslasten Vakinhoudelijk</a>
          <a href="/jaar-3/pdca-cyclus" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>PDCA-cyclus →</a>
        </div>
      </article>
    </main>
  );
}
