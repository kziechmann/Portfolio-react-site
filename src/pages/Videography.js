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
            <div className="container parallax_layer_foreground mt-5">
                <div className="row justify-content-center vidTitle">
                    <h1><img className="mb-2 mr-3" src="./images/fontawesome-free-5.7.2-web/svgs/solid/video.svg" width="50" alt="video icon"></img>  Videography</h1> 
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
  