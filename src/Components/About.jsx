import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Components/Styles/Home.css";
import { useNavigate } from "react-router-dom";
import britt from "../assets/britt.png";

const styles = {
  portraitStyle: {
    margin: "5px",
    maxWidth: "350px",
    borderRadius: "0%",
    boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
  },
};

const About = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate("/contact");
    };
  
    return (
      <Container className="custom-container" fluid>
        <Row className="custom-row">
          <Col className="custom-col">
            <h1>Hi, I'm Brittney!</h1>
            <img
              style={styles.portraitStyle}
              className="portrait"
              src={britt}
              alt="Brittney Treece"
            />
            <Button className="custom-btn" onClick={handleButtonClick}>
              SEND ME A MESSAGE
            </Button>
          </Col>
          <Col className="custom-col">
            <h2>Full Stack Web Developer.</h2>
            <p>
              Recent graduate of The University of Utah Full Stack Coding
              Bootcamp. I am focused on guiding small business owners into the
              digital space by creating sales-driven websites that embody their
              brand values and resonate with their target audience{" "}
            </p>
          </Col>
          <Col className="custom-col"></Col>
        </Row>
      </Container>
    );
  };

export default About