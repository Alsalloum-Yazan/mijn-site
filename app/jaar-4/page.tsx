"use client";

export default function Jaar4() {
  const pages = [
    { title: "Profileringskit", sub: "Opdracht", link: "/jaar-4/profileringskit", delay: 0 },
    { title: "Eindreflectie", sub: "Reflectie", link: "/jaar-4/eindreflectie", delay: 60 },
    { title: "Persoonlijk profiel door de jaren heen", sub: "Profiel", link: "/jaar-4/persoonlijk-profiel", delay: 120 },
    { title: "Reflectie Persoonlijk doel", sub: "Reflectie", link: "/jaar-4/reflectie-persoonlijk", delay: 180 },
    { title: "Reflectie Vakinhoudelijk doel", sub: "Reflectie", link: "/jaar-4/reflectie-vakinhoudelijk", delay: 240 },
    { title: "Persoonlijk doel actie 1", sub: "Actie", link: "/jaar-4/persoonlijk-doel-1", delay: 300 },
    { title: "Persoonlijk doel actie 2", sub: "Actie", link: "/jaar-4/persoonlijk-doel-2", delay: 360 },
    { title: "Vakinhoudelijk doel actie 1", sub: "Actie", link: "/jaar-4/vakinhoudelijk-1", delay: 420 },
    { title: "Vakinhoudelijk doel actie 2", sub: "Actie", link: "/jaar-4/vakinhoudelijk-2", delay: 480 },
    { title: "AI-protocol", sub: "Opdracht", link: "/jaar-4/ai-protocol", delay: 540 },
    { title: "Het thuisblijfprogramma", sub: "Opdracht", link: "/jaar-4/thuisblijfprogramma", delay: 600 },
    { title: "9 stappen tot het afstuderen", sub: "Opdracht", link: "/jaar-4/9-stappen", delay: 660 },
    { title: "Video's", sub: "Overig", link: "/jaar-4/videos", delay: 720 },
    { title: "Bijlagen", sub: "Overig", link: "/jaar-4/bijlagen", delay: 780 },
  ];

  return (
    <main>

      {/* HEADER */}
      <div className="page-header">
        <div className="reveal">
          <a href="/" className="back-link-sm">← Terug naar home</a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Avans Hogeschool Breda — 2025
          </div>
          <h1 className="page-h1-large">
            Jaar <span className="g-text">4</span>
          </h1>
          <p className="page-lead">
            Het laatste jaar — gericht op afstuderen, neuromarketing en persoonlijke groei
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
              Jaar <span className="g-text">4</span>
            </h2>
            <div className="divider intro-divider" />
            <p className="intro-p">
              Na vier jaar lang HBO en drie jaar lang MBO is dit mijn laatste jaar op school ooit. Een bijzondere mijlpaal die ik bewust wil afsluiten.
            </p>
            <p>
              In jaar 4 heb ik mij gericht op het afstuderen bij Allsens in Breda, volledig gefocust op geurmarketing en neuromarketing.
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
              Ik heb de afgelopen periode als zeer leuk ervaren. Het vak sales was een positieve ervaring — uitgevoerd voor het bedrijf waar mijn vader al heel veel jaren actief is.
            </p>
            <p>
              Tot ik stuitte op neuromarketing: iets wat AI voorlopig niet overneemt en wat ik wil verder verkennen.
            </p>
          </div>
        </div>

        {/* DOELEN */}
        <div className="glow-card reveal intro-card intro-card-mb64">
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
              { num: "1", title: "Afstuderen bij Allsens", text: "Mijn afstudeerstage bij Allsens in Breda, volledig gefocust op geurmarketing als vorm van neuromarketing." },
              { num: "2", title: "Neuromarketing verkennen", text: "Ik wil mij verder verdiepen of neuromarketing daadwerkelijk het vak is waar ik naartoe wil." },
              { num: "3", title: "Persoonlijke groei", text: "Meer rustmomenten pakken, beoordelingsformulieren goed doorlezen en logische verbanden beter leggen." },
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
            Alle <span className="g-text">pagina's</span>
          </h2>
          <div className="divider divider-mb32" />
        </div>

        <div className="pages-grid">
          {pages.map((page, i) => (
            <a key={i} href={page.link} className="glow-card reveal page-card" style={{ transitionDelay: String(page.delay) + "ms" }}>
              <div className="page-card-top">
                <div className="page-card-num">{String(i + 1)}</div>
                <span className="page-card-sub">{page.sub}</span>
              </div>
              <h3 className="page-card-title">{page.title}</h3>
              <p className="page-card-link">Bekijk →</p>
            </a>
          ))}
        </div>

      </div>

      {/* FOOTER NAV */}
      <div className="year-footer-wrap">
        <div className="year-footer-btns">
          <a href="/" className="btn-ghost btn-sm-pad24">← Home</a>
          <a href="/jaar-3" className="btn-ghost btn-sm-pad24">← Jaar 3 | Stage</a>
        </div>
      </div>

    </main>
  );
}


