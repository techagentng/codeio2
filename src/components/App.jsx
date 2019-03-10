import React, { Component } from "react";
//import { Footer, Header } from "./layout";
//import Exc from "./Exc";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Header2 from "./components/Home";
////import Footer from "./layout/Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Vacancies from "./Vacancies";
import Contact from "./Contact";
import Navbar from "./CustomNav";

export default class App extends Component {
 render() {
  return (
   
    <Router>
       <div>
        <Navbar />
         <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/vacancies" component={Vacancies}/>
        <Route path="/contact" component={Contact}/>
       </div>
    </Router>
  );
 }
}
