"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function Reflecties() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const reflecties = [
    { title: "Reflectie Vakinhoudelijk doel", sub: "2025", img: "/jaar3/reflecties/reflecties2.png" },
    { title: "Reflectie Persoonlijk doel", sub: "2025", img: "/jaar3/reflecties/reflecties1.png" },
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
            Reflecties <span className="g-text">doelen</span>
          </h1>
          <div className="content-header-border-sm">
            <p className="content-text">
              Hieronder zijn mijn reflecties te zien op zowel mijn persoonlijk doel als mijn vakinhoudelijk doel. Klik op een afbeelding om deze te vergroten.
            </p>
          </div>
        </div>

        <div className="img-grid-2">
          {reflecties.map((item, i) => (
            <div key={i} className="reveal glow-card img-card" style={{ transitionDelay: String(i * 120) + "ms" }}>
              <div onClick={() => setOpenImg(item.img)} className="reflecties-img-wrap">
                <img src={item.img} alt={item.title} className="reflecties-img" />
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
                <div className="reflectie-card-meta">
                  <h3 className="reflecties-h3">{item.title}</h3>
                  <span className="page-card-sub">{item.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-nav">
          <a href="/jaar-3/pdca-cyclus" className="btn-ghost btn-sm">← PDCA-cyclus</a>
          <a href="/jaar-3/vlog" className="btn btn-sm">VLOG →</a>
        </div>
      </article>
    </main>
  );
}

