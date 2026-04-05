import PostLayout from "../../PostLayout";

export default function Page() {
  return (
    <PostLayout slug="ikigai" title="Wat vind je leuk? — Ikigai — CV van de toekomst" date="23 sep 2024" readTime="6 minuten" img="/posten/CV over 1 jaar.webp" likes={0} comments={0}>
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
        <div key={si} className="reveal glow-card" style={{ padding: "36px", borderRadius: "24px", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "24px" }}><span className="g-text">{section.title}</span></h2>
          {section.items.map((item, ii) => (
            <div key={ii} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: ii < section.items.length - 1 ? "1px solid rgba(167,139,250,0.08)" : "none" }}>
              <p style={{ fontSize: "12px", color: "#a78bfa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{item.q}</p>
              <p style={{ fontSize: "14px", color: "#c0c0e0" }}>{item.a}</p>
            </div>
          ))}
        </div>
      ))}
    </PostLayout>
  );
}