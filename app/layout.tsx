import type { Metadata } from "next";
import "./globals.css";
import ClientScripts from "./ClientScripts";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Dian | Commerciële Economie — Avans",
  description: "Afstudeerpresentatie van Dian — Avans Hogeschool Breda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="bg-wrap">
          <div className="bg-blob bg-blob-1" />
          <div className="bg-blob bg-blob-2" />
          <div className="bg-blob bg-blob-3" />
        </div>

        <nav id="navbar">
          <a href="/" className="nav-logo">Dian</a>
          <div className="nav-links">
          <a href="/" className="nav-parent" style={{ fontWeight: 600 }}>Home</a>
          <a href="/posts" className="nav-parent">Opdrachten</a>



            <div className="nav-group">
              <a href="/jaar-2" className="nav-parent">
                Jaar 2 <span className="nav-arrow">▼</span>
              </a>
              <div className="nav-dropdown">
                <a href="/jaar-2/aquisitieset">Aquisitieset</a> 
                <a href="/jaar-2/amx-week">AMX week</a> 
                <a href="/jaar-2/inleesactie">Inleesactie</a>
                <a href="/jaar-2/persoonlijke-doelen">Persoonlijke doelen</a>  
                <a href="/jaar-2/pdca-cyclus">PDCA-cyclus</a> 
                <a href="/jaar-2/acties">Acties</a> 
                <a href="/jaar-2/reflecties">Reflecties</a> 
                <a href="/jaar-2/feedback">Feedback</a> 
              </div>
            </div>

            <div className="nav-group">
              <a href="/jaar-3" className="nav-parent">
                Jaar 3 | Stage <span className="nav-arrow">▼</span>
              </a>
              <div className="nav-dropdown">
                <a href="/jaar-3/bedrijfsproducten">Bedrijfsproducten</a>
                <a href="/jaar-3/doelen-stage">Doelen stage</a>
                <a href="/jaar-3/vlog">VLOG</a>
                <a href="/jaar-3/bewijslasten-persoonlijk">Bewijslasten Persoonlijk doel</a>
                <a href="/jaar-3/bewijslasten-vakinhoudelijk">Bewijslasten Vakinhoudelijk doel</a>
                <a href="/jaar-3/pdca-cyclus">PDCA-cyclus</a>
                <a href="/jaar-3/reflecties">Reflecties doelen</a>
              </div>
            </div>

            <div className="nav-group">
              <a href="/jaar-4" className="nav-parent">
                Jaar 4 <span className="nav-arrow">▼</span>
              </a>
              <div className="nav-dropdown">
                <a href="/jaar-4/profileringskit">Profileringskit</a>
                <a href="/jaar-4/eindreflectie">Eindreflectie</a>
                <a href="/jaar-4/persoonlijk-profiel">Persoonlijk profiel door de jaren heen</a>
                <a href="/jaar-4/reflectie-persoonlijk">Reflectie Persoonlijk doel</a>
                <a href="/jaar-4/reflectie-vakinhoudelijk">Reflectie Vakinhoudelijk doel</a>
                <a href="/jaar-4/persoonlijk-doel-1">Persoonlijk doel actie 1</a>
                <a href="/jaar-4/persoonlijk-doel-2">Persoonlijk doel actie 2</a>
                <a href="/jaar-4/vakinhoudelijk-1">Vakinhoudelijk doel actie 1</a>
                <a href="/jaar-4/vakinhoudelijk-2">Vakinhoudelijk doel actie 2</a>
                <a href="/jaar-4/ai-protocol">AI-protocol</a>
                <a href="/jaar-4/thuisblijfprogramma">Het thuisblijfprogramma</a>
                <a href="/jaar-4/9-stappen">9 stappen tot het afstuderen</a>
                <a href="/jaar-4/videos">Video's</a>
                <a href="/jaar-4/bijlagen">Bijlagen</a>
              </div>
            </div>
          <div className="nav-group">
              <a href="/Afstuderen" className="nav-parent">
                Afstuderen <span className="nav-arrow">▼</span>
              </a>
              <div className="nav-dropdown">
                <a href="/Afstuderen/Profileringskit">Profileringskit</a> 
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