const posts = [
  { slug: "persoonlijke-ontwikkeling", title: "Persoonlijke ontwikkeling stage jaar 3", date: "27 jun 2025", time: "3 minuten", img: "/home/levenslijn.png", likes: 1, comments: 2 },
  { slug: "logboek-energie", title: "Logboek - energie", date: "8 jan 2025", time: "1 minuten", img: "/home/energie.png", likes: 1, comments: 0 },
  { slug: "levenslijn", title: "Levenslijn oefening", date: "2 okt 2024", time: "1 minuten", img: "/home/levenslijn.png", likes: 2, comments: 2 },
  { slug: "toekomstdroom", title: "Toekomstdroom", date: "2 okt 2024", time: "3 minuten", img: null, likes: 0, comments: 0 },
  { slug: "waardenoefening", title: "Waardenoefening", date: "2 okt 2024", time: "5 minuten", img: null, likes: 0, comments: 0 },
  { slug: "ikigai", title: "Wat vind je leuk? — Ikigai", date: "23 sep 2024", time: "6 minuten", img: "/posten/Wat vind je leuk.webp", likes: 0, comments: 0 },
  { slug: "cv-over-1-jaar", title: "CV over 1 jaar", date: "24 sep 2024", time: "1 minuten", img: "/posten/CV over 1 jaar.webp", likes: 0, comments: 0 },
  { slug: "persoonlijke-doelen-periode-1", title: "Persoonlijke ontwikkelingsdoelen periode 1", date: "23 sep 2024", time: "2 minuten", img: null, likes: 0, comments: 0 },
];

export default function PostsOverzicht() {
  return (
    <main>
      <div className="page-header">
        <div className="reveal">
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            dcymvannoort
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "16px" }}>
            Alle <span className="g-text">opdrachten</span>
          </h1>
          <div className="divider" style={{ margin: "0 auto" }} />
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1160px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {posts.map((post, i) => {
            const link = "/posts/" + post.slug;
            const delay = String(i * 60) + "ms";
            return (
              <a key={i} href={link} className="glow-card reveal" style={{ textDecoration: "none", color: "inherit", display: "block", overflow: "hidden", borderRadius: "24px", transitionDelay: delay }}>
                {post.img ? (
                  <img src={post.img} alt={post.title} style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }} />
                ) : (
                  <div style={{ width: "100%", height: "100px", background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.15))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "48px", height: "48px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 800, color: "#a78bfa" }}>
                      {post.title.charAt(0)}
                    </div>
                  </div>
                )}
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "12px", fontSize: "11px", color: "#4040a0", flexWrap: "wrap" }}>
                    <span style={{ color: "#a78bfa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>dcymvannoort</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.time}</span>
                  </div>
                  <h3 style={{ marginBottom: "16px", fontSize: "1rem", lineHeight: "1.5", color: "#e2e2f0" }}>{post.title}</h3>
                  <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "#4040a0", borderTop: "1px solid rgba(167,139,250,0.08)", paddingTop: "16px" }}>
                    <span>{"♥ " + post.likes}</span>
                    <span>{"💬 " + post.comments}</span>
                    <span style={{ marginLeft: "auto", color: "#a78bfa", fontWeight: 600 }}>Lees meer →</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}