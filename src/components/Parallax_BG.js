import React, { Component } from 'react';
import '../App.css';

class ParaBackground extends Component {
  render() {
    return (
          <React.Fragment>
            <div className="parallax_layer parallax_layer_way_back">
              <img className="bg_layer" src="./images/BG_Layer_2.png" alt="mountain_background_layer1" />
            </div>
            <div className="parallax_layer parallax_layer_background">
              <img className="bg_layer" src="./images/BG_Layer_3.png" alt="mountain_background_layer2"/>
            </div>
            <div className="parallax_group">
            <div className="parallax_layer parallax_layer_midground">
              <img className="bg_layer" src="./images/BG_Layer_4.png" alt="mountain_background_layer3"/>
            </div>
            </div>
          </React.Fragment>
    );
  }
}

export default ParaBackground;
