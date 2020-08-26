import React from "react";
import Image1 from "../assets/img/profile.jpeg";

const About = () => {
  return (
    <React.Fragment>
    <section id="about">
      <div className="about container">
      <div className="col-left">
        <div className="about-img">
        <img src={Image1} alt="img" />
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">
        About <span>me</span>
        </h1>
        <h2>Front End Developer</h2>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        velit alias eius non illum Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maxime, consequuntur sapiente qui totam quis doloribus,
        aliquam quaerat numquam asperiores dolorem esse illo
        </p>
        <a
        href="https://1drv.ms/w/s!Ao2oeKs2qYxTjnKw3HU8bz4cO_tB"
        type="button"
        className="cta"
        >
        Download Resume
        </a>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default About;
