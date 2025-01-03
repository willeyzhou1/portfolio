import React, { Component } from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>Contact Me!</h1>
      <textarea className='email' placeholder='Please enter your email.'></textarea>
      <textarea className='message' placeholder='please write something in here'></textarea>
      <button className='submit' type='button' >Submit</button>
    </div>
  );
}
