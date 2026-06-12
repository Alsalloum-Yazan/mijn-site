"use client";
import Link from "next/link";

const SectionDivider = ({ label }: { label: string }) => (
  <div className="section-divider">
    <div className="section-divider-line-l-bright" />
    <span className="section-divider-label-simple">{label}</span>
    <div className="section-divider-line-r-bright" />
  </div>
);

const VingerCard = ({ emoji, titel, kleur, tekst }: { emoji: string; titel: string; kleur: string; tekst: string }) => (
  <div className="glow-card card-hover vinger-card">
    <div className="vinger-card-bar" style={{ background: kleur }} />
    <div className="vinger-card-inner">
      <div className="vinger-card-header">
        <span className="vinger-card-emoji">{emoji}</span>
        <h3 className="vinger-card-title">{titel}</h3>
      </div>
      <p className="vinger-card-text">{tekst}</p>
    </div>
  </div>
);

export default function EindreflectiePage() {
  return (
    <main>
      <article className="content-page">

        <div className="reveal">
          <a href="/jaar-4" className="j4-back-link-accent">← Terug naar Jaar 4</a>
          <div className="badge j4-badge-mb24">
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 className="j4-h1">
            Mijn <span className="g-text">eindreflectie</span>
          </h1>
          <div className="divider j4-divider-mb40" />
        </div>

        <div className="reveal reveal-mb72" style={{ transitionDelay: "60ms" }}>
          <SectionDivider label="De vijf vingers" />
          <div className="vinger-grid">

            <VingerCard
              emoji="👍"
              titel="Duim – Waar ben ik goed in en wat vind ik leuk om te doen?"
              kleur="linear-gradient(180deg, #7c3aed, #4f46e5)"
              tekst="Ik heb de afgelopen periode als zeer leuk ervaren, ook met de gedachtegang dat dit eigenlijk mijn laatste periode op school is ooit. Zoals ieder jaar besteed ik vaak ruim veel tijd aan mijn PL, als een soort dagboek. Daarnaast heb ik het vak sales als heel positief ervaren, we hebben het gedaan voor het bedrijf waar mijn vader al heel veel jaren actief is, ik heb niet alleen voor dit vak een 7 gehaald, maar ben ook nog eens meer te weten gekomen over het bedrijf waar papa vijf dagen per week actief voor werkt."
            />

            <VingerCard
              emoji="☝️"
              titel="Wijsvinger – Waar ligt mijn focus, waar ga ik naartoe, wat zijn mijn ambities?"
              kleur="linear-gradient(180deg, #4f46e5, #7c3aed)"
              tekst="Na vier jaar lang HBO en drie jaar lang MBO merk ik dat ik steeds beter weet wat ik niet wil. Enerzijds ideaal, maar het werd tijd dat ik eens ging weten waar ik wel heen wilde. Mijn interesses liggen in ieder geval niet bij het maken van berichten voor op sociale media, daarnaast vind ik het uitvoeren van keiharde sales ook niet in mijn straatje passen (misschien toch iets te eerlijk). Tot ik stuitte op neuromarketing, over het algemeen vooral offline marketing en iets wat AI voorlopig niet overneemt, zoals het schrijven van teksten en genereren van afbeeldingen. Los van dat neuromarketing natuurlijk ook wel online kan ingezet worden. Ik wil mij de komende tijd verder verdiepen of neuromarketing daadwerkelijk het vak is waar ik naartoe wil, dit ga ik verder ontdekken tijdens mijn afstuderen bij Allsens in Breda, zij zijn volledig gefocust op geurmarketing."
            />

            <VingerCard
              emoji="🖕"
              titel="Middelvinger – Wat irriteert me, waar baal ik van, wat levert me negatieve energie op?"
              kleur="linear-gradient(180deg, #7c3aed, #4f46e5)"
              tekst="Ik merk dat ik niet zo goed tegen veranderingen kan, ofja dat kan ik wel, maar ik begrijp dingen misschien minder snel dan ik dacht. Kijkend naar alleen al PL heb ik letterlijk 12 PDCA-cyclussen te veel uitgevoerd. Soms laat uitgebreid zien dat je er aandacht hebt besteed, maar soms is less ook more. Daarnaast ervaar ik de beoordelingsformulieren, ondanks dat ze heel duidelijk lijken toch niet op die van Marketingmanagement AD. Ik ben zo gewend het op die manier te doen, dat daarom hier nu ook een heel uitgebreid verslag van PL op tafel ligt. Ook met marketing had ik best wat moeite om erin te komen, ik kan simpelweg de touwtjes niet zo goed aan elkaar knopen. Het blijkt toch een uitdaging om na twee jaar in te stromen, ondanks ik niet mag klagen, nu ik al zo ver ben gekomen en in jaar 4 zit."
            />

            <VingerCard
              emoji="💍"
              titel="Ringvinger – Waar ben/blijf ik trouw aan?"
              kleur="linear-gradient(180deg, #4f46e5, #7c3aed)"
              tekst="In groepjes werken vind ik fijn, maar dat legt altijd wel een speciale druk op mij. Ik wil ze niet teleurstellen en zal altijd dezelfde dag mijn taken in orde hebben. Dit laat een bepaalde manier van trouw zijn aan hen zien. Ik ben mezelf iets minder trouw, maar ik heb een gouden regel. Bij deadlines sluit ik mezelf op, op het kantoor bij papa. Ik heb daar mijn eigen ruimte, een extra scherm en geen afleiding. Op de een of andere manier kan ik daar gaan zitten, is mijn hoofd ingesteld op een hele dag werken en neem ik maar één pauze om even te lunchen. Het is een fijne werkplek en het helpt mij echt om daar te gaan zitten, dat ga ik zeker volhouden in de toekomst, los van dat ik dat al een hele tijd zo doe."
            />

            <VingerCard
              emoji="🤙"
              titel="Pink – Waar kan ik nog in groeien, wat heeft aandacht nodig, waar ben ik nog klein?"
              kleur="linear-gradient(180deg, #7c3aed, #4f46e5)"
              tekst="Soms voel ik mijzelf zo volwassen en denk ik dat ook echt uit te stralen, nou zodra ik in het weekend thuis ben bij mijn ouders is dat maar al te goed zichtbaar, uitgegroeid ben ik nog lang niet. Ik kan groeien in het leggen van logische verbanden, daarbij is marketing een goed voorbeeld. Marketing bleek door iedereen in de klas als vaag gevonden, maar toen ik met Chafik sprak, werd mij langzaam maar zeker wel duidelijk waarvoor ik de opdracht had uitgevoerd. Ik wil meer rustmomenten pakken om eerst het beoordelingsformulier goed door te nemen en voor mezelf helder te hebben wat er moet gebeuren, in plaats van zomaar ergens aan beginnen, dit streven geldt voor alle vakken."
            />

          </div>
        </div>

        <div className="footer-nav-border08">
          <a href="/jaar-4" className="btn-ghost btn-sm">← Terug naar Jaar 4</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>

      </article>
    </main>
  );
}

