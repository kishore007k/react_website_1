import React from "react";

const Header = () => {
  return (
    <React.Fragment>
    <section id="header">
      <div className="header container">
      <div className="Nav-Bar">
        <div className="brand">
        <a href="#hero">
          <h1>
          <span>K</span>ishore <span>K</span>umar
          </h1>
        </a>
        </div>
        <div className="Nav-list">
        <div className="Hamburger">
          <div className="Bar"></div>
        </div>
        <ul>
          <li>
          <a href="#hero" data-after="Home">
            Home
          </a>
          </li>
          <li>
          <a href="#skills" data-after="skill">
            Skills
          </a>
          </li>
          <li>
          <a href="#projects" data-after="Projects">
            Projects
          </a>
          </li>
          <li>
          <a href="#about" data-after="About">
            About
          </a>
          </li>
          <li>
          <a href="#contact" data-after="Contact">
            Contact
          </a>
          </li>
        </ul>
        </div>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Header;
