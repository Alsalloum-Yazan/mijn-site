import { Card, FooterNav, PageHeader } from "@/app/components/ContentBits";

export default function Voorwoord() {
  return (
    <main>
      <article className="content-page">
        <PageHeader
          badge="Afstuderen — Voorwoord"
          title="Voorwoord"
          lead="Voor u ligt mijn Persoonlijk Leiderschap document voor de opleiding Commerciële Economie aan Avans Hogeschool. Tijdens mijn afstudeerperiode bij AllSens in Breda heb ik niet alleen gewerkt aan mijn vakinhoudelijke ontwikkeling, maar ben ik ook bewuster gaan kijken naar wie ik ben als toekomstig commercieel econoom."
        />

        <Card last>
          <p className="intro-divider">
            Deze herkansing heeft mij de kans gegeven om opnieuw kritisch naar mijn werk en ontwikkeling te kijken. Ik heb
            feedback gebruikt om onderdelen aan te scherpen, meer diepgang aan te brengen en duidelijker te laten zien wat ik
            daadwerkelijk heb geleerd. Daarbij heb ik mij onder andere verdiept in presenteren, AI-gedreven zoekgedrag en
            gedragseconomie. Vooral mijn interesse in consumentengedrag en de FMCG-branche is hierin steeds duidelijker naar
            voren gekomen.
          </p>

          <p className="intro-divider">
            Ik wil mijn beoordelaars, Reinier Willers en Ben Embregts, bedanken voor hun feedback en de momenten waarop zij met
            mij hebben meegedacht. Ook wil ik Caroline Dudok en Hans Burgers van AllSens bedanken voor de begeleiding en de
            ruimte die ik heb gekregen om mij tijdens mijn afstudeerperiode verder te ontwikkelen.
          </p>

          <p className="intro-divider">
            Daarnaast wil ik mijn familie en vrienden bedanken voor hun steun en voor het meedenken en testen tijdens mijn
            leerproces. Deze feedback heeft mij geholpen om mijn werk vanuit een ander perspectief te bekijken.
          </p>

          <p className="intro-divider">
            Ik kijk terug op een periode waarin ik niet alles meteen goed deed, maar waarin ik vooral heb geleerd om kritisch
            naar mezelf te kijken, feedback serieus te nemen en opnieuw door te zetten. Dat neem ik mee in mijn verdere
            ontwikkeling en in de richting die ik na mijn opleiding op wil: een commerciële functie waarin ik veel met mensen
            werk, mij blijf verdiepen in consumentengedrag en mijn interesse in de FMCG-branche verder kan ontwikkelen.
          </p>

          <p className="intro-divider">
            Veel leesplezier,
            <br />
            Dian van Noort
          </p>
        </Card>

        <FooterNav next={["/Afstuderen/inleidend", "Inleidend"]} />
      </article>
    </main>
  );
}
