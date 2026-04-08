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

export default function VakinhoudelijkDoelPage() {
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
            Mijn <span className="g-text">vakinhoudelijk doel</span>
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
              tekst="Ik merk dat ik goed ben in observeren en analyseren van marketingprikkels. Tijdens het bekijken van de Albert Heijn-commercial viel het me direct op hoe de korting mijn aandacht trok, terwijl het product zelf nauwelijks zichtbaar was. Ik vind het leuk om te onderzoeken hoe visuele cues, emoties en storytelling mijn keuzes beïnvloeden en om te ontdekken welke technieken effectief zijn. Ook het experiment met de föhn vond ik interessant omdat ik zelf kon testen hoe kleur, design, sociale bewijskracht en emotie de aantrekkelijkheid van een product beïnvloeden. Het geeft me energie om zelf actief uit te zoeken wat werkt en hier direct aantekeningen bij te maken."
            />

            <VingerCard
              emoji="☝️"
              titel="Wijsvinger – Waar ligt mijn focus, waar ga ik naartoe, wat zijn mijn ambities?"
              kleur="linear-gradient(180deg, #4f46e5, #7c3aed)"
              tekst="Mijn focus ligt op het begrijpen en toepassen van neuromarketing in praktijkvoorbeelden. Ik wil leren hoe emoties, cognitieve processen en visuele cues de keuzes van mensen sturen. Tijdens de vier rondes van het föhn-experiment merkte ik hoe elke stap, van neutraal beeld tot mini-storytelling, de aantrekkelijkheid en keuze van het product beïnvloedde. Mijn ambitie is dat ik deze inzichten kan gebruiken voor analyses en toekomstige marketingprojecten zodat ik beter kan voorspellen welke cues effectief zijn en hoe ik dit kan vertalen naar eigen ontwerpen of aanbevelingen."
            />

            <VingerCard
              emoji="🖕"
              titel="Middelvinger – Wat irriteert me, waar baal ik van, wat levert me negatieve energie op?"
              kleur="linear-gradient(180deg, #7c3aed, #4f46e5)"
              tekst="Ik baal ervan dat ik soms nog te veel gefocust ben op wat me direct opvalt en daardoor de volledige boodschap van een commercial mis. Bij de KPN-reclame voelde ik de emotie van de vrienden, maar vergat ik de dienst zelf goed te registreren. Ook merk ik dat ik moeite heb om bij het föhn-experiment altijd de balans te bewaren tussen visuele aantrekkingskracht en productinformatie. Soms werd het visueel leuk, maar miste de duidelijkheid van het product. Dit levert negatieve energie op omdat ik weet dat ik hierdoor niet altijd het volledige effect kan analyseren."
            />

            <VingerCard
              emoji="💍"
              titel="Ringvinger – Waar ben ik trouw aan?"
              kleur="linear-gradient(180deg, #4f46e5, #7c3aed)"
              tekst="Ik ben trouw aan mijn nieuwsgierigheid en mijn doel om systematisch te leren hoe neuromarketing werkt. Bij elke commercial heb ik aantekeningen gemaakt en gebruik ik de PDCA-cyclus om stap voor stap mijn observaties en analyses te verbeteren. Ook in het föhn-experiment blijf ik consequent alle vier rondes uitvoeren en bijhouden wat werkt en wat niet zodat ik mijn analytische vaardigheden kan versterken en patronen kan herkennen."
            />

            <VingerCard
              emoji="🤙"
              titel="Pink – Waar kan ik nog in groeien, wat heeft aandacht nodig, waar ben ik nog klein?"
              kleur="linear-gradient(180deg, #7c3aed, #4f46e5)"
              tekst="Ik kan nog groeien in het combineren van alle elementen van neuromarketing zodat zowel emotie als productinformatie duidelijk en effectief overkomen. Bij Robijn merkte ik dat de tropische sfeer sterk bleef hangen, maar productinformatie minder, hier kan ik nog beter letten op hoe cues elkaar aanvullen. Ook wil ik mijn vaardigheid ontwikkelen om sociale cues en storytelling krachtiger te analyseren en eventueel uit te breiden naar interactieve of video-elementen. Mijn kleinheid ligt in dat ik nog niet altijd alle subtiele cues bewust registreer en dat ik soms moeite heb om prioriteit te geven aan wat echt impact maakt op de consument."
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