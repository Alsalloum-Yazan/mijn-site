"use client";
import Link from "next/link";

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
          <a href="/jaar-3" className="post-back-link">← Terug naar Jaar 3</a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Persoonlijk Leiderschap
          </div>
          <h1 className="post-h1">
            Mijn <span className="g-text">Vlogs</span>
          </h1>
          <div className="divider divider-mb40" />

          <p className="p-intro-light">
            Hieronder vind je de vlogs met betrekking tot mijn voortgang en reflecties.
            <br /><span className="span-muted">Klik op de kaart om de vlog te starten.</span>
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div className="videos-grid">
            {vlogs.map((vlog, i) => (
              <a key={i} href={vlog.url} target="_blank" rel="noopener noreferrer" className="glow-card card-hover video-card">
                <div className="video-thumb-wrap">
                  <img
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                    className="video-thumb-img"
                  />
                  <div className="video-badge">VLOG</div>
                  <div className="video-play-overlay">
                    <div className="video-play-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="video-play-icon">
                        <path d="M8 5V19L19 12L8 5Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="video-body">
                  <h3 className="video-title">{vlog.title}</h3>
                  <p className="video-desc">{vlog.description}</p>
                  <p className="video-link">Bekijken op MyMedia <span className="span-arrow">→</span></p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Navigatie */}
        <div className="footer-nav-mt64">
          <a href="/jaar-3" className="btn-ghost btn-sm">← Terug naar Jaar 3</a>
          <Link href="/" className="btn btn-sm">Naar Home →</Link>
        </div>
      </article>
    </main>
  );
}

