import React, { Component } from 'react'
import './Navpage.css';

export default function Navpage() {
    return (
        <nav className="NavBar">
            <ul className="elements">
                <li>
                    <a href='/'>About Me!</a>
                </li>
                <li>
                    <a href='/projects'>My Projects</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
    );
}
