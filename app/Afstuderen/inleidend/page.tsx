import { Card, FooterNav, PageHeader } from "@/app/components/ContentBits";

export default function Inleidend() {
  return (
    <main>
      <article className="content-page">
        <PageHeader
          badge="Afstuderen — Inleidend"
          title="Inleidend"
          lead="Tijdens mijn afstudeerperiode wilde ik aan drie doelen werken die echt bij mij passen. Doelen waar ik mezelf in herken en waar ik ook enthousiast van word, omdat ze aansluiten bij wie ik ben, wat ik leuk vind en waar ik nog in wil groeien."
        />

        <Card last>
          <p className="intro-divider">
            Ik ben iemand die snel enthousiast raakt wanneer ik ergens veel over weet. Dan wil ik het liefst alles vertellen,
            omdat ik het onderwerp zelf interessant vind. Dat enthousiasme vind ik een mooie eigenschap, maar ik merk ook dat
            ik daardoor soms te veel vertel en de kern een beetje kwijtraak. Daarom wil ik beter leren presenteren. Ik wil
            leren om rustiger te spreken, mijn verhaal duidelijker op te bouwen en sterker over te brengen wat ik bedoel.
          </p>

          <p className="intro-divider">
            Daarnaast wil ik mij verder ontwikkelen op het gebied van gedragseconomie. Hiervoor heb ik The Subtle Art of Not
            Giving a Fuck en Volkomen onlogisch van Dan Ariely gelezen. Deze boeken hebben mij laten zien hoe irrationeel
            menselijk gedrag kan zijn en hoe emoties, verwachtingen en de manier waarop keuzes worden gepresenteerd invloed
            hebben op ons gedrag. Dit vind ik interessant omdat het direct aansluit bij consumentengedrag en marketing.
          </p>

          <p className="intro-divider">
            Mijn andere vakinhoudelijke doel gaat over AI-gedreven zoekgedrag. Binnen marketing verandert er veel en juist
            dat vind ik interessant, daarom heb ik het boek GEO: SEO in de tijd van AI gelezen. Mensen zoeken anders, lezen
            anders en verwachten sneller een duidelijk antwoord.
          </p>

          <p className="intro-divider">
            Met de PDCA-cyclus kan ik stap voor stap volgen wat goed gaat, wat beter kan en hoe ik mezelf hierin ontwikkel.
          </p>
        </Card>

        <FooterNav
          prev={["/Afstuderen/voorwoord", "Voorwoord"]}
          next={["/Afstuderen/professionele-profilering", "Professionele profilering"]}
        />
      </article>
    </main>
  );
}
