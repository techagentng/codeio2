import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default props =>
<AppBar position="static">
    <Toolbar>
      <ul>
      <li></li>
      </ul>
    <Typography variant="headline" color="inherit" gutterBottom>
          Spreading Care
    </Typography>
    </Toolbar>
    </AppBar>