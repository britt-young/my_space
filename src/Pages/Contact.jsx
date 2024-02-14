import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from '../Components/Form'


const Contact = () => {
  return (
    <div>
        <Container>
          <h1>Connect with me!</h1>
          <p>
          Please feel free to contact us about any questions or concerns you may have. You can email us directly at <b>brittyoung_treece@protonmail.com</b> or fill out our form below:
          </p>
          <Form/>
        </Container>
      </div>
  )
}

export default Contact