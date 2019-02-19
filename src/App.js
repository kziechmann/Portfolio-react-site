import React, { Component } from 'react';
import './App.css';
import ParaBackground from './components/Parallax_BG';
import About from './pages/About';
import Websites from './pages/Websites';
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
