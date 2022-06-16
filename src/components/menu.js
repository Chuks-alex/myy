import React from 'react'
import "./menu.css"
import {IoMdArrowDropright} from "react-icons/io"
function Menu() {
  return (
    <nav>
        <div className="container menu__container">
            <h4>Chukwu Ebube</h4>
            <div className="link">
                <ul className='links'>
                    <li><IoMdArrowDropright/><a href="#home">home</a></li>
                    <li><a href="#product">product</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu