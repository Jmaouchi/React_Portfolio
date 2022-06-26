import React from 'react'
import img1 from '../../images/djigo.jpg'
import './style.css'

function About() {
  return (
    <section id="about-me" className="section-two">

    <div className="flex">
      <div className="border"></div>
      <h3>About <span style={{ color:"black" }}>Me</span></h3>
      <div className="border"></div>
    </div>

    <div className="section-two-content">

      <div className="image">
        <img src={img1} alt="My avatar"></img>
      </div>

      <div className="section-two-content-context">

        <div className="about-me-context">
          <h4>who Im I?</h4>
          <p> 
            Hello everyone and welcome to my Portfolio, my name is Jugurta Maouchi
             I'm half frensh and half Algerian, I live at the USA since 2019.
            I came to explore the American dream, and for me the dream is to be a web developer. 
            I do have a biology bachelor degree. well yeah its way different from what I'm trying to learn but 
            the first time i knew about coding, i felt in love with it &#128513;.
            I can speak 5 languages: french, arabic, Berber, English and a little of Spanish
          </p>
        </div>  

        <div className="about-me-context">
          <h4>What are my favorits hobbies</h4>
          <p>
            I use to do boxing back at home with my brother, since he is an MMA boxer i try to learn from 
            him, but now i just practice on myb own since he is not here.
            I also use to play soccer with a team and I really miss them a lot.
            I can beatbox and can play guitar a little.
            I also love to travel, I've been in Germany, France, Algeria, morocco, Italy, Spain and also here at the USA i went to New York,                                                                                            
            Philadelphia, New Jersey, Austin, Houston, San Antonio, Dallas...
          </p>
        </div>

        <div className="about-me-context">
          <h4>Why Im Here For</h4>
          <p>I'm here to show you most of my recent work, some of them are projects that I've built on my own, 
            and some others are projects that I've learned by watching videos and tried to build something simular without watching the code.       
            please checkout my Work section
          </p>
        </div>  

      </div>

    </div>

  </section>
  )
}

export default About