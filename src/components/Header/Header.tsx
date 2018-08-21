import * as React from 'react';
import './Header.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const styles = (theme: any) => ({
  root: {
  },
  toolbar: {
    minHeight: 'auto',
    padding: '5px 30px'
  },
  logoContainer: {
    height: '40px',
    padding: theme.spacing.unit
  }
});

export default (props: any) => {
  const { classes } = props;  //state
  // const { } = props;  //dispatch

  return (
    <AppBar className={classes.root} position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoContainer}>
          <img src="logo.png" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
