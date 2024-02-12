import React from 'react'
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// Helper function to check if the email is valid
import { validateEmail } from '../utils/helpers';

const ContactForm = () => {
  // Create state variables for input field and initialize them to empty strings
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Get the value and name of user input that triggered change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set state to email, name, or none based on the input type
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (page refresh)
    e.preventDefault();

    // Check if the input is empty and/or valid. If not, set an error message
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // Return to stop the code from running
      return;
        }

    // Clear fields after form is submitted
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleFormSubmit}>
        <Row>
          {/* <label htmlFor="emailInput" className='form-label p-0'>Enter your email address</label> */}
          <input 
            className='form-control mb-3'
            id='emailInput'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </Row>
        <Row>
          {/* <label htmlFor="nameInput" className='form-label p-0'>Enter First & Last Name</label> */}
          <input
            className='form-control mb-3'
            id='nameInput'
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="First & Last Name"
          />
        </Row>
        <Row>
          <a href='mailto:brittyoung_treece@protonmail.com' className='p-0'>
          <Button variant="outline-light">Submit</Button>{' '}
          </a>
        </Row>
      </form>
      {errorMessage && (
        <div>
          <p className="alert alert-danger my-3">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;