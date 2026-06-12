"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const cvDialogRef = useRef<HTMLDialogElement>(null);
  const openCv = () => cvDialogRef.current?.showModal();
  const closeCv = () => cvDialogRef.current?.close();

  const myPosts = [
    {
      title: "Persoonlijke ontwikkeling stage jaar 3",
      desc: "Een overzicht van mijn professionele profiel en competenties.",
      img: "",
      url: "/posts/persoonlijke-ontwikkeling"
    },
    {
      title: "Logboek - energie",
      desc: "Verdieping in conceptontwikkeling en strategische keuzes.",
      img: "/home/energie.png",
      url: "/posts/logboek-energie"
    },
    {
      title: "Levenslijn oefening",
      desc: "Onderzoek en ontwikkeling van een verantwoord AI-gebruiksprotocol.",
      img: "/home/levenslijn.png",
      url: "/posts/levenslijn"
    },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Over mij", href: "#over-mij" },
    { label: "Opdrachten", href: "/posts" },
    { label: "Jaar 2", href: "/jaar-2" },
    { label: "Jaar 3 | Stage", href: "/jaar-3" },
    { label: "Jaar 4", href: "/jaar-4" },
  ];

  return (
    <main className="home-main">
      {/* CV MODAL */}
      <dialog
        ref={cvDialogRef}
        className="cv-modal-dialog"
        onClick={closeCv}
        onCancel={closeCv}
      >
        <div className="cv-modal-inner">
          <div onClick={e => e.stopPropagation()} className="cv-modal-content">
            <button onClick={closeCv} className="cv-modal-close">×</button>
            <img loading="lazy" decoding="async" src="/home/cv.png" alt="CV Dian van Noort" className="cv-modal-img" />
          </div>
        </div>
      </dialog>

      {/* ===== HERO ===== */}
      <section className="section hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="reveal-left">
              <div className="badge hero-badge">
                <span className="badge-dot" />
                Avans Hogeschool Breda
              </div>
              <h1 className="hero-h1-sub">Hallo, ik ben</h1>
              <h1 className="g-text hero-h1-name">Dian van Noort.</h1>
              <p className="hero-lead">
                23 jaar, student Commerciële Economie aan Avans Hogeschool Breda.
              </p>
              <div className="hero-btns">
                <a href="/jaar-4" className="btn">Bekijk mijn werk</a>
                <a href="#over-mij" className="btn-ghost">Over mij</a>
              </div>
            </div>

            <div className="reveal-right">
              <div className="glow-card tilt hero-card">
                <div className="hero-avatar-wrap">
                  <div className="hero-avatar-glow" />
                  <img src="/home/dian.png" alt="Dian van Noort" className="hero-avatar-img" />
                </div>
                <h3 className="hero-card-name">Dian van Noort</h3>
                <p className="hero-card-subtitle">Commerciële Economie</p>
                <div className="divider divider-center" />
                {[
                  { label: "Studentnummer", value: "2207443" },
                  { label: "Leerjaar", value: "Leerjaar 4, kring 270-CE4AF325" },
                  { label: "School", value: "Avans Hogeschool" },
                  { label: "Locatie", value: "Breda" },
                ].map((item, i) => (
                  <div key={i} className="hero-info-row">
                    <span className="hero-info-label">{item.label}</span>
                    <span className="hero-info-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== STATS ===== */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: "4", label: "Jaar studie" },
              { num: "20+", label: "Pagina's" },
              { num: "4", label: "Stages" },
              { num: "2026", label: "Afstuderen" },
            ].map((s, i) => (
              <div key={i} className="glow-card reveal stat-card">
                <div className="stat-num g-text">{s.num}</div>
                <div className="divider stat-divider" />
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== OVER MIJ ===== */}
      <section id="over-mij" className="section">
        <div className="container">
          <div className="over-mij-grid">
            <div className="reveal-left">
              <div className="badge over-mij-badge">
                <span className="badge-dot" />
                Over mij
              </div>
              <h2 className="over-mij-h2">Mijn <span className="g-text">verhaal</span></h2>
              <div className="divider over-mij-divider" />
              <p className="over-mij-p">
                Ik ben Dian van Noort, 23 jaar en sinds dit jaar (2025/2026) gestart op de hogeschool in Breda.
              </p>

              <h3 className="cv-subtitle">Huidig CV</h3>
              <div className="cv-wrap" onClick={openCv}>
                <img loading="lazy" decoding="async" src="/home/cv.png" alt="CV Dian van Noort" className="cv-preview-img" />
                <div className="cv-overlay hide-mobile">
                  <div className="cv-overlay-btn">Vergroot CV</div>
                </div>
              </div>
              <p className="cv-hint">Klik om te vergroten</p>
            </div>

            <div className="reveal-right hide-mobile profile-col">
              <div className="profile-wrap">
                <div className="profile-glow" />
                <img loading="lazy" decoding="async" src="/home/dian.png" alt="Dian van Noort" className="profile-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== POSTS SLIDER ===== */}
      <section className="section">
        <div className="container">
          <div className="reveal section-heading">
            <h2>Recente <span className="g-text">opdrachten</span></h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-padded"
          >
            {myPosts.map((post, i) => (
              <SwiperSlide key={i}>
                <a href={post.url} className="glow-card card-hover post-card">
                  <div
                    className={`post-thumb${!post.img ? ' post-thumb-empty' : ''}`}
                    style={post.img ? { backgroundImage: `url(${post.img})` } : undefined}
                  >
                    {!post.img && <span className="post-thumb-icon">📁</span>}
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-desc">{post.desc}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="glow-line" />

      {/* ===== FOOTER ===== */}
      <footer className="home-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 className="g-text footer-brand">Dian van Noort</h3>
              <p className="footer-brand-desc">
                Student Commerciële Economie aan de Avans Hogeschool Breda.
              </p>
            </div>
            <div>
              <span className="footer-section-heading">Navigatie</span>
              <div className="footer-nav-links">
                {footerLinks.map((item, i) => (
                  <a key={i} href={item.href} className="footer-nav-link">{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <span className="footer-section-heading">Contact</span>
              <button onClick={openCv} className="footer-cv-btn">
                📄 Bekijk mijn CV
              </button>
              <p className="footer-email">dcym.vannoort@student.avans.nl</p>
            </div>
          </div>
          <div className="divider footer-divider" />
          <div className="footer-bottom">
            <p className="footer-copy">© {new Date().getFullYear()} Dian van Noort.</p>
            <p className="footer-copy">
              Gebouwd door{" "}
              <a href="https://webbreda.nl" target="_blank" rel="noopener noreferrer" className="footer-author-link">
                Yazan
              </a>{" "}☕
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
