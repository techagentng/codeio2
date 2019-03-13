import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Home.css";
import { MDBBtn } from "mdbreact";
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
import dividerImg from "./dividerImg.jpg"
import woman from "./woman.jpg"
import fam from "./fam.jpg"
import man from "./man.jpg"
import runman from "./runman.jpg"
const styles = {
    Paper: { padding: 40, marginTop: 10, marginBottom: 10 }
};

export default class Home extends Component {
  render() {
    return (
      <Fragment>
       
      <Grid gap={0}>
  <div className="press">
    <Button variant="primary"  size="lg" >
      Book Appointment
    </Button>
  </div>
        
        <div><img src={image} alt="pix" /></div>
        <div><img src={image2} alt="pix" /></div>
      </Grid>
  <Healthcare />
        
<Card className="bg-dark text-white">
  <Card.Img src={ dividerImg } alt="divider-banner" />
  <Card.ImgOverlay>
  
    
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>;
        
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ woman }
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={runman}
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={man}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>;
      </Fragment>
     
          
    );
  }
}
