import React, { Component } from 'react'

export default function projectComponent({linkClass, link, image, textClass, header, description}) {
    return (
        <button type="button" href={link}>
            <img src={image} height='200px' width='200px'></img>
            <div className={textClass}>
                <h2>{header}</h2>
                <p>{description}</p>
            </div>
        </button>
    );
}
/*



<ProjectComponent 
          linkClass='element' 
          link='https://github.com/acmucsd-projects/sp23-hack-team-3'
          image={ystemandchess}
          textClass='text'
          header='Eventify'
          description='Created a website that allows for 1000+ students to advertise events happening on campus. Worked as a frontend developer.'
          />
*/