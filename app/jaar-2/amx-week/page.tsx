"use client";
import Link from "next/link";

export default function AmxWeekPage() {
  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-2" className="post-back-link">
            ← Terug naar Jaar 2
          </a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 className="post-h1">
            Mijn <span className="g-text">AMX week</span>
          </h1>
          <div className="divider divider-mb40" />
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div className="glow-card amx-card-inner">
            <div className="amx-banner">
              <div className="amx-banner-label">AMX week</div>
            </div>

            <div className="amx-content">
              <h2 className="amx-content-title">Bewijslasten deze week</h2>
              <div className="amx-img-wrap">
                <img
                  src="/jaar2/amx-week/whatspp.png"
                  alt="WhatsApp Bewijslast"
                  className="amx-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigatie */}
        <div className="footer-nav-mt64">
          <a href="/jaar-2" className="btn-ghost btn-sm">← Terug naar Jaar 2</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>
      </article>
    </main>
  );
}

