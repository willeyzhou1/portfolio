import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className='contact' id='contact'>
        <h1>Contact Me!</h1>
        <textarea placeholder='please write something in here'></textarea>
      </div>
    );
  }
}
