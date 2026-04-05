import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="levenslijn" title="Levenslijn oefening" date="2 okt 2024" readTime="1 minuten" img="/home/levenslijn.png" likes={2} comments={2}>
      <div className="reveal glow-card" style={{ padding: "40px", borderRadius: "24px", marginBottom: "24px" }}>
        <p>Hieronder is mijn levenslijn weergegeven, vol met hoogte- en dieptepunten.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div className="reveal glow-card" style={{ padding: "24px", borderRadius: "20px" }}>
          <p style={{ fontSize: "11px", color: "#a78bfa", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>Hoogtepunten</p>
          {["Mijn geboorte", "Diploma's behaald", "Rijbewijs gehaald", "Op vakantie gaan"].map((item, i) => (
            <div key={i} style={{ padding: "10px 14px", background: "rgba(167,139,250,0.05)", border: "1px solid rgba(167,139,250,0.1)", borderRadius: "10px", marginBottom: "8px", fontSize: "13.5px", color: "#c0c0e0" }}>{item}</div>
          ))}
        </div>
        <div className="reveal glow-card" style={{ padding: "24px", borderRadius: "20px" }}>
          <p style={{ fontSize: "11px", color: "#6366f1", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>Dieptepunten</p>
          {["Het verlies van mijn oom", "1e halfjaar op mijzelf wonen in Den Bosch", "Jonger was mijn nicht een halfjaar niet zien", "Ruzies"].map((item, i) => (
            <div key={i} style={{ padding: "10px 14px", background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.1)", borderRadius: "10px", marginBottom: "8px", fontSize: "13.5px", color: "#c0c0e0" }}>{item}</div>
          ))}
        </div>
      </div>
    </PostLayout>
  );
}