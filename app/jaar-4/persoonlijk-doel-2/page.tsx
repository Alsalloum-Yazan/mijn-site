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
    text: "Mijn doel is om impulsieve reacties te verminderen door bij belangrijke beslissingen een korte pauze in te lassen, mijn eerste impuls te observeren en een checklist in te vullen. Deze pauze gebruik ik om te reflecteren op mogelijke consequenties van de keuze. In de eerste week richt ik me op minimaal één beslissing per dag, zowel werk als privé, zodat ik mijn natuurlijke impulsiviteit herken en bewuster kan handelen. Daarnaast plan ik een logboek bij te houden om patronen te ontdekken en later mijn aanpak te verbeteren.",
  },
  {
    num: "02", label: "Do",
    text: "In de uitvoering hield ik dagelijks het logboek bij en nam ik bewust de pauzes. Ik paste dit toe bij werkbeslissingen zoals prioriteiten stellen, teamoverleg en last-minute verzoeken, en bij privékeuzes zoals sociale afspraken of aankopen. Tijdens de pauzes observeerde ik mijn eerste reactie en gevoelens, vulde ik de checklist in en reflecteerde ik direct op de beslissing. Tijdens deze uitvoering merkte ik dat het soms moeilijk was om de pauze consequent toe te passen, vooral bij tijdsdruk of emotionele situaties. Toch hielp het me om bewuster te reageren, minder impulsief te handelen en beter in te schatten wanneer intuïtief handelen voldoende was of wanneer rationeel nadenken nodig was.",
  },
  {
    num: "03", label: "Check",
    text: "Aan het einde van de week analyseerde ik mijn logboek en zag ik dat ik rustiger reageerde en patronen van impulsief handelen duidelijker werden. Sommige situaties, zoals onverwachte werkdruk, bleken nog steeds lastig, maar ik merkte dat ik dankzij de pauzes en de checklist bewuster keuzes maakte. Ik realiseerde me dat een korte adempauze voor het invullen van de checklist nog effectiever zou zijn en dat reminders bij drukke momenten helpen om de methode consistent toe te passen. Ook bleek een dagelijkse korte terugblik (\"Welke keuzes nam ik impulsief en waarom?\") nuttig om inzicht te krijgen in mijn gedrag.",
  },
  {
    num: "04", label: "Act",
    text: "Op basis van deze inzichten zal ik voortaan een korte adempauze van twee minuten nemen voordat ik de checklist invul, reminders instellen bij drukke momenten, en de checklist aanpassen waar nodig. Daarnaast plan ik wekelijks een moment om mijn logboek terug te kijken en te zien welke patronen er ontstaan. Zo kan ik beter inschatten wanneer ik mijn gevoel kan volgen en wanneer het verstandiger is eerst rationeel na te denken, waardoor ik stap voor stap een betere balans tussen intuïtie en verstand behoud.",
  },
];

const quotes = [
  { name: "Martijn", text: "Wow Dian, het is echt te zien dat je stappen hebt gemaakt sinds de eerste periode. Je pauzes en checklisten werken duidelijk, en je reageert veel rustiger bij last-minute situaties. Echt knap hoe je dat toepast!" },
  { name: "Fabiënne", text: "Het verschil met periode 1 is echt merkbaar. Je bent veel bewuster bezig met je keuzes en reageert niet meer zo impulsief. Vooral bij onverwachte drukte merk ik dat je echt even stopt om na te denken, super goed gedaan." },
  { name: "Ella", text: "Echt gaaf om te zien hoe je bent gegroeid. Die korte pauzes en het logboek maken duidelijk effect: je patronen zijn veel zichtbaarder en je neemt nu bewuste beslissingen in plaats van automatisch te reageren." },
  { name: "Thijs", text: "Het valt me op dat je nu veel consistenter bent. In vergelijking met de eerste periode zie ik dat je rustig nadenkt voordat je reageert, ook in situaties die vroeger stress gaven. Echt een mooie vooruitgang!" },
  { name: "Tijmen", text: "Dian, het is duidelijk dat je de methode echt oppakt. Je merkt nu sneller wanneer je impulsief wilt reageren en weet dan beter te kiezen voor een bewuste stap. Het verschil met periode 1 springt er echt uit." },
  { name: "Jelte", text: "Het is echt zichtbaar hoe je gegroeid bent. In periode 2 zie ik veel minder impulsiviteit en veel meer bewust nadenken, vooral dankzij je checklist en korte pauzes. Echt top gedaan!" },
];

