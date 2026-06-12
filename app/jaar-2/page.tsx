import Link from "next/link";
﻿export default function Jaar2() {
  const pages = [
    { title: "Aquisitieset", sub: "Opdracht", link: "/jaar-2/aquisitieset", delay: 0 },
    { title: "Feedback", sub: "Reflectie", link: "/jaar-2/feedback", delay: 60 },
    { title: "Persoonlijke doelen", sub: "Doelen", link: "/jaar-2/persoonlijke-doelen", delay: 120 },
    { title: "PDCA-cyclus", sub: "Opdracht", link: "/jaar-2/pdca-cyclus", delay: 180 },
    { title: "Acties", sub: "Overzicht", link: "/jaar-2/acties", delay: 240 },
    { title: "AMX week", sub: "Opdracht", link: "/jaar-2/amx-week", delay: 300 },
    { title: "Opdrachten", sub: "Overzicht", link: "/jaar-2/opdrachten", delay: 360 },
    { title: "Reflecties", sub: "Reflectie", link: "/jaar-2/reflecties", delay: 420 },
    { title: "Inleesactie", sub: "Opdracht", link: "/jaar-2/inleesactie", delay: 480 },
  ];

  return (
    <main>

      {/* HEADER */}
      <div className="page-header">
        <div className="reveal">
          <Link href="/" className="back-link-sm">
            ← Terug naar home
          </Link>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Avans Hogeschool Breda — 2024
          </div>
          <h1 className="page-h1-large">
            Jaar <span className="g-text">2</span>
          </h1>
          <p className="page-lead">
            Ingestroomd september 2025 — gericht op assertiviteit en het zoeken naar een passende stage richting
          </p>
          <div className="divider divider-center" />
        </div>
      </div>

      <div className="year-index-wrap">

        {/* STATS */}
        <div className="stats-3-grid">
          {[
            { num: String(pages.length), label: "Pagina's" },
            { num: "2025", label: "Studiejaar" },
            { num: "PL", label: "Behaald" },
          ].map((s, i) => (
            <div key={i} className="glow-card reveal stat-card-inner" style={{ transitionDelay: String(i * 80) + "ms" }}>
              <div className="stat-num g-text">{s.num}</div>
              <div className="divider divider-stat" />
              <p className="stat-label-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* INTRO */}
        <div className="intro-2-grid">
          <div className="glow-card reveal intro-card">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Over dit jaar
            </div>
            <h2 className="intro-h2">
              Jaar <span className="g-text">2</span>
            </h2>
            <div className="divider intro-divider" />
            <p className="intro-p">
              Ik ben in september 2024 ingestroomd in jaar 2 van CE. Waarna ik vanaf februari 2025 ben gestart aan mijn 3e jaarstage.
            </p>
            <p>
              In jaar 2 heb ik mij gericht op mijn assertiviteit en het zoeken naar een passende beroeps/stage richting.
            </p>
          </div>

          <div className="glow-card reveal intro-card">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Samenvatting
            </div>
            <h2 className="intro-h2">
              Terugblik <span className="g-text">blok</span>
            </h2>
            <div className="divider intro-divider" />
            <p className="intro-p">
              De kwaliteitenoefening heeft me geholpen mijn sterke eigenschappen beter te begrijpen. Mijn opgewektheid en humor zorgen voor een positieve groepssfeer, terwijl mijn gevoeligheid me helpt empathisch te zijn.
            </p>
            <p>
              Tegelijkertijd wil ik groeien in zelfvertrouwen en assertiviteit.
            </p>
          </div>
        </div>

        {/* DOELEN */}
        <div className="glow-card reveal intro-card mb64">
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Toekomst & Doelen
          </div>
          <h2 className="intro-h2">
            Mijn <span className="g-text">doelen</span>
          </h2>
          <div className="divider divider-mb32" />
          <div className="goals-3-grid">
            {[
              { num: "1", title: "Eigen onderneming vs doorgroeien", text: "Ik twijfel nog tussen het opzetten van een eigen onderneming of doorgroeien binnen een bedrijf." },
              { num: "2", title: "Assertiviteit", text: "Binnen drie maanden wil ik mijn mening assertiever uiten en minimaal drie beroepsrichtingen onderzoeken." },
              { num: "3", title: "Stage vinden", text: "Ik zoek een stage die aansluit bij mijn interesses in online marketing en sales." },
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

      {/* FOOTER NAV */}
      <div className="year-footer-wrap">
        <div className="year-footer-btns">
          <Link href="/" className="btn-ghost btn-sm-pad24">← Home</Link>
          <a href="/jaar-3" className="btn-ghost btn-sm-pad24">Jaar 3 | Stage →</a>
          <a href="/jaar-4" className="btn btn-sm-pad24">Jaar 4 →</a>
        </div>
      </div>

    </main>
  );
}

