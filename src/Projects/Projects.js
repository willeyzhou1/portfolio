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
        <li className='projects'>
          <ProjectComponent 
          linkClass='element' 
          link='https://github.com/acmucsd-projects/sp23-hack-team-3'
          image={ystemandchess}
          textClass='text'
          header='Eventify'
          description='Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.'
          />
          <ProjectComponent 
          linkClass='element' 
          link='https://github.com/acmucsd-projects/sp23-hack-team-3'
          image={ystemandchess}
          textClass='text'
          header='Eventify'
          description='Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.'
          />
          <ProjectComponent 
          linkClass='element' 
          link='https://github.com/acmucsd-projects/sp23-hack-team-3'
          image={ystemandchess}
          textClass='text'
          header='Eventify'
          description='Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.'
          />
        </li>

      </div>
    )
  }
}
