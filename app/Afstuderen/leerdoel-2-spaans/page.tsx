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
      className="glow-card card-hover spaans-video-card"
    >
      <div className="spaans-video-thumb-wrap">
        <img loading="lazy" decoding="async"           src={thumbnail}
          alt={title}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="spaans-video-thumb-img"
        />

        <div className="spaans-video-mymedia-badge">MYMEDIA</div>

        <div className="spaans-video-play-overlay">
          <div
            className="spaans-video-play-btn"
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
              className="spaans-video-play-icon"
            >
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="spaans-video-body">
        <h3 className="spaans-video-title">{title}</h3>
        <p className="spaans-video-link">Bekijk op Avans MyMedia →</p>
      </div>
    </a>
  );
}

export default function SpaansLeren() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const video = {
    title: "Spaans oefenen | Inge Abbeel",
    url: "https://mymedia.avans.nl/media/Spaans+oefenen+%7C+Inge+Abbeel+/0_18efh2bx",
    thumbnail:
      "https://cfvod.frp2.ovp.kaltura.com/p/10066/sp/1006600/thumbnail/entry_id/0_18efh2bx/width/600/height/340",
  };

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
            Afstuderen — Persoonlijk leerdoel 2
          </div>

          <h1 className="post-h1">
            <span className="g-text">
              Persoonlijk leerdoel 2: Spaans leren
            </span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              Uiterlijk op 10 juni 2026 beheers ik Spaans op A1-niveau en kan
              ik eenvoudige gesprekken voeren met derden.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Succescriterium</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik kan mijzelf voorstellen, eenvoudige vragen stellen en beantwoorden
            en een basisgesprek voeren, bevestigd door feedback van minimaal één
            gesprekspartner.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Toelichting</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Het gaat er hierbij om dat ik de taal niet alleen oefen via een app,
            maar ook daadwerkelijk gebruik in contact met anderen, bijvoorbeeld
            door mezelf voor te stellen, vragen te stellen en eenvoudige
            gesprekken te voeren.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">2.1 Onderbouwing persoonlijk doel</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            In de toekomst zie ik mezelf wonen en werken in Spanje (het liefst
            in Malaga). Het idee om in een andere omgeving te leven, met een
            andere cultuur en taal, maar vooral ook veel zon en de zee in de
            buurt spreekt mij erg aan. Tegelijkertijd realiseer ik me dat de taal
            leren van groot belang is. Zonder basiskennis van het Spaans wordt
            het lastig om contact te maken met mensen, mezelf te redden in het
            dagelijks leven en echt onderdeel te worden van de Spaans lokale
            omgeving.
          </p>

          <p className="intro-divider">
            Tijdens mijn afstudeerperiode ga ik tussendoor ook op vakantie naar
            Spanje. Dit zie ik als en kans om de taal in de praktijk toe te
            passen. Ik merk dat ik het spannend vind om daadwerkelijk Spaans te
            spreken met locals. Ik weet nog niet altijd of ik dat durf, omdat ik
            bang ben om fouten te maken of niet goed begrepen te worden. Tijdens
            mijn vakantie kan ik op een laagdrempelige manier contact maken,
            bijvoorbeeld door een simpel gesprek aan te gaan in een winkel of in
            het restaurant.
          </p>

          <p className="intro-divider">
            Motivatie is een belangrijke factor bij het leren van een nieuwe
            taal, omdat het leerplezier en leerwinst vergroot om het leren van
            een nieuwe taal vol te houden (Divosa, 6 januari 2026). Daarom vind
            ik het belangrijk dat het leren van Spaans niet alleen uit losse
            oefeningen bestaat, maar ook aansluit bij mijn toekomstplannen in
            Malaga, Spanje. Ik spreek minstens 1 iemand uitgebreid, die de
            Spaanse taal beheerst los van mijn reis naar Malaga.
          </p>

          <p className="intro-divider">
            Daarom kies ik ervoor om tijdens mijn afstudeerperiode actief aan de
            slag te gaan met het leren van Spaans. Ik wil niet alleen de basis
            leren via een app (Duolingo), maar de taal ook daadwerkelijk
            gebruiken in gesprekken met anderen. Door mezelf uit te dagen om
            Spaans te spreken, ook al voelt dat soms spannend, wil ik toewerken
            naar een niveau waarop ik mij in eenvoudige situaties kan redden en
            met meer vertrouwen kan communiceren.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Spaans leren</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Past bij mijn profilering omdat ik mezelf wil ontwikkelen in een
            extra taal en in de toekomst mogelijk in Spanje wil wonen of werken.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">2.2 Actieplan Spaans</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Om mijn Spaans te verbeteren, heb ik een actieplan opgesteld. In
            deze tabel staan mijn doelen, de acties die ik ga uitvoeren en hoe
            ik mijn voortgang ga meten.
          </p>

          <div className="table-wrap">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Doel</th>
                  <th>Actie</th>
                  <th>Planning</th>
                  <th>Benodigdheden</th>
                  <th>Succes criterium</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Duolingo Spaans 100 dagen behalen</td>
                  <td>Dagelijks minimaal één les Spaans volgen via Duolingo</td>
                  <td>Elke dag gedurende 100 dagen</td>
                  <td>Duolingo-app, smartphone of laptop</td>
                  <td>Een streak van 100 dagen behalen</td>
                </tr>

                <tr>
                  <td>Spaanse taalvaardigheid verbeteren</td>
                  <td>Spaans oefenen met iemand die Spaans en Nederlands beheerst</td>
                  <td>Fysiek een afspraak maken</td>
                  <td>Taalpartner</td>
                  <td>Eenvoudige gesprekken kunnen voeren</td>
                </tr>

                <tr>
                  <td>Niveau A1 behalen</td>
                  <td>Voorbereiden op een A1-toets Spaans</td>
                  <td>Als afsluiting op de afstudeerperiode</td>
                  <td>Een beschikbare oefentoets</td>
                  <td>Slagen voor een toets op niveau A1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">
              2.3 Indicatoren voor groei en reflectievragen
            </span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            De reflectievragen zijn terug te lezen in de bijlagen.
          </p>

          <ZoomImage
            src="/afstuderen/pl/Reflectievragen2.3.webp"
            alt="Reflectievragen"
            setOpenImg={setOpenImg}
          />
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">2.4 Actie 1: Duolingo</span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Onderstaand een screenshot met bewijs van het behalen van de 100
            dagen.
          </p>

          <ZoomImage
            src="/afstuderen/pl/Duolingo.webp"
            alt="Duolingo 100 dagen"
            setOpenImg={setOpenImg}
          />
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">2.5 PDCA-cyclus | actie 1</span>
          </h2>

          <div className="divider divider-mb20" />

          <h3 className="h3-sub">Plan</h3>
          <p className="intro-divider">
            Voor mijn persoonlijke ontwikkeling wilde ik tijdens mijn
            afstudeerperiode beginnen met het leren van Spaans via Duolingo.
            Mijn doel was om een dagelijkse routine op te bouwen en minimaal 100
            dagen achter elkaar te oefenen. Door iedere dag tijd vrij te maken
            voor de app wilde ik mijn woordenschat, grammatica en basiskennis
            van de Spaanse taal verbeteren. Daarnaast sloot dit doel aan bij mijn
            interesse om in de toekomst mogelijk in Spanje (het liefst Malaga)
            te wonen en werken.
          </p>

          <h3 className="h3-sub">Do</h3>
          <p className="intro-divider">
            Gedurende mijn afstudeerperiode heb ik dagelijks geoefend met
            Duolingo. Via de lessen in de app heb ik gewerkt aan verschillende
            onderdelen van de Spaanse taal, zoals woordenschat, zinsopbouw,
            uitspraak en luistervaardigheid. Om mijn doel te behalen heb ik
            bewust iedere dag een moment ingepland om te oefenen, zodat ik mijn
            reeks niet zou verliezen.
          </p>

          <h3 className="h3-sub">Check</h3>
          <p className="intro-divider">
            Mijn doel was om minimaal 100 dagen achter elkaar Spaans te oefenen
            via Duolingo. Dit doel heb ik behaald en zelfs overtroffen. Aan het
            einde van mijn afstudeerperiode stond mijn reeks op 116
            opeenvolgende dagen. Door deze dagelijkse oefening heb ik een basis
            opgebouwd in de Spaanse taal en heb ik laten zien dat ik consequent
            aan mijn persoonlijke ontwikkeling kan werken.
          </p>

          <p className="intro-divider">
            Daarnaast merkte ik dat ik gedurende de periode steeds meer woorden
            en zinnen begon te herkennen en begrijpen. Het dagelijks oefenen
            zorgde ervoor dat het leren van Spaans een gewoonte werd en dat ik
            gemotiveerd bleef om door te gaan.
          </p>

          <h3 className="h3-sub">Act</h3>
          <p className="intro-divider">
            Ik ben tevreden met het behaalde resultaat, omdat ik mijn
            oorspronkelijke doel van 100 dagen heb overtroffen met een reeks van
            116 dagen. Hierdoor heb ik niet alleen kennis opgedaan van de Spaanse
            taal, maar ook laten zien dat ik een leerdoel voor een langere
            periode kan volhouden.
          </p>

          <p className="intro-divider">
            Voor de toekomst wil ik mijn Duolingo-reeks voortzetten en mijn
            taalniveau verder ontwikkelen. Door dagelijks te blijven oefenen kan
            ik mijn kennis uitbreiden en stap voor stap toewerken naar een hoger
            niveau binnen de Spaanse taal.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">
              2.6 Actie 2: Spaanse les van Inge Abbeel
            </span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Graag wil ik Inge bedanken voor alle hulp bij het leren van Spaans.
            Inge heeft meer dan acht jaar Spaanse les gevolgd en heeft daarnaast
            twee jaar in Madrid gewoond tijdens haar studententijd. Daardoor
            kent ze de taal ontzettend goed en kon ze mij veel uitleg geven over
            woorden, uitdrukkingen en vooral de uitspraak.
          </p>

          <p className="intro-divider">
            Wat ik erg fijn vond, was dat we samen werkten met een
            Spaans-Nederlands woordenboek met afbeeldingen. Hierdoor werd het
            leren van nieuwe woorden een stuk makkelijker. Bij veel woorden
            konden we direct zien wat ze betekenden, waardoor ik ze beter
            onthield. Inge nam rustig de tijd om woorden voor te lezen en mij te
            helpen met het uitspreken ervan. Ook vertelde ze regelmatig leuke
            weetjes over Spanje en hoe bepaalde woorden in het dagelijks leven
            gebruikt worden.
          </p>

          <p className="intro-divider">
            Door haar enthousiasme en duidelijke uitleg werd het leren van Spaans
            een leuke ervaring. Ik heb veel nieuwe woorden geleerd, meer inzicht
            gekregen in de taal en vooral meer vertrouwen gekregen om Spaanse
            woorden uit te spreken.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">2.7 Bewijslast actie 2</span>
          </h2>

          <div className="divider divider-mb20" />

          <VideoCard
            title={video.title}
            url={video.url}
            thumbnail={video.thumbnail}
          />

          <h3 className="h3-sub">Samenvatting</h3>

          <p className="intro-divider">
            Tijdens deze eerste Spaanse les stond het thema tijd centraal. De les
            begon met de vier seizoenen: primavera (lente), verano (zomer),
            otoño (herfst) en invierno (winter). Vervolgens werden de dagen van
            de week en de maanden van het jaar behandeld. Daarbij werd uitgelegd
            dat deze woorden in het Spaans, anders dan in het Nederlands,
            meestal zonder hoofdletter worden geschreven.
          </p>

          <p className="intro-divider">
            Een groot deel van de les ging over het klokkijken. Voor één uur
            gebruik je es la una, terwijl je vanaf twee uur spreekt van son las
            dos, son las tres enzovoort. Ook kwamen tijdsaanduidingen zoals y
            cuarto (kwart over), y media (half) en menos cuarto (kwart voor) aan
            bod. Bijzonder aan het Spaans is dat tijden vóór het hele uur
            letterlijk worden uitgedrukt. Zo betekent son las dos menos
            veinticinco letterlijk: “het is twee uur min vijfentwintig minuten”.
          </p>

          <p className="intro-divider">
            Daarna werden verschillende tijdseenheden besproken, waaronder
            segundo (seconde), minuto (minuut), hora (uur), día(dag), semana
            (week), mes (maand), año (jaar) en siglo (eeuw). Ook de
            verschillende delen van de dag kwamen aan bod, zoals la mañana
            (ochtend), la tarde (middag), la noche (avond of nacht), mediodía
            (middag) en medianoche(middernacht).
          </p>

          <p className="intro-divider">
            Vervolgens werd aandacht besteed aan feestdagen en belangrijke
            momenten in het jaar. Hierbij kwamen woorden voorbij zoals Año Nuevo
            (Nieuwjaar), Pascua (Pasen), Navidad (Kerstmis), Nochevieja
            (oudejaarsavond) en Los Reyes Magos(Driekoningen).
          </p>

          <p className="intro-divider">
            Een ander belangrijk onderdeel van de les was het uitdrukken van tijd
            ten opzichte van vandaag. Woorden als ayer(gisteren), anteayer
            (eergisteren), hoy (vandaag), mañana (morgen) en pasado mañana
            (overmorgen) werden uitgebreid besproken. Daarnaast werden praktische
            uitdrukkingen behandeld, zoals dentro de diez minutos (over tien
            minuten), hace una semana (een week geleden), tres días antes (drie
            dagen eerder), tres días después (drie dagen later) en cada tres
            días(iedere drie dagen).
          </p>

          <p className="intro-divider">
            In het tweede deel van de les werd geoefend met getallen. Eerst
            kwamen de getallen van nul tot twintig aan bod, waarna de tientallen
            werden behandeld, zoals treinta (30), cuarenta (40), cincuenta (50)
            en sesenta (60). Ook werd uitgelegd hoe samengestelde getallen
            worden opgebouwd, bijvoorbeeld treinta y cinco (35) en ciento
            veintidós (122). Daarnaast maakten we kennis met rangtelwoorden zoals
            primero (eerste), segundo (tweede), tercero (derde) en quinto
            (vijfde).
          </p>

          <p className="intro-divider">
            Tot slot werden enkele maten en gewichten besproken, waaronder
            gramos (gram), medio kilo (halve kilo), litro (liter) en metro
            (meter). Ook werden belangrijke uitspraakregels herhaald. Zo klinkt
            ll vaak als een Nederlandse “j”, wordt de h niet uitgesproken, klinkt
            de ñ als “nj” en wordt de Spaanse j uitgesproken als een harde
            Nederlandse “g”.
          </p>

          <p className="intro-divider">
            Deze eerste les vormde daarmee een uitgebreide kennismaking met het
            spreken over tijd, data, getallen en dagelijkse situaties in het
            Spaans. Door deze basis te beheersen wordt het eenvoudiger om
            gesprekken te voeren over afspraken, data, tijden en alledaagse
            gebeurtenissen, maar ook om mijn lessen op Duolingo te verbeteren.
          </p>

          <h3 className="h3-sub">Persoonlijke feedback van Inge:</h3>

          <p className="intro-divider">
            Inge was tijdens de les erg enthousiast en vond het leuk om samen
            Spaans te oefenen. Ze gaf aan dat ze het knap vond hoever ik al was
            gekomen met alleen Duolingo als basis. Regelmatig herkende ik
            woorden en kon ik antwoorden geven op vragen die ze stelde. Natuurlijk
            verbeterde ze me af en toe bij de uitspraak of wanneer ik een woord
            verkeerd gebruikte, maar dat deed ze op een fijne en positieve
            manier. Daardoor voelde ik me op mijn gemak en durfde ik gewoon te
            blijven proberen. Volgens Inge heb ik al een goede basis opgebouwd en
            ziet ze dat ik gemotiveerd ben om de taal verder te leren.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">2.8 PDCA-cyclus | actie 2</span>
          </h2>

          <div className="divider divider-mb20" />

          <h3 className="h3-sub">Plan</h3>
          <p className="intro-divider">
            Voor deze actie wilde ik mijn basiskennis van de Spaanse taal
            verbeteren en meer vertrouwen krijgen in het uitspreken van Spaanse
            woorden. Mijn doel was om nieuwe woordenschat te leren, inzicht te
            krijgen in de grammaticale basis van het Spaans en beter te begrijpen
            hoe de taal in dagelijkse situaties wordt gebruikt. Door les te
            krijgen van Inge Abbeel, die veel ervaring heeft met de Spaanse taal,
            hoopte ik laagdrempelig kennis op te doen. Daarnaast wilde ik de
            kennis uit de les gebruiken om mijn voortgang binnen Duolingo verder
            te ondersteunen.
          </p>

          <h3 className="h3-sub">Do</h3>
          <p className="intro-divider">
            Ik heb samen met Inge Abbeel een Spaanse les gevolgd waarbij
            verschillende onderdelen van de taal aan bod kwamen. Tijdens deze les
            stond het thema tijd centraal. We bespraken de seizoenen, dagen van
            de week, maanden van het jaar en verschillende tijdsaanduidingen.
            Daarnaast oefenden we uitgebreid met het klokkijken in het Spaans en
            leerden we hoe tijdsuitdrukkingen anders worden opgebouwd dan in het
            Nederlands.
          </p>

          <p className="intro-divider">
            Verder hebben we gewerkt met een Spaans-Nederlands woordenboek met
            afbeeldingen, waardoor nieuwe woorden gemakkelijker te begrijpen en
            te onthouden waren. Ook kwamen getallen, rangtelwoorden, maten en
            gewichten aan bod. Inge gaf daarnaast uitleg over belangrijke
            uitspraakregels, zoals de uitspraak van de letters ll, ñ, h en j.
            Tijdens de les sprak zij woorden en zinnen voor, waarna ik deze zelf
            oefende. Ook vertelde zij regelmatig over het gebruik van woorden en
            uitdrukkingen in het dagelijks leven in Spanje.
          </p>

          <h3 className="h3-sub">Check</h3>
          <p className="intro-divider">
            Na afloop van de les merkte ik dat mijn woordenschat aanzienlijk was
            uitgebreid. Ik heb veel nieuwe woorden geleerd die betrekking hebben
            op tijd, data, getallen en dagelijkse situaties. Daarnaast begrijp ik
            beter hoe Spaanse tijdsaanduidingen worden opgebouwd en kan ik
            eenvoudige tijden en data benoemen.
          </p>

          <p className="intro-divider">
            Ook merkte ik dat mijn uitspraak verbeterde doordat ik direct
            feedback kreeg van Inge. Vooral de uitspraak van specifieke Spaanse
            klanken, zoals de ñ en de Spaanse j, werd duidelijker voor mij. Het
            gebruik van afbeeldingen bij de woorden hielp om de betekenis sneller
            te onthouden en zorgde ervoor dat ik de woorden gemakkelijker kon
            herkennen tijdens het oefenen in Duolingo.
          </p>

          <p className="intro-divider">
            Tegelijkertijd ontdekte ik dat het onthouden van grotere aantallen
            nieuwe woorden nog lastig is. Vooral bij de hogere getallen en
            sommige tijdsuitdrukkingen moest ik regelmatig terugkijken naar mijn
            aantekeningen. Dit liet zien dat herhaling noodzakelijk blijft om de
            woorden actief te kunnen gebruiken.
          </p>

          <h3 className="h3-sub">Act</h3>
          <p className="intro-divider">
            Op basis van deze les wil ik mijn Spaanse vaardigheden verder
            ontwikkelen door regelmatig te blijven oefenen met de woorden en
            onderwerpen die tijdens de les zijn behandeld. Ik ga de geleerde
            woordenschat herhalen via Duolingo en mijn eigen aantekeningen,
            zodat de woorden beter blijven hangen.
          </p>

          <p className="intro-divider">
            Daarnaast wil ik vaker gesprekken oefenen waarin tijd, data en
            getallen voorkomen, zodat ik de geleerde kennis direct kan toepassen.
            Ook wil ik meer aandacht besteden aan de uitspraak van Spaanse
            woorden door luisteroefeningen te doen en woorden hardop uit te
            spreken. Door deze onderdelen actief te blijven herhalen verwacht ik
            mijn spreekvaardigheid, woordenschat en zelfvertrouwen in het Spaans
            verder te vergroten.
          </p>
        </div>

        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">
              2.9 Actie 3: Ter afsluiting een (oefen)toets maken
            </span>
          </h2>

          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik ben de afgelopen periode actief bezig geweest met het leren van
            Spaans. Inmiddels heb ik meer dan 100 dagen achter elkaar geoefend
            via Duolingo, waardoor ik een goede basis heb kunnen opbouwen.
            Daarnaast heb ik de les gevolgd bij Inge Abbeel, waarbij de focus
            vooral lag op uitspraak en het correct gebruiken van de tijdsvormen.
            Dit heeft mij geholpen om meer vertrouwen te krijgen in het spreken
            en begrijpen van de taal.
          </p>

          <p className="intro-divider">
            Vervolgens ben ik zelfstandig verder gegaan met het oefenen van de
            grammatica. Dit vond ik eerlijk gezegd best uitdagend, omdat ik
            helemaal vanaf nul ben begonnen en veel grammaticale regels nieuw
            voor mij waren. Vooral de verschillende werkwoordsvormen en
            uitzonderingen vroegen veel oefening en herhaling.
          </p>

          <p className="intro-divider">
            Om mijn niveau te testen heb ik de A1-toets Spaans gemaakt. Bij mijn
            eerste poging behaalde ik 75%, wat niet voldoende was om de toets te
            halen. Dit motiveerde mij om verder te oefenen en extra aandacht te
            besteden aan de onderdelen die ik nog lastig vond. Bij mijn tweede
            poging behaalde ik vervolgens 90%, waarmee ik de toets wel succesvol
            heb afgerond. Op dit resultaat ben ik trots, omdat het laat zien dat
            mijn inzet en doorzettingsvermogen daadwerkelijk hebben geleid tot
            vooruitgang.
          </p>

          <p className="intro-divider">
            Toets website:{" "}
            <a
              href="https://www.tiatula.com/nl/spaanse-niveau-tests/A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tiatula.com/nl/spaanse-niveau-tests/A1
            </a>
          </p>

          <p className="intro-divider">
            Hoewel ik de A1-toets nu heb gehaald, merk ik dat grammatica nog
            steeds een aandachtspunt is. Om mijn niveau vast te houden en verder
            te groeien richting een hoger taalniveau, zal ik regelmatig moeten
            blijven oefenen. Juist door de grammatica actief te blijven
            gebruiken, kan ik deze beter onder de knie krijgen en mijn Spaans
            verder ontwikkelen.
          </p>

          <div className="two-images-grid">
            <ZoomImage
              src="/afstuderen/pl/a1-toets-1.webp"
              alt="A1-toets Spaans 1"
              setOpenImg={setOpenImg}
            />

            <ZoomImage
              src="/afstuderen/pl/a1-toets-2.webp"
              alt="A1-toets Spaans 2"
              setOpenImg={setOpenImg}
            />
          </div>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">2.10 PDCA-cyclus | actie 3</span>
          </h2>

          <div className="divider divider-mb20" />

          <h3 className="h3-sub">Plan</h3>
          <p className="intro-divider">
            Tijdens mijn afstudeerperiode wilde ik mijn kennis van de Spaanse
            taal verder ontwikkelen en toetsen op A1-niveau. Hiervoor had ik al
            meer dan 100 dagen achter elkaar geoefend via Duolingo en lessen
            gevolgd bij Inge Abbeel, waarbij de nadruk lag op uitspraak en het
            correct toepassen van verschillende tijdsvormen. Mijn doel was om
            voldoende kennis en vaardigheden op te bouwen om de officiële
            A1-toets succesvol af te ronden. Daarnaast wilde ik inzicht krijgen
            in mijn sterke en zwakke punten, zodat ik gericht verder kon werken
            aan mijn taalontwikkeling.
          </p>

          <h3 className="h3-sub">Do</h3>
          <p className="intro-divider">
            Om dit doel te bereiken heb ik gedurende een langere periode
            dagelijks Spaans geoefend via Duolingo. Hierdoor heb ik mijn
            woordenschat, leesvaardigheid en basisgrammatica stap voor stap
            uitgebreid. Daarnaast heb ik les gevolgd bij Inge Abbeel, waarin
            vooral aandacht werd besteed aan uitspraak en het correct gebruiken
            van werkwoord tijden.
          </p>

          <p className="intro-divider">
            Na afloop van deze les ben ik zelfstandig verder gegaan met het
            oefenen van de grammatica. Dit vond ik uitdagend, omdat ik zonder
            voorkennis aan het leerproces was begonnen. Vooral de verschillende
            werkwoordsvormen en grammaticale uitzonderingen vroegen veel
            oefening en herhaling. Om mijn voortgang te meten heb ik vervolgens
            de online Spaanse A1-toets gemaakt via Tiatula.
          </p>

          <h3 className="h3-sub">Check</h3>
          <p className="intro-divider">
            Bij mijn eerste poging behaalde ik een score van 75%, wat niet
            voldoende was om de toets te halen. Dit liet zien dat ik al een
            redelijke basis had opgebouwd, maar dat bepaalde onderdelen van de
            grammatica nog onvoldoende beheerst werden. Op basis van dit
            resultaat heb ik extra geoefend op de onderdelen waar ik fouten
            maakte.
          </p>

          <p className="intro-divider">
            Na deze aanvullende oefenperiode heb ik de toets opnieuw gemaakt. Bij
            mijn tweede poging behaalde ik een score van 90%, waarmee ik de
            A1-toets succesvol heb afgerond. Dit resultaat bevestigt dat mijn
            inzet en doorzettingsvermogen hebben geleid tot een duidelijke
            verbetering van mijn taalvaardigheid. Daarnaast gaf de toets inzicht
            in de onderdelen die ik inmiddels goed beheers en de aspecten die nog
            verdere aandacht vragen.
          </p>

          <h3 className="h3-sub">Act</h3>
          <p className="intro-divider">
            Hoewel ik de A1-toets succesvol heb afgerond, merk ik dat grammatica
            nog steeds een aandachtspunt blijft. Om mijn huidige niveau vast te
            houden en verder te groeien richting A2-niveau, wil ik regelmatig
            blijven oefenen met grammaticale structuren en werkwoordsvormen.
          </p>

          <p className="intro-divider">
            Daarnaast wil ik mijn taalontwikkeling verbreden door meer Spaanse
            teksten te lezen, Spaanse video&apos;s te bekijken en de taal vaker
            actief te gebruiken in gesprekken. Door Spaans structureel te blijven
            toepassen verwacht ik mijn zelfvertrouwen verder te vergroten en mijn
            taalvaardigheid op een hoger niveau te brengen. De afronding van de
            A1-toets vormt hierbij een goede basis voor verdere ontwikkeling.
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