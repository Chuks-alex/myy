import React from 'react'
import "./project2.css"
import third from "../assets/third.jpg"
function Project2() {
  return (
    <div>
        <div className="container product2__container">
            <figure>
                <img src={third} alt="" />
                <figcaption className='project2__caption'>the rooftop beekeper</figcaption>
               <p className='project2__caption'> website design</p>
            </figure>
        </div>
    </div>
  )
}

export default Project2