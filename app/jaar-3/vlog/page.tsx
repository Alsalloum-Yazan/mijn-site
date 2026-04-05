"use client";

export default function VlogPage() {
  const vlogs = [
    {
      title: "VLOG | PL | Herkansing | Terugblik + concrete acties",
      url: "https://mymedia.avans.nl/media/VLOG+%7C+PL+%7C+Herkansing+%7C+Terugblik+%2B+concrete+acties/0_hzs6pmrj",
      thumbnail: "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_hzs6pmrj/width/600/height/340",
      description: "Rechtstreekse vlog over de reflectie en actiepunten."
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
            Persoonlijk Leiderschap
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">Vlogs</span>
          </h1>
          <div className="divider" style={{ marginBottom: "40px" }} />

          <p style={{ marginBottom: "40px", fontSize: "1.1rem", color: "#e2e2f0" }}>
            Hieronder vind je de vlogs met betrekking tot mijn voortgang en reflecties.
            <br /><span style={{ fontSize: "14px", color: "#8080a0" }}>Klik op de kaart om de vlog te starten.</span>
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {vlogs.map((vlog, i) => (
              <a
                key={i}
                href={vlog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card card-hover"
                style={{ display: "block", textDecoration: "none", padding: "16px", borderRadius: "24px", position: "relative", overflow: "hidden", border: "1px solid rgba(167,139,250,0.2)" }}
              >
                {/* Thumbnail Container */}
                <div style={{ width: "100%", height: "200px", borderRadius: "16px", marginBottom: "20px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.15))" }}>
                  <img
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "16px" }}
                  />

                  {/* VLOG Badge */}
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(167,139,250,0.8)", borderRadius: "8px", padding: "4px 10px", fontSize: "11px", fontWeight: 800, color: "white", backdropFilter: "blur(4px)" }}>
                    VLOG
                  </div>

                  {/* Play Button Overlay */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="play-btn" style={{ width: "60px", height: "60px", background: "rgba(0,0,0,0.5)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "4px" }}>
                        <path d="M8 5V19L19 12L8 5Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "0 8px 8px" }}>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "10px", color: "#e2e2f0", lineHeight: "1.4" }}>
                    {vlog.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#8080a0", marginBottom: "16px", lineHeight: "1.5" }}>
                    {vlog.description}
                  </p>
                  <p style={{ fontSize: "13px", color: "#a78bfa", margin: 0, fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                    Bekijken op MyMedia <span style={{ fontSize: "16px" }}>→</span>
                  </p>
                </div>
              </a>
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