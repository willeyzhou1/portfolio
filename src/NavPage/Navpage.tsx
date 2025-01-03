import React, { Component } from 'react'
import './Navpage.css';

export default function Navpage() {
    return (
        <div className='NavBar'>
            <nav className="nav">
            <a href='#about'>About Me</a>
            <a href='#projects'>My Projects</a>
            <a href='#contact'>Contact</a>
            </nav>
        </div>
    );
}
