import React, { Component } from 'react'
import ystemandchess from '../assets/ystemandchess.png'
import acm from '../assets/acm.png'

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

            <div className='border'></div>

            <h1 className='experienceTitle'>Work/Leadership Experiences</h1>

            <div className='experiences'>
                <h2>YStemandChess</h2>
                <div className='thingy'>
                    <img className='expImage' src={ystemandchess} alt="Me in a garage" width="350" height="130"/>
                    <ul className='yStemPointers'>
                        <li>
                            Created several functions in Javascript utilizing PostgreSQL in order to handle various account requests
                        </li>
                        <li>
                            Created several functions in Javascript utilizing PostgreSQL in order to handle some account requests
                        </li>
                        <li>
                            Created several functions in Javascript utilizing PostgreSQL in order to handle a lot of account requests
                        </li>
                    </ul>
                </div>
                <h2>ACM at UCSD</h2>
                <div className='thingy'>
                    <ul className='ul'>
                        <li>
                            Participated in a quarter-long project with five members and delegated tasks for backend and frontend developers respectively
                        </li>
                        <li>
                            Demonstrated the finished website to a panel of 100+ people in a school-wide conference
                        </li>
                    </ul>
                    <img className='acmImage' src={acm} alt="ACM logo" width="140" height="140"/>
                </div>
            </div>
        </div>
        );
  }
}
