import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Content1 from "./Components/Content1/Content1";
import Part from "./Components/Part/Part";
import Content2 from "./Components/Content2/Content2";
import Part1 from "./Components/Part1/Part1";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Content1 />
      <Part />
      <Content2 />
      <Team />
      <Part1 />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