export default function PersoonlijkDoel2() {
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
            Jaar 4 — Persoonlijk doel
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "16px", lineHeight: "1.1" }}>
            Persoonlijk doel <span style={{ color: "#a78bfa" }}>| Actie 2</span>
          </h1>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#eeeeee", marginBottom: "12px", maxWidth: "640px" }}>
            Ik ga beter leren afwegen wanneer ik op gevoel en wanneer ik eerst even nadenk binnen de periode tussen{" "}
            <strong style={{ color: "#eeeeee" }}>september 2025 en december 2025</strong>, zodat ik minder impulsief reageer
            en bewustere keuzes maak in werk en privé.
          </p>
          <p style={{ fontSize: "13px", color: "#a78bfa", marginBottom: "32px", fontStyle: "italic" }}>
            PDCA-cyclus is meerdere keren doorlopen, zie bijlagen op de website.
          </p>
          <div className="divider" style={{ marginBottom: "48px" }} />
        </div>

        {/* Inleesactie */}
        <div className="reveal" style={{ transitionDelay: "60ms", marginBottom: "40px" }}>
          <SectionDivider label="Inleesactie" />
          <div className="glow-card" style={cardStyle}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: "0 0 16px" }}>
              In het dagelijks leven maak ik voortdurend keuzes, sommige bewust en de andere bijna reflexmatig. Vaak voel ik instinctief wat goed voelt en handel ik daar naar zonder al te veel na te denken. Dat heeft me soms geholpen: intuïtie kan me snel laten handelen wanneer de situatie snel/bekend is of wanneer er maar weinig informatie is <em style={{ color: "#a78bfa" }}>(Psychologie Magazine, 13 december 2019)</em>. Maar ik merk ook dat ik daardoor soms impulsen volg waar ik later spijt van heb of beslis op basis van gevoel terwijl meer reflectie of aandacht verstandig geweest was.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: "0 0 16px" }}>
              Wetenschappelijke inzichten tonen dat intuïtief denken waarde heeft, vooral als je beschikt over ervaring en expertise. In sommige studies bleek dat deze keuzes, wanneer gebaseerd op onderbewuste kennis en ervaring, sneller en soms zelfs effectiever kunnen zijn dan langdurige rationele analyse <em style={{ color: "#a78bfa" }}>(Socranova, Z.D)</em>. Toch is instinct niet onfeilbaar: beslissingen gemaakt op gevoel kunnen beïnvloed worden door emoties, vooroordelen of onvolledige context <em style={{ color: "#a78bfa" }}>(Carrièretijger, Z.D.)</em>. Wanneer de situatie complex is, nieuwe informatie vraagt of duidelijke lange termijngevolgen heeft, is rationeel nadenken juist onmisbaar om betrouwbare en bewuste keuzes te maken.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: 0 }}>
              Daarom kies ik ervoor om tussen september 2025 en december 2025 te werken aan een bewuste balans tussen mijn gevoel en rationele overweging. Ik wil leren herkennen wanneer intuïtie waardevol is en wanneer het beter is eerst even adem te halen, alle opties te overzien en bewust na te denken. Ik wil niet meer automatisch handelen, maar ruimte geven aan de afweging. Zo kan ik rustiger, bewuster en effectiever handelen in werk en privé met meer zelfvertrouwen.
            </p>
          </div>
        </div>

        {/* Actie 2 */}
        <div className="reveal" style={{ transitionDelay: "80ms", marginBottom: "40px" }}>
          <SectionDivider label="Actie 2" />
          <div className="glow-card" style={cardStyle}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#eeeeee", margin: 0 }}>
              Ik heb ervoor gekozen om gedurende drie weken bij belangrijke beslissingen, zowel privé als zakelijk, een{" "}
              <strong style={{ color: "#a78bfa" }}>10-minuten pauze</strong> in te bouwen en deze systematisch te noteren
              in mijn logboek (zie bijlage <strong style={{ color: "#a78bfa" }}>1.12 Dagelijks Beslissingslogboek</strong>).
              Tijdens deze pauzes observeer ik mijn eerste impuls, vul ik een checklist in en reflecteer ik op de uiteindelijke
              keuze. Deze oefening laat duidelijke patronen zien: bij werk gerelateerde keuzes en complexe situaties helpt de
              pauze en het rationeel nadenken om impulsieve fouten te voorkomen, terwijl intuïtie goed werkt bij bekende of
              creatieve beslissingen. Door deze aanpak toe te passen kan ik bewuster afwegen wanneer ik mijn gevoel of verstand
              laat spreken en zie ik concreet waar mijn natuurlijke impulsiviteit speelt. De volgende stap is deze methode
              structureel te integreren, met extra aandacht voor stressvolle momenten, zodat ik mijn mentale balans verder
              kan verbeteren.
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

                  {step.num === "03" && (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px", marginTop: "20px" }}>
                      {quotes.map((q) => (
                        <div key={q.name} style={{
                          background: "rgba(167,139,250,0.05)",
                          border: "1px solid rgba(167,139,250,0.12)",
                          borderRadius: "12px", padding: "14px 16px",
                        }}>
                          <div style={{ fontSize: "11px", fontWeight: 700, color: "#a78bfa", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            {q.name}
                          </div>
                          <p style={{ fontSize: "13px", color: "#eeeeee", lineHeight: "1.65", margin: 0, fontStyle: "italic" }}>
                            "{q.text}"
                          </p>
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
          <p style={{ fontSize: "14px", color: "#eeeeee", marginBottom: "16px" }}>
            Hieronder staan de bewijslasten van actie 2:
          </p>
          <div
            onClick={() => setSelectedImage("/jaar4/persoonlijk-doel-2/image1.png")}
            style={{
              borderRadius: "12px", overflow: "hidden", cursor: "zoom-in",
              border: "1px solid rgba(167,139,250,0.12)",
              display: "flex", justifyContent: "center", alignItems: "center",
              backgroundColor: "#0e0e1a", position: "relative",
              transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
              maxWidth: "600px",
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
              src="/jaar4/persoonlijk-doel-2/image1.png"
              alt="Bewijs actie 2"
              style={{ width: "100%", objectFit: "contain", display: "block" }}
              draggable={false}
            />
          </div>
          <p style={{ fontSize: "12px", color: "#eeeeee", marginTop: "10px" }}>
            Klik op de afbeelding om te vergroten
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
