export default function PdcaCyclus() {
  const persoonlijk = [
    {
      title: "Het conceptualiseren van bedrijfsproducten",
      items: [
        { fase: "Plan", text: "Voordat ik aan een presentatie begin, bedenk ik eerst goed wat het doel is en welke informatie het management echt nodig heeft. Ik werk met Canva, omdat ik daar goed mee kan werken en duidelijke presentaties kan opbouwen." },
        { fase: "Do", text: "Ik maak presentaties in Canva op de momenten dat het management mij een opdracht geeft. Afhankelijk van de gegeven opdracht, maak ik een duidelijke/zo kort mogelijke presentatie." },
        { fase: "Check", text: "Na elke presentatie vraag ik om feedback en pas ik de presentatie/het plan aan naar de wens van de opdracht." },
        { fase: "Act", text: "Op basis van de feedback pas ik mijn communicatiestijl aan en maak ik een verbeterde versie. Na verloop van tijd kan ik deze presentaties hergebruiken als template." },
      ]
    },
    {
      title: "Dagelijks minstens 6km wandelen",
      items: [
        { fase: "Plan", text: "Ik probeer elke avond bewust na mijn kantoordagen een wandeling in te plannen. Doordeweeks zit ik vaak tot zelfs boven en rond de 10km." },
        { fase: "Do", text: "Ik houd mijn stappen bij via mijn telefoon, en zorg ervoor dat ik minimaal rond de 6 km blijf gemiddeld per week." },
        { fase: "Check", text: "Aan het eind van de week kijk ik hoe het gegaan is. Hoe voel ik me mentaal op dagen dat ik gewandeld heb?" },
        { fase: "Act", text: "Als ik merk dat het echt helpt (en dat doet het!), blijf ik het vasthouden. Uit het vele wandelen het afgelopen halfjaar blijkt, dat ik altijd beter en direct in slaap viel." },
      ]
    },
    {
      title: "Trello-borden aanmaken voor overzicht",
      items: [
        { fase: "Plan", text: "Ik ben begonnen met nadenken over welke borden ik nodig heb. Ik heb nu toegevoegd 'afronden stage' voor het herkansen van mijn onderzoek." },
        { fase: "Do", text: "Ik heb de borden aangemaakt met duidelijke lijsten, labels en checklists. Alles wat ik moet doen krijgt een plekje, en ik kijk er dagelijks op." },
        { fase: "Check", text: "Na twee weken merkte ik dat ik meer rust had in m'n hoofd. Ik vergat minder en voelde me overzichtelijker." },
        { fase: "Act", text: "Ik blijf het gebruiken, maar pas het nog aan als ik merk dat iets niet handig is. Of wanneer ik een punt vergeten ben in te voeren." },
      ]
    },
    {
      title: "Podcast luisteren over rust en chaos (Wendy)",
      items: [
        { fase: "Plan", text: "Ter inleesactie wil ik een goede toepasselijke podcast luisteren voor orde in de chaos." },
        { fase: "Do", text: "Terwijl ik luister heb ik notities gemaakt." },
        { fase: "Check", text: "Na afloop denk ik er even over na: wat wil ik meenemen? Bijvoorbeeld ademhalen voor een taak of rust creëren door beter te plannen." },
        { fase: "Act", text: "Ik probeer die inzichten gelijk toe te passen en niet iedere gedachte op te pakken." },
      ]
    },
  ];

  const vakinhoudelijk = [
    {
      title: "Bestellingen afronden en klantenbestand bijhouden",
      items: [
        { fase: "Plan", text: "Ik zie dit als een kans om Shopify te leren gebruiken voor mijn eigen toekomst. Daarom let ik goed op hoe ik dingen doe, en maak ik er soms aantekeningen van." },
        { fase: "Do", text: "Tijdens het verwerken van bestellingen kijk ik goed waar alles staat en hoe het systeem werkt. Zo leer ik hier van en pak ik nu alle bestellingen zelf op." },
        { fase: "Check", text: "Ik merk waar ik tegenaan loop en schrijf het op. Soms zoek ik dingen op, puur omdat ik het later zelf wil snappen." },
        { fase: "Act", text: "Ik leer door te doen en ontwikkel mij steeds meer op het gebied van Shopify en op welke punten ik dit kan inzetten." },
      ]
    },
    {
      title: "YouTube video's en artikelen lezen over Shopify/B2B",
      items: [
        { fase: "Plan", text: "Ik plan per week 1 à 2 leermomenten in om iets nieuws te leren over Shopify, puur voor mijn eigen kennis en webshopideeën." },
        { fase: "Do", text: "Ik kijk video's en lees artikelen, vooral over B2B en welke apps handig zijn. Ik maak er dan ook aantekeningen bij." },
        { fase: "Check", text: "Ik stel mezelf de vraag: snap ik het? Kan ik dit later zelf toepassen? Wat zou ik anders doen als het mijn eigen shop was?" },
        { fase: "Act", text: "Ik neem alle informatie mee of het nu handig is voor nu bij mijn stagebedrijf, bijbaantje of in de toekomst als ik mij echt ga specialiseren als marketeer." },
      ]
    },
    {
      title: "BSS-app installeren en ermee oefenen",
      items: [
        { fase: "Plan", text: "Ik heb van tevoren opgezocht wat deze app precies doet, en wat ik ermee zou willen bereiken in een eigen shop (zoals klantgroepen of staffelkorting)." },
        { fase: "Do", text: "Ik heb de app geïnstalleerd en ben er rustig doorheen gegaan om te kijken hoe alles werkt. Daarbij heb ik ook veel contact opgenomen met het supportteam." },
        { fase: "Check", text: "Tijdens het testen heb ik goed gekeken naar wat intuïtief werkt en wat niet. Ik heb wat dingen geprobeerd en kleine fouten gemaakt om ervan te leren." },
        { fase: "Act", text: "De volledig app draait nu, waarvoor ik voor de duidelijkheid ook een screencast heb opgenomen voor derden." },
      ]
    },
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-3" className="post-back-link">← Terug naar Jaar 3</a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 3 — Stage
          </div>
          <h1 className="post-h1">
            <span className="g-text">PDCA-cyclus</span>
          </h1>
          <div className="content-header-border-sm">
            <div className="pdca3-pills">
              {["Plan", "Do", "Check", "Act"].map((fase, i) => (
                <div key={i} className="pdca3-pill">{fase}</div>
              ))}
            </div>
          </div>
        </div>

        {/* PERSOONLIJK */}
        <div className="reveal section-heading-mb32">
          <h2 className="h2-sub">
            Persoonlijk <span className="g-text">doel</span>
          </h2>
          <div className="divider divider-mb32" />
        </div>

        <div className="pdca3-section-list">
          {persoonlijk.map((item, i) => (
            <div key={i} className="reveal glow-card intro-card-lg" style={{ transitionDelay: String(i * 80) + "ms" }}>
              <h3 className="pdca3-card-title">{item.title}</h3>
              <div className="grid-2col-gap16">
                {item.items.map((step, j) => (
                  <div key={j} className="pdca3-step-item">
                    <div className="pdca3-fase-badge">
                      <div className={`pdca3-fase-icon pdca3-fase-icon-${step.fase.toLowerCase()}`}>
                        {step.fase.charAt(0)}
                      </div>
                      <span className="pdca3-fase-text">{step.fase}</span>
                    </div>
                    <p className="pdca3-text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* VAKINHOUDELIJK */}
        <div className="reveal section-heading-mb32">
          <h2 className="h2-sub">
            Vakinhoudelijk <span className="g-text">doel</span>
          </h2>
          <div className="divider divider-mb32" />
        </div>

        <div className="pdca3-section-list-mb40">
          {vakinhoudelijk.map((item, i) => (
            <div key={i} className="reveal glow-card intro-card-lg" style={{ transitionDelay: String(i * 80) + "ms" }}>
              <h3 className="pdca3-card-title">{item.title}</h3>
              <div className="grid-2col-gap16">
                {item.items.map((step, j) => (
                  <div key={j} className="pdca3-step-item">
                    <div className="pdca3-fase-badge">
                      <div className={`pdca3-fase-icon pdca3-fase-icon-${step.fase.toLowerCase()}`}>
                        {step.fase.charAt(0)}
                      </div>
                      <span className="pdca3-fase-text">{step.fase}</span>
                    </div>
                    <p className="pdca3-text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="post-footer-nav">
          <a href="/jaar-3/doelen-stage" className="btn-ghost btn-sm">← Doelen stage</a>
          <a href="/jaar-3/reflecties" className="btn btn-sm">Reflecties →</a>
        </div>
      </article>
    </main>
  );
}

