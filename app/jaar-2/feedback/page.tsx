"use client";
import Link from "next/link";

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
          <a href="/jaar-2" className="post-back-link">
            ← Terug naar Jaar 2
          </a>
          <div className="badge post-badge">
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 className="post-h1">
            Feedback op mijn <span className="g-text">ontwikkeling</span>
          </h1>
          <div className="divider divider-mb40" />
          <p className="p-intro">
            In dit document verzamel ik de feedback die ik heb ontvangen van klasgenoten en vanuit mijn privéleven. Deze feedback helpt mij bij mijn persoonlijke groei en het realiseren van mijn leerdoelen.
          </p>
        </div>

        {/* Klasgenoten Feedback */}
        <div className="reveal reveal-mb64" style={{ transitionDelay: "100ms" }}>
          <h2 className="h2-section">Feedback <span className="g-text">klasgenoten</span></h2>
          <div className="flex-col-gap20">
            {klasgenotenFeedback.map((item, i) => (
              <div key={i} className="glow-card feedback-card">
                <div className="feedback-avatar">
                  <div className="feedback-icon">{item.name.charAt(0)}</div>
                  <div>
                    <h3 className="feedback-name">{item.name}</h3>
                    <p className="feedback-topic">{item.topic}</p>
                  </div>
                </div>
                <p className="feedback-quote">&quot;{item.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glow-line glow-line-mb64" />

        {/* Privéleven Feedback */}
        <div className="reveal" style={{ transitionDelay: "200ms" }}>
          <h2 className="h2-section">Feedback <span className="g-text">privéleven</span></h2>
          <div className="grid-1col-gap24">
            {privelevenFeedback.map((item, i) => (
              <div key={i} className="glow-card feedback-card feedback-card-border">
                <div className="feedback-avatar">
                  <div className="feedback-icon-indigo">{item.name.charAt(0)}</div>
                  <div>
                    <h3 className="feedback-name">{item.name}</h3>
                    <p className="feedback-topic-indigo">{item.topic}</p>
                  </div>
                </div>
                <p className="feedback-quote-indigo">&quot;{item.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-nav-mt64">
          <a href="/jaar-2" className="btn-ghost btn-sm">← Terug naar Jaar 2</a>
          <Link href="/" className="btn btn-sm">Terug naar home →</Link>
        </div>

      </article>
    </main>
  );
}


