"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function ConclusieVakdoelen() {
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
            Afstuderen — Conclusie Vakdoelen
          </div>

          <h1 className="post-h1">
            <span className="g-text">Conclusie Vakdoelen</span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Eindconclusie over mijn vakinhoudelijke doel AI-gedreven
              zoekgedrag.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Eindconclusie</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Tijdens dit vakinhoudelijk doel heb ik onderzocht hoe
            marketingcontent beter kan aansluiten op AI-gedreven zoekgedrag. Door
            mij te verdiepen in Generative Engine Optimization (GEO), een eigen
            GEO-analysetool te ontwikkelen en vier marketingteksten te
            optimaliseren, heb ik zowel theoretische kennis opgedaan als deze
            direct toegepast in de praktijk.
          </p>

          <p className="intro-divider">
            De resultaten laten zien dat duidelijke structuur, directe
            beantwoording van vragen en aansluiting op zoekintentie bijdragen aan
            sterkere content voor zowel gebruikers als AI-systemen.
          </p>

          <p className="intro-divider">
            Ik kan daarom concluderen dat ik mijn leerdoel heb behaald.
            Daarnaast heb ik mijn vaardigheden als marketingprofessional verder
            ontwikkeld door nieuwe technologieën toe te passen, feedback te
            verwerken en content doelgerichter te schrijven. Deze kennis neem ik
            mee in toekomstige marketingactiviteiten, waarin AI een steeds
            grotere rol zal spelen.
          </p>
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