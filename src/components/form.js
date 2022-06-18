import React from 'react'
import "./form.css"
function Form() {
  return (
    <div id='contact'>
        <div className="container form__container">

       <div className="contained">
        <label className='formed' htmlFor="name">NAME <small>*</small></label>
        <input  className='input' type="text" placeholder='CHUKWU EBUBE'/>
        <label className='formed' htmlFor="email">EMAIL <small>*</small></label>
        <input className='input' type="text" name='email' />
        </div>
        <br />
        <br />
       
        <br /> <br />
        <br />
        <br />
       
        <br /> <br />
        <br />
        <label className='messaged' htmlFor="message">MESSAGE <small>*</small></label>
        <input className='message' type="text" name='message' />
        <br />
       
        <br /> <br />
        <br />
        <button className="btn" type='submit'>send message</button>
        </div>
    </div>
  )
}

export default Form