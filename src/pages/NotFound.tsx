import { Link, useSearchParams } from "react-router-dom";

const copy = {
  en: { h1: ["This page", "does not exist."], lead: "The address may be wrong, or the page may have moved.", back: "Go to home page", to: "/" },
  pt: { h1: ["Esta página", "não existe."], lead: "O endereço pode estar errado, ou a página pode ter mudado de lugar.", back: "Ir para o início", to: "/?lang=pt" },
};

const NotFound = () => {
  const [params] = useSearchParams();
  const t = copy[params.get("lang") === "pt" ? "pt" : "en"];

  return (
    <div className="ds">
      <main className="hero hero-full">
        <svg className="waves" viewBox="0 0 960 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 90 q40 -22 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" />
          <path d="M0 362 q60 26 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" />
        </svg>
        <div className="container">
          <span className="badge">404</span>
          <h1>
            {t.h1[0]}
            <br />
            <em>{t.h1[1]}</em>
          </h1>
          <p className="lead">{t.lead}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to={t.to}>{t.back}</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
