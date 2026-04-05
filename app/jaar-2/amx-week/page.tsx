"use client";

export default function AmxWeekPage() {
  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a
            href="/jaar-4"
            style={{
              fontSize: "13px",
              color: "#a78bfa",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "32px",
            }}
          >
            ← Terug naar Jaar 4
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">AMX week</span>
          </h1>
          <div className="divider" style={{ marginBottom: "40px" }} />
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div
            className="glow-card"
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(167,139,250,0.2)",
              background: "rgba(255, 255, 255, 0.02)",
            }}
          >
            {/* Header Sectie (Banner stijl uit je afbeelding) */}
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  height: "200px",
                  background: "url('/images/beach-header.jpg')", // Zorg dat je een strand-bg hebt of laat dit weg
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(167,139,250,0.1)",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ec4899",
                    color: "white",
                    padding: "10px 24px",
                    fontSize: "24px",
                    fontWeight: "600",
                    borderRadius: "4px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  AMX week
                </div>
              </div>
            </div>

            {/* Content Sectie */}
            <div style={{ padding: "40px 24px" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  color: "#e2e2f0",
                  textAlign: "center",
                  marginBottom: "32px",
                  fontWeight: "500",
                }}
              >
                Bewijslasten deze week
              </h2>

              <div
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="/jaar2/amx-week/whatspp.png"
                  alt="WhatsApp Bewijslast"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigatie */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "space-between",
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(167,139,250,0.1)",
          }}
        >
          <a href="/jaar-4" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>
            ← Terug naar Jaar 4
          </a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>
            Terug naar home →
          </a>
        </div>
      </article>
    </main>
  );
}