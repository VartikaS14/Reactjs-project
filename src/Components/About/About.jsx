import React from 'react'
import './About.css'
import { Card } from "../../Components/Cards/Card";

const About = () => {
  return (
    <div className="about">
         <Card
          title="A Fantastic Heading"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
        />
        <Card
          title="Good Day Blokes"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          title="Blaz Robar for President"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <Card
          title="Vote for Robar"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
       
         
    </div>
   
  )
}

export default About
