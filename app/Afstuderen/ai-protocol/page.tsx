"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

export default function AiProtocol() {
  const [imgOpen, setImgOpen] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={imgOpen} onClose={() => setImgOpen(null)} />

      <article className="content-page">
        {/* HEADER */}
        <div className="reveal">
          <a href="/Afstuderen" className="back-link-sm">
            ← Terug naar Afstuderen
          </a>
          <div className="badge badge-mb20">
            <span className="badge-dot" />
            Protocol & Verantwoordelijkheid
          </div>
          <h1 className="page-h1-medium">
            <span className="g-text">AI-Protocol</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(1,63,50,0.8)", marginTop: "20px", marginBottom: "0" }}>
            Hoe ik AI verantwoord heb ingezet in mijn afstudeerwerk
          </p>
          <div className="divider divider-center divider-mb40" />
        </div>

        {/* INTRODUCTIE */}
        <div className="reveal glow-card intro-card mb40">
          <p className="intro-divider">
            Tijdens het maken van dit persoonlijk leiderschapsdocument heb ik gebruikgemaakt van AI. Ik heb AI ingezet als hulpmiddel in mijn leerproces, maar niet als vervanging van mijn eigen denkwerk. De inhoud, keuzes, reflecties en eindverantwoordelijkheid blijven van mij. Ik heb AI vooral gebruikt om mijn ideeën te ordenen, teksten aan te scherpen, mijn vakinhoudelijke doel over AI-gedreven zoekgedrag uit te werken en marketingteksten te analyseren met behulp van een zelf opgezette GEO-analysetool.
          </p>

          <p className="intro-divider">
            Volgens het AI Protocol Commerciële Economie valt mijn AI-gebruik onder meerdere niveaus. Het hoogste toegepaste niveau in dit document is niveau 4: AI bij analyse. Daarom voeg ik mijn promptgeschiedenis en screenshots van gesprekken toe als bewijs. Ook reflecteer ik op wat ik wel en niet heb overgenomen, hoe ik de output heb gecontroleerd en wat mijn eigen bijdrage is geweest.
          </p>
        </div>

        {/* AI LEVELS TABLE */}
        <div className="reveal mb40">
          <h2 className="h2-sub-lg mb24">
            <span className="g-text">Toegepaste AI-niveaus</span>
          </h2>
          <div className="divider divider-mb40" />

          <div className="table-wrap">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Niveau</th>
                  <th>Toepassing in mijn document</th>
                  <th>Hoe heb ik AI ingezet?</th>
                  <th>Bewijs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600, color: "#013F32" }}>Niveau 1: Herschrijven / Redactie</td>
                  <td>Teksten duidelijker, netter en beter leesbaar maken</td>
                  <td>Ik heb AI gebruikt om zinnen vloeiender te formuleren, spelling te controleren en stukken tekst beter te structureren. De inhoud bleef gebaseerd op mijn eigen ervaringen, feedback en bewijslast.</td>
                  <td>
                    <p style={{ fontSize: "0.9rem", margin: "0 0 12px" }}>AI-gesprekken voor redactie en herschrijving</p>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-1a.webp")}>
                        <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-1a.webp" alt="Screenshot 1a" style={{ maxWidth: "120px", borderRadius: "6px", border: "1px solid rgba(1,63,50,0.12)", cursor: "pointer", display: "block" }} />
                        <div style={{ fontSize: "0.75rem", color: "rgba(1,63,50,0.6)", marginTop: "4px" }}>Klik</div>
                      </div>
                      <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-1b.webp")}>
                        <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-1b.webp" alt="Screenshot 1b" style={{ maxWidth: "120px", borderRadius: "6px", border: "1px solid rgba(1,63,50,0.12)", cursor: "pointer", display: "block" }} />
                        <div style={{ fontSize: "0.75rem", color: "rgba(1,63,50,0.6)", marginTop: "4px" }}>Klik</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: "#013F32" }}>Niveau 2: Ideeën en structuur</td>
                  <td>Meedenken over opbouw van onderdelen</td>
                  <td>Ik heb AI gebruikt als brainstormpartner voor de opbouw van reflecties, PDCA-cycli en de structuur van bepaalde hoofdstukken. AI gaf ideeën, maar ik bepaalde zelf welke onderdelen passend waren voor mijn ontwikkeling en document.</td>
                  <td>
                    <p style={{ fontSize: "0.9rem", margin: "0 0 12px" }}>AI-gesprekken voor brainstormen</p>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-2a.webp")}>
                        <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-2a.webp" alt="Screenshot 2a" style={{ maxWidth: "120px", borderRadius: "6px", border: "1px solid rgba(1,63,50,0.12)", cursor: "pointer", display: "block" }} />
                        <div style={{ fontSize: "0.75rem", color: "rgba(1,63,50,0.6)", marginTop: "4px" }}>Klik</div>
                      </div>
                      <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-2b.webp")}>
                        <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-2b.webp" alt="Screenshot 2b" style={{ maxWidth: "120px", borderRadius: "6px", border: "1px solid rgba(1,63,50,0.12)", cursor: "pointer", display: "block" }} />
                        <div style={{ fontSize: "0.75rem", color: "rgba(1,63,50,0.6)", marginTop: "4px" }}>Klik</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: "#013F32" }}>Niveau 3: Inhoudelijk gebruik</td>
                  <td>Uitleg en verdieping bij AI-gedreven zoekgedrag en GEO</td>
                  <td>Ik heb AI gebruikt om informatie over AI-zoekgedrag, GEO-principes en marketingteksten beter te begrijpen en te vertalen naar mijn eigen vakinhoudelijke doel. Ik heb de output niet letterlijk overgenomen, maar verwerkt in mijn eigen woorden en gekoppeld aan mijn afstudeercontext bij AllSens.</td>
                  <td>
                    <p style={{ fontSize: "0.9rem", margin: "0 0 12px" }}>AI-gesprekken over GEO</p>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-3a.webp")}>
                        <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-3a.webp" alt="Screenshot 3a" style={{ maxWidth: "120px", borderRadius: "6px", border: "1px solid rgba(1,63,50,0.12)", cursor: "pointer", display: "block" }} />
                        <div style={{ fontSize: "0.75rem", color: "rgba(1,63,50,0.6)", marginTop: "4px" }}>Klik</div>
                      </div>
                      <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-3b.webp")}>
                        <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-3b.webp" alt="Screenshot 3b" style={{ maxWidth: "120px", borderRadius: "6px", border: "1px solid rgba(1,63,50,0.12)", cursor: "pointer", display: "block" }} />
                        <div style={{ fontSize: "0.75rem", color: "rgba(1,63,50,0.6)", marginTop: "4px" }}>Klik</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: "#013F32" }}>Niveau 4: AI bij analyse</td>
                  <td>Analyse van marketingteksten via GEO-tool</td>
                  <td>Ik heb met behulp van Claude een GEO-analysetool opgezet. Deze tool beoordeelde marketingteksten op kernboodschap, zoekintentie, structuur, directheid en betrouwbaarheid. De tool gaf scores en verbeterpunten. Ik heb deze feedback kritisch bekeken, teksten aangepast en opnieuw geanalyseerd.</td>
                  <td>
                    <p style={{ fontSize: "0.9rem", margin: "0 0 12px" }}>GEO-tool analyse output</p>
                    <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-4a.webp")}>
                      <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-4a.webp" alt="Screenshot 4a" style={{ maxWidth: "120px", borderRadius: "6px", border: "1px solid rgba(1,63,50,0.12)", cursor: "pointer", display: "block" }} />
                      <div style={{ fontSize: "0.75rem", color: "rgba(1,63,50,0.6)", marginTop: "4px" }}>Klik</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* WAAROM NIVEAU 4 */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Waarom niveau 4 van toepassing is</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Niveau 4 is van toepassing omdat ik AI heb gebruikt om teksten te analyseren. In mijn vakinhoudelijke leerdoel heb ik onderzocht hoe marketingteksten beter kunnen aansluiten op AI-gedreven zoekgedrag. Hiervoor heb ik een eigen GEO-analysetool opgezet die marketingteksten beoordeelt aan de hand van vaste criteria.
          </p>

          <p className="intro-divider">
            De AI analyseerde de teksten niet zelfstandig als eindbeoordelaar, maar als hulpmiddel om verbeterpunten zichtbaar te maken. Ik heb daarna zelf bepaald welke verbeterpunten relevant waren en welke aanpassingen ik wel of niet heb doorgevoerd. Mijn eigen interpretatie bleef daarbij leidend.
          </p>
        </div>

        {/* METHODE */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Methode van AI-gebruik bij analyse</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider" style={{ marginBottom: "16px" }}>
            Voor de analyse van marketingteksten werkte ik met de volgende methode:
          </p>

          <ol className="content-list">
            <li>Ik schreef of verzamelde een marketingtekst voor AllSens, Zaluti of Pure by Zaluti.</li>
            <li>Ik voerde de tekst in de GEO-analysetool in.</li>
            <li>De tool analyseerde de tekst op vijf criteria: kernboodschap, zoekintentie, structuur, directheid en betrouwbaarheid.</li>
            <li>Per criterium gaf de tool een score en een verbeterpunt.</li>
            <li>Ik bekeek kritisch of de feedback logisch en bruikbaar was.</li>
            <li>Ik paste de tekst aan waar dat inhoudelijk passend was.</li>
            <li>Daarna liet ik de aangepaste tekst opnieuw analyseren.</li>
            <li>Ik vergeleek de oude en nieuwe score en reflecteerde op het verschil.</li>
          </ol>
        </div>

        {/* CONTROLE */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Controle van de AI-output</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik heb de AI-output gecontroleerd door deze niet zomaar over te nemen. Bij niveau 3 en 4 heb ik steeds gekeken of de output logisch, betrouwbaar en passend was bij mijn doel. Hiervoor heb ik mijn eigen kennis, feedback van anderen en aanvullende bronnen gebruikt.
          </p>

          <p className="intro-divider">
            Ik heb vooral gecontroleerd op:
          </p>

          <ul className="content-list">
            <li>De feedback aansloot bij de doelgroep van AllSens;</li>
            <li>De tekst nog steeds klopte met de inhoud en boodschap;</li>
            <li>De tekst duidelijker werd voor de lezer;</li>
            <li>De aanbevelingen pasten bij GEO en AI-gedreven zoekgedrag;</li>
            <li>De tekst niet te algemeen of overdreven werd;</li>
            <li>Of mijn eigen schrijfstijl en professionele ontwikkeling zichtbaar bleven.</li>
          </ul>

          <p className="intro-divider">
            Wanneer AI suggesties gaf die niet pasten bij mijn document of bij mijn eigen ervaring, heb ik deze niet overgenomen. AI was voor mij een hulpmiddel om scherper te kijken, maar niet de schrijver of beoordelaar van mijn volledige document.
          </p>
        </div>

        {/* WAT IK OVERNAM */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Wat heb ik overgenomen?</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik heb vooral de volgende onderdelen uit AI-output gebruikt:
          </p>

          <ul className="content-list">
            <li>Suggesties voor duidelijkere zinsopbouw</li>
            <li>Ideeën voor een logischere structuur</li>
            <li>Feedback op marketingteksten</li>
            <li>Verbeterpunten rondom kernboodschap, directheid en zoekintentie</li>
            <li>Ondersteuning bij het formuleren van reflecties</li>
          </ul>
        </div>

        {/* WAT IK NIET OVERNAM */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Wat heb ik niet overgenomen?</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik heb AI-output niet letterlijk overgenomen wanneer:
          </p>

          <ul className="content-list">
            <li>De tekst niet persoonlijk genoeg voelde</li>
            <li>De formulering niet aansloot bij mijn eigen ervaring</li>
            <li>De inhoud te algemeen bleef</li>
            <li>De suggestie niet paste bij AllSens, Zaluti of Pure by Zaluti</li>
            <li>AI meer claimde dan ik kon onderbouwen</li>
            <li>Mijn eigen leerproces minder zichtbaar werd.</li>
          </ul>

          <p className="intro-divider">
            Vooral bij mijn persoonlijke reflecties heb ik erop gelet dat de inhoud echt van mij bleef. Mijn ervaringen met presenteren, Spaans leren en werken aan AI-gedreven zoekgedrag zijn gebaseerd op mijn eigen acties, feedbackmomenten en bewijslast.
          </p>
        </div>

        {/* EIGEN BIJDRAGE */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">Mijn eigen bijdrage</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Mijn eigen bijdrage bestaat uit het kiezen van de leerdoelen, het uitvoeren van de acties, het verzamelen van bewijslast, het verwerken van feedback en het schrijven van mijn persoonlijke reflecties. Ook heb ik zelf de marketingteksten geschreven en aangepast op basis van mijn eigen oordeel.
          </p>

          <p className="intro-divider">
            AI heeft mij geholpen om kritischer te kijken naar structuur, formulering en analyse, maar ik heb zelf bepaald wat ik passend vond voor mijn ontwikkeling als commercieel econoom. Mijn leerproces, keuzes en eindconclusies zijn daardoor mijn eigen verantwoordelijkheid.
          </p>
        </div>

        {/* AVG & VERTROUWELIJKHEID */}
        <div className="reveal glow-card intro-card mb24">
          <h2 className="h2-sub-lg">
            <span className="g-text">AVG en vertrouwelijke informatie</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Bij het gebruik van AI heb ik rekening gehouden met privacy en vertrouwelijkheid. Ik heb geen persoonsgegevens van derden zonder toestemming ingevoerd in publieke AI-tools. Ook heb ik geen vertrouwelijke bedrijfsinformatie, klantgegevens of e-mailcorrespondentie ingevoerd. Wanneer ik voorbeelden gebruikte, heb ik deze algemeen gehouden of gebaseerd op informatie die al binnen mijn opdracht gebruikt mocht worden.
          </p>
        </div>

        {/* REFLECTIE */}
        <div className="reveal glow-card intro-card mb40">
          <h2 className="h2-sub-lg">
            <span className="g-text">Reflectie op mijn AI-gebruik</span>
          </h2>
          <div className="divider divider-mb20" />

          <p className="intro-divider">
            Ik vind dat AI mij heeft geholpen om mijn werk kritischer en professioneler te bekijken. Vooral bij mijn vakinhoudelijke doel over AI-gedreven zoekgedrag was AI logisch om te gebruiken, omdat het onderwerp zelf ook over de invloed van AI op marketingteksten gaat. Door met een GEO-analysetool te werken, kreeg ik inzicht in hoe teksten sterker kunnen worden opgebouwd voor lezers en AI-systemen.
          </p>

          <p className="intro-divider">
            Tegelijkertijd merkte ik dat AI-output altijd gecontroleerd moet worden. Niet elke suggestie past automatisch bij mijn doel, mijn schrijfstijl of de context van AllSens. Daarom heb ik steeds afgewogen wat ik wel en niet wilde overnemen. Juist daardoor heeft AI mij niet vervangen, maar geholpen om bewuster keuzes te maken.
          </p>

          <p className="intro-divider">
            Ik kan concluderen dat mijn AI-gebruik verantwoord is geweest. Ik heb AI vermeld, mijn eigen inbreng zichtbaar gehouden en kritisch gereflecteerd op de output. Daarmee past mijn AI-gebruik binnen de richtlijnen van het AI Protocol Commerciële Economie.
          </p>
        </div>

        {/* SCREENSHOTS SECTION */}
        <div className="reveal mb40">
          <h2 className="h2-sub-lg mb24">
            <span className="g-text">Screenshots van AI-gesprekken</span>
          </h2>
          <div className="divider divider-mb40" />

          {/* SCREENSHOT 1 */}
          <div className="glow-card intro-card mb24">
            <h3 className="h3-sub">Screenshot 1: AI gebruiken voor redactie en herschrijven</h3>
            <div style={{ display: "flex", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-1a.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-1a.webp" alt="Screenshot 1a" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-1b.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-1b.webp" alt="Screenshot 1b" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
            </div>
            <div className="intro-divider" style={{ fontSize: "0.9rem", marginBottom: "0" }}>
              <strong>Korte toelichting:</strong> In dit gesprek heb ik AI gebruikt om mijn tekst beter leesbaar te maken. Ik heb de inhoud zelf aangeleverd en daarna beoordeeld of de herschreven versie nog aansloot bij mijn eigen ervaring en schrijfstijl.
            </div>
          </div>

          {/* SCREENSHOT 2 */}
          <div className="glow-card intro-card mb24">
            <h3 className="h3-sub">Screenshot 2: AI gebruiken voor ideeën en structuur</h3>
            <div style={{ display: "flex", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-2a.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-2a.webp" alt="Screenshot 2a" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-2b.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-2b.webp" alt="Screenshot 2b" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
            </div>
            <div className="intro-divider" style={{ fontSize: "0.9rem", marginBottom: "0" }}>
              <strong>Korte toelichting:</strong> In dit gesprek heb ik AI gebruikt als brainstormpartner. De suggesties hielpen mij om mijn ideeën te ordenen, maar ik heb zelf bepaald welke structuur ik uiteindelijk heb gebruikt.
            </div>
          </div>

          {/* SCREENSHOT 3 */}
          <div className="glow-card intro-card mb24">
            <h3 className="h3-sub">Screenshot 3: AI gebruiken voor inhoudelijke uitleg over GEO</h3>
            <div style={{ display: "flex", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-3a.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-3a.webp" alt="Screenshot 3a" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-3b.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-3b.webp" alt="Screenshot 3b" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
            </div>
            <div className="intro-divider" style={{ fontSize: "0.9rem", marginBottom: "0" }}>
              <strong>Korte toelichting:</strong> In dit gesprek heb ik AI gebruikt om beter te begrijpen hoe GEO werkt en hoe marketingteksten kunnen worden afgestemd op AI-zoekgedrag. Ik heb deze output gecontroleerd met aanvullende bronnen en daarna verwerkt in mijn eigen woorden.
            </div>
          </div>

          {/* SCREENSHOT 4a - AFBEELDING GENEREREN */}
          <div className="glow-card intro-card mb24">
            <h3 className="h3-sub">Screenshot 4: AI gebruiken voor afbeelding genereren</h3>
            <div style={{ display: "flex", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-4a.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-4a.webp" alt="Screenshot 4a" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-4a.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-4a.webp" alt="Screenshot 4a" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
            </div>
            <div className="intro-divider" style={{ fontSize: "0.9rem", marginBottom: "0" }}>
              <strong>Korte toelichting:</strong> Deze screenshot laat zien dat ik AI heb gebruikt om een afbeelding te genereren voor mijn document. Dit valt onder niveau 3, omdat AI nieuwe inhoud heeft gemaakt op basis van mijn prompt. Ik heb zelf de opdracht gegeven, beoordeeld of de afbeelding paste bij de uitstraling van mijn document en gecontroleerd of de afbeelding professioneel en relevant genoeg was. De afbeelding is dus niet automatisch overgenomen, maar bewust geselecteerd.
            </div>
          </div>

          {/* SCREENSHOT 4b - GEO-TOOL ANALYSE */}
          <div className="glow-card intro-card mb24">
            <h3 className="h3-sub">Screenshot 5: AI gebruiken bij analyse via de GEO-tool</h3>
            <div style={{ display: "flex", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-4b.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-5a.webp" alt="Screenshot 4b" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
              <div style={{ cursor: "pointer" }} onClick={() => setImgOpen("/afstuderen/pl/screenshot-4b.webp")}>
                <img loading="lazy" decoding="async" src="/afstuderen/pl/screenshot-5b.webp" alt="Screenshot 4b" style={{ maxWidth: "200px", borderRadius: "8px", border: "1px solid rgba(1,63,50,0.12)", display: "block", marginBottom: "6px", cursor: "pointer" }} />
                <div style={{ fontSize: "0.85rem", color: "rgba(1,63,50,0.6)", textAlign: "center" }}>📸 Klik</div>
              </div>
            </div>
            <div className="intro-divider" style={{ fontSize: "0.9rem", marginBottom: "0" }}>
              <strong>Korte toelichting:</strong> In dit gesprek of deze tool-output is zichtbaar hoe AI is gebruikt om een tekst te analyseren. De AI gaf scores en verbeterpunten. Ik heb deze feedback kritisch beoordeeld en alleen verbeteringen doorgevoerd die logisch en passend waren.
            </div>
          </div>
        </div>

        {/* FOOTER NAV */}
        <div className="footer-nav-mt80">
          <a href="/Afstuderen/eindreflectie" className="btn-ghost btn-sm-pad24">← Vorige: Eindreflectie</a>
          <a href="/Afstuderen/literatuurlijst" className="btn btn-sm-pad24">Volgende: Literatuurlijst →</a>
        </div>
      </article>
    </main>
  );
}
