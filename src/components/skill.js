// Skills.js
import React from 'react';

const Skills = () => {
  const skillData = [
    { name: "Python", icon: "python", color: "#3776ab" },
    { name: "FastAPI", icon: "fastapi", color: "#0f9d58" },
    { name: "Django", icon: "django", color: "#0c4b33" },
    { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
    { name: "SQLAlchemy", icon: "sqlalchemy", color: "#ff6b6b" },
    { name: "REST APIs", icon: "api", color: "#9b59b6" },
    { name: "JWT", icon: "jsonwebtokens", color: "#e67e22" },
    { name: "Git", icon: "git", color: "#f34f29" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "Postman", icon: "postman", color: "#ff6c37" },
  ];

  // Reuse your design system with inline styles
  const styles = {
    section: {
      padding: '80px 0',
      textAlign: 'center',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '600',
      color: 'var(--text-primary)',
      marginBottom: '1.5rem',
      position: 'relative',
    },
    titleAfter: {
      content: '""',
      display: 'block',
      width: '50px',
      height: '3px',
      background: 'var(--accent)',
      margin: '0.8rem auto',
      borderRadius: '2px',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '0.8rem',
      marginTop: '1rem',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#0f1b3d',
      color: '#fff',
      padding: '0.6rem 1.2rem',
      borderRadius: '6px',
      border: '1px solid var(--accent)',
      fontSize: '0.9rem',
      fontWeight: '500',
      gap: '0.6rem',
      transition: 'all 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.08)',
      backgroundColor: '#1a2b5c',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    },
    icon: {
      width: '20px',
      height: '20px',
    },
    name: {
      marginLeft: '0.3rem',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h3 style={styles.title}>Tech Stack</h3>
        {/* Simulating ::after with a div */}
        <div style={styles.titleAfter}></div>

        <div style={styles.grid}>
          {skillData.map((skill) => (
            <div
              key={skill.name}
              style={styles.card}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.cardHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, styles.card);
              }}
            >
              {/* Load official SVG icon from simpleicons.org */}
              <img
                src={`https://cdn.simpleicons.org/${skill.icon}`}
                alt={skill.name}
                style={styles.icon}
                onError={(e) => {
                  // Fallback if icon fails to load
                  e.target.style.display = 'none';
                }}
              />
              <span style={styles.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;