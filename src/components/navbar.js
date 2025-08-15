import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container container">
        <a href="#home" className="nav-logo">Irish Prajapati</a>
        <div className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;