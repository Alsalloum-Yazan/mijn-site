import Link from "next/link";
﻿export default function Afstuderen() {
  const pages = [
    { title: "Profileringskit", sub: "Kernstuk", link: "/Afstuderen/Profileringskit", delay: 0 },
    { title: "Voorwoord", sub: "Introductie", link: "/Afstuderen/voorwoord", delay: 60 },
    { title: "Inleidend", sub: "Start", link: "/Afstuderen/inleidend", delay: 120 },
    { title: "Professionele Profilering", sub: "Wie ik ben", link: "/Afstuderen/professionele-profilering", delay: 180 },
    { title: "Feedback & Stakeholders", sub: "Feedback", link: "/Afstuderen/feedback-stakeholders", delay: 240 },
    { title: "Leerdoel 1: Presenteren", sub: "Persoonlijk", link: "/Afstuderen/leerdoel-1-presenteren", delay: 300 },
    { title: "Leerdoel 2: Spaans Leren", sub: "Persoonlijk", link: "/Afstuderen/leerdoel-2-spaans", delay: 360 },
    { title: "Conclusie Leerdoelen", sub: "Terugblik", link: "/Afstuderen/conclusie-leerdoelen", delay: 420 },
    { title: "Vakdoel: AI-Zoekgedrag", sub: "Vakinhoudelijk", link: "/Afstuderen/vakdoel-ai-zoekgedrag", delay: 480 },
    { title: "Conclusie Vakdoelen", sub: "Terugblik", link: "/Afstuderen/conclusie-vakdoelen", delay: 540 },
    { title: "Doelen & Metingen", sub: "Meting", link: "/Afstuderen/doelen-metingen", delay: 600 },
    { title: "Marktbewerkingsplan", sub: "Plan", link: "/Afstuderen/marktbewerkingsplan", delay: 660 },
    { title: "Eindreflectie", sub: "Reflectie", link: "/Afstuderen/eindreflectie", delay: 720 },
    { title: "AI-Protocol", sub: "Onderzoek", link: "/Afstuderen/ai-protocol", delay: 780 },
    { title: "Literatuurlijst", sub: "Bronnen", link: "/Afstuderen/literatuurlijst", delay: 840 },
    { title: "Bijlagen", sub: "Aanvulling", link: "/Afstuderen/bijlagen", delay: 900 },
  ];

  return (
    <main>
      <div className="page-header">
        <div className="reveal">
          <Link href="/" className="back-link-sm">
            ← Terug naar home
          </Link>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Avans Hogeschool Breda — 2024/2025
          </div>
          <h1 className="page-h1-large">
            <span className="g-text">Afstuderen</span>
          </h1>
          <p className="page-lead">
            Mijn afstudeerperiode — een compleet beeld van wie ik ben en waar mijn kwaliteiten liggen
          </p>
          <div className="divider divider-center" />
        </div>
      </div>

      <div className="year-index-wrap">

        {/* IMAGE */}
        <div className="reveal mb64">
          <img
            src="/afstuderen/afstuderen.jpg"
            alt="Afstuderen"
            className="afstuderen-img"
          />
        </div>

        {/* DOELEN */}
        <div className="intro-2-grid">
          <div className="glow-card reveal intro-card-lg">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Persoonlijk doel 1
            </div>
            <h3 className="h3-card-mb16">Presenteren</h3>
            <p className="p-sm-14">Aan het einde van mijn afstudeerperiode presenteer ik helder en overtuigend, aangetoond met drie presentaties en feedback van minstens drie personen.</p>
          </div>

          <div className="glow-card reveal intro-card-lg">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Persoonlijk doel 2
            </div>
            <h3 className="h3-card-mb16">Spaans leren</h3>
            <p className="p-sm-14">Aan het einde van mijn afstudeerperiode beheers ik Spaans op A1-niveau, aangetoond met een 100-daagse streak op Duolingo.</p>
          </div>

          <div className="glow-card reveal intro-card-lg intro-card-full-col">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Vakinhoudelijk doel
            </div>
            <h3 className="h3-card-mb16">SEO blogs schrijven</h3>
            <p className="p-sm-14">Ik wil mij gedurende 17 weken ontwikkelen in het schrijven van geoptimaliseerde SEO blogs voor AllSens en Pure by Zalati.</p>
          </div>
        </div>

        {/* PAGES GRID */}
        <div className="reveal section-heading-mb32">
          <h2 className="section-h2-small">
            Alle <span className="g-text">pagina&apos;s</span>
          </h2>
          <div className="divider divider-mb32" />
        </div>

        <div className="pages-grid">
          {pages.map((page, i) => {
            const cardDelay = String(page.delay) + "ms";
            return (
              <a key={i} href={page.link} className="glow-card reveal page-card" style={{ transitionDelay: cardDelay }}>
                <div className="page-card-top">
                  <div className="page-card-num">
                    {String(i + 1)}
                  </div>
                  <span className="page-card-sub">
                    {page.sub}
                  </span>
                </div>
                <h3 className="page-card-title">{page.title}</h3>
                <p className="page-card-link">Bekijk →</p>
              </a>
            );
          })}
        </div>

      </div>

      <div className="year-footer-wrap">
        <Link href="/" className="btn-ghost btn-sm-pad24">← Home</Link>
      </div>

    </main>
  );
}

