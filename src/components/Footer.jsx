import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
    <section id="footer">
      <div className="footer container">
      <div className="brand">
        <h1>
        <span>K</span>ishore<span> K</span>umar
        </h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      <div className="social-icons">
        <a href="https://twitter.com/kishorekumarst1" target="_blank">
        <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
        href="https://www.facebook.com/people/Kishore-Kumar/100008567134618"
        target="_blank"
        >
        <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a
        href="https://www.linkedin.com/in/kishore-kumar-6bb5801a2/"
        target="_blank"
        >
        <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/kishore007k/" target="_blank">
        <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
      <p>Copyright © 2020 Kishore-Kumar. All rights reserved</p>
      </div>
      {/* <!-- End of Parllax --> */}
    </section>
    </React.Fragment>
  );
};

export default Footer;
