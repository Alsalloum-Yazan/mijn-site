"use client";
import Link from "next/link";

const SectionDivider = ({ label }: { label: string }) => (
  <div className="section-divider">
    <div className="section-divider-line-l-bright" />
    <span className="section-divider-badge">{label}</span>
    <div className="section-divider-line-r-bright" />
  </div>
);

export default function BijlagenPage() {
  return (
    <main>
      <article className="content-page">

        {/* Header */}
        <div className="reveal">
          <a href="/jaar-4" className="j4-back-link">← Terug naar Jaar 4</a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 className="j4-h1-sm">
            Bijlagen <span className="accent-span">van de hoofdtekst</span>
          </h1>
          <p className="j4-header-text">
            Vanwege het feit dat geacht wordt de volledige platte tekst ook op de website te zetten.
          </p>
          <div className="divider divider-mb48" />
        </div>

        {/* Toelichting */}
        <div className="reveal bijlagen-toelichting-mb" style={{ transitionDelay: "60ms" }}>
          <SectionDivider label="Toelichting" />
          <div className="glow-card pdca-card-style">
            <p className="j4-text-mb">
              Er is gekozen voor een Word-document, omdat de bijlage veel screenshots bevat, welke niet worden overgenomen op de website.
            </p>
            <p className="j4-text">
              De bijlagen zijn een extra toevoeging op de overige pagina&apos;s.
            </p>
          </div>
        </div>

        {/* Download */}
        <div className="reveal bijlagen-doc-section-mb" style={{ transitionDelay: "80ms" }}>
          <SectionDivider label="Document" />
          <a
            href="/jaar4/bijlagen/Bijlagen voor op website.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="bijlagen-doc-link"
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.08)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.04)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <div className="bijlagen-doc-icon">📄</div>
            <div className="bijlagen-doc-link-text">
              <div className="bijlagen-doc-title">Bijlagen voor op website.docx</div>
              <div className="bijlagen-doc-sub">Word-document — klik om te openen</div>
            </div>
            <div className="bijlagen-doc-btn">↗ Openen</div>
          </a>
        </div>

        {/* Footer nav */}
        <div className="footer-nav-border08">
          <a href="/jaar-4" className="btn-ghost btn-sm">← Terug naar Jaar 4</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>

      </article>
    </main>
  );
}

