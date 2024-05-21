import React from "react";
import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Design your eyeballs will thank you for</h1>
        <Button />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Hero;
