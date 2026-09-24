"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";
import { Card, FooterNav, PageHeader, Table, ZoomImage } from "@/app/components/ContentBits";

const vacatures = [
  {
    locatie: "Breda",
    bedrijf: "GoodLife Foods",
    functie: "Key Accountmanager Retail NL",
    opvalt: "Retail, FMCG, klantcontact en commerciële kansen.",
    url: "https://glfoods.wd502.myworkdayjobs.com/en-US/GLFC/job/Breda/Key-Accountmanager-Reail-NL_JR100088",
  },
  {
    locatie: "Breda",
    bedrijf: "Perfetti van Melle",
    functie: "Key Accountmanager Retail",
    opvalt: "Bekende A-merken en contact met Retail.",
    url: "https://jobs.perfettivanmelle.com/job/Breda-Key-Account-Manager-Retail-4815-HK/1426157533/",
  },
  {
    locatie: "Breda",
    bedrijf: "Cloetta",
    functie: "Accountmanager Out of Home",
    opvalt: "Relatiebeheer en commerciële kansen.",
    url: "https://nl.indeed.com/q-cloetta-vacatures.html?q=cloetta",
  },
  {
    locatie: "Roosendaal",
    bedrijf: "S&M Consultants",
    functie: "Internationaal Accountmanager FMCG",
    opvalt: "Contact met retailers en FMCG-merken.",
    url: "https://www.smconsultants.nl/vacatures/sem-sectoren/international-accountmanager-fmcg-roosendaal",
  },
  {
    locatie: "Geldrop",
    bedrijf: "Lotus Bakeries",
    functie: "Accountmanager Value Retail",
    opvalt: "Werken met retailers zoals Action en Kruidvat.",
    url: "https://www.lotusbakeriesjobs.com/nl/vacancies/netherlands/lotus/1424-accountmanager-value-retail",
  },
];

