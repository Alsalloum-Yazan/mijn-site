"use client";

const LogboekCard = ({ situatie, datum, tekst }: { situatie: string, datum: string, tekst: string }) => (
  <div
    className="glow-card card-hover"
    style={{
      padding: "28px 32px",
      borderRadius: "20px",
      border: "1px solid rgba(167,139,250,0.15)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "3px",
        height: "100%",
        background: "linear-gradient(180deg, #7c3aed, #4f46e5)",
        borderRadius: "20px 0 0 20px",
      }}
    />
    <div style={{ paddingLeft: "8px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "12px",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e2f0", margin: 0 }}>
          {situatie}
        </h3>
        <span
          style={{
            fontSize: "12px",
            color: "#a78bfa",
            background: "rgba(167,139,250,0.1)",
            border: "1px solid rgba(167,139,250,0.2)",
            padding: "3px 10px",
            borderRadius: "20px",
            fontWeight: 600,
          }}
        >
          {datum}
        </span>
      </div>
      <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: 0 }}>
        {tekst}
      </p>
    </div>
  </div>
);

const SectionDivider = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(167,139,250,0.3), transparent)" }} />
    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#a78bfa", textTransform: "uppercase", whiteSpace: "nowrap" }}>
      {label}
    </span>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(270deg, rgba(167,139,250,0.3), transparent)" }} />
  </div>
);

