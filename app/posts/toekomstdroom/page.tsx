import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="toekomstdroom" title="Toekomstdroom" date="2 okt 2024" readTime="3 minuten" img={null} likes={0} comments={0}>
      {[
        { num: "1", title: "Scenario 1 — Voortzetting van mijn huidige leven", text: "Ik werk in een uitdagende baan in de marketing waar ik steeds meer verantwoordelijkheid krijg. Ik groei door naar een managementrol waarin ik niet alleen creatieve campagnes ontwikkel, maar ook een team aanstuur. Na een paar jaar sparen heb ik mijn droomhuis aan de kust in Spanje." },
        { num: "2", title: "Scenario 2 — Als dit niet lukt", text: "Als mijn huidige pad niet werkt, durf ik een compleet nieuwe richting in te slaan. Misschien start ik mijn eigen bedrijf, bijvoorbeeld een platform waar mensen unieke reizen naar Spanje kunnen boeken. Ik besteed ook meer tijd aan persoonlijke ontwikkeling." },
        { num: "3", title: "Scenario 3 — Als geld geen obstakel is", text: "Als geld geen probleem zou zijn, zou ik eerst een wereldreis maken. Daarna koop ik een prachtig vakantiehuis in Spanje, met een zwembad en een uitzicht op zee. Ik zou ook retreats organiseren waarin ik mijn marketingkennis deel." },
      ].map((s, i) => (
        <div key={i} className="reveal glow-card glow-card-p36 glow-card-mb20" style={{ transitionDelay: `${i * 100}ms` }}>
          <div className="scenario-inner">
            <div className="scenario-num-icon">{s.num}</div>
            <div>
              <h3 className="post-h3">{s.title}</h3>
              <p className="post-p-sm">{s.text}</p>
            </div>
          </div>
        </div>
      ))}
    </PostLayout>
  );
}
