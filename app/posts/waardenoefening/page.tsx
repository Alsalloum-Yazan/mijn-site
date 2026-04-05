import PostLayout from "../../PostLayout";

const waarden = [
  { waarde: "Discipline", score: 2, uitleg: "Ik ben zelf niet echt gestructureerd." },
  { waarde: "Plezier", score: 5, uitleg: "Er is niets zo belangrijk als iets kunnen doen waar je plezier uithaalt." },
  { waarde: "Zekerheid", score: 3, uitleg: "Ik vind het fijn om bepaalde zekerheid te hebben." },
  { waarde: "Eerlijkheid", score: 5, uitleg: "Uit ervaring weet ik dat ik soms iets te eerlijk ben." },
  { waarde: "Gezondheid", score: 5, uitleg: "Er is niets zo belangrijk als gezond zijn en je vitaal goed te voelen, veruit op plek 1!" },
  { waarde: "Liefde", score: 5, uitleg: "Cliché maar zeker waar, er is niets mooier dan liefde!" },
  { waarde: "Vriendschap", score: 5, uitleg: "Fijne vriendinnen waar tegen je alles kan zeggen is super belangrijk voor mij." },
  { waarde: "Openheid", score: 5, uitleg: "Ik ben mega open over alles wat ik zie, meemaak of heb meegemaakt." },
  { waarde: "Optimisme", score: 5, uitleg: "Elke dag moet gevierd worden alsof de zon schijnt." },
  { waarde: "Waardering", score: 5, uitleg: "Voor mij is het super belangrijk om bevestiging te krijgen over wat ik goed doe." },
  { waarde: "Integriteit", score: 5, uitleg: "Ik zou altijd eerlijk uitkomen over de fouten die ik maak." },
  { waarde: "Toewijding", score: 5, uitleg: "Ik vind het zo belangrijk dat een ander ervaart hoeveel ik van diegene hou." },
  { waarde: "Loyaliteit", score: 4, uitleg: "Er is niets zo belangrijk als loyaal zijn." },
  { waarde: "Humor", score: 4, uitleg: "Ik lach graag iedere dag, daarbij vind ik snel dingen grappig." },
  { waarde: "Vertrouwen", score: 4, uitleg: "Er op kunnen vertrouwen dat wat je vertelt tussen ons blijft." },
  { waarde: "Macht", score: 1, uitleg: "Ik vind macht een verschrikkelijk naar woord." },
  { waarde: "Bezit", score: 1, uitleg: "Los van mijn knuffels hecht ik niet veel waarde aan het bezitten van dingen." },
  { waarde: "Onafhankelijkheid", score: 1, uitleg: "Ik ben het grootste aanhankelijkste dier op aarde." },
];

export default function Page() {
  return (
    <PostLayout slug="waardenoefening" title="Waardenoefening" date="2 okt 2024" readTime="5 minuten" img={null} likes={0} comments={0}>
      <div className="reveal glow-card" style={{ padding: "32px", borderRadius: "24px", marginBottom: "32px" }}>
        <p style={{ marginBottom: "16px" }}>Hieronder heb ik de waardenoefening uitgevoerd, hierbij heb ik aangegeven hoe belangrijk de onderstaande waarden voor mij zijn.</p>
        <p style={{ color: "#a78bfa", fontWeight: 600 }}>De 3 belangrijkste waarden: Gezondheid — Liefde — Openheid</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {waarden.map((w, i) => (
          <div key={i} className="reveal glow-card" style={{ padding: "20px 24px", borderRadius: "16px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "16px", transitionDelay: `${i * 40}ms` }}>
            <div>
              <p style={{ fontWeight: 600, color: "#e2e2f0", marginBottom: "4px", fontSize: "14px" }}>{w.waarde}</p>
              <p style={{ fontSize: "13px", color: "#6060a0" }}>{w.uitleg}</p>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              {[1,2,3,4,5].map(n => (
                <div key={n} style={{ width: "8px", height: "8px", borderRadius: "50%", background: n <= w.score ? "linear-gradient(135deg, #a78bfa, #818cf8)" : "rgba(167,139,250,0.15)" }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PostLayout>
  );
}