import React, { Component } from 'react';
import { link } from 'react-router-dom'
import { Jumbotron, Button, Image, Row, Col} from 'react-bootstrap'
import { Grid, Paper } from "@material-ui/core";
import './about.css'

const styles = {
    Paper: { padding: 40, marginTop: 10, marginBottom: 10, height: 220 }
};

export default props => 
<div>
<Grid container>
  <Grid item sm={12}>
      <Paper style={styles.Paper}> 
          <h1>ABOUT</h1>
      </Paper>
    </Grid>
    
    <Grid item sm>
     
    </Grid>
</Grid>
<Grid className="containerAbout">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">
    <Paper style={styles.Paper}> 
          <h1>ABOUT</h1>
      </Paper>
  </div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</Grid>

</div>
    
