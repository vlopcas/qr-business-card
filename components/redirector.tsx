"use client";

import { useEffect } from "react";

const destination = process.env.NEXT_PUBLIC_REDIRECT_URL ?? "https://links.vlopcas.dev";

export function Redirector() {
  useEffect(() => {
    const timer = window.setTimeout(() => window.location.replace(destination), 1350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="redirect-shell">
      <div className="ambient-line ambient-line-top" aria-hidden="true" />
      <section className="redirect-card" aria-labelledby="redirect-title">
        <span className="brand" aria-label="Victor Castro">
          VC<span className="brand-dot">.</span>
        </span>
        <h1 id="redirect-title">Redirecionando...</h1>
        <div className="progress" role="progressbar" aria-label="Abrindo página de links">
          <span />
        </div>
        <p>
          Se a página não abrir, <a href={destination}>continue para links.vlopcas.dev</a>.
        </p>
      </section>
      <div className="ambient-line ambient-line-bottom" aria-hidden="true" />
    </main>
  );
}

