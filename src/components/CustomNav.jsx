import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
  <Navbar.Brand href="/">Spreading Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home<Badge variant="danger">8</Badge></Nav.Link>
      <Nav.Link href="/About">About Us</Nav.Link>
      <Nav.Link href="/Contact">Contact Us</Nav.Link>
      <NavDropdown title="About Us" id="basic-nav-dropdown">        <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Consultation</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Care center</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Career</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     <Button variant="secondary">Profile <Badge variant="light">9</Badge>
  <span className="sr-only">unread messages</span>
</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
   
      </div>
     )
  
  }
}
