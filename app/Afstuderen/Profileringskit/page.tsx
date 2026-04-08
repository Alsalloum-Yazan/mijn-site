"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function Profileringskit() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <div className="reveal">
          <a href="/afstuderen" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Terug naar Afstuderen
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Afstuderen — Profiel
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            <span className="g-text">Profileringskit</span>
          </h1>
          <div style={{ borderBottom: "1px solid rgba(167,139,250,0.1)", marginBottom: "40px", paddingBottom: "40px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.9" }}>
              Voor mijn afstuderen heb ik deze profileringskit samengesteld als een compleet beeld van wie ik ben, wat mij motiveert en waar mijn kwaliteiten liggen. In de verschillende onderdelen laat ik niet alleen zien wat ik heb gedaan, maar ook hoe ik mezelf presenteer en onderscheid richting mijn toekomstige werkveld.
            </p>
          </div>
        </div>

        {/* CV */}
        <div className="reveal glow-card" style={{ padding: "40px", borderRadius: "24px", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "8px" }}><span className="g-text">CV</span></h2>
          <div className="divider" style={{ marginBottom: "20px" }} />
          <p style={{ marginBottom: "24px" }}>
            In mijn cv beschrijf ik mijn stages, wat ik daar precies heb gedaan en welke bijbaantjes ik tot nu toe heb gehad. Zo is goed te zien welke praktische ervaring ik al heb opgebouwd.
          </p>
          <div onClick={() => setOpenImg("/afstuderen/Profileringskit/cv.png")} style={{ position: "relative", cursor: "zoom-in", borderRadius: "16px", overflow: "hidden" }}>
            <img src="/afstuderen/Profileringskit/cv.png" alt="CV" style={{ width: "100%", borderRadius: "16px", display: "block", border: "1px solid rgba(167,139,250,0.1)" }} />
            <div
              style={{ position: "absolute", inset: 0, background: "rgba(124,58,237,0)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.4)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "0"; }}
            >
              <div className="zoom-icon" style={{ opacity: 0, transition: "opacity 0.3s", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "50px", padding: "10px 24px", fontWeight: 600, fontSize: "14px", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
                Vergroot afbeelding
              </div>
            </div>
          </div>
          <p style={{ fontSize: "12px", color: "#4040a0", textAlign: "center", marginTop: "8px" }}>Klik om te vergroten</p>
        </div>

        {/* MOTIVATIEBRIEF */}
        <div className="reveal glow-card" style={{ padding: "40px", borderRadius: "24px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "8px" }}><span className="g-text">Motivatiebrief</span></h2>
          <div className="divider" style={{ marginBottom: "20px" }} />
          <p style={{ marginBottom: "24px" }}>
            Mijn motivatiebrief laat zien waarom ik enthousiast ben om terug te gaan naar LVNG en wat ik kan toevoegen.
          </p>
          <div onClick={() => setOpenImg("/afstuderen/Profileringskit/motivatie.png")} style={{ position: "relative", cursor: "zoom-in", borderRadius: "16px", overflow: "hidden" }}>
            <img src="/afstuderen/Profileringskit/motivatie.png" alt="Motivatiebrief" style={{ width: "100%", borderRadius: "16px", display: "block", border: "1px solid rgba(167,139,250,0.1)" }} />
            <div
              style={{ position: "absolute", inset: 0, background: "rgba(124,58,237,0)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.4)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0)"; const icon = e.currentTarget.querySelector(".zoom-icon") as HTMLElement; if (icon) icon.style.opacity = "0"; }}
            >
              <div className="zoom-icon" style={{ opacity: 0, transition: "opacity 0.3s", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "50px", padding: "10px 24px", fontWeight: 600, fontSize: "14px", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
                Vergroot afbeelding
              </div>
            </div>
          </div>
          <p style={{ fontSize: "12px", color: "#4040a0", textAlign: "center", marginTop: "8px" }}>Klik om te vergroten</p>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/Afstuderen" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Afstuderen</a>
          <a href="/afstuderen/eindreflectie" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Eindreflectie →</a>
        </div>

      </article>
    </main>
  );
}
