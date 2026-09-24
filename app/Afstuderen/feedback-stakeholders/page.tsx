import { Card, FooterNav, PageHeader } from "@/app/components/ContentBits";

export default function FeedbackStakeholders() {
  const stakeholders = [
    {
      name: "Bedrijfsbegeleider/opdrachtgever",
      people: ["Hans Burgers (eigenaar AllSens)", "Caroline Dudok (begeleider AllSens)"],
      relevant: "Beoordeelt professionele houding, kwaliteit van werk en waarde voor de organisatie.",
      feedback: "Feedback op teksten, presentatie, pro-activiteit, samenwerking en afspraken.",
    },
    {
      name: "Docenten/beoordelaars",
      people: ["Reinier Willers (1e beoordelaar)", "Ben Embregts (2e beoordelaar)"],
      relevant: "Kijkt naar niveau, onderbouwing, reflectie en koppeling met beoordelingscriteria.",
      feedback: "Feedback op structuur, bewijslast, leerdoelen en eindgesprek.",
    },
    {
      name: "Collega of medestudent",
      people: [
        "Mellanie Willemen (collega)",
        "Emma Zietz (collega)",
        "Minke Hoitema (collega)",
        "Simon Kosse (collega)",
        "Manon Laurijssen (student)",
        "Xander van Leeuwen (student)",
        "Ayoub Boulerhcha (student)",
      ],
      relevant: "Kan laagdrempelig feedback geven op duidelijkheid, tempo en begrijpelijkheid.",
      feedback: "Feedback op presentatie, spreektempo, slides of schrijfstijl.",
    },
    {
      name: "Spaanssprekende gesprekspartner",
      people: ["Inge Abbeel (heeft in Spanje gewoond en jarenlang Spaanse les gevolgd)"],
      relevant: "Kan beoordelen of ik eenvoudige Spaanse communicatie begrijpelijk toepas.",
      feedback: "Feedback op uitspraak, durf, basiszinnen en begrijpelijkheid.",
    },
  ];

  return (
    <main>
      <article className="content-page">
        <PageHeader
          badge="Afstuderen — Stakeholders voor feedback"
          title="Stakeholders voor feedback"
          lead="In deze tabel staan de belangrijkste stakeholders van wie ik feedback kan ontvangen tijdens mijn ontwikkeling."
        />

        <Card last>
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
                {stakeholders.map((item) => (
                  <tr key={item.name}>
                    <td className="feedback-name">
                      {item.name}
                      <ul className="feedback-list">
                        {item.people.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="feedback-relevant">{item.relevant}</td>
                    <td className="feedback-examples">{item.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <FooterNav
          prev={["/Afstuderen/Profileringskit", "Profileringskit"]}
          next={["/Afstuderen/leerdoel-1-presenteren", "Leerdoel: Presenteren"]}
        />
      </article>
    </main>
  );
}
