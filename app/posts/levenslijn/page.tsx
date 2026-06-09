import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="levenslijn" title="Levenslijn oefening" date="2 okt 2024" readTime="1 minuten" img="/home/levenslijn.png" likes={2} comments={2}>
      <div className="reveal glow-card glow-card-p40 glow-card-mb24">
        <p>Hieronder is mijn levenslijn weergegeven, vol met hoogte- en dieptepunten.</p>
      </div>
      <div className="levenslijn-grid">
        <div className="reveal glow-card glow-card-p24">
          <p className="levenslijn-label levenslijn-label-purple">Hoogtepunten</p>
          {["Mijn geboorte", "Diploma's behaald", "Rijbewijs gehaald", "Op vakantie gaan"].map((item, i) => (
            <div key={i} className="levenslijn-item">{item}</div>
          ))}
        </div>
        <div className="reveal glow-card glow-card-p24">
          <p className="levenslijn-label levenslijn-label-indigo">Dieptepunten</p>
          {["Het verlies van mijn oom", "1e halfjaar op mijzelf wonen in Den Bosch", "Jonger was mijn nicht een halfjaar niet zien", "Ruzies"].map((item, i) => (
            <div key={i} className="levenslijn-item-indigo">{item}</div>
          ))}
        </div>
      </div>
    </PostLayout>
  );
}
