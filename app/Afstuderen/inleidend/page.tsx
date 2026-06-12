"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function Inleidend() {
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
            Afstuderen — Inleidend
          </div>

          <h1 className="post-h1">
            <span className="g-text">Inleidend</span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Tijdens mijn afstudeerperiode wilde ik aan drie doelen werken die
              echt bij mij passen. Doelen waar ik mezelf in herken en waar ik
              ook enthousiast van word, omdat ze aansluiten bij wie ik ben, wat
              ik leuk vind en waar ik nog in wil groeien.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <p className="intro-divider">
            Ik ben iemand die snel enthousiast raakt wanneer ik ergens veel over
            weet. Dan wil ik het liefst alles vertellen, omdat ik het onderwerp
            zelf interessant vind. Dat enthousiasme vind ik een mooie eigenschap,
            maar ik merk ook dat ik daardoor soms te veel vertel en de kern een
            beetje kwijtraak. Daarom wil ik beter leren presenteren. Ik wil
            leren om rustiger te spreken, mijn verhaal duidelijker op te bouwen
            en sterker over te brengen wat ik bedoel.
          </p>

          <p className="intro-divider">
            Daarnaast wil ik Spaans leren. Spanje trekt mij al langer en vooral
            Malaga blijft in mijn hoofd zitten. Ik zie mezelf daar later
            misschien wel wonen of werken. Dan wil ik niet alleen als toerist
            iets kunnen bestellen, maar ook echt een eenvoudig gesprek kunnen
            voeren en contact kunnen maken met mensen.
          </p>

          <p className="intro-divider">
            Mijn vakinhoudelijke doel gaat over AI-gedreven zoekgedrag. Binnen
            marketing verandert er veel en juist dat vind ik interessant. Mensen
            zoeken anders, lezen anders en verwachten sneller een duidelijk
            antwoord. Omdat ik tijdens mijn afstuderen veel met teksten bezig
            ben, wil ik leren hoe ik teksten beter kan laten aansluiten op die
            manier van zoeken.
          </p>

          <p className="intro-divider">
            Met de PDCA-cyclus kan ik stap voor stap volgen wat goed gaat, wat
            beter kan en hoe ik mezelf hierin ontwikkel.
          </p>
        </div>

        <div className="post-footer-nav">
          <a href="/afstuderen/voorwoord" className="btn-ghost btn-sm">
            ← Voorwoord
          </a>
          <a href="/afstuderen" className="btn btn-sm">
            Terug naar Afstuderen →
          </a>
        </div>
      </article>
    </main>
  );
}