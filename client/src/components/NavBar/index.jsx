import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function Header() {
  const name = 'Jaime Lieberman';
  return (
    <Navbar className="navbar" sticky="top">
      <Container>
          <Navbar.Brand href="/" className="navbar-brand" id="name">{name}</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="skills" className="link">Skills</Nav.Link>
              <Nav.Link href="contact" className='link'>Contact Me</Nav.Link>
            </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;