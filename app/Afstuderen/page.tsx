export default function Afstuderen() {
  return (
    <main>
      <div className="page-header">
        <div className="reveal">
          <a href="/" className="back-link-sm">
            ← Terug naar home
          </a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Avans Hogeschool Breda — 2024/2025
          </div>
          <h1 className="page-h1-large">
            <span className="g-text">Afstuderen</span>
          </h1>
          <p className="page-lead">
            Mijn afstudeerperiode — een compleet beeld van wie ik ben en waar mijn kwaliteiten liggen
          </p>
          <div className="divider divider-center" />
        </div>
      </div>

      <div className="year-index-wrap">

        {/* IMAGE */}
        <div className="reveal mb64">
          <img
            src="/afstuderen/afstuderen.jpg"
            alt="Afstuderen"
            className="afstuderen-img"
          />
        </div>

        {/* DOELEN */}
        <div className="intro-2-grid">
          <div className="glow-card reveal intro-card-lg">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Persoonlijk doel 1
            </div>
            <h3 className="h3-card-mb16">Presenteren</h3>
            <p style={{ fontSize: "14px" }}>Aan het einde van mijn afstudeerperiode presenteer ik helder en overtuigend, aangetoond met drie presentaties en feedback van minstens drie personen.</p>
          </div>

          <div className="glow-card reveal intro-card-lg">
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Persoonlijk doel 2
            </div>
            <h3 className="h3-card-mb16">Spaans leren</h3>
            <p style={{ fontSize: "14px" }}>Aan het einde van mijn afstudeerperiode beheers ik Spaans op A1-niveau, aangetoond met een 100-daagse streak op Duolingo.</p>
          </div>

          <div className="glow-card reveal intro-card-lg" style={{ gridColumn: "1 / -1" }}>
            <div className="badge badge-mb20">
              <span className="badge-dot" />
              Vakinhoudelijk doel
            </div>
            <h3 className="h3-card-mb16">SEO blogs schrijven</h3>
            <p style={{ fontSize: "14px" }}>Ik wil mij gedurende 17 weken ontwikkelen in het schrijven van geoptimaliseerde SEO blogs voor AllSens en Pure by Zalati.</p>
          </div>
        </div>

        {/* PROFILERINGSKIT CARD */}
        <div className="reveal section-heading-mb32">
          <h2 className="section-h2-small">
            Mijn <span className="g-text">profileringskit</span>
          </h2>
          <div className="divider divider-mb32" />
        </div>

        <a href="/Afstuderen/Profileringskit" className="glow-card reveal profileringskit-cta">
          <div className="profileringskit-cta-inner">
            <div className="profileringskit-icon">P</div>
            <div className="profileringskit-text">
              <h2 className="profileringskit-h2">Profileringskit</h2>
              <p className="profileringskit-p">CV, motivatiebrief en een compleet beeld van wie ik ben, wat mij motiveert en waar mijn kwaliteiten liggen.</p>
            </div>
            <div className="profileringskit-arrow">→</div>
          </div>
        </a>

      </div>

      <div className="year-footer-wrap">
        <a href="/" className="btn-ghost btn-sm-pad24">← Home</a>
      </div>

    </main>
  );
}

