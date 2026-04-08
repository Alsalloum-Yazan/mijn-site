"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

const SectionDivider = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(167,139,250,0.4), transparent)" }} />
    <span style={{
      fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "#eeeeee",
      textTransform: "uppercase", whiteSpace: "nowrap",
      background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)",
      borderRadius: "20px", padding: "4px 12px",
    }}>
      {label}
    </span>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(270deg, rgba(167,139,250,0.4), transparent)" }} />
  </div>
);

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li style={{
    display: "flex", gap: "10px", alignItems: "flex-start",
    color: "#eeeeee", fontSize: "14px", lineHeight: "1.7", padding: "6px 0",
    borderBottom: "1px solid rgba(255,255,255,0.03)",
  }}>
    <span style={{
      flexShrink: 0, marginTop: "5px", width: "6px", height: "6px",
      borderRadius: "50%", background: "rgba(167,139,250,0.6)",
      boxShadow: "0 0 6px rgba(167,139,250,0.4)", display: "inline-block",
    }} />
    <span>{children}</span>
  </li>
);

export default function AIProtocolPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/jaar4/ai-protocol/ai1.png",
    "/jaar4/ai-protocol/ai2.png",
    "/jaar4/ai-protocol/ai3.png",
    "/jaar4/ai-protocol/ai4.png",
    "/jaar4/ai-protocol/ai5.png",
    "/jaar4/ai-protocol/ai6.png",
  ];

  const cardStyle: React.CSSProperties = {
    borderRadius: "16px",
    border: "1px solid rgba(167,139,250,0.12)",
    padding: "24px 28px",
    background: "linear-gradient(135deg, rgba(167,139,250,0.04) 0%, rgba(0,0,0,0) 100%)",
  };

  return (
    <main>
      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />

      <article className="content-page">

        {/* Header */}
        <div className="reveal">
          <a href="/jaar-4" style={{
            fontSize: "13px", color: "#ffff", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px", opacity: 0.8,
          }}>
            ← Terug naar Jaar 4
          </a>
          <div className="badge" style={{ marginBottom: "20px" }}>
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px", lineHeight: "1.1" }}>
            AI-protocol
          </h1>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#eeeeee", marginBottom: "32px", maxWidth: "600px" }}>
            Voor dit verslag is <strong style={{ color: "#eeeeee" }}>AI-niveau 2</strong> (ideeën en structuur) toegepast.
            AI heeft geen inhoudelijke informatie gegenereerd — alle bevindingen komen uit mijn eigen keuzes, analyses, experimenten en reflecties.
          </p>
          <div className="divider" style={{ marginBottom: "48px" }} />
        </div>

        {/* AI is gebruikt om */}
        <div className="reveal" style={{ transitionDelay: "60ms", marginBottom: "40px" }}>
          <SectionDivider label="AI is gebruikt om" />
          <div className="glow-card" style={cardStyle}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              <BulletItem>Structuur aan te brengen in de hoofdstukopbouw</BulletItem>
              <BulletItem>De teksten logisch te laten aansluiten op de doelen</BulletItem>
              <BulletItem>Formuleringen te verduidelijken</BulletItem>
              <BulletItem>De reflecties compacter, vloeiender en leesbaarder te maken</BulletItem>
            </ul>
          </div>
        </div>

        {/* Hoe is AI ingezet */}
        <div className="reveal" style={{ transitionDelay: "80ms", marginBottom: "40px" }}>
          <SectionDivider label="Hoe is AI ingezet?" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "16px" }}>
            {[
              { icon: "🧩", title: "Structuurpartner", desc: "Ideeën voor een logische opbouw van acties, PDCA-cycli en reflecties" },
              { icon: "✏️", title: "Redactionele hulp", desc: "Verbeteren van zinnen, samenhang en leesbaarheid" },
              { icon: "💬", title: "Sparringpartner", desc: "Helpen bij het preciezer formuleren van mijn denkproces" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="glow-card" style={{ ...cardStyle, display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ fontSize: "20px" }}>{icon}</div>
                <div style={{ fontWeight: 600, fontSize: "13px", color: "#ffff" }}>{title}</div>
                <div style={{ fontSize: "13px", color: "#ffff", lineHeight: "1.6" }}>{desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#eeeeee", fontStyle: "italic" }}>
            De uiteindelijke inhoud, keuzes en formuleringen heb ik steeds zelf afgewogen en herschreven.
          </p>
        </div>

        {/* Wat heb ik zelf gedaan */}
        <div className="reveal" style={{ transitionDelay: "100ms", marginBottom: "40px" }}>
          <SectionDivider label="Wat heb ik zelf gedaan?" />
          <div className="glow-card" style={cardStyle}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              <BulletItem>Het persoonlijke doel en vakinhoudelijke doel volledig zelf opgesteld</BulletItem>
              <BulletItem>Alle analyses, reflecties, resultaten en inzichten uit eigen observaties, logboeken en experimenten gehaald</BulletItem>
              <BulletItem>De PDCA-cycli zelf ontworpen, toegepast en geïnterpreteerd</BulletItem>
              <BulletItem>Alle voorbeelden, keuzes en verbeterpunten komen uit mijn eigen ervaring</BulletItem>
              <BulletItem>Suggesties van AI vertaald naar mijn eigen schrijfstijl</BulletItem>
            </ul>
          </div>
        </div>

        {/* Wat klopte wel/niet */}
        <div className="reveal" style={{ transitionDelay: "120ms", marginBottom: "40px" }}>
          <SectionDivider label="Wat klopte wel / niet?" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
            <div className="glow-card" style={{ ...cardStyle, borderColor: "rgba(134,239,172,0.15)" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#86efac", marginBottom: "10px", textTransform: "uppercase" }}>
                ✓ Nuttig
              </div>
              <p style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.7", margin: 0 }}>
                Suggesties over structuur en helderheid. Lange stukken zijn hierdoor logischer opgebouwd en beter leesbaar geworden.
              </p>
            </div>
            <div className="glow-card" style={{ ...cardStyle, borderColor: "rgba(251,113,133,0.12)" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#fb7185", marginBottom: "10px", textTransform: "uppercase" }}>
                ✗ Niet gebruikt
              </div>
              <p style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.7", margin: 0 }}>
                Inhoudelijke aanvullingen of kant-en-klare theorie — om AI-niveau 3 te vermijden. Te formeel/puntig herschreven naar persoonlijke tekst.
              </p>
            </div>
          </div>
        </div>

        {/* Welke andere bronnen */}
        <div className="reveal" style={{ transitionDelay: "140ms", marginBottom: "40px" }}>
          <SectionDivider label="Bronnen ter controle" />
          <div className="glow-card" style={cardStyle}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              <BulletItem>Mijn logboeken en reflectietabellen van de acties</BulletItem>
              <BulletItem>De analyses van de commercials in het neuromarketing-onderzoek</BulletItem>
              <BulletItem>De enquêteresultaten van het föhn-experiment</BulletItem>
              <BulletItem>Notities uit eerder opgedane kennis van neuromarketing en besluitvorming</BulletItem>
            </ul>
          </div>
        </div>

        {/* Wat heb ik wel/niet overgenomen */}
        <div className="reveal" style={{ transitionDelay: "160ms", marginBottom: "40px" }}>
          <SectionDivider label="Wat heb ik wel / niet overgenomen?" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
            <div className="glow-card" style={{ ...cardStyle, borderColor: "rgba(134,239,172,0.15)" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#86efac", marginBottom: "10px", textTransform: "uppercase" }}>
                ✓ Wel overgenomen
              </div>
              <p style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.7", margin: 0 }}>
                Structuurvoorstellen, suggesties voor duidelijkere zinnen en opbouw van PDCA.
              </p>
            </div>
            <div className="glow-card" style={{ ...cardStyle, borderColor: "rgba(251,113,133,0.12)" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#fb7185", marginBottom: "10px", textTransform: "uppercase" }}>
                ✗ Niet overgenomen
              </div>
              <p style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.7", margin: 0 }}>
                Inhoudelijke theorie-toevoegingen, nieuwe interpretaties of vooraf ingevulde uitkomsten.
              </p>
            </div>
          </div>
        </div>

        {/* Prompts */}
        <div className="reveal" style={{ transitionDelay: "180ms", marginBottom: "40px" }}>
          <SectionDivider label="Gebruikte prompts" />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Welke kopjes zouden goed passen bij dit hoofdstuk zodat het overzichtelijk blijft?",
              "Kun je mijn reflectie herschrijven zodat het meer een verhaal wordt?",
              "Denk mee over een passende overgang tussen de PDCA-stappen die ik hier beschrijf.",
              "Maak mijn tekst duidelijker en vloeiender zonder nieuwe inhoud toe te voegen.",
            ].map((prompt, i) => (
              <div key={i} style={{
                display: "flex", gap: "12px", alignItems: "flex-start",
                background: "rgba(167,139,250,0.04)",
                border: "1px solid rgba(167,139,250,0.1)",
                borderRadius: "10px", padding: "12px 16px",
              }}>
                <span style={{
                  flexShrink: 0, fontSize: "10px", fontWeight: 700, color: "#a78bfa",
                  background: "rgba(167,139,250,0.12)", borderRadius: "6px",
                  padding: "2px 7px", marginTop: "1px",
                }}>
                  #{i + 1}
                </span>
                <span style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.6", fontStyle: "italic" }}>
                  "{prompt}"
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="reveal" style={{ transitionDelay: "200ms", marginBottom: "48px" }}>
          <SectionDivider label="Screenshots" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                style={{
                  borderRadius: "12px", overflow: "hidden", cursor: "zoom-in",
                  border: "1px solid rgba(167,139,250,0.12)",
                  height: "200px", display: "flex", justifyContent: "center", alignItems: "center",
                  backgroundColor: "#0e0e1a", position: "relative",
                  transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.45)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(109,40,217,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={src}
                  alt={`AI screenshot ${i + 1}`}
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
                  draggable={false}
                />
                <div style={{
                  position: "absolute", bottom: "8px", right: "10px",
                  fontSize: "10px", color: "rgba(167,139,250,0.4)", fontWeight: 600,
                }}>
                  {i + 1}/{images.length}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "#eeeeee", marginTop: "12px", textAlign: "center" }}>
            Klik op een afbeelding om te vergroten
          </p>
        </div>

        {/* Footer nav */}
        <div style={{
          display: "flex", gap: "12px", justifyContent: "space-between",
          marginTop: "64px", paddingTop: "32px",
          borderTop: "1px solid rgba(167,139,250,0.08)",
        }}>
          <a href="/jaar-4" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 4</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>

    </main>
  );
}
