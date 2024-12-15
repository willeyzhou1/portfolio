import React, { useState, useEffect } from 'react'
import './About.css';
import garagePic from '../assets/garagepic.jpg'
import background from '../assets/background.avif'

export default function About() {
    return (
        <div id='about' className='about'>
            <div className='introduction'>
                <div className='bigTitle'>
                    <h1>Hi! I'm Willey.</h1>
                </div>
                <img className='selfPortrait' src={garagePic} alt="Me in a garage" width="350" height="500"/>
            </div>
        </div>
    );
}
