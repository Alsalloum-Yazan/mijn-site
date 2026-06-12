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

export default function Marktbewerkingsplan() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const video = {
    title: "Persoonlijke pitch",
    url: "https://mymedia.avans.nl/media/Persoonlijke+pitch/0_tiga4qf8",
    thumbnail: "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_tiga4qf8/width/600/height/340"
  };

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
            Afstuderen — Marktbewerkingsplan
          </div>

          <h1 className="post-h1">
            <span className="g-text">Marktbewerkingsplan</span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Mijn persoonlijke en professionele profilering aan de hand van de
              geur Ibiza Chic.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Marktbewerkingsplan</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Deze website hoort bij mijn marktbewerkingsplan en staat los van de
            PL-website.
          </p>

          <p className="intro-divider">
            Voor mijn marktbewerkingsplan maak ik mijn persoonlijke en
            professionele profilering zichtbaar aan de hand van de geur Ibiza
            Chic. Deze geur is gekoppeld aan wie ik ben en waar ik voor sta. Dit
            past goed bij mijn afstudeerperiode bij AllSens, omdat ik hiermee
            mijn interesse in geurbeleving, marketing en klantcontact kan
            combineren.
          </p>

          <ZoomImage
            src="/afstuderen/pl/website-ibiza-chic.png"
            alt="Website Ibiza Chic"
            setOpenImg={setOpenImg}
          />

          <div className="external-link-btn-wrap">
            <a
              href="https://ibizachic.netlify.app/#top"
              target="_blank"
              rel="noreferrer"
              className="external-link-btn"
            >
              <span>Website Ibiza Chic</span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Doelgroep</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Mijn doelgroep bestaat uit docenten, toekomstige werkgevers,
            collega’s, familieleden en vriendinnen. Docenten zien via mijn
            website hoe ik mijn persoonlijke geur heb uitgewerkt op een creatieve
            wijze. Toekomstige werkgevers krijgen een eerste indruk van mij als
            persoon: professioneel, verzorgd en toegankelijk. Collega’s zien dat
            ik sociaal, energiek en betrokken ben. Familieleden en vriendinnen
            kennen mij het beste en kunnen daardoor goed beoordelen of de website
            aansluit bij wie ik ben.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Toegevoegde waarde</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Mijn toegevoegde waarde zit in mijn energie, enthousiasme en
            toegankelijkheid. Ik ben vaak druk en barst van de energie, maar
            professioneel wil ik rustig, verzorgd en betrouwbaar overkomen.
            Daarom past Ibiza Chic goed bij mij. De website heeft een warme,
            stijlvolle en rustige uitstraling. Dat sluit aan bij de indruk die ik
            wil achterlaten: vriendelijk en benaderbaar, maar ook netjes en
            professioneel.
          </p>

          <p className="intro-divider">
            De website laat zien dat ik bewust nadenk over mijn eerste indruk. Ik
            breng veel energie en drive mee, maar op een manier die vertrouwen
            geeft. Dat maakt mij waardevol voor een team of organisatie: ik ben
            enthousiast, sociaal en betrokken, met oog voor kwaliteit, uitstraling
            en verzorging.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Acties voor bekendheid en bewijslast</span>
          </h2>

          <div className="divider divider-mb20" />

          <h3 className="h3-sub">1. QR-code aanmaken</h3>

          <p className="intro-divider">
            Om mijn website makkelijker toegankelijk te maken, maak ik een
            QR-code die direct naar mijn website verwijst. Deze QR-code kan ik
            toevoegen aan mijn cv, portfolio, presentatie of uitprinten. Zo
            kunnen docenten, toekomstige werkgevers en andere contacten de
            website snel openen. Dit zorgt voor extra bekendheid, zonder dat ik
            de website steeds actief hoef te delen.
          </p>

          <p className="intro-divider">
            Bewijslast: screenshot van de QR-code en een screenshot van waar ik
            deze heb toegevoegd.
          </p>

          <ZoomImage
            src="/afstuderen/pl/qr-code-website.webp"
            alt="QR-code naar de Ibiza Chic website"
            setOpenImg={setOpenImg}
          />

          <h3 className="h3-sub">2. Website in mijn LinkedIn-bio plaatsen</h3>

          <p className="intro-divider">
            Ik plaats de link naar mijn website in mijn LinkedIn-bio, zodat deze
            direct zichtbaar is voor mijn zakelijke netwerk. Hierdoor kunnen
            toekomstige werkgevers, collega’s en andere contacten de website
            makkelijk bekijken wanneer zij mijn profiel bezoeken.
          </p>

          <p className="intro-divider">
            Bewijslast: screenshot van mijn LinkedIn-profiel met de websitelink.
          </p>

          <ZoomImage
            src="/afstuderen/pl/linkedin-bio-website.webp"
            alt="LinkedIn-profiel met websitelink"
            setOpenImg={setOpenImg}
          />

          <h3 className="h3-sub">3. Korte enquête laten invullen</h3>

          <p className="intro-divider">
            Ik laat vriendinnen en familie een korte enquête invullen, omdat zij
            mij goed kennen. Ik vraag of de website aansluit bij wie ik ben en
            welke indruk zij van mij krijgen.
          </p>

          <p className="intro-divider">
            Bewijslast: screenshot van de resultaten uit de enquête.
          </p>

          <ZoomImage
            src="/afstuderen/pl/enquete-resultaten.webp"
            alt="Resultaten van de korte enquête over de Ibiza Chic website"
            setOpenImg={setOpenImg}
          />
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Bewijslasten | Marktbewerkingsplan</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Concluderend blijkt uit de bewijslasten dat de website een effectief
            middel is om mijn profilering overtuigend over te brengen.
          </p>

          <h3 className="h3-sub">Bewijslast: 1. QR-code aanmaken</h3>

          <ZoomImage
            src="/afstuderen/pl/qr-code-website.webp"
            alt="Bewijslast QR-code aanmaken"
            setOpenImg={setOpenImg}
          />

          <h3 className="h3-sub">
            Bewijslast: 2. Website in mijn LinkedIn-bio plaatsen
          </h3>

          <p className="intro-divider">
            Dit is terug te zien op mijn huidige LinkedIn-profiel: Dian van
            Noort.
          </p>

          <ZoomImage
            src="/afstuderen/pl/linkedin-bio-website.webp"
            alt="Bewijslast LinkedIn-bio met websitelink"
            setOpenImg={setOpenImg}
          />

          <h3 className="h3-sub">
            Bewijslast: 3. Korte enquête laten invullen
          </h3>

          <ZoomImage
            src="/afstuderen/pl/enquete-resultaten.webp"
            alt="Bewijslast enquête resultaten"
            setOpenImg={setOpenImg}
          />
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Profileringskit</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Onderstaand volledig ingericht de profileringskit: bestaande uit CV,
            motivatiebrief, LinkedIn-profiel, logo, pitch en motto.
          </p>

          <h3 className="h3-sub">1. CV</h3>

          <p className="intro-divider">
            CV als overzicht van opleiding, werkervaring en relevante
            vaardigheden.
          </p>

          <ZoomImage
            src="/afstuderen/pl/profileringskit-cv.webp"
            alt="Profileringskit CV"
            setOpenImg={setOpenImg}
          />

          <h3 className="h3-sub">2. Motivatiebrief</h3>

          <p className="intro-divider">
            Motivatiebrief als korte toelichting op motivatie, ambities en
            aansluiting bij de functie.
          </p>

          <ZoomImage
            src="/afstuderen/pl/profileringskit-motivatiebrief.webp"
            alt="Profileringskit motivatiebrief"
            setOpenImg={setOpenImg}
          />

          <h3 className="h3-sub">3. LinkedIn-profiel</h3>

          <p className="intro-divider">
            Het LinkedIn-profiel als aanvulling op het professionele profiel.
          </p>

          <p className="intro-divider">
            Mijn connecties zijn met 49 gestegen in vergelijking met het vorige
            semester.
          </p>

          <ZoomImage
            src="/afstuderen/pl/profileringskit-linkedin.webp"
            alt="Profileringskit LinkedIn-profiel"
            setOpenImg={setOpenImg}
          />

          <h3 className="h3-sub">4. Logo</h3>

          <p className="intro-divider">
            Logo ter visuele weergave van het basic chique design dat ik wil
            uitstralen.
          </p>

          <ZoomImage
            src="/afstuderen/pl/profileringskit-logo.webp"
            alt="Profileringskit logo"
            setOpenImg={setOpenImg}
          />

          <h3 className="h3-sub">5. Pitch</h3>

          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card card-hover video-card-border"
          >
            <div className="video-thumb-wrap">
              <img loading="lazy" decoding="async"                 src={video.thumbnail}
                alt={video.title}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="video-thumb-img"
              />

              <div className="video-mymedia-badge">MYMEDIA</div>

              <div className="video-play-overlay">
                <div
                  className="video-play-btn"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.12)";
                    e.currentTarget.style.background = "rgba(231,254,37,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background = "rgba(0,0,0,0.45)";
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="video-play-icon">
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="video-body">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-link">Bekijk op Avans MyMedia →</p>
            </div>
          </a>


        </div>

        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Conclusie</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Het marktbewerkingsplan en de profileringskit laten samen zien hoe ik
            mijn persoonlijke en professionele profiel zichtbaar heb gemaakt. De
            geur Ibiza Chic sluit aan bij wie ik ben en bij de indruk die ik wil
            achterlaten: warm, verzorgd, toegankelijk en professioneel.
          </p>

          <p className="intro-divider">
            Door de website, QR-code, LinkedIn-link, enquête en profileringskit
            te combineren, heb ik mijn profilering op verschillende manieren
            onderbouwd. Hiermee toon ik aan dat ik bewust heb nagedacht over mijn
            uitstraling, mijn toegevoegde waarde en de manier waarop ik mij wil
            presenteren richting docenten, werkgevers en mijn netwerk.
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