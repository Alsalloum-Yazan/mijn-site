"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";
import { Card, ExternalLink, FooterNav, PageHeader, ZoomImage } from "@/app/components/ContentBits";

export default function Profileringskit() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <PageHeader
          badge="Afstuderen — Profiel"
          title="Profileringskit"
          lead="Onderstaand volledig ingericht de profileringskit: bestaande uit CV, motivatiebrief, LinkedIn-profiel, logo, pitch en motto."
        />

        <Card title="1. CV">
          <p className="intro-divider">CV als overzicht van opleiding, werkervaring en relevante vaardigheden.</p>
          <ZoomImage src="/afstuderen/pl/herkansing-cv.webp" alt="CV Dian van Noort" setOpenImg={setOpenImg} />
        </Card>

        <Card title="2. Motivatiebrief">
          <p className="intro-divider">
            Motivatiebrief als korte toelichting op motivatie, ambities en aansluiting bij de functie.
          </p>

          <h3 className="h3-sub">Sollicitatie Junior Accountmanager Retail &amp; FMCG</h3>

          <p className="intro-divider">Geachte heer/mevrouw,</p>

          <p className="intro-divider">
            Een supermarkt is voor mij meer dan alleen een plek waar je boodschappen doet. Ik vind het juist interessant om te
            kijken waarom iemand voor het ene product kiest en niet voor het andere. Waar staat het product in het schap? Hoe
            wordt het gepresenteerd? En welke keuzes worden eigenlijk onbewust beïnvloed? De afgelopen periode ben ik mij
            steeds meer gaan verdiepen in gedragseconomie, waardoor ik hier met een andere blik naar ben gaan kijken.
          </p>

          <p className="intro-divider">
            Na mijn opleiding Commerciële Economie ben ik op zoek naar een functie als junior accountmanager binnen retail en
            FMCG. De combinatie van commercie, veel contact met mensen en het werken met producten die dagelijks bij
            consumenten over de vloer komen, spreekt mij erg aan.
          </p>

          <p className="intro-divider">
            Ik ben iemand die makkelijk contact maakt en energie krijgt van gesprekken met verschillende mensen. Ik vind het
            leuk om relaties op te bouwen, maar ben daarnaast ook zelfstandig en neem graag verantwoordelijkheid. Ik ben
            nieuwsgierig, zie snel kansen en vind het interessant om te begrijpen wat er bij een klant of consument speelt.
          </p>

          <p className="intro-divider">
            Ik zou mijn enthousiasme en commerciële opleiding graag inzetten binnen uw organisatie en mij verder ontwikkelen in
            accountmanagement. Ik maak graag persoonlijk kennis om te bespreken wat ik voor uw organisatie kan betekenen.
          </p>

          <p className="intro-divider">
            Met vriendelijke groet,
            <br />
            Dian van Noort
          </p>
        </Card>

        <Card title="3. LinkedIn-profiel">
          <p className="intro-divider">
            Het LinkedIn-profiel als aanvulling op het professionele profiel. Mijn connecties zijn met 50 gestegen in
            vergelijking met het vorige semester.
          </p>
          <ZoomImage src="/afstuderen/pl/herkansing-linkedin.webp" alt="LinkedIn-profiel" setOpenImg={setOpenImg} />
        </Card>

        <Card title="4. Logo">
          <p className="intro-divider">Logo ter visuele weergave van het basic chique design, dat ik wil uitstralen.</p>
          <ZoomImage src="/afstuderen/pl/profileringskit-logo.webp" alt="Logo" setOpenImg={setOpenImg} />
        </Card>

        <Card title="5. Pitch" last>
          <p className="intro-divider">Mijn persoonlijke pitch waarin ik mezelf kort en krachtig presenteer.</p>
          <ExternalLink href="https://mymedia.avans.nl/media/Persoonlijke+pitch/0_tiga4qf8">
            Bekijk persoonlijke pitch op MyMedia
          </ExternalLink>
        </Card>

        <FooterNav
          prev={["/Afstuderen/marktbewerkingsplan", "Marktbewerkingsplan"]}
          next={["/Afstuderen/feedback-stakeholders", "Stakeholders"]}
        />
      </article>
    </main>
  );
}
