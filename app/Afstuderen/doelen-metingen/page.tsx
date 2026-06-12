"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

function ZoomImage({
  src,
  alt,
  setOpenImg,
}: {
  src: string;
  alt: string;
  setOpenImg: (src: string) => void;
}) {
  return (
    <>
      <div onClick={() => setOpenImg(src)} className="zoom-img-wrap">
        <img loading="lazy" decoding="async" src={src} alt={alt} className="zoom-img" />

        <div
          className="zoom-overlay"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.background =
              "rgba(5, 84, 70, 0.28)";
            const icon = e.currentTarget.querySelector(
              ".zoom-icon"
            ) as HTMLElement;
            if (icon) icon.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.background =
              "rgba(5, 84, 70, 0)";
            const icon = e.currentTarget.querySelector(
              ".zoom-icon"
            ) as HTMLElement;
            if (icon) icon.style.opacity = "0";
          }}
        >
          <div className="zoom-icon">Vergroot afbeelding</div>
        </div>
      </div>

      <p className="zoom-hint">Klik om te vergroten</p>
    </>
  );
}

export default function BeginEnEindmeting() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <div className="reveal">
          <a href="/Afstuderen" className="post-back-link">
            ← Terug naar Afstuderen
          </a>

          <div className="badge post-badge">
            <span className="badge-dot" />
            Afstuderen — Begin- en eindmeting
          </div>

          <h1 className="post-h1">
            <span className="g-text">Begin- en eindmeting</span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Overzicht van de gestelde doelen en mijn ontwikkeling tijdens de
              afstudeerperiode.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">
              Begin- en eindmeting | gestelde doelen
            </span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Om mijn ontwikkeling per leerdoel inzichtelijk te maken, heb ik per
            doel een beginmeting en eindmeting opgesteld. Hiermee laat ik kort
            zien waar ik aan het begin stond, welke stappen ik heb gezet en in
            hoeverre het doel aan het einde van de afstudeerperiode is behaald.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Persoonlijk doel: presenteren</span>
          </h2>

          <div className="divider divider-mb20" />

          <ZoomImage
            src="/afstuderen/pl/persoonlijk-doel-presenteren.webp"
            alt="Begin- en eindmeting persoonlijk doel presenteren"
            setOpenImg={setOpenImg}
          />
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Persoonlijk doel: Spaans leren</span>
          </h2>

          <div className="divider divider-mb20" />

          <ZoomImage
            src="/afstuderen/pl/persoonlijk-doel-spaans-leren.webp"
            alt="Begin- en eindmeting persoonlijk doel Spaans leren"
            setOpenImg={setOpenImg}
          />
        </div>

        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Vakinhoudelijk doel: GEO zoekgedrag</span>
          </h2>

          <div className="divider divider-mb20" />

          <ZoomImage
            src="/afstuderen/pl/vakinhoudelijk-doel-geo-zoekgedrag.webp"
            alt="Begin- en eindmeting vakinhoudelijk doel GEO zoekgedrag"
            setOpenImg={setOpenImg}
          />
        </div>

        <div className="post-footer-nav">
          <a href="/Afstuderen" className="btn-ghost btn-sm">
            ← Terug naar Afstuderen
          </a>
        </div>
      </article>
    </main>
  );
}