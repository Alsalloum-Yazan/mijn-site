"use client";

export default function ProfileringskitPage() {
  const sections = [
    {
      id: "motivatie",
      label: "Motivatiebrief",
      title: "Motivatiebrief",
      icon: "✉️",
      accent: "#7c3aed",
      accentLight: "rgba(124,58,237,0.12)",
      accentBorder: "rgba(124,58,237,0.25)",
      src: "/jaar4/profileringskit/Motivatiebrief.png",
      text: "Ik heb er deze periode voor gekozen om niet een heel uitgebreide brief. De motivatie heb ik laten blijken in mijn mail. Wat uiteindelijk goed genoeg bleek, aangezien ik ben aangenomen.",
    },
    {
      id: "cv",
      label: "CV",
      title: "CV",
      icon: "📄",
      accent: "#4f46e5",
      accentLight: "rgba(79,70,229,0.12)",
      accentBorder: "rgba(79,70,229,0.25)",
      src: "/jaar4/profileringskit/CV.png",
      text: "Een volledig bijgewerkt CV, met al mijn school- en werkervaringen tot nu toe.",
    },
    {
      id: "linkedin",
      label: "LinkedIn-profiel",
      title: "LinkedIn-profiel",
      icon: "💼",
      accent: "#6d28d9",
      accentLight: "rgba(109,40,217,0.12)",
      accentBorder: "rgba(109,40,217,0.25)",
      src: "/jaar4/profileringskit/LinkedIn-profiel.png",
      text: "In de afgelopen jaren heb ik tot de 440 connecties opgebouwd.",
    },
    {
      id: "activatie",
      label: "Onderscheidende activatie",
      title: "Onderscheidende activatie",
      icon: "✨",
      accent: "#9333ea",
      accentLight: "rgba(147,51,234,0.12)",
      accentBorder: "rgba(147,51,234,0.25)",
      src: "/jaar4/profileringskit/activatie.png",
      text: `Mijn parfum richt zich op mensen die houden van positieve ervaringen en kleine geluksmomentjes in het dagelijks leven. Dit zijn vaak avontuurlijke, vrije geesten die zich graag omringen met dingen die hun stemming verbeteren en hun zintuigen prikkelen. Ze waarderen persoonlijke stijl, unieke producten en verhalen achter merken, ze willen niet zomaar een parfum dragen, maar een ervaring beleven die aansluit bij hun levensstijl.

Deze doelgroep is vaak tussen de 18 en 35 jaar, zowel mannen als vrouwen, die een actieve levensstijl hebben en graag reizen, het buitenleven opzoeken of simpelweg genieten van zon, zee en vrijheid. Ze voelen zich aangetrokken tot producten die een emotionele verbinding creëren, bijvoorbeeld een geur die hen herinnert aan vakantie, zomeravonden of vrolijke momenten met vrienden.

Belangrijk voor hen is dat een parfum niet alleen goed ruikt, maar ook een gevoel overbrengt, een vibe heeft die hun persoonlijkheid en levenshouding weerspiegelt. Ze staan open voor merken die authentiek zijn en waarbij passie en liefde voor het product voelbaar zijn.`,
    },
    {
      id: "logo",
      label: "LOGO",
      title: "LOGO",
      icon: "🎨",
      accent: "#a855f7",
      accentLight: "rgba(168,85,247,0.12)",
      accentBorder: "rgba(168,85,247,0.25)",
      src: "/jaar4/profileringskit/logo.png",
      text: "",
    },
    {
      id: "neuromarketeer",
      label: "Ik, als neuromarketeer",
      title: "Ik als neuromarketeer",
      icon: "🧠",
      accent: "#6366f1",
      accentLight: "rgba(99,102,241,0.12)",
      accentBorder: "rgba(99,102,241,0.25)",
      text: `Als neuromarketeer onderzoek ik hoe mensen keuzes maken en hoe producten gevoelens kunnen oproepen. Ik combineer inzichten uit de wetenschap met creativiteit om producten te maken die niet alleen werken, maar ook écht een ervaring geven.

Bij mijn parfum draait het om de beleving: de geur brengt je direct naar zonnige dagen en de frisse energie van de zee. Ik let op de kleine details – geur, kleur, verpakking – omdat juist die dingen bepalen hoe iemand het product ervaart en onthoudt.

Op die manier zorg ik ervoor dat wat ik maak meer is dan alleen een product; het is iets dat mensen raakt en een positief gevoel geeft, zonder dat het opgepoetst of overdreven voelt.`,
    },
    {
      id: "motto",
      label: "Motto",
      title: "Motto",
      icon: "🌞",
      accent: "#f59e0b",
      accentLight: "rgba(245,158,11,0.12)",
      accentBorder: "rgba(245,158,11,0.25)",
      text: `TAN/10! 🌞
De tan staat voor tanniglines en een zomers gevoel. Daarnaast staat de 10 weer voor alles uit het leven halen en positiviteit.`,
    },
    {
      id: "waarde",
      label: "Bewijs van eigen toegevoegde waarde",
      title: "Bewijs van eigen toegevoegde waarde",
      icon: "⚡",
      accent: "#ec4899",
      accentLight: "rgba(236,72,153,0.12)",
      accentBorder: "rgba(236,72,153,0.25)",
      text: `Ik krijg vaak te horen, dat er zoals mij geen een is. Ik ben nooit chagrijnig, maar dan echt nooit, mocht ik het toch een keertje zijn dan duurt het niet langer dan 2 minuten. Omdat ik mij dan alweer bedenk dat het mij niet waard is om er in te blijven hangen, dus kortom voor een vrolijke en enthousiaste energie moet je bij mij zijn.`,
    },
    {
      id: "pitch",
      label: "Pitch",
      title: "Pitch",
      icon: "🎥",
      accent: "#22c55e",
      accentLight: "rgba(34,197,94,0.12)",
      accentBorder: "rgba(34,197,94,0.25)",
      text: "https://mymedia.avans.nl/media/Persoonlijke+pitch/0_tiga4qf8",
      link: "https://mymedia.avans.nl/media/Persoonlijke+pitch/0_tiga4qf8",
    },
  ];

  return (
    <main>
      <article className="content-page">

        {/* Header */}
        <div className="reveal">
          <div className="badge j4-badge-mb24">
            <span className="badge-dot" />
            Profileringskit
          </div>

          <h1 className="j4-h1">Profileringskit</h1>

          <div className="divider divider-mb24" />

          <p className="j4-intro-muted">
            Dit hoofdstuk bestaat uit: een motivatiebrief, mijn cv, videopitch, LinkedIn profiel, een onderscheidende activatie en mijn persoonlijke positionering.
          </p>
        </div>

        {/* Sections — dynamic accent/accentLight/accentBorder kept inline */}
        <div className="j4-sections-gap">
          {sections.map((item, i) => (
            <div key={item.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>

              <div className="profileringskit-section-header">
                <div className="profileringskit-section-icon-wrap" style={{
                  background: `linear-gradient(135deg, ${item.accent}33, ${item.accent}11)`,
                  border: `1px solid ${item.accentBorder}`,
                }}>
                  {item.icon}
                </div>

                <div>
                  <div className="profileringskit-section-label">{item.label}</div>
                  <h2 className="h2-no-margin">{item.title}</h2>
                </div>
              </div>

              {item.text && (
                <p className="profileringskit-section-text">{item.text}</p>
              )}

              <div className="glow-card profileringskit-section-card" style={{
                border: `1px solid ${item.accentBorder}`,
                background: item.accentLight,
              }}>
                <div className="profileringskit-section-card-inner">
                  {"src" in item && item.src && (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="profileringskit-section-img"
                    />
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      className="btn btn-mt16"
                    >
                      Open link →
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </article>
    </main>
  );
}


