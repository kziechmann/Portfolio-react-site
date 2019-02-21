import React, { Component } from 'react';
import '../App.css';

class Photography extends Component {

    state = {images: {}}

   componentDidMount(){
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
          }
          
        const images = importAll(require.context('./resized', false, /\.(png|jpe?g|svg)$/));
         console.log(images)
         this.setState({images:images})
         console.log(this.state.images)
    }

    render() {
      return (
            <div className="container parallax_layer_foreground photography">
                <div className="mt-2"></div>
                <div className="row justify-content-center mb-3">
                        <h1> <img className="mb-2 mr-3" src="./images/fontawesome-free-5.7.2-web/svgs/solid/camera.svg" width="50" alt="camera icon"></img>  Photography </h1> 
                </div>
                <div className="row justify-content-center tile">
                {this.state.images? Object.keys(this.state.images).map(image=><img height="250px" className="mx-1 mt-1" src={this.state.images[image]}/>):""}
                </div>
            </div>
      );
    }
  }
  
  export default Photography;
  