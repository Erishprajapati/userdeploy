// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-container">
        <div className="header-top">
          <div className="header-title-section">
            <h1>Irish Prajapati</h1>
            <h2>Backend Developer</h2>
          </div>
          <div className="profile-image-container">
            <img
              src="/profile.jpg"
              alt="Irish Prajapati"
              className="profile-image"
            />
          </div>
        </div>
        <div className="header-description">
          <p>
            I'm a <em>backend developer</em> and a <em>problem solver</em> who loves crafting scalable and efficient digital systems. 
            My approach is shaped by clean architecture, focusing on performance, reliability, and maintainable code.
          </p>
          <p>
            I enjoy self-driven projects that challenge me to research, build, and improve. 
            Whether coding APIs or designing database systems, I'm always exploring new tools and better solutions.
          </p>
          <p>
            This is my personal space to build, break, and share. 
            I also write about engineering and backend development, keeping things simple and practical.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;