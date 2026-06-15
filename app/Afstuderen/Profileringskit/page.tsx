"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function Profileringskit() {
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
            Afstuderen — Profiel
          </div>
          <h1 className="post-h1">
            <span className="g-text">Profileringskit</span>
          </h1>
          <div className="content-header-border">
            <p className="content-text">
              Voor mijn afstuderen heb ik deze profileringskit samengesteld als een compleet beeld van wie ik ben, wat mij motiveert en waar mijn kwaliteiten liggen. In de verschillende onderdelen laat ik niet alleen zien wat ik heb gedaan, maar ook hoe ik mezelf presenteer en onderscheid richting mijn toekomstige werkveld.
            </p>
          </div>
        </div>

        {/* CV */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg"><span className="g-text">CV</span></h2>
          <div className="divider divider-mb20" />
          <p className="intro-divider">
            In mijn cv beschrijf ik mijn stages, wat ik daar precies heb gedaan en welke bijbaantjes ik tot nu toe heb gehad. Zo is goed te zien welke praktische ervaring ik al heb opgebouwd.
          </p>
          <div onClick={() => setOpenImg("/afstuderen/Profileringskit/cv.png")} className="zoom-img-wrap">
            <img loading="lazy" decoding="async" src="/afstuderen/Profileringskit/cv.png" alt="CV" className="zoom-img" />
            <div
              className="zoom-overlay"
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.4)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "0"; }}
            >
              <div className="zoom-icon">Vergroot afbeelding</div>
            </div>
          </div>
          <p className="zoom-hint">Klik om te vergroten</p>
        </div>

        {/* MOTIVATIEBRIEF */}
        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg"><span className="g-text">Motivatiebrief</span></h2>
          <div className="divider divider-mb20" />
          <p className="intro-divider">
            Mijn motivatiebrief laat zien waarom ik enthousiast ben om terug te gaan naar LVNG en wat ik kan toevoegen.
          </p>
          <div onClick={() => setOpenImg("/afstuderen/Profileringskit/motivatie.png")} className="zoom-img-wrap">
            <img loading="lazy" decoding="async" src="/afstuderen/Profileringskit/motivatie.png" alt="Motivatiebrief" className="zoom-img" />
            <div
              className="zoom-overlay"
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.4)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "0"; }}
            >
              <div className="zoom-icon">Vergroot afbeelding</div>
            </div>
          </div>
          <p className="zoom-hint">Klik om te vergroten</p>
        </div>

        {/* LINKEDIN-PROFIEL */}
        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg"><span className="g-text">LinkedIn-profiel</span></h2>
          <div className="divider divider-mb20" />
          <p className="intro-divider">
            Het LinkedIn-profiel als aanvulling op het professionele profiel. Mijn connecties zijn met 49 gestegen in vergelijking met het vorige semester.
          </p>
          <div onClick={() => setOpenImg("/afstuderen/pl/profileringskit-linkedin.webp")} className="zoom-img-wrap">
            <img loading="lazy" decoding="async" src="/afstuderen/pl/profileringskit-linkedin.webp" alt="LinkedIn-profiel" className="zoom-img" />
            <div
              className="zoom-overlay"
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.4)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "0"; }}
            >
              <div className="zoom-icon">Vergroot afbeelding</div>
            </div>
          </div>
          <p className="zoom-hint">Klik om te vergroten</p>
        </div>

        {/* LOGO */}
        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg"><span className="g-text">Logo</span></h2>
          <div className="divider divider-mb20" />
          <p className="intro-divider">
            Logo ter visuele weergave van het basic chique design, dat ik wil uitstralen.
          </p>
          <div onClick={() => setOpenImg("/afstuderen/pl/profileringskit-logo.webp")} className="zoom-img-wrap">
            <img loading="lazy" decoding="async" src="/afstuderen/pl/profileringskit-logo.webp" alt="Logo" className="zoom-img" />
            <div
              className="zoom-overlay"
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.4)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "0"; }}
            >
              <div className="zoom-icon">Vergroot afbeelding</div>
            </div>
          </div>
          <p className="zoom-hint">Klik om te vergroten</p>
        </div>

        {/* PITCH */}
        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg"><span className="g-text">Pitch</span></h2>
          <div className="divider divider-mb20" />
          <p className="intro-divider">
            Mijn persoonlijke pitch waarin ik mezelf kort en krachtig presenteer.
          </p>
          <a
            href="https://mymedia.avans.nl/media/Persoonlijke+pitch/0_tiga4qf8"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link-btn"
          >
            Bekijk persoonlijke pitch op MyMedia →
          </a>
        </div>

        <div className="post-footer-nav">
          <a href="/Afstuderen" className="btn-ghost btn-sm">← Terug naar Afstuderen</a>
          <a href="/Afstuderen/eindreflectie" className="btn btn-sm">Eindreflectie →</a>
        </div>

      </article>
    </main>
  );
}

