import React from 'react'
import {VscStarFull} from "react-icons/vsc"
import "./contact.css"
import {BsBrightnessHigh} from "react-icons/bs"
function Contact() {
  return (
    <div id='contact'>

        <div className="container contact__container">
            <h1>GET IN</h1>
            <div className="contact__circle">
                <div className="main__circle">
                <VscStarFull className='contact__right'/>
                <div className="circled__contact">
                    <p>03</p>
                </div>
                <VscStarFull className='contact__left'/>
                </div>
                <h2>TOUCH <BsBrightnessHigh className='smally'/></h2>
            </div>
        </div>
    </div>
  )
}

export default Contact