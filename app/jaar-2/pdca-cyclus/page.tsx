"use client";

export default function PDCAPage() {
  const doelen = [
    {
      number: "01",
      title: "Assertiviteit",
      accent: "#013F32",
      accentLight: "rgba(1,63,50,0.10)",
      accentBorder: "rgba(1,63,50,0.24)",
      pdca: {
        P: { items: ["Assertiviteit zelf in kaart brengen.", "Persoonlijkheidstest 1", "Persoonlijkheidstest 2", "Logboek"] },
        D: { items: ["Een cirkeldiagram opstellen, waarin ik laat zien hoe ik momenteel naar mijn assertiviteit kijk.", "Twee testen zoeken en uitvoeren, gerelateerd aan assertiviteit.", "Een logboek bijhouden, wanneer ik assertief ben geweest."] },
        C: { items: ["Conclusies halen uit de gemaakte cirkeldiagram.", "Conclusies trekken uit de testen.", "Bewustwording door het logboek.", "Nieuw doel: assertief en consistent zijn in het schoonmaken en behouden van mijn studio."] },
        A: { items: ["De cirkeldiagram is mooi visueel weergeven, met duidelijke persoonlijke voorbeelden.", "De testen zijn serieus gemaakt en er wordt gewerkt aan verbetering.", "De studio is aan de hand van een schema schoon en opgeruimd."] },
      },
    },
    {
      number: "02",
      title: "Op zoek naar een stageplaats",
      accent: "#E7FE25",
      accentLight: "rgba(231,254,37,0.28)",
      accentBorder: "rgba(231,254,37,0.55)",
      pdca: {
        P: { items: ["Doelen opstellen voor wat voor soort stage.", "CV aanpassen.", "Verschillende bedrijven contacteren.", "Eventueel herinneringen uitsturen."] },
        D: { items: ["Deze is vormgegeven aan de hand van een boodschappenlijstje.", "CV is aangevuld met updates en in een andere stijl vormgegeven.", "Ik heb: Fingerspitz, LVNG, Craze en GR8 gecontacteerd."] },
        C: { items: ["Het lijstje betreft vereisten waar al mijn stages aan moeten voldoen.", "Door de toepassing van mijn CV en aanpassingen kan ik deze direct opsturen.", "Bij verschillende van deze bedrijven heb ik er kort op moeten zitten."] },
        A: { items: ["Het vinden van een stageplaats bleef ondanks de verschillende focuspunten niet gemakkelijk. Waar ik van twee bedrijven hoop heb gekregen, zonder resultaat."] },
      },
    },
  ];

  const pdcaMeta = {
    P: { label: "Plan",  color: "#013F32", glow: "rgba(1,63,50,0.14)", desc: "Wat ga ik doen?" },
    D: { label: "Do",    color: "#E7FE25", glow: "rgba(231,254,37,0.34)", desc: "Hoe heb ik het uitgevoerd?" },
    C: { label: "Check", color: "#161616", glow: "rgba(22,22,22,0.10)", desc: "Wat zijn de bevindingen?" },
    A: { label: "Act",   color: "#0A5A48", glow: "rgba(1,63,50,0.18)", desc: "Wat doe ik hiermee?" },
  };

  return (
    <main>
      <article className="content-page">

        {/* Header */}
        <div className="reveal">
          <a href="/jaar-2" className="post-back-link">← Terug naar Jaar 2</a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 className="post-h1">
            PDCA <span className="g-text">Cyclus</span>
          </h1>
          <p className="p-intro-mb0">
            Aan de hand van de PDCA-cyclus wordt omschreven welke stappen en met welk gevoel de doelen zijn doorlopen.
          </p>
          <div className="divider divider-mt32-mb48" />
        </div>

        {/* PDCA Legenda strip */}
        <div className="reveal pdca-legend" style={{ transitionDelay: "60ms" }}>
          {Object.entries(pdcaMeta).map(([letter, { label, color, desc }]) => (
            <div key={letter} className="pdca-legend-item">
              <div
                className="pdca-legend-icon"
                style={{
                  background: `linear-gradient(135deg, ${color}33, ${color}11)`,
                  border: `1px solid ${color}55`,
                  color,
                }}
              >
                {letter}
              </div>
              <div>
                <div className="pdca-legend-label">{label}</div>
                <div className="pdca-legend-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Doelen */}
        <div className="flex-col-gap64">
          {doelen.map((doel, di) => (
            <div key={di} className="reveal" style={{ transitionDelay: `${100 + di * 80}ms` }}>

              {/* Doel title bar — dynamic accent border */}
              <div className="pdca-doel-header" style={{ borderBottom: `1px solid ${doel.accentBorder}` }}>
                <div
                  className="pdca-doel-num-icon"
                  style={{
                    background: `linear-gradient(135deg, ${doel.accent}, #4f46e5)`,
                    boxShadow: `0 6px 24px ${doel.accent}44`,
                  }}
                >
                  {doel.number}
                </div>
                <div>
                  <div className="doel-num-label">Doel {doel.number}</div>
                  <h2 className="pdca-doel-title">{doel.title}</h2>
                </div>
              </div>

              {/* PDCA 2×2 grid */}
              <div className="grid-auto-fill-280">
                {Object.entries(pdcaMeta).map(([letter, { label, color, glow, desc }]) => (
                  <div
                    key={letter}
                    className="pdca-step-card"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${glow}, transparent 60%), rgba(255,255,255,0.025)`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {/* Watermark letter — dynamic color */}
                    <div className="pdca-step-watermark" style={{ color: `${color}08` }}>
                      {letter}
                    </div>

                    {/* Header */}
                    <div className="pdca-step-header">
                      <div
                        className="pdca-step-icon"
                        style={{
                          background: `${color}22`,
                          border: `1px solid ${color}55`,
                          color,
                        }}
                      >
                        {letter}
                      </div>
                      <div>
                        <div className="pdca-step-label">{label}</div>
                        <div className="pdca-step-desc">{desc}</div>
                      </div>
                    </div>

                    {/* Divider — dynamic color */}
                    <div className="pdca-step-divider" style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }} />

                    {/* Items */}
                    <ul className="pdca-items-list">
                      {doel.pdca[letter as keyof typeof doel.pdca].items.map((item, j) => (
                        <li key={j} className="pdca-item">
                          <div className="pdca-item-bullet" style={{ background: `${color}18`, border: `1px solid ${color}40` }}>
                            <div className="pdca-item-dot" style={{ background: color }} />
                          </div>
                          <span className="pdca-item-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="footer-nav-mt80">
          <a href="/jaar-2" className="btn-ghost btn-sm">← Terug naar Jaar 2</a>
          <a href="/" className="btn btn-sm">Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}
