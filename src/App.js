import React, { Component } from 'react';
import './App.css';
import ParaBackground from './components/Parallax_BG';
import About from './pages/About';
import Websites from './pages/Websites';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import Contact from './pages/Contact';
import RBNavbar from './components/Navbar';
import MobNavbar from './components/MobilNav';
import MobFooter from './components/MobilFooter';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
          <MediaQuery minWidth={768}>
            <RBNavbar ></RBNavbar>
          </MediaQuery>
          
          <MediaQuery maxWidth={768}>
            <MobNavbar ></MobNavbar>
          </MediaQuery>
          </nav>
          <div className="parallax">
            <div className="row justify-content-center">
            </div>
            <div className="parallax_group">
              <Route exact path="/" component={Websites}/>
              <Route path="/websites" component={Websites}/>
              <Route path="/about" component={About}/>
              <Route path="/photography" component={Photography}/>
              <Route path="/videography" component={Videography}/>
              <Route path="/contact" component={Contact}/>
              <ParaBackground/>
            </div>
          <MediaQuery maxWidth={768}>
            <MobFooter ></MobFooter>
          </MediaQuery> 
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
