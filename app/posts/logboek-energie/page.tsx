import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="logboek-energie" title="Logboek - energie" date="8 jan 2025" readTime="1 minuten" img="/home/energie.png" likes={1} comments={0}>
      <div className="reveal glow-card glow-card-p40">
        <p className="post-p-mb16">Ik heb de oefening energie gedaan, aan de hand van verschillende situaties die zich hebben voorgedaan.</p>
        <div className="logboek-table-wrap">
          <table className="logboek-table">
            <thead>
              <tr>
                {["Logboek", "Betrokken", "Energie"].map((h, i) => (
                  <th key={i} className="logboek-th">{h}</th>
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
                    <td key={j} className={`logboek-td ${j === 0 ? "logboek-td-text" : cell === "Hoog" ? "logboek-td-hoog" : "logboek-td-laag"}`}>{cell}</td>
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
