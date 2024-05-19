import React from 'react'
import './Part.css'
import part1 from '../../assets/part1.png'

const Part = () => {
  return (
    <div className='parts'>
        <div className="imag"> <img src={part1} /> </div>
        <div className="cont">
            <h1>A heading is what you need here</h1>
            <p className="p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse, ut deleniti, odit recusandae aperiam dolor aut repellat laborum iure assumenda eius natus aspernatur, dicta rem minus animi incidunt voluptatem?</p>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit enim adipisci consequuntur, deserunt porro dolores! Ad dolorem porro alias veritatis error dolor culpa autem aperiam.</p>
        </div>
       
      
    </div>
  )
}

export default Part
