import React from 'react'
import "./paragraph.css"
import ROBOTO2 from "../assets/ROBOTO2.jpg"
import {BsBrightnessHigh} from "react-icons/bs"
import {VscStarFull} from "react-icons/vsc"
function Paragraph() {
  return (
    <section className='container'>
<div className="paragraph__container">
<h3>in my two years of <strong>developement</strong> i have turned <strong>ideas into amazing </strong> products through the world of creative and interactive <strong> ideas & design <BsBrightnessHigh/></strong></h3>

<VscStarFull/>
<div className="paragraph__image">
<img src={ROBOTO2} alt="" />

</div>
<div className="paragraphe__icon">
<VscStarFull className='one__name'/>
<VscStarFull className='two__name' />
<VscStarFull className='three__name'/>
</div>
</div>
 

    </section>
  )
}

export default Paragraph

