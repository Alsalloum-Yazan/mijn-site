"use client";

export default function InleesactiePage() {
  const boeken = [
    {
      title: "Leer opkomen voor jezelf!",
      author: "Francina de Pater",
      description: "Technieken om assertiever te worden.",
      image: "/jaar2/inleesactie/opkomon.png"
    },
    {
      title: "Omdenken op het werk",
      author: "Berthold Gunster",
      description: "Nieuwe perspectieven op professionele uitdagingen.",
      image: "/jaar2/inleesactie/denken.png"
    }
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-2" className="post-back-link">
            ← Terug naar Jaar 2
          </a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Literatuur & Inzicht
          </div>
          <h1 className="post-h1">
            Mijn <span className="g-text">Inleesactie</span>
          </h1>
          <div className="divider divider-mb40" />
          <p className="p-intro-light">
            Ter verdieping van mijn leerdoelen op het gebied van assertiviteit en professionele houding heb ik mij ingelezen in de volgende bronnen:
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div className="book-grid">
            {boeken.map((boek, i) => (
              <div key={i} className="glow-card book-card">
                <div className="book-img-wrap">
                  <img src={boek.image} alt={boek.title} className="book-img" />
                </div>
                <h3 className="book-title">{boek.title}</h3>
                <p className="book-author">{boek.author}</p>
                <p className="book-desc">{boek.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigatie */}
        <div className="footer-nav-mt64">
          <a href="/jaar-2" className="btn-ghost btn-sm">← Terug naar Jaar 2</a>
          <a href="/" className="btn btn-sm">Naar Home →</a>
        </div>
      </article>
    </main>
  );
}

