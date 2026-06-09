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
          <a href="/jaar-4" className="j4-back-link">← Terug naar Jaar 4</a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Jaar 4 — Vakinhoudelijk doel
          </div>
          <h1 className="j4-h1-sm">
            Vakinhoudelijk doel <span className="accent-span">| Actie 2</span>
          </h1>
          <p className="j4-header-text">
            Binnen de periode tussen <strong>september 2025 t/m december 2025</strong> ga ik
            onderzoeken of neuromarketing invloed heeft op de keuze en aantrekkelijkheid van een product door vier commercials
            te analyseren en een eigen product (föhn) te testen via een enquête, waarbij ik begin met een nulmeting van eerste
            indruk, aantrekkelijkheid en koopintentie.
          </p>
          <div className="divider divider-mb48" />
        </div>

        {/* Inleesactie */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "60ms" }}>
          <SectionDivider label="Inleesactie" />
          <div className="glow-card pdca-card-style">
            <p className="j4-text-mb">
              In het dagelijks leven word ik voortdurend blootgesteld aan allerlei prikkels die mijn keuzes beïnvloeden, vaak zonder dat ik daar bewust bij stilsta. Soms merk ik dat bepaalde reclames, slogans of visuele cues automatisch mijn aandacht trekken en mijn voorkeuren sturen, bijna reflexmatig. Die nieuwsgierigheid heeft me doen beseffen hoe fascinerend het is om te begrijpen wat er achter deze processen schuilgaat: waarom sommige boodschappen blijven hangen en andere helemaal niet <em className="accent-em">(Van den Berg, 2021)</em>. Tegelijkertijd realiseer ik me dat ik zelf vaak onbewust reageer op prikkels, zonder dat ik precies weet waarom.
            </p>
            <p className="j4-text-mb">
              Neurowetenschappelijke inzichten laten zien dat veel beslissingen, ook aankoopbeslissingen, plaatsvinden in het onderbewuste en dat emoties en automatische reacties een grote rol spelen <em className="accent-em">(Plassmann, 2015)</em>. Door te begrijpen hoe hersenprocessen en marketing samenkomen, kunnen bedrijven effectiever communiceren en consumenten beter bedienen. Neuromarketing trekt daarom enorm mijn aandacht en interesse.
            </p>
            <p className="j4-text">
              Daarom kies ik ervoor om in mijn vakinhoudelijk doel tussen september 2025 en december 2025 mijn focus te leggen op neuromarketing. Ik wil leren hoe hersenreacties, emoties en cognitieve processen de manier waarop mensen beslissen beïnvloeden en hoe ik dat kan toepassen in marketing.
            </p>
          </div>
        </div>

        {/* Actie 2 */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "80ms" }}>
          <SectionDivider label="Actie 2" />
          <div className="glow-card pdca-card-style">
            <p className="j4-text-mb">
              In dit mini-experiment ga ik onderzoeken hoe mensen reageren op een product via visuele en emotionele cues,
              geïnspireerd door principes uit de neuromarketing. Het product dat ik heb gekozen is een{" "}
              <strong className="accent-strong">föhn</strong> (foto's gemaakt met AI). Het doel is te ontdekken welke
              elementen de aantrekkelijkheid en keuze van het product beïnvloeden, zoals kleur, design, sociale bewijskracht,
              emotie en beleving.
            </p>
            <p className="j4-text-bold-sm">
              Ik voer vier rondes uit, waarbij elke ronde een stap verder gaat in neuromarketing:
            </p>
            <div className="ronde-list">
              {[
                { n: "1", label: "Basisbeeld", desc: "Een neutrale afbeelding van de föhn zonder extra prikkels." },
                { n: "2", label: "Kleur & design", desc: "De visuele aantrekkingskracht wordt versterkt door opvallende kleuren en glans." },
                { n: "3", label: "Sociaal proef + korte tekst", desc: "Sociale cues en een positieve boodschap worden toegevoegd." },
                { n: "4", label: "Emotie & mini-storytelling", desc: "Het gebruik en de beleving van de föhn worden visueel en tekstueel weergegeven, zodat de emotionele connectie sterker wordt." },
              ].map((r) => (
                <div key={r.n} className="ronde-row">
                  <span className="ronde-label">Ronde {r.n}</span>
                  <span className="ronde-text">
                    <strong>{r.label}</strong> — {r.desc}
                  </span>
                </div>
              ))}
            </div>
            <p className="j4-text">
              Bij elke ronde vullen proefpersonen een korte enquête in over hun voorkeur en gevoel bij het product.
              Tegelijkertijd maak ik bij elke ronde een afbeelding in Canva die aansluit bij de test, zodat het effect van de
              visuele en emotionele elementen duidelijk zichtbaar wordt. Op deze manier kan ik stap voor stap zien hoe
              neuromarketing de aantrekkelijkheid van het product beïnvloedt.
            </p>
          </div>
        </div>

        {/* PDCA */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "100ms" }}>
          <SectionDivider label="PDCA-cyclus" />
          <div className="pdca-steps-list">
            {pdcaSteps.map((step) => (
              <div key={step.num} className="glow-card pdca-card-style">
                <div className="pdca-card-row">
                  <div className="pdca-num-badge">
                    <div className="pdca-num">{step.num}</div>
                    <div className="pdca-label">{step.label}</div>
                  </div>
                  <div className="pdca-step-flex">
                    <p className="j4-text">{step.text}</p>

                    {"rounds" in step && step.rounds && (
                      <div className="pdca-bullets-wrap-14">
                        {step.rounds.map((r) => (
                          <div key={r.label} className="pdca-bullet-row">
                            <span className="pdca-bullet-label">{r.label}</span>
                            <span className="pdca-bullet-text">{r.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {"footer" in step && step.footer && (
                      <p className="pdca-step-footer">
                        {step.footer}
                      </p>
                    )}

                    {"positives" in step && step.positives && (
                      <div className="pdca-check-wrap">
                        <p className="pdca-check-good-label">✓ Wat werkte</p>
                        <div className="pdca-check-good-list">
                          {step.positives.map((t, i) => (
                            <div key={i} className="pdca-check-item">
                              <span className="pdca-check-bullet-good">•</span>
                              <span className="pdca-check-text">{t}</span>
                            </div>
                          ))}
                        </div>
                        <p className="pdca-check-bad-label">↗ Verbeterpunten</p>
                        <div className="pdca-check-bad-list">
                          {"improvements" in step && step.improvements && step.improvements.map((t, i) => (
                            <div key={i} className="pdca-check-item">
                              <span className="pdca-check-bullet-bad">•</span>
                              <span className="pdca-check-text">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bewijslasten */}
        <div className="reveal reveal-mb48" style={{ transitionDelay: "140ms" }}>
          <SectionDivider label="Bewijslasten" />
          <p className="j4-text j4-text-mb16">
            Hieronder staan de bewijslasten van actie 2:
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfV2OEu12CVBQmSjBog0VqCBMCmiEl6_oLhoYhxrVcE_LynVQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="enquete-link"
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.4)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.15)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.04)";
            }}
          >
            <span className="enquete-icon">📋</span>
            <div>
              <div className="enquete-title">Link naar de enquête</div>
              <div className="enquete-sub">Google Forms ↗</div>
            </div>
          </a>

          <p className="j4-text-sm">
            Onderstaand de door Canva AI gegenereerde afbeeldingen:
          </p>
          <div className="img-tile-grid">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img.src)}
                className="img-tile-card"
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
                  className="img-tile-card-img"
                  draggable={false}
                />
                <div className="img-tile-card-footer">{img.label}</div>
              </div>
            ))}
          </div>
          <p className="img-click-hint">Klik op een afbeelding om te vergroten</p>
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


