import React, { Component, Fragment } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Grid, Paper } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import "./contact.css";
//import About from './About'
//import Services from './Services'
//import Vacancies from './Vacancies'

const styles = {
  Paper: { padding: 40, marginTop: 10, marginBottom: 10 }
};

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="contact12">
          <div className="item">
            <Paper style={styles.Paper}>
              <h1>CONTACT US</h1>
            </Paper>
          </div>
        </div>
        <div className="containerConatct">
          <div className="item">
            <Paper>
              <Form className="pad">
                
                
                 <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="email@example.com"
                    />
                  </Col>
                </Form.Group>  
              
                <Col>
                  
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
                </Col>
                
               
              </Form>
        
            </Paper>
          </div>

          <div className="item">
            <Paper style={styles.paper}>
              <Form className="pad">
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="email@example.com"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
              </Form>
            </Paper>
          </div>
        </div>
      </Fragment>
    );
  }
}
