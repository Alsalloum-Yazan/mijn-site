"use client";
import Link from "next/link";

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
    text: "Mijn doel is om impulsieve reacties te verminderen door bij belangrijke beslissingen een korte pauze in te lassen, mijn eerste impuls te observeren en een checklist in te vullen. Deze pauze gebruik ik om te reflecteren op mogelijke consequenties van de keuze. In de eerste week richt ik me op minimaal één beslissing per dag, zowel werk als privé, zodat ik mijn natuurlijke impulsiviteit herken en bewuster kan handelen. Daarnaast plan ik een logboek bij te houden om patronen te ontdekken en later mijn aanpak te verbeteren.",
  },
  {
    num: "02", label: "Do",
    text: "In de uitvoering hield ik dagelijks het logboek bij en nam ik bewust de pauzes. Ik paste dit toe bij werkbeslissingen zoals prioriteiten stellen, teamoverleg en last-minute verzoeken, en bij privékeuzes zoals sociale afspraken of aankopen. Tijdens de pauzes observeerde ik mijn eerste reactie en gevoelens, vulde ik de checklist in en reflecteerde ik direct op de beslissing. Tijdens deze uitvoering merkte ik dat het soms moeilijk was om de pauze consequent toe te passen, vooral bij tijdsdruk of emotionele situaties. Toch hielp het me om bewuster te reageren, minder impulsief te handelen en beter in te schatten wanneer intuïtief handelen voldoende was of wanneer rationeel nadenken nodig was.",
  },
  {
    num: "03", label: "Check",
    text: "Aan het einde van de week analyseerde ik mijn logboek en zag ik dat ik rustiger reageerde en patronen van impulsief handelen duidelijker werden. Sommige situaties, zoals onverwachte werkdruk, bleken nog steeds lastig, maar ik merkte dat ik dankzij de pauzes en de checklist bewuster keuzes maakte. Ik realiseerde me dat een korte adempauze voor het invullen van de checklist nog effectiever zou zijn en dat reminders bij drukke momenten helpen om de methode consistent toe te passen. Ook bleek een dagelijkse korte terugblik (\"Welke keuzes nam ik impulsief en waarom?\") nuttig om inzicht te krijgen in mijn gedrag.",
    quotes: [
      { name: "Martijn", text: "Wow Dian, het is echt te zien dat je stappen hebt gemaakt sinds de eerste periode. Je pauzes en checklisten werken duidelijk, en je reageert veel rustiger bij last-minute situaties. Echt knap hoe je dat toepast!" },
      { name: "Fabiënne", text: "Het verschil met periode 1 is echt merkbaar. Je bent veel bewuster bezig met je keuzes en reageert niet meer zo impulsief. Vooral bij onverwachte drukte merk ik dat je echt even stopt om na te denken, super goed gedaan." },
      { name: "Ella", text: "Echt gaaf om te zien hoe je bent gegroeid. Die korte pauzes en het logboek maken duidelijk effect: je patronen zijn veel zichtbaarder en je neemt nu bewuste beslissingen in plaats van automatisch te reageren." },
      { name: "Thijs", text: "Het valt me op dat je nu veel consistenter bent. In vergelijking met de eerste periode zie ik dat je rustig nadenkt voordat je reageert, ook in situaties die vroeger stress gaven. Echt een mooie vooruitgang!" },
      { name: "Tijmen", text: "Dian, het is duidelijk dat je de methode echt oppakt. Je merkt nu sneller wanneer je impulsief wilt reageren en weet dan beter te kiezen voor een bewuste stap. Het verschil met periode 1 springt er echt uit." },
      { name: "Jelte", text: "Het is echt zichtbaar hoe je gegroeid bent. In periode 2 zie ik veel minder impulsiviteit en veel meer bewust nadenken, vooral dankzij je checklist en korte pauzes. Echt top gedaan!" },
    ],
  },
  {
    num: "04", label: "Act",
    text: "Op basis van deze inzichten zal ik voortaan een korte adempauze van twee minuten nemen voordat ik de checklist invul, reminders instellen bij drukke momenten, en de checklist aanpassen waar nodig. Daarnaast plan ik wekelijks een moment om mijn logboek terug te kijken en te zien welke patronen er ontstaan. Zo kan ik beter inschatten wanneer ik mijn gevoel kan volgen en wanneer het verstandiger is eerst rationeel na te denken, waardoor ik stap voor stap een betere balans tussen intuïtie en verstand behoud.",
  },
];

