const posts = [
  { slug: "persoonlijke-ontwikkeling", title: "Persoonlijke ontwikkeling stage jaar 3", date: "27 jun 2025", time: "3 minuten", img: null, likes: 1, comments: 2 },
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
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            dcymvannoort
          </div>
          <h1 className="posts-hero-h1">
            Alle <span className="g-text">opdrachten</span>
          </h1>
          <div className="divider divider-center" />
        </div>
      </div>
      <div className="posts-content-wrap">
        <div className="posts-grid">
          {posts.map((post, i) => {
            const link = "/posts/" + post.slug;
            return (
              <a key={i} href={link} className="glow-card reveal posts-card" style={{ transitionDelay: String(i * 60) + "ms" }}>
                {post.img ? (
                  <img src={post.img} alt={post.title} className="posts-card-img" />
                ) : (
                  <div className="posts-card-no-img">
                    <div className="posts-card-icon">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                )}
                <div className="posts-card-body">
                  <div className="posts-card-meta">
                    <span className="posts-card-author">dcymvannoort</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.time}</span>
                  </div>
                  <h3 className="posts-card-title">{post.title}</h3>
                  <div className="posts-card-stats">
                    <span>{"♥ " + post.likes}</span>
                    <span>{"💬 " + post.comments}</span>
                    <span className="posts-card-more">Lees meer →</span>
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
