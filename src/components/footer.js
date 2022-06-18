import React from 'react'
import "./footer.css"
import {MdVerticalAlignTop} from "react-icons/md"
function Footer() {
  return (
    <div className='lastly'>
        <footer>
            <div className="last__one">
                <ul className='foote'>
                    <li className='footed'>FB.</li>
                    <li className='footed'>IN.</li>
                    <li className='footed'>LN.</li>
                    <li className='footed'>TW.</li>
                    <li className='footed'>DB.</li>
                    <li className='footed'>BE.</li>
                </ul>
                <div className="copyright">
                    <p>&copy; Right 2022 By Chukwu Ebube </p>
                </div>
                <div className="back__totop">
                  <MdVerticalAlignTop/>  <a href="#">Back On Top</a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer