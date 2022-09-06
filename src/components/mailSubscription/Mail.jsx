import React from 'react'
import "./mail.css"

const Mail = () => {
  return (
    <div className='mail'>
        <h1 className="mail__title">Save time, save money!</h1>
        <span className="mail__description">Sign up and we'll send the best deals to you</span>
        <div className="mail__input__container">
            <input type="text" placeholder='Your email'/>
            <button>Subscribe</button>
        </div>
        <div className="mail__checkbox">
            <input type="checkbox" />
            <span>Send me a link to get the FREE Booking.com app!</span>
        </div>
    </div>
  )
}

export default Mail