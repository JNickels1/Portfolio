import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './style.css';

function Header() {
  const name = 'Jaime Lieberman';
  return (
    <Navbar id="nav" fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" id="name">{name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="skills" id="link">Skills</Nav.Link>
            <Nav.Link href="contact" id="link">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;