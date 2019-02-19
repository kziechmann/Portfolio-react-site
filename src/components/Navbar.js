import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';

class RBNavbar extends Component {
    render() {
      return (
        <Navbar bg="dark" variant="pills dark" className="transparent">
            <Navbar.Brand href="#home">
                <h3>Kevin Ziechmann</h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#development">Websites</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#videography">Videography</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#photography">Photography</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#blog">Blog</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#contact">Contact</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#about">About</Nav.Link></Nav.Item>
            </Nav>
      </Navbar>
      );
    }
  }
  
  export default RBNavbar;
  