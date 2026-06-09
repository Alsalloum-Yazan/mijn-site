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
        <div key={i} className="reveal glow-card glow-card-p36 glow-card-mb20">
          <div className="doel-header-row">
            <h2 className="post-h2-lg"><span className="g-text">{doel.title}</span></h2>
            <span className="period-badge">{doel.period}</span>
          </div>
          <p className="post-p-sm-mb24">{doel.text}</p>
          <p className="acties-label">Concrete acties</p>
          {doel.acties.map((actie, j) => (
            <div key={j} className="actie-item">
              <div className="actie-dot" />
              <p className="actie-text">{actie}</p>
            </div>
          ))}
        </div>
      ))}
    </PostLayout>
  );
}
