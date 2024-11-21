import React, { Component } from 'react'
import './About.css';

export default function About() {
    return (
        <div className='introduction'>
            <div className='bigTitle'>
                <h1>Hi! I'm Willey.</h1>
            </div>
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
    );
}
