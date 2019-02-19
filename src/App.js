import React, { Component } from 'react';
import './App.css';
import Background from './components/Parallax_BG';
import RBNavbar from './components/Navbar';

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
