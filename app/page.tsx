"use client";
import { useState } from "react";

export default function Home() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <main>
      {/* RESPONSIVE CSS */}
      <style jsx global>{`
        .responsive-grid {
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr; /* Mobiel eerst */
        }
        @media (min-width: 992px) {
          .responsive-grid.hero { grid-template-columns: 1.1fr 0.9fr; gap: 80px; }
          .responsive-grid.stats { grid-template-columns: repeat(4, 1fr); }
          .responsive-grid.about { grid-template-columns: 1fr 1fr; gap: 80px; }
          .responsive-grid.three-col { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 600px) and (max-width: 991px) {
          .responsive-grid.stats { grid-template-columns: repeat(2, 1fr); }
          .responsive-grid.three-col { grid-template-columns: repeat(2, 1fr); }
        }
        .mobile-hide { display: block; }
        @media (max-width: 991px) {
          .mobile-hide { display: none; }
          .section { padding-top: 60px !important; padding-bottom: 60px !important; }
          h1 { fontSize: 2.5rem !important; }
        }
      `}</style>

      {/* CV MODAL */}
      {cvOpen && (
        <div onClick={() => setCvOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: "800px", width: "100%" }}>
            <button onClick={() => setCvOpen(false)} style={{ position: "absolute", top: "-55px", right: "0", background: "rgba(167,139,250,0.2)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "50%", width: "44px", height: "44px", color: "white", fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
            <img src="/home/cv.png" alt="CV" style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }} />
          </div>
        </div>
      )}

      {/* ===== HERO ===== */}
      <section className="section" style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="responsive-grid hero" style={{ alignItems: "center" }}>
            <div className="reveal-left">
              <div className="badge" style={{ marginBottom: "32px" }}>
                <span className="badge-dot" />
                Avans Hogeschool Breda
              </div>
              <h1 style={{ marginBottom: "8px" }}>Hallo, ik ben</h1>
              <h1 className="g-text" style={{ marginBottom: "32px" }}>Dian van Noort.</h1>
              <p style={{ fontSize: "1.1rem", maxWidth: "480px", marginBottom: "48px", lineHeight: "1.9" }}>
                23 jaar, student Commerciële Economie aan Avans Hogeschool Breda.
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
                  <img src="/home/dian.png" alt="Dian" style={{ width: "140px", height: "140px", borderRadius: "50%", objectFit: "cover", margin: "0 auto", display: "block", position: "relative", border: "3px solid rgba(167,139,250,0.3)" }} />
                </div>
                <h3 style={{ marginBottom: "6px" }}>Dian van Noort</h3>
                <p style={{ fontSize: "13px", color: "#a78bfa", fontWeight: 600, marginBottom: "24px" }}>Commerciële Economie</p>
                <div className="divider" style={{ margin: "0 auto 24px" }} />
                {[
                  { label: "Studentnummer", value: "2207443" },
                  { label: "Leerjaar", value: "2, klas 3" },
                  { label: "School", value: "Avans" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "rgba(167,139,250,0.05)", borderRadius: "10px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "12px", color: "#6060a0" }}>{item.label}</span>
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
      <section className="section" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="responsive-grid stats">
            {[
              { num: "3", label: "Jaar studie" },
              { num: "20+", label: "Pagina's" },
              { num: "4", label: "Stages" },
              { num: "2024", label: "Afstuderen" },
            ].map((s, i) => (
              <div key={i} className="glow-card" style={{ padding: "28px 24px", textAlign: "center" }}>
                <div className="stat-num g-text" style={{ fontSize: "2rem", fontWeight: "800" }}>{s.num}</div>
                <div className="divider" style={{ margin: "10px auto 12px" }} />
                <p style={{ fontSize: "13px", color: "#6060a0" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== OVER MIJ ===== */}
      <section id="over-mij" className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="responsive-grid about" style={{ alignItems: "start" }}>
            <div className="reveal-left">
              <div className="badge" style={{ marginBottom: "28px" }}>Over mij</div>
              <h2>Mijn <span className="g-text">verhaal</span></h2>
              <div className="divider" style={{ marginBottom: "28px" }} />
              <p style={{ marginBottom: "20px" }}>Ik ben Dian van Noort, 23 jaar en student aan Avans Breda.</p>
              
              <h3 style={{ marginBottom: "16px", color: "#a78bfa" }}>Huidig CV</h3>
              <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setCvOpen(true)}>
                <img src="/home/cv.png" alt="CV" style={{ width: "100%", borderRadius: "16px", border: "1px solid rgba(167,139,250,0.2)" }} />
              </div>
              <p style={{ fontSize: "12px", textAlign: "center", margin: "10px 0 32px", color: "#6060a0" }}>Klik om te vergroten</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Afgestudeerd Marketingmanagement", "Werkzaam bij Boozyshop", "4 stages afgerond"].map((text, i) => (
                  <div key={i} className="glow-card" style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #7c3aed, #4f46e5)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ fontSize: "13.5px", margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right mobile-hide" style={{ position: "sticky", top: "120px" }}>
              <img src="/home/dian.png" alt="Dian" style={{ width: "100%", borderRadius: "32px", boxShadow: "0 24px 80px rgba(109,40,217,0.2)" }} />
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== POSTS & JOURNEY ===== */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Recente <span className="g-text">opdrachten</span></h2>
          <div className="responsive-grid three-col">
            {/* Kaarten hier... */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="glow-card" style={{ padding: "20px" }}>
                <div style={{ height: "140px", background: "#1a1a2e", borderRadius: "12px", marginBottom: "15px" }}></div>
                <h3 style={{ fontSize: "1.1rem" }}>Opdracht {item}</h3>
                <p style={{ fontSize: "13px", color: "#6060a0" }}>Korte omschrijving van de opdracht...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "60px 24px", background: "rgba(0,0,0,0.2)" }}>
        <h3 className="g-text">Dian van Noort</h3>
        <p style={{ fontSize: "12px", opacity: 0.6 }}>© 2026 — Portfolio</p>
      </footer>
    </main>
  );
}