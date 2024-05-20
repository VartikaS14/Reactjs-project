import React from 'react'
import './Content2.css'
import { Content } from "../../Components/Content/Content";

const Content2 = () => {
  return (
    <div className='content2'>
       
         <div className='content'>
         <Content
          title="A Fantastic Heading"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
        />
         <button className='btn'>Get Started Today</button>
      
    </div>
    </div>
  )
}

export default Content2
