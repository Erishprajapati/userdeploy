// Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Library Management API",
      desc: (
        <>
          Full-featured library system with <strong>JWT auth</strong>, borrowing logic, and role-based access.
          Built with <strong>FastAPI (async)</strong>, <strong>PostgreSQL</strong>, and <strong>SQLAlchemy ORM</strong>.
          Optimized queries reduced response time by 60%. Designed with clean REST structure and error handling.
        </>
      ),
      codeLink: "https://github.com/Erishprajapati/LibraryAPI-Creatio",
      liveLink: "https://libraryapi-creatio-1.onrender.com"
    },
    {
      title: "E-Commerce API",
      desc: (
        <>
          Scalable backend supporting product catalog, cart, orders, and payment simulation.
          Features <strong>async endpoints</strong>, <strong>database transactions</strong>, and <strong>admin endpoints</strong>.
          Used <strong>Pydantic models</strong> for validation and <strong>Uvicorn</strong> for high throughput.
        </>
      ),
      codeLink: "https://github.com/Erishprajapati/EcommerceAPI",
      liveLink: "https://ecommerceapi-production-8d3a.up.railway.app/docs"
    },
    {
      title: "Hospital Management System",
      desc: (
        <>
          Secure backend handling doctors, patients, appointments, and medical records.
          Built with <strong>async FastAPI</strong>, <strong>SQLAlchemy</strong>, and <strong>token-based auth</strong>.
          Implemented <strong>foreign key constraints</strong> and <strong>data integrity checks</strong> for reliability.
        </>
      ),
      codeLink: "https://github.com/Erishprajapati/hospital-management-system1",
      liveLink: "https://hospital-management-system1-o63yod5j9-erishprajatis-projects.vercel.app/api/v1/login_view"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-wrapper">
        <h3 className="section-title">My Projects</h3>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <div className="project-links">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-code"
                >
                  Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-live"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;