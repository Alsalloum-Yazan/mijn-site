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

const cardStyle: React.CSSProperties = {
  borderRadius: "16px",
  border: "1px solid rgba(167,139,250,0.12)",
  padding: "24px 28px",
  background: "linear-gradient(135deg, rgba(167,139,250,0.04) 0%, rgba(0,0,0,0) 100%)",
};

const pdcaSteps = [
  {
    num: "01", label: "Plan",
    text: "Voor dit experiment wil ik onderzoeken hoe visuele en emotionele cues de aantrekkelijkheid van een product beïnvloeden. Ik kies een föhn als product en voer vier rondes uit, waarin ik telkens een stap verder ga in neuromarketing: van een neutraal basisbeeld, naar kleur en design, sociale bewijskracht, en uiteindelijk emotie en mini-storytelling. Ik laat tien respondenten elke ronde een korte enquête invullen over hun voorkeur en gevoel bij het product. Mijn doel is te ontdekken welke elementen het meest effectief zijn om de keuze van consumenten te beïnvloeden en hoe ik deze inzichten zelf kan toepassen in analyse en ontwerp.",
  },
  {
    num: "02", label: "Do",
    text: "Tijdens het uitvoeren van de vier rondes merkte ik dat ik zelf steeds bewuster ging kijken naar wat de elementen deden met de perceptie van het product.",
    rounds: [
      { label: "Ronde 1 – Basisbeeld", text: "De neutrale afbeelding liet zien dat mensen vooral praktisch letten: kleur en vorm zijn belangrijk, maar emotie ontbreekt." },
      { label: "Ronde 2 – Kleur & design", text: "Door felle kleuren en glans werd de föhn aantrekkelijker en voelde hij luxer aan, waardoor de keuzebereidheid toenam." },
      { label: "Ronde 3 – Sociale cues & tekst", text: "Het label \"Meest gekozen door vrienden!\" verhoogde vertrouwen en sociale bevestiging; mensen associeerden het product nu met populariteit en \"erbij horen\"." },
      { label: "Ronde 4 – Emotie & mini-storytelling", text: "Het tonen van gebruik en beleving creëerde de sterkste aantrekkelijkheid. Mensen konden zich voorstellen hoe het product hen hielp en welk gevoel dit gaf." },
    ],
    footer: "Ik maakte bij elke ronde een afbeelding in Canva en liet de respondenten deze beoordelen. Door dit te doen werd het voor mij steeds duidelijker hoe stapsgewijs neuromarketing de perceptie van een product kan sturen, en hoe visuele en emotionele cues elkaar versterken.",
  },
  {
    num: "03", label: "Check",
    text: "Uit het experiment heb ik een aantal persoonlijke inzichten gehaald over hoe neuromarketing werkt en waar ik nog kan groeien:",
    positives: [
      "Visuele aantrekkingskracht (kleur, glans, design) trekt meteen de aandacht.",
      "Sociale bewijskracht verhoogt vertrouwen en associatie met populariteit.",
      "Emotie en mini-storytelling creëren de sterkste beleving en verhogen keuzebereidheid.",
    ],
    improvements: [
      "Ik moet leren hoe ik de balans kan vinden tussen visueel aantrekkelijk maken en productinformatie duidelijk overbrengen.",
      "Het effect van sociale cues kan ik nog sterker analyseren door te variëren met verschillende labels of contexten.",
      "Emotionele storytelling kan ik verder ontwikkelen door korte scenario's te maken die beter aansluiten bij de beleving van de gebruiker.",
      "Het experiment kan worden uitgebreid met video of interactieve elementen om realistischere gebruikservaringen te simuleren.",
    ],
    footer: "Door dit alles realiseer ik me hoe krachtig kleine aanpassingen in visuele en emotionele cues zijn en dat ik beter moet letten op de combinatie van alle factoren om echte impact te maken.",
  },
  {
    num: "04", label: "Act",
    text: "Voortaan wil ik deze inzichten gebruiken bij het opzetten van nieuwe neuromarketing-experimenten of analyses van producten. Ik zal structureel testen hoe kleur, design, sociale cues en storytelling samenwerken en noteren welke combinatie bij mij en anderen de sterkste reactie oproept. Daarnaast wil ik experimenteren met korte video's of interactieve elementen om de ervaring nog realistischer te maken en zo de impact van neuromarketing volledig te benutten. Door dit consequent toe te passen, kan ik mijn kennis en vaardigheden verder ontwikkelen en stap voor stap beter voorspellen hoe consumenten reageren op verschillende cues, waardoor ik mijn analyses en creatieve ontwerpen effectiever kan maken.",
  },
];

const images = [
  { src: "/jaar4/vakinhoudelijk-2/image1.jpg", label: "Ronde 1 – Basisbeeld" },
  { src: "/jaar4/vakinhoudelijk-2/image2.jpg", label: "Ronde 2 – Kleur & design" },
  { src: "/jaar4/vakinhoudelijk-2/imag3.jpg", label: "Ronde 3 – Sociale cues" },
  { src: "/jaar4/vakinhoudelijk-2/imag4.jpg", label: "Ronde 4 – Emotie & storytelling" },
];

