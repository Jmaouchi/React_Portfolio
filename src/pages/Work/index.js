import React from 'react'
import './style.css'

function Work() {
  return (
    <>
    <section id="work" className="section-three">

      <div className="flex">
        <div className="border"></div>
        <h3>My<span style={{color:"black"}}>Work</span></h3>
        <div className="border"></div>
      </div>

      <div className="section-three-content-wrap">

        <div className="col run-buddy">
          <div className="run-buddy-content">
            <h4>Run Buddy Website</h4>
            <p>this poroject made by me 2020, while learing HTML5, CSS</p>
            <button className="btn"><a href="https://jmaouchi.github.io/Run-Buddy-Project-/">check it out here</a></button>
          </div>  
        </div>

        <div className="col video-gallery">
          <h4>Video gallery Website</h4>
          <p>This is built by me 2022 while learning JavaScript</p>
          <button className="btn"><a href="https://jmaouchi.github.io/Video-gallery/">check it out here</a></button>
        </div>

        <div className="col todo-list">
          <h4>My ToDo List</h4>
          <p>this is a ToDo list built by me with HTML5, CSS and JavaScript in 2021.</p>
          <button className="btn"><a href="https://jmaouchi.github.io/ToDo-List-JavaScript/">check it out here</a></button>
        </div>

        <div className="col coffee-website">
          <h4>Coffee shop</h4>
          <p>Best coffee website</p>
          <button className="btn"><a href="https://global-coffee-shop.herokuapp.com/">check it out here</a></button>
        </div>

        <div className="col task-list">
          <h4>Task List</h4>
          <p>this project was built by me whith someone else idea!</p>
          <button className="btn"><a href="https://jmaouchi.github.io/Task-List-/">check it out here</a></button>
        </div>

        <div className="col color-changing">
          <h4>Color Change</h4>
          <p>this project built by me while learing JavaScript</p>
          <button className="btn"><a href="https://jmaouchi.github.io/changing-color-JavaScript-project-/">check it out here</a></button>
        </div>

        <div className="col scheduler">
          <h4>Schaduler</h4>
          <p>Scheduler that can allow you add todo's</p>
          <button className="btn"><a href="https://jmaouchi.github.io/Work-Day-Scheduler/">check it out here</a></button>
        </div>

        <div className="col weather-recipe">
          <h4>Weather Recipe</h4>
          <p>Build by fetching weather and recipe API's</p>
          <button className="btn"><a href="https://sipg789.github.io/hestia/index.html">check it out here</a></button>
        </div>


      </div>  

      </section>
    </>
  )
}

export default Work