export default function ActiesPage() {
  const logboekDeel1 = [
    {
      situatie: "In de supermarkt",
      datum: "14 oktober 2024",
      tekst:
        "Ik stond in de rij bij de kassa en opeens probeerde iemand voor te dringen. Normaal zou ik niets zeggen en het maar laten gebeuren, maar deze keer bleef ik kalm en zei ik: \"Sorry, maar ik stond hier al.\" Het voelde goed om voor mezelf op te komen zonder onbeleefd te zijn.",
    },
    {
      situatie: "Op werk/school",
      datum: "3 november 2024",
      tekst:
        "Een collega vroeg of ik een taak kon overnemen terwijl ik al druk bezig was met mijn eigen werk. Vroeger had ik misschien toegegeven om niemand teleur te stellen, maar deze keer zei ik vriendelijk maar duidelijk: \"Ik zou je graag willen helpen, maar ik heb nu echt geen ruimte in mijn planning.\"",
    },
    {
      situatie: "Bij vrienden",
      datum: "1 oktober 2024",
      tekst:
        "Tijdens een avondje uit stelde iemand voor om naar een club te gaan, terwijl ik me daar niet comfortabel bij voelde. Vroeger zou ik misschien gewoon meegaan om de sfeer niet te verpesten, maar deze keer zei ik: \"Ik denk dat ik deze keer oversla, maar ik wacht wel op jullie of zie jullie later weer.\" Tot mijn verbazing vonden ze het helemaal prima, en ik voelde me trots dat ik mijn eigen voorkeur uitsprak.",
    },
  ];

  const logboekDeel2 = [
    {
      situatie: "In het OV",
      datum: "31 december 2024",
      tekst:
        "Ik zat in een drukke bus en iemand zette zijn tas op de stoel naast zich, terwijl er mensen stonden. Ik besloot er iets van te zeggen en vroeg beleefd: \"Mag ik daar gaan zitten, alstublieft?\" De persoon keek even verbaasd, maar schoof zijn tas opzij. Het voelde goed om niet stil te blijven en mezelf te laten horen.",
    },
    {
      situatie: "In een winkel",
      datum: "6 januari 2025",
      tekst:
        "Ik had een jas gekocht die na een week al beschadigd was. Normaal zou ik twijfelen of ik wel terug moest gaan, maar dit keer besloot ik meteen actie te ondernemen. Ik liep naar de winkel en zei: \"Deze jas heeft binnen een week schade gekregen, en ik zou graag willen weten hoe dit opgelost kan worden.\" De medewerker was heel begripvol en bood een vervanging aan.",
    },
    {
      situatie: "Tijdens een kerstdiner",
      datum: "22 december 2024",
      tekst:
        "Ik was in een discussie met mijn vriendinnengroep en iemand maakte een opmerking waar ik het totaal niet mee eens was. In plaats van mijn mond te houden, zei ik rustig: \"Ik zie het anders. Mag ik uitleggen waarom?\" Het gesprek verliep daarna veel respectvoller, en ik was blij dat ik mijn mening had gedeeld.",
    },
  ];

  const logboekDeel3 = [
    {
      situatie: "Thuis met familie",
      datum: "5 januari 2025",
      tekst:
        "Mijn familie vroeg of ik kon helpen met een klus terwijl ik eigenlijk even rust nodig had. In plaats van automatisch ja te zeggen, vertelde ik eerlijk: \"Ik wil straks wel helpen, maar nu heb ik even tijd voor mezelf nodig.\" Ze reageerden begripvol, en ik voelde me goed dat ik mijn eigen grenzen bewaakte.",
    },
    {
      situatie: "Bij de dokter",
      datum: "20 november 2024",
      tekst:
        "Ik had een afspraak met een dokter en kreeg een advies waar ik vragen over had. In plaats van het klakkeloos aan te nemen, vroeg ik door: \"Kunt u uitleggen waarom dit de beste optie is? Zijn er alternatieven?\" Dat gaf me een beter begrip en meer vertrouwen in de beslissing.",
    },
  ];

  return (
    <main>
      <article className="content-page">

        {/* ── Header ── */}
        <div className="reveal">
          <a
            href="/jaar-2"
            style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}
          >
            ← Terug naar Jaar 2
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 2
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mijn <span className="g-text">acties</span>
          </h1>
          <div className="divider" style={{ marginBottom: "40px" }} />
        </div>

        {/* ── Doel 1: Assertiviteit ── */}
        <div className="reveal" style={{ transitionDelay: "60ms", marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "32px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px", fontWeight: 900, color: "white",
              boxShadow: "0 6px 24px rgba(124,58,237,0.35)",
            }}>
              01
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#6060a0", textTransform: "uppercase", marginBottom: "4px" }}>
                Doel 1
              </div>
              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", margin: 0, color: "#e2e2f0" }}>
                Assertiviteit
              </h2>
            </div>
          </div>

          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#8080a0", marginBottom: "40px", maxWidth: "680px" }}>
            Aan de hand van de afgelopen periode heb ik mijn eigen assertiviteit waargenomen. Hieronder staan concrete situaties waarin ik bewust assertief heb gehandeld.
          </p>

          <SectionDivider label="Logboek assertiviteit — Deel 1" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginBottom: "40px" }}>
            {logboekDeel1.map((item, i) => <LogboekCard key={i} {...item} />)}
          </div>

          <SectionDivider label="Logboek assertiviteit — Deel 2" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginBottom: "40px" }}>
            {logboekDeel2.map((item, i) => <LogboekCard key={i} {...item} />)}
          </div>

          <SectionDivider label="Logboek assertiviteit — Deel 3" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
            {logboekDeel3.map((item, i) => <LogboekCard key={i} {...item} />)}
          </div>
        </div>

        {/* ── Doel 2: Stage ── */}
        <div className="reveal" style={{ transitionDelay: "120ms", marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "32px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px", fontWeight: 900, color: "white",
              boxShadow: "0 6px 24px rgba(79,70,229,0.35)",
            }}>
              02
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#6060a0", textTransform: "uppercase", marginBottom: "4px" }}>
                Doel 2
              </div>
              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", margin: 0, color: "#e2e2f0" }}>
                Op zoek naar een stageplaats
              </h2>
            </div>
          </div>

          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#8080a0", marginBottom: "40px", maxWidth: "680px" }}>
            Doel 2 is onder doel 1 terug te vinden. Hieronder de acties die zijn ondernomen rondom het vinden van een stageplaats.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginBottom: "24px" }}>
            {[
              { stap: "Doelen opstellen", desc: "In kaart brengen naar wat voor soort stage ik op zoek ben, zodat ik doelgericht kan zoeken." },
              { stap: "CV aanpassen", desc: "CV aangevuld met updates en in een andere stijl vormgegeven — passend bij mijn huidige stijl." },
              { stap: "Bedrijven contacteren", desc: "Fingerspitz, LVNG, Craze en GR8 gecontacteerd. Niet afwachtend, maar proactief meerdere bedrijven benaderd." },
              { stap: "Herinneringen sturen", desc: "Na het niet ontvangen van een reactie na een week (in werkdagen) herinneringen gestuurd." },
            ].map((item, i) => (
              <div
                key={i}
                className="glow-card"
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  border: "1px solid rgba(79,70,229,0.2)",
                  background: "radial-gradient(ellipse at top left, rgba(79,70,229,0.08), transparent 60%), rgba(255,255,255,0.02)",
                }}
              >
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px",
                  background: "rgba(79,70,229,0.2)", border: "1px solid rgba(79,70,229,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 800, color: "#818cf8",
                  marginBottom: "16px",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e2f0", marginBottom: "10px", margin: "0 0 10px" }}>
                  {item.stap}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#8080a0", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Reflectie */}
          <div
            className="glow-card"
            style={{
              padding: "28px 32px",
              borderRadius: "20px",
              border: "1px solid rgba(167,139,250,0.12)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>💬</div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#a78bfa", textTransform: "uppercase", marginBottom: "10px" }}>
                  Reflectie
                </div>
                <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: 0 }}>
                  Het vinden van een stageplaats bleef ondanks de verschillende focuspunten niet gemakkelijk. Waar ik van twee bedrijven hoop heb gekregen, bleef een definitief resultaat helaas uit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer nav ── */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <a href="/jaar-2" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 2</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}