import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
  }
}));

const Header = () => {
  const classes = useStyles()

  return <Paper className={classes.paper} square={true}><b>acapm</b> calculator</Paper>
}

export default Header;