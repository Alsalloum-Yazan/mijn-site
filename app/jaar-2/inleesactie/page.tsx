"use client";

export default function InleesactiePage() {
  const boeken = [
    {
      title: "Leer opkomen voor jezelf!",
      author: "Francina de Pater",
      description: "Technieken om assertiever te worden.",
      image: "/jaar2/inleesactie/opkomon.png" // Pas het pad aan naar jouw bestand
    },
    {
      title: "Omdenken op het werk",
      author: "Berthold Gunster",
      description: "Nieuwe perspectieven op professionele uitdagingen.",
      image: "/jaar2/inleesactie/denken.png" // Pas het pad aan naar jouw bestand
    }
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-4" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Terug naar Jaar 4
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Literatuur & Inzicht
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">Inleesactie</span>
          </h1>
          <div className="divider" style={{ marginBottom: "40px" }} />
          <p style={{ marginBottom: "40px", fontSize: "1.1rem", color: "#e2e2f0" }}>
            Ter verdieping van mijn leerdoelen op het gebied van assertiviteit en professionele houding heb ik mij ingelezen in de volgende bronnen:
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "32px",
            maxWidth: "900px" 
          }}>
            {boeken.map((boek, i) => (
              <div 
                key={i} 
                className="glow-card" 
                style={{ 
                  padding: "20px", 
                  borderRadius: "24px", 
                  border: "1px solid rgba(167,139,250,0.2)",
                  background: "rgba(255, 255, 255, 0.02)"
                }}
              >
                <div style={{ 
                  width: "100%", 
                  borderRadius: "12px", 
                  overflow: "hidden", 
                  marginBottom: "20px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
                }}>
                  <img 
                    src={boek.image} 
                    alt={boek.title} 
                    style={{ width: "100%", height: "auto", display: "block" }} 
                  />
                </div>
                <h3 style={{ fontSize: "1.2rem", color: "#e2e2f0", marginBottom: "8px" }}>{boek.title}</h3>
                <p style={{ fontSize: "14px", color: "#a78bfa", marginBottom: "12px", fontWeight: "600" }}>{boek.author}</p>
                <p style={{ fontSize: "14px", color: "#8080a0", margin: 0, lineHeight: "1.5" }}>{boek.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigatie */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-4" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 4</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Naar Home →</a>
        </div>
      </article>
    </main>
  );
}