import React, { Component } from 'react'
import './Projects.css';
import acm from '../assets/acm.png'
import barChart from '../assets/barchart.png'
import website from '../assets/website.webp'


export default class Projects extends Component {
  
  render() {
    return (
      <div className='pages' id='projects'>
        <h1>Projects</h1>
        <p>These are some of the projects that I have done :D</p>
        <div className='projects'>
          <div className='project'>
            <a className='element' href='https://github.com/acmucsd-projects/sp23-hack-team-3' target='_blank' rel="noreferrer">
            <img src={acm} alt='YStemandChess Logo' height='200px' width='200px' />
              <div className='text'>
                <h2>Eventify</h2>
                <p>Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.</p>
              </div>
            </a>
          </div>
          <div className='project'>
            <a className='element' href='https://github.com/willeyzhou1/Real-Estate-and-Remote-Work-Analysis' target='_blank' rel="noreferrer">
              <img src={barChart} alt='bar Chart' height='200px' width='200px' />
                <div className='text'>
                  <h2>Real Estate and Remote Work Analysis</h2>
                  <p>Utilized Python and Pandas to track trends between real estate demands and remote work.</p>
                </div>
            </a>
          </div>
          <div className='project'>
            <a className='element' href='https://github.com/willeyzhou1/portfolio' target='_blank' rel="noreferrer">
              <img src={website} alt='My website' height='200px' width='200px' />
                <div className='text'>
                  <h2>Portfolio Website</h2>
                  <p>Coded website using React; utilized HTML/CSS to create creative designs and transitions</p>
                </div>
            </a>
          </div>
          <hr className='blueBar'></hr>
        </div>
      </div>
    )
  }
}
