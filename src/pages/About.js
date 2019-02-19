import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

class About extends Component {
    render() {
      return (
            <div className="container mt-5 parallax_layer_foreground tile">
                <div className="row display-inline-block justify-content-center ">
                    <div className="col-8">
                        <p>Software Developer and digital media specialist with six years of experience in web-focused media production for commercial and editorial clients. Expertise includes full-stack application development, mobile (android) development, cinematography and video-editing . Past projects encompass online-educational series, documentary content and commercials for the web and broadcast. Currently exploring the unique opportunities at the intersection of programming and interactive media</p>
                    </div>
                    <div className="col-3">
                        <img className="portrait" src="./images/cropped.jpg" alt="portrait" />
                    </div>
                </div>
            </div>
      );
    }
  }
  
  export default About;
  