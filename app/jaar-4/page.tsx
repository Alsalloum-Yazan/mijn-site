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
          <a href="/" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            ← Terug naar home
          </a>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Avans Hogeschool Breda — 2025
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", marginBottom: "16px" }}>
            Jaar <span className="g-text">4</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 24px", fontSize: "1.1rem" }}>
            Het laatste jaar — gericht op afstuderen, neuromarketing en persoonlijke groei
          </p>
          <div className="divider" style={{ margin: "0 auto" }} />
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1160px", margin: "0 auto", padding: "0 24px 80px" }}>

        {/* STATS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "64px" }}>
          {[
            { num: String(pages.length), label: "Pagina's" },
            { num: "2025", label: "Studiejaar" },
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
              Jaar <span className="g-text">4</span>
            </h2>
            <div className="divider" style={{ marginBottom: "24px" }} />
            <p style={{ marginBottom: "16px" }}>
              Na vier jaar lang HBO en drie jaar lang MBO is dit mijn laatste jaar op school ooit. Een bijzondere mijlpaal die ik bewust wil afsluiten.
            </p>
            <p>
              In jaar 4 heb ik mij gericht op het afstuderen bij Allsens in Breda, volledig gefocust op geurmarketing en neuromarketing.
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
              Ik heb de afgelopen periode als zeer leuk ervaren. Het vak sales was een positieve ervaring — uitgevoerd voor het bedrijf waar mijn vader al heel veel jaren actief is.
            </p>
            <p>
              Tot ik stuitte op neuromarketing: iets wat AI voorlopig niet overneemt en wat ik wil verder verkennen.
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
              { num: "1", title: "Afstuderen bij Allsens", text: "Mijn afstudeerstage bij Allsens in Breda, volledig gefocust op geurmarketing als vorm van neuromarketing." },
              { num: "2", title: "Neuromarketing verkennen", text: "Ik wil mij verder verdiepen of neuromarketing daadwerkelijk het vak is waar ik naartoe wil." },
              { num: "3", title: "Persoonlijke groei", text: "Meer rustmomenten pakken, beoordelingsformulieren goed doorlezen en logische verbanden beter leggen." },
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
          {pages.map((page, i) => (
            <a key={i} href={page.link} className="glow-card reveal" style={{ padding: "28px 24px", textDecoration: "none", color: "inherit", display: "block", borderRadius: "20px", transitionDelay: String(page.delay) + "ms" }}>
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
          ))}
        </div>

      </div>

      {/* FOOTER NAV */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 24px" }}>← Home</a>
          <a href="/jaar-3" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 24px" }}>← Jaar 3 | Stage</a>
        </div>
      </div>

    </main>
  );
}