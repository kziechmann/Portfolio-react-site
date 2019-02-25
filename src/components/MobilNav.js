import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css';

class MobNavbar extends Component {
    state={pages:["websites","videography","photography","contact","about"], currentPage: 0}

    pageBack=()=>{
        let nextPage
        if(this.state.currentPage === 0){nextPage = 4}
        else {nextPage = this.state.currentPage - 1}
        this.setState({currentPage:nextPage})
    }

    pageForward=()=>{
        let nextPage
        if(this.state.currentPage === 4){nextPage = 0}
        else {nextPage = this.state.currentPage + 1}
        this.setState({currentPage:nextPage})
    }
    render() {
      return (
        <Navbar bg="dark" expand="lg" variant="pills dark" className="transparent ">
            <div className="container">
            <div className="row">
            <div className="col-12">
            
            <LinkContainer to={`/${this.state.currentPage !== 0? this.state.pages[this.state.currentPage-1]: 'about'}` }>
                <Nav.Item className="mr-2 ml-2 navIcon btn" onClick={()=>{this.pageBack()}}><img className="" src="./images/fontawesome-free-5.7.2-web/svgs/regular/caret-square-left.svg" width="20"alt="<"></img></Nav.Item>
              </LinkContainer>
            <Navbar.Brand>
                <h3>Kevin Ziechmann</h3>
            </Navbar.Brand>
            <LinkContainer to={`/${this.state.currentPage !== 0? this.state.pages[this.state.currentPage]: 'websites'}` }>
                <Nav.Item className="mr-2 ml-2 navIcon btn" onClick={()=>{this.pageForward()}}><img className="" src="./images/fontawesome-free-5.7.2-web/svgs/regular/caret-square-right.svg" width="20"alt=">"></img></Nav.Item>
              </LinkContainer>
            </div>
            </div>
            </div>
      </Navbar>
      );
    }
  }
  
  export default MobNavbar;
  