import React from 'react'
import {BsBrightnessHigh} from "react-icons/bs"
import "./selected.css"
import {VscStarFull} from "react-icons/vsc"
function Selected() {
  return (
    <div id='product'>
        <div className="container selected__container">
            <h1>SELECTED</h1>
            <div className="project">
                <div className='circle__icon'>
            <VscStarFull className="right"/>
            <div className="selected__circle">
                <p>02</p>
            </div>
            <VscStarFull className="left"/>
            </div>
            <h2>PROJECT <BsBrightnessHigh className='reduce2'/></h2>
            </div>
           

        </div>

    </div>
  )
}

export default Selected