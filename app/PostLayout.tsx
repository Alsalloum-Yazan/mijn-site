"use client";
import { useState } from "react";

const allPosts = [
  { slug: "persoonlijke-ontwikkeling", title: "Persoonlijke ontwikkeling stage jaar 3" },
  { slug: "logboek-energie", title: "Logboek - energie" },
  { slug: "levenslijn", title: "Levenslijn oefening" },
  { slug: "toekomstdroom", title: "Toekomstdroom" },
  { slug: "waardenoefening", title: "Waardenoefening" },
  { slug: "ikigai", title: "Wat vind je leuk? — Ikigai" },
  { slug: "cv-over-1-jaar", title: "CV over 1 jaar" },
  { slug: "persoonlijke-doelen-periode-1", title: "Persoonlijke ontwikkelingsdoelen periode 1" },
];

export default function PostLayout({
  slug, title, date, readTime, img, likes, comments, children
}: {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  img?: string | null;
  likes: number;
  comments: number;
  children: React.ReactNode;
}) {
  const [imgOpen, setImgOpen] = useState(false);
  const otherPosts = allPosts.filter(p => p.slug !== slug);

  return (
    <main>

      {/* IMAGE MODAL */}
      {imgOpen && img && (
        <div
          onClick={() => setImgOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(16px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px", cursor: "zoom-out"
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: "1000px", width: "100%" }}>
            <button
              onClick={() => setImgOpen(false)}
              style={{
                position: "absolute", top: "-48px", right: "0",
                background: "rgba(167,139,250,0.15)",
                border: "1px solid rgba(167,139,250,0.3)",
                borderRadius: "50%", width: "36px", height: "36px",
                color: "#a78bfa", fontSize: "18px", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >×</button>
            <img
              src={img}
              alt={title}
              style={{ width: "100%", borderRadius: "16px", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
            />
          </div>
        </div>
      )}

      <article className="content-page">

        {/* HEADER */}
        <div className="reveal">
          <a href="/posts" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Alle opdrachten
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Persoonlijke ontwikkeling
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            {title}
          </h1>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid rgba(167,139,250,0.1)" }}>
            <img
              src="/home/dian.png"
              alt="Dian"
              style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(167,139,250,0.3)" }}
            />
            <div>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#e2e2f0", margin: 0 }}>dcymvannoort</p>
              <p style={{ fontSize: "12px", color: "#4040a0", margin: 0 }}>{date + " · " + readTime + " om te lezen"}</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: "16px", fontSize: "13px", color: "#4040a0" }}>
              <span>{"♥ " + likes}</span>
              <span>{"💬 " + comments}</span>
            </div>
          </div>
        </div>

        {/* IMAGE — klikbaar */}
        {img && (
          <div
            className="reveal"
            onClick={() => setImgOpen(true)}
            style={{ marginBottom: "40px", cursor: "zoom-in", position: "relative" }}
          >
            <img
              src={img}
              alt={title}
              style={{ width: "100%", borderRadius: "20px", border: "1px solid rgba(167,139,250,0.1)", display: "block", transition: "transform 0.3s, box-shadow 0.3s" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(124,58,237,0.0)",
              borderRadius: "20px",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.3s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.35)";
                const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLDivElement;
                if (icon) icon.style.opacity = "1";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.0)";
                const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLDivElement;
                if (icon) icon.style.opacity = "0";
              }}
            >
              <div className="zoom-icon" style={{
                opacity: 0, transition: "opacity 0.3s",
                background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)",
                borderRadius: "50px", padding: "10px 24px",
                fontWeight: 600, fontSize: "14px", color: "white",
                border: "1px solid rgba(255,255,255,0.2)"
              }}>
                Vergroot afbeelding
              </div>
            </div>
          </div>
        )}

        {/* CONTENT */}
        {children}

        {/* ANDERE POSTS */}
        <div style={{ marginTop: "64px", paddingTop: "48px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <h3 style={{ marginBottom: "24px", fontSize: "1rem", color: "#a78bfa" }}>Andere opdrachten</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {otherPosts.slice(0, 3).map((p, i) => (
              <a key={i} href={"/posts/" + p.slug} className="glow-card" style={{ padding: "20px", textDecoration: "none", color: "inherit", display: "block", borderRadius: "16px" }}>
                <div style={{ width: "32px", height: "32px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800, color: "#a78bfa", marginBottom: "12px" }}>
                  {p.title.charAt(0)}
                </div>
                <p style={{ fontSize: "13.5px", color: "#c0c0e0", lineHeight: "1.5", margin: 0 }}>{p.title}</p>
                <p style={{ fontSize: "12px", color: "#a78bfa", marginTop: "8px", fontWeight: 600 }}>Lees meer →</p>
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/posts" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Alle opdrachten</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}