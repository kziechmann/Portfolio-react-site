import React, { Component } from 'react';
import './App.css';
import ParaBackground from './components/Parallax_BG';
import About from './pages/About';
import Websites from './pages/Websites';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import Contact from './pages/Contact';
import RBNavbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state={
    page:""
  }

  navigate(page){
    this.setState({page:page})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="sticky-nav">
            <RBNavbar navigate={this.navigate}></RBNavbar>
          </nav>
          <div className="parallax">
            <div className="row justify-content-center">
              <h1> {this.state.page} </h1>
            </div>
            <div className="parallax_group">
              <Route path="/websites" component={Websites}/>
              <Route path="/about" component={About}/>
              <Route path="/photography" component={Photography}/>
              <Route path="/videography" component={Videography}/>
              <Route path="/contact" component={Contact}/>
              <ParaBackground/>
            </div>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