export default function Bijlagen() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <PageHeader badge="Aanvullende documenten" title="Bijlagen" lead="Onderstaand aanvullend de bijlagen op de platte tekst." />

        <Card title="Bewijslasten | Marktbewerkingsplan">
          <h3 className="h3-sub" id="mbp-actie-1">
            Actie 1: Arbeidsmarkt onderzoeken
          </h3>
          <Table
            head={["Locatie", "Bedrijf", "Functie", "Wat mij opvalt", "Link"]}
            rows={vacatures.map((v) => [
              v.locatie,
              v.bedrijf,
              v.functie,
              v.opvalt,
              <a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer" className="text-link">
                Vacature →
              </a>,
            ])}
          />
          <p className="intro-divider">Bij Cloetta: naar onder scrollen in de zoekresultaten.</p>

          <h3 className="h3-sub" id="mbp-actie-2">
            Actie 2: Een visuele pitch maken
          </h3>
          <ZoomImage src="/afstuderen/pl/mbp-visuele-pitch.webp" alt="Visuele pitch in de vorm van een supermarkt" setOpenImg={setOpenImg} />

          <h3 className="h3-sub" id="mbp-actie-3">
            Actie 3: Gericht solliciteren op een accountmanager functie
          </h3>
          <ZoomImage src="/afstuderen/pl/mbp-spa-1.webp" alt="Bewijs gesprek met SPA" setOpenImg={setOpenImg} />
          <ZoomImage src="/afstuderen/pl/mbp-spa-2.webp" alt="Toegevoegd aan de talentenpool van SPA" setOpenImg={setOpenImg} />

          <h3 className="h3-sub" id="mbp-actie-4">
            Actie 4: Netwerken
          </h3>
          <p className="intro-divider">
            Wanneer ik bedrijven tegenkom die actief zijn binnen deze branche en aansluiten bij mijn interesses, volg ik deze
            om mijn netwerk en kennis van de sector verder uit te breiden.
          </p>
          <div className="test-image-grid">
            {[1, 2, 3, 4].map((n) => (
              <ZoomImage
                key={n}
                src={`/afstuderen/pl/mbp-netwerken-${n}.webp`}
                alt={`Gevolgd bedrijf op LinkedIn ${n}`}
                setOpenImg={setOpenImg}
              />
            ))}
          </div>
        </Card>

        <Card title="Vakinhoudelijk doel: GEO">
          <h3 className="h3-sub" id="geo-boek">
            Bewijslast samenvatting van het boek
          </h3>
          <p className="intro-divider">
            Door het lezen van GEO: SEO in de tijd van AI kreeg ik een beter beeld van hoe groot de verandering in zoekgedrag
            eigenlijk is. Waar ik bij SEO vooral dacht aan zoekwoorden, Google en zo hoog mogelijk in de zoekresultaten komen,
            gaat het bij GEO veel meer om de manier waarop AI informatie selecteert en gebruikt om een antwoord te geven.
            Mensen stellen hun vragen steeds vaker direct aan bijvoorbeeld ChatGPT, waardoor het niet meer alleen belangrijk
            is om gevonden te worden, maar ook om door AI meegenomen te worden in het antwoord.
          </p>
          <p className="intro-divider">
            Wat ik interessant vond aan het boek, is dat goede content hierbij nog steeds de basis is, maar dat je op een
            andere manier naar die content moet kijken. Een tekst moet niet alleen goed geschreven zijn, maar vooral duidelijk,
            relevant en makkelijk te begrijpen zijn. Zo helpt het om direct antwoord te geven op een vraag, een duidelijke
            structuur met tussenkoppen te gebruiken en informatie goed te onderbouwen. Ook betrouwbaarheid en expertise spelen
            een belangrijke rol. AI moet als het ware snel kunnen herkennen wat de belangrijkste informatie uit een tekst is
            en of deze informatie betrouwbaar genoeg is om mee te nemen.
          </p>
          <p className="intro-divider">
            Het boek liet mij daardoor ook anders kijken naar mijn eigen manier van schrijven. Ik merkte dat ik voorheen
            sneller geneigd was om eerst veel informatie uit te leggen en pas later tot het antwoord te komen. Vanuit GEO is
            het juist belangrijk om de kern sneller duidelijk te maken en een tekst op te bouwen rondom de vragen en behoeften
            van de gebruiker. Deze inzichten heb ik meegenomen in mijn verdere onderzoek en gebruikt als basis voor de vijf
            principes waarop ik mijn eigen GEO-analysetool heb gebouwd.
          </p>
        </Card>

        <Card title="Vakinhoudelijk doel: Gedragseconomie" last>
          <h3 className="h3-sub" id="boek-notities">
            Boek notities
          </h3>
          <p className="intro-divider">
            Tijdens het lezen van de twee boeken heb ik korte notities gemaakt van dingen die mij opvielen. Ik heb niet
            geprobeerd om alles uit de boeken samen te vatten, maar vooral dingen opgeschreven waarvan ik dacht: dit herken ik
            bij mezelf of dit is interessant voor marketing. Mijn belangrijkste notities waren:
          </p>

          <h3 className="h3-sub">Volkomen onlogisch – Dan Ariely</h3>
          <ul className="content-list">
            <li>Mensen maken lang niet altijd rationele keuzes, ook al denken we vaak van wel.</li>
            <li>We vergelijken dingen met elkaar in plaats van dat we iets op zichzelf beoordelen.</li>
            <li>Een eerste prijs kan als referentiepunt blijven hangen = ankereffect.</li>
            <li>De manier waarop iets wordt gepresenteerd kan invloed hebben op mijn keuze = inkadering.</li>
            <li>
              Als een optie al voor mij is aangevinkt of geselecteerd, is de kans groter dat ik die gewoon laat staan =
              standaardeffect.
            </li>
            <li>
              Ik kan iets wat ik nu kan krijgen aantrekkelijker vinden dan iets wat ik later krijg, ook als dat latere voordeel
              groter is = voorkeur voor het heden.
            </li>
            <li>Iets verliezen voelt vaak vervelender dan iets winnen leuk voelt = verliesaversie.</li>
            <li>
              Mensen bedenken achteraf vaak een logische verklaring voor een keuze, terwijl ze op het moment zelf door andere
              dingen zijn beïnvloed.
            </li>
            <li>Dit vond ik vooral interessant omdat je dit heel makkelijk terugziet in aanbiedingen, prijzen en webshops.</li>
          </ul>

          <h3 className="h3-sub">De edele kunst van not giving a fuck – Mark Manson</h3>
          <ul className="content-list">
            <li>Niet alles verdient mijn aandacht of energie.</li>
            <li>Ik heb meer invloed op hoe ik met een situatie omga dan op de situatie zelf.</li>
            <li>Verwachtingen hebben veel invloed op hoe ik iets ervaar.</li>
            <li>Ik maak soms iets belangrijker dan het eigenlijk is doordat ik er zelf zoveel waarde aan geef.</li>
            <li>Ik moet bewuster kiezen waar ik mijn tijd en aandacht aan besteed.</li>
            <li>Niet iedere keuze hoeft perfect te zijn. Het gaat er vooral om welke keuzes voor mij belangrijk zijn.</li>
            <li>
              Ik vond de link met gedragseconomie vooral interessant bij het onderwerp keuzes maken: waarom geef ik aandacht
              aan bepaalde dingen en waarom laat ik andere dingen los?
            </li>
            <li>
              Het boek is niet specifiek geschreven over gedragseconomie, maar heeft mij wel geholpen om meer na te denken over
              mijn eigen keuzes, verwachtingen en gedrag.
            </li>
          </ul>

          <h3 className="h3-sub">Wat ik uit beide boeken heb gehaald</h3>
          <p className="intro-divider">
            Door beide boeken naast elkaar te lezen, merkte ik dat ik gedrag steeds meer vanuit verschillende kanten ging
            bekijken. Volkomen onlogisch gaf mij vooral de theoretische kant van waarom mensen irrationele keuzes maken. De
            edele kunst van not giving a fuck zette mij meer aan het denken over mijn eigen keuzes, aandacht en verwachtingen.
          </p>
          <p className="intro-divider">
            Mijn belangrijkste inzicht was eigenlijk dat ik mezelf ook vaak als een rationeel persoon zie, terwijl mijn keuzes
            helemaal niet altijd zo rationeel tot stand komen. Een korting, een eerste prijs, gemak of het gevoel dat ik iets
            misloop kan al invloed hebben op wat ik uiteindelijk doe. Dat vond ik interessant om vervolgens bij mijn eigen
            gedrag en bij marketing te gaan herkennen.
          </p>
        </Card>

        <FooterNav prev={["/Afstuderen/literatuurlijst", "Literatuurlijst"]} />
      </article>
    </main>
  );
}
