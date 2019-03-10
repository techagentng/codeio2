import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Container,
  Button,
  Grid,
  Row,
  Col,
  Image
} from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to spreadingcare.com</h2>
          <h3>For people who want more</h3>
          <Link to="./About">
            <Button variant="primary">Goto about</Button>
          </Link>
        </Jumbotron>
      </Container>
    );
  }
}
