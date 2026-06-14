"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

function ZoomImage({
  src,
  alt,
  setOpenImg,
}: {
  src: string;
  alt: string;
  setOpenImg: (src: string) => void;
}) {
  return (
    <>
      <div onClick={() => setOpenImg(src)} className="zoom-img-wrap">
        <img loading="lazy" decoding="async" src={src} alt={alt} className="zoom-img" />

        <div
          className="zoom-overlay"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.background =
              "rgba(5, 84, 70, 0.28)";
            const icon = e.currentTarget.querySelector(
              ".zoom-icon"
            ) as HTMLElement;
            if (icon) icon.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.background =
              "rgba(5, 84, 70, 0)";
            const icon = e.currentTarget.querySelector(
              ".zoom-icon"
            ) as HTMLElement;
            if (icon) icon.style.opacity = "0";
          }}
        >
          <div className="zoom-icon">Vergroot afbeelding</div>
        </div>
      </div>

      <p className="zoom-hint">Klik om te vergroten</p>
    </>
  );
}

function VideoCard({
  title,
  url,
  thumbnail,
}: {
  title: string;
  url: string;
  thumbnail: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-card card-hover presentatie-video-card"
    >
      <div className="presentatie-video-thumb-wrap">
        <img loading="lazy" decoding="async"           src={thumbnail}
          alt={title}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="presentatie-video-thumb-img"
        />

        <div className="presentatie-video-mymedia-badge">MYMEDIA</div>

        <div className="presentatie-video-play-overlay">
          <div
            className="presentatie-video-play-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.12)";
              e.currentTarget.style.background = "rgba(5,84,70,0.72)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "rgba(0,0,0,0.45)";
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="presentatie-video-play-icon"
            >
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="presentatie-video-body">
        <h3 className="presentatie-video-title">{title}</h3>
        <p className="presentatie-video-link">Bekijk op Avans MyMedia →</p>
      </div>
    </a>
  );
}

