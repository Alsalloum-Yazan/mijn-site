export default function Jaar3() {
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
          <a href="/" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            ← Terug naar home
          </a>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Avans Hogeschool Breda — Stage 2025
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", marginBottom: "16px" }}>
            Jaar <span className="g-text">3 | Stage</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 24px", fontSize: "1.1rem" }}>
            Stage jaar — persoonlijke ontwikkeling, B2B website en Shopify
          </p>
          <div className="divider" style={{ margin: "0 auto" }} />
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1160px", margin: "0 auto", padding: "0 24px 80px" }}>

        {/* STATS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "64px" }}>
          {[
            { num: String(pages.length), label: "Pagina's" },
            { num: "2025", label: "Stagejaar" },
            { num: "5", label: "Stages totaal" },
          ].map((s, i) => (
            <div key={i} className="glow-card reveal" style={{ padding: "24px", textAlign: "center", transitionDelay: String(i * 80) + "ms" }}>
              <div className="stat-num g-text">{s.num}</div>
              <div className="divider" style={{ margin: "8px auto 10px" }} />
              <p style={{ fontSize: "13px", color: "#6060a0" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* PERSOONLIJKE ONTWIKKELING */}
        <div className="reveal" style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
            Persoonlijke <span className="g-text">ontwikkeling</span>
          </h2>
          <div className="divider" style={{ marginBottom: "32px" }} />
        </div>

        <div className="glow-card reveal" style={{ padding: "40px", borderRadius: "24px", marginBottom: "24px" }}>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Over dit jaar
          </div>
          <p style={{ marginBottom: "16px" }}>
            Vanaf mijn 1e leerjaar op het HBO (AD Marketingmanagement) heb ik mij beziggehouden met mijn eigen ontwikkeling. Waarbij ik op mijn 19e zelfstandig ging wonen en dat nog steeds als een grote mijlpaal zie.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Ik ben gevoelig voor kritiek, maar zie wel het goede van feedback in. Ik ben chaos in de orde en creëer soms ook chaos in de chaos. Toch zie ik dat deze chaos mij ook al ver gebracht heeft.
          </p>
          <p>
            Ik behaalde dan misschien niet netjes een diploma op de middelbare school, maar toch sta ik hier nu in mijn 3e leerjaar van de HBO bacheloropleiding Commerciële Economie.
          </p>
        </div>

        {/* DOELEN */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "64px" }}>
          <div className="glow-card reveal" style={{ padding: "36px", borderRadius: "24px" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Persoonlijk doel
            </div>
            <h3 style={{ marginBottom: "16px", fontSize: "1rem" }}>Innerlijke rust</h3>
            <p style={{ fontSize: "14px", marginBottom: "16px" }}>
              In de periode van 3 februari 2025 tot en met 27 juni 2025 heb ik gewerkt aan het versterken van mijn vermogen om innerlijke rust te behouden in situaties van mijn eigen gecreëerde chaos.
            </p>
            <p style={{ fontSize: "14px" }}>
              Door dit doel verder te ontwikkelen wil ik ervoor zorgen dat ik mij beter kan focussen op dingen die er toe doen.
            </p>
          </div>

          <div className="glow-card reveal" style={{ padding: "36px", borderRadius: "24px" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Vakinhoudelijk doel
            </div>
            <h3 style={{ marginBottom: "16px", fontSize: "1rem" }}>Shopify & E-commerce</h3>
            <p style={{ fontSize: "14px", marginBottom: "16px" }}>
              Van 3 februari 2025 tot 27 juni 2025 verdiep ik mijn kennis van Shopify door mij te richten op de mogelijkheden binnen Shopify, Wix en B2B.
            </p>
            <p style={{ fontSize: "14px" }}>
              Mijn hoofdtaak ligt deze stage bij het uitvoeren en opzetten van een B2B website. Wat marketing betreft houd ik mij erg graag bezig met de usability van een website.
            </p>
          </div>
        </div>

        {/* DOEL BEREIKT */}
        <div className="glow-card reveal" style={{ padding: "40px", borderRadius: "24px", marginBottom: "64px" }}>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Wanneer is het doel bereikt?
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "8px" }}>
            {[
              { num: "1", title: "Noteren", text: "Het noteren van gemaakte stappen en dingen die ik moet doen." },
              { num: "2", title: "Delen", text: "Het delen met anderen zodra taken zijn die een ander moet oppakken." },
              { num: "3", title: "Actie", text: "Direct actie ondernemen zodat de taak bij de volgende ligt en afgerond kan worden." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(167,139,250,0.05)", border: "1px solid rgba(167,139,250,0.1)", borderRadius: "16px" }}>
                <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #7c3aed, #4f46e5)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800, color: "white", marginBottom: "14px" }}>{item.num}</div>
                <h3 style={{ fontSize: "0.95rem", marginBottom: "8px" }}>{item.title}</h3>
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

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/jaar-2" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 24px" }}>← Jaar 2</a>
          <a href="/jaar-4" className="btn" style={{ fontSize: "13px", padding: "10px 24px" }}>Jaar 4 →</a>
        </div>
      </div>

    </main>
  );
}