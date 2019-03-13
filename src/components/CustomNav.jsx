import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';
import { Navbar,
        Nav,
        NavItem,
        NavDropdown,
        FormControl,
        Form, Button, Badge } from 'react-bootstrap'


export default class CustomNav extends Component {
   
  render(){
    return(
      <div>
      <Navbar fixed="top" bg="primary" variant="dark">
  <Navbar.Brand href="/">Spreading Care <FaBeer /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">HOME</Nav.Link>
      <Nav.Link href="/About">ABOUT</Nav.Link>
      <Nav.Link href="/Contact">CONTACT</Nav.Link>
      <NavDropdown title="MORE" id="basic-nav-dropdown">        <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Consultation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Career</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     <Button variant="secondary">Profile <Badge variant="light">0</Badge>
  <span className="sr-only">unread messages</span>
</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
     )
  
  }
}
