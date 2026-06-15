"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function ConclusieLeerdoelen1() {
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
            Afstuderen — Conclusie Leerdoelen 1
          </div>

          <h1 className="post-h1">
            <span className="g-text">Conclusie Leerdoelen 1</span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Eindconclusie over mijn persoonlijke leerdoel presenteren.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Eindconclusie</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Tijdens dit persoonlijke leerdoel heb ik gewerkt aan het verbeteren
            van mijn presentatievaardigheden. Door meerdere presentaties te
            geven, feedback te ontvangen en deze feedback bewust toe te passen,
            heb ik vooral gewerkt aan mijn spreektempo, structuur en het
            duidelijk overbrengen van mijn kernboodschap.
          </p>

          <p className="intro-divider">
            De feedback liet zien dat ik in het begin soms te snel sprak en te
            veel informatie wilde vertellen. Door mijn presentatie aan te passen
            en vaker te oefenen, werd mijn verhaal rustiger en beter te volgen.
          </p>

          <p className="intro-divider">
            Ik kan daarom concluderen dat ik mijn leerdoel heb behaald. Tijdens
            mijn laatste presentatie kwam ik rustig over, was mijn verhaal
            duidelijk en werd mijn presentatie als prettig te volgen ervaren.
            Deze ontwikkeling geeft mij meer vertrouwen voor toekomstige
            presentaties.
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
