import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Panel from '../panel/Panel'
import Input from "@material-ui/core/Input";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  textFieldInputProps: {
    textAlign: "right",
    fontSize: 50
  }
}))

const Calculator = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={0}>
      <Grid className={classes.grid} item xs={12} />
      <Grid className={classes.grid} item xs={4} />
      <Grid className={classes.grid} item xs={4}>
        <Input
          id="screen"
          className={classes.textField}
          margin="normal"
          classes={{
            input: classes.textFieldInputProps
          }}
          defaultValue={0}
        />
      </Grid>
      <Grid className={classes.grid} item xs={4} />
      <Grid className={classes.grid} item xs={12} />
      <Grid className={classes.grid} item xs={4} />
      <Grid className={classes.grid} item xs={4}>
        <Panel />
      </Grid>
      <Grid className={classes.grid} item xs={4} />
    </Grid>
  )
}

export default Calculator