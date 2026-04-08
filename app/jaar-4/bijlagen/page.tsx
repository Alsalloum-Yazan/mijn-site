"use client";

const SectionDivider = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(167,139,250,0.4), transparent)" }} />
    <span style={{
      fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "#eeeeee",
      textTransform: "uppercase", whiteSpace: "nowrap",
      background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)",
      borderRadius: "20px", padding: "4px 12px",
    }}>
      {label}
    </span>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(270deg, rgba(167,139,250,0.4), transparent)" }} />
  </div>
);

export default function BijlagenPage() {
  return (
    <main>
      <article className="content-page">

        {/* Header */}
        <div className="reveal">
          <a href="/jaar-4" style={{
            fontSize: "13px", color: "#ffff", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px", opacity: 0.8,
          }}>
            ← Terug naar Jaar 4
          </a>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px", lineHeight: "1.1" }}>
            Bijlagen <span style={{ color: "#a78bfa" }}>van de hoofdtekst</span>
          </h1>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#eeeeee", marginBottom: "32px", maxWidth: "600px" }}>
            Vanwege het feit dat geacht wordt de volledige platte tekst ook op de website te zetten.
          </p>
          <div className="divider" style={{ marginBottom: "48px" }} />
        </div>

        {/* Toelichting */}
        <div className="reveal" style={{ transitionDelay: "60ms", marginBottom: "40px" }}>
          <SectionDivider label="Toelichting" />
          <div className="glow-card" style={{
            borderRadius: "16px",
            border: "1px solid rgba(167,139,250,0.12)",
            padding: "24px 28px",
            background: "linear-gradient(135deg, rgba(167,139,250,0.04) 0%, rgba(0,0,0,0) 100%)",
          }}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: "0 0 12px" }}>
              Er is gekozen voor een Word-document, omdat de bijlage veel screenshots bevat, welke niet worden overgenomen op de website.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: 0 }}>
              De bijlagen zijn een extra toevoeging op de overige pagina's.
            </p>
          </div>
        </div>

        {/* Download */}
        <div className="reveal" style={{ transitionDelay: "80ms", marginBottom: "48px" }}>
          <SectionDivider label="Document" />
          <a
            href="/jaar4/bijlagen/Bijlagen voor op website.docx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "16px",
              background: "rgba(167,139,250,0.04)",
              border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: "16px", padding: "20px 24px",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.08)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.04)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <div style={{
              width: "48px", height: "48px", flexShrink: 0,
              background: "rgba(167,139,250,0.12)",
              border: "1px solid rgba(167,139,250,0.25)",
              borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "22px",
            }}>
              📄
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#eeeeee", marginBottom: "4px" }}>
                Bijlagen voor op website.docx
              </div>
              <div style={{ fontSize: "12px", color: "#a78bfa" }}>
                Word-document — klik om te openen
              </div>
            </div>
            <div style={{
              flexShrink: 0, fontSize: "12px", fontWeight: 700,
              color: "#a78bfa", background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: "8px", padding: "6px 14px",
            }}>
              ↗ Openen
            </div>
          </a>
        </div>

        {/* Footer nav */}
        <div style={{
          display: "flex", gap: "12px", justifyContent: "space-between",
          marginTop: "64px", paddingTop: "32px",
          borderTop: "1px solid rgba(167,139,250,0.08)",
        }}>
          <a href="/jaar-4" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 4</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}
