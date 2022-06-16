import React from 'react'
import "./project2.css"
import third from "../assets/third.jpg"
function Project2() {
  return (
    <div>
        <div className="container product2__container">
            <figure>
                <img src={third} alt="" />
                <figcaption>the rooftop beekeper</figcaption>
               <p> website design</p>
            </figure>
        </div>
    </div>
  )
}

export default Project2