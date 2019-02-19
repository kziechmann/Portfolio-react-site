import React, { Component } from 'react';
import './App.css';
import Background from './Parallax_BG.js';
import RBNavbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="sticky-nav">
          <RBNavbar></RBNavbar>
        </header>
        <div className="App">
          <Background></Background>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
