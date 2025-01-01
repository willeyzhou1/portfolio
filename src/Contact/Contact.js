import React, { Component } from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>Contact Me!</h1>
      <textarea class='email' placeholder='Please enter your email.' type='email'></textarea>
      <textarea class='message' placeholder='please write something in here'></textarea>
      <button class='submit' type='button' >Submit</button>
    </div>
  );
}
