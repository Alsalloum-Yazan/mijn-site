"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function ProfessioneleProfilering() {
  const [imgOpen, setImgOpen] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={imgOpen} onClose={() => setImgOpen(null)} />

      <article className="content-page">
        {/* HEADER */}
        <div className="reveal">
          <a href="/Afstuderen" className="back-link-sm">
            ← Terug naar Afstuderen
          </a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Persoonlijke en professionele profilering
          </div>
          <h1 className="page-h1-medium">
            <span className="g-text">Professionele profilering</span>
          </h1>
          <p className="page-lead">
            In dit hoofdstuk beschrijf ik hoe ik mezelf zie als toekomstig commercieel econoom en welke kwaliteiten ik wil inzetten binnen mijn werk.
          </p>
          <div className="divider divider-center divider-mb40" />
        </div>

        {/* GEWENSTE PROFILERING */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Gewenste profilering</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Mijn gewenste profilering als commercieel econoom is die van iemand die graag met mensen werkt, nieuwsgierig is en open kijkt naar de toekomst. Ik vind het belangrijk om echt contact te maken met anderen. Niet alleen via een mail of bericht, maar juist ook in een persoonlijk gesprek of tijdens een bezoek bij de klant. Tijdens mijn eerdere stage bij LVNG in het derde leerjaar heb ik gemerkt dat deze manier van werken goed bij mij past. Ik vond het prettig om klanten persoonlijk te spreken, beter te begrijpen waar zij naar op zoek waren en samen te kijken naar passende mogelijkheden.
          </p>

          <p className="intro-divider">
            Bij AllSens past deze interesse goed bij het onderwerp geurbeleving. Geurbeleving gaat niet alleen om een geur, maar vooral om wat een geur kan toevoegen aan een ruimte of merk. Het kan bijdragen aan sfeer, herkenning en een prettige ervaring voor klanten, bezoekers of medewerkers. Dat belevingsgerichte stuk spreekt mij erg aan.
          </p>

          <p className="intro-divider">
            Mijn kracht ligt vooral op het sociale en spontane vlak. Ik maak makkelijk contact, toon interesse in anderen en vind het leuk om gesprekken aan te gaan. Tegelijkertijd weet ik dat hier ook een valkuil zit. Soms wil ik te veel informatie geven of te veel details meenemen, waardoor mijn verhaal minder duidelijk kan worden. Hier wil ik de komende tijd bewuster mee omgaan, door beter te filteren wat belangrijk is voor de ander.
          </p>

          <p className="intro-divider">
            Daarnaast kijk ik ook naar mijn eigen toekomst. De komende jaren wil ik graag in Spanje gaan wonen. Daarom ben ik al bezig met het leren van de Spaanse taal. Dit past bij mijn nieuwsgierigheid en mijn wens om mezelf te blijven ontwikkelen.
          </p>

          <p className="intro-divider">
            Zo wil ik uitgroeien tot een marketingprofessional die commercieel denkt, makkelijk contact maakt en uitdagingen aan durft te gaan. Iemand die niet alleen kijkt naar wat er verkocht kan worden, maar vooral naar wat iemand echt nodig heeft.
          </p>

          {/* IMAGE - CLICKABLE FOR ZOOM */}
          <div
            className="reveal content-image-wrap"
            onClick={() => setImgOpen("/afstuderen/pl/professionele-profilering.webp")}
          >
            <img
              src="/afstuderen/pl/professionele-profilering.webp"
              alt="Persoonlijke en professionele profilering"
              className="content-image-lg"
            />
            <div className="image-zoom-overlay">
              <div className="zoom-icon">Vergroot afbeelding</div>
            </div>
          </div>
        </div>

        {/* WIE BEN IK */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Wie ben ik (geworden)?</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            In het eerste jaar heb ik de MBTI-, DISC- en Enneagram-test gedaan. Hieruit kwam naar voren dat ik sociaal, gevoelsgericht, enthousiast en behulpzaam ben. Ook bleek dat communicatie en positiviteit sterke kanten van mij zijn. In jaar 1 heb ik daarnaast de IXLY-test gemaakt, waaruit vooral communiceren, flexibiliteit en nauwkeurigheid naar voren kwamen. In jaar 2 heb ik gewerkt met NLP, de ijsberg en zintuiglijk waarnemen, waardoor ik bewuster ben gaan kijken naar keuzes, gedrag en mijn interesse in neuromarketing. In jaar 3 heb ik met Ikigai en de kwaliteitenoefening ontdekt dat openheid, gezelligheid en positiviteit nog steeds bij mij passen, maar dat ik inmiddels directer, assertiever en zelfverzekerder ben geworden.
          </p>
        </div>

        {/* TOEGEVOEGDE WAARDE */}
        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Mijn toegevoegde waarde voor de doelgroep</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Mijn toegevoegde waarde (a.d.h.v. wie ik geworden ben) ligt vooral in het persoonlijke contact dat ik mensen probeer op te bouwen. Ik luister graag, stel vragen en probeer goed te begrijpen waar iemand echt behoefte aan heeft. Daardoor kan ik beter meedenken en communiceren op een manier die aansluit bij de ander.
          </p>

          <p className="intro-divider">
            Daarnaast kijk ik niet alleen naar verkoop, maar ook naar de ervaring en beleving achter een merk of omgeving. Door mijn interesse in geurbeleving en klantcontact kan ik organisaties helpen om bewuster na te denken over hoe zij overkomen op klanten, bezoekers en medewerkers. Voor mij is het hierin wel belangrijk om iets te verkopen, waar ik echt achter sta.
          </p>

          <p className="intro-divider">
            Ik combineer een sociale en spontane houding met nieuwsgierigheid en de wil om mezelf te blijven ontwikkelen, ook na mijn opleiding. Hierdoor durf ik nieuwe gesprekken aan te gaan, kansen te ontdekken en mee te denken over oplossingen die passen bij de wensen van de doelgroep waar ik mij op richt.
          </p>
        </div>

        {/* FOOTER NAV */}
        <div className="footer-nav-mt80">
          <a href="/Afstuderen" className="btn-ghost btn-sm-pad24">← Terug naar Afstuderen</a>
          <a href="/Afstuderen/feedback-stakeholders" className="btn btn-sm-pad24">Volgende →</a>
        </div>

      </article>
    </main>
  );
}
