import React from "react";
import './header2.css'
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import { AppBar, Toolbar, Typography } from '@material-ui/core';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

export default props => (
<header className="toolbar">
  
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
              <div className="toolbar_navigation-items">
                <ul>
                   <li><a href="./">Home</a></li>
                   <li><a href="./">About</a></li>
                   <li><a href="./">Contact</a></li>
                </ul>
              </div>
        </nav>
  
</header>  
);
