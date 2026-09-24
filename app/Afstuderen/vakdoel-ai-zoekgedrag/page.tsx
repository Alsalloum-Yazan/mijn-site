"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";
import { Card, ExternalLink, FooterNav, PageHeader, Pdca, Table } from "@/app/components/ContentBits";

export default function VakdoelAIZoekgedrag() {
  const [imgOpen, setImgOpen] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={imgOpen} onClose={() => setImgOpen(null)} />

      <article className="content-page">
        <PageHeader
          badge="Vakinhoudelijk doel"
          title="Vakdoel: AI-gedreven zoekgedrag"
          lead="Uiterlijk op 19 oktober 2026 kan ik zelfstandig marketingcontent schrijven, analyseren en optimaliseren volgens de belangrijkste principes van Generative Engine Optimization (GEO). Ik wil hierbij niet alleen weten wat GEO inhoudt, maar de principes ook kunnen herkennen, uitleggen en toepassen in mijn eigen marketingteksten."
        />

        <Card title="Succescriterium">
          <p className="intro-divider">Mijn leerdoel is behaald wanneer ik:</p>
          <ul className="content-list">
            <li>De belangrijkste principes van GEO in mijn eigen woorden kan uitleggen.</li>
            <li>Kan uitleggen wat het verschil is tussen traditioneel SEO en GEO.</li>
            <li>Zelfstandig kan beoordelen of een marketingtekst aansluit op AI-gedreven zoekgedrag.</li>
            <li>Minimaal vier marketingteksten heb geanalyseerd en geoptimaliseerd.</li>
            <li>Bij minimaal drie van de vier teksten een duidelijke verbetering kan aantonen.</li>
            <li>Mijn keuzes bij het optimaliseren kan onderbouwen vanuit de theorie en mijn onderzoek.</li>
          </ul>
          <p className="intro-divider">
            De kwaliteit van mijn teksten beoordeel ik aan de hand van vijf vaste GEO-principes: kernboodschap, zoekintentie,
            structuur, directheid en betrouwbaarheid. Hierdoor is mijn succescriterium niet alleen gebaseerd op mijn eigen
            gevoel, maar op vooraf bepaalde beoordelingspunten.
          </p>
        </Card>

        <Card title="3.1 Onderbouwing vakinhoudelijk doel">
          <p className="intro-divider">
            Binnen marketing merk ik dat online vindbaarheid steeds verder verandert. Waar ik voorheen vooral dacht aan SEO en
            zoekwoorden, worden mensen steeds vaker direct geholpen door AI-tools zoals ChatGPT en andere AI-zoekmachines.
            Hierdoor verandert ook de manier waarop marketingcontent geschreven moet worden.
          </p>
          <p className="intro-divider">
            Ik vind dit interessant omdat het direct aansluit bij mijn opleiding Commerciële Economie en mijn ontwikkeling als
            marketingprofessional. Ik wilde daarom niet alleen weten wat GEO betekent, maar vooral begrijpen hoe ik deze
            ontwikkeling kan vertalen naar het schrijven van marketingcontent.
          </p>
        </Card>

        <Card title="3.2 Mijn startniveau">
          <p className="intro-divider">
            Aan het begin van mijn afstudeerperiode had ik basiskennis van SEO en online content, maar nog weinig specifieke
            kennis over GEO. Ik wist dat teksten duidelijk, relevant en goed vindbaar moesten zijn, maar ik kon nog niet
            zelfstandig uitleggen welke aanpassingen nodig waren om een tekst specifiek geschikt te maken voor AI-gedreven
            zoekgedrag.
          </p>
          <p className="intro-divider">
            Ook had ik nog geen vaste methode om een tekst op GEO te beoordelen. Mijn manier van schrijven was vooral gericht
            op de lezer en traditionele online vindbaarheid. Ik keek nog niet bewust naar onderdelen zoals direct antwoord
            geven op een zoekvraag, het duidelijk maken van expertise en het zo structureren van informatie dat deze gemakkelijk
            door AI-systemen kan worden begrepen en gebruikt.
          </p>

          <Table
            head={["Onderdeel", "Beginniveau", "Eindniveau"]}
            rows={[
              ["Kennis van GEO", "Basis/oriënterend", "Kan GEO uitleggen en toepassen"],
              ["Verschil GEO en SEO", "Beperkt", "Kan het verschil vloeiend uitleggen"],
              ["Zoekintentie", "Vooral vanuit traditionele SEO", "Bewust vanuit de vraag van de gebruiker"],
              ["GEO-analyse", "Geen vaste methode", "Zelfstandig analyseren met vaste criteria"],
              ["GEO toepassen", "Niet bewust toegepast", "Zelfstandig toegepast in marketingteksten"],
            ]}
          />

          <p className="intro-divider">
            Deze nulmeting laat zien dat mijn grootste ontwikkelpunt niet het leren schrijven zelf was, maar het bewust leren
            schrijven vanuit AI-gedreven zoekgedrag.
          </p>
        </Card>

        <Card title="3.3 Verdere verdieping">
          <p className="intro-divider">
            Omdat ik merkte dat mijn startkennis nog beperkt was, wilde ik mij eerst inhoudelijk verdiepen voordat ik zelf een
            methode zou ontwikkelen. In mijn eerste versie had ik hiervoor slechts twee online artikelen gebruikt. Daarom heb
            ik mijn onderzoek uitgebreid. Ik heb het boek GEO: SEO in de tijd van AI gelezen.
          </p>
          <p className="intro-divider">
            Door het boek als extra bron toe te voegen, kreeg ik een breder beeld van het onderwerp. Ik keek hierdoor niet
            meer alleen naar losse schrijftips, maar naar GEO als ontwikkeling binnen online marketing en naar de manier
            waarop content door AI-systemen wordt gevonden, geïnterpreteerd en gebruikt.
          </p>
          <p className="intro-divider">
            GEO was tijdens mijn eerdere opleidingen nog geen vast onderdeel van mijn kennis. Ik startte in 2019 met mijn
            mbo-opleiding en begon in 2022 aan mijn AD-opleiding, rond de periode waarin generatieve AI sterk in opkomst kwam.
            Tijdens mijn opleidingen leerde ik wel over online marketing en SEO, maar nog niet over de invloed van AI op
            zoekgedrag. Daarom heb ik GEO tijdens mijn afstudeerperiode bewust opgepakt als aanvulling op mijn bestaande
            marketingkennis.
          </p>
        </Card>

        <Card title="3.4 Actieplan">
          <p className="intro-divider">
            In dit actieplan beschrijf ik hoe ik mijn kennis van AI-gedreven zoekgedrag stap voor stap wil uitbreiden en
            toepassen. Per actie staat wat ik ga doen, welk bewijs ik verzamel en welke feedback ik gebruik om te groeien.
          </p>
          <Table
            head={["Actie", "Uitvoering", "Bewijs", "Focus"]}
            rows={[
              [
                "1. Verdiepen in GEO en AI-gedreven zoekgedrag",
                "Het boek GEO: SEO in de tijd van AI lezen en aanvullende bronnen bestuderen over GEO en AI-gedreven zoekgedrag.",
                "Boek, samenvatting en gebruikte bronnen.",
                "Mijn vakkennis over GEO vergroten.",
              ],
              [
                "2. GEO-analysetool ontwikkelen",
                "Een eigen tool ontwikkelen waarmee marketingteksten beoordeeld kunnen worden op verschillende GEO-principes.",
                "GEO-analysetool en ontwikkelproces.",
                "Theorie vertalen naar een praktische methode.",
              ],
              [
                "3. GEO-analysetool testen en verbeteren",
                "De tool door verschillende testers laten beoordelen en de feedback verwerken.",
                "Testresultaten, enquête en aangepaste tool.",
                "Controleren of de tool bruikbaar en volledig is.",
              ],
              [
                "4. Marketingteksten schrijven en optimaliseren",
                "Vier marketingteksten schrijven, analyseren met de tool en verbeteren op basis van de resultaten.",
                "Voor- en naversies en analyses.",
                "GEO zelfstandig toepassen in marketingcontent.",
              ],
              [
                "5. Ontwikkeling evalueren",
                "Mijn oude en nieuwe manier van schrijven vergelijken en mijn ontwikkeling beoordelen.",
                "Vergelijking en reflectie.",
                "Vaststellen van mijn eindniveau.",
              ],
            ]}
          />
        </Card>

        <Card title="3.4 Actie 1: Inlezen en samenvatten">
          <p className="intro-divider">
            Voor deze opdracht heb ik onderzocht hoe bedrijven zichtbaar kunnen blijven in een tijd waarin steeds meer mensen
            informatie zoeken via AI-tools zoals ChatGPT, Gemini en Copilot. Tijdens mijn onderzoek kwam ik erachter dat
            traditionele SEO niet langer voldoende is. Naast goed vindbaar zijn in zoekmachines wordt het ook steeds
            belangrijker dat content wordt opgenomen in de antwoorden die AI-systemen genereren. Dit wordt ook wel Generative
            Engine Optimization (GEO) genoemd.
          </p>
          <p className="intro-divider">
            Aan de hand van artikelen van Frankwatching en Hostnet Academy en het boek GEO: SEO in de tijd van AI heb ik de
            belangrijkste inzichten verzameld over GEO en de gevolgen hiervan voor contentmarketing (Traffic Builders, 19 juni
            2025) (Romy Veul, 28 november 2025). Vervolgens heb ik deze inzichten vertaald naar de situatie van AllSens. In
            onderstaande infographic laat ik zien welke principes volgens mij het meest relevant zijn voor AllSens en hoe deze
            kunnen bijdragen aan een grotere online zichtbaarheid. Daarbij heb ik ook de feedback van mijn bedrijfsbegeleider
            meegenomen om de praktische toepasbaarheid binnen de organisatie te beoordelen.
          </p>
          <img
            loading="lazy"
            decoding="async"
            src="/afstuderen/pl/infographic-geo-allsens.webp"
            alt="Infographic GEO AllSens"
            className="content-image-lg"
            onClick={() => setImgOpen("/afstuderen/pl/infographic-geo-allsens.webp")}
          />
          <p className="intro-divider">
            Uit dit onderzoek concludeer ik dat het belangrijk is om niet alleen voor zoekmachines te schrijven, maar ook voor
            AI-tools. Ik heb geleerd dat duidelijke antwoorden, een logische opbouw en content die aansluit bij de vragen van
            gebruikers steeds belangrijker worden. Voor AllSens biedt dit kansen om online beter zichtbaar te zijn. Deze
            inzichten neem ik mee in de verdere uitwerking van mijn project.
          </p>
        </Card>

        <Card title="3.5 PDCA-cyclus actie 1">
          <Pdca
            plan={[
              "Mijn eerste stap was om mijn kennis over GEO te vergroten. Ik wilde voorkomen dat ik direct een tool zou ontwikkelen zonder voldoende inhoudelijke kennis. Daarom wilde ik mij eerst verdiepen in GEO, AI-gedreven zoekgedrag en de verschillen met traditionele SEO.",
              "Ik wilde minimaal het niveau bereiken waarop ik de belangrijkste GEO-principes in mijn eigen woorden kon uitleggen en kon aangeven waarom deze belangrijk zijn voor marketingcontent.",
            ]}
            doo={[
              "Ik heb het boek GEO: SEO in de tijd van AI gelezen en daarnaast aanvullende online bronnen geraadpleegd. Ook heb ik de eerder gebruikte artikelen van Frankwatching en Hostnet Academy opnieuw meegenomen in mijn verdieping. Ik heb de belangrijkste inzichten samengevat en met elkaar vergeleken, zie bijlage: Bewijslast samenvatting van het boek.",
              "Hierdoor leerde ik onder andere dat content niet alleen duidelijk moet zijn voor een menselijke lezer, maar ook zo moet worden opgebouwd dat AI-systemen de informatie gemakkelijk kunnen herkennen en gebruiken. Vooral de combinatie van zoekintentie, duidelijke structuur, directe antwoorden, expertise en betrouwbaarheid werd belangrijk voor mijn verdere onderzoek.",
            ]}
            check={[
              "Door deze verdieping merkte ik dat mijn kennis aan het begin vooral bestond uit algemene kennis over SEO en online content. Ik kon nog niet goed uitleggen waarom een bepaalde tekst wel of niet geschikt was voor AI-gedreven zoekgedrag.",
              "Na het lezen van het boek en de aanvullende bronnen kon ik de belangrijkste GEO-principes wel benoemen en uitleggen. Ook kon ik beter onderbouwen waarom een directe kernboodschap, duidelijke structuur en aansluiting op de zoekvraag belangrijk zijn.",
              "De feedback op mijn eerdere portfolio bevestigde voor mij dat deze verdieping nodig was. Ik had in mijn eerste versie te weinig diepgang laten zien doordat ik mij vooral had gebaseerd op twee korte online artikelen. Door een boek als extra bron te gebruiken, heb ik mijn theoretische basis verbreed.",
            ]}
            act={[
              "Op basis van mijn verdieping heb ik de theorie vertaald naar vijf criteria die ik praktisch wilde kunnen toepassen: kernboodschap, zoekintentie, structuur, directheid en betrouwbaarheid. Deze criteria vormden de basis voor mijn volgende actie: het ontwikkelen van een eigen GEO-analysetool.",
            ]}
          />
          <p className="intro-divider">
            <a href="/Afstuderen/bijlagen#geo-boek" className="text-link">
              Bekijk de samenvatting van het boek (bijlage) →
            </a>
          </p>
        </Card>

        <Card title="3.6 Actie 2: Flow opzetten">
          <p className="intro-divider">
            Ik heb met Claude een GEO-analysetool opgezet, die automatisch controleert of mijn marketingteksten aansluiten op
            AI-gedreven zoekgedrag. Wanneer ik een tekst invoer, stuurt de tool deze naar de Claude API, die de tekst
            beoordeelt op vijf GEO-principes: kernboodschap, zoekintentie, structuur, directheid en betrouwbaarheid. Per
            criterium geeft Claude een score van 1 tot 10 met een concrete verbetersuggestie.
          </p>
          <p className="intro-divider">
            De tool laat precies zien waar een tekst sterk is en waar nog winst te behalen valt. Zo leer ik niet alleen
            schrijven voor traditionele zoekmachines, maar ook voor AI-tools zoals Google SGE en ChatGPT, die steeds vaker
            complete antwoorden geven op zoekvragen in plaats van een lijst met links. Dit sluit direct aan op mijn
            vakinhoudelijke leerdoel, waarbij ik minimaal vier marketingteksten schrijf en optimaliseer volgens de principes van
            GEO.
          </p>
          <img
            loading="lazy"
            decoding="async"
            src="/afstuderen/pl/claude-tool-flow.webp"
            alt="Claude Tool Flow"
            className="content-image-lg"
            onClick={() => setImgOpen("/afstuderen/pl/claude-tool-flow.webp")}
          />
          <ol className="content-list">
            <li>Ik vroeg Claude om een tool te maken: een GEO tekstanalyse-tool voor marketingteksten.</li>
            <li>Claude bouwde een interface met titel, stappenbalk, tekstvak en analyseknop.</li>
            <li>De tool is gemaakt als React-component, dus met losse onderdelen zoals titel, tabs, tekstruimte en button.</li>
            <li>De stappenbalk laat het proces zien: tekst invoeren → Claude analyseert → GEO-scores → verbeterpunten.</li>
            <li>Het tekstvak is bedoeld voor de marketingtekst. Daar plak je bijvoorbeeld tekst over Zaluti of Pure by Zaluti.</li>
            <li>Na klikken op de knop analyseert Claude de tekst op GEO-principes zoals duidelijkheid, structuur, zoekintentie en AI-vindbaarheid.</li>
            <li>Daarna toont de tool scores en verbeterpunten, zodat je de tekst sterker kunt maken voor generatieve zoekmachines.</li>
          </ol>
        </Card>

        <Card title="3.7 PDCA-cyclus: GEO-tool ontwikkelen">
          <Pdca
            plan={[
              "Na mijn theoretische verdieping wilde ik een manier ontwikkelen waarmee ik GEO-principes praktisch kon toepassen. Mijn doel was om niet alleen te weten waar een goede GEO-tekst aan moet voldoen, maar dit ook op een vaste manier te kunnen beoordelen.",
              "Daarom wilde ik een eigen GEO-analysetool ontwikkelen die marketingteksten beoordeelt aan de hand van de vijf criteria die ik uit mijn onderzoek had gehaald.",
            ]}
            doo={[
              "Met Claude heb ik een GEO-analysetool ontwikkeld. De tool beoordeelt een ingevoerde marketingtekst op kernboodschap, zoekintentie, structuur, directheid en betrouwbaarheid. Per onderdeel geeft de tool een score van 1 tot 10 en een concrete verbetersuggestie.",
              "Hiermee heb ik mijn theoretische kennis vertaald naar een praktische methode. De tool gaf mij niet alleen een totaalscore, maar liet ook zien op welke onderdelen een tekst verbeterd kon worden.",
            ]}
            check={[
              "Tijdens het ontwikkelen merkte ik dat het vertalen van theorie naar beoordelingscriteria moeilijker was dan alleen het lezen van informatie over GEO. Ik moest steeds bepalen hoe een abstract begrip zoals 'goede zoekintentie' praktisch beoordeeld kon worden.",
              "Door de criteria concreet te maken, kreeg ik zelf ook een beter begrip van GEO. Ik kon bijvoorbeeld beter herkennen wanneer een tekst wel over een onderwerp ging, maar nog niet direct antwoord gaf op de vraag van de gebruiker.",
            ]}
            act={[
              "Na het ontwikkelen van de eerste versie wilde ik niet alleen aannemen dat mijn tool goed werkte. Ik wilde deze laten beoordelen door andere mensen. Daarom heb ik de tool in de volgende actie getest en de ontvangen feedback gebruikt om de tool verder te verbeteren.",
            ]}
          />
        </Card>

        <Card title="3.8 Actie 3: Uittesten tool | ontvangen feedback">
          <ul className="content-list">
            <li>
              Ik heb expres gekozen voor de onderstaande testers, omdat mijn GEO-tool niet alleen bedoeld is voor marketeers,
              maar ook voor mensen die content willen beoordelen op duidelijkheid, zoekintentie en boodschap.
            </li>
            <li>Marketingteksten moeten niet alleen commercieel sterk zijn, maar ook begrijpelijk voor verschillende doelgroepen.</li>
            <li>Door testers uit verschillende werkvelden te vragen, kreeg ik een breder beeld van de toepasbaarheid van mijn tool.</li>
          </ul>
          <img
            loading="lazy"
            decoding="async"
            src="/afstuderen/pl/testers-claude-tool.webp"
            alt="Testers Claude Tool"
            className="content-image-lg"
            onClick={() => setImgOpen("/afstuderen/pl/testers-claude-tool.webp")}
          />
          <p className="intro-divider">Onderstaand de enquête:</p>
          <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSc9cWK8JuOqnL-m9qX2CFfP7AyQF6DMsCa386lZottst6WalQ/viewform?usp=sharing&ouid=118370528379486787285">
            Bekijk de enquête
          </ExternalLink>
          <p className="intro-divider">Opvallend kozen alle vier de respondenten voor het toevoegen van &apos;betrouwbaarheid&apos;.</p>
        </Card>

        <Card title="3.9 PDCA-cyclus: GEO-analysetool testen en verbeteren">
          <Pdca
            plan={[
              "Mijn doel bij deze actie was om te controleren of mijn tool volledig en begrijpelijk genoeg was. Omdat ik de tool zelf had ontwikkeld, wilde ik voorkomen dat ik alleen vanuit mijn eigen perspectief zou beoordelen of deze goed werkte.",
              "Daarom heb ik verschillende testers gevraagd om de tool te beoordelen op bruikbaarheid en volledigheid.",
            ]}
            doo={[
              "Ik heb vier respondenten met verschillende achtergronden de tool laten testen. Ik heb bewust niet alleen marketeers gekozen, omdat marketingteksten uiteindelijk ook begrijpelijk moeten zijn voor mensen die niet dagelijks met marketing bezig zijn.",
              "De testers hebben de tool beoordeeld en aangegeven welke onderdelen volgens hen nog ontbraken. Een opvallend resultaat was dat alle vier de respondenten aangaven dat betrouwbaarheid als apart onderdeel moest worden toegevoegd.",
            ]}
            check={[
              "De feedback liet mij zien dat mijn eerste versie van de tool nog niet volledig was. Ik keek eerder vooral naar de inhoud, structuur en directheid van een tekst. De testers maakten mij duidelijk dat ook de betrouwbaarheid van informatie een belangrijk onderdeel is.",
              "Hierdoor kreeg ik feedback die niet alleen vanuit AI kwam, maar vanuit echte gebruikers van mijn methode. Dit maakte mijn beoordelingsmodel sterker.",
            ]}
            act={[
              "Op basis van de feedback heb ik betrouwbaarheid als vijfde criterium toegevoegd aan de tool. Hierdoor beoordeelde mijn tool uiteindelijk vijf onderdelen: kernboodschap, zoekintentie, structuur, directheid en betrouwbaarheid.",
              "Deze aangepaste versie heb ik vervolgens gebruikt bij mijn vier marketingteksten.",
            ]}
          />
        </Card>

        <Card title="3.10 Actie 4: Teksten analyseren">
          <p className="intro-divider">
            Er is naar aanleiding van de testers een nieuw onderdeel toegevoegd aan de test: betrouwbaarheid.
          </p>
          <p className="intro-divider">
            Onderstaand volgen vier door mij geschreven teksten. Deze heb ik steeds geanalyseerd met mijn eigen opgezette tool.
            Vervolgens heb ik deze steeds verbeterd tot een hogere score.
          </p>
        </Card>

        {/* TEKST 1 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Tekst 1</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik schrijf deze tekst ter voorbereiding op de introductie van Pure by Zaluti en de bijbehorende website. Hiermee wil ik schoonmaakbedrijven informeren over professionele geurneutralisatie en de mogelijkheden voor samenwerking.
          </p>

          <h3 className="h3-sub">Professionele geurneutralisatie voor schoonmaakbedrijven</h3>

          <p className="intro-divider">
            Als schoonmaakbedrijf bent u dagelijks bezig met het creëren van schone, frisse en aangename omgevingen. Toch zijn er situaties waarin schoonmaken alleen niet voldoende is om hardnekkige geuroverlast volledig weg te nemen. Denk aan geuren afkomstig van rook, afval, vochtproblemen, sanitair, dierenverblijven of intensief gebruikte ruimtes.
          </p>

          <p className="intro-divider">
            Uit onderzoek onder schoonmaakbedrijven blijkt dat er regelmatig behoefte is aan een professionele oplossing die verder gaat dan het maskeren van geuren. Juist daar biedt Pure by Zaluti uitkomst.
          </p>

          <p className="intro-divider">
            Pure by Zaluti is ontwikkeld als specialistische geurneutralisatie-oplossing voor schoonmaakprofessionals. In plaats van geuren te verhullen met een sterke geur, richt onze technologie zich op het neutraliseren van ongewenste geurstoffen bij de bron. Hierdoor ontstaat een merkbaar frissere en prettigere omgeving voor medewerkers, bezoekers en gebruikers van een ruimte.
          </p>

          <p className="intro-divider">
            Wij zien schoonmaakbedrijven als belangrijke partners. U bent immers vaak het eerste aanspreekpunt wanneer klanten klachten ervaren over geuroverlast. Met Pure by Zaluti kunt u uw dienstverlening uitbreiden met een professionele geurneutralisatie-oplossing die aansluit op uw bestaande werkzaamheden en waarmee u extra waarde kunt bieden aan uw klanten.
          </p>

          <p className="intro-divider">
            Op deze pagina leest u meer over de mogelijkheden van Pure by Zaluti, de toepassingen binnen verschillende sectoren en de manieren waarop wij samenwerken met schoonmaakbedrijven. Samen zorgen we ervoor dat ruimtes niet alleen schoon ogen, maar ook daadwerkelijk fris worden ervaren.
          </p>

          <h3 className="h3-sub">Toepassen van de Claude tool | 1e keer</h3>
          <img loading="lazy" decoding="async"             src="/afstuderen/pl/claude-tool-tekst-1-eerste-keer.webp"
            alt="Claude Tool Tekst 1 Eerste Keer"
            className="content-image-lg"
          />

          <h3 className="h3-sub">Verbeterde versie tekst 1</h3>

          <p className="intro-divider">
            Pure by Zaluti: professionele geurneutralisatie voor schoonmaakbedrijven
          </p>

          <p className="intro-divider">
            Pure by Zaluti is de specialistische geurneutralisatie-oplossing voor schoonmaakprofessionals die verder willen gaan dan schoonmaken alleen. Onze technologie neutraliseert ongewenste geurstoffen bij de bron, zonder maskering en zonder restgeur.
          </p>

          <p className="intro-divider">
            Schoonmaken lost niet altijd alles op. Hardnekkige geuren van rook, vocht, sanitair, dierenverblijven of intensief gebruikte ruimtes blijven vaak hangen, ook na een grondige schoonmaakbeurt. Uit een onderzoek onder schoonmaakbedrijven blijkt dat meer dan de helft regelmatig te maken heeft met geuroverlast die standaard middelen niet oplossen.
          </p>

          <p className="intro-divider">
            Pure by Zaluti geeft u als schoonmaakbedrijf een concreet antwoord op die vraag. U breidt uw dienstverlening uit met een bewezen oplossing, biedt uw klanten merkbaar resultaat en onderscheidt u van de concurrentie. Onze oplossing is direct inzetbaar naast uw bestaande werkzaamheden, geen extra apparatuur en geen ingewikkelde instructies.
          </p>

          <p className="intro-divider">
            Toepassingen: kantoren, zorginstellingen, horeca, dierenverblijven, sanitaire ruimtes en renovatieprojecten.
          </p>

          <p className="intro-divider">
            Vraag gratis samples aan en ervaar zelf het verschil.
          </p>

          <h3 className="h3-sub">Toepassen van de Claude tool | 2e keer</h3>
          <img loading="lazy" decoding="async"             src="/afstuderen/pl/claude-tool-tekst-1-tweede-keer.webp"
            alt="Claude Tool Tekst 1 Tweede Keer"
            className="content-image-lg"
          />
        </div>

        {/* TEKST 2 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Tekst 2</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Deze tekst is relevant voor mijn onderzoek omdat uit mijn onderzoek onder schoonmaakbedrijven bleek dat er behoefte is aan meer informatie over professionele geurneutralisatie.
          </p>

          <h3 className="h3-sub">Wat zijn geur neutraliserende geuren?</h3>

          <p className="intro-divider">
            Soms blijft een onaangename geur aanwezig, zelfs nadat een ruimte grondig is schoongemaakt. Denk aan geuren in sanitaire ruimtes, rookruimtes, afvalruimtes of vochtige omgevingen. In zulke situaties kunnen neutraliserende geuren uitkomst bieden.
          </p>

          <p className="intro-divider">
            Geur neutraliserende geuren doen meer dan alleen een frisse geur verspreiden. Ze zijn speciaal ontwikkeld om ongewenste geuren actief te verminderen, waardoor een ruimte prettiger wordt ervaren.
          </p>

          <p className="intro-divider">
            Voor schoonmaakbedrijven kan dit een waardevolle aanvulling zijn op de bestaande dienstverlening. Een schone ruimte wordt namelijk niet alleen beoordeeld op wat mensen zien, maar ook op wat zij ruiken. Door geurneutralisatie toe te passen, ontstaat een frisse en verzorgde omgeving die bijdraagt aan een positieve ervaring voor bezoekers, medewerkers en gasten.
          </p>

          <p className="intro-divider">
            Geur neutraliserende geuren worden onder andere toegepast in kantoren, zorginstellingen, sportlocaties, horecagelegenheden en sanitaire ruimtes. Overal waar geur invloed heeft op de beleving van een ruimte, kunnen zij een verschil maken.
          </p>

          <h3 className="h3-sub">Toepassen van de Claude tool | 1e keer</h3>
          <img loading="lazy" decoding="async"             src="/afstuderen/pl/claude-tool-tekst-2-eerste-keer.webp"
            alt="Claude Tool Tekst 2 Eerste Keer"
            className="content-image-lg"
          />

          <h3 className="h3-sub">Verbeterde versie tekst 2</h3>

          <p className="intro-divider">
            Wat zijn geur neutraliserende geuren?
          </p>

          <p className="intro-divider">
            Geur neutraliserende geuren zijn speciaal ontwikkelde stoffen die ongewenste geuren chemisch afbreken en neutraliseren in plaats van ze te maskeren met een sterkere geur. Het resultaat is een ruimte die daadwerkelijk fris ruikt, niet alleen minder onaangenaam.
          </p>

          <p className="intro-divider">
            Gewone luchtverfrissers verdoezelen geuren tijdelijk. Geur neutraliserende geuren pakken de bron aan. Ze binden zich aan de geurmoleculen die overlast veroorzaken en maken die onwerkzaam. Dat maakt ze effectief in situaties waar standaard schoonmaakmiddelen tekortschieten: rookruimtes, sanitaire ruimtes, afvalruimtes en vochtige omgevingen.
          </p>

          <p className="intro-divider">
            Voor schoonmaakbedrijven zijn geur neutraliserende geuren een concrete uitbreiding op de bestaande dienstverlening. Een schone ruimte wordt niet alleen beoordeeld op wat mensen zien, maar ook op wat zij ruiken. Klanten die na een schoonmaakbeurt nog steeds een onaangename geur ervaren, zijn minder tevreden, ook al is de ruimte visueel perfect schoon.
          </p>

          <p className="intro-divider">
            Pure by Zaluti biedt geur neutraliserende oplossingen die direct inzetbaar zijn naast uw bestaande werkzaamheden. Geschikt voor kantoren, zorginstellingen, horeca, sportlocaties en sanitaire ruimtes.
          </p>

          <p className="intro-divider">
            Vraag gratis samples aan en ervaar het verschil.
          </p>

          <h3 className="h3-sub">Toepassen van Claude tool | 2e keer</h3>
          <img loading="lazy" decoding="async"             src="/afstuderen/pl/claude-tool-tekst-2-tweede-keer.webp"
            alt="Claude Tool Tekst 2 Tweede Keer"
            className="content-image-lg"
          />
        </div>

        {/* TEKST 3 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Tekst 3</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Voor mijn onderzoek naar nieuwe samenwerkingen voor AllSens ontwikkel ik een partnerpagina op de website voor schoonmaakbedrijven. Het doel van deze pagina is om schoonmaakbedrijven te informeren over de mogelijkheden van een partnership en hen te stimuleren via het contactformulier met ons in contact te komen.
          </p>

          <h3 className="h3-sub">Neem contact op</h3>

          <p className="intro-divider">
            Elke ruimte vertelt een verhaal. De inrichting, de verlichting, de muziek en zelfs de geur dragen bij aan hoe bezoekers, klanten, gasten of medewerkers een omgeving ervaren. Met de juiste geurbeleving creëert u niet alleen een aangename sfeer, maar versterkt u ook de identiteit van uw organisatie en laat u een blijvende indruk achter.
          </p>

          <p className="intro-divider">
            Bent u benieuwd hoe geurbeleving kan bijdragen aan uw locatie? Of wilt u meer weten over de mogelijkheden voor uw branche? Ons team denkt graag met u mee. Op basis van uw wensen, doelgroep en omgeving adviseren wij een passende oplossing die aansluit bij de uitstraling van uw organisatie.
          </p>

          <p className="intro-divider">
            Of u nu werkzaam bent in de zorg, Retail, hospitality, wellness, kantoren of een andere sector, wij helpen u graag bij het creëren van een omgeving waarin mensen zich welkom, comfortabel en op hun gemak voelen.
          </p>

          <p className="intro-divider">
            Vul het contactformulier in en vertel ons meer over uw situatie of vraag. Wij nemen zo snel mogelijk contact met u op voor een vrijblijvend gesprek en bespreken graag hoe geurbeleving een waardevolle toevoeging kan zijn aan uw organisatie. Wij kijken ernaar uit om kennis met u te maken.
          </p>

          <h3 className="h3-sub">Toepassen van de Claude tool | 1e keer</h3>
          <img loading="lazy" decoding="async"             src="/afstuderen/pl/claude-tool-tekst-3-eerste-keer.webp"
            alt="Claude Tool Tekst 3 Eerste Keer"
            className="content-image-lg"
          />

          <h3 className="h3-sub">Verbeterde versie tekst 3</h3>

          <p className="intro-divider">Neem contact op</p>

          <p className="intro-divider">
            Wilt u weten wat geurbeleving kan betekenen voor uw locatie? Vul het formulier in en wij nemen binnen één werkdag contact met u op voor een vrijblijvend gesprek.
          </p>

          <p className="intro-divider">
            Ons team adviseert u op basis van uw situatie, doelgroep en omgeving of u nu werkzaam bent in de zorg, Retail, hospitality, wellness of kantoren.
          </p>

          <p className="intro-divider">Wat u kunt verwachten:</p>

          <ul className="content-list">
            <li>Een persoonlijk adviesgesprek zonder verplichtingen</li>
            <li>Concrete aanbevelingen voor uw locatie en branche</li>
            <li>De mogelijkheid om gratis samples aan te vragen</li>
          </ul>

          <p className="intro-divider">
            Liever direct contact? Bel ons op +31 (0)76 20 55 239 of mail naar welcome@allsens.nl.
          </p>

          <h3 className="h3-sub">Toepassen van de Claude tool | 2e keer</h3>
          <img loading="lazy" decoding="async"             src="/afstuderen/pl/claude-tool-tekst-3-tweede-keer.webp"
            alt="Claude Tool Tekst 3 Tweede Keer"
            className="content-image-lg"
          />
        </div>

        {/* TEKST 4 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Tekst 4</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik heb dit keer gekozen voor een blog, omdat dit een effectieve manier is om de resultaten uit mijn onderzoek te vertalen naar een relevante branche. De blog laat zien hoe geurneutralisatie kan inspelen op de behoeften die tijdens het onderzoek naar voren zijn gekomen.
          </p>

          <h3 className="h3-sub">De kracht van geurneutralisatie voor schoonmaakbedrijven: méér waarde voor klanten, zonder extra complexiteit</h3>

          <p className="intro-divider">
            Schoonmaakbedrijven worden steeds vaker gevraagd om verder te kijken dan alleen een schone omgeving. Klanten verwachten niet alleen dat ruimtes er verzorgd uitzien, maar ook dat ze fris en aangenaam aanvoelen. Juist daar kan geurneutralisatie een waardevolle aanvulling zijn op bestaande schoonmaakdiensten.
          </p>

          <p className="intro-divider">
            Voor vragen neem contact op met welcome@allsens.nl of kijk op onze pagina over geurneutralisatie voor meer informatie.
          </p>

          <h3 className="h3-sub">Een schone ruimte ruikt niet altijd schoon</h3>

          <p className="intro-divider">
            Iedere schoonmaakprofessional kent de uitdaging: een ruimte kan technisch schoon zijn, terwijl er toch een ongewenste geur aanwezig blijft. Denk aan sanitair, afvalruimtes, kleedkamers, zorginstellingen, fitnesscentra of wachtruimtes. Deze geuren kunnen blijven hangen in textiel, meubilair, ventilatiesystemen of andere oppervlakken.
          </p>

          <p className="intro-divider">
            Voor bezoekers en medewerkers speelt geur een belangrijke rol in hoe zij een ruimte ervaren. Een frisse omgeving draagt bij aan een gevoel van comfort, hygiëne en vertrouwen.
          </p>

          <h3 className="h3-sub">Het verschil tussen maskeren en neutraliseren</h3>

          <p className="intro-divider">
            Veel traditionele luchtverfrissers proberen ongewenste geuren te overstemmen met een sterke geur. Hierdoor blijft de oorzaak van het geurprobleem vaak aanwezig.
          </p>

          <p className="intro-divider">
            Geurneutralisatie werkt anders. Met gespecialiseerde technologie worden geurstoffen op moleculair niveau aangepakt, waardoor de hinderlijke geur daadwerkelijk wordt verminderd of verwijderd. Het resultaat is een ruimte die niet alleen schoon oogt, maar ook fris aanvoelt.
          </p>

          <p className="intro-divider">
            Voor schoonmaakbedrijven betekent dit een aanvullende oplossing die aansluit op hun bestaande dienstverlening.
          </p>

          <h3 className="h3-sub">Meerwaarde voor bestaande klanten</h3>

          <p className="intro-divider">
            Door geurneutralisatie toe te voegen aan het dienstenpakket ontstaat de mogelijkheid om klanten extra ondersteuning te bieden bij hardnekkige geurproblemen.
          </p>

          <p className="intro-divider">Dit kan bijvoorbeeld interessant zijn voor:</p>

          <ul className="content-list">
            <li>Zorginstellingen</li>
            <li>Kantoren</li>
            <li>Sport- en fitnesslocaties</li>
            <li>Hotels en hospitality</li>
            <li>Onderwijsinstellingen</li>
            <li>Sanitaire ruimtes</li>
            <li>Afval- en opslagruimtes</li>
          </ul>

          <p className="intro-divider">
            Hiermee kunnen schoonmaakbedrijven inspelen op een behoefte die vaak buiten de reguliere schoonmaakwerkzaamheden valt, maar wel invloed heeft op de totale beleving van een gebouw.
          </p>

          <h3 className="h3-sub">Een sterkere klantbeleving</h3>

          <p className="intro-divider">
            Gebruikers van een gebouw beoordelen hun omgeving niet alleen met hun ogen. Ook geur speelt een belangrijke rol bij de eerste indruk en het algemene gevoel dat een ruimte oproept.
          </p>

          <p className="intro-divider">
            Wanneer bezoekers een frisse ontvangst ervaren, medewerkers prettig kunnen werken en gasten zich comfortabel voelen, draagt dit bij aan een positieve totaalervaring. Schoonmaakbedrijven die hierin meedenken, positioneren zich als een partner die verder kijkt dan alleen het schoonmaakproces.
          </p>

          <h3 className="h3-sub">Nieuwe kansen binnen bestaande contracten</h3>

          <p className="intro-divider">
            Voor veel schoonmaakorganisaties biedt geurneutralisatie bovendien mogelijkheden om bestaande dienstverlening uit te breiden. Klanten die regelmatig te maken hebben met geurklachten, zoeken vaak naar een duurzame oplossing.
          </p>

          <p className="intro-divider">
            Door geurneutralisatie als aanvullende service aan te bieden, ontstaat een extra dienstverlening die eenvoudig kan worden geïntegreerd binnen bestaande onderhouds- en schoonmaakcontracten.
          </p>

          <h3 className="h3-sub">Waarom geurbeleving steeds belangrijker wordt</h3>

          <p className="intro-divider">
            In een tijd waarin organisaties veel aandacht besteden aan gastvrijheid, welzijn en werkcomfort, groeit ook het belang van geurbeleving. Een aangename omgeving ondersteunt het gevoel van kwaliteit en verzorging.
          </p>

          <p className="intro-divider">
            Schoonmaakbedrijven spelen hierin een unieke rol. Zij zijn dagelijks aanwezig in gebouwen en kennen de uitdagingen van verschillende ruimtes als geen ander. Door naast reiniging ook geurneutralisatie aan te bieden, ontstaat een completere aanpak van de totale omgevingsbeleving.
          </p>

          <h3 className="h3-sub">Van schoon naar echt fris</h3>

          <p className="intro-divider">
            De toekomst van schoonmaak draait niet alleen om zichtbare reinheid, maar ook om de totale ervaring van een ruimte. Geurneutralisatie helpt schoonmaakbedrijven om klanten een extra kwaliteitsniveau te bieden, zonder dat bestaande processen ingrijpend hoeven te veranderen.
          </p>

          <p className="intro-divider">
            Een schone ruimte is belangrijk. Een ruimte die ook fris aanvoelt, maakt het verschil.
          </p>

          <p className="intro-divider">
            Neem contact op voor meer informatie
          </p>

          <p className="intro-divider">
            Heeft u vragen over geurneutralisatie binnen schoonmaakdiensten of wilt u weten wat dit kan betekenen voor uw organisatie? Neem gerust contact op via welcome@allsens.nl of bezoek de website www.allsens.nl voor meer informatie.
          </p>

          <h3 className="h3-sub">Toepassen van de Claude tool | 1e keer</h3>
          <img loading="lazy" decoding="async"             src="/afstuderen/pl/claude-tool-tekst-4-eerste-keer.webp"
            alt="Claude Tool Tekst 4 Eerste Keer"
            className="content-image-lg"
          />

          <h3 className="h3-sub">Verbeterde versie tekst 4</h3>

          <p className="intro-divider">
            De kracht van geurneutralisatie voor schoonmaakbedrijven: méér waarde voor klanten, zonder extra complexiteit
          </p>

          <p className="intro-divider">
            Schoonmaakbedrijven die geurneutralisatie aanbieden, onderscheiden zich als partner die verder gaat dan een schone ruimte. Ze lossen een probleem op dat standaard schoonmaakmiddelen niet aankunnen en dat klanten direct ervaren.
          </p>

          <h3 className="h3-sub">Een schone ruimte ruikt niet altijd schoon</h3>

          <p className="intro-divider">
            Iedere schoonmaakprofessional kent de uitdaging: een ruimte kan technisch schoon zijn, terwijl er toch een ongewenste geur blijft hangen. Sanitair, afvalruimtes, kleedkamers, zorginstellingen en fitnesscentra zijn omgevingen waar geuren zich vastzetten in textiel, meubilair en ventilatiesystemen. Bezoekers en medewerkers beoordelen een ruimte niet alleen op wat ze zien, maar ook op wat ze ruiken. Een frisse omgeving vergroot het gevoel van hygiëne, comfort en vertrouwen.
          </p>

          <h3 className="h3-sub">Het verschil tussen maskeren en neutraliseren</h3>

          <p className="intro-divider">
            Traditionele luchtverfrissers overstemmen ongewenste geuren met een sterkere geur. De oorzaak blijft aanwezig. Geurneutralisatie werkt fundamenteel anders: geurstoffen worden op moleculair niveau aangepakt en daadwerkelijk verwijderd. Het resultaat is een ruimte die niet alleen schoon oogt, maar ook fris aanvoelt zonder restgeur.
          </p>

          <h3 className="h3-sub">Meerwaarde voor bestaande klanten</h3>

          <p className="intro-divider">
            Geurneutralisatie sluit direct aan op bestaande schoonmaakcontracten en vraagt geen ingrijpende proceswijzigingen. Het is een concrete uitbreiding die inspeelt op een behoefte die buiten de reguliere schoonmaakwerkzaamheden valt, maar wel bepalend is voor de totale beleving van een gebouw. Toepassingen zijn er in vrijwel elke sector: zorginstellingen, kantoren, sport- en fitnesslocaties, hotels, onderwijsinstellingen en sanitaire ruimtes.
          </p>

          <h3 className="h3-sub">Waarom geurbeleving steeds belangrijker wordt</h3>

          <p className="intro-divider">
            Organisaties investeren steeds meer in gastvrijheid, welzijn en werkcomfort. Geur is daarin een onderschatte factor. Onderzoek toont aan dat mensen een ruimte sneller als prettig en verzorgd ervaren wanneer deze fris ruikt — ongeacht hoe schoon de ruimte visueel is. Schoonmaakbedrijven die hierop inspelen, positioneren zich als strategische partner in plaats van uitvoerende dienstverlener.
          </p>

          <h3 className="h3-sub">Van schoon naar echt fris</h3>

          <p className="intro-divider">
            Een schone ruimte is de basis. Een ruimte die ook fris aanvoelt, maakt het verschil voor bezoekers, medewerkers en klanten. Geurneutralisatie geeft schoonmaakbedrijven een concreet middel om dat verschil te maken, zonder dat bestaande processen ingrijpend veranderen.
          </p>

          <p className="intro-divider">
            Heeft u vragen over geurneutralisatie binnen uw schoonmaakdiensten? Neem contact op via welcome@allsens.nl of bezoek www.allsens.nl voor meer informatie.
          </p>

          <h3 className="h3-sub">Toepassen van de Claude tool | 2e keer</h3>
          <img loading="lazy" decoding="async"             src="/afstuderen/pl/claude-tool-tekst-4-tweede-keer.webp"
            alt="Claude Tool Tekst 4 Tweede Keer"
            className="content-image-lg"
          />
        </div>

        <Card title="3.11 PDCA-cyclus: Marketingteksten schrijven en optimaliseren">
          <Pdca
            plan={[
              "Na het ontwikkelen en testen van mijn tool wilde ik mijn kennis daadwerkelijk toepassen. Mijn doel was om vier marketingteksten te schrijven, deze eerst in de oorspronkelijke vorm te analyseren en daarna te verbeteren volgens de GEO-principes.",
              "Ik wilde hierbij niet alleen kijken naar de score van de tool, maar ook zelf begrijpen waarom een tekst verbeterd moest worden.",
            ]}
            doo={[
              "Ik heb vier marketingteksten geschreven die aansloten bij mijn werkzaamheden voor AllSens, onder andere rondom geurneutralisatie en samenwerkingen met schoonmaakbedrijven.",
              "Elke tekst heb ik eerst door mijn GEO-tool laten analyseren. Vervolgens heb ik de teksten aangepast. Ik heb bijvoorbeeld de kernboodschap eerder in de tekst geplaatst, antwoorden directer geformuleerd, de structuur duidelijker gemaakt en call-to-actions concreter gemaakt.",
              "Naast de feedback uit de tool heb ik hierbij de menselijke feedback uit de testfase meegenomen. Vooral het toevoegen van betrouwbaarheid heb ik verwerkt in mijn manier van beoordelen.",
            ]}
            check={[
              "De eerste analyses lieten zien dat de teksten gemiddeld tussen de 4,8 en 6,6 scoorden. Vooral de kernboodschap, structuur en directheid konden worden verbeterd.",
              "Na het optimaliseren scoorden de aangepaste teksten tussen de 7,8 en 8,2. Vooral bij kernboodschap, structuur en directheid waren duidelijke verbeteringen zichtbaar.",
              "Deze resultaten laten zien dat ik mijn kennis niet alleen theoretisch heb opgedaan, maar deze ook daadwerkelijk kon toepassen. Ik begreep steeds beter welke aanpassingen nodig waren en waarom deze aanpassingen de tekst sterker maakten.",
            ]}
            act={[
              "Op basis van deze resultaten wil ik de GEO-analysetool blijven gebruiken als hulpmiddel bij toekomstige marketingcontent. Tegelijkertijd wil ik niet volledig afhankelijk worden van de tool. Mijn doel is juist dat ik de principes steeds meer zelfstandig herken voordat ik een tekst analyseer.",
              "Daarom gebruik ik de tool als controle- en hulpmiddel, maar blijf ik mijn eigen vakkennis gebruiken om de uiteindelijke keuzes te maken.",
            ]}
          />
        </Card>

        <Card title="3.12 Ontwikkeling evalueren a.d.h.v. PDCA">
          <Pdca
            plan={[
              "Als laatste actie wilde ik niet alleen kijken naar de resultaten van mijn vier teksten, maar onderzoeken wat er daadwerkelijk in mijn manier van schrijven was veranderd. Het uitvoeren van de acties betekent namelijk niet automatisch dat mijn vakinhoudelijke niveau is verbeterd.",
              "Daarom heb ik een eerdere tekst vergeleken met een nieuwe tekst die ik bewust volgens GEO-principes heb geschreven.",
            ]}
            doo={[
              "In mijn oude teksten lag de nadruk vooral op het beschrijven van een onderwerp. Ik gebruikte langere tekstblokken en gaf niet altijd direct antwoord op een concrete vraag.",
              "In mijn nieuwe teksten begin ik sneller met de kern van het onderwerp. Ik gebruik duidelijkere tussenkoppen, kortere tekstblokken en meer vraaggerichte formuleringen. Ook let ik bewuster op het tonen van expertise en het geven van concrete informatie.",
            ]}
            check={[
              "Door de vergelijking zag ik dat mijn manier van schrijven daadwerkelijk veranderd is. Het grootste verschil is dat ik niet meer alleen denk vanuit de vraag: “Wat wil ik vertellen?”, maar steeds vaker vanuit: “Welke vraag heeft de gebruiker en hoe kan ik daar zo duidelijk mogelijk antwoord op geven?”",
              "Ook kan ik nu beter uitleggen waarom ik een bepaalde keuze maak. Voorheen veranderde ik bijvoorbeeld een tekst omdat deze volgens mij duidelijker kon. Nu kan ik aangeven dat ik een kernboodschap naar voren haal omdat de gebruiker en een AI-systeem hierdoor sneller kunnen begrijpen waar de tekst over gaat.",
            ]}
            act={[
              "Mijn volgende stap is om GEO niet als een los onderdeel van mijn werk te blijven zien, maar het mee te nemen wanneer ik nieuwe marketingcontent schrijf. De tool kan mij hierbij blijven helpen, maar mijn uiteindelijke doel is dat ik de belangrijkste principes steeds meer automatisch toepas.",
              "Omdat GEO een vakgebied is dat zich snel blijft ontwikkelen, zal ik mij de komende tijd hierin blijven verdiepen.",
            ]}
          />
        </Card>

        <Card title="3.13 Begin- en eindmeting | eindconclusie" last>
          <p className="intro-divider">
            Om mijn ontwikkeling per leerdoel inzichtelijk te maken, heb ik per doel een beginmeting en eindmeting opgesteld.
            Hiermee laat ik kort zien waar ik aan het begin stond, welke stappen ik heb gezet en in hoeverre het doel aan het
            einde van de afstudeerperiode is behaald.
          </p>

          <Table
            head={["Onderdeel", "Beginmeting", "Eindmeting"]}
            rows={[
              [
                "Kennis van GEO",
                "Ik kende het begrip beperkt en had vooral algemene kennis over SEO.",
                "Ik kan uitleggen wat GEO inhoudt en welke rol het speelt binnen AI-gedreven zoekgedrag.",
              ],
              [
                "SEO versus GEO",
                "Ik dacht voornamelijk vanuit traditionele SEO en zoekwoorden.",
                "Ik kan het verschil uitleggen en bewust vanuit beide vormen van vindbaarheid denken.",
              ],
              [
                "Zoekintentie",
                "Ik hield rekening met de doelgroep, maar niet structureel met de specifieke vraag die iemand aan een AI-systeem kan stellen.",
                "Ik kan een tekst beoordelen en aanpassen vanuit de zoekintentie van de gebruiker.",
              ],
              [
                "GEO-analyse",
                "Ik had geen vaste methode om een tekst op GEO te beoordelen.",
                "Ik kan een tekst beoordelen aan de hand van vijf vaste GEO-principes.",
              ],
              [
                "GEO toepassen",
                "Ik paste GEO niet bewust toe in mijn teksten.",
                "Ik kan GEO-principes zelfstandig toepassen en mijn keuzes onderbouwen.",
              ],
            ]}
          />

          <p className="intro-divider">
            De vier geanalyseerde teksten ondersteunen deze ontwikkeling. De eerste versies scoorden tussen 4,8 en 6,6,
            terwijl de verbeterde versies tussen 7,8 en 8,2 scoorden. Naast deze meetbare verbetering heb ik geleerd om mijn
            keuzes tijdens het optimaliseren te onderbouwen vanuit de GEO-principes. Daarmee laat de begin- en eindmeting zien
            dat ik niet alleen meer kennis heb opgedaan, maar GEO ook daadwerkelijk kan toepassen.
          </p>
        </Card>

        <FooterNav
          prev={["/Afstuderen/leerdoel-1-presenteren", "Leerdoel: Presenteren"]}
          next={["/Afstuderen/vakdoel-gedragseconomie", "Vakdoel: Gedragseconomie"]}
        />
      </article>
    </main>
  );
}
