import React, { useState } from 'react'
import "./menu.css"
import {IoMdArrowDropright} from "react-icons/io"
function Menu() {
  let [activeNave, setActiveNav] = useState("#")
  return (

    <nav>
        <div className="container menu__container">
            <h4 className='dike'>Chukwu Ebube</h4>
            <div className="link">
                {/* <ul className='links'>
                    <li onClick={()=>setActiveNav("#")} className={activeNave === "#"? "active" : ""}><a href="#">home</a></li>
                    <li onClick={()=>setActiveNav("#product")} className={activeNave === "#product"? "active" : ""}><a href="#product">product</a></li>
                    <li onClick={()=>setActiveNav("#about")} className={activeNave === "#about"? "active" : ""}><a href="#about">about</a></li>
                    <li onClick={()=>setActiveNav("#contact")} className={activeNave === "#contact"? "active" : ""}><a href="#contact">contact</a></li>
                </ul> */}

                <nav>
                  <a href="#" onClick={()=> setActiveNav("#")} className={activeNave === "#" ? "active" : ""}>home</a>
                  <a onClick={()=> setActiveNav("#product")} href="#product" className={activeNave === "#product" ?  "active" : ""}>product</a>
                  <a onClick={()=> setActiveNav("#about")} href="#about" className={activeNave === "#about" ? "active" : ""}>about</a>
                  <a onClick={()=> setActiveNav("#contact")} href="#contact" className={activeNave === "#contact"? "active" : ""}>contact</a>
                </nav>
            </div>
        </div>
    </nav>
  )
}

export default Menu

