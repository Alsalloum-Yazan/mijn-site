"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function Voorwoord() {
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
            Afstuderen — Voorwoord
          </div>

          <h1 className="post-h1">
            <span className="g-text">Voorwoord</span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Tijdens mijn afstudeerperiode heb ik veel geleerd, niet alleen
              over mijn vakgebied, maar ook over mezelf. Ik heb stappen gezet in
              mijn persoonlijke ontwikkeling, ben bewuster gaan kijken naar mijn
              kwaliteiten en heb geleerd om ook mijn onzekerheden en
              ontwikkelpunten serieus te nemen. Dit verslag laat zien waar ik
              aan heb gewerkt, wat ik heb geprobeerd en hoe ik daarin ben
              gegroeid.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <p className="intro-divider">
            Ik wil Ben Embregts en Reinier Willers bedanken voor de tussentijdse
            beoordeling en de feedback, die zij mij hebben gegeven. Die feedback
            heeft mij geholpen om opnieuw naar mijn werk te kijken en
            verbeteringen aan te brengen waar dat nodig was.
          </p>

          <p className="intro-divider">
            Daarnaast wil ik Inge Abbeel bedanken voor de tijd en moeite die zij
            heeft genomen om Spaans met mij te oefenen. Ik vond het fijn dat zij
            dit met zoveel geduld en enthousiasme deed. Daardoor voelde het
            oefenen laagdrempelig en kreeg ik meer vertrouwen om de taal ook
            echt te durven spreken.
          </p>

          <p className="intro-divider">
            Ook wil ik Caroline Dudok bedanken voor het meedenken en meekijken
            naar de manier waarop ik GEO-zoekgedrag heb ontdekt en onderzocht.
            Het was waardevol om hierover samen te sparren en mijn ideeën
            verder aan te scherpen. Daarnaast wil ik mijn familie en vrienden
            bedanken voor het uittesten van deze tool en het geven van feedback.
          </p>

          <p className="intro-divider">
            Ik kijk terug op een leerzame periode waarin ik niet alles in één
            keer goed deed, maar waarin ik wel steeds ben blijven proberen,
            verbeteren en doorgaan. Juist daardoor heb ik veel geleerd over wie
            ik ben en hoe ik mij verder wil ontwikkelen.
          </p>
        </div>

        <div className="post-footer-nav">
          <a href="/Afstuderen" className="btn-ghost btn-sm">
            ← Terug naar Afstuderen
          </a>
          <a href="/Afstuderen/inleidend" className="btn btn-sm">
            Inleiding →
          </a>
        </div>
      </article>
    </main>
  );
}