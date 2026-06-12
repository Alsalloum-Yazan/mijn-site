"use client";
import Link from "next/link";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

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
      <ImageModal src={imgOpen && img ? img : null} onClose={() => setImgOpen(false)} />

      <article className="content-page">

        {/* HEADER */}
        <div className="reveal">
          <a href="/posts" className="post-back-link">
            ← Alle opdrachten
          </a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Persoonlijke ontwikkeling
          </div>
          <h1 className="post-h1">
            {title}
          </h1>
          <div className="post-meta">
            <img
              src="/home/dian.png"
              alt="Dian"
              className="post-avatar"
            />
            <div>
              <p className="post-author-name">dcymvannoort</p>
              <p className="post-author-date">{date + " · " + readTime + " om te lezen"}</p>
            </div>
            <div className="post-meta-right">
              <span>{"♥ " + likes}</span>
              <span>{"💬 " + comments}</span>
            </div>
          </div>
        </div>

        {/* IMAGE — klikbaar */}
        {img && (
          <div
            className="reveal post-image-wrap"
            onClick={() => setImgOpen(true)}
          >
            <img
              src={img}
              alt={title}
              className="post-image-full"
            />
            <div
              className="post-zoom-overlay"
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
              <div className="zoom-icon">
                Vergroot afbeelding
              </div>
            </div>
          </div>
        )}

        {/* CONTENT */}
        {children}

        {/* ANDERE POSTS */}
        <div className="post-others">
          <h3 className="post-others-title">Andere opdrachten</h3>
          <div className="post-others-grid">
            {otherPosts.slice(0, 3).map((p, i) => (
              <a key={i} href={"/posts/" + p.slug} className="glow-card post-other-card">
                <div className="post-other-icon">
                  {p.title.charAt(0)}
                </div>
                <p className="post-other-title">{p.title}</p>
                <p className="post-other-more">Lees meer →</p>
              </a>
            ))}
          </div>
        </div>

        <div className="post-footer-nav">
          <a href="/posts" className="btn-ghost btn-sm">← Alle opdrachten</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>

      </article>
    </main>
  );
}
