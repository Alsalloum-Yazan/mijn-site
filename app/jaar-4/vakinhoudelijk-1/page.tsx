"use client";

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
    text: "Voor dit actiepunt heb ik besloten om vier verschillende commercials te bekijken: Albert Heijn, KPN, Iglo en Robijn. Ik heb deze selectie bewust gemaakt, omdat ze elk op een andere manier neuromarketing inzetten: Albert Heijn legt de nadruk op kortingen, KPN op emoties en verbondenheid, Iglo op nostalgie en Robijn op zintuiglijke beleving zoals geur en sfeer. Door deze uiteenlopende voorbeelden kan ik goed vergelijken hoe technieken worden toegepast en welke impact ze op mij hebben. Ik wil mij vooral richten op hoe kleur, beeld, muziek, emoties en visuele storytelling mijn aandacht en gevoel beïnvloeden, en hoe deze technieken samen de boodschap versterken. Mijn doel is om stap voor stap te leren herkennen hoe neuromarketing werkt en dit later zelf toe te passen in analyses of ontwerpen van reclame.",
  },
  {
    num: "02", label: "Do",
    text: "Tijdens het bekijken van de commercials merkte ik dat ik veel beter begon op te letten op de techniek en strategie achter de keuzes in de video's, in plaats van alleen de inhoud. Bij Albert Heijn viel op dat de korting duidelijk zichtbaar was, maar het product zelf nauwelijks. Bij KPN merkte ik dat de emotionele scènes van vrienden sterk werkten, maar de dienst zelf minder duidelijk overkwam. Bij Iglo voelde ik de nostalgie, maar het ontbrak aan piekmomenten en gezichten om de emotie sterker te maken. Bij Robijn riep de tropische sfeer meteen een vakantiegevoel op, maar productinformatie bleef beperkt.\n\nIk maakte aantekeningen bij elke commercial: wat trok mijn aandacht, welke emoties voelde ik, en welke technieken waren effectief of minder sterk. Door dit bewust te doen merkte ik dat ik steeds subtielere elementen begon op te merken, zoals hoe muziek of kleurgebruik mijn gevoel beïnvloedde. Tegelijkertijd merkte ik dat ik sommige technieken, zoals emotie en geur, sterker onthield dan concrete productinformatie.",
  },
  {
    num: "03", label: "Check",
    text: "Door deze analyse heb ik veel geleerd over mezelf en mijn perceptie van neuromarketing. Ik realiseer me dat ik gevoel en emoties sneller onthoudt dan productinformatie, en dat visuele piekmomenten of herkenbare situaties bij mij het meest effect hebben. Tegelijkertijd zag ik waar ik nog kan groeien: ik moet leren beter letten op de balans tussen emotie en duidelijke productinformatie, en herkennen welke technieken effectief blijven hangen.",
    bullets: [
      { label: "Albert Heijn", text: "Ik reageer snel op kortingen, maar let te weinig op productpresentatie. Voortaan zal ik letten op hoe producten visueel gepresenteerd worden en in welke context ze worden geplaatst." },
      { label: "KPN", text: "Emoties werken sterk bij mij, maar ik vergeet vaak de boodschap of dienst. Ik zal beter analyseren hoe emotie gekoppeld wordt aan het product of de dienst." },
      { label: "Iglo", text: "Nostalgie werkt, maar mist piekmomenten en gezichten. Ik zal letten op hoe storytelling wordt opgebouwd om emotie sterker te maken." },
      { label: "Robijn", text: "Geur en sfeer blijven hangen, maar informatie over het product verdwijnt. Ik zal oefenen met herkennen hoe zintuiglijke technieken productinformatie kunnen versterken." },
    ],
  },
  {
    num: "04", label: "Act",
    text: "Voortaan zal ik deze inzichten gebruiken om mijn analyses van commercials steeds gerichter te maken. Ik zal bij elke nieuwe commercial bewust letten op de combinatie van emotie en productinformatie, en actief noteren wat bij mij blijft hangen en waarom. Daarnaast wil ik wekelijks terugkijken in mijn logboek om patronen te ontdekken en mijn vaardigheid in het herkennen van effectieve neuromarketingtechnieken te verbeteren. Door dit structureel te doen, kan ik stap voor stap mijn kennis vergroten, beter voorspellen welke technieken werken, en mijn analytische vaardigheden verder ontwikkelen, zodat ik dit later ook kan toepassen bij eigen creatieve ontwerpen of marketinganalyses.",
  },
];

const commercials = [
  { brand: "Albert Heijn", url: "https://www.youtube.com/watch?v=MJqJkhPAi_0" },
  { brand: "KPN", url: "https://www.youtube.com/watch?v=gjD7D_Nq9a4" },
  { brand: "Iglo", url: "https://www.youtube.com/watch?v=V6_PZL8aIJc" },
  { brand: "Robijn", url: "https://www.youtube.com/watch?v=RJkPJnibStA" },
];

