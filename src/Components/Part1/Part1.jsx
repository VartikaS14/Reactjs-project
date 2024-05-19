import React from 'react'
import './Part1.css'
import part2 from '../../assets/part2.png'

const Part1 = () => {
  return (
    <div className='part'>
        <div className="cont">
            <h1>A heading is what you need here</h1>
            <p className="p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed esse, ut deleniti, odit recusandae aperiam dolor aut repellat laborum iure assumenda eius natus aspernatur, dicta rem minus animi incidunt voluptatem?</p>
            <p className="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit enim adipisci consequuntur, deserunt porro dolores! Ad dolorem porro alias veritatis error dolor culpa autem aperiam.</p>
        </div>
        <div className="imag"> <img src={part2} /> </div>
       
      
    </div>
      )
}

export default Part1
