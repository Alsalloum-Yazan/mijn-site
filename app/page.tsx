"use client";
import { useState } from "react";

export default function Home() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <main>

      {/* CV MODAL */}
      {cvOpen && (
        <div onClick={() => setCvOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: "800px", width: "100%" }}>
            <button onClick={() => setCvOpen(false)} style={{ position: "absolute", top: "-48px", right: "0", background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "50%", width: "36px", height: "36px", color: "#a78bfa", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
            <img src="/home/cv.png" alt="CV Dian van Noort" style={{ width: "100%", borderRadius: "16px", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }} />
          </div>
        </div>
      )}

      {/* ===== HERO ===== */}
      <section className="section" style={{ minHeight: "100vh", paddingTop: "120px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "80px", alignItems: "center" }}>

            <div className="reveal-left">
              <div className="badge" style={{ marginBottom: "32px" }}>
                <span className="badge-dot" />
                Avans Hogeschool Breda
              </div>
              <h1 style={{ marginBottom: "8px" }}>Hallo, ik ben</h1>
              <h1 className="g-text" style={{ marginBottom: "32px" }}>Dian van Noort.</h1>
              <p style={{ fontSize: "1.1rem", maxWidth: "480px", marginBottom: "48px", lineHeight: "1.9" }}>
                23 jaar, student Commerciële Economie aan Avans Hogeschool Breda.
                Afkomstig van de AD opleiding Marketingmanagement in 's-Hertogenbosch.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="/jaar-4" className="btn">Bekijk mijn werk</a>
                <a href="#over-mij" className="btn-ghost">Over mij</a>
              </div>
            </div>

            <div className="reveal-right">
              <div className="glow-card tilt" style={{ padding: "32px", borderRadius: "32px", textAlign: "center" }}>
                <div style={{ position: "relative", marginBottom: "24px" }}>
                  <div style={{ position: "absolute", inset: "-4px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #4f46e5)", opacity: 0.4, filter: "blur(12px)" }} />
                  <img src="/home/dian.png" alt="Dian van Noort" style={{ width: "160px", height: "160px", borderRadius: "50%", objectFit: "cover", margin: "0 auto", display: "block", border: "3px solid rgba(167,139,250,0.3)", position: "relative" }} />
                </div>
                <h3 style={{ marginBottom: "6px", fontSize: "1.3rem" }}>Dian van Noort</h3>
                <p style={{ fontSize: "13px", color: "#a78bfa", fontWeight: 600, marginBottom: "24px" }}>Commerciële Economie</p>
                <div className="divider" style={{ margin: "0 auto 24px" }} />
                {[
                  { label: "Studentnummer", value: "2207443" },
                  { label: "Leerjaar", value: "2, klas 3" },
                  { label: "School", value: "Avans Hogeschool" },
                  { label: "Locatie", value: "Breda" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: "rgba(167,139,250,0.05)", borderRadius: "10px", marginBottom: "6px", border: "1px solid rgba(167,139,250,0.08)" }}>
                    <span style={{ fontSize: "12px", color: "#6060a0", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#e2e2f0" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== STATS ===== */}
      <section className="section" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {[
              { num: "3", label: "Jaar studie" },
              { num: "20+", label: "Pagina's" },
              { num: "4", label: "Stages" },
              { num: "2024", label: "Afstuderen" },
            ].map((s, i) => (
              <div key={i} className="glow-card reveal" style={{ padding: "28px 24px", textAlign: "center", transitionDelay: String(i * 80) + "ms" }}>
                <div className="stat-num g-text">{s.num}</div>
                <div className="divider" style={{ margin: "10px auto 12px" }} />
                <p style={{ fontSize: "13px", color: "#6060a0" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== OVER MIJ ===== */}
      <section id="over-mij" className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

            <div className="reveal-left">
              <div className="badge" style={{ marginBottom: "28px" }}>
                <span className="badge-dot" />
                Over mij
              </div>
              <h2 style={{ marginBottom: "20px" }}>Mijn <span className="g-text">verhaal</span></h2>
              <div className="divider" style={{ marginBottom: "28px" }} />
              <p style={{ marginBottom: "20px" }}>
                Ik ben Dian van Noort, 23 jaar en sinds dit jaar (2024/2025) gestart op de hogeschool in Breda.
                Ik ben afkomstig van de AD opleiding Marketingmanagement in 's-Hertogenbosch.
              </p>
              <p style={{ marginBottom: "20px" }}>
                DianvannoortPL is een toegewijde website over persoonlijke ontwikkeling. Hier vind je opdrachten, reflecties en semesters.
              </p>
              <p style={{ marginBottom: "40px" }}>
                Mijn missie is om anderen te inspireren op hun pad naar persoonlijke groei.
                Ik geloof in de kracht van zelfreflectie en het delen van ervaringen.
              </p>

              <h3 style={{ marginBottom: "16px", fontSize: "1rem", color: "#a78bfa" }}>Huidig CV</h3>
              <div style={{ position: "relative", cursor: "pointer", marginBottom: "8px" }} onClick={() => setCvOpen(true)}>
                <img src="/home/cv.png" alt="CV Dian van Noort" style={{ width: "100%", borderRadius: "16px", boxShadow: "0 8px 32px rgba(109,40,217,0.2)", border: "1px solid var(--border)", display: "block" }} />
                <div
                  style={{ position: "absolute", inset: 0, background: "rgba(124,58,237,0.5)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0")}
                >
                  <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "50px", padding: "10px 24px", fontWeight: 600, fontSize: "14px", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
                    Vergroot CV
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#4040a0", textAlign: "center", marginBottom: "32px" }}>Klik om te vergroten</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { num: "1", text: "Afgestudeerd Marketingmanagement" },
                  { num: "2", text: "Huidige school Commerciële Economie" },
                  { num: "3", text: "Werkzaam bij Boozyshop en Sissy-Boy" },
                  { num: "4", text: "Woon sinds 1 april 2024 in Breda" },
                  { num: "5", text: "Allereerste stage in 2019" },
                  { num: "6", text: "Momenteel 4 stages afgerond" },
                ].map((item, i) => (
                  <div key={i} className="glow-card reveal" style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: "16px", transitionDelay: String(i * 60) + "ms" }}>
                    <div style={{ width: "32px", height: "32px", flexShrink: 0, background: "linear-gradient(135deg, #7c3aed, #4f46e5)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "white" }}>{item.num}</div>
                    <p style={{ fontSize: "13.5px", color: "#8080a0", margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right" style={{ position: "sticky", top: "140px" }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: "-20px", background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)", borderRadius: "50px" }} />
                <img src="/home/dian.png" alt="Dian van Noort" style={{ width: "100%", borderRadius: "32px", objectFit: "cover", maxHeight: "600px", boxShadow: "0 24px 80px rgba(109,40,217,0.2)", border: "1px solid var(--border)", position: "relative" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== POSTS ===== */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Persoonlijke ontwikkeling
            </div>
            <h2>Recente <span className="g-text">opdrachten</span></h2>
            <div className="divider" style={{ margin: "20px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }}>
            {[
              {
                img: null,
                title: "Persoonlijke ontwikkeling stage jaar 3",
                text: "Vanaf mijn 1e leerjaar op het HBO heb ik mij beziggehouden met mijn eigen ontwikkeling...",
                likes: 1, comments: 2,
                link: "/posts/persoonlijke-ontwikkeling",
                delay: 0
              },
              {
                img: "/home/energie.png",
                title: "Logboek - energie",
                text: "Ik heb de oefening energie gedaan, aan de hand van verschillende situaties die zich hebben voorgedaan.",
                likes: 1, comments: 0,
                link: "/posts/logboek-energie",
                delay: 120
              },
              {
                img: "/home/levenslijn.png",
                title: "Levenslijn oefening",
                text: "Hieronder is mijn levenslijn weergegeven, vol met hoogte- en dieptepunten.",
                likes: 2, comments: 2,
                link: "/posts/levenslijn",
                delay: 240
              },
            ].map((item, i) => (
              <a key={i} href={item.link} className="glow-card reveal" style={{ textDecoration: "none", color: "inherit", display: "block", overflow: "hidden", borderRadius: "24px", transitionDelay: String(item.delay) + "ms" }}>
                {item.img ? (
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
                ) : (
                  <div style={{ width: "100%", height: "120px", background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "48px", height: "48px", background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 800, color: "#a78bfa" }}>P</div>
                  </div>
                )}
                <div style={{ padding: "24px" }}>
                  <p style={{ fontSize: "11px", color: "#a78bfa", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "10px" }}>dcymvannoort</p>
                  <h3 style={{ marginBottom: "12px", fontSize: "1rem", lineHeight: "1.5" }}>{item.title}</h3>
                  <p style={{ fontSize: "13.5px", marginBottom: "20px", lineHeight: "1.7" }}>{item.text}</p>
                  <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "#4040a0", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                    <span>{"♥ " + item.likes}</span>
                    <span>{"💬 " + item.comments}</span>
                    <span style={{ marginLeft: "auto", color: "#a78bfa", fontWeight: 600 }}>Lees meer →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* LINK NAAR ALLE POSTS */}
          <div className="reveal" style={{ textAlign: "center" }}>
            <a href="/posts" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 40px" }}>
              Bekijk alle opdrachten
              <span style={{ fontSize: "18px" }}>→</span>
            </a>
          </div>

        </div>
      </section>

      <div className="glow-line" />

      {/* ===== JOURNEY ===== */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="badge" style={{ marginBottom: "20px" }}>
              <span className="badge-dot" />
              Studiejaren
            </div>
            <h2>Mijn <span className="g-text">journey</span></h2>
            <div className="divider" style={{ margin: "20px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { year: "4", title: "Jaar 4", sub: "Afstudeerjaar — 2024", text: "Reflecties, persoonlijke doelen, AI-protocol en eindpresentatie", link: "/jaar-4", delay: 0 },
              { year: "3", title: "Jaar 3 | Stage", sub: "Stage jaar — 2023", text: "Stage ervaring, bedrijfsproducten, VLOG en bewijslasten", link: "/jaar-3", delay: 130 },
              { year: "2", title: "Jaar 2", sub: "Tweede jaar — 2022", text: "Opdrachten, aquisitieset, persoonlijke doelen en reflecties", link: "/jaar-2", delay: 260 },
            ].map((item, i) => (
              <a key={i} href={item.link} className="flip-card reveal" style={{ transitionDelay: String(item.delay) + "ms" }}>
                <div className="flip-inner">
                  <div className="flip-front">
                    <div style={{ width: "56px", height: "56px", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 800, color: "#a78bfa", marginBottom: "20px" }}>{item.year}</div>
                    <h3 style={{ marginBottom: "6px" }}>{item.title}</h3>
                    <p style={{ fontSize: "12.5px", color: "#a78bfa", fontWeight: 600 }}>{item.sub}</p>
                  </div>
                  <div className="flip-back">
                    <p style={{ fontSize: "13.5px", marginBottom: "20px", lineHeight: "1.7", color: "#c0c0e0" }}>{item.text}</p>
                    <span style={{ color: "#a78bfa", fontWeight: 700, fontSize: "13px" }}>Bekijk meer →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <div className="glow-line" />
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "60px 24px" }}>
        <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
          <div style={{ position: "absolute", inset: "-8px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)", filter: "blur(8px)" }} />
          <img src="/home/dian.png" alt="Dian van Noort" style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(167,139,250,0.4)", position: "relative" }} />
        </div>
        <h3 className="g-text" style={{ marginBottom: "16px", fontSize: "1.5rem" }}>Dian van Noort</h3>
        <p style={{ fontSize: "13px", color: "#4040a0", marginBottom: "6px" }}>Studentnummer: 2207443 — Leerjaar 2, klas 3</p>
        <p style={{ fontSize: "13px", color: "#4040a0", marginBottom: "6px" }}>Hogeschool Avans — Commerciële Economie — Breda</p>
        <p style={{ fontSize: "13px", color: "#303060", marginTop: "24px" }}>Bedankt voor het lezen! :)</p>
      </footer>

    </main>
  );
}