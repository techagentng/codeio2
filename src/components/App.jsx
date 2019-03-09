import React, { Component, Fragment } from "react";
//import { Footer, Header } from "./layout";
//import Exc from "./Exc";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header2 from "./components/Home";
////import Footer from "./layout/Footer";
//import Services from "./Services";
//import Vacancies from "./Vacancies";
//import Contact from "./Contact";

export default class App extends Component {
 render() {
  return (
    <Fragment>
     <Header2 />
    </Fragment>
  );
 }
}
