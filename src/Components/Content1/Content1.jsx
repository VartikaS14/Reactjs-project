import React from 'react'
import './Content1.css'
import { Content } from "../../Components/Content/Content";
import Button from '../Button/Button'

const Content1 = () => {
  return (
    <div className='content1'>
       
         <div className='content'>
         <Content
          title="A Fantastic Heading"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
        />
         <Button/>
      
    </div>
    </div>
  )
}

export default Content1