export default function PersoonlijkDoel2() {
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
            Jaar 4 — Persoonlijk doel
          </div>
          <h1 className="j4-h1-sm">
            Persoonlijk doel <span className="accent-span">| Actie 2</span>
          </h1>
          <p className="j4-header-text-wide">
            Ik ga beter leren afwegen wanneer ik op gevoel en wanneer ik eerst even nadenk binnen de periode tussen{" "}
            <strong>september 2025 en december 2025</strong>, zodat ik minder impulsief reageer
            en bewustere keuzes maak in werk en privé.
          </p>
          <p className="j4-italic">
            PDCA-cyclus is meerdere keren doorlopen, zie bijlagen op de website.
          </p>
          <div className="divider divider-mb48" />
        </div>

        {/* Inleesactie */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "60ms" }}>
          <SectionDivider label="Inleesactie" />
          <div className="glow-card pdca-card-style">
            <p className="j4-text-mb">
              In het dagelijks leven maak ik voortdurend keuzes, sommige bewust en de andere bijna reflexmatig. Vaak voel ik instinctief wat goed voelt en handel ik daar naar zonder al te veel na te denken. Dat heeft me soms geholpen: intuïtie kan me snel laten handelen wanneer de situatie snel/bekend is of wanneer er maar weinig informatie is <em className="accent-em">(Psychologie Magazine, 13 december 2019)</em>. Maar ik merk ook dat ik daardoor soms impulsen volg waar ik later spijt van heb of beslis op basis van gevoel terwijl meer reflectie of aandacht verstandig geweest was.
            </p>
            <p className="j4-text-mb">
              Wetenschappelijke inzichten tonen dat intuïtief denken waarde heeft, vooral als je beschikt over ervaring en expertise. In sommige studies bleek dat deze keuzes, wanneer gebaseerd op onderbewuste kennis en ervaring, sneller en soms zelfs effectiever kunnen zijn dan langdurige rationele analyse <em className="accent-em">(Socranova, Z.D)</em>. Toch is instinct niet onfeilbaar: beslissingen gemaakt op gevoel kunnen beïnvloed worden door emoties, vooroordelen of onvolledige context <em className="accent-em">(Carrièretijger, Z.D.)</em>. Wanneer de situatie complex is, nieuwe informatie vraagt of duidelijke lange termijngevolgen heeft, is rationeel nadenken juist onmisbaar om betrouwbare en bewuste keuzes te maken.
            </p>
            <p className="j4-text">
              Daarom kies ik ervoor om tussen september 2025 en december 2025 te werken aan een bewuste balans tussen mijn gevoel en rationele overweging. Ik wil leren herkennen wanneer intuïtie waardevol is en wanneer het beter is eerst even adem te halen, alle opties te overzien en bewust na te denken. Ik wil niet meer automatisch handelen, maar ruimte geven aan de afweging. Zo kan ik rustiger, bewuster en effectiever handelen in werk en privé met meer zelfvertrouwen.
            </p>
          </div>
        </div>

        {/* Actie 2 */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "80ms" }}>
          <SectionDivider label="Actie 2" />
          <div className="glow-card pdca-card-style">
            <p className="j4-text">
              Ik heb ervoor gekozen om gedurende drie weken bij belangrijke beslissingen, zowel privé als zakelijk, een{" "}
              <strong className="accent-strong">10-minuten pauze</strong> in te bouwen en deze systematisch te noteren
              in mijn logboek (zie bijlage <strong className="accent-strong">1.12 Dagelijks Beslissingslogboek</strong>).
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
                    {"quotes" in step && step.quotes && (
                      <div className="quote-grid">
                        {step.quotes.map((q) => (
                          <div key={q.name} className="quote-card">
                            <div className="quote-name">{q.name}</div>
                            <p className="quote-text">&quot;{q.text}&quot;</p>
                          </div>
                        ))}
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
          <div
            onClick={() => setSelectedImage("/jaar4/persoonlijk-doel-2/image1.png")}
            className="img-tile-card img-tile-card-single"
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
              className="img-tile-card-img-contain"
              draggable={false}
            />
          </div>
          <p className="img-click-hint-sm">Klik op de afbeelding om te vergroten</p>
        </div>

        {/* Footer nav */}
        <div className="footer-nav-border08">
          <a href="/jaar-4" className="btn-ghost btn-sm">← Terug naar Jaar 4</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>

      </article>
    </main>
  );
}



