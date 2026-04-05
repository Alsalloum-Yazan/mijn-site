import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="logboek-energie" title="Logboek - energie" date="8 jan 2025" readTime="1 minuten" img="/home/energie.png" likes={1} comments={0}>
      <div className="reveal glow-card" style={{ padding: "40px", borderRadius: "24px" }}>
        <p style={{ marginBottom: "16px" }}>Ik heb de oefening energie gedaan, aan de hand van verschillende situaties die zich hebben voorgedaan.</p>
        <div style={{ overflowX: "auto", marginTop: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr>
                {["Logboek", "Betrokken", "Energie"].map((h, i) => (
                  <th key={i} style={{ padding: "12px 16px", background: "rgba(167,139,250,0.1)", color: "#a78bfa", fontWeight: 700, textAlign: "left", borderBottom: "1px solid rgba(167,139,250,0.15)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Business Communication afronden", "Hoog", "Hoog"],
                ["Conflict thuis", "Hoog", "Laag"],
                ["Heftig nieuwsbericht", "Laag", "Laag"],
                ["Wandelen (10.000 stappen)", "Hoog", "Hoog"],
                ["In de file gestaan", "Hoog", "Laag"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "12px 16px", borderBottom: "1px solid rgba(167,139,250,0.06)", color: j === 0 ? "#c0c0e0" : cell === "Hoog" ? "#a78bfa" : "#6366f1", fontWeight: j > 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PostLayout>
  );
}