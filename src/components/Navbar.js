import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🌟 Mi Portafolio</h1>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
