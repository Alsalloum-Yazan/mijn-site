"use client";
import Link from "next/link";

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
          <a href="/jaar-4" className="j4-back-link">← Terug naar Jaar 4</a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Jaar 4 — Vakinhoudelijk doel
          </div>
          <h1 className="j4-h1-sm">
            Vakinhoudelijk doel <span className="accent-span">| Actie 1</span>
          </h1>
          <p className="j4-header-text-wide">
            Binnen de periode tussen <strong>september 2025 t/m december 2025</strong> ga ik
            onderzoeken of neuromarketing invloed heeft op de keuze en aantrekkelijkheid van een product door vier commercials
            te analyseren en een eigen product (föhn) te testen via een enquête, waarbij ik begin met een nulmeting van eerste
            indruk, aantrekkelijkheid en koopintentie.
          </p>
          <p className="j4-italic">
            De PDCA-cyclus is steeds meerdere keren doorlopen, zie bijlage op de website.
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

        {/* Actie 1 */}
        <div className="reveal reveal-mb40" style={{ transitionDelay: "80ms" }}>
          <SectionDivider label="Actie 1" />
          <div className="glow-card pdca-card-style">
            <p className="j4-text-mb">
              Ik heb besloten om de komende vier weken elke week één reclamecommercial te bekijken en goed te letten op hoe de makers mijn aandacht proberen te trekken. Bij elke commercial maak ik aantekeningen over dingen zoals kleurgebruik, woorden, emoties en andere manieren waarop ze proberen invloed uit te oefenen. Ik beschrijf ook hoe die keuzes samen de boodschap sterker maken.
            </p>
            <p className="j4-text-mb">
              Door dit vier weken lang te doen, krijg ik een beter beeld van de verschillende manieren waarop neuromarketing in reclame wordt gebruikt en leer ik stap voor stap hoe deze technieken werken. Ik kies voor deze actie, omdat ik het ook superleuk vind om mij hier in te verdiepen en op deze manier te kijken naar de commercial. Bij deze actie heb ik ervoor gekozen, om bij iedere reclame die ik bekijk, de PDCA-cyclus op toe te passen.
            </p>
            <p className="j4-text">
              Ik ga per reclame/commercial analyseren wat hier is toegepast aan Neuromarketing, om later beter te herkennen hoe je dit toepast en wat het aan de kijker/consument overbrengt en -haalt. Ik zal dus per doorlopen cyclus, steeds meer neuromarketing toepassen.
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
                    <p className="j4-text j4-text-preline">{step.text}</p>
                    {"bullets" in step && step.bullets && (
                      <div className="pdca-bullets-wrap">
                        <p className="pdca-bullets-title">
                          Specifieke verbeterpunten:
                        </p>
                        {step.bullets.map((b) => (
                          <div key={b.label} className="pdca-bullet-row">
                            <span className="pdca-bullet-label">{b.label}</span>
                            <span className="pdca-bullet-text">{b.text}</span>
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
          <div className="glow-card pdca-card-style">
            <p className="j4-text j4-text-mb20">
              Hierbij de linkjes naar de commercials:
            </p>
            <div className="commercial-list">
              {commercials.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="commercial-link"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(167,139,250,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.04)";
                  }}
                >
                  <span className="commercial-num">#{i + 1}</span>
                  <span className="commercial-brand">{c.brand}</span>
                  <span className="commercial-url">{c.url}</span>
                  <span className="commercial-arrow">↗</span>
                </a>
              ))}
            </div>
            <p className="j4-text-italic-sm">
              Uitwerking is d.m.v. PDCA, zie bijlage in platte tekst 1.24.
            </p>
          </div>
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


