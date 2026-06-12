"use client";

export default function FeedbackStakeholders() {
  const stakeholders = [
    {
      name: "Bedrijfsbegeleider/opdrachtgever",
      relevant: "Beoordeelt professionele houding, kwaliteit van werk en waarde voor de organisatie.",
      feedback: "Feedback op teksten, presentatie, pro-activiteit, samenwerking en afspraken."
    },
    {
      name: "Docenten/beoordelaars",
      relevant: "Kijkt naar niveau, onderbouwing, reflectie en koppeling met beoordelingscriteria.",
      feedback: "Feedback op structuur, bewijslast, leerdoelen en eindgesprek."
    },
    {
      name: "Collega of medestudent",
      relevant: "Kan laagdrempelig feedback geven op duidelijkheid, tempo en begrijpelijkheid.",
      feedback: "Feedback op presentatie, spreektempo, slides of schrijfstijl."
    },
    {
      name: "Spaanssprekende gesprekspartner",
      relevant: "Kan beoordelen of ik eenvoudige Spaanse communicatie begrijpelijk toepas.",
      feedback: "Feedback op uitspraak, durf, basiszinnen en begrijpelijkheid."
    },
    {
      name: "Lezer/doelgroep van marketingtekst",
      relevant: "Kan beoordelen of content helder, relevant en vraaggericht is.",
      feedback: "Feedback op antwoord op zoekvraag, structuur, betrouwbaarheid en leesbaarheid."
    }
  ];

  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/Afstuderen" className="post-back-link">
            ← Terug naar Afstuderen
          </a>

          <div className="badge post-badge">
            <span className="badge-dot" />
            Afstuderen — Stakeholders voor feedback
          </div>

          <h1 className="post-h1">
            <span className="g-text">Stakeholders voor feedback</span>
          </h1>

          <div className="content-header-border">
            <p className="content-text">
              In deze tabel staan de belangrijkste stakeholders van wie ik feedback kan ontvangen tijdens mijn ontwikkeling. Iedere stakeholder biedt unieke inzichten die mijn groei ondersteunen.
            </p>
          </div>
        </div>

        <div className="reveal glow-card intro-card mb40">
          <div className="table-wrap">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Stakeholder</th>
                  <th>Waarom relevant</th>
                  <th>Voorbeelden van feedback</th>
                </tr>
              </thead>
              <tbody>
                {stakeholders.map((item, i) => (
                  <tr key={i}>
                    <td className="feedback-name">{item.name}</td>
                    <td className="feedback-relevant">{item.relevant}</td>
                    <td className="feedback-examples">{item.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        <div className="post-footer-nav">
          <a href="/Afstuderen" className="btn-ghost btn-sm">
            ← Terug naar Afstuderen
          </a>
        </div>
      </article>
    </main>
  );
}