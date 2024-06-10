import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ArrowRightIcon } from "@heroicons/react/solid";
import './style.css'
import { NavDropdown } from "react-bootstrap";

function Header() {
  const name = "Jaime Lieberman"
  return (
    <Navbar id="nav"  fixed="top">
      <Navbar.Brand href="/" id="name">
        {name}
      </Navbar.Brand>
      <Nav.Link href="projects" id="link">
        Past Work
      </Nav.Link>
      <Nav.Link href="skills" id="link">
        Skills
      </Nav.Link>
      <Nav.Link href="contact" id="link">
        Contact Me
      </Nav.Link>
    </Navbar>
  )
};

export default Header;