import React from 'react'
import "../navbar/navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__container">
          <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <span className='logo'>Saddam Booking</span>
          </Link>
            <div className="nav__items">
                <button className="nav__button">Register</button>
                <button className="nav__button">Login</button>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar