import React, { Component } from 'react'
import './About.css';

export default function About() {
    return (
        <div className='about'>
            <div className='introduction'>
                <div className='bigTitle'>
                    <h1>Hi! I'm Willey.</h1>
                </div>
                <img className='selfPortrait'></img>
                <div className='description'>
                    <h2>I am currently a 4th-year undergraduate student as a Math-CS major and Cognitive Science Minor at UC San Diego.
                        I am an aspiring fullstack software engineer who has experience using:
                    </h2>
                    <div className='slideshow'>
                        logo of stuff slideshow here.
                    </div>
                    <h2>In my free time, I enjoy playing the piano and guitar, playing and watching basketball, and weightlifting.
                        Thank you for stopping by!
                    </h2>
                </div>
            </div>

            <div className='experiences'>
                <h1>Work/Leadership Experiences</h1>
                
                <div className='YStemandChess'>
                    <h2>YStemandChess</h2>
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

                <div className='acm'>
                    <h2>ACM at UCSD</h2>
                    <ul className='ACMPointers'>
                        <li>
                            Participated in a quarter-long project with five members and delegated tasks for backend and frontend developers respectively
                        </li>
                        <li>
                            Demonstrated the finished website to a panel of 100+ people in a school-wide conference
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
