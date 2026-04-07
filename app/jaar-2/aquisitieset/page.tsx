"use client";

export default function AquisitiesetPage() {
  const documenten = [
    {
      id: "cv",
      label: "CV",
      title: "Curriculum Vitae",
      icon: "📄",
      accent: "#7c3aed",
      accentLight: "rgba(124,58,237,0.12)",
      accentBorder: "rgba(124,58,237,0.25)",
      src: "/jaar2/aquisitieset/cv.png",
      beschrijving: "Een overzicht van mijn opleiding, werkervaring en vaardigheden.",
    },
    {
      id: "motivatie",
      label: "Motivatiebrief",
      title: "Motivatiebrief",
      icon: "✉️",
      accent: "#4f46e5",
      accentLight: "rgba(79,70,229,0.12)",
      accentBorder: "rgba(79,70,229,0.25)",
      src: "/jaar2/Aquisitieset/motivatie.png",
      beschrijving: "Mijn motivatiebrief gericht aan een potentieel stagebedrijf.",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      title: "LinkedIn Profiel",
      icon: "💼",
      accent: "#6d28d9",
      accentLight: "rgba(109,40,217,0.12)",
      accentBorder: "rgba(109,40,217,0.25)",
      src: "/jaar2/Aquisitieset/linkedin.png",
      beschrijving: "Mijn LinkedIn profiel als onderdeel van mijn online aanwezigheid.",
    },
  ];

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
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">acquisitie&shy;set</span>
          </h1>
          <div className="divider" style={{ marginBottom: "24px" }} />
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#8080a0", marginBottom: "48px", maxWidth: "640px" }}>
            Als onderdeel van mijn persoonlijke doelen heb ik een complete acquisitieset samengesteld om mezelf professioneel te presenteren bij potentiële stagebedrijven. Hieronder vind je mijn CV, motivatiebrief en LinkedIn profiel.
          </p>
        </div>

        {/* ── Documenten ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {documenten.map((doc, i) => (
            <div key={doc.id} className="reveal" style={{ transitionDelay: `${80 + i * 80}ms` }}>

              {/* Label balk */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                  background: `linear-gradient(135deg, ${doc.accent}33, ${doc.accent}11)`,
                  border: `1px solid ${doc.accent}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "20px",
                }}>
                  {doc.icon}
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#6060a0", textTransform: "uppercase", marginBottom: "3px" }}>
                    {doc.label}
                  </div>
                  <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", margin: 0, color: "#e2e2f0" }}>
                    {doc.title}
                  </h2>
                </div>
              </div>

              <p style={{ fontSize: "14px", color: "#8080a0", marginBottom: "20px", lineHeight: "1.7" }}>
                {doc.beschrijving}
              </p>

              {/* Afbeelding kaart */}
              <div
                className="glow-card"
                style={{
                  borderRadius: "24px",
                  border: `1px solid ${doc.accentBorder}`,
                  background: doc.accentLight,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Topbalk */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "14px 20px",
                  borderBottom: `1px solid ${doc.accentBorder}`,
                  background: "rgba(0,0,0,0.15)",
                }}>
                  {["#ff5f57","#ffbd2e","#28c840"].map((c, j) => (
                    <div key={j} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c, opacity: 0.7 }} />
                  ))}
                  <span style={{ fontSize: "12px", color: "#6060a0", marginLeft: "8px", fontWeight: 600 }}>
                    {doc.title}
                  </span>
                </div>

                {/* Beeld */}
                <div style={{ padding: "24px", display: "flex", justifyContent: "center" }}>
                  <img
                    src={doc.src}
                    alt={doc.title}
                    style={{
                      width: "100%",
                      maxWidth: "680px",
                      borderRadius: "12px",
                      boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${doc.accentBorder}`,
                      display: "block",
                    }}
                  />
                </div>
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