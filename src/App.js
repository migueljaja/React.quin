import React, { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/footer";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectSection = useRef(null);

  const projects = [
    {
      title: "Gestor de Tareas",
      description: "Aplicación para organizar tus tareas diarias.",
      image: "https://picsum.photos/400/250?random=1",
      url: "https://github.com/facebook/react", 
    },
    {
      title: "E-commerce React",
      description: "Tienda virtual creada con React y Firebase.",
      image: "https://picsum.photos/400/250?random=2",
      url: "https://react.dev",  
    },
    {
      title: "Chat en Tiempo Real",
      description: "Chat interactivo con Socket.io y Node.js.",
      image: "https://picsum.photos/400/250?random=3",
      url: "", 
    },
  ];

  const scrollToProjects = () => {
    projectSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewMore = (project) => {
    if (project.url) {
      window.open(project.url, "_blank");
    } else {
      setSelectedProject(project);
    }
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="App">
      <Navbar />
      <Hero onScrollToProjects={scrollToProjects} />
      <section className="projects" ref={projectSection}>
        <h2>🚀 Mis Proyectos</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} onViewMore={() => handleViewMore(p)} />
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p>
              Este proyecto aún no tiene un enlace disponible.
              <br /> En desarrollo 🚀
            </p>
            <button className="btn" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
