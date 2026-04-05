export default function Jaar2() {
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
          <a href="/" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            ← Terug naar home
          </a>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Avans Hogeschool Breda — 2024
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", marginBottom: "16px" }}>
            Jaar <span className="g-text">2</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 24px", fontSize: "1.1rem" }}>
            Ingestroomd september 2024 — gericht op assertiviteit en het zoeken naar een passende stage richting
          </p>
          <div className="divider" style={{ margin: "0 auto" }} />
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1160px", margin: "0 auto", padding: "0 24px 80px" }}>

        {/* STATS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "64px" }}>
          {[
            { num: String(pages.length), label: "Pagina's" },
            { num: "2024", label: "Studiejaar" },
            { num: "PL", label: "Behaald" },
          ].map((s, i) => (
            <div key={i} className="glow-card reveal" style={{ padding: "24px", textAlign: "center", transitionDelay: String(i * 80) + "ms" }}>
              <div className="stat-num g-text">{s.num}</div>
              <div className="divider" style={{ margin: "8px auto 10px" }} />
              <p style={{ fontSize: "13px", color: "#6060a0" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* INTRO */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "64px" }}>
          <div className="glow-card reveal" style={{ padding: "40px", borderRadius: "24px" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Over dit jaar
            </div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
              Jaar <span className="g-text">2</span>
            </h2>
            <div className="divider" style={{ marginBottom: "24px" }} />
            <p style={{ marginBottom: "16px" }}>
              Ik ben in september 2024 ingestroomd in jaar 2 van CE. Waarna ik vanaf februari 2025 ben gestart aan mijn 3e jaarstage.
            </p>
            <p>
              In jaar 2 heb ik mij gericht op mijn assertiviteit en het zoeken naar een passende beroeps/stage richting.
            </p>
          </div>

          <div className="glow-card reveal" style={{ padding: "40px", borderRadius: "24px" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Samenvatting
            </div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
              Terugblik <span className="g-text">blok</span>
            </h2>
            <div className="divider" style={{ marginBottom: "24px" }} />
            <p style={{ marginBottom: "16px" }}>
              De kwaliteitenoefening heeft me geholpen mijn sterke eigenschappen beter te begrijpen. Mijn opgewektheid en humor zorgen voor een positieve groepssfeer, terwijl mijn gevoeligheid me helpt empathisch te zijn.
            </p>
            <p>
              Tegelijkertijd wil ik groeien in zelfvertrouwen en assertiviteit.
            </p>
          </div>
        </div>

        {/* DOELEN */}
        <div className="glow-card reveal" style={{ padding: "40px", borderRadius: "24px", marginBottom: "64px" }}>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Toekomst & Doelen
          </div>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            Mijn <span className="g-text">doelen</span>
          </h2>
          <div className="divider" style={{ marginBottom: "32px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { num: "1", title: "Eigen onderneming vs doorgroeien", text: "Ik twijfel nog tussen het opzetten van een eigen onderneming of doorgroeien binnen een bedrijf." },
              { num: "2", title: "Assertiviteit", text: "Binnen drie maanden wil ik mijn mening assertiever uiten en minimaal drie beroepsrichtingen onderzoeken." },
              { num: "3", title: "Stage vinden", text: "Ik zoek een stage die aansluit bij mijn interesses in online marketing en sales." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "24px", background: "rgba(167,139,250,0.05)", border: "1px solid rgba(167,139,250,0.1)", borderRadius: "16px" }}>
                <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #7c3aed, #4f46e5)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800, color: "white", marginBottom: "14px" }}>{item.num}</div>
                <h3 style={{ fontSize: "0.95rem", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAGES GRID */}
        <div className="reveal" style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
            Alle <span className="g-text">pagina's</span>
          </h2>
          <div className="divider" style={{ marginBottom: "32px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
          {pages.map((page, i) => {
            const cardLink = page.link;
            const cardDelay = String(page.delay) + "ms";
            return (
              <a key={i} href={cardLink} className="glow-card reveal" style={{ padding: "28px 24px", textDecoration: "none", color: "inherit", display: "block", borderRadius: "20px", transitionDelay: cardDelay }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div style={{ width: "44px", height: "44px", background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.2))", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 800, color: "#a78bfa" }}>
                    {String(i + 1)}
                  </div>
                  <span style={{ fontSize: "11px", color: "#4040a0", background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.12)", borderRadius: "50px", padding: "3px 10px", fontWeight: 600 }}>
                    {page.sub}
                  </span>
                </div>
                <h3 style={{ fontSize: "1rem", marginBottom: "12px", color: "#e2e2f0" }}>{page.title}</h3>
                <p style={{ fontSize: "12px", color: "#a78bfa", fontWeight: 600 }}>Bekijk →</p>
              </a>
            );
          })}
        </div>

      </div>

      {/* FOOTER NAV */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 24px" }}>← Home</a>
          <a href="/jaar-3" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 24px" }}>Jaar 3 | Stage →</a>
          <a href="/jaar-4" className="btn" style={{ fontSize: "13px", padding: "10px 24px" }}>Jaar 4 →</a>
        </div>
      </div>

    </main>
  );
}