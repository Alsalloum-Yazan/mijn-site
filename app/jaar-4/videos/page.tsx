"use client";

export default function VideosPage() {
  const videos = [
    {
      title: "Videopitch bedrijfsbezoek",
      url: "https://mymedia.avans.nl/media/Videopitch+bedrijfsbezoek/0_qq24tyie",
      thumbnail: "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_qq24tyie/width/600/height/340"
    },
    {
      title: "Videopitch | NGO",
      url: "https://mymedia.avans.nl/media/Videopitch+%7C+NGO/0_l0ofomdx",
      thumbnail: "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_l0ofomdx/width/600/height/340"
    },
    {
      title: "Videopitch Breda",
      url: "https://mymedia.avans.nl/media/Videopitch+Breda/0_hgagtbl1",
      thumbnail: "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_hgagtbl1/width/600/height/340"
    },
    {
      title: "Persoonlijke pitch",
      url: "https://mymedia.avans.nl/media/Persoonlijke+pitch/0_tiga4qf8",
      thumbnail: "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_tiga4qf8/width/600/height/340"
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
            Jaar 4
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">video's</span>
          </h1>
          <div className="divider" style={{ marginBottom: "40px" }} />

          <p style={{ marginBottom: "40px", fontSize: "1.1rem", color: "#e2e2f0" }}>
            Extra pagina met nogmaals alle video's.
            <br /><span style={{ fontSize: "14px", color: "#8080a0" }}>Klik op een kaart om de video te openen in Avans MyMedia.</span>
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {videos.map((video, i) => (
              <a
                key={i}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card card-hover"
                style={{ display: "block", textDecoration: "none", padding: "16px", borderRadius: "24px", position: "relative", overflow: "hidden", border: "1px solid rgba(167,139,250,0.2)" }}
              >
                {/* Thumbnail met fallback */}
                <div style={{ width: "100%", height: "180px", borderRadius: "16px", marginBottom: "20px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.15))" }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "16px" }}
                  />

                  {/* MYMEDIA badge */}
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.5)", borderRadius: "8px", padding: "4px 8px", fontSize: "11px", fontWeight: 700, color: "white", backdropFilter: "blur(4px)" }}>
                    MYMEDIA
                  </div>

                  {/* Play button overlay */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div
                      style={{ width: "56px", height: "56px", background: "rgba(0,0,0,0.45)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.25)", transition: "transform 0.2s, background 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.background = "rgba(124,58,237,0.6)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "rgba(0,0,0,0.45)"; }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "3px" }}>
                        <path d="M8 5V19L19 12L8 5Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "0 8px 8px" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", color: "#e2e2f0", lineHeight: "1.4" }}>{video.title}</h3>
                  <p style={{ fontSize: "13px", color: "#a78bfa", margin: 0, fontWeight: 600 }}>Bekijk op Avans MyMedia →</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-4" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 4</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>
      </article>
    </main>
  );
}