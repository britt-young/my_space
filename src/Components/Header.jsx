import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {

  const colStyle = {
    backgroundColor: '#ed0d75',
    minHeight: '30px'
  };

  return (
    <Container fluid>
      <Row>
        <Col style={colStyle}></Col>
      </Row>
    </Container>
  );
}

export default Header