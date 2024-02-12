import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">
            <h1 className='intro'> Hi, I'm Brittney Treece.</h1>
            <Button variant="outline-light">SEND ME A MESSAGE</Button>{' '}
            </div>
          <div className="p-2">
            <img className='portrait' src="./assets/britt.png" alt="Brittney Treece" />
          </div>
          <div className="p-2">
            <h3 className='intro-title'>introduction</h3>
            <h2 className='title'>Full Stack Web Developer</h2>
            <p className='hook'>
              and recent graduate of The University of Utah Full Stack Coding Bootcamp. I am focused on guiding small business owners into the digital space by creating sales-driven websites that embody their brand values and resonate with their target audience </p>
          </div>
        </Stack>
      );
    }

export default About