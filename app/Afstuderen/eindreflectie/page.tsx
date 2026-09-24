import { Card, FooterNav, PageHeader } from "@/app/components/ContentBits";

export default function Eindreflectie() {
  return (
    <main>
      <article className="content-page">
        <PageHeader badge="Persoonlijke & professionele ontwikkeling" title="Eindreflectie | STARR" />

        <Card title="Situatie">
          <p className="intro-divider">
            Tijdens mijn afstudeerperiode bij AllSens heb ik gewerkt aan mijn persoonlijke en professionele ontwikkeling als
            commercieel econoom. Na drie jaar MBO en daarna vier jaar HBO (waarvan 2 jaar het AD) merk ik dat ik steeds beter
            weet welke richting bij mij past. In mijn opleiding heb ik verschillende kanten van marketing ontdekt. Ik krijg
            minder energie van koude acquisitie en socialmediacontent. Ik word juist enthousiast van marketing waarin gedrag,
            beleving, communicatie en de behoefte van de consument samenkomen.
          </p>
          <p className="intro-divider">
            Bij AllSens merkte ik dit opnieuw. Geurmarketing liet mij zien dat marketing niet altijd zichtbaar hoeft te zijn.
            Sfeer, beleving en de omgeving kunnen ook invloed hebben op hoe iemand iets ervaart. Dit heeft mijn interesse in
            neuromarketing, gedragseconomie en klantbeleving verder versterkt.
          </p>
        </Card>

        <Card title="Taak">
          <p className="intro-divider">
            Mijn doel tijdens deze periode was niet alleen om mijn opleiding af te ronden, maar ook om mezelf verder te
            ontwikkelen en beter te ontdekken waar mijn interesses liggen. Daarom heb ik gewerkt aan drie leerdoelen: mijn
            presentatievaardigheden verbeteren, mij verdiepen in AI-gedreven zoekgedrag en GEO en mij verdiepen in
            gedragseconomie.
          </p>
          <p className="intro-divider">
            Ik wilde daarnaast beter leren omgaan met een eigenschap die zowel een kracht als een valkuil is: mijn
            enthousiasme. Wanneer iets mij interesseert, wil ik mij er graag volledig in verdiepen en veel vertellen. Ik wilde
            leren om daarin meer keuzes te maken en mijn boodschap sterker neer te zetten.
          </p>
        </Card>

        <Card title="Actie">
          <p className="intro-divider">
            Voor mijn presentatievaardigheden heb ik meerdere presentaties voorbereid en uitgevoerd en feedback gevraagd. Ik
            kreeg terug dat mijn inhoud sterk was, maar dat ik soms te snel sprak en te veel informatie wilde geven. Vooral
            tijdens de voorbereiding op mijn podiummoment merkte ik dat spanning invloed had op mijn presentatie. Hierdoor
            leerde ik dat een goede voorbereiding niet alleen betekent dat ik mijn verhaal ken, maar ook dat ik durf te
            vertrouwen op wat ik al weet en informatie durf weg te laten.
          </p>
          <p className="intro-divider">
            Voor GEO heb ik mij verdiept in AI-gedreven zoekgedrag. Naast online bronnen heb ik een boek over GEO gelezen en de
            kennis toegepast door marketingteksten te analyseren en te verbeteren. Hierdoor ben ik bewuster gaan kijken naar
            zoekintentie, duidelijkheid en relevantie van content.
          </p>
          <p className="intro-divider">
            Gedragseconomie heb ik als nieuw onderdeel aan mijn ontwikkeling toegevoegd. Ik heb mij verdiept in onder andere
            het ankereffect, framing, het standaardoptie-effect en verliesaversie en dit onderzocht met eigen experimenten.
            Hierdoor ben ik marketing meer vanuit het gedrag van de consument gaan bekijken. Ik vond het vooral interessant om
            te ontdekken hoe bijvoorbeeld een prijs of formulering invloed kan hebben op een keuze.
          </p>
        </Card>

        <Card title="Resultaat">
          <p className="intro-divider">
            Ik heb vooral meer inzicht gekregen in de manier waarop ik mezelf als marketingprofessional wil ontwikkelen. Bij
            presenteren weet ik beter hoe ik mijn enthousiasme kan inzetten zonder mijn verhaal te overladen. Door GEO heb ik
            mijn kennis over een actuele ontwikkeling binnen marketing uitgebreid. Met gedragseconomie heb ik ontdekt dat
            consumentengedrag een onderwerp is waar ik mij verder in wil verdiepen.
          </p>
          <p className="intro-divider">
            Dat sluit ook aan bij mijn interesse in de FMCG-branche. Ik vind het interessant dat consumenten dagelijks keuzes
            maken tussen merken en producten en dat factoren zoals prijs, communicatie, presentatie en beleving daarbij een rol
            kunnen spelen. Dit is een richting waarin ik mijn commerciële interesse en mijn interesse in consumentengedrag goed
            kan combineren.
          </p>
        </Card>

        <Card title="Reflectie" last>
          <p className="intro-divider">
            Als ik terugkijk op mijn opleiding, ben ik vooral trots op de ontwikkeling die ik heb doorgemaakt. Toen ik vanuit
            het MBO naar het HBO ging, wist ik nog niet precies welke richting ik op wilde. Inmiddels weet ik veel beter wat
            bij mij past en waar ik energie van krijg.
          </p>
          <p className="intro-divider">
            Mijn grootste leerpunt blijft dat ik mijn enthousiasme beter moet doseren. Ik hoef niet alles te vertellen om te
            laten zien dat ik ergens enthousiast over ben. Door eerder de kern te bepalen, kan ik mijn verhaal duidelijker en
            sterker maken.
          </p>
          <p className="intro-divider">
            Mijn afstudeerperiode was niet altijd makkelijk en ik heb mij niet altijd gehoord of gezien gevoeld. Toch ben ik
            blijven doorgaan en heb ik geprobeerd om te kijken naar wat ik zelf kon verbeteren. Daar ben ik trots op.
          </p>
          <p className="intro-divider">
            Na drie jaar MBO en vier jaar HBO voelt dit als een afsluiting, maar ook als het begin van een richting die steeds
            duidelijker wordt. Ik wil mij verder ontwikkelen binnen marketing, met een sterke interesse in consumentengedrag,
            beleving en FMCG. Ik weet nog niet precies waar ik uiteindelijk terechtkom, maar ik weet inmiddels wel beter waar
            ik naar op zoek ben: werk waarin ik commercieel kan denken, met mensen en merken bezig ben en mijn nieuwsgierigheid
            kwijt kan.
          </p>
        </Card>

        <FooterNav
          prev={["/Afstuderen/vakdoel-gedragseconomie", "Vakdoel: Gedragseconomie"]}
          next={["/Afstuderen/ai-protocol", "AI-protocol"]}
        />
      </article>
    </main>
  );
}
