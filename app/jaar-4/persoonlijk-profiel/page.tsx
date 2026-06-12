"use client";

export default function PersoonlijkProfielPage() {
  const profielItems = [
    {
      name: "Stap 1",
      topic: "Zelfkennis en communicatie",
      text: "Tijdens mijn eerste jaar Marketingmanagement ontdekte ik via testen zoals MBTI, DISC en Enneagram hoe ik in elkaar zit: extravert, empathisch en creatief. Ik leerde hoe ik mijn sociale energie en enthousiasme kan inzetten, en dat ik van nature graag help en ondersteun. Destijds was ik nog wat terughoudend, nu ben ik veel assertiever geworden.",
      color: "#f97316",
    },
    {
      name: "Stap 2",
      topic: "NLP en zintuigelijke waarneming",
      text: "In het tweede jaar leerde ik anders naar situaties kijken. NLP-basisovertuigingen zoals 'je hebt altijd een keuze' en 'falen bestaat niet, alleen feedback' hebben mij geholpen om positiever en flexibeler te denken. Daarnaast verdiepte ik me in zintuiglijke prikkels in winkels, wat mijn interesse in neuromarketing verder aanwakkerde.",
      color: "#10b981",
    },
    {
      name: "Stap 3",
      topic: "Commerciële economie en praktijkervaring",
      text: "In mijn derde jaar combineerde ik theorie met praktijk tijdens mijn stage. Ik leerde kritisch te kijken naar marketingacties en hun effect en ontdekte mijn kernwaarden via Ikigai: openheid, gezelligheid en positiviteit. Ook ontwikkelde ik mijn assertiviteit verder, bijvoorbeeld in het geven van feedback en het nemen van initiatief bij klanten.",
      color: "#3b82f6",
    },
    {
      name: "Stap 4",
      topic: "Toekomst",
      text: "Het laatste jaar van ontwikkeling voor het echte werkleven gaat beginnen. Ik focus mij op het verder verdiepen in neuromarketing en op persoonlijk vlak ben ik bezig om meer na te denken voor ik iets doe, in plaats van alles op gevoel te doen.",
      color: "#8b5cf6",
    },
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <div className="badge j4-badge-mb24">
            <span className="badge-dot" />
            Persoonlijk profiel
          </div>
          <h1 className="j4-h1">Persoonlijk profiel</h1>
          <div className="divider j4-divider-mb40" />
          <p className="content-intro-text">
            Voor verdere toelichting, zie hoofdstuk 1: Persoonlijk profiel.
          </p>
        </div>

        <div className="profiel-items-list">
          {profielItems.map((item, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="glow-card profiel-card" style={{
                background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
                border: `1px solid ${item.color}33`,
              }}>
                <div className="profiel-item-header">
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "18px",
                    color: item.color,
                    background: `${item.color}22`,
                    border: `1px solid ${item.color}33`,
                  }}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="profiel-h3">{item.name}</h3>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: item.color, margin: 0 }}>{item.topic}</p>
                  </div>
                </div>
                <p className="profiel-item-quote" style={{ borderLeft: `3px solid ${item.color}33` }}>
                  &quot;{item.text}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}