export default function VakinhoudelijkDoel1() {
  return (
    <main>
      <ImageModal src={null} onClose={() => {}} />

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
            Vakinhoudelijk doel <span style={{ color: "#a78bfa" }}>| Actie 1</span>
          </h1>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#eeeeee", marginBottom: "12px", maxWidth: "640px" }}>
            Binnen de periode tussen <strong style={{ color: "#eeeeee" }}>september 2025 t/m december 2025</strong> ga ik
            onderzoeken of neuromarketing invloed heeft op de keuze en aantrekkelijkheid van een product door vier commercials
            te analyseren en een eigen product (föhn) te testen via een enquête, waarbij ik begin met een nulmeting van eerste
            indruk, aantrekkelijkheid en koopintentie.
          </p>
          <p style={{ fontSize: "13px", color: "#a78bfa", marginBottom: "32px", fontStyle: "italic" }}>
            De PDCA-cyclus is steeds meerdere keren doorlopen, zie bijlage op de website.
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

        {/* Actie 1 */}
        <div className="reveal" style={{ transitionDelay: "80ms", marginBottom: "40px" }}>
          <SectionDivider label="Actie 1" />
          <div className="glow-card" style={cardStyle}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: "0 0 16px" }}>
              Ik heb besloten om de komende vier weken elke week één reclamecommercial te bekijken en goed te letten op hoe de makers mijn aandacht proberen te trekken. Bij elke commercial maak ik aantekeningen over dingen zoals kleurgebruik, woorden, emoties en andere manieren waarop ze proberen invloed uit te oefenen. Ik beschrijf ook hoe die keuzes samen de boodschap sterker maken.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: "0 0 16px" }}>
              Door dit vier weken lang te doen, krijg ik een beter beeld van de verschillende manieren waarop neuromarketing in reclame wordt gebruikt en leer ik stap voor stap hoe deze technieken werken. Ik kies voor deze actie, omdat ik het ook superleuk vind om mij hier in te verdiepen en op deze manier te kijken naar de commercial. Bij deze actie heb ik ervoor gekozen, om bij iedere reclame die ik bekijk, de PDCA-cyclus op toe te passen.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: 0 }}>
              Ik ga per reclame/commercial analyseren wat hier is toegepast aan Neuromarketing, om later beter te herkennen hoe je dit toepast en wat het aan de kijker/consument overbrengt en -haalt. Ik zal dus per doorlopen cyclus, steeds meer neuromarketing toepassen.
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
                  <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: 0, whiteSpace: "pre-line" }}>{step.text}</p>
                  {"bullets" in step && step.bullets && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
                      <p style={{ fontSize: "13px", color: "#eeeeee", margin: "0 0 4px", fontWeight: 600 }}>
                        Specifieke verbeterpunten:
                      </p>
                      {step.bullets.map((b) => (
                        <div key={b.label} style={{
                          background: "rgba(167,139,250,0.05)",
                          border: "1px solid rgba(167,139,250,0.12)",
                          borderRadius: "10px", padding: "10px 14px",
                          display: "flex", gap: "10px", alignItems: "flex-start",
                        }}>
                          <span style={{
                            flexShrink: 0, fontSize: "10px", fontWeight: 700, color: "#a78bfa",
                            background: "rgba(167,139,250,0.12)", borderRadius: "6px",
                            padding: "2px 8px", marginTop: "1px", whiteSpace: "nowrap",
                          }}>{b.label}</span>
                          <span style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.65" }}>{b.text}</span>
                        </div>
                      ))}
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
          <div className="glow-card" style={cardStyle}>
            <p style={{ fontSize: "14px", color: "#eeeeee", marginBottom: "20px" }}>
              Hierbij de linkjes naar de commercials:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {commercials.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", gap: "12px", alignItems: "center",
                    background: "rgba(167,139,250,0.04)",
                    border: "1px solid rgba(167,139,250,0.1)",
                    borderRadius: "10px", padding: "12px 16px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.04)";
                  }}
                >
                  <span style={{
                    flexShrink: 0, fontSize: "10px", fontWeight: 700, color: "#a78bfa",
                    background: "rgba(167,139,250,0.12)", borderRadius: "6px",
                    padding: "2px 8px",
                  }}>
                    #{i + 1}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#eeeeee", minWidth: "80px" }}>{c.brand}</span>
                  <span style={{ fontSize: "12px", color: "#a78bfa", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {c.url}
                  </span>
                  <span style={{ marginLeft: "auto", fontSize: "12px", color: "#a78bfa", flexShrink: 0 }}>↗</span>
                </a>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "#eeeeee", fontStyle: "italic", margin: 0 }}>
              Uitwerking is d.m.v. PDCA, zie bijlage in platte tekst 1.24.
            </p>
          </div>
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
