import React, { useState } from 'react'
import "./menu.css"
import {IoMdArrowDropright} from "react-icons/io"
import {GiHamburgerMenu} from  "react-icons/gi"
import {FaTimes} from "react-icons/fa"
function Menu() {
  let [activeNave, setActiveNav] = useState("#")
  let [nav, setnav] = useState(false)
  let [ showlinks, setShowLinks]  = useState(false)
  
  return (

    <nav>
        <div className="container menu__container">
            <h4 className='dike'>Chukwu Ebube</h4>
            
           {showlinks &&
            <div className="link">
              <a href="#" onClick={()=> setActiveNav("#")} className={activeNave === "#" ? "active" : ""}>home</a>
              <a onClick={()=> setActiveNav("#product")} href="#product" className={activeNave === "#product" ?  "active" : ""}>product</a>
              <a onClick={()=> setActiveNav("#about")} href="#about" className={activeNave === "#about" ? "active" : ""}>about</a>
              <a onClick={()=> setActiveNav("#contact")} href="#contact" className={activeNave === "#contact"? "active" : ""}>contact</a> 
        </div>
           
           }
            <button className='bttt' onClick={()=> setShowLinks(!showlinks)}><GiHamburgerMenu/></button>

        </div>
    </nav>
  )
}

export default Menu

