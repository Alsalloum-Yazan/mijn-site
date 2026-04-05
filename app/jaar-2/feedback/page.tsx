"use client";

export default function FeedbackPage() {
  const klasgenotenFeedback = [
    { name: "Evy", topic: "Structuur en overzichtelijkheid", text: "De tekst biedt veel waardevolle informatie, maar de structuur kan worden verbeterd. Door bijvoorbeeld elk deelonderwerp (zoals doelen, acties, en logboek) kort samen te vatten en te voorzien van kopjes en subkopjes, maak je het makkelijker leesbaar en aantrekkelijker voor de lezer." },
    { name: "Esmee", topic: "Zelfreflectie en aanpak", text: "Het is duidelijk dat je goed hebt nagedacht over je persoonlijke ontwikkeling. Een tip is om je doelen SMART (Specifiek, Meetbaar, Acceptabel, Realistisch, Tijdgebonden) te formuleren. Dit maakt het makkelijker om je voortgang te monitoren en te evalueren." },
    { name: "Hugo", topic: "Assertiviteit in praktijk", text: "Je hebt mooie voorbeelden van hoe je je assertiviteit hebt verbeterd. Het zou goed zijn om per situatie ook te beschrijven wat je hebt geleerd en hoe je deze inzichten in de toekomst wilt toepassen. Dit geeft meer diepgang aan je reflectie." },
    { name: "Vera", topic: "Visuele ondersteuning", text: "De toevoeging van afbeeldingen, zoals de assertieve cirkel, is een goede zet. Overweeg om ook visuele elementen toe te voegen aan andere delen van je tekst, zoals je weekschema of je lijst met stage-eisen. Dit kan het geheel verlevendigen en verduidelijken." },
    { name: "Simone", topic: "Professionele toon en consistentie", text: "Sommige gedeeltes, zoals de beschrijving van je eerdere stagesituatie, bevatten veel persoonlijke details. Hoewel dit een goed beeld geeft van je ervaringen, kan het nuttig zijn om de tekst iets formeler en meer to-the-point te maken, zeker als dit document door anderen wordt gelezen." },
    { name: "Riley", topic: "Actieplan verbeteren", text: "Je hebt sterke plannen opgesteld, zoals het maken van een poetsschema en doelen voor het vinden van een stageplek. Het zou nuttig zijn om ook een concrete tijdslijn te noemen voor wanneer je deze doelen wilt bereiken, bijvoorbeeld: \"Ik wil mijn eerste sollicitaties uitsturen vóór 15 januari 2025.\"" },
  ];

  const privelevenFeedback = [
    { name: "Papa", topic: "Vader", text: "Ik ben heel trots op je dat je actief werkt aan je persoonlijke ontwikkeling. Het is mooi om te zien dat je jezelf uitdraagt en je mening gaat leren geven zonder conflict vermijdend gedrag. Als ik naar jou kijk, zie ik steeds meer een sterke en zelfverzekerde jonge vrouw die zich niet zomaar uit het veld laat slaan in vergelijking met vorig jaar. Wat betreft het onderzoeken van je carrièreopties, denk ik dat dat een goede stap is. Het is belangrijk om goed na te denken over je toekomst en te weten welke richting je op wilt." },
    { name: "Oma Trudy", topic: "Oma", text: "Ach, wat fijn om te horen dat je werkt aan het uitspreken van je mening. Als ik je soms hoor praten, lijkt het alsof je jezelf af en toe wat klein houdt. Het is prachtig om te horen dat je hieraan wilt werken. Zelfverzekerd zijn is zo belangrijk, en ik geloof echt dat je daar steeds beter in zult worden. Wat je beroepskeuze betreft, neem je tijd. Het is prima om te onderzoeken wat bij je past. Je hebt zoveel talenten, ik weet zeker dat je iets zult vinden waar je gelukkig van wordt. En wat vond ik het enig dat je kwam helpen met brieven schrijven." },
    { name: "Vivian", topic: "Vriendin en oud huisgenoot", text: "Ik vind het echt geweldig dat je het zo serieus neemt om je assertiever op te stellen. Je hebt altijd al een rustig en bedachtzaam karakter gehad, maar ik weet dat je soms in je hoofd zit als er conflicten komen, net als ik. Het lijkt me een hele positieve verandering als je je mening meer durft te geven! Wat je carrière betreft, vind ik het geweldig dat je nu al zo gericht op zoek gaat naar wat bij je past. Weet dat ik er altijd ben om samen ideeën uit te wisselen of om je te steunen als je een beslissing moet nemen." },
    { name: "Demi", topic: "Vriendin en oud klasgenoot mbo", text: "Wat een goede doelen heb je voor jezelf gesteld! Ik merk dat je soms een beetje twijfelt over je mening, vooral als je met anderen in gesprek gaat. Het is heel goed dat je jezelf daarin wilt uitdagen! Wat betreft je werk, ik ben blij dat je jezelf de tijd geeft om verschillende opties te verkennen. Je hebt zoveel mogelijkheden, en ik weet dat je de juiste richting zult vinden." },
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-2" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Terug naar Jaar 2
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Feedback op mijn <span className="g-text">ontwikkeling</span>
          </h1>
          <div className="divider" style={{ marginBottom: "40px" }} />
          
          <p style={{ marginBottom: "40px", fontSize: "1.1rem" }}>
            In dit document verzamel ik de feedback die ik heb ontvangen van klasgenoten en vanuit mijn privéleven. Deze feedback helpt mij bij mijn persoonlijke groei en het realiseren van mijn leerdoelen.
          </p>
        </div>

        {/* Klasgenoten Feedback */}
        <div className="reveal" style={{ transitionDelay: "100ms", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "24px" }}>Feedback <span className="g-text">klasgenoten</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {klasgenotenFeedback.map((item, i) => (
              <div key={i} className="glow-card" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
                  <div style={{ width: "48px", height: "48px", flexShrink: 0, background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(79,70,229,0.15))", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 800, color: "#a78bfa" }}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>{item.name}</h3>
                    <p style={{ fontSize: "13px", color: "#a78bfa", fontWeight: 600, margin: 0 }}>{item.topic}</p>
                  </div>
                </div>
                <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#e2e2f0", fontStyle: "italic", paddingLeft: "16px", borderLeft: "3px solid rgba(167,139,250,0.3)", margin: 0 }}>
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glow-line" style={{ marginBottom: "64px" }} />

        {/* Privéleven Feedback */}
        <div className="reveal" style={{ transitionDelay: "200ms" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "24px" }}>Feedback <span className="g-text">privéleven</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
            {privelevenFeedback.map((item, i) => (
              <div key={i} className="glow-card" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", borderColor: "rgba(129,140,248,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
                  <div style={{ width: "48px", height: "48px", flexShrink: 0, background: "linear-gradient(135deg, rgba(129,140,248,0.15), rgba(79,70,229,0.15))", border: "1px solid rgba(129,140,248,0.3)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 800, color: "#818cf8" }}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>{item.name}</h3>
                    <p style={{ fontSize: "13px", color: "#818cf8", fontWeight: 600, margin: 0 }}>{item.topic}</p>
                  </div>
                </div>
                <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#e2e2f0", fontStyle: "italic", paddingLeft: "16px", borderLeft: "3px solid rgba(129,140,248,0.3)", margin: 0 }}>
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-2" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 2</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}
