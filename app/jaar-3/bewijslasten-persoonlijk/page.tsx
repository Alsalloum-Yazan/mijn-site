"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

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
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-3" className="post-back-link">← Terug naar Jaar 3</a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 3 — Persoonlijke ontwikkeling
          </div>
          <h1 className="post-h1">
            Persoonlijke ontwikkeling <span className="g-text">& bewijslasten</span>
          </h1>
          <div className="content-header-border">
            <p className="content-text-mb">
              Ik ben Dian van Noort en houdt onwijs van het zonnetje en het strand, vandaar ook de keuze voor de bovenstaande afbeelding.
            </p>
            <p className="content-text-mb">
              Voor mijn persoonlijke ontwikkeling heb ik mij gefocust op het conceptualiseren van mijn gedachten. Ik ga vaak van hak op de tak, weet niet goed hoe ik dingen onder woorden breng, of val voor de zoveelste keer in de herhaling.
            </p>
            <p className="content-text-mb">
              Ik verlies overzicht of vergeet wat ik wil zeggen, door beter te conceptualiseren zorg ik ervoor beter het gesprek aan te kunnen gaan met mijn stagebegeleider of de eigenaar van LVNG.
            </p>
            <p className="content-text">
              Op dit moment ben ik namelijk erg assertief ingesteld, alleen vervaagd dit lichtelijk wanneer ik niet goed uit mijn woorden kom, vanwege chaos in mijn hoofd.
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
                <img src={bewijs.img} alt={bewijs.title} className="img-card-img-contain" />
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
          <a href="/jaar-3" className="btn-ghost btn-sm">← Terug naar Jaar 3</a>
          <a href="/jaar-3/bewijslasten-vakinhoudelijk" className="btn btn-sm">Bewijslasten Vakinhoudelijk →</a>
        </div>
      </article>
    </main>
  );
}

