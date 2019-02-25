import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../App.css';

class MobilFooter extends Component {
    render() {
      return (
        <Navbar bg="dark"  variant="pills dark" className="transparent footer container justify-content-center">
         
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
    
      </Navbar>
      );
    }
  }
  
  export default MobilFooter;
  