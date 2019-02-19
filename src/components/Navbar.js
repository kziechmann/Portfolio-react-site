import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../App.css';

class RBNavbar extends Component {
    render() {
      return (
        <Navbar bg="dark" variant="pills dark" className="transparent">
            <Navbar.Brand href="#home">
                <h3>Kevin Ziechmann</h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
               <Nav.Item> <Nav.Link path="/websites" className="mr-2 ml-2 navlink" href="#development" onClick={(e)=>this.props.navigate("Websites")}>Websites</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#videography"onClick={(e)=>this.props.navigate("Videography")}>Videography</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#photography"onClick={(e)=>this.props.navigate("Photography")}>Photography</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#blog"onClick={(e)=>this.props.navigate("Blog")}>Blog</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#contact"onClick={(e)=>this.props.navigate("Contact")}>Contact</Nav.Link></Nav.Item>
               <Nav.Item> <Nav.Link className="mr-2 ml-2 navlink" href="#about"onClick={(e)=>this.props.navigate("About")}>About</Nav.Link></Nav.Item>
            </Nav>
      </Navbar>
      );
    }
  }
  
  export default RBNavbar;
  