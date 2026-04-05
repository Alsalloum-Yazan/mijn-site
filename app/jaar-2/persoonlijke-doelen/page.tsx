"use client";

export default function PersoonlijkeDoelenPage() {
  const doelen = [
    {
      number: "01",
      title: "Assertiviteit",
      text: "Er zijn verschillende acties ondernomen door in kaart te brengen hoe naar mijn eigen beeld mijn assertiviteit is. Vervolgens heb ik verschillende testen uitgevoerd om te kijken hoe mijn assertiviteit daadwerkelijk is. Tot slot heb ik gewerkt aan mijn assertiviteit.",
    },
    {
      number: "02",
      title: "Opzoek naar een stage",
      text: "Allereerst ga ik doelen opstellen van naar wat voor soort stage ik opzoek ben, zodat ik doelgericht kan gaan zoeken. Vervolgens ga ik mijn CV veranderen, omdat de stijl van mijn CV niet meer past bij mijn huidige stijl en dient mijn CV terug meer up to date te zijn. Tot slot wil ik verschillende stagebedrijven contacteren en in tegenstelling tot andere jaren niet afwachtend zijn, maar meerdere bedrijven berichten. Als laatste stap wil ik herinneringen sturen na het niets terug horen na een week (in werkdagen).",
    }
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-2" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Terug naar Jaar 2
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Persoonlijke <span className="g-text">doelen</span>
          </h1>
          <div className="divider" style={{ marginBottom: "40px" }} />
          
          <p style={{ marginBottom: "40px", fontSize: "1.1rem", lineHeight: "1.8" }}>
            Ik heb ervoor gekozen om mijn stage uit te lichten omdat het een belangrijke leerervaring voor me was. Tijdens deze periode heb ik veel praktische kennis opgedaan en mezelf professioneel ontwikkeld. Daarnaast wil ik werken aan mijn assertiviteit, zodat ik beter kan communiceren, zelfverzekerder kan optreden en mijn ideeën en standpunten duidelijk kan overbrengen.
          </p>

          {/* Afbeelding */}
          <div className="reveal" style={{ marginBottom: "64px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <img 
              src="/jaar2/Persoonlijke doelen/Persoonlijke doelen.png" 
              alt="Bescherming tegen de zon op het strand" 
              style={{ width: "100%", borderRadius: "24px", border: "1px solid rgba(167,139,250,0.2)", display: "block", boxShadow: "0 16px 40px rgba(109,40,217,0.15)" }} 
            />

          </div>
        </div>

        {/* Doelen List */}
        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
            {doelen.map((doel, i) => (
              <div key={i} className="glow-card tilt" style={{ padding: "40px", position: "relative", overflow: "hidden" }}>
                {/* Background Watermark Number */}
                <div style={{ position: "absolute", right: "-5%", top: "-15%", fontSize: "160px", fontWeight: 900, color: "rgba(167,139,250,0.04)", pointerEvents: "none", lineHeight: 1, userSelect: "none" }}>
                  {doel.number}
                </div>
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <div style={{ width: "40px", height: "40px", background: "linear-gradient(135deg, #7c3aed, #4f46e5)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: "white", boxShadow: "0 4px 16px rgba(124,58,237,0.3)" }}>
                      {doel.number}
                    </div>
                    <h2 style={{ fontSize: "1.6rem", margin: 0 }}>{doel.title}</h2>
                  </div>
                  <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#e2e2f0", margin: 0 }}>
                    {doel.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-2" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 2</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}
