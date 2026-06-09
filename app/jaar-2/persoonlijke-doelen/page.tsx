"use client";

export default function PersoonlijkeDoelenPage() {
  const doelen = [
    {
      number: "01",
      title: "Assertiviteit",
      text: "Er zijn verschillende acties ondernomen door in kaart te brengen hoe naar mijn eigen beeld mijn assertiviteit is. Vervolgens heb ik verschillende testen uitgevoerd om te kijken hoe mijn assertiviteit daadwerkelijk is. Tot slot heb ik gewerkt aan mijn assertiviteit.",
    },
    {
      number: "02",
      title: "Opzoek naar een stage",
      text: "Allereerst ga ik doelen opstellen van naar wat voor soort stage ik opzoek ben, zodat ik doelgericht kan gaan zoeken. Vervolgens ga ik mijn CV veranderen, omdat de stijl van mijn CV niet meer past bij mijn huidige stijl en dient mijn CV terug meer up to date te zijn. Tot slot wil ik verschillende stagebedrijven contacteren en in tegenstelling tot andere jaren niet afwachtend zijn, maar meerdere bedrijven berichten. Als laatste stap wil ik herinneringen sturen na het niets terug horen na een week (in werkdagen).",
    }
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-2" className="post-back-link">
            ← Terug naar Jaar 2
          </a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 className="post-h1">
            Persoonlijke <span className="g-text">doelen</span>
          </h1>
          <div className="divider divider-mb40" />

          <p className="p-lg-mb">
            Ik heb ervoor gekozen om mijn stage uit te lichten omdat het een belangrijke leerervaring voor me was. Tijdens deze periode heb ik veel praktische kennis opgedaan en mezelf professioneel ontwikkeld. Daarnaast wil ik werken aan mijn assertiviteit, zodat ik beter kan communiceren, zelfverzekerder kan optreden en mijn ideeën en standpunten duidelijk kan overbrengen.
          </p>

          {/* Afbeelding */}
          <div className="reveal doel-img-section">
            <img
              src="/jaar2/Persoonlijke doelen/Persoonlijke doelen.png"
              alt="Bescherming tegen de zon op het strand"
              className="doel-img-full"
            />
          </div>
        </div>

        {/* Doelen List */}
        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div className="grid-1col-gap32">
            {doelen.map((doel, i) => (
              <div key={i} className="glow-card tilt glow-card-content">
                <div className="doel-card-watermark">{doel.number}</div>
                <div className="doel-card-relative">
                  <div className="doel-card-num-row">
                    <div className="doel-card-num-icon">{doel.number}</div>
                    <h2 className="doel-card-h2">{doel.title}</h2>
                  </div>
                  <p className="doel-card-text">{doel.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-nav-mt64">
          <a href="/jaar-2" className="btn-ghost btn-sm">← Terug naar Jaar 2</a>
          <a href="/" className="btn btn-sm">Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}


