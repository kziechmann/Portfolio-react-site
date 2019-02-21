import React, { Component } from 'react';
import '../App.css';

class About extends Component {

    render() {
      return (
            <div className="container parallax_layer_foreground ">
                <div className="row justify-content-center mb-5">
                    <h1>Who made this?</h1> 
                </div>
                <div className="row justify-content-center tile">
                    <div className="col-8">
                        <p>Kevin is a web developer and digital media specialist with six years of experience in online media production for commercial and editorial clients. Expertise includes full-stack application development, mobile (android) development, cinematography and video-editing . Past projects encompass online-educational series, documentary content and commercials for the web and broadcast. Currently exploring the unique opportunities at the intersection of programming and interactive media</p>
                    </div>
                    <div className="col-3">
                        <img className="portrait mt-5" src="./images/cropped.jpg" alt="portrait" />
                    </div>
                </div>
                <div className="about"></div>
            </div>
      );
    }
  }
  
  export default About;
  