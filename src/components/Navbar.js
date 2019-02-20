import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css';

class RBNavbar extends Component {
    render() {
      return (
        <Navbar bg="dark" variant="pills dark" className="transparent">
            <Navbar.Brand href="#home">
                <h3>Kevin Ziechmann</h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <LinkContainer to="/websites">
                <Nav.Item className="mr-2 ml-2 navlink" >Websites</Nav.Item>
              </LinkContainer>
              <LinkContainer to="/videography">
                <Nav.Item className="mr-2 ml-2 navlink" >Videography</Nav.Item>
              </LinkContainer>
              <LinkContainer to="/photography">
                <Nav.Item className="mr-2 ml-2 navlink" >Photography</Nav.Item>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Item className="mr-2 ml-2 navlink" >Contact</Nav.Item>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Item className="mr-2 ml-2 navlink" >About</Nav.Item>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Item className="mr-2 ml-2 navlink" ><FontAwesomeIcon icon="github-square"/></Nav.Item>
              </LinkContainer> <LinkContainer to="/">
                <Nav.Item className="mr-2 ml-2 navlink" ></Nav.Item>
              </LinkContainer> <LinkContainer to="/">
                <Nav.Item className="mr-2 ml-2 navlink" ></Nav.Item>
              </LinkContainer> <LinkContainer to="/">
                <Nav.Item className="mr-2 ml-2 navlink" ></Nav.Item>
              </LinkContainer>
            </Nav>
      </Navbar>
      );
    }
  }
  
  export default RBNavbar;
  