import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


function welcome({pageSelected, setPageSelected}) {
  return (
    <section className="section-one">

    <div className="section-one-content">

      <h2>Jugurta Maouchi
        <span className='span'>portfolio</span>
      </h2>

      <div className="section-one-content-p">
        <div className="border"></div>
        <p>Get to know who im and what i can do!</p>
        <div className="border"></div>
      </div> 

      <div className="button">
        <button onClick={() => setPageSelected(true)}><Link to={'/about'}>Get started</Link></button>
      </div> 

    </div>
    
  </section>
  ) 
}

export default welcome