"use client";
import Link from "next/link";

const LogboekCard = ({ situatie, datum, tekst }: { situatie: string; datum: string; tekst: string }) => (
  <div className="glow-card card-hover logboek-card">
    <div className="logboek-bar" />
    <div className="logboek-inner">
      <div className="logboek-header">
        <h3 className="logboek-title">{situatie}</h3>
        <span className="logboek-date">{datum}</span>
      </div>
      <p className="logboek-text">{tekst}</p>
    </div>
  </div>
);

const SectionDivider = ({ label }: { label: string }) => (
  <div className="section-divider">
    <div className="section-divider-line-l" />
    <span className="section-divider-label">{label}</span>
    <div className="section-divider-line-r" />
  </div>
);

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="glow-card image-card-simple">
    <img loading="lazy" decoding="async" src={src} alt={alt} className="image-card-img" />
  </div>
);

export default function ActiesPage() {
  const logboekDeel1 = [
    {
      situatie: "In de supermarkt",
      datum: "14 oktober 2024",
      tekst:
        'Ik stond in de rij bij de kassa en opeens probeerde iemand voor te dringen. Normaal zou ik niets zeggen en het maar laten gebeuren, maar deze keer bleef ik kalm en zei ik: "Sorry, maar ik stond hier al." Het voelde goed om voor mezelf op te komen zonder onbeleefd te zijn.',
    },
    {
      situatie: "Op werk/school",
      datum: "3 november 2024",
      tekst:
        'Een collega vroeg of ik een taak kon overnemen terwijl ik al druk bezig was met mijn eigen werk. Vroeger had ik misschien toegegeven om niemand teleur te stellen, maar deze keer zei ik vriendelijk maar duidelijk: "Ik zou je graag willen helpen, maar ik heb nu echt geen ruimte in mijn planning."',
    },
    {
      situatie: "Bij vrienden",
      datum: "1 oktober 2024",
      tekst:
        'Tijdens een avondje uit stelde iemand voor om naar een club te gaan, terwijl ik me daar niet comfortabel bij voelde. Vroeger zou ik misschien gewoon meegaan om de sfeer niet te verpesten, maar deze keer zei ik: "Ik denk dat ik deze keer oversla, maar ik wacht wel op jullie of zie jullie later weer." Tot mijn verbazing vonden ze het helemaal prima, en ik voelde me trots dat ik mijn eigen voorkeur uitsprak.',
    },
  ];

  const logboekDeel2 = [
    {
      situatie: "In het OV",
      datum: "31 december 2024",
      tekst:
        'Ik zat in een drukke bus en iemand zette zijn tas op de stoel naast zich, terwijl er mensen stonden. Ik besloot er iets van te zeggen en vroeg beleefd: "Mag ik daar gaan zitten, alstublieft?" De persoon keek even verbaasd, maar schoof zijn tas opzij. Het voelde goed om niet stil te blijven en mezelf te laten horen.',
    },
    {
      situatie: "In een winkel",
      datum: "6 januari 2025",
      tekst:
        'Ik had een jas gekocht die na een week al beschadigd was. Normaal zou ik twijfelen of ik wel terug moest gaan, maar dit keer besloot ik meteen actie te ondernemen. Ik liep naar de winkel en zei: "Deze jas heeft binnen een week schade gekregen, en ik zou graag willen weten hoe dit opgelost kan worden." De medewerker was heel begripvol en bood een vervanging aan.',
    },
    {
      situatie: "Tijdens een kerstdiner",
      datum: "22 december 2024",
      tekst:
        'Ik was in een discussie met mijn vriendinnengroep en iemand maakte een opmerking waar ik het totaal niet mee eens was. In plaats van mijn mond te houden, zei ik rustig: "Ik zie het anders. Mag ik uitleggen waarom?" Het gesprek verliep daarna veel respectvoller, en ik was blij dat ik mijn mening had gedeeld.',
    },
  ];

  const logboekDeel3 = [
    {
      situatie: "Thuis met familie",
      datum: "5 januari 2025",
      tekst:
        'Mijn familie vroeg of ik kon helpen met een klus terwijl ik eigenlijk even rust nodig had. In plaats van automatisch ja te zeggen, vertelde ik eerlijk: "Ik wil straks wel helpen, maar nu heb ik even tijd voor mezelf nodig." Ze reageerden begripvol, en ik voelde me goed dat ik mijn eigen grenzen bewaakte.',
    },
    {
      situatie: "Bij de dokter",
      datum: "20 november 2024",
      tekst:
        'Ik had een afspraak met een dokter en kreeg een advies waar ik vragen over had. In plaats van het klakkeloos aan te nemen, vroeg ik door: "Kunt u uitleggen waarom dit de beste optie is? Zijn er alternatieven?" Dat gaf me een beter begrip en meer vertrouwen in de beslissing.',
    },
  ];

  return (
    <main>
      <article className="content-page">

        {/* Header */}
        <div className="reveal">
          <a href="/jaar-2" className="post-back-link">
            ← Terug naar Jaar 2
          </a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 className="post-h1">
            Mijn <span className="g-text">acties</span>
          </h1>
          <div className="divider divider-mb40" />
        </div>

        {/* Doel 1: Assertiviteit */}
        <div className="reveal reveal-mb72" style={{ transitionDelay: "60ms" }}>
          <div className="doel-header">
            <div className="doel-num-icon doel-num-icon-1">01</div>
            <div>
              <div className="doel-num-label">Doel 1</div>
              <h2 className="doel-num-title">Assertiviteit</h2>
            </div>
          </div>

          <p className="doel-lead">
            Aan de hand van de afgelopen periode heb ik mijn eigen assertiviteit waargenomen. Hieronder staan concrete situaties waarin ik bewust assertief heb gehandeld.
          </p>

          <SectionDivider label="Bewijs — assertiviteit" />
          <div className="grid-auto-fill-280 mb40">
            <ImageCard src="/jaar2/acties/assertiviteit.png" alt="Assertiviteit bewijs" />
            <ImageCard src="/jaar2/acties/de assertiveitstest.png" alt="De assertiveitstest" />
            <ImageCard src="/jaar2/acties/uitslag van de tijdwinst.png" alt="Uitslag van de tijdwinst" />
          </div>

          <SectionDivider label="Logboek assertiviteit — Deel 1" />
          <div className="grid-1col-gap16 mb40">
            {logboekDeel1.map((item, i) => (
              <LogboekCard key={i} {...item} />
            ))}
          </div>

          <SectionDivider label="Logboek assertiviteit — Deel 2" />
          <div className="grid-1col-gap16 mb40">
            {logboekDeel2.map((item, i) => (
              <LogboekCard key={i} {...item} />
            ))}
          </div>

          <SectionDivider label="Logboek assertiviteit — Deel 3" />
          <div className="grid-1col-gap16">
            {logboekDeel3.map((item, i) => (
              <LogboekCard key={i} {...item} />
            ))}
          </div>
        </div>

        <SectionDivider label="Weekly Planner" />
        <div className="grid-1col-gap16 mb40">
          <ImageCard src="/jaar2/acties/weekly planner.png" alt="Weekly planner" />
        </div>

        {/* Doel 2: Stage */}
        <div className="reveal reveal-mb72" style={{ transitionDelay: "120ms" }}>
          <div className="doel-header">
            <div className="doel-num-icon doel-num-icon-2">02</div>
            <div>
              <div className="doel-num-label">Doel 2</div>
              <h2 className="doel-num-title">Op zoek naar een stageplaats</h2>
            </div>
          </div>

          <p className="doel-lead">
            Doel 2 is onder doel 1 terug te vinden. Hieronder de acties die zijn ondernomen rondom het vinden van een stageplaats.
          </p>

          <SectionDivider label="Bewijs — stage" />
          <div className="grid-auto-fill-280 mb40">
            <ImageCard src="/jaar2/acties/motivatie.png" alt="Motivatie" />
            <ImageCard src="/jaar2/acties/dian cv 21 jaar.png" alt="CV Dian 21 jaar" />
            <ImageCard src="/jaar2/acties/online marketing stage feb - julie.png" alt="Online marketing stage" />
            <ImageCard src="/jaar2/acties/lijst.png" alt="Lijst bedrijven" />
          </div>

          <div className="grid-auto-fill-260 mb-[24px]">
            {[
              { stap: "Doelen opstellen", desc: "In kaart brengen naar wat voor soort stage ik op zoek ben, zodat ik doelgericht kan zoeken." },
              { stap: "CV aanpassen", desc: "CV aangevuld met updates en in een andere stijl vormgegeven — passend bij mijn huidige stijl." },
              { stap: "Bedrijven contacteren", desc: "Fingerspitz, LVNG, Craze en GR8 gecontacteerd. Niet afwachtend, maar proactief meerdere bedrijven benaderd." },
              { stap: "Herinneringen sturen", desc: "Na het niet ontvangen van een reactie na een week (in werkdagen) herinneringen gestuurd." },
            ].map((item, i) => (
              <div key={i} className="glow-card stap-card">
                <div className="stap-num-icon">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="stap-title">{item.stap}</h3>
                <p className="stap-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Reflectie */}
          <div className="glow-card reflectie-card">
            <div className="reflectie-inner">
              <div className="reflectie-emoji">💬</div>
              <div>
                <div className="reflectie-label">Reflectie</div>
                <p className="reflectie-text">
                  Het vinden van een stageplaats bleef ondanks de verschillende focuspunten niet gemakkelijk. Waar ik van twee bedrijven hoop heb gekregen, bleef een definitief resultaat helaas uit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div className="footer-nav-mt64">
          <a href="/jaar-2" className="btn-ghost btn-sm">← Terug naar Jaar 2</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>

      </article>
    </main>
  );
}


