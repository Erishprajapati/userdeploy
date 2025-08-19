// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-container">
        <div className="header-content">
          <h1>Hi, I'm Irish Prajapati</h1>
          <h2>
            Backend Developer |{' '}
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Python
            </a>{' '}
            •{' '}
            <a
              href="https://fastapi.tiangolo.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              FastAPI
            </a>{' '} •{' '}
            <a
              href="https://docs.djangoproject.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Django
            </a>
          </h2>
          <br />
          <p>
            Designing high-performance APIs and resilient database systems that scale.
            Focused on clean architecture, async workflows, and production-grade backend solutions.
          </p>
        </div>
        <div className="header-image">
          <img
            src="/profile.jpg"  // ✅ Correct path
            alt="Irish Prajapati"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;