import { Card, FooterNav, PageHeader } from "@/app/components/ContentBits";

function Bewijslast({ children, anchor }: { children: React.ReactNode; anchor: string }) {
  return (
    <p className="intro-divider">
      <strong>Bewijslast:</strong> {children}, zie{" "}
      <a href={`/Afstuderen/bijlagen#${anchor}`} className="text-link">
        bijlagen Marktbewerkingsplan
      </a>
      .
    </p>
  );
}

export default function Marktbewerkingsplan() {
  return (
    <main>
      <article className="content-page">
        <PageHeader
          badge="Afstuderen — Marktbewerkingsplan"
          title="Marktbewerkingsplan"
          lead="Voor mijn marktbewerkingsplan richt ik mij op het vinden van een functie als accountmanager. Vooral functies binnen de Retail en FMCG spreken mij aan, omdat ik het leuk vind om veel persoonlijk contact te hebben en niet de hele dag achter een bureau te zitten."
        />

        <Card>
          <p className="intro-divider">
            Het werken met supermarkten spreekt mij hierin extra aan. Ik vind het contact met supermarktmedewerkers prettig
            omdat het vaak informeel en direct is. Daarnaast vind ik het interessant om te werken met producten die al bekend
            zijn bij consumenten. Een voorbeeld hiervan is SPA. Het merk heeft al een goede naam en de producten worden veel
            verkocht. Hierdoor lijkt het mij interessant om als accountmanager te kijken hoe je ervoor zorgt dat een product
            goed wordt gepresenteerd en zichtbaar blijft in de winkel.
          </p>

          <p className="intro-divider">
            De afgelopen periode ben ik mij daarnaast steeds meer gaan verdiepen in gedragseconomie. Door hierover te lezen
            ben ik anders gaan kijken naar de keuzes die mensen maken. Ik vind het vooral interessant dat mensen niet altijd
            bewust of rationeel handelen. Dit zie ik bijvoorbeeld terug in supermarkten. De plek van een product in een schap,
            de indeling van een winkel en de manier waarop producten worden gepresenteerd kunnen invloed hebben op wat iemand
            kiest. Juist dit maakt de supermarkt voor mij interessant vanuit zowel commercieel als menselijk oogpunt (Centraal
            bureau levensmiddelenhandel, 2025).
          </p>
        </Card>

        <Card title="Mijn doelgroep">
          <p className="intro-divider">
            Mijn doelgroep bestaat uit bedrijven die accountmanagers zoeken binnen de Retail en FMCG. Ik richt mij vooral op
            functies waarbij ik contact heb met supermarkten en andere winkels. Ik zoek een functie waarin ik zelfstandig op
            pad kan, verschillende mensen spreek en bezig ben met zowel commercie als klantcontact.
          </p>

          <p className="intro-divider">
            SPA is voor mij een goed voorbeeld van het soort organisatie waar ik zou willen werken. Daarom heb ik ook
            daadwerkelijk gesolliciteerd op een accountmanager functie bij SPA. De functie sprak mij aan vanwege het contact
            met supermarkten, het werken met een bekend product en de combinatie van onderweg zijn, klantcontact en commercie.
          </p>
        </Card>

        <Card title="Mijn toegevoegde waarde">
          <p className="intro-divider">
            Mijn toegevoegde waarde ligt vooral in mijn sociale en enthousiaste houding. Ik maak makkelijk contact en vind het
            leuk om met verschillende mensen te werken. Daarnaast ben ik nieuwsgierig naar het gedrag van consumenten. Die
            combinatie van persoonlijk contact, commercie en mijn interesse in gedragseconomie past goed bij de accountmanager
            functie die ik zoek.
          </p>
        </Card>

        <Card title="1.1 Mijn acties">
          <ol className="content-list">
            <li>Arbeidsmarkt onderzoeken.</li>
            <li>Een visuele pitch maken.</li>
            <li>Gericht solliciteren op een accountmanager functie.</li>
            <li>Netwerken.</li>
          </ol>

          <p className="intro-divider">
            Met mijn marktbewerkingsplan wil ik duidelijk maken welk soort werk ik zoek en hier ook daadwerkelijk stappen voor
            zetten. Ik wil na mijn opleiding aan de slag als accountmanager, bij voorkeur in een omgeving waarin ik veel
            persoonlijk contact heb en waarin ik kan zien wat er in de praktijk gebeurt.
          </p>

          <p className="intro-divider">
            Mijn interesse in supermarkten, commercie en gedragseconomie komt hierin samen. De sollicitatie bij SPA is hierin
            een concrete eerste stap richting het soort werk dat bij mij past.
          </p>
        </Card>

        <Card title="1.2 Uitvoering acties" last>
          <h3 className="h3-sub">1. Arbeidsmarkt onderzoeken</h3>
          <p className="intro-divider">
            Om te kijken welke functies bij mij passen, heb ik vijf vacatures voor accountmanager bekeken in Breda en
            Noord-Brabant. Ik heb hierbij vooral gekeken naar functies binnen Retail en FMCG. Uit de vacatures zie ik dat
            relatiebeheer, commercie en klantcontact steeds terugkomen. Daarnaast wordt er regelmatig gevraagd om
            marktontwikkelingen en verkoopcijfers te kunnen analyseren en commerciële kansen te herkennen. Wat mij vooral
            opvalt, is dat de functies goed aansluiten bij wat ik zoek. Door deze vacatures naast elkaar te leggen, heb ik een
            duidelijker beeld gekregen van wat ik zoek in mijn eerste functie na mijn opleiding.
          </p>
          <Bewijslast anchor="mbp-actie-1">geselecteerde vacatures en mijn aantekeningen hierbij</Bewijslast>

          <h3 className="h3-sub">2. Een visuele pitch maken</h3>
          <p className="intro-divider">
            Om mezelf op een creatieve manier te presenteren aan potentiële werkgevers, heb ik een visuele pitch gemaakt in de
            vorm van een supermarkt. Ik heb mijn kwaliteiten verwerkt als verschillende onderdelen van de winkel, zoals
            zelfstandigheid bij de zelfscan, sociaal contact bij het servicepunt en mijn nieuwsgierigheid naar
            consumentengedrag bij de schappen.
          </p>
          <p className="intro-divider">
            Op deze manier laat ik op een andere manier zien wie ik ben, waar ik goed in ben en waarom retail en FMCG bij mij
            passen. Deze pitch kan ik gebruiken als richtlijn bij toekomstige sollicitaties.
          </p>
          <Bewijslast anchor="mbp-actie-2">de visuele pitch</Bewijslast>

          <h3 className="h3-sub">3. Gericht solliciteren op accountmanager functies</h3>
          <p className="intro-divider">
            Een concrete stap die ik heb gezet, is mijn sollicitatie op de accountmanager functie bij SPA. Deze functie sluit
            goed aan bij het soort werk dat ik na mijn opleiding wil doen. In mijn sollicitatie heb ik toegelicht waarom de
            functie bij mij past en wat mij aanspreekt in het werken met supermarkten.
          </p>
          <p className="intro-divider">
            Ik wil deze aanpak blijven gebruiken door gericht te zoeken naar vergelijkbare accountmanager functies binnen
            Retail en FMCG, in plaats van mij breed op allerlei marketingfuncties te richten.
          </p>
          <Bewijslast anchor="mbp-actie-3">
            screenshot bewijs gesprek met SPA, toegevoegd aan talentenpool vanwege het feit niet per direct beschikbaar te zijn
          </Bewijslast>

          <h3 className="h3-sub">4. Netwerken</h3>
          <p className="intro-divider">
            Omdat ik op dit moment niet per direct beschikbaar ben, merkte ik bij mijn sollicitatie bij SPA dat het nog
            lastig is om actief verder te solliciteren. Ik ben daarom in deze periode op een andere manier bezig gebleven met
            mijn toekomstige loopbaan, namelijk door te netwerken. Ik heb mijn LinkedIn-netwerk uitgebreid met bedrijven die
            actief zijn binnen Retail en FMCG. Hierbij heb ik gekeken naar organisaties die aansluiten bij de omgeving en
            richting waarin ik na mijn opleiding wil werken.
          </p>
          <Bewijslast anchor="mbp-actie-4">screenshots van bedrijven die ik ben gaan volgen</Bewijslast>
        </Card>

        <FooterNav
          prev={["/Afstuderen/professionele-profilering", "Professionele profilering"]}
          next={["/Afstuderen/Profileringskit", "Profileringskit"]}
        />
      </article>
    </main>
  );
}
