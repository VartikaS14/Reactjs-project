import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About";
import Content1 from "./Components/Content1/Content1";
import Part from "./Components/Part/Part";
import Part1 from "./Components/Part1/Part1";
const App =() =>
  {
    return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Content1/>
        <Part/>
        <Part1/>
       

      </div>
    )
  }

  export default App