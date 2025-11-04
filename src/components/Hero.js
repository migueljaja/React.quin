import React from "react";

export default function Hero({ onScrollToProjects }) {
  return (
    <header className="hero">
      <h2> Hola 👋 Soy <span className="resaltado">Miguel Angel</span></h2>
      <p>
           👨‍💻 proyectos recomendados para visiar 👨‍💻
      </p>
      <button className="btn" onClick={onScrollToProjects}>Ver proyectos</button>
    </header>
  );
}
