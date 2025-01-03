import React, { Component, useState } from 'react'
import './Contact.css'

export default function Contact() {

  const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'willzhou000@gmail.com',
            subject: "New email from: " + email,
            message: message,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Error: ' + data.message);
        }
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('Failed to send email');
      } finally {
        setLoading(false);
      }
    };
  return (
    <div className='contact' id='contact'>
      <form onSubmit={handleSubmit}>
        <h1>Contact Me!</h1>
        <textarea 
          className='email' 
          placeholder='Please enter your email.' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required> 
        </textarea>
        <textarea 
          className='message'
          placeholder='please write something in here'
          onChange={(e) => setMessage(e.target.value)}
          required>
        </textarea>
        <button className='submit' type='button' disabled={loading}>{loading ? 'Sending...' : 'Send Email'}</button>
      </form>
    </div>
  );
}
