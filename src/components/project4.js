import React from 'react'
import "./project4.css"
import fifth from "../assets/fifth.jpg"
function Project4() {
  return (
    <div>
       <div className="container project4__container">
       <figure>
            <img src={fifth} alt="" />
            <figcaption className='project4__fig'>the rooftoop beekeper</figcaption>
        </figure>
        <p className='project4__fig'>Web Design</p>
       </div>
    </div>
  )
}

export default Project4