export default function Presenteren() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const videos = [
    {
      title: "Uitgevoerde presentatie",
      url: "https://mymedia.avans.nl/media/t/0_j83uisax",
      thumbnail:
        "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_j83uisax/width/600/height/340",
    },
    {
      title: "Oefen podiummoment",
      url: "https://mymedia.avans.nl/media/Oefen+podiummoment/0_qbwufw44",
      thumbnail:
        "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_qbwufw44/width/600/height/340",
    },
  ];

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <div className="reveal">
          <a href="/Afstuderen" className="post-back-link">
            ← Terug naar Afstuderen
          </a>

          <div className="badge post-badge">
            <span className="badge-dot" />
            Afstuderen — Persoonlijk leerdoel 1
          </div>

          <h1 className="post-h1">
            <span className="g-text">
              Persoonlijk leerdoel 1: Presenteren
            </span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Uiterlijk op 10 juni 2026 heb ik mijn presentatievaardigheden
              verbeterd door binnen mijn afstudeerperiode minimaal drie
              presentaties te geven, feedback te ontvangen van minimaal drie
              verschillende personen en deze feedback zichtbaar te verwerken in
              mijn volgende presentatie.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Succescriterium</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Mijn leerdoel is behaald wanneer minimaal twee van de drie
            feedbackgevers aangeven dat mijn presentatie duidelijk, logisch
            opgebouwd en prettig te volgen is. Daarnaast laat ik zien dat ik mij
            heb ontwikkeld in structuur, spreektempo en het overbrengen van mijn
            kernboodschap.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Toelichting</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik let hierbij vooral op rustiger spreken, een duidelijke opbouw,
            verstaanbaarheid en het maken van keuzes tussen hoofd- en bijzaken.
            Zo toon ik aan dat ik niet alleen vaker heb gepresenteerd, maar ook
            bewust ben gegroeid in mijn manier van presenteren.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">1.1 Onderbouwing persoonlijk doel</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            In situaties waarin ik moet presenteren, merk ik dat ik vaak
            enthousiast ben om mijn verhaal te vertellen. Ik wil dan graag laten
            zien dat ik mijn onderwerp goed begrijp en ik wil het zo volledig
            mogelijk uitleggen. Juist daardoor loop ik er regelmatig tegenaan
            dat ik veel te uitgebreid vertel. Ik vind het lastig om hoofd- en
            bijzaken van elkaar te onderscheiden, omdat voor mijn gevoel veel
            informatie belangrijk is. Hierdoor raak ik soms de kern van mijn
            verhaal kwijt.
          </p>

          <p className="intro-divider">
            Daarnaast merk ik dat ik vaak sneller ga praten wanneer ik
            presenteer. Dat komt niet doordat ik onzeker ben over de inhoud,
            maar juist omdat ik veel wil vertellen in een te korte tijd. In mijn
            hoofd zit dan al zoveel informatie dat ik bang ben iets te vergeten
            of niet volledig genoeg te zijn. Daardoor ga ik sneller praten dan
            eigenlijk prettig is voor mezelf en voor degene die luistert.
            Achteraf heb ik dan soms het gevoel dat mijn verhaal minder
            duidelijk is overgekomen dan ik had gewild, terwijl ik juist veel te
            veel te vertellen had.
          </p>

          <p className="intro-divider">
            Presenteren draait niet alleen om inhoudelijke kennis, maar ook om
            structuur, rust en het vermogen om een boodschap helder over te
            brengen (Carrièretijger, Z.D.). Juist het maken van keuzes in wat ik
            wel en niet vertel, speelt daarin een rol. Ook het tempo van spreken
            heeft invloed op hoe mijn presentatie zal worden ontvangen. Als ik
            te snel blijf praten tijdens presentaties, zal mijn boodschap ook in
            de toekomst minder goed over blijven komen.
          </p>

          <p className="intro-divider">
            Daarom kies ik ervoor om tijdens mijn afstudeerperiode bewust te
            werken aan mijn presentatievaardigheden. Ik wil leren om min verhaal
            korter en krachtiger te maken, beter onderscheid te maken tussen
            hoofd- en bijzaken en rustiger te spreken tijdens een presentatie.
            Door hier actief mee te oefenen, wil ik ervoor zorgen dat mijn
            presentaties niet alleen inhoudelijk sterk zijn, maar ook duidelijk,
            rustig en prettig om naar te luisteren.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Presenteren</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Draagt bij aan mijn profilering doordat ik leer om mijn verhaal
            korter, duidelijker en overtuigender over te brengen.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Voorafgaand</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik heb twee verschillende tests uitgevoerd om mijn
            presentatievaardigheden in kaart te brengen. Het doel was om te
            bepalen waar ik momenteel sta, beter te begrijpen wat er van een
            goede presentatie wordt verwacht en inzicht te krijgen in welke
            inhoud en aanpak het meest effectief zijn. Deze inzichten neem ik
            mee in de voorbereiding op mijn podiummoment.
          </p>

          <div className="test-image-grid">
            <div className="test-image-card">
              <div>
                <p className="intro-divider">
                  Test 1: 8/10
                  <br />
                  (Mark Robinson, 8 juli 2025).
                </p>
              </div>

              <ZoomImage
                src="/afstuderen/pl/test-1.webp"
                alt="Test 1"
                setOpenImg={setOpenImg}
              />
            </div>

            <div className="test-image-card">
              <div>
                <p className="intro-divider">
                  Test 2: 69%
                  <br />
                  (Bea Kuijs, Z.D.)
                </p>
              </div>

              <ZoomImage
                src="/afstuderen/pl/test-2.webp"
                alt="Test 2"
                setOpenImg={setOpenImg}
              />
            </div>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">1.2 Actieplan presenteren</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            In dit actieplan beschrijf ik hoe ik mijn presentatievaardigheden
            stap voor stap wil verbeteren. Per actie staat wat ik ga doen, welk
            bewijs ik verzamel en welke feedback ik gebruik om verder te
            groeien.
          </p>

          <div className="table-wrap">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Actie</th>
                  <th>Uitvoering</th>
                  <th>Bewijs</th>
                  <th>Feedback</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Actie 1: nulmeting presentatie</td>
                  <td>
                    Ik neem een korte presentatie op over mijn
                    afstudeeronderwerp of leerdoelen. Vooraf neem ik deze
                    presentatie minimaal 3 keer door, waarbij ik let op
                    structuur, tempo en kernboodschap.
                  </td>
                  <td>Video-opname of MyMedia-link, korte zelfreflectie.</td>
                  <td>
                    Feedback van medestudent, collega of docent op
                    duidelijkheid, tempo en opbouw.
                  </td>
                </tr>

                <tr>
                  <td>Actie 2: verbeterde presentatie geven</td>
                  <td>
                    Ik geef een oefenpresentatie voor mijn eindgesprek. Deze
                    eindpresentatie neem ik minimaal 3 keer door, met extra
                    aandacht voor rust, kern, timing en overtuiging.
                  </td>
                  <td>Definitieve slides, oefenversie en feedbackformulier</td>
                  <td>
                    Feedback van bedrijfsbegeleider en eventueel ook
                    medestudent.
                  </td>
                </tr>

                <tr>
                  <td>Actie 3: eindpresentatie oefenen en aanscherpen</td>
                  <td>
                    Ik pas alle feedback toe en presenteer nog een keer op mijn
                    afstudeerbedrijf (AllSens).
                  </td>
                  <td>Het eindresultaat voor het officiële moment.</td>
                  <td>
                    Feedback van minimaal twee personen, waaronder bij voorkeur
                    bedrijfsbegeleider/docent.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">
              1.3 Indicatoren voor groei en reflectievragen
            </span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            De reflectievragen zijn terug te lezen in de bijlagen.
          </p>

          <ZoomImage
            src="/afstuderen/pl/reflectievragen.webp"
            alt="Reflectievragen"
            setOpenImg={setOpenImg}
          />
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">
              1.4 Opname bedrijfspresentatie | 1e keer
            </span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">Uitgevoerde presentatie</p>

          <div className="presentatie-videos-grid">
            <VideoCard
              title={videos[0].title}
              url={videos[0].url}
              thumbnail={videos[0].thumbnail}
            />
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">
              1.5 PDCA-cyclus | 1e keer | Actie 1
            </span>
          </h2>

          <div className="divider divider-mb20" />

          <h3 className="h3-sub">Plan</h3>
          <p className="intro-divider">
            Voor mijn eerste presentatie wilde ik mijn afstudeeronderzoek
            duidelijk en professioneel presenteren. Mijn doel was om structuur
            aan te brengen in mijn verhaal, mijn kernboodschap helder over te
            brengen en zelfverzekerder te presenteren. Vooraf heb ik de
            presentatie meerdere keren geoefend om mijn tempo, inhoud en opbouw
            te verbeteren.
          </p>

          <h3 className="h3-sub">Do</h3>
          <p className="intro-divider">
            Ik heb mijn eerste presentatie gegeven aan collega’s van AllSens en
            feedback ontvangen op mijn manier van presenteren, de inhoud van mijn
            slides en de duidelijkheid van mijn verhaal. Tijdens de presentatie
            heb ik mijn onderzoek stap voor stap uitgelegd en geprobeerd zoveel
            mogelijk relevante informatie mee te nemen.
          </p>

          <h3 className="h3-sub">Check</h3>
          <p className="intro-divider">
            Uit de feedback bleek dat mijn presentatie inhoudelijk sterk en
            compleet was. Er werd aangegeven dat het zichtbaar was dat ik
            dagelijks met het onderwerp bezig ben en dat ik veel werk had
            verricht. Ook waren de slides visueel goed opgebouwd en professioneel
            vormgegeven.
          </p>

          <p className="intro-divider">
            Daarnaast kreeg ik meerdere verbeterpunten terug. Mijn spreektempo
            lag vrij hoog, waardoor sommige onderdelen lastig te volgen waren
            voor luisteraars die niet bekend zijn met mijn onderzoek. Er werd
            benoemd dat ik rustiger mag praten, omdat ik van nature snel spreek.
            Ook waren sommige slides erg vol met tekst. Hierdoor moesten
            luisteraars tegelijkertijd lezen en luisteren, wat zorgde voor veel
            informatie in één keer. Bij enkele afbeeldingen en tekstblokken mocht
            ik meer mondelinge uitleg geven, zodat alles beter te volgen is voor
            mensen die volledig blanco in het onderwerp staan.
          </p>

          <h3 className="h3-sub">Act</h3>
          <p className="intro-divider">
            Voor mijn volgende presentatie wil ik bewuster letten op mijn
            spreektempo en meer rust nemen tijdens het presenteren. Daarnaast wil
            ik mijn slides versimpelen door minder tekst te gebruiken en
            informatie beter te verdelen over meerdere slides. Ook ga ik extra
            aandacht besteden aan het uitleggen van afbeeldingen en begrippen,
            zodat mijn presentatie duidelijk blijft voor een publiek dat mijn
            onderzoek nog niet kent. Op basis van deze feedback wil ik mijn
            volgende presentatie overzichtelijker, rustiger en toegankelijker
            maken.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">
              1.6 Actie 2: Oefenmoment met docentbegeleider en studiegenoten
            </span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Vandaag had ik de kans om mijn podiummoment te oefenen. Dat liep
            niet helemaal zoals ik had gehoopt. Omdat ik het toch spannend vond,
            begon ik weer te snel te praten en raakte ik op een gegeven moment
            zelfs volledig de draad kwijt. Gelukkig wist Ben mij gerust te
            stellen. Hij gaf aan dat ik praktisch gezien nog de tijd heb,
            voordat ik de presentatie daadwerkelijk moet geven.
          </p>

          <p className="intro-divider">
            Als ik eerlijk ben, ligt mijn focus op dit moment vooral bij de
            deadlines van maandag 15 juni. Vandaag is het 8 juni en mijn
            podiummoment vindt pas plaats op 30 juni. Dat besef gaf me ook wat
            meer rust.
          </p>

          <p className="intro-divider">
            Na vandaag heb ik besloten om mijn ouders mee te nemen op de dag van
            de presentatie. Niet in de zaal zelf, maar wel op de gang of beneden
            in het gebouw. Het idee dat zij in de buurt zijn, geeft me extra
            steun en vertrouwen dat ik ga slagen.
          </p>

          <p className="intro-divider">
            Ik ga de komende weken alles op alles zetten om de laatste loodjes
            succesvol af te ronden en mijn presentatie verder aan te scherpen.
            Tijdens het oefenen merkte ik namelijk ook dat ik vastliep, omdat ik
            niet meer volledig achter bepaalde onderdelen van mijn presentatie
            stond. Sommige stukken voelden omslachtig aan en daardoor werd het
            lastiger om mijn verhaal vloeiend te vertellen. De komende tijd wil
            ik daarom kritisch kijken naar de inhoud, zodat de presentatie beter
            aansluit bij mijn eigen verhaal en een stuk sterker staat wanneer ik
            deze op 30 juni presenteer.
          </p>

          <p className="intro-divider">Link naar de presentatie:</p>

          <div className="presentatie-videos-grid">
            <VideoCard
              title={videos[1].title}
              url={videos[1].url}
              thumbnail={videos[1].thumbnail}
            />
          </div>

          <p className="intro-divider">Ontvangen feedback op de presentatie:</p>

          <ul className="feedback-list">
            <li>
              Je hebt al een goede draad in je verhaal – Xander van Leeuwen.
            </li>
            <li>
              Het was te veel ‘en toen en toen en toen’ – Ben Embregts.
            </li>
            <li>
              Je kan jezelf helpen door een paar woorden tekst op de dia’s te
              zetten in plaats van alle tekst uit je hoofd leren (houvast) – Ben
              Embregts.
            </li>
            <li>
              Je verhaal kwam niet helemaal over, terwijl ik wel zie dat de lijn
              er wel in zit – Ben Embregts.
            </li>
            <li>
              ‘’Doorzettingsvermogen blinkt er wel in uit, maar je wil denk ik
              niet dat ik muizen onthoud’’ – Ben Embregts.
            </li>
            <li>
              Stage jaar 3 leek in Spanje, dus dat was niet handig verwoord –
              Ben Embregts.
            </li>
            <li>
              Al zijn het 3 woorden op je presentatie, die de kernboodschap
              weergeven, geen hele zinnen (want dan heb je het risico op
              voorlezen) – Ben Embregts.
            </li>
            <li>
              Onderzoek benoemen, door dat niet te doen, doe je jezelf te kort –
              Ben Embregts.
            </li>
            <li>
              Het benoemen van het doorzettingsvermogen, is zeker de moeite
              waard om te benoemen – Ben Embregts.
            </li>
          </ul>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">1.7 PDCA-cyclus | Actie 2</span>
          </h2>

          <div className="divider divider-mb20" />

          <h3 className="h3-sub">Plan</h3>
          <p className="intro-divider">
            Voor mijn persoonlijke ontwikkeling wilde ik werken aan mijn
            presentatievaardigheden en het verminderen van mijn spanning tijdens
            het spreken voor een groep. In aanloop naar mijn podiummoment op 30
            juni heb ik daarom een oefenpresentatie gegeven aan mijn
            docentbegeleider en studiegenoten. Mijn doel was om feedback te
            verzamelen, inzicht te krijgen in verbeterpunten en meer vertrouwen
            op te bouwen voor de definitieve presentatie.
          </p>

          <h3 className="h3-sub">Do</h3>
          <p className="intro-divider">
            Op 8 juni heb ik mijn presentatie geoefend tijdens een oefenmoment
            met mijn docentbegeleider Ben Embregts en enkele studiegenoten.
            Tijdens deze oefening presenteerde ik mijn verhaal zoals ik dat op
            het podiummoment wilde doen. Ondanks mijn voorbereiding merkte ik dat
            ik door zenuwen weer te snel begon te praten. Hierdoor verloor ik op
            een bepaald moment de draad van mijn verhaal.
          </p>

          <p className="intro-divider">
            Na afloop ontving ik uitgebreide feedback van Ben, met een
            aanvullende opmerking van Xander. Zij gaven aan dat er al een
            duidelijke lijn in mijn verhaal zat, maar dat sommige onderdelen nog
            niet goed overkwamen. Daarnaast kreeg ik tips om meer houvast te
            creëren door kernwoorden op de dia&apos;s te plaatsen in plaats van alles
            uit het hoofd te leren.
          </p>

          <h3 className="h3-sub">Check</h3>
          <p className="intro-divider">
            Het oefenmoment heeft mij waardevolle inzichten gegeven. Ik
            realiseerde me dat mijn spanning nog steeds invloed heeft op mijn
            manier van presenteren. Door het snelle praten en het kwijtraken van
            de draad kwam mijn verhaal minder sterk over dan de inhoud
            daadwerkelijk was.
          </p>

          <p className="intro-divider">
            Tegelijkertijd bleek uit de feedback dat de basis van mijn
            presentatie goed staat. Xander gaf aan dat er al een goede rode
            draad aanwezig is. Ben wees mij erop dat ik mezelf tekortdoe door
            bepaalde onderdelen, zoals mijn onderzoek en mijn doorzettingsvermogen,
            onvoldoende te benoemen. Ook gaf hij aan dat sommige formuleringen
            onduidelijk waren, waardoor bijvoorbeeld de indruk ontstond dat mijn
            derdejaars stage in Spanje had plaatsgevonden.
          </p>

          <p className="intro-divider">
            Daarnaast merkte ik tijdens het presenteren dat ik zelf niet meer
            volledig achter bepaalde onderdelen van mijn presentatie stond.
            Hierdoor werd het lastiger om mijn verhaal natuurlijk en overtuigend
            te vertellen. Dit was een belangrijk inzicht, omdat het verklaarde
            waarom ik op sommige momenten vastliep.
          </p>

          <h3 className="h3-sub">Act</h3>
          <p className="intro-divider">
            Op basis van de ontvangen feedback ga ik mijn presentatie de komende
            weken verder verbeteren. Ik wil kritisch kijken naar de inhoud en
            onderdelen herschrijven die niet meer goed aansluiten bij mijn eigen
            verhaal. Daarnaast ga ik kernwoorden toevoegen aan mijn dia&apos;s, zodat
            ik tijdens het presenteren meer houvast heb zonder volledige teksten
            voor te lezen.
          </p>

          <p className="intro-divider">
            Ook wil ik extra aandacht besteden aan het benoemen van mijn
            onderzoek en mijn doorzettingsvermogen, omdat dit volgens de feedback
            belangrijke onderdelen van mijn ontwikkeling laten zien. Verder blijf
            ik oefenen om rustiger te spreken en meer vertrouwen te krijgen in
            mijn presentatie.
          </p>

          <p className="intro-divider">
            Om mezelf extra steun te geven tijdens het daadwerkelijke
            podiummoment heb ik besloten mijn ouders mee te nemen naar Avans.
            Hoewel zij niet in de zaal aanwezig zullen zijn, geeft het mij rust
            om te weten dat zij in de buurt zijn. Met deze verbeterpunten en
            extra voorbereiding verwacht ik mijn presentatie op 30 juni met meer
            zelfvertrouwen en overtuiging te kunnen geven.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">1.8 Actie 3: Afsluiting presentatie AllSens</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Vandaag had ik mijn laatste oefenmoment voor mijn podiummoment bij AllSens. Ik heb ervoor gekozen om vooral te vertellen wat er uit de interviews is gekomen. Ik besefte mij namelijk dat het voor AllSens minder relevant is om uitgebreid stil te staan bij mijn voortgang vanaf jaar 1. De bevindingen uit de interviews sluiten beter aan bij de praktijk en geven AllSens meer inzicht in de kansen rondom schoonmaakbedrijven.
          </p>

          <p className="intro-divider">
            Voor dit oefenmoment had ik één belangrijk doel: mijn spreektempo verlagen. Dit blijft voor mij de grootste uitdaging tijdens presenteren. Wanneer ik spanning ervaar, merk ik dat ik sneller ga praten. Daardoor kan mijn verhaal minder rustig overkomen en bestaat de kans dat belangrijke informatie minder duidelijk wordt overgebracht.
          </p>

          <p className="intro-divider">
            Met dit oefenmoment wilde ik daarom bewust oefenen met rustiger spreken. Ik wilde mijn verhaal duidelijk en begrijpelijk vertellen, zodat de inzichten uit de interviews goed overkomen en ik met meer vertrouwen richting mijn uiteindelijke podiummoment kan werken.
          </p>

          <p className="intro-divider">Gegeven presentatie:</p>

          <div className="external-link-btn-wrap">
            <a
              href="https://canva.link/ezf8mnyi7ms6ca0"
              target="_blank"
              rel="noreferrer"
              className="external-link-btn"
            >
              <span>Bekijk presentatie (Canva)</span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <p className="intro-divider">Link naar de presentatie:</p>

          <div className="presentatie-videos-grid">
            <VideoCard
              title="Einde stageperiode presentatie"
              url="https://mymedia.avans.nl/media/Einde+stageperiode+presentatie/0_q4dbbe1y"
              thumbnail="https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_q4dbbe1y/width/600/height/340"
            />
          </div>

          <p className="intro-divider">Ontvangen feedback op de presentatie:</p>

          <ul className="feedback-list">
            <li>Ik praatte niet te snel.</li>
            <li>Ik kwam rustig over.</li>
            <li>De presentatie was duidelijk.</li>
            <li>Ik moest op twee momenten even nadenken, maar dat is normaal.</li>
            <li>Over het algemeen ging de presentatie goed.</li>
          </ul>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">1.9 PDCA-cyclus | Actie 3</span>
          </h2>

          <div className="divider divider-mb20" />

          <h3 className="h3-sub">Plan</h3>
          <p className="intro-divider">
            Voor mijn laatste oefenmoment bij AllSens wilde ik de resultaten van mijn onderzoek op een duidelijke en professionele manier presenteren. Ik had ervoor gekozen om de focus te leggen op de bevindingen uit de interviews met schoonmaakbedrijven, omdat deze inzichten het meest relevant zijn voor AllSens. Mijn belangrijkste persoonlijke leerdoel tijdens deze presentatie was het verlagen van mijn spreektempo. Tijdens eerdere presentaties merkte ik namelijk dat ik door spanning vaak te snel praatte, waardoor mijn verhaal minder rustig overkwam.
          </p>

          <h3 className="h3-sub">Do</h3>
          <p className="intro-divider">
            Tijdens het oefenmoment presenteerde ik de belangrijkste resultaten van mijn onderzoek. Ik vertelde hoe ik mijn doelgroep had geselecteerd, welke inzichten uit de interviews naar voren kwamen en welk advies hieruit voortkwam voor AllSens. Daarbij probeerde ik bewust rustiger te spreken en regelmatig korte pauzes in te lassen.
          </p>

          <p className="intro-divider">
            Tijdens de presentatie merkte ik dat ik meer controle had over mijn spreektempo dan bij eerdere presentaties. Op enkele momenten moest ik even nadenken over wat ik wilde zeggen, maar ik wist mijn verhaal vervolgens weer op te pakken. Na afloop ontving ik feedback op mijn presentatie.
          </p>

          <h3 className="h3-sub">Check</h3>
          <p className="intro-divider">
            Uit de ontvangen feedback bleek dat mijn belangrijkste leerdoel grotendeels was behaald. Er werd aangegeven dat ik niet te snel sprak en dat ik rustig overkwam tijdens het presenteren. Daarnaast werd benoemd dat mijn presentatie duidelijk was en dat de rode lijn van het verhaal goed te volgen was.
          </p>

          <p className="intro-divider">
            Hoewel ik op twee momenten even moest nadenken, werd aangegeven dat dit normaal is en niet storend was voor de presentatie. Deze feedback gaf mij vertrouwen, omdat mijn grootste aandachtspunt juist het spreektempo was. Vergeleken met eerdere presentatiemomenten heb ik hierin duidelijk vooruitgang geboekt.
          </p>

          <h3 className="h3-sub">Act</h3>
          <p className="intro-divider">
            Op basis van dit oefenmoment wil ik mijn huidige aanpak vasthouden richting het definitieve podiummoment. Het bewust letten op mijn spreektempo heeft een positief effect gehad en ik wil deze werkwijze blijven toepassen tijdens toekomstige presentaties.
          </p>

          <p className="intro-divider">
            Daarnaast wil ik mijn presentatie nog enkele keren oefenen, zodat ik nog meer vertrouwd raak met de inhoud. Hierdoor verwacht ik minder momenten te hebben waarop ik moet nadenken over de volgende stap in mijn verhaal. Met deze voorbereiding wil ik mijn presentatie op het podiummoment met vertrouwen, rust en duidelijkheid kunnen geven.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Eindreflectie</span>
          </h2>

          <div className="divider divider-mb20" />

          <h3 className="h3-sub">Situatie</h3>
          <p className="intro-divider">
            Tijdens mijn afstudeerperiode bij AllSens heb ik gewerkt aan mijn persoonlijke en professionele ontwikkeling als commercieel econoom. In mijn persoonlijk leiderschapsdocument stonden drie leerdoelen centraal: mijn presentatievaardigheden verbeteren, Spaans leren op A1-niveau en mij vakinhoudelijk verdiepen in AI-gedreven zoekgedrag en GEO. Deze doelen heb ik bewust gekozen, omdat ze aansluiten bij mijn interesses, mijn toekomstbeeld en de punten waarin ik mij verder wilde ontwikkelen.
          </p>

          <p className="intro-divider">
            Deze periode voelde voor mij extra belangrijk, omdat dit waarschijnlijk mijn laatste periode op school is. Na vier jaar HBO en daarvoor drie jaar MBO merk ik dat ik steeds beter weet wat wel en niet bij mij past. Ik heb ontdekt dat ik minder energie krijg van harde sales of het maken van losse sociale mediaberichten. Mijn interesse ligt meer bij klantbeleving, offline marketing, neuromarketing en geurmarketing. Vooral bij AllSens merkte ik dat marketing voor mij interessanter wordt wanneer het draait om sfeer, vertrouwen, beleving en het begrijpen van de behoefte achter een merk of omgeving.
          </p>

          <p className="intro-divider">
            Tegelijkertijd kwam ik mezelf ook tegen. Ik ben enthousiast wanneer ik ergens veel over weet en wil dan graag laten zien dat ik mij ergens goed in heb verdiept. Dat is een kracht, omdat ik betrokken ben en veel inzet toon. Tegelijkertijd is het ook een valkuil, omdat ik soms te volledig wil zijn en moeite heb om hoofd- en bijzaken van elkaar te scheiden. Dat zag ik terug in mijn presentaties, maar ook in mijn verslaglegging.
          </p>

          <h3 className="h3-sub">Taak</h3>
          <p className="intro-divider">
            Mijn taak was om mijn persoonlijke ontwikkeling zichtbaar en aantoonbaar te maken. Ik moest niet alleen laten zien welke acties ik had uitgevoerd, maar vooral ook wat ik daarvan heb geleerd en hoe ik mij heb ontwikkeld als toekomstige professional. Daarom heb ik per leerdoel gewerkt met acties, bewijslast, feedback en reflectie.
          </p>

          <p className="intro-divider">
            Voor mijn presentatievaardigheden wilde ik leren om rustiger te spreken, mijn verhaal duidelijker op te bouwen en mijn kernboodschap beter over te brengen. Voor Spaans wilde ik een basis ontwikkelen waarmee ik eenvoudige gesprekken kan voeren, omdat ik mezelf later mogelijk in Spanje zie wonen of werken. Voor mijn vakinhoudelijke doel wilde ik onderzoeken hoe AI-gedreven zoekgedrag invloed heeft op marketingteksten en hoe content beter kan aansluiten op de manier waarop mensen tegenwoordig zoeken.
          </p>

          <p className="intro-divider">
            Daarnaast wilde ik met mijn document laten zien wie ik ben als commercieel econoom: iemand die sociaal, nieuwsgierig en betrokken is, maar ook commercieel leert denken vanuit de behoefte van de doelgroep. Ik wil niet alleen kijken naar wat verkocht kan worden, maar vooral naar wat waarde toevoegt voor klanten, bezoekers of medewerkers.
          </p>

          <h3 className="h3-sub">Actie</h3>
          <p className="intro-divider">
            Om mijn presentatievaardigheden te verbeteren heb ik meerdere presentatiemomenten voorbereid en uitgevoerd. Ik heb feedback gevraagd aan collega&apos;s, mijn docentbegeleider en studiegenoten. Uit die feedback kwam naar voren dat mijn inhoud sterk was en dat zichtbaar was dat ik veel werk had verricht. Tegelijkertijd werd duidelijk dat ik soms te snel praatte en te veel informatie wilde meenemen. Vooral tijdens het oefenmoment voor mijn podiummoment merkte ik dat spanning invloed had op mijn manier van presenteren. Ik raakte de draad kwijt en voelde dat sommige onderdelen nog niet goed aansloten bij mijn eigen verhaal. Dat was confronterend, maar ook waardevol. Het liet mij zien dat voorbereiding niet alleen gaat over oefenen, maar ook over kritisch durven schrappen.
          </p>

          <p className="intro-divider">
            Voor Spaans heb ik dagelijks geoefend met Duolingo, een Spaanse les gevolgd met Inge Abbeel en een A1-toets gemaakt. Mijn doel was om 100 dagen te oefenen, maar uiteindelijk heb ik 116 dagen gehaald. Ook zag ik vooruitgang in mijn toets resultaten: bij mijn eerste poging behaalde ik 75% en later 90%. Door de Spaanse les kreeg ik daarnaast meer vertrouwen in mijn uitspraak en in het gebruiken van eenvoudige Spaanse woorden in praktijksituaties.
          </p>

          <p className="intro-divider">
            Voor mijn vakinhoudelijke leerdoel heb ik mij verdiept in AI-gedreven zoekgedrag en GEO. Ik heb onderzocht hoe marketingteksten beter vindbaar, duidelijker en relevanter kunnen worden voor lezers die snel antwoord zoeken. Vervolgens heb ik een eigen flow opgezet om teksten te analyseren op structuur, zoekintentie, kernboodschap, directheid en betrouwbaarheid. Daarna heb ik meerdere teksten beoordeeld en verbeterd. Dit sloot goed aan bij mijn afstudeerbedrijf en bij mijn interesse in marketing die verder gaat dan alleen content maken.
          </p>

          <p className="intro-divider">
            Ook heb ik gewerkt aan mijn profileringskit en marktbewerkingsplan. Hierbij heb ik mijn persoonlijke uitstraling gekoppeld aan Ibiza Chic. Dit paste bij mijn interesse in geurbeleving, uitstraling en eerste indruk. Het hielp mij om mijn persoonlijke profilering concreter te maken en beter na te denken over hoe ik mezelf professioneel wil neerzetten.
          </p>

          <h3 className="h3-sub">Resultaat</h3>
          <p className="intro-divider">
            Het resultaat is een persoonlijk leiderschapsdocument waarin mijn ontwikkeling duidelijk zichtbaar is. Ik heb voor alle drie de doelen concrete stappen gezet en bewijslast verzameld.
          </p>

          <p className="intro-divider">
            Bij presenteren heb ik geleerd dat een sterke presentatie niet alleen afhankelijk is van inhoudelijke kennis. Structuur, rust, timing en het durven weglaten van informatie bepalen voor een groot deel of een verhaal goed overkomt. Ik ben mij bewuster geworden van mijn spreektempo en van mijn neiging om te veel te willen uitleggen.
          </p>

          <p className="intro-divider">
            Bij Spaans heb ik laten zien dat ik discipline heb en een leerdoel over een langere periode kan volhouden. De 116 dagen Duolingo en de verbetering van mijn A1-toets van 75% naar 90% laten zien dat ik door herhaling vooruitgang boek. Tegelijkertijd weet ik dat ik de taal nog meer in echte situaties moet gebruiken. Een toets halen is mooi, maar een gesprek durven voeren is uiteindelijk belangrijker.
          </p>

          <p className="intro-divider">
            Bij GEO heb ik een vakinhoudelijke stap gezet waar ik trots op ben. Ik heb een actueel marketingonderwerp onderzocht en praktisch toegepast op teksten. Daardoor begrijp ik beter hoe marketing verandert door AI en hoe belangrijk het is om teksten duidelijk, betrouwbaar en vraaggericht op te bouwen. Dit sluit goed aan bij mijn interesse in marketing die draait om gedrag, beleving en de behoefte van de doelgroep.
          </p>

          <p className="intro-divider">
            Als ik kritisch naar mijn document kijk, vind ik dat mijn inzet en groei goed naar voren komen. Wel zie ik dat ik soms nog te veel bewijs en uitleg wil geven. Dat past bij mijn betrokkenheid, maar het vraagt ook om betere keuzes. In de toekomst wil ik eerder bepalen wat de kern is en welke informatie echt nodig is om mijn ontwikkeling aan te tonen.
          </p>

          <h3 className="h3-sub">Reflectie</h3>
          <p className="intro-divider">
            Als ik terugkijk op deze periode, zie ik vooral dat ik ben gegroeid in zelfinzicht. Ik weet beter waar mijn kracht ligt: ik ben sociaal, spontaan, nieuwsgierig en betrokken. Ik vind het leuk om contact te maken, vragen te stellen en mee te denken over wat mensen of organisaties nodig hebben. Bij AllSens merkte ik opnieuw dat marketing mij vooral aanspreekt wanneer het draait om sfeer, vertrouwen, beleving en menselijk gedrag.
          </p>

          <p className="intro-divider">
            Deze stageperiode is niet altijd mijn leukste periode geweest. Ik heb mij niet altijd volledig gehoord of gezien gevoeld, wat soms lastig was, omdat ik graag meedenk en betrokken wil zijn. Toch heb ik geprobeerd om dit niet als teleurstelling te zien, maar juist als motivatie. Ik wist hoe belangrijk dit jaar voor mij was en heb daarom doorgezet. Achteraf ben ik trots dat ik ben blijven proberen, verbeteren en reflecteren.
          </p>

          <p className="intro-divider">
            Mijn belangrijkste les is dat mijn enthousiasme sterker wordt wanneer ik het beter doseer. Wanneer ik alles wil vertellen, wordt mijn verhaal juist minder krachtig. Dat geldt voor presenteren, maar ook voor schrijven en verslaglegging. Ik wil daarom leren om eerder rust te nemen, mijn kern te bepalen en bewustere keuzes te maken in wat ik wel en niet meeneem.
          </p>

          <p className="intro-divider">
            Ook neem ik mee dat ik niet alleen hard wil werken, maar ook slimmer wil werken. Ik kan goed doorpakken, zeker wanneer een deadline dichtbij komt. Dan sluit ik mezelf af, zoek ik een rustige werkplek en zorg ik dat mijn taken afkomen. Dat doorzettingsvermogen is waardevol. Tegelijkertijd wil ik voorkomen dat ik pas laat in het proces ga schrappen of structureren. Minder tekst, minder bewijs of minder acties kan soms juist zorgen voor een krachtiger resultaat.
          </p>

          <p className="intro-divider">
            Deze periode heeft mij geholpen om beter te begrijpen welke richting ik op wil. Ik weet dat harde sales mij minder goed ligt en dat ik niet gelukkig word van alleen uitvoerende sociale mediacontent. Ik word nieuwsgierig van marketing die raakt aan gedrag, communicatie, zintuigen en beleving. Neuromarketing, geurmarketing en klantbeleving zijn onderwerpen waar ik mij verder in wil verdiepen.
          </p>

          <p className="intro-divider">
            Mijn eindconclusie is dat ik deze periode niet alles in één keer goed heb gedaan, maar wel steeds ben blijven proberen, verbeteren en reflecteren. Juist daardoor heb ik veel geleerd. Ik wil mij ontwikkelen tot een marketingprofessional die commercieel kan denken, maar ook menselijk blijft kijken naar de doelgroep, de context en de beleving achter een merk.
          </p>
        </div>

        <div className="post-footer-nav">
          <a href="/Afstuderen" className="btn-ghost btn-sm">
            ← Terug naar Afstuderen
          </a>
        </div>

      </article>
    </main>
  );
}