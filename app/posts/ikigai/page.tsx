import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="ikigai" title="Wat vind je leuk? — Ikigai — CV van de toekomst" date="23 sep 2024" readTime="6 minuten" img="/posten/Wat vind je leuk.webp" likes={0} comments={0}>
      {[
        { title: "Wat vind je leuk?", items: [
          { q: "Wanneer vergat je de tijd?", a: "Op vakantie aan het strand. Daar kan ik de gehele dag vertoeven en vliegt de tijd voorbij." },
          { q: "Waar weet jij veel meer over dan anderen?", a: "Ik heb op mijn 16e de overstap van Havo naar Mbo marketing & communicatie genomen. Daarna de AD Marketingmanagement afgerond." },
          { q: "Wat doe je het liefst als geld geen belemmering is?", a: "Een eigen bedrijf beginnen, investeren in een fijne woning, een auto kopen en iedere dag eten bestellen of uiteten." },
        ]},
        { title: "Ikigai", items: [
          { q: "Wat vind je leuk?", a: "Buiten wandelen, terrassen en naar het strand gaan. Daarnaast lang tafelen voor/na het eten." },
          { q: "Waar ben je goed in?", a: "Ik leg vrij gemakkelijk contact met anderen en merk vaak enthousiaste interactie terug." },
          { q: "Jouw Ikigai", a: "De behoefte aan sociaal contact komt sterk naar voren. Mijn roeping is om in contact te staan met anderen." },
        ]},
        { title: "Meegebracht voorwerp", items: [
          { q: "Voorwerp: Oester/schelp", a: "Ik kom uit Zeeland. Ik ben dol op de zee. Verder is alles beige en goud." },
        ]},
      ].map((section, si) => (
        <div key={si} className="reveal glow-card glow-card-p36 glow-card-mb20">
          <h2 className="post-h2"><span className="g-text">{section.title}</span></h2>
          {section.items.map((item, ii) => (
            <div key={ii} className={`${ii < section.items.length - 1 ? "qa-section-mb qa-border-b" : "qa-section-last"}`}>
              <p className="qa-question">{item.q}</p>
              <p className="qa-answer">{item.a}</p>
            </div>
          ))}
        </div>
      ))}
    </PostLayout>
  );
}
