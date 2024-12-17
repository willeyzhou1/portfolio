import React, { Component } from 'react'
import ystemandchess from '../assets/ystemandchess.png'
import acm from '../assets/acm.png'
import './Biography.css'

export default class Biography extends Component {
  render() {
    return (
        <div className='biography' id='biography'>
            <div className='description'>
                <p>I am currently a 4th-year undergraduate student as a Math-CS major and Cognitive Science Minor at UC San Diego.
                I am an aspiring fullstack software engineer who has experience using:
                </p>
                <div className='slideshow'>
                    logo of stuff slideshow here.
                </div>
                <p>In my free time, I enjoy playing the piano and guitar, playing and watching basketball, and weightlifting.
                    Thank you for stopping by!
                </p>
            </div>

            <hr className='blueBar'></hr>

            <h1 className='experienceTitle'>Relevant Experience</h1>

            <div className='expList'>
                <h2>YStemandChess</h2>
                <h4>Software Engineer Intern</h4>
                <div className='experience'>
                    <img className='expImage' src={ystemandchess} alt="Me in a garage" width="350" height="130"/>
                    <p>Created methods to add/update user accounts using PostgreSQL and added tests</p>
                </div>
                <h2>ACM at UCSD</h2>
                <h4>Frontend Developer</h4>
                <div className='experience'>
                    <p>Worked in a group of five other members as a frontend developer and presented to 100+ people in a school-wide conference.</p>
                    <img className='expImage' src={acm} alt="ACM logo" width="140" height="140"/>
                </div>
            </div>

            <hr className='blueBar'></hr>
        </div>
        );
        
  }
}

/*
<li>
                            Created several functions in Javascript utilizing PostgreSQL in order to handle various account requests
                        </li>
                        <li>
                            Created several functions in Javascript utilizing PostgreSQL in order to handle some account requests
                        </li>
                        <li>
                            Created several functions in Javascript utilizing PostgreSQL in order to handle a lot of account requests
                        </li>
 */
