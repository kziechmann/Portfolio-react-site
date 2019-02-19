import React, { Component } from 'react';
import './App.css';
import ParaBackground from './components/Parallax_BG';
import About from './pages/About';
import RBNavbar from './components/Navbar';
import { Parallax , Background } from 'react-parallax';

class App extends Component {
  render() {
    return (
        <div className="App">
          <nav className="sticky-nav">
            <RBNavbar></RBNavbar>
          </nav>
          <div className="parallax">
            <div className="row justify-content-center">
              <h1> About </h1>
            </div>
            <div className="parallax_group">
              <About/>
              <ParaBackground/>
            </div>
            
          </div>
        </div>
    );
  }
}

export default App;
