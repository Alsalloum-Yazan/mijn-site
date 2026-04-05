import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="persoonlijke-doelen-periode-1" title="Persoonlijke ontwikkelingsdoelen periode 1" date="23 sep 2024" readTime="2 minuten" img={null} likes={0} comments={0}>
      {[
        {
          title: "Assertiviteit",
          period: "20-09-2024 t/m 20-01-2025",
          text: "In de komende periode wil ik ervoor zorgen dat ik beter word in het tonen van assertiviteit, door mijn gevoel/mening goed te kunnen formuleren, zonder daarbij de waarde van de ander te verliezen.",
          acties: ["Een logboek houden, waarin ik noteer op welke momenten ik voor mijzelf ben opgekomen.", "Een podcast beluisteren over hoe je op een goede manier voor jezelf kunt opkomen.", "Een feedback test uitvoeren."]
        },
        {
          title: "Storytelling",
          period: "20-09-2024 t/m 20-01-2025",
          text: "In de komende periode wil ik ervoor zorgen dat ik beter word in storytelling. Ik wil storytelling op werkveld beter ontdekken, maar dit ook door vertalen naar mijn privéleven.",
          acties: ["Oefenen door te praten in conclusies, en overbodige details achterwege te laten.", "Mijn manier van verhalen vertellen aanpassen op tegen wie ik aan het praten ben.", "Het leren toepassen van structuur in mijn praten, met een centraal probleem/uitdaging."]
        },
      ].map((doel, i) => (
        <div key={i} className="reveal glow-card" style={{ padding: "36px", borderRadius: "24px", marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
            <h2 style={{ fontSize: "1.3rem" }}><span className="g-text">{doel.title}</span></h2>
            <span style={{ fontSize: "12px", color: "#4040a0", background: "rgba(167,139,250,0.05)", border: "1px solid rgba(167,139,250,0.1)", borderRadius: "50px", padding: "4px 12px" }}>{doel.period}</span>
          </div>
          <p style={{ marginBottom: "24px", fontSize: "14px" }}>{doel.text}</p>
          <p style={{ fontSize: "11px", color: "#a78bfa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Concrete acties</p>
          {doel.acties.map((actie, j) => (
            <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "10px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a78bfa", marginTop: "7px", flexShrink: 0 }} />
              <p style={{ fontSize: "13.5px", color: "#8080a0", margin: 0 }}>{actie}</p>
            </div>
          ))}
        </div>
      ))}
    </PostLayout>
  );
}