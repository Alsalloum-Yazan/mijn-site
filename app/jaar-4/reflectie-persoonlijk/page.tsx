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

export default function PersoonlijkDoelPage() {
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
            Reflectie <span className="g-text"> | Persoonlijk doel</span>
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
              tekst="Ik merk dat ik goed ben in snel handelen en situaties op gevoel aanvoelen. Vooral bij bekende situaties kan ik direct inschatten wat er nodig is. Bijvoorbeeld tijdens een teamoverleg merkte ik dat een collega vastliep met een planning; ik kon meteen een voorstel doen en voelde dat dit goed zou werken. Ook privé merk ik dat ik intuïtief keuzes maak die vaak goed uitpakken, zoals spontaan een weekendactiviteit plannen met vrienden. Ik vind het fijn om direct te handelen en dingen uit te voeren, omdat ik dan snel resultaat zie en energie krijg."
            />

            <VingerCard
              emoji="☝️"
              titel="Wijsvinger – Waar ligt mijn focus, waar ga ik naartoe, wat zijn mijn ambities?"
              kleur="linear-gradient(180deg, #4f46e5, #7c3aed)"
              tekst="Mijn focus ligt nu op het bewuster afwegen van mijn beslissingen. Ik merk bijvoorbeeld dat ik tijdens last-minute werkverzoeken vaak meteen “ja” zeg, zonder stil te staan bij mijn beschikbare tijd en prioriteiten. Ook merk ik dat ik impulsief ben bij aankopen: ik koop vaak iets zonder eerst na te denken of ik het echt nodig heb. Mijn ambitie is om bewuster keuzes te maken door korte pauzes te nemen, mijn eerste impuls te observeren en een checklist te gebruiken. Zo wil ik in zowel werk als privé rustiger en effectiever handelen. Aan het einde van december 2025 wil ik beter kunnen inschatten wanneer ik mijn gevoel kan volgen en wanneer rationeel nadenken nodig is."
            />

            <VingerCard
              emoji="🖕"
              titel="Middelvinger – Wat irriteert me, waar baal ik van, wat levert me negatieve energie op?"
              kleur="linear-gradient(180deg, #7c3aed, #4f46e5)"
              tekst="Ik baal ervan dat ik soms te impulsief ben, waardoor ik later spijt heb of extra stress ervaar. Bijvoorbeeld toen ik een spontane aankoop deed van een paar kledingstukken terwijl ik eigenlijk al genoeg had en het budget niet toeliet. Ook op werk reageer ik soms te snel, zoals bij een te snel verstuurde e-mail die ik later moest corrigeren. Dit levert negatieve energie op, omdat ik weet dat ik rustiger en effectiever had kunnen handelen als ik eerst even had nagedacht."
            />

            <VingerCard
              emoji="💍"
              titel="Ringvinger – Waar ben ik trouw aan?"
              kleur="linear-gradient(180deg, #4f46e5, #7c3aed)"
              tekst="Ik ben trouw aan mijn persoonlijke ontwikkeling en mijn wens om bewuster keuzes te maken. Daarom houd ik mijn logboek bij, noteer ik mijn beslissingen en reflecteer ik wekelijks. Ook blijf ik oefenen met pauzes en checklists, ook als het soms lastig is om dit consequent vol te houden. Het geeft me een goed gevoel dat ik hierdoor rustiger en zelfverzekerder kan handelen, zowel op werk als in privé."
            />

            <VingerCard
              emoji="🤙"
              titel="Pink – Waar kan ik nog in groeien, wat heeft aandacht nodig, waar ben ik nog klein?"
              kleur="linear-gradient(180deg, #7c3aed, #4f46e5)"
              tekst="Ik kan nog groeien in het consequent toepassen van mijn pauzes en checklists, vooral bij impulsieve momenten zoals last-minute verzoeken of spontane aankopen. Zo vergat ik soms een pauze in te lassen, waardoor ik direct iets kocht of “ja” zei, terwijl een korte reflectie me had geholpen om een verstandiger keuze te maken. Ik heb aandacht nodig voor geduld en zelfcompassie: het kost tijd om nieuwe gewoonten te ontwikkelen. Mijn kleinheid ligt in dat ik nog te vaak automatisch reageer, zowel bij werk als bij privékeuzes, en dit vraagt nog structurele oefening."
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