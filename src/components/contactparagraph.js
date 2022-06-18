import React from 'react'
import "./contactparagraph.css"
import {BsBrightnessHigh} from "react-icons/bs"
import phone from "../assets/phone.jpg"
import {VscStarFull} from "react-icons/vsc"
function Contactparagraph() {
  return (
    <div>
        <div className="container contact__paragraph">
            <p>if you have a general or project enquiry, please drop me an email or contact <BsBrightnessHigh/></p>
         
            <VscStarFull className='small__icon'/>

            <img src={phone} alt="" />
            <div className="paragraph__icon">
            <VscStarFull className='first__name'/>
            <VscStarFull className='second__name' />
            <VscStarFull className='third__name'/>
            </div>
        </div>
    </div>
  )
}

export default Contactparagraph