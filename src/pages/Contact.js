import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';

class Contact extends Component {

    state = {
        name:"",
        subject:"",
        body:"",
        submittable: false,
    }

    updateField(field,e){
        let toUpdate = {[field]: e.target.value, submittable: false}
        if(this.state.name.length >= 3 && this.state.subject.length >= 3 && this.state.body.length >= 8) {
            toUpdate['submittable'] = true
        }
        this.setState(toUpdate)
    }

    render() {
      return (
            <div className="container parallax_layer_foreground ">
                <div className="row justify-content-center mb-5">
                    <h1><img className="mb-2 mr-3" src="./images/fontawesome-free-5.7.2-web/svgs/regular/comment-dots.svg" width="50" alt="message icon"></img>  Contact Kevin</h1> 
                </div>
                <div className="row justify-content-center  mb-5 tile">
                <div className="col-6 ">
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className=" row justify-content-center"><h3>Your Name</h3></Form.Label>
                    <Form.Control type="email" placeholder="Joe Smith" onChange={e=>{this.updateField("name",e)}} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className=" row justify-content-center"><h3>Subject Line</h3></Form.Label>
                    <Form.Control type="text" placeholder="your subject here" onChange={e=>{this.updateField("subject",e)}}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className=" row justify-content-center"><h3>Message</h3></Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={e=>{this.updateField("body",e)}}/>
                </Form.Group>
                <div className=" row justify-content-center"> 
                     <Button disabled={this.state.submittable? "" : "disabled"} variant="dark" href={`mailto:?subject=${this.state.subject}&body=${this.state.body}, From: ${this.state.name}`}><h3>Send</h3>
                    </Button>
                </div>
               
                </Form>;
                </div>
                </div>
                <div className="about"></div>
            </div>
      );
    }
  }
  
  export default Contact;
  