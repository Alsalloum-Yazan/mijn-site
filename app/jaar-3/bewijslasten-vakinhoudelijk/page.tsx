"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function BewijslastenVakinhoudelijk() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const bewijzen = [
    { title: "Bestellingen afhandelen", img: "/jaar3/bewijslasten-vakinhoudelijk/Bestellingen afhandelen'.png", text: "Bestellingen afhandelen binnen Shopify." },
    { title: "BSS app installeren", img: "/jaar3/bewijslasten-vakinhoudelijk/BSS app installeren.png", text: "De BSS app installeren en configureren." },
    { title: "Artikelen gelezen", img: "/jaar3/bewijslasten-vakinhoudelijk/Artikelen gelezen.png", text: "Artikelen gelezen ter verdieping in Shopify en e-commerce." },
    { title: "YouTube filmpje", img: "/jaar3/bewijslasten-vakinhoudelijk/YouTube filmpje.png", text: "YouTube filmpje bekeken voor verdere verdieping." },
  ];

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-3" className="post-back-link">← Terug naar Jaar 3</a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 3 — Vakinhoudelijk
          </div>
          <h1 className="post-h1">
            Bewijslasten <span className="g-text">vakinhoudelijk doel</span>
          </h1>
          <div className="content-header-border">
            <p className="content-text">
              Ik wil mij zowel nu als in de toekomst meer en vooral richten op het maken en verbeteren van websites. Vandaar de keuze voor het verdiepen in Shopify.
            </p>
          </div>
        </div>

        <div className="reveal section-heading-mb32">
          <h2 className="h2-sub">
            <span className="g-text">Bewijslasten</span>
          </h2>
          <div className="divider divider-mb32" />
        </div>

        <div className="img-grid-2">
          {bewijzen.map((bewijs, i) => (
            <div key={i} className="reveal glow-card img-card" style={{ transitionDelay: String(i * 80) + "ms" }}>
              <div onClick={() => setOpenImg(bewijs.img)} className="img-card-image-wrap">
                <img loading="lazy" decoding="async" src={bewijs.img} alt={bewijs.title} className="img-card-img-contain" />
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
              <div className="img-card-footer">
                <h3 className="h3-card-mb8">{bewijs.title}</h3>
                <p className="p-sm">{bewijs.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-nav">
          <a href="/jaar-3/bewijslasten-persoonlijk" className="btn-ghost btn-sm">← Bewijslasten Persoonlijk</a>
          <a href="/jaar-3/doelen-stage" className="btn btn-sm">Doelen stage →</a>
        </div>
      </article>
    </main>
  );
}

