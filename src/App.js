import React from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
