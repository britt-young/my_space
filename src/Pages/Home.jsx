import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Components/Styles/Home.css";
import {  useNavigate  } from "react-router-dom";

const styles = {
  portraitStyle: {
    maxWidth: "350px",
  },
};

const About = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
navigate("/contact");
  };

  return (
    <Container className='custom-container' fluid>
      <Row className='custom-row'>
        <Col className='custom-col'>
          <h1>Britt</h1>
          <h1>Treece</h1>
          <Button className='custom-btn'onClick={handleButtonClick}>SEND ME A MESSAGE</Button>
        </Col>

        <Col className='custom-col'>
          <img
            style={styles.portraitStyle}
            className="portrait"
            src="src\assets\britt.png"
            alt="Brittney Treece"
          />
        </Col>

        <Col className='custom-col'>
          <h3>INTRODUCTION</h3>
          <h2>Full Stack Web Developer</h2>
          <p>
            and recent graduate of The University of Utah Full Stack Coding
            Bootcamp. I am focused on guiding small business owners into the
            digital space by creating sales-driven websites that embody their
            brand values and resonate with their target audience{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
