import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap'
import '../App.css';

class Photography extends Component {

    state = {images: {}, showModal: false, currentImage: {}}
    

   componentDidMount(){
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
          }
          
        const images = importAll(require.context('./resized', false, /\.(png|jpe?g|svg)$/));
         this.setState({images:images})
    }

    handleClose(e) {
      this.setState({ showModal: false });
    }
  
    handleShow(image) {
      this.setState({ showModal: true ,currentImage:{[image]:this.state.images[image]}});
    }

    render() {
      return (
            <div className="container parallax_layer_foreground photography">
          
                <Modal className="modal" show={this.state.showModal} dialogClassName="modal-90w">
                  <Modal.Header closeButton onClick={()=>{this.handleClose()}}>
                    <Modal.Title>{String(Object.keys(this.state.currentImage)).split("/")[3]}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row justify-content-center">
                    <img height="450px" className="ml-1 mt-1" src={Object.values(this.state.currentImage)[0]}/>
                    </div>
                  </Modal.Body>
                </Modal> 
                <div className="mt-4"></div>
                <div className="row justify-content-center mb-3">
                        <h1> <img className="mb-2 mr-3" src="./images/fontawesome-free-5.7.2-web/svgs/solid/camera.svg" width="50" alt="camera icon"></img>  Photography </h1> 
                </div>
                <div className="row justify-content-center tile">
                {this.state.images? Object.keys(this.state.images).map((image, idx)=><img onClick={()=> {this.handleShow(image)}} key={idx} height="250px" className="mx-1 mt-1" src={this.state.images[image]}/>):""}
                </div>
            </div>
      );
    }
  }
  
  export default Photography;
  