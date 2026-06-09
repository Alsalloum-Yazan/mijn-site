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
          <a href="/jaar-3" className="post-back-link">← Terug naar Jaar 3</a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 3 — Stage bij LVNG
          </div>
          <h1 className="post-h1">
            Doelen <span className="g-text">stage</span>
          </h1>
          <div className="content-header-border">
            <p className="content-text-mb">
              Tijdens mijn stage bij LVNG heb ik verschillende dingen geleerd en verder ontwikkeld.
            </p>
            <p className="content-text">
              Niet alleen mijn karakter heeft een groei doorgemaakt, maar ook mijn vaardigheid met Shopify en de nieuwe door mij zelf aangesloten BSS App.
            </p>
          </div>
        </div>

        {/* DOELEN */}
        <div className="reveal section-heading-mb32">
          <h2 className="h2-sub">
            Mijn <span className="g-text">doelen</span>
          </h2>
          <div className="divider divider-mb32" />
        </div>

        <div className="img-grid-2" style={{ marginBottom: "32px" }}>

          {/* PERSOONLIJK DOEL */}
          <div className="reveal glow-card img-card">
            <div onClick={() => setOpenImg("/jaar3/doelen-stage/persoonlijk doel.png")} className="img-card-image-wrap">
              <img src="/jaar3/doelen-stage/persoonlijk doel.png" alt="Persoonlijk doel" className="img-card-img-contain" style={{ height: "220px" }} />
              <div
                className="img-card-overlay"
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
                <div className="zoom-icon">Vergroot afbeelding</div>
              </div>
            </div>
            <div className="img-card-footer-pad">
              <div className="badge badge-mb16">
                <span className="badge-dot" />
                Persoonlijk doel
              </div>
              <h3 className="h3-card">Innerlijke rust</h3>
              <p className="p-sm-35">
                In de periode van 3 februari 2025 tot 27 juni 2025 heb ik gewerkt aan het versterken van mijn vermogen om innerlijke rust te behouden in situaties van mijn eigen gecreëerde chaos, bij verantwoordelijkheden, impulsieve keuzes en afleiding.
              </p>
            </div>
          </div>

          {/* VAKINHOUDELIJK DOEL */}
          <div className="reveal glow-card img-card">
            <div onClick={() => setOpenImg("/jaar3/doelen-stage/vakinhoud.png")} className="img-card-image-wrap">
              <img src="/jaar3/doelen-stage/vakinhoud.png" alt="Vakinhoudelijk doel" className="img-card-img-contain" style={{ height: "220px" }} />
              <div
                className="img-card-overlay"
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
                <div className="zoom-icon">Vergroot afbeelding</div>
              </div>
            </div>
            <div className="img-card-footer-pad">
              <div className="badge badge-mb16">
                <span className="badge-dot" />
                Vakinhoudelijk doel
              </div>
              <h3 className="h3-card">Shopify & E-commerce</h3>
              <p className="p-sm-35">
                Van 3 februari 2025 tot 27 juni 2025 verdiep ik mijn kennis van Shopify door mij te richten op de mogelijkheden binnen Shopify en B2B.
              </p>
            </div>
          </div>

        </div>

        {/* REDEN DOELEN */}
        <div className="reveal glow-card intro-card mb40">
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Reden doelen
          </div>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "20px" }}>
            Waarom deze <span className="g-text">doelen?</span>
          </h2>
          <div className="divider divider-mb24" />
          <p style={{ fontSize: "14px", lineHeight: "1.9", marginBottom: "16px" }}>
            Ik heb deze doelen gekozen, omdat ik mezelf wil uitdagen om minder chaotisch te zijn en mij te richten op het website gedeelte van marketing.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.9", marginBottom: "16px" }}>
            Vaak heb ik wel een goed idee in mijn hoofd, maar vind ik het lastig om daar meteen iets concreets van te maken. Door hiermee te oefenen, wil ik sterker worden in het bedenken en uitvoeren van concepten.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "1.9" }}>
            Het vakinhoudelijke doel past daar goed bij. Shopify is een platform waar ik meer mee wil kunnen, vooral omdat het veel wordt gebruikt in e-commerce.
          </p>
        </div>

        <div className="post-footer-nav">
          <a href="/jaar-3/bewijslasten-vakinhoudelijk" className="btn-ghost btn-sm">← Bewijslasten Vakinhoudelijk</a>
          <a href="/jaar-3/pdca-cyclus" className="btn btn-sm">PDCA-cyclus →</a>
        </div>
      </article>
    </main>
  );
}

