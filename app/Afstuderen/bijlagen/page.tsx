"use client";

export default function Bijlagen() {
  const reflectieItems = [
    { title: "Leerdoel 1 - Actie 1", description: "Reflectievragen presentatievaardigheden eerste moment" },
    { title: "Leerdoel 1 - Actie 2", description: "Reflectievragen presentatievaardigheden tweede moment" },
    { title: "Leerdoel 1 - Actie 3", description: "Reflectievragen presentatievaardigheden derde moment (komt nog)" },
    { title: "Leerdoel 2 - Actie 1", description: "Reflectievragen Spaans dagelijks oefenen (Duolingo)" },
    { title: "Leerdoel 2 - Actie 2", description: "Reflectievragen Spaanse les met Inge Abbeel" },
    { title: "Leerdoel 2 - Actie 3", description: "Reflectievragen Spaans A1-toets en samenvatting" },
    { title: "Leerdoel 3 - Actie 1", description: "Reflectievragen GEO-onderzoek en inlezen" },
    { title: "Leerdoel 3 - Actie 2-4", description: "Reflectievragen marketingteksten analyseren en optimaliseren" }
  ];

  return (
    <main>
      <article className="content-page">
        {/* HEADER */}
        <div className="reveal">
          <a href="/Afstuderen" className="back-link-sm">
            ← Terug naar Afstuderen
          </a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Aanvullende Documenten
          </div>
          <h1 className="page-h1-medium">
            <span className="g-text">Bijlagen</span>
          </h1>
          <div className="divider divider-center divider-mb40" />
        </div>

        {/* INTRODUCTIE */}
        <div className="reveal glow-card intro-card mb24">
          <p className="intro-divider">
            Onderstaand aanvullend de bijlagen op de platte tekst.
          </p>
        </div>

        {/* REFLECTIEVRAGEN GRID */}
        <div className="reveal mb40">
          <h2 className="h2-sub-lg mb24">
            <span className="g-text">Reflectievragen per leerdoel</span>
          </h2>
          <div className="divider divider-mb40" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {reflectieItems.map((item, i) => (
              <div key={i} className="glow-card intro-card">
                <h3 className="h3-sub" style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.95rem", color: "rgba(1,63,50,0.8)", margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LEERDOEL 1 - ACTIE 1 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectievragen | leerdoel 1 | actie 1</span>
          </h2>
          <div className="divider divider-mb20" />

          <h3 className="h3-sub">1. Wat was mijn kernboodschap en kwam die duidelijk over?</h3>
          <p className="intro-divider">
            Mijn kernboodschap was het presenteren van mijn afstudeeronderzoek en het laten zien welke stappen ik heb genomen, welke resultaten ik heb verzameld en waarom dit onderzoek relevant is voor AllSens. Uit de ontvangen feedback bleek dat deze boodschap duidelijk overkwam. Collega's gaven aan dat de presentatie inhoudelijk sterk was en dat zichtbaar was hoeveel tijd en werk ik in het onderzoek had geïnvesteerd. Hierdoor werd de waarde van het onderzoek goed duidelijk voor het publiek.
          </p>

          <h3 className="h3-sub">2. Waar verloor ik mijn structuur of ging ik te veel uitleggen?</h3>
          <p className="intro-divider">
            De algemene structuur van de presentatie was logisch opgebouwd en volgde de stappen van mijn onderzoek. Wel merkte ik dat ik bij sommige onderdelen veel details wilde delen, waardoor ik soms te uitgebreid uitleg gaf. Daarnaast bevatten enkele slides veel tekst, waardoor er veel informatie tegelijk werd aangeboden. Hierdoor werd het voor het publiek lastiger om de belangrijkste punten direct te herkennen.
          </p>

          <h3 className="h3-sub">3. Hoe was mijn spreektempo en hoe weet ik dat?</h3>
          <p className="intro-divider">
            Mijn spreektempo lag relatief hoog. Dit bleek uit de feedback van meerdere collega's, die aangaven dat sommige onderdelen lastig te volgen waren omdat ik snel sprak. Waarschijnlijk komt dit doordat ik dagelijks met het onderzoek bezig ben en de inhoud goed ken. Hierdoor ging ik soms sneller door de informatie heen dan prettig was voor mensen die minder bekend waren met het onderwerp.
          </p>

          <h3 className="h3-sub">4. Welke feedback kreeg ik en wat doe ik daarmee in de volgende presentatie?</h3>
          <p className="intro-divider">
            Ik ontving zowel positieve feedback als verbeterpunten. Positieve punten waren dat de presentatie inhoudelijk sterk was, de slides professioneel waren vormgegeven en dat mijn betrokkenheid bij het onderwerp duidelijk zichtbaar was.
          </p>

          <p className="intro-divider">
            De belangrijkste verbeterpunten waren:
          </p>

          <ul className="content-list">
            <li>Rustiger spreken en meer pauzes nemen.</li>
            <li>Minder tekst op de slides plaatsen.</li>
            <li>Informatie beter verdelen over meerdere slides.</li>
            <li>Meer mondelinge toelichting geven bij afbeeldingen en begrippen.</li>
          </ul>

          <p className="intro-divider">
            Tijdens mijn volgende presentatie ga ik deze feedback toepassen door mijn slides overzichtelijker te maken, bewuster op mijn spreektempo te letten en extra aandacht te besteden aan uitleg voor mensen die niet bekend zijn met mijn onderzoek.
          </p>

          <h3 className="h3-sub">5. Wat zegt deze ervaring over mijn ontwikkeling als commercieel econoom?</h3>
          <p className="intro-divider">
            Deze ervaring laat zien dat ik inhoudelijk sterk ben gegroeid en in staat ben om complexe informatie professioneel te presenteren. Daarnaast heb ik geleerd dat een goede presentatie niet alleen draait om inhoud, maar ook om de manier waarop informatie wordt overgebracht. Door actief feedback te ontvangen en deze om te zetten in concrete verbeteracties ontwikkel ik mijn communicatieve en presentatievaardigheden verder. Dit zijn belangrijke competenties voor een commercieel econoom, omdat het presenteren van onderzoeksresultaten, adviezen en analyses regelmatig onderdeel is van het vakgebied. Deze ervaring heeft mij geholpen om bewuster te worden van mijn sterke punten en ontwikkelpunten als toekomstige professional.
          </p>
        </div>

        {/* LEERDOEL 1 - ACTIE 2 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectievragen | leerdoel 1 | actie 2</span>
          </h2>
          <div className="divider divider-mb20" />

          <h3 className="h3-sub">1. Wat was mijn kernboodschap en kwam die duidelijk over?</h3>
          <p className="intro-divider">
            Mijn kernboodschap was dat ik tijdens mijn studie en afstudeerperiode veel persoonlijke en professionele ontwikkeling heb doorgemaakt en daarbij doorzettingsvermogen heb laten zien. Uit de feedback bleek dat de rode draad van mijn verhaal aanwezig was, maar dat deze nog niet altijd duidelijk genoeg overkwam. Daardoor konden luisteraars niet altijd goed volgen wat ik precies wilde meegeven.
          </p>

          <h3 className="h3-sub">2. Waar verloor ik mijn structuur of ging ik te veel uitleggen?</h3>
          <p className="intro-divider">
            Ik verloor vooral structuur op momenten waarop ik gebeurtenissen achter elkaar beschreef. Hierdoor ontstond een opsomming van wat er allemaal gebeurd was, zonder steeds duidelijk te maken waarom deze ervaringen belangrijk waren voor mijn ontwikkeling. Daarnaast ging ik soms te uitgebreid in op details, waardoor de kern van mijn verhaal minder zichtbaar werd.
          </p>

          <h3 className="h3-sub">3. Hoe was mijn spreektempo en hoe weet ik dat?</h3>
          <p className="intro-divider">
            Mijn spreektempo lag te hoog. Door de spanning begon ik sneller te praten dan gepland. Dit merkte ik zelf doordat ik de draad van mijn verhaal kwijtraakte. Ook bleek uit de feedback dat mijn verhaal hierdoor minder goed overkwam en dat belangrijke onderdelen onvoldoende aandacht kregen. Dat zijn signalen dat mijn tempo te hoog lag.
          </p>

          <h3 className="h3-sub">4. Welke feedback kreeg ik en wat doe ik daarmee in de volgende presentatie?</h3>
          <p className="intro-divider">
            Ik kreeg onder andere de feedback dat er al een goede lijn in mijn verhaal zat, maar dat deze nog sterker naar voren mag komen. Daarnaast werd geadviseerd om kernwoorden op de dia's te plaatsen als geheugensteun en om belangrijke onderdelen, zoals mijn onderzoek en doorzettingsvermogen, duidelijker te benoemen.
          </p>

          <p className="intro-divider">
            Voor mijn volgende presentatie ga ik daarom:
          </p>

          <ul className="content-list">
            <li>De inhoud verder aanscherpen en versimpelen.</li>
            <li>Kernwoorden toevoegen aan de dia's voor extra houvast.</li>
            <li>Meer nadruk leggen op mijn belangrijkste leerervaringen en resultaten.</li>
            <li>Extra oefenen op een rustig spreektempo.</li>
            <li>De rode draad van mijn verhaal duidelijker naar voren laten komen.</li>
          </ul>

          <h3 className="h3-sub">5. Wat zegt deze ervaring over mijn ontwikkeling als commercieel econoom?</h3>
          <p className="intro-divider">
            Deze ervaring laat zien dat ik opensta voor feedback en actief werk aan mijn professionele ontwikkeling. Als commercieel econoom is het belangrijk om ideeën en resultaten overtuigend te presenteren aan verschillende doelgroepen. Door kritisch naar mijn eigen presentatie te kijken en feedback te verwerken, ontwikkel ik mijn communicatieve vaardigheden verder. Daarnaast laat deze ervaring zien dat ik reflectief ben en bereid ben om mezelf continu te verbeteren, wat belangrijke eigenschappen zijn binnen het commerciële werkveld.
          </p>
        </div>

        {/* LEERDOEL 1 - ACTIE 3 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectievragen | leerdoel 1 | actie 3</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Komt nog.
          </p>
        </div>

        {/* LEERDOEL 2 - ACTIE 1 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectievragen | leerdoel 2 | actie 1</span>
          </h2>
          <div className="divider divider-mb20" />

          <h3 className="h3-sub">1. Wat heb ik deze keer gedaan voor mijn Spaanse doelen?</h3>
          <p className="intro-divider">
            Tijdens mijn afstudeerperiode heb ik actief gewerkt aan mijn doel om Spaans te leren. Ik heb ervoor gezorgd dat ik dagelijks tijd vrijmaakte om met Duolingo te oefenen en heb dit consequent volgehouden. Hierdoor heb ik een routine ontwikkeld waarin het leren van Spaans onderdeel werd van mijn dagelijkse activiteiten. Door iedere dag te oefenen heb ik mijn kennis van woordenschat, grammatica, uitspraak en luistervaardigheid stap voor stap uitgebreid. Daarnaast heb ik laten zien dat ik zelfstandig kan werken aan een persoonlijk ontwikkeldoel naast mijn studie- en afstudeerverplichtingen.
          </p>

          <h3 className="h3-sub">2. Wat ging goed en wat kan ik de volgende keer beter doen?</h3>
          <p className="intro-divider">
            Wat goed ging, was mijn discipline en doorzettingsvermogen. Ik heb mijn doel van 100 opeenvolgende dagen niet alleen gehaald, maar zelfs overtroffen met een reeks van 116 dagen. Hierdoor heb ik bewezen dat ik een langdurig leerproces kan volhouden wanneer ik duidelijke doelen stel en hier dagelijks aandacht aan besteed.
          </p>

          <p className="intro-divider">
            Een verbeterpunt voor de volgende keer is om mijn leeractiviteiten verder uit te breiden dan alleen Duolingo. Hoewel de app een goede basis biedt, merk ik dat ik de taal nog weinig in echte situaties toepas. In een volgende fase kan ik bijvoorbeeld Spaanse podcasts luisteren, eenvoudige teksten lezen of gesprekken oefenen met moedertaalsprekers. Op die manier ontwikkel ik niet alleen mijn theoretische kennis, maar ook mijn praktische taalvaardigheid.
          </p>

          <h3 className="h3-sub">3. Wat heb ik geleerd en hoe neem ik dit mee naar de volgende stap?</h3>
          <p className="intro-divider">
            Ik heb geleerd dat kleine dagelijkse inspanningen op de lange termijn tot duidelijke resultaten kunnen leiden. Door iedere dag slechts een beperkte hoeveelheid tijd te investeren, heb ik toch een stevige basis in de Spaanse taal opgebouwd. Daarnaast heb ik ervaren dat het creëren van een vaste routine helpt om gemotiveerd te blijven en doelen daadwerkelijk te behalen.
          </p>

          <p className="intro-divider">
            Deze ervaring neem ik mee naar de volgende stap door dezelfde aanpak te blijven gebruiken. Ik wil mijn dagelijkse oefenmoment behouden en mijn leerproces verder verdiepen met aanvullende leermethoden. Op die manier kan ik mijn Spaanse taalvaardigheid verder ontwikkelen en uiteindelijk dichter bij mijn persoonlijke ambitie komen om in de toekomst in Spanje te wonen en werken.
          </p>
        </div>

        {/* LEERDOEL 2 - ACTIE 2 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectievragen | leerdoel 2 | actie 2</span>
          </h2>
          <div className="divider divider-mb20" />

          <h3 className="h3-sub">1. Wat heb ik deze keer gedaan voor mijn Spaanse doelen?</h3>
          <p className="intro-divider">
            Deze keer heb ik een Spaanse les gevolgd van Inge Abbeel om mijn kennis van de Spaanse taal verder te ontwikkelen. Tijdens de les heb ik gewerkt aan mijn woordenschat, uitspraak en begrip van veelgebruikte onderwerpen zoals tijd, data, getallen en dagelijkse uitdrukkingen. We hebben samen geoefend met een Spaans-Nederlands woordenboek met afbeeldingen en ik heb actief meegedaan door woorden en zinnen uit te spreken. Daarnaast heb ik geleerd hoe verschillende tijdsaanduidingen en getallen in het Spaans worden gebruikt, wat mij helpt bij het voeren van eenvoudige gesprekken en bij mijn oefeningen op Duolingo.
          </p>

          <h3 className="h3-sub">2. Wat ging goed en wat kan ik de volgende keer beter doen?</h3>
          <p className="intro-divider">
            Wat goed ging, was dat ik veel nieuwe woorden heb geleerd en dat ik actief heb meegedaan tijdens de les. Door de duidelijke uitleg van Inge en het gebruik van afbeeldingen kon ik de betekenis van woorden snel begrijpen en onthouden. Ook merkte ik dat mijn uitspraak verbeterde, doordat ik direct feedback kreeg tijdens het oefenen.
          </p>

          <p className="intro-divider">
            Wat ik de volgende keer beter kan doen, is de nieuwe woorden vaker herhalen tijdens de les en na afloop meer tijd besteden aan het oefenen van de woordenschat. Vooral bij hogere getallen en langere tijdsuitdrukkingen merkte ik dat ik nog moest nadenken voordat ik het juiste antwoord kon geven. Door deze onderwerpen vaker te oefenen kan ik ze sneller en zelfverzekerder gebruiken.
          </p>

          <h3 className="h3-sub">3. Wat heb ik geleerd en hoe neem ik dit mee naar de volgende stap?</h3>
          <p className="intro-divider">
            Ik heb geleerd hoe ik in het Spaans over tijd, data, dagen, maanden en seizoenen kan praten. Daarnaast heb ik kennisgemaakt met verschillende tijdsuitdrukkingen, getallen, rangtelwoorden en belangrijke uitspraakregels. Ook begrijp ik beter hoe Spaanse zinnen rondom tijd en afspraken worden opgebouwd.
          </p>

          <p className="intro-divider">
            Deze kennis neem ik mee naar de volgende stap door de geleerde woorden en grammaticale onderdelen regelmatig te herhalen via Duolingo en mijn aantekeningen. Daarnaast wil ik meer oefenen met het uitspreken van Spaanse woorden en eenvoudige gesprekken voeren waarin ik tijd, data en getallen gebruik. Op die manier kan ik mijn woordenschat uitbreiden en steeds meer vertrouwen krijgen in het spreken van Spaans.
          </p>
        </div>

        {/* LEERDOEL 2 - ACTIE 3 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectievragen | leerdoel 2 | actie 3</span>
          </h2>
          <div className="divider divider-mb20" />

          <h3 className="h3-sub">1. Wat heb ik deze keer gedaan voor mijn Spaanse doelen?</h3>
          <p className="intro-divider">
            Deze periode heb ik dagelijks geoefend met Spaans via Duolingo en daarbij een reeks van meer dan 100 dagen opgebouwd. Daarnaast heb ik les gevolgd bij Inge Abbeel, waarin ik heb gewerkt aan mijn uitspraak en het correct gebruiken van verschillende tijdsvormen. Na deze lessen ben ik zelfstandig verder gegaan met het oefenen van grammatica. Om mijn niveau te toetsen heb ik de Spaanse A1-toets gemaakt. Nadat ik de eerste keer niet was geslaagd, heb ik extra geoefend en de toets opnieuw gemaakt, waarna ik deze succesvol heb afgerond.
          </p>

          <h3 className="h3-sub">2. Wat ging goed en wat kan ik de volgende keer beter doen?</h3>
          <p className="intro-divider">
            Wat goed ging, was mijn doorzettingsvermogen. Ondanks dat grammatica voor mij een uitdaging was, ben ik blijven oefenen totdat ik voldoende vooruitgang had geboekt. Ook ben ik tevreden over mijn discipline om dagelijks met de taal bezig te zijn. De volgende keer wil ik eerder extra aandacht besteden aan de onderdelen die ik lastig vind, zoals werkwoordsvormen en grammaticale uitzonderingen. Daarnaast wil ik meer oefenen met het actief spreken van Spaans, zodat ik de taal niet alleen begrijp, maar ook vloeiender kan gebruiken.
          </p>

          <h3 className="h3-sub">3. Wat heb ik geleerd en hoe neem ik dit mee naar de volgende stap?</h3>
          <p className="intro-divider">
            Ik heb geleerd dat taal leren veel tijd, herhaling en doorzettingsvermogen vraagt. Ook heb ik gemerkt dat fouten maken onderdeel is van het leerproces en dat extra oefenen daadwerkelijk leidt tot betere resultaten. Dit zag ik terug in mijn verbetering van 75% naar 90% op de A1-toets. Naar de volgende stap neem ik mee dat regelmatige oefening essentieel is om mijn kennis vast te houden. Daarom wil ik blijven werken aan mijn grammatica en mijn vaardigheden verder ontwikkelen richting A2-niveau door Spaans vaker te lezen, luisteren en spreken.
          </p>
        </div>

        {/* LEERDOEL 3 - ACTIE 1 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectievragen | leerdoel 3 | actie 1</span>
          </h2>
          <div className="divider divider-mb20" />

          <h3 className="h3-sub">1. Welke GEO-principes kwamen in beide artikelen naar voren?</h3>
          <p className="intro-divider">
            Uit beide artikelen bleek dat het steeds belangrijker wordt om content te schrijven, die direct antwoord geeft op vragen van gebruikers. Daarnaast werd het belang benadrukt van duidelijke structuur, betrouwbare informatie, expertise en het gebruik van vraaggerichte content zoals FAQ's.
          </p>

          <h3 className="h3-sub">2. Wat is volgens de artikelen het verschil tussen SEO en GEO?</h3>
          <p className="intro-divider">
            SEO richt zich voornamelijk op het beter vindbaar maken van een website in zoekmachines (Traffic Builders, 19 juni 2025). GEO richt zich op het vergroten van de kans dat content wordt opgenomen in antwoorden van AI-tools zoals ChatGPT, Gemini en Copilot. Daarbij spelen duidelijke antwoorden, context en betrouwbaarheid een grotere rol.
          </p>

          <h3 className="h3-sub">3. Welke inzichten waren volgens jou het meest relevant voor AllSens?</h3>
          <p className="intro-divider">
            Voor AllSens vond ik vooral het beantwoorden van veelgestelde vragen, het tonen van expertise en het aanbieden van duidelijke en consistente informatie relevant. Deze principes sluiten goed aan bij de informatieve blogs en kennis/geurpagina's die AllSens al gebruikt.
          </p>

          <h3 className="h3-sub">4. Welke feedback ontving je op je infographic?</h3>
          <p className="intro-divider">
            Mijn bedrijfsbegeleider gaf aan dat de GEO-principes goed aansluiten bij de manier waarop klanten steeds vaker informatie zoeken via AI-tools. Daarnaast werd bevestigd dat het beantwoorden van klantvragen via content een kans biedt voor AllSens om online zichtbaar te blijven.
          </p>

          <h3 className="h3-sub">5. Wat heb je geleerd van dit onderzoek?</h3>
          <p className="intro-divider">
            Ik heb geleerd dat online zichtbaarheid niet meer alleen draait om zoekmachines. AI-tools spelen een steeds grotere rol bij het zoeken naar informatie. Daardoor wordt het belangrijker om content te maken die duidelijke antwoorden geeft en aansluit bij de vragen van gebruikers.
          </p>
        </div>

        {/* LEERDOEL 3 - ACTIE 2-4 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectievragen | leerdoel 3 | actie 2 t/m 4</span>
          </h2>
          <div className="divider divider-mb20" />

          <h3 className="h3-sub">1. Op welke schrijfprincipes heb ik gelet en waarom heb ik die gekozen?</h3>
          <p className="intro-divider">
            Tijdens deze opdracht heb ik gelet op de GEO-principes kernboodschap, zoekintentie, structuur, directheid en na feedback ook betrouwbaarheid. Ik heb deze principes gekozen omdat AI-systemen zoals ChatGPT en Google SGE informatie anders verwerken dan traditionele zoekmachines. Een tekst moet direct antwoord geven op de vraag van de gebruiker, logisch zijn opgebouwd en betrouwbare informatie bevatten. Door deze principes toe te passen, vergroot ik de kans dat zowel gebruikers als AI-systemen de inhoud snel begrijpen en gebruiken.
          </p>

          <h3 className="h3-sub">2. Wat is het verschil tussen een traditionele SEO-tekst en een tekst gericht op AI-zoekgedrag?</h3>
          <p className="intro-divider">
            Een traditionele SEO-tekst richt zich vooral op het gebruik van zoekwoorden om hoog te scoren in zoekmachines zoals Google. Bij een tekst gericht op AI-zoekgedrag staat het direct beantwoorden van de zoekvraag centraal. AI-systemen zoeken niet alleen naar zoekwoorden, maar ook naar duidelijke antwoorden, context en betrouwbaarheid. Daarom moeten GEO-teksten sneller tot de kern komen, een heldere structuur hebben en concrete informatie bevatten die AI eenvoudig kan verwerken en samenvatten.
          </p>

          <h3 className="h3-sub">3. Welke feedback ontving ik op mijn teksten en wat heb ik daarmee gedaan?</h3>
          <p className="intro-divider">
            De analyses lieten zien dat mijn eerste versies vaak te algemeen begonnen, waardoor de kernboodschap niet direct duidelijk was. Daarnaast waren sommige formuleringen te voorzichtig en ontbraken concrete voorbeelden, cijfers of een duidelijke call-to-action. Op basis van deze feedback heb ik de belangrijkste boodschap eerder in de tekst geplaatst, zinnen directer geformuleerd, de structuur verbeterd met duidelijke tussenkoppen en concrete vervolgstappen toegevoegd. Hierdoor werden de teksten overzichtelijker en beter afgestemd op zowel de lezer als AI-systemen.
          </p>

          <h3 className="h3-sub">4. In hoeverre sloten mijn teksten aan op de zoekintentie van de doelgroep van AllSens?</h3>
          <p className="intro-divider">
            Mijn teksten sloten goed aan op de zoekintentie van de doelgroep omdat ze antwoord gaven op concrete vragen die binnen het onderzoek naar voren kwamen. Denk aan vragen zoals wat geurneutralisatie is, hoe het werkt en welke voordelen het biedt voor schoonmaakbedrijven. Door deze vragen centraal te stellen en direct te beantwoorden, sloten de teksten beter aan op de informatiebehoefte van de doelgroep. De GEO-analyses bevestigden dit doordat de zoekintentie na de optimalisaties consequent hoger werd beoordeeld.
          </p>

          <h3 className="h3-sub">5. Wat zegt deze ervaring over mijn ontwikkeling als marketingprofessional?</h3>
          <p className="intro-divider">
            Deze ervaring laat zien dat ik mij heb ontwikkeld in het schrijven van content die aansluit op nieuwe ontwikkelingen binnen online marketing. Ik heb niet alleen geleerd hoe GEO werkt, maar ook hoe ik deze kennis praktisch kan toepassen door een eigen analysetool te ontwikkelen en mijn teksten systematisch te verbeteren. Daarnaast heb ik geleerd om feedback te gebruiken als hulpmiddel om content effectiever te maken. Hierdoor kijk ik niet alleen naar wat ik wil vertellen, maar vooral naar hoe gebruikers en AI-systemen informatie zoeken, begrijpen en gebruiken. Dit maakt mij beter voorbereid op de toekomst van digitale marketing.
          </p>
        </div>

        {/* FOOTER NAV */}
        <div className="footer-nav-mt80">
          <a href="/Afstuderen/literatuurlijst" className="btn-ghost btn-sm-pad24">← Vorige: Literatuurlijst</a>
          <a href="/Afstuderen" className="btn btn-sm-pad24">Terug naar Afstuderen →</a>
        </div>
      </article>
    </main>
  );
}
