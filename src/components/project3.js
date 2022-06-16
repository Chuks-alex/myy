import React from 'react'
import "./project3.css"
import fourth from "../assets/fourth.jpg"

function Project3() {
  return (
    <div>
        <div className="container project3__container">
            <figure>
                <img src={fourth} alt="" />
                <figcaption>online course app</figcaption>

            </figure>
            <p>App Design</p>
        </div>
    </div>
  )
}

export default Project3