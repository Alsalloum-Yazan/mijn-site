"use client";

const SectionDivider = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(167,139,250,0.3), transparent)" }} />
    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#a78bfa", textTransform: "uppercase", whiteSpace: "nowrap" }}>
      {label}
    </span>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(270deg, rgba(167,139,250,0.3), transparent)" }} />
  </div>
);

const VingerCard = ({ emoji, titel, kleur, tekst }: { emoji: string; titel: string; kleur: string; tekst: string }) => (
  <div
    className="glow-card card-hover"
    style={{
      padding: "28px 32px",
      borderRadius: "20px",
      border: "1px solid rgba(167,139,250,0.15)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "3px",
        height: "100%",
        background: kleur,
        borderRadius: "20px 0 0 20px",
      }}
    />
    <div style={{ paddingLeft: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <span style={{ fontSize: "28px" }}>{emoji}</span>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#e2e2f0", margin: 0 }}>
          {titel}
        </h3>
      </div>
      <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: 0 }}>
        {tekst}
      </p>
    </div>
  </div>
);

export default function EindreflectiePage() {
  return (
    <main>
      <article className="content-page">

        {/* ── Header ── */}
        <div className="reveal">
          
            <a href="/jaar-4"
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
            ← Terug naar Jaar 4
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">eindreflectie</span>
          </h1>
          <div className="divider" style={{ marginBottom: "40px" }} />
        </div>

        {/* ── Vingers ── */}
        <div className="reveal" style={{ transitionDelay: "60ms", marginBottom: "72px" }}>
          <SectionDivider label="De vijf vingers" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>

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

        {/* ── Footer nav ── */}
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
          <a href="/jaar-4" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 4</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}