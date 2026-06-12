"use client";
import Link from "next/link";

export default function AquisitiesetPage() {
  const documenten = [
    {
      id: "cv",
      label: "CV",
      title: "Curriculum Vitae",
      icon: "📄",
      accent: "#000000",
      accentLight: "rgba(0, 0, 0, 0.12)",
      accentBorder: "rgba(0, 0, 0, 0.12)",
      src: "/jaar2/aquisitieset/cv.png",
      beschrijving: "Een overzicht van mijn opleiding, werkervaring en vaardigheden.",
    },
    {
      id: "motivatie",
      label: "Motivatiebrief",
      title: "Motivatiebrief",
      icon: "✉️",
      accent: "#000000",
      accentLight: "rgba(0, 0, 0, 0.12)",
      accentBorder: "rgba(0, 0, 0, 0.12)",
      src: "/jaar2/aquisitieset/motivatie.png",
      beschrijving: "Mijn motivatiebrief gericht aan een potentieel stagebedrijf.",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      title: "LinkedIn Profiel",
      icon: "💼",
      accent: "#000000",
      accentLight: "rgba(0, 0, 0, 0.12)",
      accentBorder: "rgba(0, 0, 0, 0.12)",
      src: "/jaar2/aquisitieset/linkedin.png",
      beschrijving: "Mijn LinkedIn profiel als onderdeel van mijn online aanwezigheid.",
    },
  ];

  return (
    <main>
      <article className="content-page">

        {/* Header */}
        <div className="reveal">
          <a href="/jaar-2" className="post-back-link">
            ← Terug naar Jaar 2
          </a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 className="post-h1">
            Mijn <span className="g-text">acquisitie&shy;set</span>
          </h1>
          <div className="divider divider-mb24" />
          <p className="p-intro-muted">
            Als onderdeel van mijn persoonlijke doelen heb ik een complete acquisitieset samengesteld om mezelf professioneel te presenteren bij potentiële stagebedrijven. Hieronder vind je mijn CV, motivatiebrief en LinkedIn profiel.
          </p>
        </div>

        {/* Documenten */}
        <div className="aquisitie-docs">
          {documenten.map((doc, i) => (
            <div key={doc.id} className="reveal" style={{ transitionDelay: `${80 + i * 80}ms` }}>

              {/* Label balk */}
              <div className="doc-header">
                <div className="doc-icon-wrap" style={{
                  background: `linear-gradient(135deg, ${doc.accent}33, ${doc.accent}11)`,
                  border: `1px solid ${doc.accent}55`,
                }}>
                  {doc.icon}
                </div>
                <div>
                  <div className="doc-label-small">{doc.label}</div>
                  <h2 className="doc-title">{doc.title}</h2>
                </div>
              </div>

              <p className="doc-beschrijving">{doc.beschrijving}</p>

              {/* Afbeelding kaart — dynamic colors stay inline */}
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
                <div className="doc-chrome-bar" style={{ borderBottomColor: doc.accentBorder }}>
                  {["#ff5f57","#ffbd2e","#28c840"].map((c, j) => (
                    <div key={j} className="doc-chrome-dot" style={{ background: c }} />
                  ))}
                  <span className="doc-chrome-title">{doc.title}</span>
                </div>

                {/* Beeld */}
                <div className="doc-img-pad">
                  <img loading="lazy" decoding="async" 
                    src={doc.src}
                    alt={doc.title}
                    className="doc-img"
                    style={{ boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${doc.accentBorder}` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="footer-nav-mt80">
          <a href="/jaar-2" className="btn-ghost btn-sm">← Terug naar Jaar 2</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>

      </article>
    </main>
  );
}

