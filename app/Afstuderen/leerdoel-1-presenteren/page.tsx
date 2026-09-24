"use client";

import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";
import { Card, ExternalLink, FooterNav, PageHeader, Pdca, Table, VideoCard, ZoomImage } from "@/app/components/ContentBits";

export default function Presenteren() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <main>
      <ImageModal src={openImg} onClose={() => setOpenImg(null)} />

      <article className="content-page">
        <PageHeader
          badge="Afstuderen — Persoonlijk leerdoel"
          title="Persoonlijk leerdoel 1: Presenteren"
          lead="Uiterlijk op 19 oktober 2026 heb ik mijn presentatievaardigheden verbeterd door gedurende mijn afstudeerperiode gericht te oefenen met mijn spreektempo, meerdere oefen- en presentatiemomenten te benutten en ontvangen feedback zichtbaar toe te passen. Mijn doel is om tijdens presentaties mijn spreektempo beter te beheersen, zodat ik rustiger en prettiger overkom op mijn publiek."
        />

        <Card title="Succescriterium">
          <p className="intro-divider">
            Mijn leerdoel is behaald wanneer ik tijdens een presentatie mijn spreektempo bewust kan beheersen en niet meer als
            te snel wordt beoordeeld. Dit blijkt uit feedback van verschillende personen, waarbij wordt aangegeven dat ik
            rustig en prettig spreek. Dit helpt mij ook om als toekomstig accountmanager mijn verhaal duidelijk over te brengen
            tijdens klantgesprekken en pitches.
          </p>
        </Card>

        <Card title="1.1 Onderbouwing persoonlijk doel">
          <p className="intro-divider">
            Mijn belangrijkste ontwikkelpunt bij presenteren is mijn spreektempo. Ik merk dat ik van nature relatief snel
            spreek. Wanneer ik tijdens een presentatie spanning of enthousiasme ervaar, wordt dit versterkt. Ik wil dan graag
            mijn verhaal goed vertellen en ga daardoor sneller spreken. Hierdoor neem ik minder rust tijdens het presenteren
            dan ik zou willen.
          </p>

          <p className="intro-divider">
            Om mijn startniveau in kaart te brengen, heb ik voorafgaand aan mijn afstudeerperiode twee verschillende
            presentatietests uitgevoerd. De eerste test, van Mark Robinson, gaf mij een score van 8/10. Deze score geeft aan
            dat ik goed op de hoogte ben van waar een presentatie aan moet voldoen om de aandacht van het publiek te trekken
            (Mark Robinson, 8 juli 2025).
          </p>

          <p className="intro-divider">
            De tweede test was de Spreken met Impact Scan van Bea Kuijs (Bea Kuijs, Z.D.). Hier behaalde ik een score van
            69%. Uit deze test bleek dat ik iets waardevols te vertellen heb, maar dat er nog groeiruimte was in mijn
            presentatiekracht. Als belangrijkste ontwikkelpunten werden eenvoud, structuur en vertrouwen genoemd.
          </p>

          <div className="test-image-grid">
            <div className="test-image-card">
              <p className="intro-divider">
                Test 1: 8/10
                <br />
                (Mark Robinson, 8 juli 2025)
              </p>
              <ZoomImage src="/afstuderen/pl/test-1.webp" alt="Test 1" setOpenImg={setOpenImg} />
            </div>
            <div className="test-image-card">
              <p className="intro-divider">
                Test 2: 69%
                <br />
                (Bea Kuijs, Z.D.)
              </p>
              <ZoomImage src="/afstuderen/pl/test-2.webp" alt="Test 2" setOpenImg={setOpenImg} />
            </div>
          </div>

          <p className="intro-divider">
            De twee tests heb ik gebruikt als nulmeting. Ze lieten mij zien dat ik bij de start al over een goede basis
            beschikte, maar dat mijn presentatievaardigheden nog verder ontwikkeld konden worden. De tests gaven mij vooral
            inzicht in mijn algemene niveau. Ze gaven nog geen specifiek antwoord op de vraag hoe mijn spreektempo tijdens een
            daadwerkelijke presentatie was.
          </p>

          <p className="intro-divider">
            Dat werd duidelijk tijdens mijn eerste presentatie bij AllSens. Daar kreeg ik de concrete feedback dat mijn
            spreektempo te hoog lag en dat ik rustiger mocht praten, omdat ik van nature snel spreek. Deze feedback maakte
            duidelijk waar ik mij binnen mijn presentatievaardigheden specifiek op wilde ontwikkelen.
          </p>

          <p className="intro-divider">
            Mijn startniveau was daarom als volgt: ik beschikte over een goede basis in presenteren, maar had mijn spreektempo
            tijdens een presentatie nog onvoldoende onder controle, vooral wanneer ik spanning ervaarde.
          </p>

          <p className="intro-divider">
            Daarom heb ik ervoor gekozen om mijn ontwikkeldoel specifiek te richten op het leren beheersen van mijn
            spreektempo. Ik wilde gedurende mijn afstudeerperiode ontdekken welke aanpak mij helpt om tijdens het presenteren
            meer rust te bewaren.
          </p>
        </Card>

        <Card title="1.2 Actieplan presenteren">
          <p className="intro-divider">
            Om mijn ontwikkeling gedurende de afstudeerperiode te volgen, heb ik verschillende presentatie- en oefenmomenten
            gebruikt. Na ieder moment heb ik gekeken wat mijn spreektempo deed en welke feedback ik kreeg. Deze feedback
            gebruikte ik om mijn aanpak bij een volgend moment aan te passen.
          </p>

          <Table
            head={["Actie", "Uitvoering", "Bewijs", "Focus"]}
            rows={[
              [
                "1. Startniveau bepalen",
                "Twee presentaties uitvoeren en een eerste presentatie geven bij AllSens.",
                "Testresultaten, presentatie (met opname) en ontvangen feedback.",
                "Vaststellen van mijn uitgangsniveau en belangrijkste ontwikkelpunt.",
              ],
              [
                "2. Oefenen en feedback verzamelen",
                "Een presentatie oefenen met mijn docentbegeleider en studiegenoten.",
                "Opname van het oefenmoment en ontvangen feedback.",
                "Ervaren hoe mijn spreektempo verandert wanneer ik spanning ervaar.",
              ],
              [
                "3. Feedback toepassen",
                "Mijn manier van presenteren aanpassen en bewust rustiger spreken tijdens een volgend oefenmoment.",
                "Nieuwe presentatie en feedback.",
                "Meer controle krijgen over mijn spreektempo.",
              ],
              [
                "4. Eindniveau bepalen",
                "Een laatste presentatie geven bij AllSens en deze vergelijken met eerdere feedback.",
                "Opname en feedback van het laatste moment.",
                "Vaststellen of mijn spreektempo voldoende beheerst is.",
              ],
              [
                "5. Eindconclusie",
                "De allerlaatste presentatie bij het podiummoment.",
                "Feedback en conclusie vanuit het beoordelingsformulier.",
                "Vasthouden aan de doorgemaakte groei.",
              ],
            ]}
          />
        </Card>

        <Card title="1.3 Opname bedrijfspresentatie | 1e keer">
          <p className="intro-divider">Eerste moment presenteren bij AllSens.</p>

          <p className="intro-divider">Uitgevoerde presentatie:</p>
          <ExternalLink href="https://canva.link/7oma1usp8rdq2w2">Bekijk presentatie (Canva)</ExternalLink>

          <p className="intro-divider">Opname presentatie:</p>
          <VideoCard title="Uitgevoerde presentatie" entryId="0_j83uisax" url="https://mymedia.avans.nl/media/t/0_j83uisax" />

          <Pdca
            plan={[
              "Voor mijn eerste presentatie bij AllSens wilde ik vooral ervaren hoe ik zou presenteren voor een groep collega’s. Ik vond dit spannend, omdat ik niet altijd volledig zelfverzekerd ben tijdens het presenteren. Omdat ik van nature snel spreek, wilde ik proberen om mijn presentatie rustig te brengen en mijn spreektempo onder controle te houden.",
              "Ik heb de presentatie vooraf meerdere keren geoefend. Hiermee wilde ik mijzelf voldoende zekerheid geven over mijn verhaal, zodat ik tijdens het presenteren meer rust zou ervaren.",
            ]}
            doo={[
              "Ik heb mijn eerste bedrijfspresentatie gegeven aan collega’s van AllSens (Emma, Yazan, Simon, Minke, Caroline en Mellanie). Tijdens de presentatie merkte ik dat ik spanning ervaarde. Ondanks mijn voorbereiding begon ik hierdoor relatief snel te spreken.",
            ]}
            check={[
              "Na afloop kreeg ik feedback op mijn presentatie. Voor mijn persoonlijke leerdoel was vooral de feedback over mijn spreektempo relevant. Er werd aangegeven dat mijn spreektempo te hoog lag en dat ik rustiger mocht praten, omdat ik van nature snel spreek.",
              "Deze feedback maakte duidelijk dat mijn voorbereiding alleen niet voldoende was om mijn spreektempo onder controle te houden. Zodra ik voor een groep stond en spanning ervaarde, viel ik terug in mijn natuurlijke hoge spreektempo.",
              "Voor mij was dit het belangrijkste inzicht uit deze eerste presentatie. Ik wist vooraf dat ik snel spreek, maar ontdekte nu dat ik mijn tempo tijdens een daadwerkelijke presentatie bewuster moest leren reguleren.",
            ]}
            act={[
              "Voor een volgend oefenmoment wilde ik daarom niet alleen opnieuw oefenen met mijn presentatie, maar mijn spreektempo bewust als apart aandachtspunt meenemen. Ik wilde tijdens het spreken meer rust nemen en mezelf eraan herinneren om niet automatisch mijn natuurlijke tempo te volgen.",
            ]}
          />
        </Card>

        <Card title="1.4 Actie 2: Oefenmoment met docentbegeleider en studiegenoten">
          <p className="intro-divider">
            Ik kreeg de kans om eenmalig te oefenen met mijn docentbegeleider en studiegenoten uit mijn afstudeerkring.
          </p>

          <p className="intro-divider">Gegeven presentatie:</p>
          <ExternalLink href="https://canva.link/w7voxz5gpo8njmd">Bekijk presentatie (Canva)</ExternalLink>

          <p className="intro-divider">Link naar de presentatie:</p>
          <VideoCard
            title="Oefen podiummoment"
            entryId="0_qbwufw44"
            url="https://mymedia.avans.nl/media/Oefen+podiummoment/0_qbwufw44"
          />

          <Pdca
            plan={[
              "Na mijn eerste presentatie wilde ik controleren of ik mijn spreektempo tijdens een nieuw presentatiemoment beter kon beheersen. Ik wilde vooral ontdekken of ik mijn tempo ook onder spanning kon verlagen.",
              "Op 8 juni heb ik daarom mijn presentatie geoefend met mijn docentbegeleider Ben Embregts en enkele studiegenoten (Xander en Ayoub). Mijn doel was om mijn manier van presenteren opnieuw te oefenen en feedback te krijgen op mijn ontwikkeling.",
            ]}
            doo={[
              "Tijdens het oefenmoment presenteerde ik mijn verhaal zoals ik dit tijdens mijn uiteindelijke podiummoment wilde vertellen. Ondanks mijn voorbereiding merkte ik opnieuw spanning. Ik begon hierdoor weer snel te praten en raakte op een bepaald moment zelfs de draad van mijn verhaal kwijt (vanwege een presentatie waar ik niet achterstond).",
            ]}
            check={[
              "Dit oefenmoment liet zien dat mijn spreektempo nog niet volledig onder controle was. Ondanks mijn eerdere feedback en voorbereiding had spanning opnieuw invloed op mijn manier van spreken.",
              "Voor mij was dit een belangrijk inzicht. Ik merkte dat het probleem niet alleen was dat ik van nature snel spreek. Spanning versterkt mijn neiging om sneller te praten. Wanneer ik onzeker word of mijn verhaal even kwijt ben, gaat mijn tempo omhoog.",
              "De feedback van mijn docent en studiegenoten bevestigde daarnaast dat mijn verhaal in de basis goed te volgen was. Voor mijn persoonlijke leerdoel was vooral belangrijk dat ik nu beter begreep wanneer mijn spreektempo omhooggaat en waardoor dit gebeurt.",
            ]}
            act={[
              "Ik besloot mijn aanpak verder aan te passen. Ik wilde niet alleen vooraf oefenen, maar tijdens het presenteren actief mijn spreektempo controleren. Wanneer ik merkte dat ik sneller ging praten, wilde ik bewust vertragen en een korte pauze nemen.",
              "Daarnaast wilde ik meer houvast creëren tijdens het presenteren, zodat ik minder afhankelijk was van het uit mijn hoofd kennen van mijn verhaal. Dit moest ervoor zorgen dat ik minder snel mijn draad zou kwijtraken en daardoor ook minder spanning zou ervaren.",
            ]}
          />
        </Card>

        <Card title="1.5 Actie 3: Afsluiting presentatie AllSens">
          <p className="intro-divider">Ter afsluiting van mijn stageperiode heb ik de resultaten uit mijn onderzoek gepresenteerd.</p>

          <p className="intro-divider">Gegeven presentatie:</p>
          <ExternalLink href="https://canva.link/ezf8mnyi7ms6ca0">Bekijk presentatie (Canva)</ExternalLink>

          <p className="intro-divider">Link naar de presentatie:</p>
          <VideoCard
            title="Einde stageperiode presentatie"
            entryId="0_q4dbbe1y"
            url="https://mymedia.avans.nl/media/Einde+stageperiode+presentatie/0_q4dbbe1y"
          />

          <Pdca
            plan={[
              "Voor mijn laatste oefenmoment wilde ik controleren of mijn aangepaste aanpak effect had gehad. Mijn belangrijkste doel was om mijn spreektempo beter te beheersen en rustiger over te komen tijdens het presenteren.",
              "Omdat ik inmiddels had ontdekt dat spanning mijn spreektempo verhoogt, wilde ik hier tijdens het presenteren bewust rekening mee houden. Ik wilde mijn tempo actief vertragen, voldoende pauzes nemen en mezelf de tijd geven om mijn verhaal rustig te vertellen.",
            ]}
            doo={[
              "Tijdens het laatste oefenmoment bij AllSens heb ik mijn presentatie opnieuw gegeven. Tijdens het presenteren heb ik bewust gelet op mijn spreektempo. Ik probeerde rustiger te spreken en korte pauzes te nemen wanneer dat nodig was.",
              "Op twee momenten moest ik even nadenken over wat ik wilde zeggen. In plaats van hierdoor gehaast verder te gaan, nam ik de tijd om mijn gedachten weer op een rij te zetten en mijn verhaal vervolgens voort te zetten.",
            ]}
            check={[
              "De feedback op dit oefenmoment liet zien dat mijn belangrijkste ontwikkelpunt was verbeterd. Er werd aangegeven dat ik niet te snel sprak, rustig overkwam en dat mijn presentatie duidelijk was.",
              "Ook werd aangegeven dat het niet storend was dat ik op twee momenten even moest nadenken. Dit liet mij zien dat ik niet voortdurend snel hoef te spreken om een presentatie vloeiend te laten verlopen. Juist door rust te nemen wanneer dat nodig is, bleef mijn presentatie rustig.",
              "Dit was een duidelijk verschil met mijn eerste presentaties. Toen kreeg ik expliciet terug dat mijn spreektempo te hoog lag. Tijdens dit laatste moment werd juist aangegeven dat mijn tempo goed was en dat ik rustig overkwam.",
            ]}
            act={[
              "Omdat deze aanpak voor mij werkte, wil ik deze blijven gebruiken bij toekomstige presentaties. Ik weet nu dat ik vooraf goed moet oefenen, maar vooral dat ik tijdens het presenteren bewust mijn tempo moet blijven controleren.",
              "Wanneer ik spanning ervaar, wil ik mezelf eraan herinneren om niet sneller te gaan praten, maar juist rust te nemen. Daarmee heb ik een concrete manier gevonden om mijn natuurlijke hoge spreektempo te beheersen.",
            ]}
          />
        </Card>

        <Card title="1.6 Actie 4: Het podiummoment">
          <p className="intro-divider">Dit betreft mijn presentatie tijdens mijn 1e afstudeerzitting.</p>

          <p className="intro-divider">Gegeven presentatie:</p>
          <ExternalLink href="https://canva.link/js69vm97hw6j3fy">Bekijk presentatie (Canva)</ExternalLink>

          <Pdca
            plan={[
              "Tijdens het laatste podiummoment wilde ik mijn ontwikkeling in spreektempo laten zien. Mijn belangrijkste aandachtspunt was om niet terug te vallen in mijn natuurlijke neiging om snel te praten wanneer ik spanning ervaar. Ik wilde bewust rustiger spreken en voldoende pauzes nemen, zodat mijn presentatie prettig te volgen bleef.",
            ]}
            doo={[
              "Op 30 juni gaf ik mijn uiteindelijke podiumpresentatie. Tijdens het presenteren lette ik bewust op mijn spreektempo en probeerde ik rust te bewaren. Door mijn eerdere oefenmomenten wist ik beter waar ik tijdens het presenteren op moest letten.",
            ]}
            check={[
              "De feedback van mijn docentbegeleiders was positief. Zij gaven aan dat ik mijn ontwikkeling goed presenteerde en mezelf op een unieke manier neerzette. Voor mijn leerdoel is vooral belangrijk dat mijn spreektempo tijdens dit moment geen aandachtspunt meer was. Dit laat zien dat ik het tempo beter onder controle had dan aan het begin van mijn ontwikkeling.",
              "Waar tijdens mijn eerste presentatie werd aangegeven dat ik te snel sprak, was dit tijdens het podiummoment geen terugkerende opmerking. Daarmee heb ik mijn belangrijkste ontwikkelpunt zichtbaar verbeterd.",
            ]}
            act={[
              "Ik wil de manier waarop ik mijn spreektempo tijdens het oefenen en presenteren bewust heb gemonitord blijven toepassen. Ik weet dat spanning ervoor kan zorgen dat ik sneller ga praten. Door hier vooraf en tijdens een presentatie bewust op te letten, kan ik mijn tempo beter blijven controleren.",
            ]}
          />
        </Card>

        <Card title="1.7 Evaluatie van mijn ontwikkeling">
          <Table
            head={["Presentatiemoment", "Wat gebeurde er?", "Feedback / ontwikkeling"]}
            rows={[
              [
                "1. Eerste presentatie AllSens",
                "Ik sprak snel, mede door spanning.",
                "Mijn spreektempo werd als te hoog beoordeeld. Dit werd mijn belangrijkste ontwikkelpunt.",
              ],
              [
                "2. Oefenmoment 8 juni",
                "Door spanning sprak ik opnieuw snel en raakte ik kort de draad kwijt.",
                "Ik ontdekte dat spanning invloed heeft op mijn spreektempo. Ik wilde daarom bewuster rust nemen en langzamer spreken.",
              ],
              [
                "3. Afsluiting AllSens",
                "Ik lette bewust op mijn tempo en probeerde rustiger te spreken.",
                "Ik kreeg terug dat ik niet te snel sprak en rustig overkwam. Dit liet zien dat mijn aanpak werkte.",
              ],
              [
                "4. Podiummoment 30 juni",
                "Ik paste mijn eerdere leerpunten toe en hield mijn tempo bewust in de gaten.",
                "Mijn spreektempo werd niet meer als aandachtspunt benoemd. Hiermee heb ik mijn ontwikkeling zichtbaar gemaakt.",
              ],
            ]}
          />
        </Card>

        <Card title="1.8 Eindniveau en conclusie" last>
          <p className="intro-divider">
            Aan het einde van mijn afstudeerperiode is mijn presentatievaardigheid verbeterd, met name in het beheersen van
            mijn spreektempo. Waar ik tijdens mijn eerste presentatie nog te snel sprak, kreeg ik tijdens mijn laatste twee
            presentaties terug dat ik niet te snel sprak en rustig overkwam. Mijn eindniveau is daarmee dat ik mijn
            spreektempo beter kan aanpassen aan de situatie en meer controle heb over mijn tempo wanneer ik spanning ervaar.
          </p>

          <p className="intro-divider">
            Door meerdere keren te oefenen, feedback toe te passen en bewust te letten op rustiger spreken en pauzeren, heb ik
            geleerd mijn spreektempo beter te controleren. Mijn leerdoel is hiermee behaald. Ik zal waarschijnlijk altijd van
            nature een relatief vlotte spreker blijven, maar ik weet nu hoe ik mijn tempo bewust kan aanpassen wanneer de
            situatie daarom vraagt.
          </p>
        </Card>

        <FooterNav
          prev={["/Afstuderen/feedback-stakeholders", "Stakeholders"]}
          next={["/Afstuderen/vakdoel-ai-zoekgedrag", "Vakdoel: AI-gedreven zoekgedrag"]}
        />
      </article>
    </main>
  );
}
