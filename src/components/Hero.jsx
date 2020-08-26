import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
    <section id="hero">
      <div className="hero container">
      <div>
        <h1>
        Hello, <span></span>
        </h1>
        <h1>
        My Name is <span></span>
        </h1>
        <h1>
        Kishore Kumar<span></span>
        </h1>
        <h1>Welcome to my website</h1>
        <a href="#about" type="button" className="cta">
        Portfolio
        </a>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Hero;
