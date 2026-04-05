export default function Afstuderen() {
  return (
    <main>
      <div className="page-header">
        <div className="reveal">
          <a href="/" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            ← Terug naar home
          </a>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Avans Hogeschool Breda — 2024/2025
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", marginBottom: "16px" }}>
            <span className="g-text">Afstuderen</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 24px", fontSize: "1.1rem" }}>
            Mijn afstudeerperiode — een compleet beeld van wie ik ben en waar mijn kwaliteiten liggen
          </p>
          <div className="divider" style={{ margin: "0 auto" }} />
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1160px", margin: "0 auto", padding: "0 24px 80px" }}>

        {/* IMAGE */}
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <img
            src="/afstuderen/afstuderen.jpg"
            alt="Afstuderen"
            style={{ width: "100%", borderRadius: "24px", maxHeight: "400px", objectFit: "cover", border: "1px solid rgba(167,139,250,0.15)", boxShadow: "0 24px 80px rgba(109,40,217,0.2)" }}
          />
        </div>

        {/* DOELEN */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "64px" }}>
          <div className="glow-card reveal" style={{ padding: "36px", borderRadius: "24px" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Persoonlijk doel 1
            </div>
            <h3 style={{ marginBottom: "16px", fontSize: "1rem" }}>Presenteren</h3>
            <p style={{ fontSize: "14px" }}>Aan het einde van mijn afstudeerperiode presenteer ik helder en overtuigend, aangetoond met drie presentaties en feedback van minstens drie personen.</p>
          </div>

          <div className="glow-card reveal" style={{ padding: "36px", borderRadius: "24px" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Persoonlijk doel 2
            </div>
            <h3 style={{ marginBottom: "16px", fontSize: "1rem" }}>Spaans leren</h3>
            <p style={{ fontSize: "14px" }}>Aan het einde van mijn afstudeerperiode beheers ik Spaans op A1-niveau, aangetoond met een 100-daagse streak op Duolingo.</p>
          </div>

          <div className="glow-card reveal" style={{ padding: "36px", borderRadius: "24px", gridColumn: "1 / -1" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Vakinhoudelijk doel
            </div>
            <h3 style={{ marginBottom: "16px", fontSize: "1rem" }}>SEO blogs schrijven</h3>
            <p style={{ fontSize: "14px" }}>Ik wil mij gedurende 17 weken ontwikkelen in het schrijven van geoptimaliseerde SEO blogs voor AllSens en Pure by Zalati.</p>
          </div>
        </div>

        {/* PROFILERINGSKIT CARD */}
        <div className="reveal" style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
            Mijn <span className="g-text">profileringskit</span>
          </h2>
          <div className="divider" style={{ marginBottom: "32px" }} />
        </div>

        <a href="/Afstuderen/Profileringskit" className="glow-card reveal" style={{ display: "block", textDecoration: "none", color: "inherit", padding: "48px", borderRadius: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ width: "72px", height: "72px", flexShrink: 0, background: "linear-gradient(135deg, #7c3aed, #4f46e5)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: 800, color: "white", boxShadow: "0 12px 32px rgba(124,58,237,0.35)" }}>P</div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "1.6rem", marginBottom: "10px" }}>Profileringskit</h2>
              <p style={{ fontSize: "14px", marginBottom: "0" }}>CV, motivatiebrief en een compleet beeld van wie ik ben, wat mij motiveert en waar mijn kwaliteiten liggen.</p>
            </div>
            <div style={{ fontSize: "24px", color: "#a78bfa", fontWeight: 700 }}>→</div>
          </div>
        </a>

      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px 80px" }}>
        <a href="/" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 24px" }}>← Home</a>
      </div>

    </main>
  );
}