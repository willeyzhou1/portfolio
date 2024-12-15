import React, { Component } from 'react'

export default function projectComponent({linkClass, link, image, textClass, header, description}) {
    return (
        <ul>
            <a className={linkClass} href={link}>
            <img src={image} height='200px' width='200px'></img>
            <div className={textClass}>
                <h2>{header}</h2>
                <p>{description}</p>
            </div>
            </a>
        </ul>
    );
}
/*
<ul>
  <a className='element' href='https://github.com/acmucsd-projects/sp23-hack-team-3'>
    <img src={ystemandchess} height='200px' width='200px'></img>
      <div className='text'>
        <h2>Eventify</h2>
        <p>Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.</p>
      </div>
  </a>
</ul>
*/