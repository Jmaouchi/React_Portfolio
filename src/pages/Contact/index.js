import React, { useState } from 'react'
import './style.css'
import instagram from '../../images/instagram.png'
import email from '../../images/email.png'
import call from '../../images/call.png'
import ModelOV from './ModelOV'

function Contact() {

  return (
    <>
    <section  id="contacts" className="section-four">
        <div className="flex">
          <div className="border"></div>
          <h3>Get<span style={{ color:"black" }}>In Touch</span></h3> 
          <div className="border"></div>
        </div>
        <ModelOV />
        <div className="section-four-context">

          <div className="section-four-context-content">
            <a href='https://www.instagram.com/'><img src={instagram} alt="sss"  width="100px"></img></a> 
            <h5>My Instagram here</h5>
            <p>Follow me on instagram </p>
          </div>

          <div className="section-four-context-content">
            <img src={call} alt="this img is a call logo, or phone call logo that will describe that im talking about my phone number" width="100px"></img>
            <h5>My Phone Number</h5>
            <p>Call Me To:  210.668.9245</p>
          </div>

          <div className="section-four-context-content">
            <img src={email} alt="this img is the Email logo, that will describe that im talkig about email infos" width="100px"></img>
            <h5>My Emial Adress</h5>
            <p>Email Me To:  djigo.m@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact