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
          <a href="/jaar-3" className="post-back-link">← Terug naar Jaar 3</a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 3 — Stage
          </div>
          <h1 className="post-h1">
            <span className="g-text">Bedrijfsproducten</span>
          </h1>
          <div className="content-header-border">
            <p className="content-text">
              Gedurende deze stage heb ik verschillende communicatiemiddelen gebruikt, die mij hebben geholpen ter ondersteuning aan het verduidelijken van opdrachten.
            </p>
          </div>
        </div>

        <div className="img-grid-2">
          {products.map((product, i) => (
            <div key={i} className="reveal glow-card img-card" style={{ transitionDelay: String(i * 80) + "ms" }}>
              <div onClick={() => setOpenImg(product.img)} className="img-card-image-wrap">
                <img src={product.img} alt={product.title} className="img-card-img-contain-lg" />
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
                <h3 className="h3-card-mb6">{product.title}</h3>
                <p className="p-sm">{product.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-nav">
          <a href="/jaar-3" className="btn-ghost btn-sm">← Terug naar Jaar 3</a>
          <a href="/jaar-3/bewijslasten-persoonlijk" className="btn btn-sm">Bewijslasten →</a>
        </div>
      </article>
    </main>
  );
}

