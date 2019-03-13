import React, { Component } from "react";
import { link } from "react-router-dom";
import { Jumbotron, Button, Image, Row, Col } from "react-bootstrap";
import { Grid, Paper } from "@material-ui/core";
import "./about.css";

const styles = {
    Paper: { padding: 40, marginTop: 10, marginBottom: 10, height: 220 }
};

export default props => (
    <div>
        <Grid className="containerAbout">
            <div class="item">
                <Paper style={styles.Paper}>
                    <h1>ABOUT</h1>
                </Paper>
            </div>
        </Grid>
        
        <div className="containerConatct">
            <div className="item">
              <Paper style={styles.paper}>
                <h1>2222222</h1>
              </Paper>
            </div>
            
            <div className="item">
              <Paper style={styles.paper}>
                <h1>2222222</h1>
              </Paper>
            </div >
           
        </div>
        
        <div className="containerConatct">
            <div className="item">
              <Paper style={styles.paper}>
                <h1>2222222</h1>
              </Paper>
            </div>
            
            <div className="item">
              <Paper style={styles.paper}>
                <h1>2222222</h1>
              </Paper>
            </div >
           
        </div>
    </div>
);
