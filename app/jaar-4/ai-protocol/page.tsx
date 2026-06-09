"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

const SectionDivider = ({ label }: { label: string }) => (
  <div className="section-divider">
    <div className="section-divider-line-l-bright" />
    <span className="section-divider-badge">{label}</span>
    <div className="section-divider-line-r-bright" />
  </div>
);

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="bullet-item">
    <span className="bullet-dot" />
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

  return (
    <main>
      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />

      <article className="content-page">

        {/* Header */}
        <div className="reveal">
          <a href="/jaar-4" className="j4-back-link">← Terug naar Jaar 4</a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 className="page-h1-medium-4">AI-protocol</h1>
          <p className="j4-header-text">
            Voor dit verslag is <strong>AI-niveau 2</strong> (ideeën en structuur) toegepast.
            AI heeft geen inhoudelijke informatie gegenereerd — alle bevindingen komen uit mijn eigen keuzes, analyses, experimenten en reflecties.
          </p>
          <div className="divider divider-mb48" />
        </div>

        {/* AI is gebruikt om */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "60ms" }}>
          <SectionDivider label="AI is gebruikt om" />
          <div className="glow-card pdca-card-style">
            <ul className="bullet-list">
              <BulletItem>Structuur aan te brengen in de hoofdstukopbouw</BulletItem>
              <BulletItem>De teksten logisch te laten aansluiten op de doelen</BulletItem>
              <BulletItem>Formuleringen te verduidelijken</BulletItem>
              <BulletItem>De reflecties compacter, vloeiender en leesbaarder te maken</BulletItem>
            </ul>
          </div>
        </div>

        {/* Hoe is AI ingezet */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "80ms" }}>
          <SectionDivider label="Hoe is AI ingezet?" />
          <div className="ai-role-grid">
            {[
              { icon: "🧩", title: "Structuurpartner", desc: "Ideeën voor een logische opbouw van acties, PDCA-cycli en reflecties" },
              { icon: "✏️", title: "Redactionele hulp", desc: "Verbeteren van zinnen, samenhang en leesbaarheid" },
              { icon: "💬", title: "Sparringpartner", desc: "Helpen bij het preciezer formuleren van mijn denkproces" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="glow-card pdca-card-style ai-role-card">
                <div className="ai-role-icon">{icon}</div>
                <div className="ai-role-title">{title}</div>
                <div className="ai-role-desc">{desc}</div>
              </div>
            ))}
          </div>
          <p className="j4-italic">
            De uiteindelijke inhoud, keuzes en formuleringen heb ik steeds zelf afgewogen en herschreven.
          </p>
        </div>

        {/* Wat heb ik zelf gedaan */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "100ms" }}>
          <SectionDivider label="Wat heb ik zelf gedaan?" />
          <div className="glow-card pdca-card-style">
            <ul className="bullet-list">
              <BulletItem>Het persoonlijke doel en vakinhoudelijke doel volledig zelf opgesteld</BulletItem>
              <BulletItem>Alle analyses, reflecties, resultaten en inzichten uit eigen observaties, logboeken en experimenten gehaald</BulletItem>
              <BulletItem>De PDCA-cycli zelf ontworpen, toegepast en geïnterpreteerd</BulletItem>
              <BulletItem>Alle voorbeelden, keuzes en verbeterpunten komen uit mijn eigen ervaring</BulletItem>
              <BulletItem>Suggesties van AI vertaald naar mijn eigen schrijfstijl</BulletItem>
            </ul>
          </div>
        </div>

        {/* Wat klopte wel/niet */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "120ms" }}>
          <SectionDivider label="Wat klopte wel / niet?" />
          <div className="ai-check-grid">
            <div className="glow-card pdca-card-style ai-check-card-good">
              <div className="ai-check-label-good">✓ Nuttig</div>
              <p className="j4-text">Suggesties over structuur en helderheid. Lange stukken zijn hierdoor logischer opgebouwd en beter leesbaar geworden.</p>
            </div>
            <div className="glow-card pdca-card-style ai-check-card-bad">
              <div className="ai-check-label-bad">✗ Niet gebruikt</div>
              <p className="j4-text">Inhoudelijke aanvullingen of kant-en-klare theorie — om AI-niveau 3 te vermijden. Te formeel/puntig herschreven naar persoonlijke tekst.</p>
            </div>
          </div>
        </div>

        {/* Bronnen ter controle */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "140ms" }}>
          <SectionDivider label="Bronnen ter controle" />
          <div className="glow-card pdca-card-style">
            <ul className="bullet-list">
              <BulletItem>Mijn logboeken en reflectietabellen van de acties</BulletItem>
              <BulletItem>De analyses van de commercials in het neuromarketing-onderzoek</BulletItem>
              <BulletItem>De enquêteresultaten van het föhn-experiment</BulletItem>
              <BulletItem>Notities uit eerder opgedane kennis van neuromarketing en besluitvorming</BulletItem>
            </ul>
          </div>
        </div>

        {/* Wat heb ik wel/niet overgenomen */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "160ms" }}>
          <SectionDivider label="Wat heb ik wel / niet overgenomen?" />
          <div className="ai-check-grid">
            <div className="glow-card pdca-card-style ai-check-card-good">
              <div className="ai-check-label-good">✓ Wel overgenomen</div>
              <p className="j4-text">Structuurvoorstellen, suggesties voor duidelijkere zinnen en opbouw van PDCA.</p>
            </div>
            <div className="glow-card pdca-card-style ai-check-card-bad">
              <div className="ai-check-label-bad">✗ Niet overgenomen</div>
              <p className="j4-text">Inhoudelijke theorie-toevoegingen, nieuwe interpretaties of vooraf ingevulde uitkomsten.</p>
            </div>
          </div>
        </div>

        {/* Prompts */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "180ms" }}>
          <SectionDivider label="Gebruikte prompts" />
          <div className="prompt-list">
            {[
              "Welke kopjes zouden goed passen bij dit hoofdstuk zodat het overzichtelijk blijft?",
              "Kun je mijn reflectie herschrijven zodat het meer een verhaal wordt?",
              "Denk mee over een passende overgang tussen de PDCA-stappen die ik hier beschrijf.",
              "Maak mijn tekst duidelijker en vloeiender zonder nieuwe inhoud toe te voegen.",
            ].map((prompt, i) => (
              <div key={i} className="prompt-item">
                <span className="prompt-num">#{i + 1}</span>
                <span className="prompt-text">"{prompt}"</span>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="reveal reveal-mb48" style={{ transitionDelay: "200ms" }}>
          <SectionDivider label="Screenshots" />
          <div className="ai-img-tile-grid">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                className="img-tile"
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
                <img src={src} alt={`AI screenshot ${i + 1}`} draggable={false} />
                <div className="img-tile-label">{i + 1}/{images.length}</div>
              </div>
            ))}
          </div>
          <p className="img-caption-center">
            Klik op een afbeelding om te vergroten
          </p>
        </div>

        {/* Footer nav */}
        <div className="footer-nav-border08">
          <a href="/jaar-4" className="btn-ghost btn-sm">← Terug naar Jaar 4</a>
          <a href="/" className="btn btn-sm">Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}


