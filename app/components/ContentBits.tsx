"use client";

import type { ReactNode } from "react";

export function ZoomImage({
  src,
  alt,
  setOpenImg,
}: {
  src: string;
  alt: string;
  setOpenImg: (src: string) => void;
}) {
  return (
    <>
      <div onClick={() => setOpenImg(src)} className="zoom-img-wrap">
        <img loading="lazy" decoding="async" src={src} alt={alt} className="zoom-img" />

        <div
          className="zoom-overlay"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(5, 84, 70, 0.28)";
            const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement;
            if (icon) icon.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(5, 84, 70, 0)";
            const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement;
            if (icon) icon.style.opacity = "0";
          }}
        >
          <div className="zoom-icon">Vergroot afbeelding</div>
        </div>
      </div>

      <p className="zoom-hint">Klik om te vergroten</p>
    </>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="external-link-btn-wrap">
      <a href={href} target="_blank" rel="noreferrer" className="external-link-btn">
        <span>{children}</span>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  );
}

export function VideoCard({ title, entryId, url }: { title: string; entryId: string; url: string }) {
  const thumbnail = `https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/${entryId}/width/600/height/340`;

  return (
    <div className="presentatie-videos-grid">
      <a href={url} target="_blank" rel="noopener noreferrer" className="glow-card card-hover presentatie-video-card">
        <div className="presentatie-video-thumb-wrap">
          <img
            loading="lazy"
            decoding="async"
            src={thumbnail}
            alt={title}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="presentatie-video-thumb-img"
          />

          <div className="presentatie-video-mymedia-badge">MYMEDIA</div>

          <div className="presentatie-video-play-overlay">
            <div
              className="presentatie-video-play-btn"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.12)";
                e.currentTarget.style.background = "rgba(5,84,70,0.72)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "rgba(0,0,0,0.45)";
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="presentatie-video-play-icon">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="presentatie-video-body">
          <h3 className="presentatie-video-title">{title}</h3>
          <p className="presentatie-video-link">Bekijk op Avans MyMedia →</p>
        </div>
      </a>
    </div>
  );
}

/** Plan / Do / Check / Act-blok: elke fase is een lijst alinea's. */
export function Pdca({ plan, doo, check, act }: { plan: string[]; doo: string[]; check: string[]; act: string[] }) {
  const phases: [string, string[]][] = [
    ["Plan", plan],
    ["Do", doo],
    ["Check", check],
    ["Act", act],
  ];

  return (
    <>
      {phases.map(([label, paragraphs]) => (
        <div key={label}>
          <h3 className="h3-sub">{label}</h3>
          {paragraphs.map((p, i) => (
            <p key={i} className="intro-divider">
              {p}
            </p>
          ))}
        </div>
      ))}
    </>
  );
}

export function Card({ title, last, children }: { title?: string; last?: boolean; children: ReactNode }) {
  return (
    <div className={`reveal glow-card intro-card ${last ? "mb40" : "mb24"}`}>
      {title && (
        <>
          <h2 className="h2-sub-lg">
            <span className="g-text">{title}</span>
          </h2>
          <div className="divider divider-mb20" />
        </>
      )}
      {children}
    </div>
  );
}

export function PageHeader({ badge, title, lead }: { badge: string; title: string; lead?: string }) {
  return (
    <div className="reveal">
      <a href="/Afstuderen" className="post-back-link">
        ← Terug naar Afstuderen
      </a>

      <div className="badge post-badge">
        <span className="badge-dot" />
        {badge}
      </div>

      <h1 className="post-h1">
        <span className="g-text">{title}</span>
      </h1>

      {lead && (
        <div className="content-header-border">
          <p className="content-text">{lead}</p>
        </div>
      )}
    </div>
  );
}

export function FooterNav({ prev, next }: { prev?: [string, string]; next?: [string, string] }) {
  return (
    <div className="post-footer-nav">
      <a href={prev ? prev[0] : "/Afstuderen"} className="btn-ghost btn-sm">
        ← {prev ? prev[1] : "Terug naar Afstuderen"}
      </a>
      {next && (
        <a href={next[0]} className="btn btn-sm">
          {next[1]} →
        </a>
      )}
    </div>
  );
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="table-wrap">
      <table className="content-table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
