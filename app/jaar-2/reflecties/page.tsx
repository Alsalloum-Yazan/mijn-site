"use client";

import React, { useState } from 'react';

export default function ReflectiePage() {
  return (
    <main>
      <article className="content-page">
        <div className="reveal">
          <a href="/jaar-4" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Terug naar Jaar 4
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Zelfreflectie
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">Reflecties</span>
          </h1>
          <p style={{ marginBottom: "40px", fontSize: "1.1rem", color: "#e2e2f0", maxWidth: "800px" }}>
            Hier reflecteer ik op de afgelopen periode. Ik kijk naar wat goed gaat en waar voor mij op persoonlijk vlak nog verbeteringen liggen aan de hand van de STARR-methode.
          </p>
          <div className="divider" style={{ marginBottom: "64px" }} />
        </div>

        {/* Sectie: Doel 1 */}
        <section className="reveal" style={{ marginBottom: "80px" }}>
          <h2 style={{ color: "#a78bfa", marginBottom: "32px", fontSize: "1.8rem" }}>Doel 1: Vergroten van Assertiviteit</h2>
          <div style={{ display: "grid", gap: "24px" }}>
            <StarrCard 
              title="Reflectie 1: Assertief gedrag en passiviteit"
              s="Ik heb moeite om assertief te zijn en neig naar passief gedrag, zoals confrontaties vermijden en moeite hebben met 'nee' zeggen in groepen."
              t="Groeien in assertiviteit om eigen behoeften respectvol te uiten en grenzen te leren aangeven."
              a="Oefenen met de ik-vorm, standpunten rustig presenteren en bewust 'nee' zeggen tegen sociale druk."
              r="Kleine successen behaald door 'nee' te zeggen tegen een afspraak en bewuster worden van mijn patronen."
              reflect="Ik begrijp nu dat mijn passiviteit deels voortkomt uit opvoeding en onzekerheid; kleine stappen zijn essentieel."
            />
            <StarrCard 
              title="Reflectie 2: De Assertiviteitstest"
              s="Vooraf verwachtte ik een negatieve uitslag van de assertiviteitstest vanwege mijn ervaren terughoudendheid."
              t="Inzicht krijgen in mijn werkelijke niveau van assertiviteit via een objectieve test."
              a="De test van Kwadraad eerlijk en zorgvuldig ingevuld."
              r="De test toonde aan dat ik over het algemeen juist wél assertief ben en goed rekening houd met grenzen."
              reflect="Dit resultaat was een verrassende boost voor mijn zelfvertrouwen en motiveert me om door te zetten."
            />
             <StarrCard 
              title="Reflectie 3: Contextafhankelijke Assertiviteit"
              s="Mijn assertiviteit verschilt per omgeving: in veilige kringen gaat het goed, in zakelijke situaties ervaar ik twijfel."
              t="Patronen herkennen en strategieën bedenken voor uitdagende, onbekende situaties."
              a="Situaties geanalyseerd en het volgen van een assertiviteitscursus overwogen voor extra tools."
              r="Besef gekregen dat de basisvaardigheden er al zijn, maar dat onveiligheid blokkades opwerpt."
              reflect="Assertiviteit is een spier die ik al bezit, maar die ik in onzekere situaties extra moet trainen."
            />
            <StarrCard 
              title="Reflectie 4: Praktijktoepassingen"
              s="Diverse situaties (supermarkt, werk, dokter, kerstdiner) waarin assertiviteit nodig was."
              t="Mijn behoeften en grenzen duidelijk maken zodat ik mezelf en anderen mij serieus nemen."
              a="Beleefd voordringers aangesproken, taken geweigerd op werk en kritisch doorgevraagd bij de dokter."
              r="Mijn grenzen werden gerespecteerd en ik voelde me achteraf veel zelfverzekerder."
              reflect="Grote vooruitgang geboekt; ik communiceer nu mijn grenzen zonder onbeleefd te zijn."
            />
          </div>
        </section>

        {/* Sectie: Doel 2 */}
        <section className="reveal" style={{ marginBottom: "80px" }}>
          <h2 style={{ color: "#a78bfa", marginBottom: "32px", fontSize: "1.8rem" }}>Doel 2: Stage en Profilering</h2>
          <div style={{ display: "grid", gap: "24px" }}>
            <StarrCard 
              title="Reflectie 1: Criteria Stageplek"
              s="Ik moest bepalen waaraan een ideale stageplek moet voldoen voor een gerichte zoektocht."
              t="Een concreet profiel opstellen (Online Marketing/Sales, regio Breda, goede begeleiding)."
              a="Interesses en ambities geïnventariseerd en vertaald naar harde criteria."
              r="Een heldere lijst die helpt bij het filteren van vacatures en het voeren van gesprekken."
              reflect="Dit proces gaf me inzicht in mijn eigen sterke punten en wat ik nodig heb om te groeien."
            />
            <StarrCard 
              title="Reflectie 2: Stijl en Persoonlijke Branding"
              s="Behoefte om mijn professionele uitstraling te moderniseren en beter aan te laten sluiten bij mijn groei."
              t="Mijn stijl een upgrade geven zonder mijn authentieke fundament te verliezen."
              a="Kritisch gekeken naar oude elementen, updates doorgevoerd en nieuwe technieken geïmplementeerd."
              r="Een vernieuwde stijl die zowel vertrouwd als vooruitstrevend aanvoelt."
              reflect="Groei vraagt om aanpassingsvermogen; mijn nieuwe stijl reflecteert mijn huidige ambities."
            />
            <StarrCard 
              title="Reflectie 3: Omgaan met Tegenslag (Sollicitaties)"
              s="Zoektocht naar een stage verliep moeizaam; twee hoopvolle bedrijven wezen me af."
              t="Een stage vinden en ondertussen veerkracht behouden na teleurstellingen."
              a="Gericht gezocht en gesolliciteerd bij matches, ondanks afwijzingen doorgezet."
              r="Nog geen plek, maar wel waardevolle lessen geleerd over het proces en mijn eigen houding."
              reflect="Afwijzing hoort bij het pad; het dwingt me om mijn aanpak te verfijnen en scherp te blijven."
            />
          </div>
        </section>

        {/* Footer Navigatie */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-4" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 4</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Naar Home →</a>
        </div>
      </article>
    </main>
  );
}

// Sub-component voor de STARR kaarten
function StarrCard({ title, s, t, a, r, reflect }: { title: string, s: string, t: string, a: string, r: string, reflect: string }) {  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="glow-card" 
      style={{ 
        padding: "24px", 
        borderRadius: "20px", 
        border: "1px solid rgba(167,139,250,0.2)",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontSize: "1.2rem", color: "#e2e2f0", margin: 0 }}>{title}</h3>
        <span style={{ color: "#a78bfa", fontSize: "20px" }}>{isOpen ? '−' : '+'}</span>
      </div>
      
      {isOpen && (
        <div style={{ marginTop: "24px", borderTop: "1px solid rgba(167,139,250,0.1)", paddingTop: "20px" }}>
          <div style={{ display: "grid", gap: "16px", fontSize: "14px", lineHeight: "1.6" }}>
            <p><strong style={{ color: "#a78bfa" }}>Situatie:</strong> <span style={{ color: "#ccc" }}>{s}</span></p>
            <p><strong style={{ color: "#a78bfa" }}>Taak:</strong> <span style={{ color: "#ccc" }}>{t}</span></p>
            <p><strong style={{ color: "#a78bfa" }}>Actie:</strong> <span style={{ color: "#ccc" }}>{a}</span></p>
            <p><strong style={{ color: "#a78bfa" }}>Resultaat:</strong> <span style={{ color: "#ccc" }}>{r}</span></p>
            <p style={{ marginTop: "8px", padding: "12px", background: "rgba(167,139,250,0.05)", borderRadius: "8px", borderLeft: "3px solid #a78bfa" }}>
              <strong style={{ color: "#fff" }}>Reflectie:</strong> <br />
              <span style={{ color: "#e2e2f0" }}>{reflect}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}