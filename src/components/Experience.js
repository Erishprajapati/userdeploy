// components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section className="work-section" id="work">
      <div className="container">
        <h2 className="section-title">Work</h2>
        <div className="work-item">
          <div className="work-header">
            <h3>Backend Developer Intern</h3>
            <span className="work-type">Internship</span>
          </div>
          <div className="work-date">Aug 2025 - Nov 2025</div>
          <p className="work-company">Smart Saauzi Solutions Pvt. Ltd.</p>
          <p className="work-description">
            Developed and maintained Django-based backend services for internal business applications. 
            Designed RESTful APIs with JWT authentication and PostgreSQL integration. 
            Collaborated with frontend developer to deliver full-stack features on schedule. 
            Deployed the application on Render and Docker. 
            Learned about the feature branch and main branch workflow on github.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;