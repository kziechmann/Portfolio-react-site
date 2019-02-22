import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css';

class RBNavbar extends Component {
    render() {
      return (
        <Navbar bg="dark" variant="pills dark" className="transparent ">
            <Navbar.Brand>
                <h3>Kevin Ziechmann</h3>
            </Navbar.Brand>
            <Nav className="mr-auto ml-4 ">
              <LinkContainer to="/websites">
                <Nav.Item className="mr-2 ml-2 navlink" >Web Portfolio</Nav.Item>
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
              <a href="https://github.com/kziechmann" target="_blank" rel="noopener noreferrer">
                <Nav.Item className="navIcon"><img className="mr-1 ml-1 " src="./images/fontawesome-free-5.7.2-web/svgs/brands/github-square.svg" width="20" alt="github icon"></img></Nav.Item>
              </a> 
              <a href="https://www.linkedin.com/in/kevinziechmann/" target="_blank" rel="noopener noreferrer">
                <Nav.Item className="navIcon"><img className="mr-1 ml-1 " src="./images/fontawesome-free-5.7.2-web/svgs/brands/linkedin.svg" width="20"alt="linkedin icon"></img></Nav.Item>
              </a> 
              <a href="https://www.instagram.com/kziechmann/" target="_blank" rel="noopener noreferrer">
                <Nav.Item className="navIcon"><img className="mr-1 ml-1 " src="./images/fontawesome-free-5.7.2-web/svgs/brands/instagram.svg" width="20"alt="instagram icon"></img></Nav.Item>
              </a> 
              <a href="https://twitter.com/kevinziechmann" target="_blank" rel="noopener noreferrer">
                <Nav.Item className="navIcon"><img className="mr-1 ml-1 " src="./images/fontawesome-free-5.7.2-web/svgs/brands/twitter.svg" width="20"alt="twitter icon"></img></Nav.Item>
              </a>
            </Nav>
      </Navbar>
      );
    }
  }
  
  export default RBNavbar;
  