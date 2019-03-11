import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Home.css";
import { Paper } from "@material-ui/core";
import Grid from 'react-css-grid'
import { Link } from "react-router-dom";
import Healthcare from "./Healthcare"
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Card,
  Carousel,
  Col,
  Image
} from "react-bootstrap";
import image from "./pix.jpg";
import image2 from "./pix2.jpg";
const styles = {
    Paper: { padding: 40, marginTop: 10, marginBottom: 10 }
};

export default class Home extends Component {
  render() {
    return (
      <Fragment>
       
      <Grid gap={0}>
        <div className="press"><Button variant="primary" size="lg">
      Enquiry
    </Button></div>
        <div><img src={image} alt="pix" /></div>
        <div><img src={image2} alt="pix" /></div>
      </Grid>
  <Healthcare />
        
<Card className="bg-dark text-white">
  <Card.Img src="holder.js/100px270" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>;
        
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
      </Fragment>
     
          
    );
  }
}
