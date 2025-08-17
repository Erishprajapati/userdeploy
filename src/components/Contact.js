// components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h3 className="section-title">Let's Connect</h3>
        <p className="contact-text">
          I'm always interested in new opportunities and collaborations. 
          Looking to work on challenging backend systems and API development.
        </p>
        <div className="contact-links">
          <a href="mailto:irishmjn@gmail.com">Email</a> •{" "}
          <a
            href="https://github.com/Erishprajapati"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a> •{" "}
          <a
            href="https://www.linkedin.com/in/eris-prajapati-a744ba259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;