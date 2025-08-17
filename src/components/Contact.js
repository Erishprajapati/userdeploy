// components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h3 className="section-title">Let's Connect</h3>
        <p className="contact-text" style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          I'm always interested in new opportunities and collaborations. 
          Looking to work on challenging backend systems and API development.
        </p>

        {/* Simple Icon Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            fontSize: '1.6rem',
            color: '#0a66c2', // LinkedIn blue
          }}
        >
          {/* Email */}
          <a
            href="mailto:irishmjn@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            style={{ color: '#0a66c2', textDecoration: 'none' }}
          >
            <i className="fas fa-envelope"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Erishprajapati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: '#0a66c2', textDecoration: 'none' }}
          >
            <i className="fab fa-github"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eris-prajapati-a744ba259/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: '#0a66c2', textDecoration: 'none' }}
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/er1s_prazapate/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: '#0a66c2', textDecoration: 'none' }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;