"use client";
import { useState } from "react";

export default function Home() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <main style={{ background: "#050505", color: "#fff", minHeight: "100vh" }}>
      {/* RESPONSIVE & STICKY CSS */}
      <style jsx global>{`
        /* Zorgt dat grids op mobiel 1 kolom worden */
        @media (max-width: 991px) {
          .responsive-grid { 
            grid-template-columns: 1fr !important; 
            gap: 40px !important; 
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-section {
            padding-top: 80px !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
        

      `}</style>



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
      <section className="section hero-section" style={{ minHeight: "100vh", paddingTop: "120px" }}>
        <div className="container">
          {/* Toegevoegde class: responsive-grid */}
          <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "80px", alignItems: "center" }}>

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
          {/* Toegevoegde class: stats-grid */}
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
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
          <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

            <div className="reveal-left">
              <div className="badge" style={{ marginBottom: "28px" }}>
                <span className="badge-dot" />
                Over mij
              </div>
              <h2 style={{ marginBottom: "20px" }}>Mijn <span className="g-text">verhaal</span></h2>
              <div className="divider" style={{ marginBottom: "28px" }} />
              <p style={{ marginBottom: "20px" }}>
                Ik ben Dian van Noort, 23 jaar en sinds dit jaar (2024/2025) gestart op de hogeschool in Breda.
              </p>

              <h3 style={{ marginBottom: "16px", fontSize: "1rem", color: "#a78bfa" }}>Huidig CV</h3>
              <div style={{ position: "relative", cursor: "pointer", marginBottom: "8px" }} onClick={() => setCvOpen(true)}>
                <img src="/home/cv.png" alt="CV Dian van Noort" style={{ width: "100%", borderRadius: "16px", boxShadow: "0 8px 32px rgba(109,40,217,0.2)", border: "1px solid var(--border)", display: "block" }} />
                <div className="hide-mobile"
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
                ].map((item, i) => (
                  <div key={i} className="glow-card reveal" style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", flexShrink: 0, background: "linear-gradient(135deg, #7c3aed, #4f46e5)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "white" }}>{item.num}</div>
                    <p style={{ fontSize: "13.5px", color: "#8080a0", margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rechter foto verbergen we op mobiel voor betere flow, of hij komt onderaan */}
            <div className="reveal-right hide-mobile" style={{ position: "sticky", top: "140px" }}>
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
            <h2>Recente <span className="g-text">opdrachten</span></h2>
          </div>

          <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }}>
             {[
               {
                 title: "Persoonlijke ontwikkeling stage jaar 3",
                //  desc: "Een overzicht van mijn professionele profiel en competenties.",
                img:"",
                 url: "/posts/persoonlijke-ontwikkeling"
               },
               {
                 title: "Logboek - energie",
                //  desc: "Verdieping in conceptontwikkeling en strategische keuzes.",
                 img:"/home/energie.png",
                 url: "/posts/logboek-energie/"
               },
               {
                 title: "Levenslijn oefening",
                //  desc: "Onderzoek en ontwikkeling van een verantwoord AI-gebruiksprotocol.",
                 img:"/home/levenslijn.png",
                 url: "/posts/levenslijn"
               }
             ].map((post, i) => (
                 <a key={i} href={post.url} className="glow-card card-hover" style={{padding: '20px', textDecoration: 'none', color: 'inherit', display: 'block'}}>
              <div style={{
                height: '150px', 
                background: post.img ? `url(${post.img}) center/cover no-repeat` : 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.05))', 
                border: '1px solid rgba(167,139,250,0.08)', 
                borderRadius: '12px', 
                marginBottom: '15px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {!post.img && <span style={{fontSize: '32px', opacity: 0.5}}>📁</span>}
              </div>
                     <h3 style={{marginBottom: '8px'}}>{post.title}</h3>
                     <p style={{fontSize: '13px', opacity: 0.7, margin: 0, lineHeight: 1.6}}>{post.desc}</p>
                 </a>
             ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <div className="glow-line" />

      {/* ===== FOOTER ===== */}
      <footer style={{ position: "relative", zIndex: 1, padding: "80px 24px 40px" }}>
        <div className="container">
          
          <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 1fr", gap: "60px", alignItems: "start", marginBottom: "60px" }}>
            
            {/* Kolom 1: Info & Socials */}
            <div>
              <h3 className="g-text" style={{ marginBottom: "16px", fontSize: "1.5rem" }}>Dian van Noort</h3>
              <p style={{ fontSize: "14px", color: "#6060a0", lineHeight: "1.8", maxWidth: "300px", marginBottom: "24px" }}>
                Student Commerciële Economie aan de Avans Hogeschool Breda. Altijd bezig met groei en nieuwe uitdagingen.
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <a href="https://linkedin.com/in/jouw-profiel" target="_blank" rel="noreferrer" className="glow-card" style={{ width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "18px", transition: "transform 0.2s" }}>
                  in
                </a>
                <a href="mailto:dian.vannoort@example.nl" className="glow-card" style={{ width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "18px", transition: "transform 0.2s" }}>
                  ✉
                </a>
              </div>
            </div>

            {/* Kolom 2: Navigatie (Gebaseerd op layout.tsx) */}
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#a78bfa", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "24px" }}>Navigatie</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "Home", url: "/" },
                  { label: "Over mij", url: "#over-mij" },
                  { label: "Opdrachten", url: "/posts" },
                  { label: "Jaar 2", url: "/jaar-2" },
                  { label: "Jaar 3 | Stage", url: "/jaar-3" },
                  { label: "Jaar 4", url: "/jaar-4" },
                  { label: "Afstuderen", url: "/Afstuderen" }
                ].map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    style={{ 
                      fontSize: "14px", 
                      color: "#8080a0", 
                      textDecoration: "none", 
                      transition: "color 0.3s, transform 0.2s",
                      display: "inline-block"
                    }}
                    onMouseEnter={e => { e.target.style.color = "#fff"; e.target.style.transform = "translateX(4px)"; }}
                    onMouseLeave={e => { e.target.style.color = "#8080a0"; e.target.style.transform = "translateX(0)"; }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Kolom 3: Snelle Acties & Contact */}
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#a78bfa", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "24px" }}>Snelle Acties</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                
                {/* CV Knop */}
                <button 
                  onClick={() => setCvOpen(true)} 
                  style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "12px", padding: "12px 20px", color: "#a78bfa", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.3s", width: "100%", textAlign: "left" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(167,139,250,0.2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(167,139,250,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  📄 Bekijk mijn CV
                </button>

                {/* Contact Info */}
                <div>
                  <p style={{ fontSize: "12px", color: "#4040a0", marginBottom: "4px" }}>E-mail</p>
                  <a href="mailto:dian.vannoort@example.nl" style={{ fontSize: "14px", color: "#e2e2f0", textDecoration: "none" }} onMouseEnter={e => e.target.style.color = "#a78bfa"} onMouseLeave={e => e.target.style.color = "#e2e2f0"}>
                    dian.vannoort@example.nl
                  </a>
                </div>
                <div>
                  <p style={{ fontSize: "12px", color: "#4040a0", marginBottom: "4px" }}>Opleiding</p>
                  <p style={{ fontSize: "14px", color: "#e2e2f0", margin: 0 }}>Commerciële Economie</p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", color: "#4040a0", marginBottom: "4px" }}>Locatie</p>
                  <p style={{ fontSize: "14px", color: "#e2e2f0", margin: 0 }}>Avans Hogeschool, Breda</p>
                </div>

              </div>
            </div>

          </div>

          {/* Copyright Balk */}
          <div className="divider" style={{ marginBottom: "24px", opacity: 0.3 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <p style={{ fontSize: "12px", color: "#4040a0", margin: 0 }}>
              © {new Date().getFullYear()} Dian van Noort. Alle rechten voorbehouden.
            </p>
            <p style={{ fontSize: "12px", color: "#4040a0", margin: 0 }}>
              Gebouwd door <span style={{ color: "#a78bfa" }}>Yazan</span> ☕
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}