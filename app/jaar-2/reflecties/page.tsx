"use client";

import React, { useState } from 'react';

function StarrCard({ title, s, t, a, r, reflect }: { title: string, s: string, t: string, a: string, r: string, reflect: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="glow-card"
      style={{
        padding: "24px",
        borderRadius: "20px",
        border: "1px solid rgba(167,139,250,0.2)",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontSize: "1.2rem", color: "#e2e2f0", margin: 0 }}>{title}</h3>
        <span style={{ color: "#a78bfa", fontSize: "20px" }}>{isOpen ? '−' : '+'}</span>
      </div>

      {isOpen && (
        <div style={{ marginTop: "24px", borderTop: "1px solid rgba(167,139,250,0.1)", paddingTop: "20px" }}>
          <div style={{ display: "grid", gap: "16px", fontSize: "14px", lineHeight: "1.6" }}>
            <p style={{ margin: 0 }}><strong style={{ color: "#a78bfa" }}>Situatie:</strong> <span style={{ color: "#ccc" }}>{s}</span></p>
            <p style={{ margin: 0 }}><strong style={{ color: "#a78bfa" }}>Taak:</strong> <span style={{ color: "#ccc" }}>{t}</span></p>
            <p style={{ margin: 0 }}><strong style={{ color: "#a78bfa" }}>Actie:</strong> <span style={{ color: "#ccc" }}>{a}</span></p>
            <p style={{ margin: 0 }}><strong style={{ color: "#a78bfa" }}>Resultaat:</strong> <span style={{ color: "#ccc" }}>{r}</span></p>
            <p style={{ margin: 0, marginTop: "8px", padding: "12px", background: "rgba(167,139,250,0.05)", borderRadius: "8px", borderLeft: "3px solid #a78bfa" }}>
              <strong style={{ color: "#fff" }}>Reflectie:</strong> <br />
              <span style={{ color: "#e2e2f0" }}>{reflect}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReflectiePage() {
  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          
           <a href="/jaar-2"
            style={{
              fontSize: "13px",
              color: "#a78bfa",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "32px",
            }}
          >
            ← Terug naar Jaar 2
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Zelfreflectie
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">Reflecties</span>
          </h1>
          <p style={{ marginBottom: "40px", fontSize: "1.1rem", color: "#e2e2f0", maxWidth: "800px" }}>
            Hier reflecteer ik op de afgelopen periode. Kijkend naar wat goed gaat en waar voor mij op persoonlijk vlak nog verbeteringen liggen.
          </p>
          <div className="divider" style={{ marginBottom: "64px" }} />
        </div>

        {/* Sectie: Doel 1 */}
        <section className="reveal" style={{ marginBottom: "80px" }}>
          <h2 style={{ color: "#a78bfa", marginBottom: "32px", fontSize: "1.8rem" }}>Doel 1: Vergroten van Assertiviteit</h2>
          <div style={{ display: "grid", gap: "24px" }}>
          <StarrCard 
            title="Reflectie 1: Assertief gedrag en passiviteit"
            s={`Ik heb moeite om assertief te zijn en neig naar passief gedrag. Dit blijkt bijvoorbeeld uit situaties waarin ik confrontaties vermijd, moeite heb met "nee" zeggen, onzeker ben over mijn eigen behoeftes en impulsief "ja" zeg ten koste van mezelf. Deze passieve houding komt voor in groepsprojecten, sociale afspraken en keuzes in mijn leven.`}
            t={`Mijn doel is om te groeien in assertiviteit, zodat ik mijn eigen mening en behoeftes durf te uiten op een respectvolle en zelfverzekerde manier. Dit betekent dat ik confrontaties niet meer uit de weg wil gaan, grenzen leer aangeven en bewuster keuzes maak die in lijn liggen met wat ik belangrijk vind.`}
            a={`Meningen delen: Ik wil leren om mijn mening te delen, bijvoorbeeld door gebruik te maken van de ik-vorm. Confrontaties oefenen: Ik wil niet meer automatisch meegaan met andermans ideeën. Grenzen stellen: Ik wil bewuster "nee" leren zeggen, zelfs als dat ongemakkelijk voelt. Zelfbewustzijn ontwikkelen: Door stil te staan bij wat ik nodig heb of wil, kan ik beter inschatten of een verzoek of situatie bij mij past.`}
            r={`Ik heb enkele kleine successen geboekt, zoals het feit dat ik eerst "nee" durfde te zeggen tegen een sociale afspraak, ook al voelde ik me later onder druk om alsnog ja te zeggen. Daarnaast ben ik me bewust geworden van de patronen die ik wil doorbreken, zoals impulsief reageren en het vermijden van confrontaties.`}
            reflect={`Uit mijn reflectie blijkt dat ik begrijp waarom ik nu in een passieve rol zit. Dit komt deels door ervaringen uit mijn opvoeding en een gebrek aan zelfvertrouwen. Ik wil mezelf op een positieve manier ontwikkelen door assertiever te worden, zonder de gevoelens van anderen uit het oog te verliezen. Ik besef dat dit een proces is waarin kleine stappen en zelfreflectie belangrijk zijn.`}
          />
            <StarrCard
              title="Reflectie 2: De Assertiviteitstest"
              s="Voorafgaand aan het maken van de assertiviteitstest, verwachtte ik dat de uitkomst allesbehalve positief zou zijn. Ik had de indruk dat ik vaak terughoudend reageer in sociale situaties, moeite heb met grenzen aangeven en niet altijd mijn eigen mening durf te uiten."
              t="Mijn doel was om via de assertiviteitstest meer inzicht te krijgen in hoe assertief ik daadwerkelijk ben. De test moest duidelijk maken waar ik sta in termen van assertief gedrag en op welke punten ik mezelf eventueel kan verbeteren."
              a="Ik heb de assertiviteitstest van Kwadraad gemaakt en beantwoordde de vragen eerlijk en zorgvuldig. Dit vereiste dat ik reflecteerde op mijn eigen gedrag in verschillende situaties, zoals hoe ik mijn grenzen bewaak en hoe ik communiceer met anderen."
              r="De test liet zien dat ik over het algemeen assertief ben. Het resultaat benadrukt dat ik meestal duidelijk kan aangeven wat ik nodig heb en dat ik in staat ben om rekening te houden met zowel mijn eigen grenzen als die van anderen. Hoewel ik me soms wat terughoudend opstelde, ben ik me hiervan bewust en werk ik eraan om hierin verbetering aan te brengen."
              reflect="Het resultaat van de test was verrassend positief voor mij. Het heeft me laten zien dat ik sterker ben in assertief gedrag dan ik aanvankelijk dacht. Dit geeft me vertrouwen en motiveert me om door te blijven werken aan de momenten waarop ik nog terughoudend reageer. Het bewustzijn van mijn eigen communicatie is al een belangrijke stap in de goede richting."
            />
            <StarrCard
              title="Reflectie 3: Contextafhankelijke Assertiviteit"
              s="Ik heb gemerkt dat mijn assertiviteit afhankelijk is van de context. In een veilige omgeving, zoals met vrienden of familie, voel ik me vrij om mijn grenzen aan te geven. In onbekende of zakelijke situaties ervaar ik echter twijfels en een gebrek aan zelfvertrouwen, vaak beïnvloed door reacties van anderen die me onzeker maken of overweldigen."
              t="Ik wilde inzicht krijgen in hoe mijn assertiviteit zich manifesteert in verschillende situaties. Het doel was om patronen te herkennen en strategieën te bedenken om ook in uitdagendere omstandigheden assertief te zijn."
              a="Ik heb nagedacht over mijn ervaringen en situaties geanalyseerd waarin ik moeite had om assertief te blijven. Ik heb ook geconcludeerd dat ik al over de basisvaardigheden beschik, maar dat er verbetering mogelijk is. Daarnaast overweeg ik om een assertiviteitscursus te volgen om mezelf verder te ontwikkelen."
              r="Ik realiseer me dat ik assertief kan zijn wanneer ik me op mijn gemak voel, wat een belangrijke kracht is om op te bouwen. Tegelijkertijd heb ik inzicht gekregen in de factoren die me belemmeren in minder veilige situaties, zoals reacties van anderen die overweldigend aanvoelen. Het besef dat ik de vaardigheden al in huis heb, geeft me vertrouwen dat ik dit verder kan ontwikkelen."
              reflect="Ik heb een waardevolle conclusie getrokken: assertiviteit is een vaardigheid die ik al bezit, maar die ik verder kan versterken door meer bewustzijn en oefening. Het is logisch dat assertief gedrag uitdagender wordt in onzekere situaties, en een cursus kan me helpen om specifieke tools te ontwikkelen om hiermee om te gaan. Door me te richten op het behouden van zelfvertrouwen in elke situatie, kan ik gemakkelijker voor mezelf opkomen zonder schuldgevoel."
            />
            <StarrCard
              title="Reflectie 4: Praktijktoepassingen"
              s="In de afgelopen maanden heb ik verschillende situaties meegemaakt waarin ik mijn assertiviteit kon toepassen of verbeteren. Deze situaties varieerden van alledaagse ontmoetingen in de supermarkt en het openbaar vervoer tot complexere interacties op werk, met vrienden en familie, of in formele contexten zoals bij de dokter of in een winkel."
              t="In al deze situaties was mijn taak om mijn assertiviteit te gebruiken om mijn behoeften, meningen of grenzen op een respectvolle maar duidelijke manier kenbaar te maken. Dit was belangrijk om ervoor te zorgen dat ik mezelf serieus neem en dat anderen dat ook doen."
              a="In de supermarkt heb ik beleefd aangegeven dat iemand niet voor mocht dringen. Op werk of school heb ik duidelijk gemaakt dat ik geen ruimte had om een extra taak over te nemen. Bij vrienden heb ik mijn eigen comfort vooropgesteld door een clubbezoek over te slaan. In het openbaar vervoer heb ik beleefd om een zitplaats gevraagd. In de winkel heb ik actie ondernomen om een beschadigd product te laten vervangen. Tijdens het kerstdiner heb ik mijn mening gedeeld in een discussie op een respectvolle manier. Thuis heb ik mijn grenzen aangegeven door tijd voor mezelf te vragen voordat ik hielp. Bij de dokter heb ik kritisch doorgevraagd over een advies om meer duidelijkheid te krijgen."
              r="In al deze situaties kon ik mezelf op een respectvolle en effectieve manier uitdrukken. Mijn grenzen werden gerespecteerd (bijvoorbeeld bij familie, vrienden en in de supermarkt). Mijn mening werd serieus genomen en leidde tot respectvollere gesprekken (bijvoorbeeld bij het kerstdiner). Ik voelde me zelfverzekerder en meer tevreden over mijn optreden (bijvoorbeeld in de winkel en bij de dokter)."
              reflect="De reflectie over deze situaties laat zien dat ik grote vooruitgang heb geboekt in mijn assertiviteit. Waar ik vroeger misschien stil zou blijven of me zou aanpassen aan anderen, heb ik nu geleerd om mijn behoeften en grenzen te communiceren zonder onbeleefd te zijn. Mijn acties hebben niet alleen geleid tot respectvolle reacties van anderen, maar ook tot een groeiend zelfvertrouwen."
            />
          </div>
        </section>

        {/* Sectie: Doel 2 */}
        <section className="reveal" style={{ marginBottom: "80px" }}>
          <h2 style={{ color: "#a78bfa", marginBottom: "32px", fontSize: "1.8rem" }}>Doel 2: Stage en Profilering</h2>
          <div style={{ display: "grid", gap: "24px" }}>
            <StarrCard
              title="Reflectie 1: Criteria Stageplek"
              s="Ik stond voor de taak om een lijst samen te stellen van criteria waaraan een stageplek moet voldoen. Dit was belangrijk om een duidelijk beeld te krijgen van wat ik zoek, zodat ik gericht kan solliciteren naar een stage die aansluit bij mijn leerdoelen en ambities."
              t="Mijn doel was om een lijst op te stellen die me helpt te focussen op het vinden van een stageplek die niet alleen past bij mijn interesse in Online Marketing en Sales, maar ook bij mijn persoonlijke voorkeuren en behoeften, zoals locatie, werkzaamheden en begeleiding."
              a="Ik heb mijn eigen interesses, ambities en praktische wensen geïnventariseerd. Door na te denken over wat ik wil leren en welke omgeving me daarbij kan ondersteunen, heb ik criteria geformuleerd: Stagefocus: Richting Online Marketing of Sales, met de nadruk op campagnes en klantrelaties. Voorkeursbedrijven: Dynamische bedrijven, zoals marketingbureaus of startups. Regio: Breda. Werkzaamheden: Campagnebeheer, data-analyse en ondersteuning van salesteams. Skills: Communicatievaardigheden en kennis van digitale tools zoals Google Ads en HubSpot. Voorkeurseisen: Goede begeleiding, flexibele werkcultuur en indien mogelijk een stagevergoeding."
              r="De lijst is helder en concreet geworden, waardoor ik nu een duidelijk beeld heb van de stageplek die het beste bij me past. Dit helpt me niet alleen om gericht te zoeken, maar ook om tijdens sollicitaties mijn voorkeuren en vaardigheden duidelijk te communiceren."
              reflect="Het proces van het maken van deze lijst heeft me meer inzicht gegeven in wat ik belangrijk vind in een stage. Het reflecteert mijn interesses in Online Marketing en Sales en mijn behoefte aan een leerzame, ondersteunende omgeving. Ik heb realistische verwachtingen gesteld door rekening te houden met praktische zaken zoals locatie en begeleiding. Tegelijkertijd laat de lijst zien dat ik weet wat mijn sterke punten zijn en hoe ik deze kan inzetten in een professionele omgeving."
            />
            <StarrCard
              title="Reflectie 2: Stijl en Persoonlijke Branding"
              s="Ik heb onlangs besloten om mijn stijl te herzien en aan te passen. Hoewel ik tevreden was met mijn oude stijl, voelde ik de behoefte om updates toe te voegen en verbeteringen aan te brengen die beter aansluiten bij wie ik nu ben en wat ik wil uitstralen."
              t="De opdracht was om mijn stijl een upgrade te geven door de elementen die goed werkten te behouden, maar ook nieuwe toevoegingen en verbeteringen door te voeren. Dit proces vroeg om reflectie op wat ik belangrijk vind en wat ik wilde veranderen."
              a="Ik heb kritisch gekeken naar mijn oude stijl en besloten welke elementen behouden moesten blijven en welke vervangen of aangevuld konden worden. Ik heb geëvalueerd welke aspecten van mijn oude stijl goed bij me pasten en waarom. Updates geïdentificeerd die relevant en passend zijn voor mijn huidige situatie en doelen. Nieuwe ideeën en technieken geïmplementeerd om mijn stijl te vernieuwen en te verbeteren."
              r="Mijn vernieuwde stijl voelt frisser, moderner en meer in lijn met waar ik nu sta. Tegelijkertijd behoudt het de elementen van mijn oude stijl die ik krachtig en herkenbaar maak. Deze combinatie zorgt voor een verbeterde versie van mezelf, die zowel vertrouwd als vernieuwd aanvoelt."
              reflect="Het proces heeft me laten zien hoe belangrijk het is om te blijven groeien en mezelf aan te passen aan nieuwe omstandigheden. Door niet volledig afstand te nemen van mijn oude stijl, maar deze als fundament te gebruiken, heb ik een evenwicht gevonden tussen continuïteit en verandering. Dit heeft me geholpen om een stijl te ontwikkelen die zowel authentiek als vooruitstrevend is."
            />
            <StarrCard
              title="Reflectie 3: Omgaan met Tegenslag (Sollicitaties)"
              s="Ik bevond me in een uitdagende situatie waarin ik op zoek was naar een stageplaats. Ondanks dat ik duidelijke focuspunten had gedefinieerd en gericht op zoek ging, bleek het proces moeilijker dan verwacht. Twee bedrijven waar ik hoop op had gevestigd, hebben uiteindelijk niet geresulteerd in een stageplek."
              t="Mijn taak was om een geschikte stageplaats te vinden die aansluit bij mijn voorkeuren, doelen en focuspunten. Dit vereiste niet alleen het benaderen van bedrijven, maar ook het omgaan met afwijzingen en het blijven volhouden in mijn zoektocht."
              a="Ik heb gericht gezocht naar bedrijven die aansluiten bij mijn focus, zoals Online Marketing en Sales, dynamische werkomgevingen, en de regio Breda. Ik heb contact gelegd met twee bedrijven die een goede match leken. Ik heb mogelijk gesprekken gevoerd of een sollicitatieprocedure doorlopen bij deze bedrijven, maar ondanks mijn inspanningen zijn beide trajecten niet succesvol geëindigd."
              r="Hoewel ik hoop had op een positieve uitkomst, heeft het proces bij deze twee bedrijven geen stageplaats opgeleverd. Dit was teleurstellend, maar het heeft me ook waardevolle inzichten gegeven over het sollicitatieproces en wat bedrijven zoeken in een stagiair."
              reflect="Het proces heeft me laten zien dat het vinden van een stageplaats niet altijd een eenvoudig of lineair pad is, zelfs niet met een duidelijke focus en goed voorbereide aanpak. Volharding: Het proces kan frustrerend zijn, maar ik heb laten zien dat ik blijf zoeken en niet opgeef. Leren van afwijzingen: De ervaring bij deze twee bedrijven helpt me om mijn sollicitaties of aanpak verder te verfijnen. Houding: Het omgaan met teleurstelling vraagt om veerkracht, en het feit dat ik reflecteer op deze ervaring toont dat ik bereid ben om te blijven groeien. Nieuwe kansen: Afwijzingen openen de deur naar andere mogelijkheden die wellicht beter passen bij mijn wensen en doelen."
            />
            <StarrCard
              title="Reflectie 4: Vooruitblik"
              s="Uiteindelijk hoop ik een stageplaats te vinden."
              t=""
              a=""
              r=""
              reflect=""
            />
          </div>
        </section>

        {/* Footer Navigatie */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "space-between",
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(167,139,250,0.1)",
          }}
        >
          <a href="/jaar-2" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 2</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Naar Home →</a>
        </div>
      </article>
    </main>
  );
}