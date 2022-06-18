import React from 'react'
import "./project10.css"
import first from "../assets/first.jpg"
function Project10() {
  return (
    <div>
      <div className="view">
    <div className="contact__view">
      <p>VIEW <br />
      ALL
      </p>
    </div>
      
      <div className="container project11__container">
        <figure>
            <img src={first} alt="" />
            <figcaption className='fig10'>travel app</figcaption>
        </figure>
        <p className='fig10'>App Design</p>
    </div>
    </div>
    </div>
  )
}

export default Project10