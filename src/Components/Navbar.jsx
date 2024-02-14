import {useLocation} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {logo} from '../assets/logo-icon.png';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          {/* <img
            src={logo}
            alt="Logo"
            width="200"
            height="100"
            className="d-inline-block align-text-top"
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-light bg-light" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>Home</Nav.Link>
            <Nav.Link href="/about" className={currentPage === '/about' ? 'nav-link-active' : 'nav-link'}>About Me</Nav.Link>
            <Nav.Link href="/candles" className={currentPage === '/portfolio' ? 'nav-link-active' : 'nav-link'}>Portfolio</Nav.Link>
            <Nav.Link href="/contact" className={currentPage === '/contact' ? 'nav-link-active' : 'nav-link'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;