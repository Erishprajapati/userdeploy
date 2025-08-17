// Skills.js
import React from 'react';

const Skills = () => {
  const skills = [
    "Python", "FastAPI", "Django", "PostgreSQL", "SQLAlchemy",
    "REST APIs", "JWT", "Git"
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h3 className="section-title">Tech Stack</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;