import React, { Component } from 'react';
import './App.css';
import ParaBackground from './components/Parallax_BG';
import About from './pages/About';
import Websites from './pages/Websites';
import RBNavbar from './components/Navbar';
import { Router, Route, Switch } from 'react-router'

class App extends Component {
  state={
    page:""
  }

  navigate(page){
    this.setState({page:page})
  }

  render() {
    return (
      
        <div className="App">
          <nav className="sticky-nav">
            <RBNavbar navigate={this.navigate}></RBNavbar>
          </nav>
          <div className="parallax">
            <div className="row justify-content-center">
              <h1> {this.state.page} </h1>
            </div>
            <div className="parallax_group">
              <Websites/>
              <ParaBackground/>
              <About/>
            </div>
            
          </div>
        </div>

    );
  }
}

export default App;
