"use client";

export default function NegenStappenPage() {
  const stappen = [
    {
      id: "zelfinzicht", label: "Stap 1", title: "Zelfinzicht", icon: "🪞",
      accent: "#f97316", accentLight: "rgba(249,115,22,0.12)", accentBorder: "rgba(249,115,22,0.25)",
      text: `Ik bestudeer mijn zelfinzicht d.m.v. terug te kijken naar de eerder uitgevoerde testen en dit te vergelijken met mijn blik en gedrag van nu, zie Hoofdstuk 1: Persoonlijk profiel.

Door de jaren heen heb ik mezelf steeds beter leren kennen. Uit testen zoals MBTI, DISC en Enneagram blijkt dat ik extravert, empathisch en creatief ben, creatief dan met name in het bedenken van oplossingen. Ik ben iemand die graag communiceert, anderen ondersteunt en situaties op gevoel beoordeelt. Waar ik vroeger wat onzekerder en meer terughoudend was, ben ik nu assertiever, spreek ik mijn mening uit en neem ik initiatief. Feedback probeer ik niet langer als kritiek te zien, maar meer als kans en uit de beste intenties.

Mijn passies liggen vooral bij alles wat met mensen, beleving en creativiteit te maken heeft. Zintuigelijke prikkels en neuromarketing fascineren me, door de invloed die ze op mensen hebben.

Kortom, ik ben iemand die open, positief en nieuwsgierig in het leven staat. Naar aanleiding van het bovenstaande ben ik nieuwsgierig geworden naar mijn nieuwe uitslag op de DISC-test. In 2022 dus voornamelijk geel met groen, met heel weinig rood en blauw.

Uit mijn DISC-test op 123test.nl blijkt dat mijn dominantie is gestegen, mijn invloed iets is gedaald, mijn stabiliteit wat is afgenomen en mijn consciëntieuze vaardigheden zijn licht toegenomen. Concluderend: ik ben iets directer en doelgerichter geworden, terwijl mijn sociale en communicatieve stijl nog steeds duidelijk aanwezig blijft.`
    },
    {
      id: "de-markt", label: "Stap 2", title: "De markt", icon: "🌐",
      accent: "#10b981", accentLight: "rgba(16,185,129,0.12)", accentBorder: "rgba(16,185,129,0.25)",
      text: `In mijn zoektocht naar een passende afstudeerplek heb ik gekeken naar mijn persoonlijke interesses, sterke punten en ervaringen. Door zelfreflectie en inzichten uit eerdere stappen, zoals mijn DISC-profiel en feedback van mijn omgeving, wordt duidelijk welke sectoren, functies en rollen het beste aansluiten bij wie ik ben en wat ik wil doen. Mijn focus ligt op marketing en communicatie, met bijzondere interesse voor klantbeleving, offline ervaringen en neuromarketing.`
    },
    {
      id: "shortlist", label: "Stap 3", title: "Shortlist", icon: "📋",
      accent: "#8b5cf6", accentLight: "rgba(139,92,246,0.12)", accentBorder: "rgba(139,92,246,0.25)",
      text: `Naar aanleiding van mijn eerdere onderzoek naar in welke sector ik graag zou willen werken, met de bijbehorende functies en rollen heb ik een top 5 bedrijven gemaakt welke mij interessant lijken.

Neurensics in Amsterdam.
Blauw in Rotterdam.
AllSens in Breda.
Scentair in Rotterdam.
Markteffect in Den Haag.

De vijf bedrijven op mijn shortlist sluiten aan bij mijn interesse in offline marketing en neuro-/geurmarketing.`
    },
    {
      id: "persoonlijke-profilering", label: "Stap 4", title: "Persoonlijke profilering", icon: "🧩",
      accent: "#f43f5e", accentLight: "rgba(244,63,94,0.12)", accentBorder: "rgba(244,63,94,0.25)",
      text: `In een tijd waarin veel bedrijven vertrouwen op digitale campagnes, kies ik bewust voor een aanpak waarin offline marketing centraal staat. Denk aan evenementen, workshops, fysieke mailingen of beurzen. Deze momenten bieden directe interactie met klanten en prospecten.`
    },
    {
      id: "kanalen-netwerk", label: "Stap 5", title: "Kanalen en netwerk", icon: "🔗",
      accent: "#3b82f6", accentLight: "rgba(59,130,246,0.12)", accentBorder: "rgba(59,130,246,0.25)",
      text: `In mijn afstudeerplan heb ik actief gewerkt aan het opbouwen en onderhouden van een professioneel netwerk. Dit jaar heb ik ervoor gezorgd dat ik inmiddels 440 connecties heb opgebouwd op LinkedIn.`
    },
    {
      id: "marktbewerkingsplan", label: "Stap 6", title: "Marktbewerkingsplan", icon: "📈",
      accent: "#f59e0b", accentLight: "rgba(245,158,11,0.12)", accentBorder: "rgba(245,158,11,0.25)",
      text: `Om mijn kansen op een passende afstudeerplek te vergroten, heb ik een marktbewerkingsplan opgesteld. Dit plan vormt een concrete vertaling van mijn eerdere stappen: zelfinzicht, de markt, shortlist bedrijven, persoonlijke profilering en kanalen/netwerk.`
    },
    {
      id: "uitvoering", label: "Stap 7", title: "Uitvoering", icon: "🚀",
      accent: "#14b8a6", accentLight: "rgba(20,184,166,0.12)", accentBorder: "rgba(20,184,166,0.25)",
      text: `Momenteel ben ik op gesprek mogen komen bij Allsens, het bedrijf dat mij het meest aansprak. Zij doen alles aan geurmarketing en zijn ook nog eens gevestigd in Breda.`
    },
    {
      id: "evaluatie-keuze", label: "Stap 8", title: "Evaluatie & keuze", icon: "✅",
      accent: "#8b5cf6", accentLight: "rgba(139,92,246,0.12)", accentBorder: "rgba(139,92,246,0.25)",
      text: `Na het gesprek bij Allsens weet ik eigenlijk meteen dat dit het bedrijf is waar ik het liefst mijn commercieel vraagstuk voor wil doen. Het gesprek voelde ontzettend open en spontaan.`
    },
    {
      id: "voorbereiding", label: "Stap 9", title: "Voorbereidend op het afstuderen", icon: "🎯",
      accent: "#ec4899", accentLight: "rgba(236,72,153,0.12)", accentBorder: "rgba(236,72,153,0.25)",
      text: `Voordat ik aan mijn afstudeerperiode start heb ik alvast nagedacht over goede doelen, welke ik daar zou willen ontwikkelen.

Binnen de afstudeerperiode (02-02-2026 en 28-06-2026) worden minimaal 8 offline activiteiten uitgevoerd, met aantoonbare betrokkenheid van deelnemers en concrete feedback voor verbeteringen.`
    },
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <div className="badge post-badge">
            <span className="badge-dot" />
            9 stappen tot het afstuderen
          </div>
          <h1 className="post-h1">9 stappen tot het afstuderen</h1>
          <div className="divider divider-mb24" />
          <p className="j4-intro-muted-preline">
            {`Hieronder zijn de 9 stappen uitgewerkt, voor verdere toelichting, zie hoofdstuk 3: 9 stappen tot het afstuderen in de platte tekst.

Tijdens de eerste periode van het vierde leerjaar heb ik gewerkt aan negen stappen. Deze negen stappen hebben mij geholpen bij het vinden van de beste plek om af te studeren. Ik vond de te doorlopen stappen logisch en eenvoudig op te volgen.`}
          </p>
        </div>

        <div className="stap-section">
          {stappen.map((item, i) => (
            <div key={item.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="stap-header">
                {/* Dynamic icon background */}
                <div className="stap-icon-wrap" style={{ background: `linear-gradient(135deg, ${item.accent}33, ${item.accent}11)`, border: `1px solid ${item.accentBorder}` }}>
                  {item.icon}
                </div>
                <div>
                  <div className="stap-label-small">{item.label}</div>
                  <h2 className="h2-no-margin">{item.title}</h2>
                </div>
              </div>

              {/* Dynamic card border/bg */}
              <div className="glow-card stap-card-body" style={{ border: `1px solid ${item.accentBorder}`, background: item.accentLight }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}



