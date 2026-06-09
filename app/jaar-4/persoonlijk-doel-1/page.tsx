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
    text: "Mijn doel van september tot december 2025 is om beter te leren afwegen wanneer ik op intuïtie vertrouw en wanneer ik eerst nadenk, zodat ik minder impulsief reageer. Ik plan dagelijks belangrijke beslissingen te noteren, inclusief de situatie, mijn eerste reactie (gevoel of verstand), het resultaat en mijn gevoelens. Aan het einde van de week reflecteer ik om patronen te ontdekken: wanneer werkte intuïtief handelen goed en wanneer had rationeel nadenken beter geholpen? Ik wil ook oefenen met korte pauzes nemen bij last-minute verzoeken en eerst luisteren bij emotionele situaties.",
  },
  {
    num: "02", label: "Do",
    text: "Ik heb dagelijks mijn beslissingen geregistreerd, zowel werk als privé. Dit hielp me bewust stil te staan bij mijn reacties, maar het lukte niet altijd om consequent te zijn; vooral bij drukke of emotionele momenten vergat ik soms notities te maken. Ik merkte dat impulsieve reacties makkelijk optreden bij bekende situaties of onder tijdsdruk, terwijl rationeel nadenken lastig is bij emotionele keuzes. Door korte pauzes te nemen en opties te overwegen, kon ik beter inschatten wat verstandig was, zie onderstaande tabel en reflecties.",
  },
  {
    num: "03", label: "Check",
    text: "Na enkele weken analyseerde ik mijn patronen. Rationeel nadenken hielp vooral bij complexe of praktische keuzes, terwijl intuïtief handelen beter werkte bij sociale of creatieve situaties. Impulsieve beslissingen gaven soms korte voldoening, maar veroorzaakten later stress of spijt.",
    quotes: [
      { name: "Jelte", text: "Dian, echt goed om te zien hoe je gegroeid bent sinds de eerste periode! In periode 2 merk ik duidelijk dat je bewuster keuzes maakt en minder impulsief reageert. Echt een mooie vooruitgang." },
      { name: "Fabiënne", text: "Wat me opvalt is dat je nu veel beter je intuïtie en rationeel nadenken afweegt. Het verschil tussen periode 1 en 2 is echt zichtbaar, je komt veel rustiger en doordachter over bij je beslissingen." },
      { name: "Ella", text: "Je check-fase laat goed zien dat je geleerd hebt van de eerste periode. In periode 2 zie ik dat je meer structuur aanbrengt en bewust pauzes neemt, dat werkt echt." },
      { name: "Thijs", text: "Het is echt leuk om te zien hoe je ontwikkeling zich vertaalt naar je keuzes. Vergeleken met periode 1 merk ik dat je nu veel vaker rationeel nadenkt voordat je handelt." },
      { name: "Tijmen", text: "Dian, het verschil met periode 1 is echt duidelijk! Je bent nu veel bewuster bezig met wanneer je gevoel of verstand volgt, en dat merk je terug in betere resultaten." },
      { name: "Martijn", text: "Het valt echt op hoe je gegroeid bent. In periode 2 zie je veel minder impulsiviteit en meer doordachte beslissingen. Het is duidelijk dat je strategieën echt effect hebben gehad." },
    ],
  },
  {
    num: "04", label: "Act",
    text: "Op basis van de reflectie heb ik mijn aanpak aangepast: bij werk gerelateerde en complexe beslissingen gebruik ik nu systematisch pauzes, checklists en planning, terwijl ik bij sociale of creatieve keuzes vaker mijn gevoel volg maar bewust blijf van de gevolgen. Door dit structureel toe te passen, verbeter ik mijn mentale balans, rust en effectiviteit in werk en privé.",
  },
];

const bewijslasten = [
  "Het eerst schema, waarin wordt bijgehouden wanneer ik handel uit gevoel en wanneer d.m.v. ratio.",
  "Daaropvolgend ben ik gaan reflecteren op het handelen uit gevoel en rationeel.",
  "Vervolgens ben ik opnieuw mijn manier van reageren en handelen gaan weergeven in een tabel.",
  "Tot slot ben ik bewust het rationeel keuzes maken gaan toepassen in mijn dagelijks leven, zowel privé als zakelijk.",
];

const images = [
  "/jaar4/persoonlijk-doel-1/image1.png",
  "/jaar4/persoonlijk-doel-1/image2.png",
  "/jaar4/persoonlijk-doel-1/image3.png",
  "/jaar4/persoonlijk-doel-1/image4.png",
];

export default function PersoonlijkDoel1() {
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
            Persoonlijk doel <span className="accent-span">| Actie 1</span>
          </h1>
          <p className="j4-header-text-wide">
            Ik ga beter leren afwegen wanneer ik op gevoel en wanneer ik eerst even nadenk binnen de periode tussen{" "}
            <strong>september 2025 en december 2025</strong>, zodat ik minder impulsief reageer
            en bewustere keuzes maak in werk en privé.
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

        {/* Actie 1 */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "80ms" }}>
          <SectionDivider label="Actie 1" />
          <div className="glow-card pdca-card-style">
            <p className="j4-text">
              Ik heb ervoor gekozen om de eerste 7 weken situaties op te nemen uit mijn dagelijks leven (privé en zakelijk) om vervolgens daarop te reflecteren, zie tabel in de bijlage <strong className="accent-strong">1.11 Wekelijkse beslissingsreflectie</strong>. Deze weken laten duidelijke patronen zien. Bij praktische of complexe keuzes werkt rationeel nadenken beter, vooral om stress en impulsieve fouten te voorkomen. Door deze oefening 7 weken toe te passen sta ik bewuster stil bij mijn eerste reactie en kan ik gerichter kiezen wanneer ik gevoel of verstand laat spreken. De volgende stap is dit structureel volhouden en ook letten op situaties waarin ik van nature impulsief reageer, zodat ik mijn mentale balans verder verbeter.
            </p>
          </div>
        </div>

        {/* PDCA */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "100ms" }}>
          <SectionDivider label="PDCA-cyclus" />
          <div className="pdca-steps-list">
            {pdcaSteps.map((step, i) => (
              <div key={step.num} className="glow-card pdca-card-style" style={{ transitionDelay: String(i * 40) + "ms" }}>
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
                            <p className="quote-text">"{q.text}"</p>
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
        <div className="reveal reveal-mb40" style={{ transitionDelay: "140ms" }}>
          <SectionDivider label="Bewijslasten" />
          <div className="glow-card pdca-card-style glow-card-mb20">
            <ol className="pdca-ol">
              {bewijslasten.map((item, i) => (
                <li key={i} className="j4-text">{item}</li>
              ))}
            </ol>
          </div>

          <div className="img-tile-grid-4">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(src)}
                className="img-tile-card"
                className="img-tile-card-h200"
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
                  alt={`Bewijs ${i + 1}`}
                  className="img-tile-card-img-contain"
                  draggable={false}
                />
                <div className="img-tile-card-label">{i + 1}/{images.length}</div>
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


