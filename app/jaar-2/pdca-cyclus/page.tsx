"use client";

export default function PDCAPage() {
  const doelen = [
    {
      number: "01",
      title: "Assertiviteit",
      accent: "#7c3aed",
      accentLight: "rgba(124,58,237,0.15)",
      accentBorder: "rgba(124,58,237,0.25)",
      pdca: {
        P: {
          items: [
            "Assertiviteit zelf in kaart brengen.",
            "Persoonlijkheidstest 1",
            "Persoonlijkheidstest 2",
            "Logboek",
          ],
        },
        D: {
          items: [
            "Een cirkeldiagram opstellen, waarin ik laat zien hoe ik momenteel naar mijn assertiviteit kijk.",
            "Twee testen zoeken en uitvoeren, gerelateerd aan assertiviteit.",
            "Een logboek bijhouden, wanneer ik assertief ben geweest.",
          ],
        },
        C: {
          items: [
            "Conclusies halen uit de gemaakte cirkeldiagram.",
            "Conclusies trekken uit de testen.",
            "Bewustwording door het logboek.",
            "Nieuw doel: assertief en consistent zijn in het schoonmaken en behouden van mijn studio.",
          ],
        },
        A: {
          items: [
            "De cirkeldiagram is mooi visueel weergeven, met duidelijke persoonlijke voorbeelden.",
            "De testen zijn serieus gemaakt en er wordt gewerkt aan verbetering.",
            "De studio is aan de hand van een schema schoon en opgeruimd.",
          ],
        },
      },
    },
    {
      number: "02",
      title: "Op zoek naar een stageplaats",
      accent: "#4f46e5",
      accentLight: "rgba(79,70,229,0.15)",
      accentBorder: "rgba(79,70,229,0.25)",
      pdca: {
        P: {
          items: [
            "Doelen opstellen voor wat voor soort stage.",
            "CV aanpassen.",
            "Verschillende bedrijven contacteren.",
            "Eventueel herinneringen uitsturen.",
          ],
        },
        D: {
          items: [
            "Deze is vormgegeven aan de hand van een boodschappenlijstje.",
            "CV is aangevuld met updates en in een andere stijl vormgegeven.",
            "Ik heb: Fingerspitz, LVNG, Craze en GR8 gecontacteerd.",
          ],
        },
        C: {
          items: [
            "Het lijstje betreft vereisten waar al mijn stages aan moeten voldoen.",
            "Door de toepassing van mijn CV en aanpassingen kan ik deze direct opsturen.",
            "Bij verschillende van deze bedrijven heb ik er kort op moeten zitten.",
          ],
        },
        A: {
          items: [
            "Het vinden van een stageplaats bleef ondanks de verschillende focuspunten niet gemakkelijk. Waar ik van twee bedrijven hoop heb gekregen, zonder resultaat.",
          ],
        },
      },
    },
  ];

  const pdcaMeta = {
    P: { label: "Plan",  color: "#a78bfa", glow: "rgba(167,139,250,0.20)", desc: "Wat ga ik doen?" },
    D: { label: "Do",    color: "#818cf8", glow: "rgba(129,140,248,0.20)", desc: "Hoe heb ik het uitgevoerd?" },
    C: { label: "Check", color: "#c084fc", glow: "rgba(192,132,252,0.20)", desc: "Wat zijn de bevindingen?" },
    A: { label: "Act",   color: "#e879f9", glow: "rgba(232,121,249,0.20)", desc: "Wat doe ik hiermee?" },
  };

  return (
    <main>
      <article className="content-page">

        {/* ── Header ── */}
        <div className="reveal">
          <a
            href="/jaar-2"
            style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}
          >
            ← Terug naar Jaar 2
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px", lineHeight: "1.1" }}>
            PDCA <span className="g-text">Cyclus</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#8080a0", marginBottom: "0", lineHeight: "1.7", maxWidth: "640px" }}>
            Aan de hand van de PDCA-cyclus wordt omschreven welke stappen en met welk gevoel de doelen zijn doorlopen.
          </p>
          <div className="divider" style={{ marginBottom: "48px", marginTop: "32px" }} />
        </div>

        {/* ── PDCA Legenda strip ── */}
        <div className="reveal" style={{ transitionDelay: "60ms", display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "56px" }}>
          {Object.entries(pdcaMeta).map(([letter, { label, color, desc }]) => (
            <div
              key={letter}
              style={{
                flex: "1 1 180px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(167,139,250,0.12)",
                borderRadius: "16px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div style={{
                width: "38px", height: "38px", borderRadius: "10px",
                background: `linear-gradient(135deg, ${color}33, ${color}11)`,
                border: `1px solid ${color}55`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", fontWeight: 900, color, flexShrink: 0,
              }}>
                {letter}
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#e2e2f0" }}>{label}</div>
                <div style={{ fontSize: "12px", color: "#6060a0", marginTop: "2px" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Doelen ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {doelen.map((doel, di) => (
            <div key={di} className="reveal" style={{ transitionDelay: `${100 + di * 80}ms` }}>

              {/* Doel title bar */}
              <div style={{
                display: "flex", alignItems: "center", gap: "20px",
                marginBottom: "28px", paddingBottom: "20px",
                borderBottom: `1px solid ${doel.accentBorder}`,
              }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
                  background: `linear-gradient(135deg, ${doel.accent}, #4f46e5)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", fontWeight: 900, color: "white",
                  boxShadow: `0 6px 24px ${doel.accent}44`,
                }}>
                  {doel.number}
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#6060a0", textTransform: "uppercase", marginBottom: "4px" }}>
                    Doel {doel.number}
                  </div>
                  <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", margin: 0, color: "#e2e2f0" }}>
                    {doel.title}
                  </h2>
                </div>
              </div>

              {/* PDCA 2×2 grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px",
              }}>
                {Object.entries(pdcaMeta).map(([letter, { label, color, glow, desc }]) => (
                  <div
                    key={letter}
                    style={{
                      background: `radial-gradient(ellipse at top left, ${glow}, transparent 60%), rgba(255,255,255,0.025)`,
                      border: `1px solid ${color}30`,
                      borderRadius: "20px",
                      padding: "28px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Big watermark letter */}
                    <div style={{
                      position: "absolute", right: "-8px", bottom: "-16px",
                      fontSize: "96px", fontWeight: 900,
                      color: `${color}08`,
                      lineHeight: 1, pointerEvents: "none", userSelect: "none",
                    }}>
                      {letter}
                    </div>

                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                      <div style={{
                        width: "34px", height: "34px", borderRadius: "9px", flexShrink: 0,
                        background: `${color}22`,
                        border: `1px solid ${color}55`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "14px", fontWeight: 900, color,
                      }}>
                        {letter}
                      </div>
                      <div>
                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#e2e2f0", lineHeight: 1 }}>{label}</div>
                        <div style={{ fontSize: "11px", color: "#5050a0", marginTop: "3px" }}>{desc}</div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: `linear-gradient(90deg, ${color}40, transparent)`, marginBottom: "18px" }} />

                    {/* Items */}
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 1 }}>
                     {doel.pdca[letter as keyof typeof doel.pdca].items.map((item, j) => (
                        <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                          <div style={{
                            width: "20px", height: "20px", borderRadius: "6px", flexShrink: 0, marginTop: "1px",
                            background: `${color}18`, border: `1px solid ${color}40`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: color }} />
                          </div>
                          <span style={{ fontSize: "14px", lineHeight: "1.7", color: "#b0b0cc" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer nav ── */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "80px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-2" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 2</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}