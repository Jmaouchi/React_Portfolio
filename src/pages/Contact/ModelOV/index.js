import React, { useState } from 'react';
import './style.css'

import { validateEmail } from '../../../utils/helpers';

function ContactForm() {
  // we will set a use state here to chnage our state later whenever a user add inputs to the data input field 
  // then we can use the setFormState to change the state, we will use that inside a function called handleSubmit, 
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className='container '>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='context'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder='Name' defaultValue={name} onBlur={handleChange} /> 
          {/* The onBlur event fires when a field loses focus. */}
        </div>
        <div className='context'>
          <label  htmlFor="email">Email address:</label>
          <input type="email" name="email" placeholder='email' defaultValue={email} onBlur={handleChange} />
        </div>
        <div className='context'>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" className='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
