import React, { Component } from 'react';
import '../App.css';
import YouTube from 'react-youtube';

class Videography extends Component {

    state = {images: {}}

   componentDidMount(){
    }

    render() {
        const opts = {
            
            width: window.innerHeight,
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
            };
      return (
            <React.Fragment>
            <div className="container parallax_layer_foreground ">
                <div className="row justify-content-center vidTitle">
                    <h1>Videography</h1> 
                </div>
                <div className="row mb-5">
                </div>
                <div className= "row justify-content-center ">
                <div className="col-12 videowrapper">
            <YouTube
                videoId="lH3STqbFyR0"
                opts={opts}
                onReady={this._onReady}
            />
            </div>
            </div>
            </div>
            
            </React.Fragment>
      );
    }
  }
  
  export default Videography;
  