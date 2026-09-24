import { Card, FooterNav, PageHeader } from "@/app/components/ContentBits";

export default function ProfessioneleProfilering() {
  return (
    <main>
      <article className="content-page">
        <PageHeader
          badge="Persoonlijke en professionele profilering"
          title="Professionele profilering"
          lead="In dit hoofdstuk beschrijf ik hoe ik mezelf zie als toekomstig commercieel econoom en welke kwaliteiten ik wil inzetten binnen mijn werk. Daarbij kijk ik naar mijn persoonlijke eigenschappen, mijn professionele ontwikkeling, ontvangen feedback en de toegevoegde waarde die ik kan bieden aan de doelgroep waarmee ik werk."
        />

        <Card title="Gewenste profilering" last>
          <p className="intro-divider">
            Mijn gewenste profilering als commercieel econoom is die van iemand die graag met mensen werkt, nieuwsgierig is en
            open kijkt naar de toekomst. Ik vind het belangrijk om echt contact te maken met anderen. Niet alleen via een mail
            of bericht, maar juist ook in een persoonlijk gesprek. Dit past goed bij de richting waarin ik mij wil
            ontwikkelen, namelijk een accountmanager functie binnen de FMCG-branche, waar contact met klanten, retailers en
            collega&apos;s samenkomt met marketing en commercie.
          </p>

          <p className="intro-divider">
            Dat ik makkelijk contact maak en graag met anderen werk, herken ik ook in de verschillende testen die ik tijdens
            mijn opleiding heb gedaan. Uit de MBTI-, DISC- en Enneagram-test kwam naar voren dat ik sociaal, gevoelsgericht en
            enthousiast ben. De IXLY-test liet daarnaast zien dat communiceren en flexibiliteit goed bij mij passen. In de
            afgelopen jaren merkte ik dat deze eigenschappen nog steeds bij mij passen, maar dat ik ook directer en
            zelfverzekerder ben geworden. Ik denk dat dit goed aansluit bij een commerciële functie waarin je veel met
            verschillende mensen samenwerkt en waarin je snel moet kunnen schakelen.
          </p>

          <p className="intro-divider">
            Tegelijkertijd ben ik steeds nieuwsgieriger geworden naar wat er achter het gedrag van mensen zit. In jaar 2 heb
            ik door NLP, de ijsberg en zintuiglijk waarnemen bewuster leren kijken naar gedrag en keuzes. Hierdoor is mijn
            interesse in neuromarketing ontstaan. Ik vind het interessant om niet alleen te kijken naar wat iemand doet, maar
            juist ook naar waarom iemand bepaalde keuzes maakt. Dit vind ik juist binnen FMCG interessant, omdat consumenten
            dagelijks keuzes maken tussen verschillende producten, merken en aanbiedingen. Hier wil ik mij de komende tijd
            verder in verdiepen.
          </p>

          <p className="intro-divider">
            Mijn kracht ligt vooral op het sociale en spontane vlak. Ik maak makkelijk contact, toon interesse in anderen en
            vind het leuk om gesprekken aan te gaan. Tegelijkertijd weet ik dat hier ook een valkuil zit. Soms wil ik te veel
            informatie geven of te veel details meenemen, waardoor mijn verhaal minder duidelijk kan worden. Hier wil ik de
            komende tijd bewuster mee omgaan, door beter te filteren wat belangrijk is voor de ander. Zeker in een
            commerciële functie lijkt het mij belangrijk om goed te luisteren en mijn communicatie aan te passen aan de
            persoon tegenover mij.
          </p>

          <p className="intro-divider">
            Zo wil ik uitgroeien tot een marketingprofessional binnen de FMCG die commercieel denkt, makkelijk contact maakt
            en nieuwsgierig blijft naar het gedrag van mensen. Iemand die niet alleen kijkt naar wat iemand doet, maar vooral
            probeert te begrijpen waarom iemand bepaalde keuzes maakt.
          </p>
        </Card>

        <FooterNav
          prev={["/Afstuderen/inleidend", "Inleidend"]}
          next={["/Afstuderen/marktbewerkingsplan", "Marktbewerkingsplan"]}
        />
      </article>
    </main>
  );
}
