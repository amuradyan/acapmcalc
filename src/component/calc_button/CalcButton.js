import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%'
  }
}))

const createInner = (caption, classname, handleClick) => {

  return (typeof caption) === 'undefined' ? React.Fragment : (
    <Button variant='outlined' className={classname} onClick={() => handleClick(caption)}>
      {caption}
    </Button>
  )
}

const CalcButton = ({ caption, handleClick }) => {
  const classes = useStyles()
  const inner = createInner(caption, classes.button, handleClick)

  return (
    <Grid item xs={3}>
      {inner}
    </Grid>
  )
}

export default CalcButton