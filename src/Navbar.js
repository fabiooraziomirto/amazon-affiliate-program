import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Tech Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/articles">Articoli</Nav.Link>
                    <Nav.Link as={Link} to="/about">Chi Siamo</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  );
}

export default CollapsibleExample;