import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Navigation() {
  return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand className="badge-info text-white " href="/About">Jack Tussing </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Skills">Skills</Nav.Link>
      {/* <Nav.Link href="/Contact">Contact</Nav.Link> */}
      <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default Navigation;