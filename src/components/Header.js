// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-container">
        <div className="header-content">
          <h1>Hi, I'm Irish Prajapati</h1>
          <h2>Backend Developer | Python • FastAPI • PostgreSQL • Django</h2><br></br>
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