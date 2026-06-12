"use client";
import Link from "next/link";

import React, { useState } from 'react';

function StarrCard({ title, s, t, a, r, reflect }: { title: string, s: string, t: string, a: string, r: string, reflect: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glow-card starr-card" onClick={() => setIsOpen(!isOpen)}>
      <div className="starr-card-header">
        <h3 className="starr-card-title">{title}</h3>
        <span className="starr-card-toggle">{isOpen ? '−' : '+'}</span>
      </div>

      {isOpen && (
        <div className="starr-card-body">
          <div className="starr-card-grid">
            <p className="starr-card-p"><strong className="starr-strong-accent">Situatie:</strong> <span className="starr-span-muted">{s}</span></p>
            <p className="starr-card-p"><strong className="starr-strong-accent">Taak:</strong> <span className="starr-span-muted">{t}</span></p>
            <p className="starr-card-p"><strong className="starr-strong-accent">Actie:</strong> <span className="starr-span-muted">{a}</span></p>
            <p className="starr-card-p"><strong className="starr-strong-accent">Resultaat:</strong> <span className="starr-span-muted">{r}</span></p>
            <p className="starr-reflect">
              <strong className="strong-white">Reflectie:</strong> <br />
              <span className="span-light">{reflect}</span>
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
          <a href="/jaar-2" className="post-back-link">← Terug naar Jaar 2</a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Zelfreflectie
          </div>
          <h1 className="post-h1">
            Mijn <span className="g-text">Reflecties</span>
          </h1>
          <p className="p-intro-light">
            Hier reflecteer ik op de afgelopen periode. Kijkend naar wat goed gaat en waar voor mij op persoonlijk vlak nog verbeteringen liggen.
          </p>
          <div className="divider divider-mb48" />
        </div>

        {/* Sectie: Doel 1 */}
        <section className="reveal mb80">
          <h2 className="h2-section-accent">Doel 1: Vergroten van Assertiviteit</h2>
          <div className="grid-gap24">
            <StarrCard
              title="Reflectie 1: Assertief gedrag en passiviteit"
              s={`Ik heb moeite om assertief te zijn en neig naar passief gedrag. Dit blijkt bijvoorbeeld uit situaties waarin ik confrontaties vermijd, moeite heb met "nee" zeggen, onzeker ben over mijn eigen behoeftes en impulsief "ja" zeg ten koste van mezelf. Deze passieve houding komt voor in groepsprojecten, sociale afspraken en keuzes in mijn leven.`}
              t={`Mijn doel is om te groeien in assertiviteit, zodat ik mijn eigen mening en behoeftes durf te uiten op een respectvolle en zelfverzekerde manier.`}
              a={`Meningen delen: Ik wil leren om mijn mening te delen, bijvoorbeeld door gebruik te maken van de ik-vorm. Confrontaties oefenen: Ik wil niet meer automatisch meegaan met andermans ideeën. Grenzen stellen: Ik wil bewuster "nee" leren zeggen.`}
              r={`Ik heb enkele kleine successen geboekt, zoals het feit dat ik eerst "nee" durfde te zeggen tegen een sociale afspraak. Ik ben me bewust geworden van de patronen die ik wil doorbreken.`}
              reflect={`Uit mijn reflectie blijkt dat ik begrijp waarom ik nu in een passieve rol zit. Ik wil mezelf op een positieve manier ontwikkelen door assertiever te worden, zonder de gevoelens van anderen uit het oog te verliezen.`}
            />
            <StarrCard
              title="Reflectie 2: De Assertiviteitstest"
              s="Voorafgaand aan het maken van de assertiviteitstest, verwachtte ik dat de uitkomst allesbehalve positief zou zijn."
              t="Mijn doel was om via de assertiviteitstest meer inzicht te krijgen in hoe assertief ik daadwerkelijk ben."
              a="Ik heb de assertiviteitstest van Kwadraad gemaakt en beantwoordde de vragen eerlijk en zorgvuldig."
              r="De test liet zien dat ik over het algemeen assertief ben."
              reflect="Het resultaat van de test was verrassend positief voor mij. Het heeft me laten zien dat ik sterker ben in assertief gedrag dan ik aanvankelijk dacht."
            />
            <StarrCard
              title="Reflectie 3: Contextafhankelijke Assertiviteit"
              s="Ik heb gemerkt dat mijn assertiviteit afhankelijk is van de context. In een veilige omgeving voel ik me vrij om mijn grenzen aan te geven."
              t="Ik wilde inzicht krijgen in hoe mijn assertiviteit zich manifesteert in verschillende situaties."
              a="Ik heb nagedacht over mijn ervaringen en situaties geanalyseerd. Ik overweeg ook een assertiviteitscursus te volgen."
              r="Ik realiseer me dat ik assertief kan zijn wanneer ik me op mijn gemak voel."
              reflect="Assertiviteit is een vaardigheid die ik al bezit, maar die ik verder kan versterken door meer bewustzijn en oefening."
            />
            <StarrCard
              title="Reflectie 4: Praktijktoepassingen"
              s="In de afgelopen maanden heb ik verschillende situaties meegemaakt waarin ik mijn assertiviteit kon toepassen."
              t="In al deze situaties was mijn taak om mijn assertiviteit te gebruiken om mijn behoeften, meningen of grenzen kenbaar te maken."
              a="In de supermarkt heb ik beleefd aangegeven dat iemand niet voor mocht dringen. Op werk heb ik duidelijk gemaakt dat ik geen ruimte had. Bij vrienden heb ik mijn eigen comfort vooropgesteld."
              r="In al deze situaties kon ik mezelf op een respectvolle en effectieve manier uitdrukken."
              reflect="De reflectie laat zien dat ik grote vooruitgang heb geboekt in mijn assertiviteit. Ik heb geleerd om mijn behoeften en grenzen te communiceren zonder onbeleefd te zijn."
            />
          </div>
        </section>

        {/* Sectie: Doel 2 */}
        <section className="reveal mb80">
          <h2 className="h2-section-accent">Doel 2: Stage en Profilering</h2>
          <div className="grid-gap24">
            <StarrCard
              title="Reflectie 1: Criteria Stageplek"
              s="Ik stond voor de taak om een lijst samen te stellen van criteria waaraan een stageplek moet voldoen."
              t="Mijn doel was om een lijst op te stellen die me helpt te focussen op het vinden van een stageplek die aansluit bij mijn leerdoelen."
              a="Ik heb mijn eigen interesses, ambities en praktische wensen geïnventariseerd en criteria geformuleerd rondom stagefocus, regio, werkzaamheden en voorkeurseisen."
              r="De lijst is helder en concreet geworden, waardoor ik een duidelijk beeld heb van de stageplek die het beste bij me past."
              reflect="Het proces heeft me meer inzicht gegeven in wat ik belangrijk vind in een stage. Ik heb realistische verwachtingen gesteld."
            />
            <StarrCard
              title="Reflectie 2: Stijl en Persoonlijke Branding"
              s="Ik heb onlangs besloten om mijn stijl te herzien en aan te passen."
              t="De opdracht was om mijn stijl een upgrade te geven door de elementen die goed werkten te behouden."
              a="Ik heb kritisch gekeken naar mijn oude stijl en besloten welke elementen behouden moesten blijven en welke vervangen konden worden."
              r="Mijn vernieuwde stijl voelt frisser, moderner en meer in lijn met waar ik nu sta."
              reflect="Het proces heeft me laten zien hoe belangrijk het is om te blijven groeien en mezelf aan te passen aan nieuwe omstandigheden."
            />
            <StarrCard
              title="Reflectie 3: Omgaan met Tegenslag (Sollicitaties)"
              s="Ik bevond me in een uitdagende situatie waarin ik op zoek was naar een stageplaats. Twee bedrijven hebben uiteindelijk niet geresulteerd in een stageplek."
              t="Mijn taak was om een geschikte stageplaats te vinden en om te gaan met afwijzingen."
              a="Ik heb gericht gezocht naar bedrijven die aansluiten bij mijn focus en contact gelegd met twee veelbelovende bedrijven."
              r="Hoewel ik hoop had op een positieve uitkomst, heeft het proces bij deze twee bedrijven geen stageplaats opgeleverd."
              reflect="Volharding, leren van afwijzingen en veerkracht zijn essentieel. Afwijzingen openen de deur naar andere mogelijkheden."
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
        <div className="footer-nav-mt64">
          <a href="/jaar-2" className="btn-ghost btn-sm">← Terug naar Jaar 2</a>
          <Link href="/" className="btn btn-sm">Naar Home →</Link>
        </div>
      </article>
    </main>
  );
}

