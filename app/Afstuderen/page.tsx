import Link from "next/link";
export default function Afstuderen() {
  const pages = [
    { title: "Voorwoord", sub: "Introductie", link: "/Afstuderen/voorwoord" },
    { title: "Inleidend", sub: "Start", link: "/Afstuderen/inleidend" },
    { title: "Professionele Profilering", sub: "Wie ik ben", link: "/Afstuderen/professionele-profilering" },
    { title: "Marktbewerkingsplan", sub: "Plan", link: "/Afstuderen/marktbewerkingsplan" },
    { title: "Profileringskit", sub: "Kernstuk", link: "/Afstuderen/Profileringskit" },
    { title: "Stakeholders voor feedback", sub: "Feedback", link: "/Afstuderen/feedback-stakeholders" },
    { title: "Leerdoel: Presenteren", sub: "Persoonlijk", link: "/Afstuderen/leerdoel-1-presenteren" },
    { title: "Vakdoel: AI-gedreven zoekgedrag", sub: "Vakinhoudelijk", link: "/Afstuderen/vakdoel-ai-zoekgedrag" },
    { title: "Vakdoel: Gedragseconomie", sub: "Vakinhoudelijk", link: "/Afstuderen/vakdoel-gedragseconomie" },
    { title: "Eindreflectie", sub: "Reflectie", link: "/Afstuderen/eindreflectie" },
    { title: "AI-Protocol", sub: "Onderzoek", link: "/Afstuderen/ai-protocol" },
    { title: "Literatuurlijst", sub: "Bronnen", link: "/Afstuderen/literatuurlijst" },
    { title: "Bijlagen", sub: "Aanvulling", link: "/Afstuderen/bijlagen" },
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
            Avans Hogeschool Breda — 2025/2026
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

        {/* DOELEN */}
        <div className="intro-2-grid">
          <div className="glow-card reveal intro-card-lg intro-card-full-col">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Persoonlijk leerdoel
            </div>
            <h3 className="h3-card-mb16">Presenteren</h3>
            <p className="p-sm-14">Uiterlijk op 19 oktober 2026 beheers ik mijn spreektempo tijdens presentaties, zodat ik rustiger en prettiger overkom op mijn publiek.</p>
          </div>

          <div className="glow-card reveal intro-card-lg">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Vakinhoudelijk doel 1
            </div>
            <h3 className="h3-card-mb16">AI-gedreven zoekgedrag (GEO)</h3>
            <p className="p-sm-14">Uiterlijk op 19 oktober 2026 kan ik zelfstandig marketingcontent schrijven, analyseren en optimaliseren volgens de principes van Generative Engine Optimization.</p>
          </div>

          <div className="glow-card reveal intro-card-lg">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Vakinhoudelijk doel 2
            </div>
            <h3 className="h3-card-mb16">Gedragseconomie</h3>
            <p className="p-sm-14">Uiterlijk op 19 oktober 2026 kan ik minimaal vijf gedragseconomische principes herkennen, uitleggen en toepassen op mijn eigen gedrag en binnen marketing.</p>
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
            const cardDelay = String(i * 60) + "ms";
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

