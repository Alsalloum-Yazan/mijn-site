"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function ConclusieLeerdoelen() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <div className="reveal">
          <a href="/afstuderen" className="post-back-link">
            ← Terug naar Afstuderen
          </a>

          <div className="badge post-badge">
            <span className="badge-dot" />
            Afstuderen — Conclusie Leerdoelen
          </div>

          <h1 className="post-h1">
            <span className="g-text">Conclusie Leerdoelen</span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Eindconclusie over mijn persoonlijke leerdoel Spaans leren.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Eindconclusie</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik kan concluderen dat ik mijn persoonlijke leerdoel grotendeels heb
            behaald. Tijdens mijn afstudeerperiode heb ik actief gewerkt aan het
            leren van Spaans door dagelijks te oefenen met Duolingo, een Spaanse
            les te volgen en mijn kennis te toetsen met een A1-niveautoets. Mijn
            doel van 100 dagen oefenen heb ik overtroffen met een reeks van 116
            dagen en ik heb de A1-toets succesvol afgerond met een score van
            90%. Daarnaast heb ik meer vertrouwen gekregen in het uitspreken van
            Spaanse woorden en het voeren van eenvoudige gesprekken.
          </p>

          <p className="intro-divider">
            Hoewel ik merk dat grammatica en spreekvaardigheid nog verdere
            ontwikkeling vragen, heb ik een stevige basis gelegd waarmee ik mij
            in eenvoudige situaties kan redden. Dit leerdoel heeft mij laten zien
            dat doorzettingsvermogen, regelmaat en praktijkervaring leiden tot
            duidelijke vooruitgang. Daarmee heb ik een belangrijke eerste stap
            gezet richting mijn ambitie om in de toekomst in Spanje te wonen en
            werken.
          </p>
        </div>

        <div className="post-footer-nav">
          <a href="/afstuderen" className="btn-ghost btn-sm">
            ← Terug naar Afstuderen
          </a>
        </div>
      </article>
    </main>
  );
}