export default function VakinhoudelijkDoel2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Jaar 4 — Vakinhoudelijk doel
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px", lineHeight: "1.1" }}>
            Vakinhoudelijk doel <span style={{ color: "#a78bfa" }}>| Actie 2</span>
          </h1>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#eeeeee", marginBottom: "32px", maxWidth: "640px" }}>
            Binnen de periode tussen <strong style={{ color: "#eeeeee" }}>september 2025 t/m december 2025</strong> ga ik
            onderzoeken of neuromarketing invloed heeft op de keuze en aantrekkelijkheid van een product door vier commercials
            te analyseren en een eigen product (föhn) te testen via een enquête, waarbij ik begin met een nulmeting van eerste
            indruk, aantrekkelijkheid en koopintentie.
          </p>
          <div className="divider" style={{ marginBottom: "48px" }} />
        </div>

        {/* Inleesactie */}
        <div className="reveal" style={{ transitionDelay: "60ms", marginBottom: "40px" }}>
          <SectionDivider label="Inleesactie" />
          <div className="glow-card" style={cardStyle}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: "0 0 16px" }}>
              In het dagelijks leven word ik voortdurend blootgesteld aan allerlei prikkels die mijn keuzes beïnvloeden, vaak zonder dat ik daar bewust bij stilsta. Soms merk ik dat bepaalde reclames, slogans of visuele cues automatisch mijn aandacht trekken en mijn voorkeuren sturen, bijna reflexmatig. Die nieuwsgierigheid heeft me doen beseffen hoe fascinerend het is om te begrijpen wat er achter deze processen schuilgaat: waarom sommige boodschappen blijven hangen en andere helemaal niet <em style={{ color: "#a78bfa" }}>(Van den Berg, 2021)</em>. Tegelijkertijd realiseer ik me dat ik zelf vaak onbewust reageer op prikkels, zonder dat ik precies weet waarom.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: "0 0 16px" }}>
              Neurowetenschappelijke inzichten laten zien dat veel beslissingen, ook aankoopbeslissingen, plaatsvinden in het onderbewuste en dat emoties en automatische reacties een grote rol spelen <em style={{ color: "#a78bfa" }}>(Plassmann, 2015)</em>. Door te begrijpen hoe hersenprocessen en marketing samenkomen, kunnen bedrijven effectiever communiceren en consumenten beter bedienen. Neuromarketing trekt daarom enorm mijn aandacht en interesse.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: 0 }}>
              Daarom kies ik ervoor om in mijn vakinhoudelijk doel tussen september 2025 en december 2025 mijn focus te leggen op neuromarketing. Ik wil leren hoe hersenreacties, emoties en cognitieve processen de manier waarop mensen beslissen beïnvloeden en hoe ik dat kan toepassen in marketing.
            </p>
          </div>
        </div>

        {/* Actie 2 */}
        <div className="reveal" style={{ transitionDelay: "80ms", marginBottom: "40px" }}>
          <SectionDivider label="Actie 2" />
          <div className="glow-card" style={cardStyle}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: "0 0 16px" }}>
              In dit mini-experiment ga ik onderzoeken hoe mensen reageren op een product via visuele en emotionele cues,
              geïnspireerd door principes uit de neuromarketing. Het product dat ik heb gekozen is een{" "}
              <strong style={{ color: "#a78bfa" }}>föhn</strong> (foto's gemaakt met AI). Het doel is te ontdekken welke
              elementen de aantrekkelijkheid en keuze van het product beïnvloeden, zoals kleur, design, sociale bewijskracht,
              emotie en beleving.
            </p>
            <p style={{ fontSize: "13px", color: "#eeeeee", marginBottom: "12px", fontWeight: 600 }}>
              Ik voer vier rondes uit, waarbij elke ronde een stap verder gaat in neuromarketing:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
              {[
                { n: "1", label: "Basisbeeld", desc: "Een neutrale afbeelding van de föhn zonder extra prikkels." },
                { n: "2", label: "Kleur & design", desc: "De visuele aantrekkingskracht wordt versterkt door opvallende kleuren en glans." },
                { n: "3", label: "Sociaal proef + korte tekst", desc: "Sociale cues en een positieve boodschap worden toegevoegd." },
                { n: "4", label: "Emotie & mini-storytelling", desc: "Het gebruik en de beleving van de föhn worden visueel en tekstueel weergegeven, zodat de emotionele connectie sterker wordt." },
              ].map((r) => (
                <div key={r.n} style={{
                  display: "flex", gap: "10px", alignItems: "flex-start",
                  background: "rgba(167,139,250,0.04)",
                  border: "1px solid rgba(167,139,250,0.1)",
                  borderRadius: "10px", padding: "10px 14px",
                }}>
                  <span style={{
                    flexShrink: 0, fontSize: "10px", fontWeight: 700, color: "#a78bfa",
                    background: "rgba(167,139,250,0.12)", borderRadius: "6px",
                    padding: "2px 8px",
                  }}>Ronde {r.n}</span>
                  <span style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.6" }}>
                    <strong style={{ color: "#eeeeee" }}>{r.label}</strong> — {r.desc}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: 0 }}>
              Bij elke ronde vullen proefpersonen een korte enquête in over hun voorkeur en gevoel bij het product.
              Tegelijkertijd maak ik bij elke ronde een afbeelding in Canva die aansluit bij de test, zodat het effect van de
              visuele en emotionele elementen duidelijk zichtbaar wordt. Op deze manier kan ik stap voor stap zien hoe
              neuromarketing de aantrekkelijkheid van het product beïnvloedt.
            </p>
          </div>
        </div>

        {/* PDCA */}
        <div className="reveal" style={{ transitionDelay: "100ms", marginBottom: "40px" }}>
          <SectionDivider label="PDCA-cyclus" />
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {pdcaSteps.map((step) => (
              <div key={step.num} className="glow-card" style={{
                ...cardStyle,
                display: "flex", gap: "20px", alignItems: "flex-start",
              }}>
                <div style={{
                  flexShrink: 0,
                  color: "#a78bfa", background: "rgba(167,139,250,0.1)",
                  border: "1px solid rgba(167,139,250,0.25)",
                  borderRadius: "10px", padding: "6px 12px",
                  minWidth: "52px", textAlign: "center",
                }}>
                  <div style={{ fontSize: "16px", fontWeight: 900 }}>{step.num}</div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "2px" }}>{step.label}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: 0 }}>{step.text}</p>

                  {"rounds" in step && step.rounds && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px" }}>
                      {step.rounds.map((r) => (
                        <div key={r.label} style={{
                          background: "rgba(167,139,250,0.05)",
                          border: "1px solid rgba(167,139,250,0.12)",
                          borderRadius: "10px", padding: "10px 14px",
                          display: "flex", gap: "10px", alignItems: "flex-start",
                        }}>
                          <span style={{
                            flexShrink: 0, fontSize: "10px", fontWeight: 700, color: "#a78bfa",
                            background: "rgba(167,139,250,0.12)", borderRadius: "6px",
                            padding: "2px 8px", marginTop: "1px", whiteSpace: "nowrap",
                          }}>{r.label}</span>
                          <span style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.65" }}>{r.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {"footer" in step && step.footer && (
                    <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#eeeeee", margin: "14px 0 0", fontStyle: "italic" }}>
                      {step.footer}
                    </p>
                  )}

                  {"positives" in step && step.positives && (
                    <div style={{ marginTop: "16px" }}>
                      <p style={{ fontSize: "12px", fontWeight: 700, color: "#86efac", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>
                        ✓ Wat werkte
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
                        {step.positives.map((t, i) => (
                          <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                            <span style={{ color: "#86efac", flexShrink: 0, marginTop: "2px" }}>•</span>
                            <span style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.65" }}>{t}</span>
                          </div>
                        ))}
                      </div>
                      <p style={{ fontSize: "12px", fontWeight: 700, color: "#fb7185", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>
                        ↗ Verbeterpunten
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {"improvements" in step && step.improvements && step.improvements.map((t, i) => (
                          <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                            <span style={{ color: "#fb7185", flexShrink: 0, marginTop: "2px" }}>•</span>
                            <span style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.65" }}>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bewijslasten */}
        <div className="reveal" style={{ transitionDelay: "140ms", marginBottom: "48px" }}>
          <SectionDivider label="Bewijslasten" />
          <p style={{ fontSize: "14px", color: "#eeeeee", marginBottom: "16px" }}>
            Hieronder staan de bewijslasten van actie 2:
          </p>

          {/* Enquête link */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfV2OEu12CVBQmSjBog0VqCBMCmiEl6_oLhoYhxrVcE_LynVQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "rgba(167,139,250,0.04)",
              border: "1px solid rgba(167,139,250,0.15)",
              borderRadius: "12px", padding: "14px 18px",
              textDecoration: "none", marginBottom: "20px",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.4)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.15)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.04)";
            }}
          >
            <span style={{ fontSize: "18px" }}>📋</span>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#eeeeee" }}>Link naar de enquête</div>
              <div style={{ fontSize: "11px", color: "#a78bfa", marginTop: "2px" }}>Google Forms ↗</div>
            </div>
          </a>

          {/* Images */}
          <p style={{ fontSize: "13px", color: "#eeeeee", marginBottom: "12px" }}>
            Onderstaand de door Canva AI gegenereerde afbeeldingen:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img.src)}
                style={{
                  borderRadius: "12px", overflow: "hidden", cursor: "zoom-in",
                  border: "1px solid rgba(167,139,250,0.12)",
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
                  src={img.src}
                  alt={img.label}
                  style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                  draggable={false}
                />
                <div style={{
                  padding: "8px 12px",
                  borderTop: "1px solid rgba(167,139,250,0.08)",
                  fontSize: "11px", color: "#a78bfa", fontWeight: 600,
                }}>
                  {img.label}
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
