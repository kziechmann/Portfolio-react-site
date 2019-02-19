import React, { Component } from 'react';
import './App.css';

class Background extends Component {
  render() {
    return (
        <div class="parallax">
          <div class="parallax__layer parallax__layer--back">
            <img class="bg_layer" src="./images/BG_Layer_2.png" alt="mountain_background_layer1" />
          </div>
          <div class="parallax__layer parallax__layer--base">
            <img class="bg_layer" src="./images/BG_Layer_3.png" alt="mountain_background_layer2"/>
          </div>
          <div class="parallax__group">
           <div class="parallax__layer parallax__layer--foreground">
            <img class="bg_layer" src="./images/BG_Layer_4.png" alt="mountain_background_layer3"/>
           </div>
          </div>
        </div>
    );
  }
}

export default Background;
