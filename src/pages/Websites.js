import React, { Component } from 'react';
import '../App.css';

class Websites extends Component {
    render() {
      return (
            <div className="container parallax_layer_foreground ">
                <div className="row justify-content-center portfolio">
                    <h1>Web Portfolio</h1> 
                </div>
                <div className="row display-inline-block justify-content-center tile mb-3">
                    <div className="col-6">
                        <p>Bus to Show is a non-profit organization dedicated to providing a safe means of transportation to and from large events in Colorado. Our team designed a new full stack reservation application for ticket booking, and concert information with ease of use foremost in mind.</p>
                    </div>
                    <div className="col-6">
                        <a href="https://bus-to-show-q3.surge.sh/"><img  className="content_img" src="./images/BusToShow.png" alt="BusToShow.org" /></a>
                    </div>
                </div>
                <div className="row display-inline-block justify-content-center tile mb-3">
                    <div className="col-6">
                        <a href="https://influx-news.herokuapp.com/"><img  className="content_img" src="./images/Influx.png" alt="Influx App" /></a>
                    </div>
                    <div className="col-6 mt-5">
                        <p>Influx allows the user to create a customized newsfeed aggregated from a variety of trustworthy sources. Users are able to set keyword tags that directly inform their feed as well as filter their feed by news source or language.</p>
                    </div>
                </div>
                <div className="row display-inline-block justify-content-center tile mb-3">
                    <div className="col-6 mt-4">
                        <p>PickMovie generates a random suggestion for a top-rated movie to watch based on selected genres.
                            Embedded in the page is an I-frame youtube player for the trailer, the poster image, and various information
                            about the movie.
                        </p>
                    </div>
                    <div className="col-6">
                        <a href="https://pickmovie.surge.sh/Index.html" ><img className="content_img" src="./images/PickMovie.jpg" alt="PickMovie App" /></a>
                    </div>
                </div>
            </div>
      );
    }
  }
  
  export default Websites;
  