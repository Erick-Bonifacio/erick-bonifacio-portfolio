import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SimpleThemeToggle } from "@/components/SimpleThemeToggle";
import { Mascot } from "@/components/Mascot";
import { ProjectDeck } from "@/components/ProjectDeck";
import { content, links } from "@/content";

// Section title with its closing period in coral.
const H2 = ({ children }: { children: string }) => (
  <h2>
    {children.slice(0, -1)}
    <span className="dot">{children.slice(-1)}</span>
  </h2>
);

export default function Portfolio() {
  const [params] = useSearchParams();
  const lang = params.get("lang") === "pt" ? "pt" : "en";
  const t = content[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.title;
  }, [lang, t.title]);

  return (
    <div className="ds">
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-logo" href="#home" onClick={() => setMenuOpen(false)}>Erick Bonifacio</a>
          <div className={menuOpen ? "nav-links open" : "nav-links"} id="nav-links">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </div>
          <div className="nav-actions">
            <Link className="lang-toggle" to={t.switchLang.to} aria-label={t.switchLang.aria} title={t.switchLang.aria}>
              {t.switchLang.label}
            </Link>
            <SimpleThemeToggle label={t.themeAria} />
            <button className="theme-toggle menu-toggle" aria-label="Menu" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? <path d="M3 3l10 10M13 3L3 13" /> : <path d="M2 4h12M2 8h12M2 12h12" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <header className="hero" id="home">
        <svg className="waves" viewBox="0 0 960 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 62 q40 -22 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" />
          <path d="M0 362 q60 26 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" />
        </svg>
        <div className="container hero-grid">
          <div>
          <span className="badge">{t.hero.badge}</span>
          <h1>
            {t.hero.h1[0]}
            <br />
            <em>{t.hero.h1[1]}</em>
          </h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">{t.hero.primary}</a>
            <a className="btn btn-ghost" href={t.cvFile} download>{t.hero.secondary}</a>
          </div>
          </div>
          <Mascot />
        </div>
      </header>

      <main>
        <section className="section section-plain">
          <div className="container stats">
            {t.stats.map((stat) => (
              <div className="stat" key={stat.n}>
                <p className="stat-n">{stat.n}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <H2>{t.experience.h2}</H2>
            <p className="section-lead">{t.experience.lead}</p>
            <ol className="timeline section-body">
              {t.experience.items.map((job) => (
                <li key={job.title}>
                  <span className="mono">{job.date}</span>
                  <p className="timeline-title">{job.title}</p>
                  {job.note && <p className="timeline-note">{job.note}</p>}
                  <ul className="bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {job.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-deep" id="skills">
          <div className="container">
            <p className="eyebrow">{t.skills.eyebrow}</p>
            <H2>{t.skills.h2}</H2>
            <div className="grid-3 section-body">
              {t.skills.groups.map((group) => (
                <div className="card" key={group.label}>
                  <p className="card-label">{group.label}</p>
                  <p>{group.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <H2>{t.projects.h2}</H2>
            <div className="deck-wrap section-body">
              <ProjectDeck items={t.projects.items} labels={t.projects} />
            </div>
          </div>
        </section>

        <section className="section section-deep" id="background">
          <div className="container">
            <p className="eyebrow">{t.more.eyebrow}</p>
            <H2>{t.more.h2}</H2>
            <div className="grid-3 section-body">
              {t.more.cards.map((card) => (
                <div className="card" key={card.label}>
                  <p className="card-label">{card.label}</p>
                  <p className="card-title">{card.title}</p>
                  <p>{card.text}</p>
                  {card.meta && <span className="mono">{card.meta}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="grid-2">
            <div>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <H2>{t.contact.h2}</H2>
              <p className="contact-text">{t.contact.text}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`mailto:${links.email}`}>{t.contact.primary}</a>
                <a className="btn btn-ghost" href={t.cvFile} download>{t.contact.secondary}</a>
              </div>
            </div>
            <ul className="checklist">
              <li><a href={`mailto:${links.email}`}>{links.email}</a></li>
              <li><a href={`tel:${links.phone.replace(/[^+\d]/g, "")}`}>{links.phone}</a></li>
              <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/erickbonifacio</a></li>
              <li><a href={links.github} target="_blank" rel="noopener noreferrer">github.com/Erick-Bonifacio</a></li>
              <li>{t.contact.location}</li>
            </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="container">
        <footer className="footer">
          <div className="footer-brand">
            <span className="app-icon" />
            {t.footer}
          </div>
          <nav className="footer-links">
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${links.email}`}>Email</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
