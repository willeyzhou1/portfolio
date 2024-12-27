import React, { Component } from 'react'
import './Projects.css';
import ystemandchess from '../assets/acm.png'
import ProjectComponent from '../Components/projectComponent.js'

export default class Projects extends Component {
  
  render() {
    return (
      <div className='pages' id='projects'>
        <h1>Projects</h1>
        <p>These are some of the projects that I have done :D</p>
        <div className='projects'>
          <div className='project'>
            <a className='element' href='https://github.com/acmucsd-projects/sp23-hack-team-3'>
            <img src={ystemandchess} height='200px' width='200px'></img>
              <div className='text'>
                <h2>Eventify</h2>
                <p>Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.</p>
              </div>
            </a>
          </div>
          <div className='project'>
            <a className='element' href='https://github.com/acmucsd-projects/sp23-hack-team-3'>
              <img src={ystemandchess} height='200px' width='200px'></img>
                <div className='text'>
                  <h2>Eventify</h2>
                  <p>Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.</p>
                </div>
            </a>
          </div>
          <div className='project'>
            <a className='element' href='https://github.com/acmucsd-projects/sp23-hack-team-3'>
              <img src={ystemandchess} height='200px' width='200px'></img>
                <div className='text'>
                  <h2>Eventify</h2>
                  <p>Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.</p>
                </div>
            </a>
          </div>
        </div>

      </div>
    )
  }
}
