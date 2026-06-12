"use client";
import Link from "next/link";

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
          <a href="/jaar-4" className="j4-back-link-accent">← Terug naar Jaar 4</a>
          <div className="badge j4-badge-mb24">
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 className="j4-h1">
            Mijn <span className="g-text">video&apos;s</span>
          </h1>
          <div className="divider j4-divider-mb40" />

          <p className="content-intro-text">
            Extra pagina met nogmaals alle video&apos;s.
            <br /><span className="content-intro-sub">Klik op een kaart om de video te openen in Avans MyMedia.</span>
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div className="j4-videos-grid">
            {videos.map((video, i) => (
              <a
                key={i}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card card-hover j4-video-card-border"
              >
                <div className="j4-video-thumb-wrap">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="j4-video-thumb-img"
                  />

                  <div className="j4-video-mymedia-badge">MYMEDIA</div>

                  <div className="j4-video-play-overlay">
                    <div
                      className="j4-video-play-btn"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.12)";
                        e.currentTarget.style.background = "rgba(124,58,237,0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background = "rgba(0,0,0,0.45)";
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="j4-video-play-icon">
                        <path d="M8 5V19L19 12L8 5Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="j4-video-body">
                  <h3 className="j4-video-title">{video.title}</h3>
                  <p className="j4-video-link">Bekijk op Avans MyMedia →</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-nav-border08">
          <a href="/jaar-4" className="btn-ghost btn-sm">← Terug naar Jaar 4</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>
      </article>
    </main>
  );
}

