import React, { Component } from "react";
import Grid from "react-css-grid";
import image2 from "./sss.png";
import { Image } from "react-bootstrap";
import image3 from "./sss.png";

export default props => (
 <Grid>
  <div className="styleDiv">
 <img src={image3} className="sImage" alt="gender" />
 <h1>Providing Proffesional Health Care Service</h1>
    <p>At Anointed Healthcare Ltd, we aim to provide the best quality service for all client, boasting a variety of excellent services to cater to every need. We make sure to provide a high quality of customer service in every area that we cover and are confident to answer all enquiries to your satisfaction. Our well trained team of caregivers understand and uphold the value of promoting and maintaining the independence of our clients.  We offer services such as Personal Care, Domestic Care, Night Care service, Supported Living, Elderly care, assisted living and comforting care. It doesn’t matter that what type of Health Care Services you may need, we can help you in a precise way. </p>
  </div>
 </Grid>
);
