"use client";

const SectionDivider = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(167,139,250,0.3), transparent)" }} />
    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#a78bfa", textTransform: "uppercase", whiteSpace: "nowrap" }}>
      {label}
    </span>
    <div style={{ height: "1px", flex: 1, background: "linear-gradient(270deg, rgba(167,139,250,0.3), transparent)" }} />
  </div>
);

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div
    className="glow-card"
    style={{
      borderRadius: "20px",
      border: "1px solid rgba(167,139,250,0.15)",
      overflow: "hidden",
    }}
  >
    <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
  </div>
);

const VraagCard = ({ categorie, vragen }: { categorie: string; vragen: string[] }) => (
  <div
    className="glow-card"
    style={{
      padding: "28px 32px",
      borderRadius: "20px",
      border: "1px solid rgba(167,139,250,0.15)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "3px",
        height: "100%",
        background: "linear-gradient(180deg, #7c3aed, #4f46e5)",
        borderRadius: "20px 0 0 20px",
      }}
    />
    <div style={{ paddingLeft: "8px" }}>
      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e2f0", marginBottom: "16px" }}>
        {categorie}
      </h3>
      <div style={{ display: "grid", gap: "10px" }}>
        {vragen.map((v, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span style={{
              fontSize: "11px", fontWeight: 700, color: "#a78bfa",
              background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)",
              padding: "2px 8px", borderRadius: "20px", flexShrink: 0, marginTop: "2px",
            }}>
              {String(i + 1)}
            </span>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#b0b0cc", margin: 0 }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LinkCard = ({ label, href }: { label: string; href: string }) => (
  
   <a  href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="glow-card card-hover"
    style={{
      padding: "20px 28px",
      borderRadius: "20px",
      border: "1px solid rgba(167,139,250,0.15)",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
    }}
  >
    <span style={{ fontSize: "14px", fontWeight: 600, color: "#e2e2f0" }}>{label}</span>
    <span style={{ color: "#a78bfa", fontSize: "16px", flexShrink: 0 }}>→</span>
  </a>
);

export default function ThuisblijfprogrammaPage() {
  return (
    <main>
      <article className="content-page">

        {/* ── Header ── */}
        <div className="reveal">
          
           <a href="/jaar-4"
            style={{
              fontSize: "13px",
              color: "#a78bfa",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "32px",
            }}
          >
            ← Terug naar Jaar 4
          </a>
          <div className="badge" style={{ marginBottom: "24px" }}>
            <span className="badge-dot" />
            Jaar 4
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            Het <span className="g-text">thuisblijfprogramma</span>
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#8080a0", marginBottom: "40px", maxWidth: "680px" }}>
            Tijdens de studiereis naar Hamburg heb ik gewerkt aan andere opdrachten. De opdrachten zijn in dit hoofdstuk verder uitgewerkt.
          </p>
          <div className="divider" style={{ marginBottom: "40px" }} />
        </div>

        {/* ── Opdracht 1: Bedrijfsbezoek B-corp ── */}
        <div className="reveal" style={{ transitionDelay: "60ms", marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "32px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px", fontWeight: 900, color: "white",
              boxShadow: "0 6px 24px rgba(124,58,237,0.35)",
            }}>
              01
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#6060a0", textTransform: "uppercase", marginBottom: "4px" }}>
                Opdracht 1
              </div>
              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", margin: 0, color: "#e2e2f0" }}>
                Bedrijfsbezoek B-corp
              </h2>
            </div>
          </div>

          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#8080a0", marginBottom: "32px", maxWidth: "680px" }}>
            Ik ben samen met Martijn Godding en Thijs van Leersum langsgegaan bij Solvid in Tilburg met Dennis Stad. Het was een aangenaam bezoek, er kwamen zelfs twee andere stagiaires bij het gesprek zitten, die momenteel zich volledig aan het verdiepen in de B-corp certificering, welke na een paar jaar verloopt.
          </p>

          <SectionDivider label="1.1 Vooronderzoek" />
          <div
            className="glow-card"
            style={{
              padding: "28px 32px",
              borderRadius: "20px",
              border: "1px solid rgba(167,139,250,0.12)",
              background: "rgba(255,255,255,0.02)",
              marginBottom: "32px",
            }}
          >
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: "0 0 16px" }}>
              Solvid Ondernemen uit Tilburg is een organisatie die sinds 2023 officieel is gecertificeerd als B-Corp. Een B-Corp is een bedrijf dat aantoont op een verantwoorde en transparante manier te werken, waarbij niet alleen winst telt, maar ook maatschappelijke en ecologische impact. De certificering wordt toegekend door B-Lab en beoordeelt bedrijven op thema's zoals goed bestuur, aandacht voor medewerkers, maatschappelijke bijdrage, milieuzorg en klantgerichtheid. Alleen organisaties die minimaal tachtig punten behalen in de B-Impact Assessment ontvangen het keurmerk.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: "0 0 16px" }}>
              Voor Solvid sluit deze manier van werken aan bij hun dagelijkse praktijk. Het bedrijf ondersteunt mensen met een uitkering die een eigen onderneming willen starten, waardoor sociale impact centraal staat in hun dienstverlening. Met een score van 110,9 punten laat Solvid zien dat deze maatschappelijke missie niet alleen in woorden bestaat, maar ook terugkomt in hun processen, beleid en organisatiecultuur.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: 0 }}>
              De B-Corp status benadrukt dat Solvid kiest voor een brede verantwoordelijkheid richting alle betrokkenen: cliënten, medewerkers, partners en de samenleving. Transparantie over impact en continue verbetering zijn belangrijke onderdelen van het certificaat. Daarmee vormt Solvid een voorbeeld van hoe een dienstverlenende organisatie de B-Corp principes kan toepassen en duurzaam ondernemen kan verankeren in de volledige bedrijfsvoering.
            </p>
          </div>

          <SectionDivider label="1.2 Vooraf opgestelde vragen" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginBottom: "32px" }}>
            <VraagCard
              categorie="1. Economisch (Bedrijf & winst)"
              vragen={[
                "Hoe werkt jullie bedrijf en wat verkopen jullie precies?",
                "Wat levert de B-Corp certificering jullie op als bedrijf?",
                "Helpt B-Corp certificering jullie bij het maken van winst en groeien?",
                "Zijn er speciale dingen die jullie meten om te zien hoe goed het gaat?",
              ]}
            />
            <VraagCard
              categorie="2. Sociaal (Mensen & samenleving)"
              vragen={[
                "Hoe zorgen jullie dat medewerkers en klanten zich goed voelen bij het bedrijf?",
                "Hebben jullie iets veranderd in hoe jullie met mensen werken om B-Corp te halen?",
                "Werken jullie samen met de gemeenschap of doen jullie maatschappelijke projecten?",
                "Letten jullie op diversiteit en gelijke kansen bij het aannemen van mensen?",
              ]}
            />
            <VraagCard
              categorie="3. Ecologisch (Milieu)"
              vragen={[
                "Wat doen jullie om minder impact op het milieu te hebben?",
                "Kiezen jullie duurzame leveranciers of materialen?",
                "Hoe meten jullie of jullie duurzaam bezig zijn?",
                "Wat is het moeilijkst aan milieuvriendelijk werken?",
              ]}
            />
            <VraagCard
              categorie="4. Over B-Corp certificering"
              vragen={[
                "Waarom wilden jullie B-Corp worden?",
                "Wat was het makkelijkste en moeilijkste aan het certificeringsproces?",
                "Hoe laten jullie klanten en partners weten dat jullie B-Corp zijn?",
                "Welke tip zouden jullie geven aan andere bedrijven die B-Corp willen worden?",
              ]}
            />
          </div>

          <SectionDivider label="1.3 Link — Interview" />
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", marginBottom: "16px" }}>
              We spraken met de eigenaar en twee stagiaires, die hij op dit moment in dienst heeft. Het interview is opgenomen:
            </p>
            <LinkCard label="Gesprek Solvid over B-Corp" href="https://mymedia.avans.nl/media/Gesprek+Solvid+over+B-Corp/0_xs4jcag4" />
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: "16px 0 0" }}>
              Daarnaast is er een foto gemaakt ter bewijslast, dat we er daadwerkelijk geweest zijn, zie bijlage Foto bij Solvid Ondernemen.
            </p>
          </div>

          <SectionDivider label="1.4 Link — Videopitch" />
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", marginBottom: "16px" }}>
              Het interview was erg interessant in de videopitch, ligt ik dit verder toe:
            </p>
            <LinkCard label="Videopitch bedrijfsbezoek" href="https://mymedia.avans.nl/media/Videopitch+bedrijfsbezoek/0_qq24tyie" />
          </div>
        </div>

        {/* ── Opdracht 2: Videopitch PL ── */}
        <div className="reveal" style={{ transitionDelay: "80ms", marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "32px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px", fontWeight: 900, color: "white",
              boxShadow: "0 6px 24px rgba(79,70,229,0.35)",
            }}>
              02
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#6060a0", textTransform: "uppercase", marginBottom: "4px" }}>
                Opdracht 2
              </div>
              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", margin: 0, color: "#e2e2f0" }}>
                Video pitch 1 PL in Breda
              </h2>
            </div>
          </div>

          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#8080a0", marginBottom: "24px", maxWidth: "680px" }}>
            Onderstaand de link naar mijn videopitch over mijn PL doelen afgelopen jaren en voortgang.
          </p>
          <LinkCard label="Videopitch Breda" href="https://mymedia.avans.nl/media/Videopitch+Breda/0_hgagtbl1" />
        </div>

        {/* ── Opdracht 3: Videopitch NGO ── */}
        <div className="reveal" style={{ transitionDelay: "100ms", marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "32px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px", fontWeight: 900, color: "white",
              boxShadow: "0 6px 24px rgba(124,58,237,0.35)",
            }}>
              03
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#6060a0", textTransform: "uppercase", marginBottom: "4px" }}>
                Opdracht 3
              </div>
              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", margin: 0, color: "#e2e2f0" }}>
                Video pitch NGO
              </h2>
            </div>
          </div>

          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#8080a0", marginBottom: "32px", maxWidth: "680px" }}>
            Voor deze opdracht kon ik maar aan één iemand denken, mijn oma (Trudy van Noort). Voor zolang ik besta weet ik niet beter dan dat oma en later ook opa (Cees van Noort) zich actief inzetten voor Amnesty International. Na overleg met Sven Spruijt en akkoord, heb ik oma hierover benaderd. Zij vond het meteen helemaal leuk om enerzijds over Amnesty tegen mij te vertellen en anderzijds om mij te kunnen helpen met school.
          </p>

          <SectionDivider label="3.1 Afgenomen interview" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginBottom: "32px" }}>

            <div className="glow-card" style={{ padding: "28px 32px", borderRadius: "20px", border: "1px solid rgba(167,139,250,0.12)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#a78bfa", textTransform: "uppercase", marginBottom: "10px" }}>Inleiding</div>
              <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: 0 }}>
                Amnesty is opgericht in 1961 door Peter Benenson na een artikel dat The Observer publiceerde over gewetensgevangenen in Portugal. De aanleiding van hen gevangenschap is de toost op de vrijheid. Op 10 december is 'de dag van de mensenrechten' en dan heeft Trudy 10 onterechte gevangenen, genaamd: Write for Rights, door een brief of groetenkaart op te sturen. Op en rond die dag schrijven mensen wereldwijd miljoenen brieven tegen onrecht. Voor mensen die onterecht vastzitten of bedreigd en gemarteld worden, omdat ze opkomen voor hen rechten. En op 8 maart is het wereldwijd een 'internationale vrouwendag', Trudy zorgt ervoor dat er die dag altijd in de bioscoop van Hulst een vrouwenfilm wordt gedraaid en er een petitielijst wordt getekend. Tot slot is Trudy langs geweest bij het Reynaertcollege (middelbare school).
              </p>
            </div>

            {[
              {
                vraag: "Wie ben je en wat doe je voor Amnesty?",
                antwoord: "Ik ben Trudy van Noort, actief Amnesty lid sinds 1988. Lid geworden door het zien van een kraampje in de buurt, waarbij Trudy vroeg waar Amnesty voor stond, het antwoord: we komen op voor de rechten van de mens. Het bestuur van Zeeuws-Vlaanderen zat destijds in Axel en is 33 jaar voorzitster geweest. Trudy was erg verbaasd over de onwetendheid van de mensen/inwoners van de gemeente Hulst over Amnesty International. Trudy geeft aan hier impact op te hebben gemaakt, in vergelijking met toen en nu. Zo heeft ze ook 15 jaar lang met artikelen (vooral kerst- en verjaardagskaarten en kaarsen) op de kerstmarkt gestaan.",
              },
              {
                vraag: "Wat sprak je het meest aan van de activiteiten van Amnesty International?",
                antwoord: "Bij Amnesty geldt de pen is ons wapen. Trudy ontdekte de impact van het schrijven door middel van brieven om op te komen voor de rechten van de mens, in dit geval de gevangene (NOOIT voor criminelen). Dit betekent dat Trudy 15 jaar lang brieven heeft geschreven in de bibliotheek in Hulst, nu kan dit ook online, los van dat er nog steeds maandelijks brieven geschreven worden in de bibliotheek. Je schrijft een brief voor de vrijheid, gelijkheid en rechtvaardigheid van de gevangene.",
              },
              {
                vraag: "Welke thema's binnen Amnesty vind je het belangrijkste en waarom?",
                antwoord: "Voor Trudy is dit het mandaat, omdat de gewetensgevangene vastzit vanwege geaardheid of overtuiging zonder dat er geweld gebruikt is. Zodat deze gevangenen een eerlijk proces kunnen krijgen. Voor alles is geld nodig, daarom wordt er één keer per jaar gecollecteerd, daarnaast wordt er bij Albert Heijn en in de kerk twee dagenlang kerstartikelen verkocht. Onder het motto: 'schrijf een brief en verander een leven'.",
              },
              {
                vraag: "Hoe ziet jouw rol van Amnesty in het verbeteren van welzijn en de veiligheid van mensen wereldwijd?",
                antwoord: "Doordat Trudy brieven schrijft probeert ze Amnesty kenbaar te maken voor de mensenrechten, zie ook de inleiding.",
              },
              {
                vraag: "Is er een campagne of actie van Amnesty die je in het bijzonder geraakt heeft, die je altijd is bijgebleven?",
                antwoord: "Trudy vertelde over dat er destijds studenten hebben gestaan bij winkelkarretjes voor de supermarkt, om te vragen of ze het kwartje uit de kar mochten houden voor Amnesty, dit leverde tot wel 1000 gulden op door heel Zeeuws-Vlaanderen. Als werkgroep heeft Trudy in Hulst wel eens met fakkels rondgelopen, als teken van het kaarsje brandend houden.",
              },
              {
                vraag: "Denk je dat mensenrechten en gezondheid verbinding hebben met elkaar?",
                antwoord: "Tuurlijk, stel je voor je wordt als zwaar hartpatiënt in de gevangenis opgenomen, dan krijgen deze gevangene echt niet hen medicijnen. Zo leest Trudy een artikel voor van een advocaat in Turkije, ze krijgt geen toegang tot medische zorg en ook niet tot de medicijnen die ze nodig heeft.",
              },
              {
                vraag: "Hoe belangrijk vind je het dat organisaties, zoals zorgverzekeraars aandacht besteden aan eerlijke zorg?",
                antwoord: "Amnesty maakt geen winst, het opgebrachte geld gaat allemaal naar het hoofdkantoor in Amsterdam. Er wordt niet zomaar voor iemand geschreven, het onderzoek kost veel geld, omdat er veel research wordt gedaan.",
              },
              {
                vraag: "Wat vind je van de opkomst van technologie om mensen hen welzijn te verbeteren?",
                antwoord: "De technologie zorgt ervoor dat alles veel sneller gaat, maar het voelt wel onpersoonlijker. Los van dat je wel dient mee te gaan met de tijd, er is ook simpelweg geen tijd om het op de ouderwetse manier te doen.",
              },
              {
                vraag: "Wat kunnen bedrijven volgens jou leren van de aanpak of principes bij Amnesty?",
                antwoord: "Hoe belangrijk mensenrechten zijn, gerelateerd aan bedrijven zou dit kunnen betekenen dat zij zich meer moeten gaan richten op de vitaliteit van hen medewerkers.",
              },
              {
                vraag: "Hoe denk je dat jongeren zich vandaag de dag het beste kunnen inzetten voor maatschappelijke thema's zoals mensenrechten of gezondheid?",
                antwoord: "Jongeren kunnen naar de schrijfmiddagen komen, als ze daar geen tijd voor hebben kan dit ook digitaal. Volgens Trudy is dit echt het belangrijkste. Daarnaast zouden ze zich kunnen aanmelden voor een werkgroep in bijna iedere woonplaats kan dat, aangezien er een groot tekort is aan jonge mensen. Het spreekt voor anderen mensen ook meer aan om jonge meiden te zien staan achter een kraam dan drie grijze vrouwen.",
              },
            ].map((item, i) => (
              <div key={i} className="glow-card card-hover" style={{ padding: "28px 32px", borderRadius: "20px", border: "1px solid rgba(167,139,250,0.15)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(180deg, #7c3aed, #4f46e5)", borderRadius: "20px 0 0 20px" }} />
                <div style={{ paddingLeft: "8px" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e2e2f0", marginBottom: "10px" }}>{item.vraag}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: 0 }}>{item.antwoord}</p>
                </div>
              </div>
            ))}

            <div className="glow-card" style={{ padding: "28px 32px", borderRadius: "20px", border: "1px solid rgba(167,139,250,0.12)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>💬</div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#a78bfa", textTransform: "uppercase", marginBottom: "10px" }}>
                    Aanvullend — artikel
                  </div>
                  <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: "0 0 12px" }}>
                    Ik wil u zeggen dat dit soort simpele daden (zoals brieven schrijven) toch niets uithaalt. Iets daarvan dringt ergens door tot de mensen om wie u zich bezorgd maakt, zoals het uiteindelijk doordrong tot mij en mijn kameraden.
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#e2e2f0", margin: 0, fontStyle: "italic" }}>
                    'Als oma zijnde vind ik het heel bijzonder, dat haar kleindochter de waarde van Amnesty oppakt.'
                  </p>
                </div>
              </div>
            </div>
          </div>

          <SectionDivider label="3.2 Impact persoonlijk profiel" />
          <div className="glow-card" style={{ padding: "28px 32px", borderRadius: "20px", border: "1px solid rgba(167,139,250,0.12)", background: "rgba(255,255,255,0.02)", marginBottom: "32px" }}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", margin: 0 }}>
              Ik vind het bijzonder hoe simpele dingen, zoals een brief sturen, zoveel kunnen betekenen voor iemand die onterecht gevangen zit. Het maakte me bewust van hoe belangrijk mensenrechten zijn en dat je met kleine acties echt verschil kunt maken. Daarom heb ik ervoor gekozen om na het interview zelf ook nog een ansichtkaart te schrijven en de petitielijst ondertekend. Daarnaast heb ik vroeger helpen collecteren als kind zijnde, dat was destijds al supergoed voor mijn sociale vaardigheden. Doordat ik bij wildvreemde moest aanbellen en één vraag moest stellen.
            </p>
          </div>

          <SectionDivider label="3.3 Videopitch — Interview Trudy van Noort" />
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0cc", marginBottom: "16px" }}>
              Nadat ik oma heb gesproken heb ik een videopitch opgenomen. Dit om terug te blikken op hoe ik het interview heb ervaren:
            </p>
            <LinkCard label="Videopitch | NGO" href="https://mymedia.avans.nl/media/Videopitch+%7C+NGO/0_l0ofomdx" />
          </div>

          <SectionDivider label="Bewijs — foto's" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            <ImageCard src="/jaar4/thuisblijfprogramma/imagethuis.jpg" alt="Foto Trudy van Noort tijdens het interview" />
          </div>
        </div>

        {/* ── Footer nav ── */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "space-between",
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(167,139,250,0.1)",
          }}
        >
          <a href="/jaar-4" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>← Terug naar Jaar 4</a>
          <a href="/" className="btn" style={{ fontSize: "13px", padding: "10px 20px" }}>Terug naar home →</a>
        </div>

      </article>
    </main>
  );
}