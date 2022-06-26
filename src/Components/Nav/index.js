import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

function Nav(pageSelected, setPageSelected) {

  return (
  <>
    <header>

      <h1>Web Developer</h1>
      
      <nav>
        <ul className='navbar'>
          <li ><a href="http://localhost:3000/">Home</a></li>
          <li><Link to={"about"}>About</Link></li>
          <li><Link to={"contact"}>Contact</Link></li>
          <li><Link to={"work"}>Work</Link></li>
        </ul>  
      </nav>

      <div className='logo'>
        <h2 data-text="Jugurta">Jugurta</h2>
      </div>
    </header>
  </>  
)
}

export default Nav