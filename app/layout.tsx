import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientScripts from "./ClientScripts";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dian | Commerciële Economie — Avans",
  description: "Afstudeerpresentatie van Dian — Avans Hogeschool Breda",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>
        <div className="bg-wrap">
          <div className="bg-blob bg-blob-1" />
          <div className="bg-blob bg-blob-2" />
          <div className="bg-blob bg-blob-3" />
        </div>

        <nav id="navbar">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">Dian</Link>

            {/* Hamburger — alleen zichtbaar op mobiel */}
            <button className="nav-hamburger" id="nav-hamburger" aria-label="Menu">
              <span /><span /><span />
            </button>

            {/* Desktop nav */}
            <div className="nav-links">
              <Link href="/" className="nav-parent nav-home-active">Home</Link>
              {/* <Link href="/posts" className="nav-parent">Opdrachten</Link> */}

              <div className="nav-group">
                <Link href="/jaar-2" className="nav-parent">Jaar 2 <span className="nav-arrow">▼</span></Link>
                <div className="nav-dropdown">
                  <Link href="/jaar-2/aquisitieset">Aquisitieset</Link>
                  <Link href="/jaar-2/amx-week">AMX week</Link>
                  <Link href="/jaar-2/inleesactie">Inleesactie</Link>
                  <Link href="/jaar-2/persoonlijke-doelen">Persoonlijke doelen</Link>
                  <Link href="/jaar-2/pdca-cyclus">PDCA-cyclus</Link>
                  <Link href="/jaar-2/acties">Acties</Link>
                  <Link href="/jaar-2/reflecties">Reflecties</Link>
                  <Link href="/jaar-2/feedback">Feedback</Link>
                  <Link href="/posts">Opdrachten</Link>
                </div>
              </div>

              <div className="nav-group">
                <Link href="/jaar-3" className="nav-parent">Jaar 3 | Stage <span className="nav-arrow">▼</span></Link>
                <div className="nav-dropdown">
                  <Link href="/jaar-3/bedrijfsproducten">Bedrijfsproducten</Link>
                  <Link href="/jaar-3/doelen-stage">Doelen stage</Link>
                  <Link href="/jaar-3/vlog">VLOG</Link>
                  <Link href="/jaar-3/bewijslasten-persoonlijk">Bewijslasten Persoonlijk doel</Link>
                  <Link href="/jaar-3/bewijslasten-vakinhoudelijk">Bewijslasten Vakinhoudelijk doel</Link>
                  <Link href="/jaar-3/pdca-cyclus">PDCA-cyclus</Link>
                  <Link href="/jaar-3/reflecties">Reflecties doelen</Link>
                </div>
              </div>

              <div className="nav-group">
                <Link href="/jaar-4" className="nav-parent">Jaar 4 <span className="nav-arrow">▼</span></Link>
                <div className="nav-dropdown">
                  <Link href="/jaar-4/profileringskit">Profileringskit</Link>
                  <Link href="/jaar-4/eindreflectie">Eindreflectie</Link>
                  <Link href="/jaar-4/persoonlijk-profiel">Persoonlijk profiel door de jaren heen</Link>
                  <Link href="/jaar-4/reflectie-persoonlijk">Reflectie Persoonlijk doel</Link>
                  <Link href="/jaar-4/reflectie-vakinhoudelijk">Reflectie Vakinhoudelijk doel</Link>
                  <Link href="/jaar-4/persoonlijk-doel-1">Persoonlijk doel actie 1</Link>
                  <Link href="/jaar-4/persoonlijk-doel-2">Persoonlijk doel actie 2</Link>
                  <Link href="/jaar-4/vakinhoudelijk-1">Vakinhoudelijk doel actie 1</Link>
                  <Link href="/jaar-4/vakinhoudelijk-2">Vakinhoudelijk doel actie 2</Link>
                  <Link href="/jaar-4/ai-protocol">AI-protocol</Link>
                  <Link href="/jaar-4/thuisblijfprogramma">Het thuisblijfprogramma</Link>
                  <Link href="/jaar-4/9-stappen">9 stappen tot het afstuderen</Link>
                  <Link href="/jaar-4/videos">Video&apos;s</Link>
                  <Link href="/jaar-4/bijlagen">Bijlagen</Link>
                </div>
              </div>

              <div className="nav-group">
                <Link href="/Afstuderen" className="nav-parent">Afstuderen <span className="nav-arrow">▼</span></Link>
                <div className="nav-dropdown">
                  <Link href="/Afstuderen/Profileringskit">Profileringskit</Link>
                  <Link href="/Afstuderen/voorwoord">Voorwoord</Link>
                  <Link href="/Afstuderen/inleidend">Inleidend</Link>
                  <Link href="/Afstuderen/professionele-profilering">Professionele Profilering</Link>
                  <Link href="/Afstuderen/feedback-stakeholders">Feedback & Stakeholders</Link>
                  <Link href="/Afstuderen/leerdoel-1-presenteren">Leerdoel 1: Presenteren</Link>
                  <Link href="/Afstuderen/leerdoel-2-spaans">Leerdoel 2: Spaans Leren</Link>
                  <Link href="/Afstuderen/conclusie-leerdoelen">Conclusie Leerdoelen</Link>
                  <Link href="/Afstuderen/vakdoel-ai-zoekgedrag">Vakdoel: AI-Zoekgedrag</Link>
                  <Link href="/Afstuderen/conclusie-vakdoelen">Conclusie Vakdoelen</Link>
                  <Link href="/Afstuderen/doelen-metingen">Doelen & Metingen</Link>
                  <Link href="/Afstuderen/marktbewerkingsplan">Marktbewerkingsplan</Link>
                  <Link href="/Afstuderen/eindreflectie">Eindreflectie</Link>
                  <Link href="/Afstuderen/ai-protocol">AI-Protocol</Link>
                  <Link href="/Afstuderen/literatuurlijst">Literatuurlijst</Link>
                  <Link href="/Afstuderen/bijlagen">Bijlagen</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobiel menu */}
          <div className="nav-mobile" id="nav-mobile">
            <Link href="/" className="nav-mobile-link">Home</Link>
            <Link href="/posts" className="nav-mobile-link">Opdrachten</Link>

            <div className="nav-mobile-group">
              <button className="nav-mobile-toggle">Jaar 2 <span>▼</span></button>
              <div className="nav-mobile-sub">
                <Link href="/jaar-2/aquisitieset">Aquisitieset</Link>
                <Link href="/jaar-2/amx-week">AMX week</Link>
                <Link href="/jaar-2/inleesactie">Inleesactie</Link>
                <Link href="/jaar-2/persoonlijke-doelen">Persoonlijke doelen</Link>
                <Link href="/jaar-2/pdca-cyclus">PDCA-cyclus</Link>
                <Link href="/jaar-2/acties">Acties</Link>
                <Link href="/jaar-2/reflecties">Reflecties</Link>
                <Link href="/jaar-2/feedback">Feedback</Link>
              </div>
            </div>

            <div className="nav-mobile-group">
              <button className="nav-mobile-toggle">Jaar 3 | Stage <span>▼</span></button>
              <div className="nav-mobile-sub">
                <Link href="/jaar-3/bedrijfsproducten">Bedrijfsproducten</Link>
                <Link href="/jaar-3/doelen-stage">Doelen stage</Link>
                <Link href="/jaar-3/vlog">VLOG</Link>
                <Link href="/jaar-3/bewijslasten-persoonlijk">Bewijslasten Persoonlijk</Link>
                <Link href="/jaar-3/bewijslasten-vakinhoudelijk">Bewijslasten Vakinhoudelijk</Link>
                <Link href="/jaar-3/pdca-cyclus">PDCA-cyclus</Link>
                <Link href="/jaar-3/reflecties">Reflecties doelen</Link>
              </div>
            </div>

            <div className="nav-mobile-group">
              <button className="nav-mobile-toggle">Jaar 4 <span>▼</span></button>
              <div className="nav-mobile-sub">
                <Link href="/jaar-4/profileringskit">Profileringskit</Link>
                <Link href="/jaar-4/eindreflectie">Eindreflectie</Link>
                <Link href="/jaar-4/persoonlijk-profiel">Persoonlijk profiel</Link>
                <Link href="/jaar-4/reflectie-persoonlijk">Reflectie Persoonlijk doel</Link>
                <Link href="/jaar-4/reflectie-vakinhoudelijk">Reflectie Vakinhoudelijk doel</Link>
                <Link href="/jaar-4/persoonlijk-doel-1">Persoonlijk doel actie 1</Link>
                <Link href="/jaar-4/persoonlijk-doel-2">Persoonlijk doel actie 2</Link>
                <Link href="/jaar-4/vakinhoudelijk-1">Vakinhoudelijk doel actie 1</Link>
                <Link href="/jaar-4/vakinhoudelijk-2">Vakinhoudelijk doel actie 2</Link>
                <Link href="/jaar-4/ai-protocol">AI-protocol</Link>
                <Link href="/jaar-4/thuisblijfprogramma">Thuisblijfprogramma</Link>
                <Link href="/jaar-4/9-stappen">9 stappen</Link>
                <Link href="/jaar-4/videos">Video&apos;s</Link>
                <Link href="/jaar-4/bijlagen">Bijlagen</Link>
              </div>
            </div>

            <div className="nav-mobile-group">
              <button className="nav-mobile-toggle">Afstuderen <span>▼</span></button>
              <div className="nav-mobile-sub">
                <Link href="/Afstuderen/Profileringskit">Profileringskit</Link>
                <Link href="/Afstuderen/voorwoord">Voorwoord</Link>
                <Link href="/Afstuderen/inleidend">Inleidend</Link>
                <Link href="/Afstuderen/professionele-profilering">Professionele Profilering</Link>
                <Link href="/Afstuderen/feedback-stakeholders">Feedback & Stakeholders</Link>
                <Link href="/Afstuderen/leerdoel-1-presenteren">Leerdoel 1: Presenteren</Link>
                <Link href="/Afstuderen/leerdoel-2-spaans">Leerdoel 2: Spaans Leren</Link>
                <Link href="/Afstuderen/conclusie-leerdoelen">Conclusie Leerdoelen</Link>
                <Link href="/Afstuderen/vakdoel-ai-zoekgedrag">Vakdoel: AI-Zoekgedrag</Link>
                <Link href="/Afstuderen/conclusie-vakdoelen">Conclusie Vakdoelen</Link>
                <Link href="/Afstuderen/doelen-metingen">Doelen & Metingen</Link>
                <Link href="/Afstuderen/marktbewerkingsplan">Marktbewerkingsplan</Link>
                <Link href="/Afstuderen/eindreflectie">Eindreflectie</Link>
                <Link href="/Afstuderen/ai-protocol">AI-Protocol</Link>
                <Link href="/Afstuderen/literatuurlijst">Literatuurlijst</Link>
                <Link href="/Afstuderen/bijlagen">Bijlagen</Link>
              </div>
            </div>
          </div>
        </nav>

        {children}
        <ClientScripts />
        <SpeedInsights />
      </body>
    </html>
  );
}