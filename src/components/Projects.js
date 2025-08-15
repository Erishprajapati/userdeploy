import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Library Management API",
      desc: "A full-featured library system built with FastAPI and PostgreSQL. Handles books, members, borrowing, and returns with secure JWT authentication.",
      codeLink: "https://github.com/Erishprajapati/LibraryAPI-Creatio",
      liveLink: "https://libraryapi-creatio-1.onrender.com"
    },
    {
      title: "E-Commerce API",
      desc: "Scalable backend for an online store using FastAPI, JWT authentication, and PostgreSQL. Features include product catalog, cart, orders, payments simulation, and admin dashboard endpoints.",
      codeLink: "https://github.com/Erishprajapati/EcommerceAPI",
      liveLink: "https://ecommerceapi-production-8d3a.up.railway.app/docs"
    },
    {
      title: "Hospital Management System",
      desc: "Backend for a hospital app handling doctors, patients, appointments, and medical records. Built with async FastAPI, SQLAlchemy ORM, and secure token-based authentication.",
      codeLink: "https://github.com/Erishprajapati/hospital-management-system1",
      liveLink: "https://hospital-management-system1-o63yod5j9-erishprajapatis-projects.vercel.app/api/v1/login_view"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      {/* Centered Container */}
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