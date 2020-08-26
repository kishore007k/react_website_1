import React from "react";
import Image1 from "../assets/img/Project/Kishore_1-01.jpg";
import Image2 from "../assets/img/Project/Drone_assembly.jpg";
import Image3 from "../assets/img/Project/USB.JPG";
import Image4 from "../assets/img/Project/Capture.jpg";
import Image5 from "../assets/img/Project/Capture-2.jpg";
import Image6 from "../assets/img/Project/Capture-4.jpg";

const Projects = () => {
  return (
    <React.Fragment>
    <section id="projects">
      <div className="pimg2">
      <div className="itext">
        <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
          Recent <span>Projects</span>
          </h1>
        </div>
        <div className="all-projects">
          <div className="project-item">
          <div className="project-info">
            <h1>Project 1</h1>
            <h2>Vector Art</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto
            cupiditate voluptatum impedit unde rem ipsa distinctio illum quae
            mollitia ut, accusantium eius odio ducimus illo
            </p>
          </div>
          <div className="project-img">
            <img src={Image1} alt="img" />
          </div>
          </div>
          <div className="project-item">
          <div className="project-info">
            <h1>Project 2</h1>
            <h2>Coding is Love</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto
            cupiditate voluptatum impedit unde rem ipsa distinctio illum quae
            mollitia ut, accusantium eius odio ducimus illo
            </p>
          </div>
          <div className="project-img">
            <img src={Image2} alt="img" />
          </div>
          </div>
          <div className="project-item">
          <div className="project-info">
            <h1>Project 3</h1>
            <h2>Coding is Love</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto
            cupiditate voluptatum impedit unde rem ipsa distinctio illum quae
            mollitia ut, accusantium eius odio ducimus illo
            </p>
          </div>
          <div className="project-img">
            <img src={Image3} alt="img" />
          </div>
          </div>
          <div className="project-item">
          <div className="project-info">
            <h1>Project 4</h1>
            <h2>Coding is Love</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto
            cupiditate voluptatum impedit unde rem ipsa distinctio illum quae
            mollitia ut, accusantium eius odio ducimus illo
            </p>
          </div>
          <div className="project-img">
            <img src={Image4} alt="img" />
          </div>
          </div>
          <div className="project-item">
          <div className="project-info">
            <h1>Project 5</h1>
            <h2>Coding is Love</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto
            cupiditate voluptatum impedit unde rem ipsa distinctio illum quae
            mollitia ut, accusantium eius odio ducimus illo
            </p>
          </div>
          <div className="project-img">
            <img src={Image5} alt="img" />
          </div>
          </div>
          <div className="project-item">
          <div className="project-info">
            <h1>Project 6</h1>
            <h2>Coding is Love</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto
            cupiditate voluptatum impedit unde rem ipsa distinctio illum quae
            mollitia ut, accusantium eius odio ducimus illo
            </p>
          </div>
          <div className="project-img">
            <img src={Image6} alt="img" />
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Projects;
