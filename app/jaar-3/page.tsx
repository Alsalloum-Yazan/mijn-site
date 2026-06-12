import Link from "next/link";
﻿export default function Jaar3() {
  const pages = [
    { title: "Bedrijfsproducten", sub: "Stage", link: "/jaar-3/bedrijfsproducten", delay: 0 },
    { title: "Bewijslasten Persoonlijk doel", sub: "Bewijs", link: "/jaar-3/bewijslasten-persoonlijk", delay: 60 },
    { title: "Bewijslasten Vakinhoudelijk doel", sub: "Bewijs", link: "/jaar-3/bewijslasten-vakinhoudelijk", delay: 120 },
    { title: "Doelen stage", sub: "Doelen", link: "/jaar-3/doelen-stage", delay: 180 },
    { title: "PDCA-cyclus", sub: "Opdracht", link: "/jaar-3/pdca-cyclus", delay: 240 },
    { title: "Reflecties doelen", sub: "Reflectie", link: "/jaar-3/reflecties", delay: 300 },
    { title: "VLOG", sub: "Media", link: "/jaar-3/vlog", delay: 360 },
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
            Avans Hogeschool Breda — Stage 2025
          </div>
          <h1 className="page-h1-large">
            Jaar <span className="g-text">3 | Stage</span>
          </h1>
          <p className="page-lead">
            Stage jaar — persoonlijke ontwikkeling, B2B website en Shopify
          </p>
          <div className="divider divider-center" />
        </div>
      </div>

      <div className="year-index-wrap">

        {/* STATS */}
        <div className="stats-3-grid">
          {[
            { num: String(pages.length), label: "Pagina's" },
            { num: "2025", label: "Stagejaar" },
            { num: "Feb  - Juli", label: "Stage Periode" },
          ].map((s, i) => (
            <div key={i} className="glow-card reveal stat-card-inner" style={{ transitionDelay: String(i * 80) + "ms" }}>
              <div className="stat-num g-text">{s.num}</div>
              <div className="divider divider-stat" />
              <p className="stat-label-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* PERSOONLIJKE ONTWIKKELING */}
        <div className="reveal section-heading-mb32">
          <h2 className="section-h2-small">
            Persoonlijke <span className="g-text">ontwikkeling</span>
          </h2>
          <div className="divider divider-mb32" />
        </div>

        <div className="glow-card reveal intro-card mb24">
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Over dit jaar
          </div>
          <p className="intro-p">
            Vanaf mijn 1e leerjaar op het HBO (AD Marketingmanagement) heb ik mij beziggehouden met mijn eigen ontwikkeling. Waarbij ik op mijn 19e zelfstandig ging wonen en dat nog steeds als een grote mijlpaal zie.
          </p>
          <p className="intro-p">
            Ik ben gevoelig voor kritiek, maar zie wel het goede van feedback in. Ik ben chaos in de orde en creëer soms ook chaos in de chaos. Toch zie ik dat deze chaos mij ook al ver gebracht heeft.
          </p>
          <p>
            Ik behaalde dan misschien niet netjes een diploma op de middelbare school, maar toch sta ik hier nu in mijn 3e leerjaar van de HBO bacheloropleiding Commerciële Economie.
          </p>
        </div>

        {/* DOELEN */}
        <div className="intro-2-grid">
          <div className="glow-card reveal intro-card-lg">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Persoonlijk doel
            </div>
            <h3 className="h3-card-mb16">Innerlijke rust</h3>
            <p className="p-sm-mb16">
              In de periode van 3 februari 2025 tot en met 27 juni 2025 heb ik gewerkt aan het versterken van mijn vermogen om innerlijke rust te behouden in situaties van mijn eigen gecreëerde chaos.
            </p>
            <p className="p-sm-14">
              Door dit doel verder te ontwikkelen wil ik ervoor zorgen dat ik mij beter kan focussen op dingen die er toe doen.
            </p>
          </div>

          <div className="glow-card reveal intro-card-lg">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Vakinhoudelijk doel
            </div>
            <h3 className="h3-card-mb16">Shopify & E-commerce</h3>
            <p className="p-sm-mb16">
              Van 3 februari 2025 tot 27 juni 2025 verdiep ik mijn kennis van Shopify door mij te richten op de mogelijkheden binnen Shopify, Wix en B2B.
            </p>
            <p className="p-sm-14">
              Mijn hoofdtaak ligt deze stage bij het uitvoeren en opzetten van een B2B website. Wat marketing betreft houd ik mij erg graag bezig met de usability van een website.
            </p>
          </div>
        </div>

        {/* DOEL BEREIKT */}
        <div className="glow-card reveal intro-card mb64">
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Wanneer is het doel bereikt?
          </div>
          <div className="goals-3-grid goals-3-grid-mt8">
            {[
              { num: "1", title: "Noteren", text: "Het noteren van gemaakte stappen en dingen die ik moet doen." },
              { num: "2", title: "Delen", text: "Het delen met anderen zodra taken zijn die een ander moet oppakken." },
              { num: "3", title: "Actie", text: "Direct actie ondernemen zodat de taak bij de volgende ligt en afgerond kan worden." },
            ].map((item, i) => (
              <div key={i} className="goal-item">
                <div className="goal-number-icon">{item.num}</div>
                <h3 className="goal-title">{item.title}</h3>
                <p className="goal-text">{item.text}</p>
              </div>
            ))}
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
                  <div className="page-card-num">{String(i + 1)}</div>
                  <span className="page-card-sub">{page.sub}</span>
                </div>
                <h3 className="page-card-title">{page.title}</h3>
                <p className="page-card-link">Bekijk →</p>
              </a>
            );
          })}
        </div>

      </div>

      <div className="year-footer-wrap">
        <div className="year-footer-btns">
          <a href="/jaar-2" className="btn-ghost btn-sm-pad24">← Jaar 2</a>
          <a href="/jaar-4" className="btn btn-sm-pad24">Jaar 4 →</a>
        </div>
      </div>

    </main>
  );
}

