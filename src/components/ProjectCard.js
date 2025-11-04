import React from "react";

export default function ProjectCard({ title, description, image, onViewMore }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn" onClick={onViewMore}>
        Ver proyecto 🔗
      </button>
    </div>
  );
}
