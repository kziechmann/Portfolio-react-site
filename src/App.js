import React, { Component } from 'react';
import './App.css';
import ParaBackground from './components/Parallax_BG';
import About from './pages/About';
import Websites from './pages/Websites';
import RBNavbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

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
              <ParaBackground/>
            </div>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
