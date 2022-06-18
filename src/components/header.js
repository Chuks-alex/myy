import React from 'react'
import download from "../assets/download.jpg"
import "./header.css"
import {BsBrightnessHigh} from "react-icons/bs"
function Header() {
  return (
    <div id='#'>
        <div className="container header__container">
            <h1>CREA<img className='header__image' src={download} alt="" />TIVE UI/UX DESIGNER BANGLADASH<BsBrightnessHigh className='reduce'/> </h1> 
        </div>
    </div>
  )
}

export default Header