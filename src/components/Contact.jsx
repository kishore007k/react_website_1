import React from "react";
import { Contacts, Business, Email } from "@material-ui/icons";

const Contact = () => {
  return (
    <React.Fragment>
    <section id="contact">
      <div className="contact container">
      <div>
        <h1 className="section-title">
        Contact <span>info</span>
        </h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
        <div className="icon">
          <Contacts />
        </div>
        <div className="contact-info">
          <h1>Phone</h1>
          <h2>+91 735 850 4568</h2>
        </div>
        </div>
        <div className="contact-item">
        <div className="icon">
          <Email />
        </div>
        <div className="contact-info">
          <h1>Email</h1>
          <h2>kishorekumarstar07@gmail.com</h2>
        </div>
        </div>
        <div className="contact-item">
        <div className="icon">
          <Business />
        </div>
        <div className="contact-info">
          <h1>Address</h1>
          <h2>Madipakkam, Kaiveli, Chennai-91</h2>
        </div>
        </div>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Contact;
