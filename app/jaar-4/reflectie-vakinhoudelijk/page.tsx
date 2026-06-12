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

export default function VakinhoudelijkDoelPage() {
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
            Mijn <span className="g-text">vakinhoudelijk doel</span>
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

        <div className="footer-nav-border08">
          <a href="/jaar-4" className="btn-ghost btn-sm">← Terug naar Jaar 4</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>

      </article>
    </main>
  );
}

