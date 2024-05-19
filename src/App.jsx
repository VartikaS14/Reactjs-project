import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About";
import Content1 from "./Components/Content1/Content1";


const App =() =>
  {
    return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Content1/>
       

      </div>
    )
  }

  export default App