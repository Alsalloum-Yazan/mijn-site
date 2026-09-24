"use client";

export default function Literatuurlijst() {
  const sources: { author: string; year: string; title: string; url?: string }[] = [
    { author: "Bea Kuijs", year: "Z.D.", title: "Maak jij de impact die jij wilt maken met jouw presentatie?", url: "https://www.beadiamond.nl/invulpagina-test" },
    { author: "Carrièretijger", year: "Z.D.", title: "Presentatie", url: "https://www.carrieretijger.nl/functioneren/communiceren/mondeling/modellen/presentatie" },
    { author: "CBL", year: "2025", title: "CBL zichtboek eiwittransitie", url: "https://www.cbl.nl/wp-content/uploads/2025/12/Geactualiseerd-CBL-Zichtboek-Eiwittransitie-2025-def.pdf" },
    { author: "Coca-Cola", year: "Z.D.", title: "Nieuwe look, zelfde unieke smaak", url: "https://www.coca-cola.com/nl/nl/brands/coca-cola-zero-sugar" },
    { author: "Consumentenbond", year: "26 augustus, 2025", title: "Prijspsychologie: verleiden mag, misleiden niet", url: "https://www.consumentenbond.nl/acties-claims/nieuws/2025/prijspsychologie" },
    { author: "Dan Ariely", year: "2012", title: "Volkomen onlogisch: Waarom je vaak handelt in strijd met je eigenbelang (boek)" },
    { author: "Divosa", year: "6 januari, 2026", title: "Kwaliteit van taal in de inburgering", url: "https://www.divosa.nl/publicaties/kwaliteit-van-taal-de-inburgering/motivatie-en-aansluiten-op-de-leerbehoefte" },
    { author: "Gaby Tenda", year: "18 maart, 2025", title: "10 effectieve beïnvloedingstechnieken: framing, loss aversion & meer", url: "https://www.frankwatching.com/archive/2025/03/18/effectieve-beinvloedingstechnieken/" },
    { author: "Jaap Jacobs", year: "2026", title: "GEO: SEO in de tijd van AI. Van Duuren Management (boek)" },
    { author: "Karel Zwaan", year: "26 maart, 2025", title: "Sociale bewijskracht werkt, maar kijk uit voor kuddegedrag", url: "https://www.frankwatching.com/archive/2025/03/26/sociale-bewijskracht-kuddegedrag/" },
    { author: "Mark Manson", year: "2017", title: "De edele kunst van not giving a fuck: De tegendraadse aanpak voor een goed leven (boek)" },
    { author: "Romy Veul", year: "28 november, 2025", title: "Generative Engine Optimization (GEO): zo word je vindbaar in AI-tools", url: "https://www.hostnet.nl/academy/geo-generative-engine-optimization" },
    { author: "Sander Geijtenbeek", year: "19 maart, 2026", title: "Wat is GEO (Generative Engine Optimization)?", url: "https://sageon.nl/wat-is-geo-generative-engine-optimization/" },
    { author: "SEO Zwolle", year: "16 maart, 2026", title: "SEO-schrijven: zo maak je content die rankt in Google (en AI)", url: "https://www.seozwolle.nl/seo-tekst-schrijven-checklist.html" },
    { author: "Mark Robinson", year: "8 juli, 2025", title: "QUIZ Test je presentatievaardigheden", url: "https://www.markrobinsontraining.com/nl/quiz/" },
    { author: "Traffic Builders", year: "19 juni, 2025", title: "Van SEO naar GEO: de hybride contentstrategie voor 2025", url: "https://www.frankwatching.com/archive/2025/06/19/van-seo-naar-geo-contentstrategie/" }
  ];

  return (
    <main>
      <article className="content-page">
        {/* HEADER */}
        <div className="reveal">
          <a href="/Afstuderen" className="back-link-sm">
            ← Terug naar Afstuderen
          </a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Bronnen & Referenties
          </div>
          <h1 className="page-h1-medium">
            <span className="g-text">Literatuurlijst</span>
          </h1>
          <div className="divider divider-center divider-mb40" />
        </div>

        {/* SOURCES TABLE */}
        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Alle gebruikte bronnen</span>
          </h2>
          <div className="divider divider-mb20" />

          <div className="table-wrap">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Auteur</th>
                  <th>Jaar</th>
                  <th>Titel</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((source, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{source.author}</td>
                    <td>{source.year}</td>
                    <td>{source.title}</td>
                    <td>
                      {source.url && (
                        <a href={source.url} target="_blank" rel="noopener noreferrer" style={{ color: "#013F32", textDecoration: "underline" }}>
                          Bekijk →
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FOOTER NAV */}
        <div className="footer-nav-mt80">
          <a href="/Afstuderen/ai-protocol" className="btn-ghost btn-sm-pad24">← Vorige: AI Protocol</a>
          <a href="/Afstuderen/bijlagen" className="btn btn-sm-pad24">Volgende: Bijlagen →</a>
        </div>
      </article>
    </main>
  );
}
