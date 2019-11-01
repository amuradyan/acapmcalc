import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Panel from '../panel/Panel'
import Input from "@material-ui/core/Input"
import InputBase from "@material-ui/core/InputBase"
import pristineState from '../util/state'

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
  resultDisplayInputProps: {
    textAlign: "right",
    fontSize: 50,
    readOnly: true
  },
  exprDisplayInputProps: {
    textAlign: "right",
    fontSize: 20,
    readOnly: true,
  }
}))

const Calculator = () => {
  const classes = useStyles()
  const [state, setState] = useState(pristineState)

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
            input: classes.resultDisplayInputProps
          }}
          defaultValue={0}
          value={state.memory}
        />
      </Grid>
      <Grid className={classes.grid} item xs={4} />
      <Grid className={classes.grid} item xs={4} />
      <Grid className={classes.grid} item xs={4}>
        <InputBase
          disabled
          id="expression"
          className={classes.textField}
          margin="normal"
          classes={{
            input: classes.exprDisplayInputProps
          }}
          defaultValue={0}
          value={state.display}
        />
      </Grid>
      <Grid className={classes.grid} item xs={4} />
      <Grid className={classes.grid} item xs={12} />
      <Grid className={classes.grid} item xs={4} />
      <Grid className={classes.grid} item xs={4}>
        <Panel state={state} setState={setState}/>
      </Grid>
      <Grid className={classes.grid} item xs={4} />
    </Grid>
  )
}

export default Calculator